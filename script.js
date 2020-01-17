
$(document).ready(function() {
    let quiz = $("#quiz");
    let timer = $("#timer");
    let timePenalty = $("#penalty");
    let responseElement = $("#response");
    let initialsInput = $("#input");
   

    let index = 0;
    let penalty = 5;
    let timeLimit = questions.length * 15; // gives 15 seconds for each question
    let finished = false;
    

    $("#done").hide();
    
    CreateQuiz(index);
    
    // Subtracts 1 from timeLimit variable every second until timeLimit equals zero
    setInterval(function Timer() {
        timePenalty.text("");
        if (!finished) {
            if (timeLimit <= 0) {
                timer.text("Times up!");
                quiz.empty();
                EnterInitials();
                finished = true;
            } else {
                timeLimit--;
                timer.text("Time remaining: " + timeLimit);
            }
        }
        
    }, 1000);
    
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
            var textItem = $("<button>");
            textItem.text((i + 1)  + ". " +  list[i]);
            textItem.attr('answer', list[i]);
            textItem.addClass("answer");
            newItem.append(textItem);
            quiz.append(newItem);
        }
    }

    function clearResponse(){
       responseElement.text("");
    }

    $(document).on('click', ".answer", function() {
        
        if (timeLimit > 0 && index < questions.length) {
            if ($(this).attr('answer') == questions[index].answer) {
                responseElement.text("Correct!");
            } else {
                responseElement.text("Incorrect.");
                timeLimit -= penalty;
                timePenalty.text("-" + penalty + " seconds.");
            }

            setTimeout(clearResponse,1500);
            
            index++;
           
            quiz.empty();
            if(index < questions.length) {
                CreateQuiz(index);
            } else {
                
                finished = true;
                EnterInitials();
            }
        }
    });

    
    function EnterInitials() {
        initialsInput.val('');
        $("#done").show();
        $("#final").text("Your final score is " + timeLimit);
    }


    $(document).on("click", "#enter", function() {
        let user = {
            initials: initialsInput.val(),
            score: timeLimit
        }
        if (localStorage.getItem(user.initials) == null) {
            localStorage.setItem(user.initials, user.score);
        } else if (user.score > localStorage.getItem(user.initials) ) {
            
            localStorage.setItem(user.initials, user.score);
        }
        $(location).attr('href',"highscores.html");
    });

});






