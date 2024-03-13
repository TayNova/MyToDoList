document.getElementById('add-btn').onclick = addNewTask;

document.addEventListener('keydown', check)
function check(ev) {
    if (ev.key==='Enter'){
        addNewTask();
    }
    
}

document.getElementById('ListTask').onclick = markDone
function markDone(ev){
    const elem = ev.target
    elem.style.textDecoration = 'line-through'
}

document.getElementById('ListTask').onmouseover = showActions
function showActions(ev){
    const btn = document.createElement('button')
    btn.innerText='Удалить'
    ev.target.append(btn)
}

document.getElementById('ListTask').onmouseout = hideActions
function hideActions(ev){
    document.getElementsByTagName
    const btn = ev.target.getElementsByTagName('button').item(0)
    btn.parentNode.removeChild(btn)
}



function addNewTask() {
    const taskNameElem = document.getElementById('taskinp');
    const taskName = taskNameElem.value.trim();

    if (taskName) {
        const listElem = document.getElementById('ListTask');
        const newTaskElem = document.createElement('li');
        newTaskElem.innerText = taskName;

        listElem.prepend(newTaskElem);
    }

    taskNameElem.value = '';

}