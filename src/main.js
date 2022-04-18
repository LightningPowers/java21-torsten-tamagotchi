import {submitInfo} from "./modules/display.js";
import { Tamagotchi } from "./modules/Tamagotchi.js";

const btn = document.getElementById("start-btn"); 
const playbtn = document.getElementById("play-btn");
const feedbtn = document.getElementById("feed-btn");

const tmg = new Tamagotchi();

//Getting inputs about Tamagotchi + starts the game
btn.addEventListener("click", function(){
    const nameinput = document.getElementById("name-input").value;
    const typeinput = document.getElementById("type").value;

    const hasGameStarted = submitInfo(nameinput, typeinput);
    console.log(hasGameStarted);

    if (hasGameStarted){
        tmg.runGame();
    }
})

//Play with Tamagotchi
playbtn.addEventListener("click", function(){
    tmg.playAction();
    console.log("TEST");
})

//Feed Tamagotchi
feedbtn.addEventListener("click", function(){
    tmg.feedAction();
})
