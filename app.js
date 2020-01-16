const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const correctSPan = document.getElementById('correct');
const totalSpan = document.getElementById('total');
const resultSpan = document.getElementById('result');
const sumSpan = document.getElementById('summary');

let correctGuess = 0;
let totalOfGuesses = 0;

playButton.addEventListener('click', () => {
    
    const radioButton = document.querySelector('input:checked');
    const userGuess = radioButton.value;
    console.log(userGuess);

    totalOfGuesses++;
    const oneZeroOrTwo = Math.round(Math.random() * 2);

    let randomHand;
    console.log(oneZeroOrTwo);

    if (oneZeroOrTwo === 0) {
        randomHand = 'rock'; } 
    if (oneZeroOrTwo === 1) {
        randomHand = 'paper';}
    if (oneZeroOrTwo === 2) {
        randomHand = 'scissor'; } 


    let won;

    if (randomHand === userGuess){
        won = true;
        console.log('i won');
    }
    else {
        won = false; 
    }

    if (won) {

        correctGuess++;

    }
    resultSpan.textContent = randomHand;
    sumSpan.classList.remove('hidden');
    correctSPan.textContent = correctGuess;
    totalSpan.textContent = totalOfGuesses;

});

resetButton.addEventListener('click', () => {
   
    correctGuess = 0;
    totalOfGuesses = 0;
    sumSpan.classList.add('hidden');
    correctSPan.textContent = correctGuess;
    totalSpan.textContent = totalOfGuesses;


});

