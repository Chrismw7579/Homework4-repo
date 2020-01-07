
$(document).ready(function() {
    let quiz = $("#quiz");



    let index = 0;
    let score = 0;
    let penalty = 5;
    
    CreateQuiz(index);
    
    
    
    
    function CreateQuiz(index) {
        let list = questions[index].choices;
        let newDiv = $("<div>");
        let newTitle = $("<span>");
    
        newTitle.addClass("title");
        newTitle.text(questions[index].title);
        newDiv.append(newTitle);
        quiz.append(newTitle);
        for (var i = 0; i < list.length; i++) {
            var newItem = $("<div>");
            var textItem = $("<span>");
            textItem.text(list[i]);
            textItem.addClass("answer");
            newItem.append(textItem);
            quiz.append(newItem);
        }
    }
    
    $(".answer").on("click", function() {
        
        if ($(this).text() == questions[index].answer) {
            console.log("Correct!");
            score++;
            console.log("score " + score);
        } else {
            console.log("Incorrect.")
        }
    
        index++;
        quiz.empty();
        CreateQuiz(index);
    })



    
})






