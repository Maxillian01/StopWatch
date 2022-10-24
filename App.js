const milSec = document.querySelector(".milsec")
const seconds = document.querySelector(".seconds")
const minute = document.querySelector(".min")
const hour = document.querySelector(".hour")

const pauseBtn = document.querySelector(".pause-Btn")
const startBtn = document.querySelector(".start-Btn")
const resetBtn = document.querySelector(".reset-Btn")

let milSecCount = 0;
let secCount = 0;
let milSecInterval 
let secInterval

const startTimer = ()=>{
    secInterval = setInterval(()=>{
        secCount++
        seconds.textContent = secCount

        if(secCount >= 60){
            secCount = 0;
        }

        if(secCount <= 9){
            seconds.textContent = "0" + secCount;
        }
    },1000)

    milSecInterval = setInterval(()=>{
        milSecCount++
        milSec.textContent = milSecCount

        if(milSecCount >= 99){
            milSecCount = 0;
        }
        if(milSecCount <= 9){
            milSec.textContent = "0" + milSecCount
        }
    }, 10)
}

// startTimer()