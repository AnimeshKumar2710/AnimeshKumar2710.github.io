//Creating a random number to make it a bit more fun to see which cat will show up on phone.
//You can also you Sass for this, but i needed practice for js
var pngCats = ["cat", "kitty"];
var randomNumberOne = Math.floor(Math.random() * 2);

if ($(document).width() < 1000){ // checking the screen size
    $(".top").hide(); // hiding all the img png in top container for mobile phone
    $("." + pngCats[randomNumberOne]).show();
    if(randomNumberOne == 0){ // the coding img needs different css for different cats. so the condition
        $(".coding").show().addClass("coding-update").removeClass("coding");    // Remove the class after adding, or else things might not work the way you want them to. 
    }else{
        $(".coding").show().removeClass("coding").css("width", "15%");
    }
    $("." + pngCats[randomNumberOne]).addClass("mobile-img").removeClass(pngCats[randomNumberOne]);
}else{
    $(".top").show(); //Show for desktop
}


//if you didn't know by now, I like cats.
