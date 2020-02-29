const addButton = document.querySelector('.addButton');
var input = document.querySelector('.input');
const container = document.querySelector('.container');


class item{
    constructor(itemName) {
        this.createDiv(itemName);
    }

    createDiv(itemName){
        let input = document.createElement('input');
        input.value = itemName;
        input.disable = true;
        input.classList.add('item_input');
        input.type = "text";

        let itemBox = document.createElement('div');
        itemBox.classList.add('item');

        let editButton = document.createElement('button');
        editButton.innerHTML = "EDIT";
        editButton.classList.add('editButton');

        let removeButton = document.createElement('button');
        removeButton.innerHTML = "REMOVE";
        removeButton.classList.add('removeButton');

        container.appendChild(itemBox);

        itemBox.appendChild(editButton);
        itemBox.appendChild(input);
        itemBox.appendChild(removeButton);

        editButton.addEventListener('click', () => this.edit(input));

        removeButton.addEventListener('click', ()=> this.remove(itemBox));
    }
    edit(input){
        input.disabled = !input.disabled;
    }
    remove(item){
        container.removeChild(item);
    }
}

function check() {
    if(input.value != ""){
        new item(input.value);
        input.value = "";
    }
}

addButton.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if(e.wich == 13 {
        check();
    }
           
})
/*



//variables
let LIST, id;

//get item from localstorage
let data = localStorage.getItem("TODO");


//check if data is not empty
if(data){
LIST = JSON.parse(data);
id = LIST.length;
loadList(LIST);
}else{
    //if data isn´t empty
LIST = [];
id = 0;
}

//load items to user´s interface
function loadList(array) {
    array.forEach(function (item) {
        addTodo(item.name, item.id, item.done, item.trash);

    });
}


function addTodo(toDo, id, done, trash){

    if(trash){ return;}

    const DONE = done ? CHECK : UNCHECK;
    const LINE = done ? LINE_THROUGH: "";

    const item =`<li class="item">
    <i class="fa ${DONE} co" job="complete" id="${id}"></i>
    <p class="text ${LINE}">${toDo}</p>
    <i class="fa fa-trash-o de" job="delete" id="${id}"></i>
    </li>
   `;
    const position = "beforeend";


    list.insertAdjacentHTML(position, item);

}

//add an item to the list user the enter key
document.addEventListener("keyup", function (event) {
    if(event.keyCode == 13){
        const toDo = input.value;

        //if the input isn't empty
        if(toDo){
            addTodo(toDo, id, false, false);

            LIST.push({
                name : toDo,
                id : id,
                done : false,
                trash : false
            });
//add item to localstorage
            localStorage.setItem("TODO", JSON.stringify(LIST));
            id++;
        }
        input.value = "";
    }

});




//complete to do
function completeToDO(element) {
    element.classList.toggle(CHECK);
    element.classList.toggle(UNCHECK);
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH);
    LIST[element.id].done = LIST[element.id].done ? false : true;

}

//remove to do
function removeToDo(element) {
    element.parentNode.parentNode.removeChild(element.id);

    LIST[element.id].trash = true;

}
// target the items created dynamically

list.addEventListener("click", function (event) {
    const element = event.target;
    const elementJob = element.attributes.job.value;

    if(elementJob == "complete"){
        completeToDO(element);
    } else if (elementJob == "delete"){
            removeToDo(element);

    }
    //add item to localstorage
    localStorage.setItem("TODO", JSON.stringify(LIST));
})

 */