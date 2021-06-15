var pngCats = ["cat", "kitty"];
var randomNumberOne = Math.floor(Math.random() * 2);

if ($(document).width() < 1000){
    $(".top").hide();
    $("." + pngCats[randomNumberOne]).show();
    if(randomNumberOne == 0){
        $(".coding").show().addClass("coding-update").removeClass("coding");
    }else{
        $(".coding").show().removeClass("coding").css("width", "15%");
    }
    $("." + pngCats[randomNumberOne]).addClass("mobile-img").removeClass(pngCats[randomNumberOne]);
}else{
    $(".top").show();
}
