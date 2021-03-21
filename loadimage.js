const NowBG = document.querySelector('body');

function getImage(num){
    let tmp = new Image();
    tmp.src = `./images/${num}.png`;
    tmp.classList.add('showBG');
    NowBG.appendChild(tmp);
}

function init(){
    let getNum = Math.floor(Math.random() * 7) + 1;
    getImage(getNum);
}

init();