let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; 
const passwordChoice = [
    'Better late than never',
    'Actions speak louder than words',
    'Don’t judge a book by it’s cover',
    'Good things come to those who wait',
    'If you can’t beat them, join them',
    'Don’t bite the hand that feeds you',
    'Rome wasn’t built in a day',
    'Out of sight, out of mind',
    'Easy come, easy go',
    'The forbidden fruit is always the sweetest',
    'Learn to walk before you run',
    'The early bird catches the worm',
    'Where there’s a will, there’s a way',
    'All good things come to an end',
    'An apple a day keeps the doctor away',
    'Better safe than sorry',
    'It’s no use crying over spilt milk',
    'Laughter is the best medicine',
    'The apple doesn’t fall far from the tree',
    'Forgive and forget',
    'Money doesn’t grow on trees',
    'It’s easy to be wise after the event',
    'It’s not over till it’s over',
    'Never test the depth of the water with both feet',
    'No gain without pain',
    'The show must go on',
    'Two heads are better than one',
    'It’s better to be safe than sorry',
    'You can’t always get what you want',
    'While the cats away, the mice will play',
    'Where one door shuts, another opens',
    'Two wrongs don’t make a right'
];

const alphabetDisplay = document.getElementById('aphabet');
const hangmanPicture = document.getElementById('hangmanpicture');
const timerDisplay = document.getElementById('timer');
const passwordDisplay = document.getElementById('board');
let password;

initialiseGame();

function initialiseGame(){
    generateAlphabet();
    let random = Math.floor(Math.random() * passwordChoice.length);
    password = passwordChoice [random];
    generateBoard();
}

function generateBoard(){
    let generatedPassword='';
        for (let i = 0; i < password.length; i++){
            if (password[i] === ' ') { generatedPassword += ' '; }
            else if (password[i] === '’') { generatedPassword += '’'; }
            else if (password[i] === ',') { generatedPassword += ','; }
            else { generatedPassword += '_'; }
        }
    passwordDisplay.innerHTML = generatedPassword;
}

function generateAlphabet(){
    
}