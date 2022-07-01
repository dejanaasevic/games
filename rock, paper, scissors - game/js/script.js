const userChoiceDisplay= document.getElementById('player-choice');
const computerChoiceDisplay=document.getElementById('computer-choice');
const resultDisplay =document.getElementById('result');
const possibleChoices =document.querySelectorAll('img');
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e)=>{
    userChoice=e.target.id;
    userChoiceDisplay.innerHTML=userChoice;
    generateComputerChoice();
}));

function generateComputerChoice(){
    var randomNumber= Math.floor(Math.random()*possibleChoices.length);
    computerChoice=possibleChoices[randomNumber].id;
    computerChoiceDisplay.innerHTML=computerChoice;
    generateResult();
}

function generateResult(){
    if(userChoice === computerChoice){
        result="it's tied!";
    }
    else if (userChoice==='rock' && computerChoice==='paper' || userChoice==='paper' && computerChoice==='scissors' || userChoice==='scissors' && computerChoice==='rock'){
        result='you lost, try again!';
    }
    else{
        result='you win!';
    }
    resultDisplay.innerHTML=result;
}