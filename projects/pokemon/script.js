const random = Math.floor(Math.random() * 152); //getting a random pokemon from first gen
const url = "https://pokeapi.co/api/v2/pokemon/" + random; // creating the url for the request
//console.log(url);

async function game(){  //waiting for the call, async because using fetch
    
    const response = await fetch(url); //await to wait for the response
    const res = await response.json(); //await to get the json response
    //console.log(res);

    
    $(".output").addClass("hidden").removeClass("poke");    //swaping the classes for animation 
    setTimeout(function(){
        $(".output").attr("src", "flash.png").removeClass("hidden"); //changing the image to flash
        setTimeout(function(){
            $(".output").addClass("hidden");
        }, 50); //setting timeout inside timeout because the way it gets ignored outside
    }, 1000);
    
   setTimeout(function(){
    $(".output").attr("src", res.sprites.versions['generation-v']['black-white'].animated.front_default); //changing the source to the animation from the api response
    $(".output").removeClass("hidden"); //the image is still hidden so unhide it
    $(".name").text(res.name); // adding the text
   }, 2000);

}
