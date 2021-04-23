"use strict";
// import '../css/style.css';
import { diffDates, diffToHtml } from "./datecalc.js"; // 1
import { formatError } from "./utils.js"; // 2
import { changeTool } from "./change.js"; // 
import { Timer } from './timer.js' //
///////////////calce date//////////////////////////////
const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");
let calculateDate = document.getElementsByClassName('calcDate')[0];
//////////////////////timer///////////////////////
let timeClass = document.getElementsByClassName('timer')[0];
let calcButton = document.getElementsByClassName('calcDateName')[0];
let timerButton = document.getElementsByClassName('timerName')[0];
timeClass.style.display = 'none';


///////////////////////calce date////////////////////////////
dateCalcForm.addEventListener("submit", handleCalcDates);

function handleCalcDates(event) {
    dateCalcResult.innerHTML = "";
    event.preventDefault();

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const diff = diffDates(firstDate, secondDate); // 3
        dateCalcResult.innerHTML = diffToHtml(diff); // 4
    } else dateCalcResult.innerHTML = formatError("Для расчета промежутка необходимо заполнить оба поля"); // 5
}
////////////////changeTool//////////////////////////////////////
calcButton.addEventListener('click', changeTool(timeClass, calculateDate));
timerButton.addEventListener('click', changeTool(timeClass, calculateDate));

/////////////////////////////////timer///////////////////////
let startTimerButton = document.getElementById('startTimer')
let stopTimerButton = document.getElementById('stopTimer')

const timer = new Timer()
timer.audio.loop = true

startTimerButton.addEventListener('click', (event) =>
    timer.timerStart(event, '../sound/end1.mp3', 'Ты не выставил время!! \nЛузер!!!')
)
stopTimerButton.addEventListener('click', () => timer.timerStop())
    ///////////////////////////function loadScript////////////////////////////
function loadScript(aparam, bparam) {
    if (bparam === undefined) { bparam = false };
    if (Array.isArray(aparam)) {
        for (let i = 0; i < aparam.length; i++) {
            let el = document.createElement('script');
            el.src = aparam[i];
            el.type = 'text/javascript';
            // el.onload = callback;
            document.body.appendChild(el);
        };
        bparam();
        console.log('aparam it\'s array');
    };
    if (typeof aparam === 'string') {
        let el = document.createElement('script');
        el.src = aparam;
        el.type = 'text/javascript';
        // el.onload = callback;
        document.body.appendChild(el);
        bparam();

        console.log('aparam it\'s string')
    };
    if (typeof aparam === 'function') {
        aparam();
        console.log('aparam it\'s function')
    };
};
loadScript('./js/script.js', () => console.log('необязательный коллбек')); //, () => console.log('Script loaded')
let array = ['./js/file1.js', './js/file2.js', './js/file3.js'];
loadScript(array, () => console.log('необязательный коллбек'));
loadScript(() => console.log('callback'));