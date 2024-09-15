const container = document.querySelector('.js-container')
const textWinner = document.querySelector('.js-textWinner')
const resetGameBtn = document.querySelector('.reset-game')

let playersTurn = 'X'
let playerX = [];
let playerO = [];
const winningCombinations = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
]

function createMarkup() {
let markup = ''
for(let i = 1; i < 10; i++){
    markup += `<div class="cells" data-id='${i}'></div>`
}
container.innerHTML = markup
}

createMarkup()

function resetGame(){
    createMarkup() 
    playerX = []; 
    playerO = [];
    playersTurn = 'X'; 
    textWinner.textContent = ''; 
    container.addEventListener('click', onClick);
}

function onClick(evt){
    const {target} = evt
    if(!target.classList.contains('cells') || target.textContent !== ''){
        return;
    }

    const currentId = Number(target.dataset.id)

    const currentPlayer = playersTurn;
    target.textContent = currentPlayer;

    const currentPlayerMoves = currentPlayer === 'X' ? playerX : playerO;
    currentPlayerMoves.push(currentId)

    const isDraw = playerO.length + playerX.length === 9;

    if(checkWinners(currentPlayerMoves)){
        textWinner.textContent = `Winner: ${currentPlayer}`;
        container.removeEventListener('click', onClick); 
        return;
    } 
    else if (isDraw) {
        textWinner.textContent = 'Draw';
        return; 
    } 
    else {
        playersTurn = currentPlayer === 'X' ? 'O' : 'X'; 
    }
    console.log(playerO)
    console.log(playerX)
}

function checkWinners(arr) {
    return winningCombinations.some(item => item.every(num => arr.includes(num)));
}

resetGameBtn.addEventListener('click', resetGame)
container.addEventListener('click', onClick)