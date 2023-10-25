const taskText = document.getElementById("taskText");
const taskList = document.getElementById("task-list");


function addTask(){
    if(taskText.value == ''){
        alert("Write Something");
    } else {

        let simpleDiv = document.createElement('div');

        let task = document.createElement('div');
        task.classList.add("task");

        let status = document.createElement('div');
        status.classList.add("status");
        status.appendChild(simpleDiv);        

        let p = document.createElement('p');
        p.classList.add("text");
        p.innerHTML = taskText.value;

        let deletesymbol = document.createElement('div');
        deletesymbol.classList.add("delete");
        
        let x = document.createElement('p');
        x.innerText = "X";

        deletesymbol.appendChild(x);

        task.appendChild(status);
        task.appendChild(p);
        task.appendChild(deletesymbol);

        taskList.appendChild(task);

    }
    saveData();
    taskText.value ="";
}


taskList.addEventListener('click',function(e){
    if(e.target.classList.contains("status") || e.target.classList.contains("text")){
        console.log("entered if");
        e.target.parentElement.classList.toggle("checked");
        console.log("toggled class check");
        saveData();
    } else if(e.target.parentElement.classList.contains("delete")){
        e.target.parentElement.parentElement.remove();
        saveData();
    }
},false);



function saveData(){
    localStorage.setItem("Data",taskList.innerHTML);
}

function showList(){
    taskList.innerHTML = localStorage.getItem("Data");
}

showList();