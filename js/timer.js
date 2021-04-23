import countdown from "../sound/countdown.mp3";
import end1 from "../sound/end1.mp3";

export class Timer {
    constructor() {
        this.inputMinutes = document.getElementById('minutes')
        this.inputSeconds = document.getElementById('seconds')
            // this.audio = new Audio('../sound/countdown.mp3')
            // this.audioEnd = new Audio('../sound/end1.mp3')
        this.audio = new Audio(countdown)
        this.audioEnd = new Audio(end1)
        this.timeCounter = false
    }

    changeTime() {
        if (+this.inputSeconds.value !== 0) {
            --this.inputSeconds.value
        }
        if (+this.inputMinutes.value !== 0 && +this.inputSeconds.value === 0) {
            this.inputSeconds.value = 59
                --this.inputMinutes.value
        }
        if (+this.inputMinutes.value === 0 && +this.inputSeconds.value === 0) {
            clearInterval(this.timeCounter)
            this.audio.pause()
            this.audioEnd.play()
            alert('Ваше время истекло!! \nПрощайте!!!')
        }
    }

    timerStop() {
        clearInterval(this.timeCounter)
        this.audio.pause()
    }

    timerStart(event, pathToAudio, messageToUserAt0Timer) {
        // this.changeTime()
        if (+this.inputMinutes.value === 0 && +this.inputSeconds.value === 0) {
            let audioEnd = new Audio(pathToAudio)
            audioEnd.play()
            alert(messageToUserAt0Timer)
        } else {
            this.audio.play()
            this.timeCounter = setInterval(() => this.changeTime(), 1000)
        }
    }
};