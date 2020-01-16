const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const correctSPan = document.getElementById('correct');
const totalSpan = document.getElementById('total');
const resultSPan = document.getElementById('result');
const sumSpan = document.getElementById('summary');

let correctGuess = 0;
let totalOfGuesses = 0;

playButton.addEventListener('click', () => {
    console.log ('its working');
    const radioButton = document.querySelector('input:checked');
    const userGuess = radioButton.value;

    totalOfGuesses = + 1
    const oneZeroOrTwo = Math.round(Math.random() * 3);
    let randomHand;

    if (oneZeroOrTwo === 0) {
        randomHand = 'rock'; } 
    else if (oneZeroOrTwo === 1) {
        randomHand = 'paper';}
    else {
        randomHand = 'scissor'; }  

    let won;

    if (randomHand === userGuess){
        won = true;}
    else {
        won = false; }
    if (won) {
        correctGuess = + 1;

    }

});

resetButton.addEventListener('click', () => {
    console.log ('its working too!')
    correctGuess = 0;
    totalOfGuesses = 0;
    

})