let buttonPlay = document.querySelector('.buttonPlay')
let buttonStop = document.querySelector('.buttonStop')
let buttonPlus = document.querySelector('.buttonPlus')
let buttonMinus = document.querySelector('.buttonMinus')
let buttonForest = document.querySelector('.buttonForest')
let buttonRain = document.querySelector('.buttonRain')
let buttonCoffeShop = document.querySelector('.buttonCoffeShop')
let buttonFirePlace = document.querySelector('.buttonFirePlace')
let timerMinutes = document.querySelector('.minutes')
let timerSeconds = document.querySelector('.seconds')
let timerTimeout
let seconds 
let minutes
let plusMinutes = 0
let minusMinute = 0


function countdown(){
    timerTimeout = setTimeout(function(){
        let seconds = Number(timerSeconds.textContent)
        let minutes = Number(timerMinutes.textContent)
        
        if(seconds == 0){
            seconds = 60
            minutes--
        }
        
        if(timerMinutes.textContent == 0 && timerSeconds.textContent == 0 ){
            return
        }

        timerMinutes.textContent = String(minutes).padStart(2,"0")
        timerSeconds.textContent = String(seconds-1).padStart(2,"0")
       
        countdown()
    },1000)
}

function playAudio(button, id){
        button = document.getElementById('id')
        id.play()
        id.loop = true
}

buttonPlay.addEventListener('click',function(){
    countdown()
})

buttonPlus.addEventListener('click',function(){
    plusMinutes += 5
    timerMinutes.textContent = Number(plusMinutes)
    timerMinutes.textContent = String(plusMinutes).padStart(2,"0")
})

buttonMinus.addEventListener('click',function(){
    plusMinutes -= 5
    timerMinutes.textContent = Number(plusMinutes)
    timerMinutes.textContent = String(plusMinutes).padStart(2,"0")
})

buttonStop.addEventListener('click',function(){
    clearTimeout(timerTimeout)
    timerSeconds.textContent = String(00).padStart(2,"0")
    timerMinutes.textContent = String(00).padStart(2,"0")
})

buttonForest.addEventListener('click', function(){
    playAudio(buttonForest,forest)
})

buttonRain.addEventListener('click', function(){
    playAudio(buttonRain,rain)
})

buttonCoffeShop.addEventListener('click', function(){
    playAudio(buttonCoffeShop,coffeshop)
})

buttonFirePlace.addEventListener('click', function(){
    playAudio(buttonFirePlace,fireplace)
    
})