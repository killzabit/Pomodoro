

const timerSet = (btn) => {
    let timerContent = document.getElementById("setTime").textContent;
    btn = btn.target.textContent;
    if (btn == '+') {
    isNaN(timerContent) ?
    timerContent = 0 :
    timerContent = Number(timerContent)
    timerContent += 1
    document.getElementById("setTime").textContent = timerContent;
    } else {
    isNaN(timerContent) ?
    timerContent = 0 :
    timerContent = Number(timerContent)
    if (timerContent != 0) {
        timerContent -= 1
        document.getElementById("setTime").textContent = timerContent;
    }};
}

const breakSet = (btn) => {
    let breakContent = document.getElementById("setBreak").textContent;
    btn = btn.target.textContent;
    if (btn == '+') {
    isNaN(breakContent) ?
    breakContent = 0 :
    breakContent = Number(breakContent)
    breakContent += 1
    document.getElementById("setBreak").textContent = breakContent;
    } else {
    isNaN(breakContent) ?
    breakContent = 0 :
    breakContent = Number(breakContent)
    if (breakContent != 0) {
        breakContent -= 1
        document.getElementById("setBreak").textContent = breakContent;
    }};
}
//the timer function, the pause var is used to pause and unpause the timer.
let paused;
let seconds = 0;
let minutes;
let breakTime;
const timer = () => {
    if (seconds == 0) {    
        minutes = Number(minutes);   
        minutes -= 1;
        seconds = 59;
        document.getElementById("display").textContent = minutes + ":" + seconds;
        console.log(minutes + ':' + seconds)
    } else {
        seconds -= 1;
        document.getElementById("display").textContent = minutes + ":" + seconds;
        console.log(minutes + ':' + seconds)
    }
    if ((breakTime == 0) && (minutes == 0) && (seconds == 0)) {
        clearInterval(countdown);
    //this next part initiates the "break"
    } else if ((minutes == 0) && (seconds == 0)) {
        document.getElementById("display").style.color = "#16D2C7";
        minutes = breakTime;
        timer();
        breakTime -= 1
    }
}   


//the interval for the timer function, which calls the timer function once a second. countdown is used for clearinterval in other code bits.
let countdown
//timerOn is a var for checking if the timer is on, this help to disable the play button.
let timerOn;
const timerInterval = () => {
    if (timerOn == true) {
        return
    }

    if (paused == true){
        countdown = setInterval(timer, 200);
        paused = false;
        timerOn = true;
        console.log("was paused")
    
    } else if (document.getElementById("setTime").textContent == 0) {
        alert("Please increase the value or you'll have to see this ugly alert box!")

    } else  {
        minutes = document.getElementById("setTime").textContent;
        breakTime = document.getElementById("setBreak").textContent;
        countdown = setInterval(timer, 200)   
        timerOn = true;
        paused = false;
    }
};


//the pause function
const pause = () => {

    if (paused == true) {
        return
    
    } else if (timerOn == true) {
        clearInterval(countdown);
        paused = true;
        timerOn = false;
    }
        
    
};

//the stop function.
const stopTimer = () => {
    clearInterval(countdown);
    document.getElementById("display").textContent = 0;
    document.getElementById("display").style.color = "#A4D4B4";
    minutes = 0;
    seconds = 0;
    timerOn = false;
    paused = false;
    breakTime = 0;

}
//resets your entire life be careful pressing reset.
const reset = () => {
    clearInterval(countdown);
    document.getElementById("setBreak").textContent = 0;
    document.getElementById("setTime").textContent = 0;
    document.getElementById("display").textContent = 0;
    document.getElementById("display").style.color = "#A4D4B4";
    minutes = 0;
    seconds = 0;
    timerOn = false;
    paused = false;
    breakTime = 0;
}





//event listeners
//these are for the '+' and the '-' buttons
document.getElementById("timerNeg").addEventListener("click", timerSet);
document.getElementById("timerPos").addEventListener("click", timerSet);
document.getElementById("breakNeg").addEventListener("click", breakSet);
document.getElementById("breakPos").addEventListener("click", breakSet);

//for the reset button
document.getElementById("reset").addEventListener("click", reset);

//play, pause, and stop buttons
document.getElementById("play").addEventListener("click", timerInterval);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("stop").addEventListener("click", stopTimer);