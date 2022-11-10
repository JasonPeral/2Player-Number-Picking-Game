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
    console.log(ranNum);
    diceImg.classList.remove('hidden');
    //Then display the dice
    //The trick to changing the photo of the dice is to use the src property when manipulating diceImg
    //This way of manipulating the img src is very dynamic by using the ranNum with back ticks to have the img change on the fly to whatever ran num is 
    //A train of thought could be having some comparison logic and if its true then change the src of the img but this is very effecient 
    diceImg.src = `dice-${ranNum}.png`;
    
    //If random number is 1 then switch to the next player 
    if(ranNum == 1 && ply0.classList.contains('player--active')){
        ply0.classList.remove('player--active');
        ply1.classList.add('player--active')
    }
    //Have to add the else if as the logic is if its a 1 roll and the cdd class contains player--active
    else if(ranNum == 1 && ply1.classList.contains('player--active')){
        ply1.classList.remove('player--active');
        ply0.classList.add('player--active')
    }
}


//When thinking about event handlers its when an action happens like a click or even a key press

//Rolling the dice logic
//Event listening with the action 'click' and the function attached is defined outside 
BtnRoll.addEventListener('click', handleRoll)





