const getDay = document.querySelector('.day');
const getHour = document.querySelector('.hour');
const getMinute = document.querySelector('.minute');
const getSecond = document.querySelector('.second');
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Friday"];

window.setInterval(() => {
    const date = new Date();

    let day = days[date.getDay()];
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    getHour.innerHTML = hour;
    getMinute.innerHTML = minute;
    getSecond.innerHTML = second;

    if(hour.toString().length == 1) {
        getHour.innerHTML = `0${hour}`;
    }

    if(minute.toString().length == 1) {
        getMinute.innerHTML = `0${minute}`;
    }
    
    if(second.toString().length == 1) {
        getSecond.innerHTML = `0${second}`;
    }

    getDay.innerHTML = day;

}, 1000);

