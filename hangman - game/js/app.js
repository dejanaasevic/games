let letters = 'A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z'; 
const passwordChoice = [
    'BETTER LATE THAN NEVER',
    'ACTIONS SPEAK LOUDER THAN WORDS',
    'DONT JUDGE A BOOK BY ITS COVER',
    'GOOD THINGS COME TO THOSE WHO WAIT',
    'IF YOU CANT BEAT THEM, JOIN THEM',
    'DONT BITE THE HAND THAT FEEDS YOU',
    'ROME WASNT BUILT IN A DAY',
    'OUT OF SIGHT, OUT OF MIND',
    'EASY COME, EASY GO',
    'THE FORBIDDEN FRUIT IS ALWAYS THE SWEETEST',
    'LEARN TO WALK BEFORE YOU RUN',
    'THE EARLY BIRD CATCHES THE WORM',
    'WHERE THERE IS A WILL, THERE IS A WAY',
    'ALL GOOD THINGS COME TO AN END',
    'AN APPLE A DAY KEEPS THE DOCTOR AWAY',
    'BETTER SAFE THAN SORRY',
    'LAUGHTER IS THE BEST MEDICINE',
    'THE APPLE DOESNT FALL FAR FROM THE TREE',
    'FORGIVE AND FORGET',
    'MONEY DOESNT GROW ON TREES',
    'ITS EASY TO BE WISE AFTER THE EVENT',
    'ITS NOT OVER TILL ITS OVER',
    'NEVER TEST THE DEPTH OF THE WATER WITH BOTH FEET',
    'NO GAIN WITHOUT PAIN',
    'THE SHOW MUST GO ON',
    'TWO HEADS ARE BETTER THAN ONE',
    'YOU CANT ALWAYS GET WHAT YOU WANT',
    'WHILE THE CATS AWAY, THE MICE WILL PLAY',
    'WHERE ONE DOOR SHUTS, ANOTHER OPENS',
    'TWO WRONGS DONT MAKE A RIGHT'
];

const alphabetDisplay = document.getElementById('aphabet');
const hangmanPicture = document.getElementById('hangmanpicture');
const passwordDisplay = document.getElementById('board');
const instructionsDisplay = document.getElementById('instructions');
const startAgainButton = document.getElementById('startagain');
const timerDisplay = document.getElementById('timerdisplay');
const audioIcon = document.getElementById('audio');
let password;  let generatedPassword; let mistakecount;


let audioPlay = true;
let audioYay = new Audio('tracks/yay.mp3'); let yayCount = 0;
let audioWhat = new Audio('tracks/what.mp3'); let whatCount = 0;

let currentTime; let startTimer;
setInterval(updateTimer, 1000);

startAgainButton.addEventListener('click', startAgain);

initialiseGame();

function initialiseGame(){
    mistakecount=0; currentTime = 0; startTimer = false;
    instructionsDisplay.innerHTML = "how to play: try to guess the phrase by choosing the letters";
    hangmanPicture.src ="img/0.png";
    timerDisplay.innerHTML = "00:00:00";
    alphabetDisplay.innerHTML = "";
    audioIcon.src = "img/audio.png";
    generateAlphabet();
    let random = Math.floor(Math.random() * passwordChoice.length);
    password = passwordChoice [random];
    generateBoard();
}

function generateBoard(){
        generatedPassword='';
        for (let i = 0; i < password.length; i++){
            if (password[i] === ' ') { generatedPassword += ' '; }
            else if (password[i] === ',') { generatedPassword += ','; }
            else { generatedPassword += '_'; }
        }
    passwordDisplay.innerHTML = generatedPassword;
}

function generateAlphabet(){
    const letterArray = letters.split(',');
    for(let i = 0; i<letterArray.length; i++){
        const newLetter = document.createElement('div');
        newLetter.innerHTML = letterArray[i];
        newLetter.setAttribute('id',letterArray[i]);
        newLetter.setAttribute('class', 'letter');
        newLetter.addEventListener('click',checkLetter);
        alphabetDisplay.appendChild(newLetter);
    }
}    

function checkLetter(){
    let found = false;  startTimer = true;
    let selectedLetter = this.getAttribute('id');
    let clickedletter = document.getElementById(selectedLetter);
    
    clickedletter.style.backgroundColor = 'black';
    clickedletter.style.color = 'white';
    clickedletter.removeEventListener('click',checkLetter);
    
    console.log(password);
    console.log(generatedPassword);
    
    let newPassword = '';
    for(let i=0; i<password.length;i++){
        if(password[i] === selectedLetter){
            newPassword += selectedLetter;
            audioYay.play();
            found = true;
        }
        else{newPassword+=generatedPassword[i];}
    }
    
    if(found == true){
        generatedPassword = newPassword;
        passwordDisplay.innerHTML = generatedPassword;
        if(generatedPassword === password){
            won();
        }
    }
    
    else if (mistakecount <=5){
        mistakecount++;
        hangmanPicture.src = "img/" + mistakecount + ".png";
        if(mistakecount === 6){
           gameOver();
        }
    }
            console.log(newPassword);
}

function updateTimer(){
    currentTime++;
    if(startTimer === true){
    let time = currentTime;
    let hours = Math.floor(time/3600); time %= 3600;
    let minutes = Math.floor(time/60); 
    let seconds = Math.floor(time%60);
    if(hours < 10){ hours = "0" + hours;}
    if(minutes < 10){ minutes = "0" + minutes;}
    if(seconds<10){seconds= "0" + seconds;}
    timerDisplay.innerHTML = hours + ":" + minutes + ":" + seconds;
    }
}
function gameOver(){
    instructionsDisplay.innerHTML ="you just lost the game, press the button below and start again";
    const allLetters = alphabetDisplay.querySelectorAll('div');
    for(var i = 0; i<allLetters.length; i++){
        alphabetDisplay.removeChild(allLetters[i]);
    }
    alphabetDisplay.innerHTML = "you lost";
    startTimer = false;
}

function startAgain(){
    const allLetters = alphabetDisplay.querySelectorAll('div');
    for(var i = 0; i<allLetters.length; i++){
        alphabetDisplay.removeChild(allLetters[i]);
    }
    startTimer = false;
    initialiseGame();
    
}

function won(){
    instructionsDisplay.innerHTML ="press the button below and start again";
    const allLetters = alphabetDisplay.querySelectorAll('div');
    for(var i = 0; i<allLetters.length; i++){
        alphabetDisplay.removeChild(allLetters[i]);
    }
    startTimer = false;
    alphabetDisplay.innerHTML = "congratulations you won!";
}
