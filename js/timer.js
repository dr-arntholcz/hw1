export let timer = {
    inputMinutes = document.getElementById('minutes'),
    inputSeconds = document.getElementById('seconds'),
    audio = new Audio('../sound/countdown.mp3'),
    timeCounter = false,
    changeTime: function() {
        if (+inputSeconds.value !== 0) {--inputSeconds.value };
        if (+inputMinutes.value !== 0 && +inputSeconds.value === 0) {
            inputSeconds.value = 59;
            --inputMinutes.value;
        };
        if (+inputMinutes.value === 0 && +inputSeconds.value === 0) {
            clearInterval(timeCounter);
            audio.pause();
            let audioEnd = new Audio('../sound/end1.mp3');
            audioEnd.play();
            alert('Ваше время истекло!! \nПрощайте!!!');
        }
    },
    timerStop: function() {
        clearInterval(timeCounter);
        audio.pause();
    },
    timerStart: function(pathToAudio, messageToUserAt0Timer) {
        return function(event) {
            event.preventDefault();
            if (+inputMinutes.value === 0 && +inputSeconds.value === 0) {
                let audioEnd = new Audio(pathToAudio);
                audioEnd.play();
                alert(messageToUserAt0Timer);
            } else {
                audio.play();
                timeCounter = setInterval(changeTime, 1000);
            }
        }
    },
}