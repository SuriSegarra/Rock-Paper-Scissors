import { checkResult, rPc, getThrowFromNumber } from './check-result.js';

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
    
    const computerInput = rPc();
    
    const result = checkResult(userInput, computerInput)

    
    if(result === 'win'){
        totalWin++
        correctSPan.textContent = totalWin;   
    }
    else if(result === 'lose') {
        totalLose++
        totalSpan.textContent = totalLose;
    }
    else {
        totalDraw++
        drawSpan.textContent = totalDraw;
    }
    
    resultSpan.textContent = computerInput;
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

