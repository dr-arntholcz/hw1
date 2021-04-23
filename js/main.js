"use strict";
import { diffDates, diffToHtml } from "./datecalc.js"; // 1
import { formatError } from "./utils.js"; // 2

import { timer } from "./timer.js"; // 
const dateCalcForm = document.getElementById("datecalc");
const dateCalcResult = document.getElementById("datecalc__result");

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
let startTimerButton = document.getElementById('startTimer');
let stopTimerButton = document.getElementById('stopTimer');
// let inputMinutes = document.getElementById('minutes');
// let inputSeconds = document.getElementById('seconds');
// let audio = new Audio('../sound/countdown.mp3');
timer.audio.loop = true;
// let timeCounter = false;


// function timerStart(pathToAudio, messageToUserAt0Timer) {
//     return function(event) {
//         event.preventDefault();
//         if (+inputMinutes.value === 0 && +inputSeconds.value === 0) {
//             let audioEnd = new Audio(pathToAudio);
//             audioEnd.play();
//             alert(messageToUserAt0Timer);
//         } else {
//             audio.play();
//             timeCounter = setInterval(changeTime, 1000);
//         }
//     }
// };

// function timerStop() {
//     clearInterval(timeCounter);
//     audio.pause();
// }

// function changeTime() {
//     if (+inputSeconds.value !== 0) {--inputSeconds.value };
//     if (+inputMinutes.value !== 0 && +inputSeconds.value === 0) {
//         inputSeconds.value = 59;
//         --inputMinutes.value;
//     };
//     if (+inputMinutes.value === 0 && +inputSeconds.value === 0) {
//         clearInterval(timeCounter);
//         audio.pause();
//         let audioEnd = new Audio('../sound/end1.mp3');
//         audioEnd.play();
//         alert('Ваше время истекло!! \nПрощайте!!!');
//     }
// };

startTimerButton.addEventListener('click', timer.timerStart('../sound/end1.mp3', 'Ты не выставил время!! \nЛузер!!!'));
stopTimerButton.addEventListener('click', timer.timerStop);