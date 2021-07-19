const random = Math.floor(Math.random() * 152);
const url = "https://pokeapi.co/api/v2/pokemon/" + random;
console.log(url);

async function game(){
    
    const response = await fetch(url);
    const res = await response.json();
    console.log(res);

    
    $(".output").addClass("hidden").removeClass("poke");
    setTimeout(function(){
        $(".output").attr("src", "flash.png").removeClass("hidden");
        setTimeout(function(){
            $(".output").addClass("hidden");
        }, 50);
    }, 1000);
    
   setTimeout(function(){
    $(".output").attr("src", res.sprites.versions['generation-v']['black-white'].animated.front_default);
    $(".output").removeClass("hidden");
    $(".name").text(res.name);
   }, 2000);

}