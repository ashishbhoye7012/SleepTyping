

window.addEventListener('load',init);


//Globale

// Available Levels

const Levels= {
    easy:5,
    medium:3,
    hard:2
}
// To change level
const currentLevel =Levels.easy;

let time=5;
let score=0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');

const words =[
    'hat',
    'river',
    'lucky',
    'statue',
    'generate',
    'Ashish',
    'ma-9',
    'Anil',
    'Mehul',
    'goodwork',
    'lol',
    'load',
    'documet'
];

// initialize Game

function init(){
    // Show number of seconds in Ul
    seconds.innerHTML =currentLevel;
    // load word from array 
    showWord(words);
    // Start matching on word input
    wordInput.addEventListener('input',startMatch);
    // Call countdown every second
    setInterval(countdown,1000);
    // Check game status
    setInterval(checkStatus,50);
}
//Start match
function startMatch(){
    if(matchWords()){
        console.log('MATCH!!!');
        isPlaying =true;
        time=currentLevel+1;
        showWord(words);
        wordInput.value='';
        score++;
    }  
} 
 // if score is -1, display 0.
 if(score ===-1){
    scoreDisplay.innerHTML=0;
 
 }else{
     scoreDisplay.innerHTML=score;

}
// Match currentWord to wordInput
 function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML='correct!!!!';
        return true;
    }else{
    message.innerHTML='';
    return false;
    }

    
}

// Pick & show random word
function showWord(words){

    //Generate randow array index
    const randIndex = Math.floor(Math.random() *words.length);
    //Output random word
    currentWord.innerHTML=words[randIndex];
}

// Countdown timer
    function countdown(){
        // Make sur time is not run out
        if(time>0) {
            //Decrement
            time--;
        }else if(time== 0) {
            //Game is over
            isPlaying = false;
        }
        // show time
        timeDisplay.innerHTML=time;
}
// check game status
    function checkStatus(){
        if (!isPlaying && time === 0){
            message.innerHTML='Game Over!!!!';
            score=-1;
        }
    }
    







