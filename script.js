let input = document.querySelector('.input');
let list = document.querySelector('.list');

let tasks = [
    {done: false, title: 'Estudar programação'},
    {done: false, title: 'Estudar programação'},
    {done: false, title: 'Estudar programação'}
];

input.addEventListener('keyup', (event) => {
    if(event.key.toLowerCase() === 'enter'){
        tasks.push({
            done:false,
            title:input.value
        })
        input.value = '';
        renderList()
    }
})

function renderList() {
    list.innerHTML = '';
    for (let i in tasks){
        let taskLi = document.createElement('li');

        let taskInput = document.createElement('input');
        taskInput.setAttribute('type', 'checkbox');

        if(tasks[i].done === true){
            taskInput.setAttribute('checked', 'true')
            taskLi.classList.add('done')
        }

        taskInput.addEventListener('click', () => {
            tasks[i].done = !tasks[i].done
            renderList()
        })

        taskLi.appendChild(taskInput);
        let taskSpan = document.createElement('span');
        taskSpan.innerHTML = tasks[i].title;
        taskLi.appendChild(taskSpan);
        list.appendChild(taskLi)
    }
}

renderList();