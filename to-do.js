const ToDoForm = document.querySelector(".ToDoForm"),
InputToDo = ToDoForm.querySelector('.InsertToDo'),
ViewList = document.querySelector('.ListOfDo');

function attachToDo(text){
    let li = document.createElement("li");
    let delBtn = document.createElement("button");
    let div = document.createElement("div");
    delBtn.innerText = `✂`;
    div.innerText = text;
    li.appendChild(div);
    li.appendChild(delBtn);
    ViewList.appendChild(li);
}

function handleSubmit(e){
    e.preventDefault();
    let CurValue = InputToDo.value;
    attachToDo(CurValue);
    InputToDo.value = ""; // clear
}

function init(){
    ToDoForm.addEventListener("submit", handleSubmit)
}

init();