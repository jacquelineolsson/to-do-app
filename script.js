

// declare variables
const addTodoBtn = document.querySelector("button");
const list = document.querySelector("ul");
const input = document.querySelector("#todo-input");
const infoText = document.querySelector("#infoText");


addTodoBtn.addEventListener(
    "click",
    addTodoItem
);


// function to add a item to the list
function addTodoItem(){

infoText.textContent = "";
const text = input.value;


const listItem = document.createElement("li");
list.appendChild(listItem);

const itemlabel = document.createElement("li");
itemlabel.textContent = text;
listItem.appendChild(itemlabel);

}

    