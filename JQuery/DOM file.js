const body = $(`body`);
const header = $(`<h1>To do list</h1>`);
const listOfUnfinishedThings = $(`<ul></ul>`);
body.append(header);
body.append(listOfUnfinishedThings);
const toDos = [`Wake up`, `Eat breakfast`, `Code`];

const deleteListItem = () => {
  console.log($(`remove-btn`));
  $(`remove-btn`).parent().remove();
};

const updateListItem = () => {
  console.log($(`update-btn`));

};

const renderList = () => {
  toDos.forEach((element, index) => {
    const item = $(`<li>${element}</li>`);
    item.addClass(`${index}`);
    listOfUnfinishedThings.append(item);
    const removeItem = $(`<button>Remove item from the list</button>`);
    removeItem.addClass(`remove-btn`);
    const updateItem = $(`<button>Update item on the list</button>`);
    item.append(removeItem);
    item.append(updateItem);
  });
};


listOfUnfinishedThings.on(`load`, renderList());
const inputArea = $(
  `<input placeholder = "Enter an item you want to add to the list"/>`
);
body.append(inputArea);
const addButton = $(`<button></button>`);
addButton.text(`Add to the list`);
body.append(addButton);
const addToList = () => {
  if (inputArea.val() !== "") {
    const value = inputArea.val();
    toDos.push(value);
    const newItem = $(`<li>${value}</li>`);
    let index = toDos.length - 1;
    newItem.addClass(`${index}`);
    listOfUnfinishedThings.append(newItem);
    const removeItem = $(`<button>Remove item from the list</button>`);
    removeItem.addClass(`remove-btn`);
    removeItem.on(`click`, deleteListItem);
    const updateItem = $(`<button>Update item on the list</button>`);
    updateItem.addClass(`update-btn`);
    newItem.append(removeItem);
    newItem.append(updateItem);
  } else {
    alert(`Please enter an item`);
  }
};
addButton.on(`click`, addToList);

$(document).ready(() => {
  $('.remove-btn').click(function(){
    $(this).parent().remove()
  })
});
