
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const timerShow = document.getElementById("timer");


let intervalId = null;

document.body.append(startBtn, stopBtn);

const getIntervalTime = () => {

let timer = Number(prompt("Введите длительность таймера в секундах:"));
// let timer = 2;

    if (!timer) {
        alert("Вы не ввели длительность таймера");
        return;
    }
        return timer;
}  

let intervalTime = getIntervalTime();



const currentTimer = () => {
    if (intervalTime < 0) {
        return;
    }

    if (intervalTime >= 0) {
        
        const hours = (Math.floor(intervalTime / 60 / 60) % 24);
        const min = (Math.floor(intervalTime / 60) % 60) ;
        const sec = (Math.floor(intervalTime) % 60);
            
            hoursRender = hours < 10 ? '0' + hours : hours;
            minRender = min < 10 ? '0' + min : min;
            secRender = sec < 10 ? '0' + sec : sec;

            time = `${hoursRender} : ${minRender} : ${secRender}`;

            timerShow.innerHTML = time;
                
    }
    intervalTime --;
    
    
}


// const start = () => {
//     return new Promise((resolve) => {
//     currentTimer;
    
//         if (!intervalId) {
//             intervalId = setInterval(currentTimer, 1000);
//         }; 

               
//     });
// };

const start = () => {
    currentTimer;

    if (!intervalId) {
        intervalId = setInterval(currentTimer, 1000);
    }; 

};


const stop = () => {
  clearInterval(intervalId);
  intervalId = null;
};



//   start(30).then(() => {
//     console.log("Timer end!");
//   });


startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
