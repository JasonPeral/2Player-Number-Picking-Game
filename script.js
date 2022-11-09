'use strict';


//Selecting score elements + dice element with queryySelector and getElementById
const score0Dom = document.querySelector('#score--0');
const score1Dom = document.getElementById('score--1');
const diceImg = document.querySelector(".dice");
const BtnRoll = document.querySelector(".btn--roll")
const BtnNew = document.querySelector(".btn--new")
const BtnHold = document.querySelector(".btn--hold")


//Initial values of the starting game
score0Dom.textContent = 0;
score1Dom.textContent = 0;
diceImg.classList.add('hidden');

    // let ranNum = Math.random(1, 7);
    // ranNum = ranNum * 100 /10 
    // console.log(Math.round(ranNum))

    const ranNum = Math.random(7) * 100 / 10 ;
    console.log(ranNum);
//Creating the function that will go into the eventListener of BtnRoll
const handleRoll = () => { 
    //First we have to generate a random dice roll 
    const ranNum = Math.random(6) * 6;
    console.log(ranNum);
    //Then display the dice

    //If random number is 1 then switch to the next player 
}



//Rolling the dice logic
BtnRoll.addEventListener('click', handleRoll)





