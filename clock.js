 const finder = document.querySelector(".clock"),
inner = finder.querySelector("h1");

function getTime(){
    const date = new Date();
    const hour = date.getHours(),
    min = date.getMinutes(),
    sec = date.getSeconds();

    inner.innerText = `${hour <= 9 ? `0${hour}`: hour}:${
        min <= 9 ? `0${min}` : min}:${sec <= 9 ? `0${sec}` : sec}`;
}

function init(){
    getTime();
    setInterval(getTime,1000);
}

init();