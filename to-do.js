const TodoForm = document.querySelector('.InsertListForm'),
InputList = TodoForm.querySelector('input'),
DisplayList = document.querySelector('.ToDoList');

const ToDo = 'ToDo';
let MyList = [];

function saveList(){
    localStorage.setItem(ToDo,JSON.stringify(MyList));
}

function DeleteList(e){
    let btn = e.target;
    let li = btn.parentNode.parentNode;
    let clearList = MyList.filter(element => {
        console.log(Number(element.id) ,Number(li.id));
        return Number(element.id) !== Number(li.id);
    })
    li.classList.add("remove-item"); // remove animation
    console.log(li);
    setTimeout(function () {
        DisplayList.removeChild(li); //display update
      }, 900);

    MyList = clearList;
    saveList();
}

function InputListFunction(text){
    let li = document.createElement('li');
    let span = document.createElement('span');
    let delbtn = document.createElement('button');
    delbtn.innerText = '♦';
    delbtn.addEventListener('click',DeleteList)
    span.innerText = text;
    span.appendChild(delbtn);
    li.appendChild(span);
    DisplayList.appendChild(li);

    li.classList.add("animation-init");
    setTimeout(function () {
        li.classList.add("animation-fade"); // animation
      }, 30);

    let list_id = MyList.length + 1;
    li.id = list_id;

    let Object = {
        id: list_id,
        text
    };
    MyList.push(Object);
    saveList();
    console.log(localStorage.getItem(ToDo));
    console.log(MyList);
}

function submitHnadle(e){
    e.preventDefault();
    let curListString = InputList.value;
    console.log(curListString);
    InputListFunction(curListString);
    InputList.value = "";
}
function HaveList(){
    let NowToDo = localStorage.getItem(ToDo);
    if(NowToDo !== null){
        let JsonToDo = JSON.parse(NowToDo);
        JsonToDo.forEach(element => {  
            InputListFunction(element.text);
        });
    }
}

function init(){
    HaveList();
    TodoForm.addEventListener("submit", submitHnadle);
}

init();