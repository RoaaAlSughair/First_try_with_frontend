console.log(arrowTitle);
/* START CODE UNDER THIS LINE */

// Questions from 1 - 6 are a collaboration between me and AbdAlghani
// Question 7 is my own solo try

const tittle = document.createElement("h1");
tittle.innerText = "Todo List";
document.querySelector("h1").innerText;
const body = document.querySelector("body");
body.append(tittle);

const list = document.createElement("ul");
body.append(list);

toDos = ["wake up", "eat breakfast", "code"];

function deleteItem() {
  let index = this.getAttribute("data-index");
  document.getElementById(index).remove();
  toDos.splice(index, 1);
}

function updateListItem() {
  let inputItem = document.createElement("input");
  let index = this.getAttribute("data-index");
  console.log(index);
  list.append(inputItem);
  inputItem.onchange = () => {
    toDos.splice(index, 1, inputItem.value);
    document.getElementById(index).innerHTML = inputItem.value;
    inputItem.remove();
  };
}

const renderList = (array) => {
  return array.forEach((element, index) => {
    let action = document.createElement("li");
    action.id = index;
    let clickButton2 = document.createElement("button");
    let clickButton3 = document.createElement("button");
    clickButton2.setAttribute("data-index", index);
    clickButton2.setAttribute("data-index", index);
    clickButton2.innerHTML = "Delete list item";
    clickButton3.innerHTML = "Update list item";
    action.innerHTML = element;
    list.append(action);
    action.append(clickButton2);
    action.append(clickButton3);
    clickButton2.onclick = deleteItem;
    clickButton3.onclick = updateListItem;
  });
};

renderList(toDos);

let inputText = document.createElement("input");
body.append(inputText);

let clickButton1 = document.createElement("button");
body.append(clickButton1);
clickButton1.innerHTML = "Add list item";

const addToList = () => {
  toDos.push(inputText.value);
  let action = document.createElement("li");
  list.append(action);
  action.id = toDos.length - 1;
  action.innerHTML = inputText.value;

  let clickButton2 = document.createElement("button");
  clickButton2.setAttribute("data-index", toDos.length - 1);
  action.append(clickButton2);
  clickButton2.innerHTML = "Delete list item";
  clickButton2.onclick = deleteItem;

  let clickButton3 = document.createElement("button");
  clickButton2.setAttribute("data-index", toDos.length - 1);
  action.append(clickButton3);
  clickButton3.innerHTML = "Update list item";
  clickButton3.onclick = updateListItem;
};

clickButton1.onclick = addToList;
