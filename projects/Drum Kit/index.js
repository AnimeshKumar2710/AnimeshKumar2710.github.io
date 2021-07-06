//Using DOM to make this page work

drums = document.querySelectorAll(".drum"); // this will get all the buttons for us

for(var i = 0; i < drums.length; i++){  //adding click listener to every button
    drums[i].addEventListener("click", function(){
        makeSound(this.innerHTML);  //calling the function for making the correct sound
        buttonAnimation(this.innerHTML);    //for the animation
    });
}
document.addEventListener("keydown", function(event){   //this is the keydown event so to get to know if the keyboard is pressed to do the same thing as click 
    makeSound(event.key);
    buttonAnimation(event.key);
});
function makeSound(key){
    switch (key){ //switch always works
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break; 
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
        var kick = new Audio("sounds/snare.mp3");
        kick.play();
        break;
        default:
            console.log("Please don't mess with someone elses code, its rude.");
    }
}
function buttonAnimation(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function(){ //run the code after 100ms
        activeButton.classList.remove("pressed");
    }, 100);
    
}
