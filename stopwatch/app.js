const getSeconds = document.querySelector('.seconds-area');
const getMilliseconds = document.querySelector('.milliseconds-area');

const getStartButton = document.querySelector('.start');
const getStopButton = document.querySelector('.stop');
const getResetButton = document.querySelector('.reset');

let seconds = 0;
let milliseconds = 0;


function startFunc() {
    let timer = setInterval(() => {
        milliseconds++;
        if(milliseconds == 100) {
            seconds++;
            milliseconds = 0;
        }
        getSeconds.innerHTML = seconds;
        getMilliseconds.innerHTML = milliseconds;
    },10);

    getStartButton.style.pointerEvents = 'none';
    var checkTimer = true;
    getStopButton.addEventListener('click', () => {
        clearInterval(timer);
        checkTimer = false;
        getStartButton.style.pointerEvents = 'auto';
    });

    if(checkTimer == false) {
        getStartButton.addEventListener('click',startFunc);
    }
    
    getResetButton.addEventListener('click', () => {
        clearInterval(timer);
        getSeconds.innerHTML = '00';
        getMilliseconds.innerHTML = '00';
        getStartButton.style.pointerEvents = 'auto';
    });
}

getStartButton.addEventListener('click',startFunc);

getResetButton.addEventListener('click', resetTimer);

function resetTimer(){
    seconds = 0;
    milliseconds = 0;
}
  