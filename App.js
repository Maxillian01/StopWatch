const milSec = document.querySelector(".milsec")
const seconds = document.querySelector(".seconds")
const minute = document.querySelector(".min")
const hour = document.querySelector(".hour")

const pauseBtn = document.querySelector(".pause-btn")
const startBtn = document.querySelector(".start-btn")
const resetBtn = document.querySelector(".reset-btn")

let milSecCount = 0;
let secCount = 0;
let minCount = 0;
let hourCount = 0;
let milSecInterval 
let secInterval



const startTimer = ()=>{
    secInterval = setInterval(()=>{
        secCount++
        seconds.textContent = secCount

        if(minCount > 59){
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

startBtn.addEventListener('click', (event)=>{
    event.preventDefault()
    clearInterval(milSecInterval)
    clearInterval(secInterval)
    startTimer()
})

pauseBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    clearInterval(milSecInterval)
    clearInterval(secInterval)
})

resetBtn.addEventListener('click', (ev)=>{
    ev.preventDefault()
    clearInterval(milSecInterval)
    clearInterval(secInterval)
    milSecCount = 0;
    secCount = 0;
    minCount = 0;
    hourCount = 0;
    milSec.textContent='00';
    seconds.textContent='00';
    minute.textContent='00'
    hour.textContent='00';

    
})