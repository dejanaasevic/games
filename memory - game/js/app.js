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
      
]
    
cardArray.sort(()=> 0.5-Math.random());
const girdDisplay=document.querySelector('#grid');
const cardsChosen=[];
generateBoard();


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
    cardsChosen.push(cardArray[cardId].name);
    this.src=cardArray[cardId].img;
    if(cardsChosen.length===2){
        setTimeout(checkMatch,500)
    }
}
function checkMatch(){
    if()
    
}