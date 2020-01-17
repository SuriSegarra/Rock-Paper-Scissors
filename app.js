//get DOM
const playButton = document.getElementById('play-button');
const resetButton = document.getElementById('reset-button');
const correctSPan = document.getElementById('correct');
const totalSpan = document.getElementById('total');
const resultSpan = document.getElementById('result');
const sumSpan = document.getElementById('summary');
const drawSpan = document.getElementById('draw');
//initialize states
let totalWin = 0;
let totalLose = 0;
let totalDraw = 0;


//user interaction. interaction; click
playButton.addEventListener('click', () => {
    
    const radioButton = document.querySelector('input:checked');

    const userInput = radioButton.value;//user choice, rock paper or scissors

    console.log(userInput);


   

    const computerChoice = Math.round(Math.random() * 2);

    let randomHand;
    console.log(computerChoice);

    if (computerChoice === 0) {
        randomHand = 'rock'; } 
    if (computerChoice === 1) {
        randomHand = 'paper';}
    if (computerChoice === 2) {
        randomHand = 'scissors'; } 


    if (userInput === 'rock' && randomHand === 'rock'){
        console.log('draw');
        totalDraw++;//incrementing. update state
    }
    else if (userInput === 'rock' && randomHand === 'paper'){
        console.log('lose!');
        totalLose++;
    }
    else if (userInput === 'rock' && randomHand === 'scissors'){
        console.log(' win!');
        totalWin++;
    }
    else if (userInput === 'paper' && randomHand === 'paper'){
        console.log('draw');
        totalDraw++;
    }
    else if (userInput === 'paper' && randomHand === 'rock'){
        console.log('win');
        totalWin++;
    }
    else if (userInput === 'paper' && randomHand === 'scissors'){
        console.log('lose');
        totalLose++;
    }
    else if (userInput === 'scissors' && randomHand === 'scissors'){
        console.log('draw');
        totalDraw++;
    } 
    else if (userInput === 'scissors' && randomHand === 'paper'){
        console.log('win');
        totalWin++;
    }   
    else if (userInput === 'scissors' && randomHand === 0){
        console.log('lose');
        totalLose++;

    }

//update DOMx 
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

