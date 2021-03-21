const NameForm = document.querySelector(".Nameform"),
InputText = NameForm.querySelector(".InsertName"),
PlaceName = document.querySelector(".placeName"),
ListForm = document.querySelector(".InsertListForm");

const NameStorage = 'CURUSER',
Toshow = 'showing',
Tohide = 'hide';


function handleSubmit(e){
    e.preventDefault();
    let curValue = InputText.value;
    localStorage.setItem(NameStorage,curValue);
    showName();
}

function getName(){
    NameForm.classList.add(Toshow);
    NameForm.addEventListener("submit",handleSubmit)
}

function showName(){
    NameForm.classList.remove(Toshow);
    PlaceName.classList.add(Toshow);
    ListForm.classList.add(Toshow);

    PlaceName.innerText = localStorage.getItem(NameStorage);
}

function LoadingName(){
    let LocationName = localStorage.getItem(NameStorage);
    console.log(LocationName);
    if(LocationName === null){
        getName();
    }else{
        showName();
    }
}

function init(){
    LoadingName();
}
init();