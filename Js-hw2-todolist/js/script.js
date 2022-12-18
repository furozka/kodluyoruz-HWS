const addButton = document.querySelector("#liveToastBtn");
const myList = document.querySelector('#list');   
const task = document.querySelector('#task');
const deleteButtons = document.querySelectorAll("#lict li button");


// New element create
let newElement = ()=>{
    if(task.value.replace(/\s/g, '')=== ""){
        console.log("listeye boş ekleme yapamazsınız");
        task.value="";
        $('#liveToastError').toast('show');
    }else{
        let newToDo = document.createElement('li');
        newToDo.className="list-group-item d-flex justify-content-between align-items-center";
        newToDo.innerHTML = `${task.value[0].toUpperCase()}${task.value.slice(1)} <button onclick="deleteItem(this)" type="button" class="close h-100 px-3">
        <span>&times;</span>
        </button>`;
        myList.append(newToDo);
        console.log("listeye eleman eklediniz");
        task.value="";
        eventListener();
        $('#liveToastSuccess').toast('show');
    }
    
}

// Delete Item
let deleteItem = (item)=>{
    let remMyItem = item.parentElement;
    console.log(remMyItem);
    myList.removeChild(remMyItem);
}

// Event Listener for todo check
let eventListener = ()=>{
    for (item of myList.children){
        item.addEventListener('click', checkToDo)
}
}

// Todo check function
let checkToDo = (event)=>{
    if(event.target.className=="list-group-item d-flex justify-content-between align-items-center checked"){
        event.target.className="list-group-item d-flex justify-content-between align-items-center";
    }else{
        event.target.className="list-group-item d-flex justify-content-between align-items-center checked";
    }
}

eventListener();








