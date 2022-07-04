const userChoiceDisplay= document.getElementById('player-choice');
const computerChoiceDisplay=document.getElementById('computer-choice');
const resultDisplay =document.getElementById('result');
const possibleChoices=document.getElementsByClassName('choice');
const titleDisplay=document.getElementById('gametitle');
const instructionDisplay=document.getElementById('instruction');
    

var energycount=3;
let energyDisplay;
let userChoice;
let computerChoice;
let computerChoiceImageSrc;
let result;

if(energycount===3 || energycount===2 || energycount===1){
   initializeGame();
}
if(energycount===0){
    gameOver();
}


function gameOver(){
    titleDisplay.innerHTML='game over';
    instructionDisplay.innerHTML='click the button to play again!';
    
    const btnDisplay=document.getElementById('againbtn');
    let btn =document.createElement('button');
    btn.innerHTML='start again!';
    btn.addEventListener('click',(e)=>{
        energycount=3;
        energyDisplay='your energy: ♡ ♡ ♡';
        document.getElementById('energy').innerHTML=energyDisplay;
        titleDisplay.innerHTML='rock, paper, scissors';
        instructionDisplay.innerHTML='how to play: choose one of the options below';
        resultDisplay.innerHTML='result:';
        btnDisplay.removeChild(btn);
    }
);
    
    btnDisplay.appendChild(btn);
    
  }


function initializeGame(){
    for(var i=0; i<possibleChoices.length; i++){ possibleChoices[i].addEventListener('click',(e)=>{
        userChoice=e.target.id;
        userChoiceDisplay.innerHTML=userChoice;
        generateComputerChoice();
    })
  }
}

function generateComputerChoice(){
    var randomNumber= Math.floor(Math.random()*possibleChoices.length);
    computerChoice=possibleChoices[randomNumber].id;
    computerChoiceDisplay.innerHTML=computerChoice;
    generateComputerChoiceImage();
    generateResult();
}

function generateComputerChoiceImage(){
    switch(computerChoice){
        case 'rock': computerChoiceImageSrc="img/rock.png"; break;
        case 'paper':computerChoiceImageSrc="img/paper.png"; break;
        case 'scissors': computerChoiceImageSrc="img/scissors.png"; break;
        default:break;
    }
    document.getElementById('computerchoiceimg').src=computerChoiceImageSrc;
}

function generateResult(){
    if(userChoice === computerChoice){
        result="Result: it's tied!";
    }
    else if (userChoice==='rock' && computerChoice==='paper' || userChoice==='paper' && computerChoice==='scissors' || userChoice==='scissors' && computerChoice==='rock'){
        result='Result: you lost, try again!';
        generateNewEnergy();
    }
    else{
        result='Result: you win!';
    }
    resultDisplay.innerHTML=result;
}

function generateNewEnergy(){
    energycount--;
    switch(energycount){
        case 2: energyDisplay='your energy: ♡ ♡';  break;
        case 1: energyDisplay='your energy: ♡';    break;
        default: energyDisplay='your energy: /'; gameOver(); break;
    }
    document.getElementById('energy').innerHTML=energyDisplay;
}