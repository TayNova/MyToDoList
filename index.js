document.getElementById('add-btn').onclick = addNewTask;


function addNewTask() {
    const taskNameElem = document.getElementById('taskinp');
    const taskName = taskNameElem.value;

    if (taskName) {
        const listElem = document.getElementById('ListTask');
        const newTaskElem = document.createElement('li');
        newTaskElem.innerText = taskName;

        listElem.prepend(newTaskElem);
    }

    taskNameElem.value = '';

}