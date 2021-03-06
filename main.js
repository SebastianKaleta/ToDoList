const toDoList = [];

const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const ul = document.querySelector('ul');
const listItems = document.getElementsByClassName('task');
const numberTask = document.querySelector('h2 span');
const searchInput = document.getElementById("searchInput")


const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = toDoList;
    tasks = tasks.filter(li =>
        li.textContent.toLowerCase().includes(searchText));
    ul.textContent = "";
    tasks.forEach(li => ul.appendChild(li))


}

const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1); //clean delete piece array
    numberTask.textContent = toDoList.length;
    renderList();
    
}

const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    if (titleTask === "") return; //block add empty task

    const task = document.createElement('li');
    task.className = "task";
    const btnDelete = document.createElement("button");
    btnDelete.classList.add('btn-delete')
    btnDelete.innerHTML = '<i class="far fa-trash-alt"></i>';
    task.innerHTML = titleTask;
    task.appendChild(btnDelete);

    
    toDoList.push(task); //send task to array
    renderList();
    ul.appendChild(task);
    input.value = "";
    numberTask.textContent = listItems.length;
    task.querySelector('button').addEventListener('click', removeTask)

}

const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
    })

}
form.addEventListener('submit', addTask)
searchInput.addEventListener('input', searchTask)