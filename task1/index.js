const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');
let numberInInput;
let hh;
let mm;
let ss;
let intervalId;

function twoDijitNumber(number){
    return number < 10 ? '0' + number : number
}

function secondsToHms() {
    hh = twoDijitNumber(Math.floor(numberInInput / 3600));
    mm = twoDijitNumber(Math.floor(numberInInput % 3600 / 60));
    ss = twoDijitNumber(Math.floor(numberInInput % 3600 % 60));
    timerEl.textContent = `${hh}:${mm}:${ss}`;
    numberInInput === 0 ? clearInterval(intervalId) : numberInInput--;
}

inputEl.addEventListener('input', (e) => {
    numberInInput = Number(parseInt(e.target.value.replace(/[^\d]/g, '')));
    console.log(numberInInput)
});

buttonEl.addEventListener('click', () => {
    if (isNaN(numberInInput)) {
        timerEl.textContent =  "Введите число!"
    } else {
        intervalId = setInterval(secondsToHms, 1000)
    }
    inputEl.value = '';
});