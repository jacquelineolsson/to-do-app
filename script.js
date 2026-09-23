

// declare variables
const addBtn = document.querySelector("#addBtn");
const todoList = document.querySelector("ul");
const input = document.querySelector("#todo-input");
const infoText = document.querySelector("#infoText");
const countTodos = document.querySelector("#countTodos");
let completedCount =0;


addBtn.addEventListener(
    "click",
    addTodoItem
);



function addTodoItem(){

const text = input.value;
infoText.innerText = "";

// check if input is empty
if(text.length === 0){

   infoText.innerText = "Please enter a task to add";
   return;
}

const todoItem = document.createElement("li");
todoList.appendChild(todoItem);

const itemLabel = document.createElement("span");
itemLabel.innerText = text;
todoItem.appendChild(itemLabel);

// mark item as completed when clicked
itemLabel.addEventListener(
"click",
function(){
    if(todoItem.getAttribute("class") == "completed"  ){ //remove completed class
       completedCount--;
        
         todoItem.setAttribute("class", "");

    }
    else
    {
        todoItem.setAttribute("class", "completed");  // add completed class
        completedCount++;
    }
    countTodos.innerText = `${completedCount} completed`;
}    

);


input.value = "";
}

    