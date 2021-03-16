const form = document.querySelector(".InsertName"),
Insert = form.querySelector("input"),
NameInner = document.querySelector("#placeName");

const USER_N = 'CurUserName',
Visual = 'showing';

function save_name(name){
    localStorage.setItem(USER_N,name)
}

function handlesubmit(event) {
    event.preventDefault();
    const curValue = Insert.value;
    welcom(curValue);
    save_name(curValue);
}

function getName() {
    form.classList.add(Visual);
    form.addEventListener("submit",handlesubmit);
}

function welcom(name) {
    form.classList.remove(Visual);
    NameInner.classList.add(Visual);
    NameInner.innerText = `Hi! ${name}!`;
}

function loadName(){
    const curName = localStorage.getItem(USER_N);
    if(curName === null){ // name is null
        getName();
    }else{
        welcom(curName);
    }
}

function init(){
    loadName();
}

init();