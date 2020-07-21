

function rPc () {
    const oneZeroOrTwo = Math.round(Math.random() * 2);
    return getThrowFromNumber(oneZeroOrTwo)
}

function getThrowFromNumber(number) {
    if(number === 0) return 'rock';
    if(number === 1) return 'paper';
    if(number === 2) return 'scissors';
}
function checkResult(userInput, zeroOneorTwo){
    if (zeroOneorTwo === userInput) return 'draw'
    if(zeroOneorTwo === 'scissors' && userInput === 'rock') return win;
    else if(zeroOneorTwo === 'paper' && userInput === 'scissors') return 'win';
    else if(zeroOneorTwo === 'rock' && userInput === 'paper') return 'win';
    else return 'lose'; }
export {
    checkResult,
    rPc,
    getThrowFromNumber,
}