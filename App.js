const milSec = document.querySelector(".milsec")
const seconds = document.querySelector(".seconds")
const minute = document.querySelector(".min")
const hour = document.querySelector(".hour")

const pauseBtn = document.querySelector(".pause-Btn")
const startBtn = document.querySelector(".start-Btn")
const resetBtn = document.querySelector(".reset-Btn")

let milSecCount = 0;
let secCount = 0;
let minCount = 0;
let hourCount = 0;
let milSecInterval 
let secInterval
let hourInterval



const startTimer = ()=>{
    secInterval = setInterval(()=>{
        secCount++
        seconds.textContent = secCount

        if(minCount >= 59){
            hourCount++;
            hour.textContent = hourCount;
            minCount = 0;
        }

        if(secCount >= 60){
            minCount++
            minute.textContent = minCount
            if(minCount <= 9){
                minute.textContent = "0" + minCount
            }
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

    