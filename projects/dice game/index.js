var randomNumber1 = Math.floor(Math.random() * 6) + 1;  //geting a random number for first dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;  //getting a random number for second dice
var img1 = document.getElementsByClassName("img1")[0];  //getting the first image
img1.src = "images/dice" + randomNumber1 + ".png";      //setting the first image
var img2 = document.getElementsByClassName("img2")[0];  //getting the second image
img2.src = "images/dice" + randomNumber2 + ".png";      //setting the second image

if (randomNumber1 > randomNumber2){ 
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins!"; 
}else if (randomNumber1 < randomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins!";
}else{
    document.getElementsByTagName("h1")[0].innerHTML = "Draw!";
}   //checking who won