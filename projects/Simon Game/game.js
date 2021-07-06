const buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
var level = 0;

function nextSequence(){ //adding the next color to the sequence
    $("h1").text("Level " + level);
    level += 1;
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber]; //adding a random color to the sequence
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

$(".btn").click(function(e){ //adding the input of the user
    var userClickedColor = e.target.id;
    animatePress(userClickedColor);
    userClickedPattern.push(e.target.id); //adding the input to the sequence
    playSound(userClickedColor);
    checkAnswer(userClickedPattern.length - 1); //calling the check answer function with the index
});

function playSound(name){
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
} //to play the sound

function animatePress(color){
    $("#" + color).addClass("pressed");
    setTimeout(function(){
        $("#" + color).removeClass("pressed");
    }, 100); // animation
}

$(".start").click(function(){
    $(".start").text("Restart");
    if (level == 0){
        nextSequence();
    }else{
        reset();
    }
}); //checking if the start button is pressed 
$(document).keypress(function(e){
    if (level == 0){
        nextSequence();
    }
}); //starting the game

function checkAnswer(currentLevel){ //checking the answer
    console.log(userClickedPattern);
    console.log(gamePattern);
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]){
        if (currentLevel == level - 1){
            while(userClickedPattern.length >0){
                userClickedPattern.pop();
            }
            setTimeout(function(){
                nextSequence();
            }, 1000); //if the sequence is correct we continue
        }
    }else{
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass('game-over');
        setTimeout(function(){
            $("body").removeClass('game-over');
        }, 100); //sad for you if you lost the game
        playSound("wrong");
        reset();
    }
}
function reset(){
    $(".start").text("Start");
    level = 0;
        while(gamePattern.length > 0){
            gamePattern.pop();
        }
        while(userClickedPattern.length >0){
            userClickedPattern.pop();
    }
    $("h1").text("Level " + level); // resetting the entire game and variables
}

