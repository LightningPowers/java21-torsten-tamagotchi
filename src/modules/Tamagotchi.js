import { gameOver } from "./display.js";

export class Tamagotchi{

    #happiness = 5;
    #hunger = 5;
    #happinessIntervalID;
    #hungerIntervalID;

    constructor(){}

    runGame(){
        this.#happiness = 5;
        this.#hunger = 5;

        document.getElementById("happ-text").innerText = "Happiness: " + this.#happiness + "   ";
        document.getElementById("hung-text").innerText = "Hunger: " + this.#hunger;

        this.#happinessIntervalID = setInterval(this.#updateHappiness.bind(this), 5000);
        this.#hungerIntervalID = setInterval(this.#updateHunger.bind(this), 5000);
    }
    #updateHappiness(){
        this.#happiness--;
        this.#checkGameOver();
        document.getElementById("happ-text").innerText = "Happiness: " + this.#happiness + "   ";
    }
    #updateHunger(){
        this.#hunger++;
        this.#checkGameOver();
        document.getElementById("hung-text").innerText = "Hunger: " + this.#hunger;
    }
    //Stops the game if one of two fail criteria are met
    #checkGameOver(){
        if (this.#happiness <= 0 || this.#hunger >= 10){
            gameOver();
        }
    }
    playAction(){
        if (this.#happiness < 9){
            this.#happiness += 2;
            document.getElementById("happ-text").innerText = "Happiness: " + this.#happiness + "   ";
        }
        else if (this.#happiness == 9){
            this.#happiness += 1;
            document.getElementById("happ-text").innerText = "Happiness: " + this.#happiness + "   ";
        }
        else{
            document.getElementById("status-text").innerText = "It cannot get anymore happy!"
        }
    }
    feedAction(){
        if (this.#hunger <= 2 && this.#hunger > 0){
            this.#hunger = 0;
            document.getElementById("hung-text").innerText = "Hunger: " + this.#hunger;
        }
        else if (this.#hunger > 2 &&this.#hunger < 9){
            this.#hunger -= 2;
            document.getElementById("hung-text").innerText = "Hunger: " + this.#hunger;
        }
        else {
            document.getElementById("status-text").innerText = "It is unable to get anymore food in its belly!"
        }
    }
}