
function newQuestion(params) {
    var temp = {
        question:  params[0],
        choices: params[1],
        correctAnswer: params[2]
    };
    return temp;
}
var allQuestions = [
    ["<p><b>Question 1:</b><br/> Do you have lost interest in various aspects of life that used to be important to you?<p/>", ["Not At all", "You talking of aspects I have lost interest in life !","Quite a lot"], 2],
    ["<p><b>Question 2:</b><br/>Do you feel much more annoyed by disturbing things around you?<p/>", ["Not at all", "I feel like slapping people doing annoying things around me","Quite a lot"], 1],
    ["<p><b>Question 3:</b><br/>Feel sleepy most of time?<p/>", ["Not at all", "Sleeping is my hobby","Feel regularly tired and thus sleep a lot"], 1],
    ["<p><b>Question 4:</b><br/>Do you find difficulty in making decisions?<p/>", ["Not at all", "uh! The decisions I make , is always right", "A lot of difficulty"], 1],
    ["<p><b>Question 5:</b><br/>Do you feel your concentration decreasing day by day?<p/>", ["Yes", "No" , "Ah! Now you are playing with my mind"], 2],
    ["<p><b>Question 6:</b><br/>Poor appetite or overating?<p/>", ["I have started eating more than my diet", "I does not feel hunger","Normal-balanced diet I am taking"], 1],
    ["<p><b>Question 7:</b><br/>Any failure constantly haunt you?<p/>", ["Oh! There is no word like failure in my life", "It even haunts me in sleep", "Yeah, I have overcome my previous failure"], 1],
    ["<p><b>Question 8:</b><br/>Do your mind stumble upon thoughts of hurting yourself?<p/>", ["Never, I am the boss , will never hurt myself", "sometimes", "Quite a lot"], 1],
    ["<p><b>Question 9:</b><br/>Do you regularly require breaks?<p/>", ["Break is life", "Quite a lot", "I am Boss, never require break"], 2],
    ["<p><b>Question 10:</b><br/>Does your mind create different fascination regularly?<p/>", ["Daydreaming is my hobby", "Yes, very frequently", "Ok Ok ! It does "], 1]
   ].map(newQuestion);

var total = 0, number = 0, totalQuestions = allQuestions.length, answers = [];

$(document).ready(function() {

    function newQuestionAnswers() {
        $("#content").fadeOut(500, function() {
            $("#answers").empty();
            if (number < totalQuestions)
                $("#questCount").text("Question: " + (number + 1) + " of 10");
            var query = allQuestions[number];
            $("#question").html(query.question);
            for(var i = 0; i < query.choices.length; i++)
                $("#answers").append("<input type='radio' name='answers' id='radio" + i + "' value='answer" + i
                    + "'><label for='test" + i + "'>" + query.choices[i] + "</label><br>");
            if(answers.length > number)
                $("#radio" + answers[number]).prop("checked", true);
        });
        $("#content").fadeIn(500);
    }
    function checkAnswer() {
        for(var i = 0; i < $("input").length; i++) {
            if ($("#radio" + i).is(":checked")) {
                answers[number] = i;
                break;
            }
            else if ( i === $("input").length -1 && !$("#radio" +i).is(":checked")) {
                $("#next").after("<h3><p id='warning'>* Please select an answer and then click next</p></h3>");
                return false;
            }
        }
        var query = allQuestions[number];
        if($("#radio" + query.correctAnswer).is(":checked"))
            updateScore(10);
        number += 1;
        return true;
    }
    function finalScore() {
        $("#score").text("Final Score: " + total + "/" + totalQuestions * 10).show(1000);
        $("#question, #answers, #questCount, #next, #back").hide(10);
        if (total > 80)
         $("#result1").show(1000);
         if (total >=60 && total <=80)
         $("#result2").show(1000);
        if (total >= 30 && total <60)
         $("#result3").show(1000);
         if(total<30)
          $("#result4").show(1000);
    }
    function updateScore(change) {
        total += change;
        $("#score").text("Score: " + total);
    }
    $("#back").hide();
    $("#next").hide();
    $("#startagain").hide();
    $("#score").hide();
    $("#bar10").hide();
    $("#result1").hide();
    $("#result2").hide();
    $("#result3").hide();
    $("#result4").hide();
    $("#start").on('click', function() {
        $("#start").hide();
        $('#h4Start').hide(1000);
         $("#next").show(1000);
        $("#bar").width('5%');
        newQuestionAnswers();
        updateScore(0);
    });
    $("#next").on('click', function() {
        $("#warning").remove();
        if(checkAnswer()) {
            if (number < totalQuestions)
                newQuestionAnswers();
            else
                finalScore();
        }
        if (number > 0)
            $("#bar").width('10%');
        if (number > 1)
        $("#bar").width('20%');
        if (number > 2)
        $("#bar").width('30%');
        if (number > 3)
        $("#bar").width('40%');
        if (number > 4)
        $("#bar").width('50%');
        if (number > 5)
        $("#bar").width('60%');
        if (number > 6)
        $("#bar").width('70%');
        if (number > 7)
        $("#bar").width('80%');
        if (number > 8)
        $("#bar").width('90%');
        if (number > 9)
        $("#bar").width('100%');
    });
});
