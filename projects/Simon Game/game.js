const buttonColors = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
var level = 0;

function nextSequence(){
    $("h1").text("Level " + level);
    level += 1;
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChosenColor);
    $("#" + randomChosenColor).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
}

$(".btn").click(function(e){
    var userClickedColor = e.target.id;
    animatePress(userClickedColor);
    userClickedPattern.push(e.target.id);
    playSound(userClickedColor);
    checkAnswer(userClickedPattern.length - 1);
});

function playSound(name){
    var sound = new Audio("sounds/" + name + ".mp3");
    sound.play();
}

function animatePress(color){
    $("#" + color).addClass("pressed");
    setTimeout(function(){
        $("#" + color).removeClass("pressed");
    }, 100);
}

$(".start").click(function(){
    $(".start").text("Restart");
    if (level == 0){
        nextSequence();
    }else{
        reset();
    }
    l
})
$(document).keypress(function(e){
    if (level == 0){
        nextSequence();
    }
});

function checkAnswer(currentLevel){
    console.log(userClickedPattern);
    console.log(gamePattern);
    if (userClickedPattern[currentLevel] == gamePattern[currentLevel]){
        if (currentLevel == level - 1){
            while(userClickedPattern.length >0){
                userClickedPattern.pop();
            }
            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    }else{
        $("h1").text("Game Over, Press Any Key to Restart");
        $("body").addClass('game-over');
        setTimeout(function(){
            $("body").removeClass('game-over');
        }, 100);
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
    $("h1").text("Level " + level);
}

