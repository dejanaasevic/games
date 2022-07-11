const cardArray=[
    {
        name:'alice',
        img: 'img/alice.jpg',
    },
      
    {
        name:'ariel',
        img: 'img/ariel.jpg',
    },
      
    {
        name:'belle',
        img:'img/belle.jpg',
    },
      
    {
        name:'chip-dale',
        img:'img/chip-dale.jpg',
    },
      
    {
        name:'cinderella',
        img:'img/cinderella.jpg',
    },
      
    {
        name:'hercules',
        img:'img/hercules.jpg',
    },
      
    {
        name:'huey-dewey-louie',
        img:'img/huey-dewey-louie.jpg',
    },
        
    {
        name:'olaf',
        img:'img/olaf.jpg',
    },
        
    {
        name:'petarpan',
        img:'img/petarpan.jpg',
    },
      
    {
        name:'piglet',
        img:'img/piglet.jpg',
    },
      
    {
        name:'pinocchio-tinkerbell',
        img:'img/pinocchio-tinkerbell.jpg',
    },
      
    {
        name:'rapunzel',
        img:'img/rapunzel.jpg',
    },
    {
        name:'alice',
        img: 'img/alice.jpg',
    },
      
    {
        name:'ariel',
        img: 'img/ariel.jpg',
    },
      
    {
        name:'belle',
        img:'img/belle.jpg',
    },
      
    {
        name:'chip-dale',
        img:'img/chip-dale.jpg',
    },
      
    {
        name:'cinderella',
        img:'img/cinderella.jpg',
    },
      
    {
        name:'hercules',
        img:'img/hercules.jpg',
    },
      
    {
        name:'huey-dewey-louie',
        img:'img/huey-dewey-louie.jpg',
    },
        
    {
        name:'olaf',
        img:'img/olaf.jpg',
    },
        
    {
        name:'petarpan',
        img:'img/petarpan.jpg',
    },
      
    {
        name:'piglet',
        img:'img/piglet.jpg',
    },
      
    {
        name:'pinocchio-tinkerbell',
        img:'img/pinocchio-tinkerbell.jpg',
    },
      
    {
        name:'rapunzel',
        img:'img/rapunzel.jpg',
    },
      
];
cardArray.sort(()=> 0.5-Math.random());
const girdDisplay = document.querySelector('#grid');
const resultDisplay = document.getElementById('result');
const moviesDisplay = document.getElementById('count');
const instructionDisplay = document.getElementById('instruction');
const messageDisplay = document.getElementById('message');
let cardsChosenName = [];
let cardsChosenId = [];
let cardsWon = [];
let moves = 0; let score = 0;
initializeGame();


function initializeGame(){
    moves = 0;  score = 0; cardsWon = [];
    instructionDisplay.innerHTML="how to play: Choose two cards at a time and try to find cards that are exactly the same";
    moviesDisplay.innerHTML = moves + " move";
    resultDisplay.innerHTML = "score: " + score;
    messageDisplay.innerHTML="";
    generateBoard();
    
}

function generateBoard(){
    for(let i=0; i<cardArray.length; i++){
        const newcard = document.createElement('img');
        newcard.src = 'img/blank.jpg';
        newcard.setAttribute('data-id',i);
        newcard.addEventListener('click',flipCard);
        girdDisplay.appendChild(newcard);
    }
}

function flipCard(){
    const cardId = this.getAttribute('data-id');
    cardsChosenName.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.src = cardArray[cardId].img;
    if(cardsChosenName.length === 2){
        setTimeout(checkMatch,500);
    }
}
function checkMatch(){
    moves++;
    if(moves == 1){
        moviesDisplay.innerHTML = moves + " move";
    }
    if (moves>1){
        moviesDisplay.innerHTML = moves + " moves";
    }
    const cards=document.querySelectorAll('#grid img');
    if(cardsChosenId[0] === cardsChosenId[1]){
        cards[cardsChosenId[0]].src = 'img/blank.jpg';
        cards[cardsChosenId[1]].src = 'img/blank.jpg';
        alert('You have clicked the same card!');
        
    }
    
    else if(cardsChosenName[0]===cardsChosenName[1]){
        score++;
        resultDisplay.innerHTML = "score: " + score;
        cards[cardsChosenId[0]].src='img/brown.jpg';
        cards[cardsChosenId[1]].src='img/brown.jpg';
        cards[cardsChosenId[0]].removeEventListener('click',flipCard);
        cards[cardsChosenId[1]].removeEventListener('click',flipCard);
        alert('you found a match!');
        cardsWon.push(cardsChosenName);
    }
    
    else{
        cards[cardsChosenId[0]].src='img/blank.jpg';
        cards[cardsChosenId[1]].src='img/blank.jpg';
        alert('try again');
    }
    
    if(cardsWon.length===cardArray.length/2){
        gameOver();
    }
    
    cardsChosenName=[];
    cardsChosenId=[];
}

function gameOver(){
    messageDisplay.innerHTML="congratulations, you found all the cards!";
    const btn = document.createElement("button");
    btn.innerHTML="start again!";
    btn.addEventListener('click',(e)=>{
         const cards=document.querySelectorAll('#grid img');
         for(let i=0; i<cards.length; i++){
             girdDisplay.removeChild(cards[i]);
         }
        initializeGame();
        messageDisplay.removeChild(btn);
        
    })
    messageDisplay.appendChild(btn);
    
    instructionDisplay.innerHTML="click the button and start again!";
    
    
    
    
}