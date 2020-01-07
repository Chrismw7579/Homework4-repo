let quiz = $("#quiz");



// test questions
let questions = ['first', 'second', 'third'];
let answer = "third";


let guess = -1;

CreateQuiz(questions);

function CreateQuiz(list) {
    
    for (var i = 0; i < list.length; i++) {
        var newItem = $("<div>"); 
        newItem.text(list[i]);
        quiz.append(newItem);
        // newItem.on("click", function(){
        //    if (list[i] == answer) {
        //        console.log("Correct");
        //    } else {
        //        console.log("Incorrect");
        //    }
        // })
    }
}




