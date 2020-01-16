const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const correctSPan = document.getElementById('correct');
const totalSpan = document.getElementById('total');
const resultSpan = document.getElementById('result');
const sumSpan = document.getElementById('summary');
const drawSpan = document.getElementById('draw');

let totalWin = 0;
let totalLose = 0;
let totalDraw = 0;


playButton.addEventListener('click', () => {
    
    const radioButton = document.querySelector('input:checked');
    const userInput = radioButton.value;
    console.log(userInput);

   

    const oneZeroOrTwo = Math.round(Math.random() * 2);

    let randomHand;
    console.log(oneZeroOrTwo);

    if (oneZeroOrTwo === 0) {
        randomHand = 'rock'; } 
    if (oneZeroOrTwo === 1) {
        randomHand = 'paper';}
    if (oneZeroOrTwo === 2) {
        randomHand = 'scissor'; } 


    if (userInput === 'rock' && oneZeroOrTwo === 0){
        console.log('draw');
        totalDraw++;
    }
    else if (userInput === 'rock' && oneZeroOrTwo === 1){
        console.log('lose!');
        totalLose++;
    }
    else if (userInput === 'rock' && oneZeroOrTwo === 2){
        console.log(' win!');
        totalWin++;
    }
    else if (userInput === 'paper' && oneZeroOrTwo === 1){
        console.log('draw');
        totalDraw++;
    }
    else if (userInput === 'paper' && oneZeroOrTwo === 0){
        console.log('win');
        totalWin++;
    }
    else if (userInput === 'paper' && oneZeroOrTwo === 2){
        console.log('lose');
        totalLose++;
    }
    else if (userInput === 'scissor' && oneZeroOrTwo === 2){
        console.log('draw');
        totalDraw++;
    } 
    else if (userInput === 'scissor' && oneZeroOrTwo === 1){
        console.log('win');
        totalWin++;
    }   
    else if (userInput === 'scissor' && oneZeroOrTwo === 0){
        console.log('lose');
        totalLose++;

    }


    resultSpan.textContent = randomHand;
    sumSpan.classList.remove('hidden');
    correctSPan.textContent = totalWin;
    totalSpan.textContent = totalLose;
    drawSpan.textContent = totalDraw;

});

resetButton.addEventListener('click', () => {
   
    totalWin = 0;
    totalLose = 0;
    totalDraw = 0;
    sumSpan.classList.add('hidden');
    correctSPan.textContent = totalWin;
    totalSpan.textContent = totalLose;
    drawSpan.textContent = totalDraw;


});

