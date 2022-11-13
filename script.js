'use strict';
//Selecting score elements + dice element with queryySelector and getElementById
const score0Dom = document.querySelector('#score--0');
const score1Dom = document.getElementById('score--1');
const diceImg = document.querySelector(".dice");
const BtnRoll = document.querySelector(".btn--roll")
const BtnNew = document.querySelector(".btn--new")
const BtnHold = document.querySelector(".btn--hold")
const ply0 = document.querySelector('.player--0');
const ply1 = document.querySelector('.player--1');
const active = document.querySelector('.player--active');


//Creating 2 variables to hold the current score number
let currentScore0 = document.getElementById('current--0');
let currentScore1 = document.getElementById('current--1');



let holdScore0 = 0
let holdScore1 = 0
let currentScore = 0;
let plyScore0 = 0;
let plyScore1 = 0;

//Initial values of the starting game
score0Dom.textContent = 0;
score1Dom.textContent = 0;
diceImg.classList.add('hidden');
// diceImg.classList.remove('hidden')

//Testing the random number to be 6 and under outside of the event handler function 
// const ranNum = Math.trunc(Math.random() * 6) + 1;
// console.log(ranNum);

//Creating the function that will go into the eventListener of BtnRoll
const handleRoll = () => { 
    //First we have to generate a random dice roll using Math.random and Math.trunc to round the number
    const ranNum = Math.trunc(Math.random() * 6) + 1;
    // console.log(ranNum);
    diceImg.classList.remove('hidden');
    //Then display the dice
    //The trick to changing the photo of the dice is to use the src property when manipulating diceImg
    //This way of manipulating the img src is very dynamic by using the ranNum with back ticks to have the img change on the fly to whatever ran num is 
    //A train of thought could be having some comparison logic and if its true then change the src of the img but this is very effecient 
    diceImg.src = `dice-${ranNum}.png`;
    
    //If random number is 1 then switch to the next player 
        if(ranNum != 1){
            // ply0.classList.remove('player--active');
            // ply1.classList.add('player--active');
            if(ply0.classList.contains('player--active')){
                currentScore += ranNum;
                //Testing current score to add and equal ranNum
                console.log(currentScore)
                currentScore0.textContent = currentScore;
            }else if(ply1.classList.contains('player--active')){
                currentScore += ranNum;
                currentScore1.textContent = currentScore
            }
                
            
        }
    //Have to add the else if as the logic is if its a 1 roll and the cdd class contains player--active
        else if(ranNum == 1){
            currentScore = 0
            if(ply0.classList.contains('player--active')){
                ply0.classList.remove('player--active');
                ply1.classList.add('player--active');
                currentScore0.textContent = currentScore
            }else{
                ply1.classList.remove('player--active');
                ply0.classList.add('player--active');
                currentScore1.textContent = currentScore
            }
        }   

}

//within this event handler function we want to move the current input into the players poitns 
// dont have to worry about if it rolls a 1 as that event is handled in the roll dice btn 
// we also want to switch the players if they chose to hold the number 
// also if they hold and their number is 100 or above we call winner css styling
const handleHold = () =>{
    if(ply0.classList.contains('player--active')){
        holdScore0 += currentScore
        score0Dom.textContent =  holdScore0;
        ply0.classList.remove('player--active');
        ply1.classList.add('player--active');
        currentScore = 0;
        currentScore0.textContent = 0
            if(holdScore0 >= 100){
                ply0.classList.add('player--winner');
                ply0.classList.add('player--winner .name');
            }
    }
    else if(ply1.classList.contains('player--active')){
        holdScore1 += currentScore
        score1Dom.textContent = holdScore1;
        ply1.classList.remove('player--active');
        ply0.classList.add('player--active');
        currentScore = 0;
        currentScore1.textContent = 0;
            if(holdScore1 >= 100){
                ply1.classList.add('player--winner');
                ply1.classList.add('player--winner .name');
            }
    }
}
//When thinking about event handlers its when an action happens like a click or even a key press

//Rolling the dice logic
//Event listening with the action 'click' and the function attached is defined outside 
BtnRoll.addEventListener('click', handleRoll)

//Hold button event listener 
BtnHold.addEventListener('click', handleHold)





