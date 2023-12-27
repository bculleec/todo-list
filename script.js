let tasks = [];
const taskDisplay = document.querySelector('.tasks');

tasks = JSON.parse(localStorage.getItem('todos'));

if (tasks){
    RefreshList();
} else {
    tasks = [];
}


function addTask(){
    txt = document.querySelector('.task-text');
    tasks.push(txt.value);
    RefreshList();
    txt.value = '';
}


function RefreshList(){
    
    taskDisplay.innerHTML = '';
    for (let i = 0; i<tasks.length; i++)
    {
        taskDisplay.innerHTML += `<div class="taskbox"><p class = "todo"> ${tasks[i]}</p><button class = "delete-button" onclick="tasks.splice(${i},1); RefreshList(); ">Delete</button></div>`;

    }
    localStorage.setItem('todos', JSON.stringify(tasks));
}