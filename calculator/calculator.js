const containerNumber = document.querySelector('.js-numbers');
const containerOperation = document.querySelector('.js-operation')
const wrapper = document.querySelector('.wrapper')
const resultText = document.querySelector('.result')
const resultBtn = document.querySelector('.btn-result')

const operation = ['+','-','*','/'];
let markupNumber = '';
let markupOperation = '';

for (let i = 0; i < 10; i++) {
    markupNumber += `<button type='button' data-id='${i}' class='btn-numbers'>${i}</button>`
}
for (let i = 0; i < operation.length; i++){
    markupOperation += `<button type='button' data-operation='${operation[i]}' class='btn-operation'>${operation[i]}</button>`
}


containerNumber.insertAdjacentHTML('beforeend', markupNumber)
containerOperation.insertAdjacentHTML('beforeend', markupOperation)

let currentNumber = '';
let previousNumber = '';
let operator = '';

function onClick(evt) {
    const { target } = evt
    if (!target.classList.contains('btn-numbers') && !target.classList.contains('btn-operation')) {
        return
    }
    if (target.classList.contains('btn-numbers')) {
        currentNumber += target.dataset.id;
        resultText.textContent = currentNumber;
    } else if (target.classList.contains('btn-operation')) {
        operator = target.dataset.operation;
        previousNumber = currentNumber;
        currentNumber = '';
    }
}

function onClickResult(evt) {
    if (!currentNumber && !previousNumber && !operator) {
        return
    }
    const result = calculate(parseFloat(previousNumber), parseFloat(currentNumber), operator);
    resultText.textContent = result;
    currentNumber = result;
    previousNumber = '';
    operator = ''
    console.log(result)
}

function calculate(num1, num2, operator) {
    switch (operator) {
        case '+':
            return num1 + num2
        case '-':
            return num1 - num2
        case '*':
            return num1 * num2
        case '/':
            return num1 / num2
        default:
            return num2;
    }
}


wrapper.addEventListener('click', onClick)
resultBtn.addEventListener('click', onClickResult)