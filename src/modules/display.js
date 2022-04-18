const airUrl = new URL('../img/air_bison.png', import.meta.url);
const earthUrl = new URL('../img/earth_mole.png', import.meta.url);
const fireUrl = new URL('../img/fire_dragon.webp', import.meta.url);
const waterUrl = new URL('../img/water_turtle.webp', import.meta.url);

const img = document.getElementById("image");
img.style.width = "350px";

//Used to start game, checks for correct input first
export function submitInfo(name, type){
    const error = document.querySelector("#error-box");
    
    if(name == ""){
        error.innerText = "You need to name your Tamagotchi to start.";
        error.style.color = "red";
        return false;
    }
    else {
        hideStart();
        startGame(name, type);
        return true;
    }
}

function hideStart(){
    const startdiv = document.querySelector("#start-menu");
    startdiv.style.display = "none";
}

function startGame(name, type){
    //Reveals hidden <main> section
    document.querySelector("main").style.display = "block";

    //Sets name line
    const nameBox = document.getElementById("name-box");
    nameBox.innerText = name;

    const img = document.getElementById("image");

    //Choose an image based on element type chosen
    if (type == "air"){img.src = airUrl}
    else if (type == "earth"){img.src = earthUrl}
    else if (type == "fire"){img.src = fireUrl}
    else {img.src = waterUrl}
}

//Used in Tamagotchi class when it dies
export function gameOver(){
    const deadUrl = new URL('../img/dead.png', import.meta.url);
    document.querySelector("img").src = deadUrl;

    document.getElementById("game-ui").style.display = "none"; //Hides all elements in the game's ui section
}