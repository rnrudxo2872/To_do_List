const clockfinder = document.querySelector(".clock"),
CurTime = clockfinder.querySelector("h1");

function getTime(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    CurTime.innerText = `${hour <= 9 ? `0${hour}` : hour}:${min <= 9 ? `0${min}` : min}:${
        sec <= 9 ? `0${sec}` : sec}`;
}

function init(){
    getTime(); // init
    setInterval(getTime,1000); // 1sec
}

init();