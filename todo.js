const toDoList = document.querySelector('.to-do-list');
const input = document.querySelector('input');
const inputImg = document.querySelector('.task-input svg');
const addButton = document.querySelector('.addToListButton');
const inputDiv = document.querySelector('.task-input');

addButton.addEventListener('click', add);
input.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        add();
    }
});
function add() {
    if (toDoList.childElementCount < 5) {
        let newTask = document.createElement('div');
        newTask.className = 'task';
        newTask.innerHTML =
            `<p contentEditable="true" class="tasks"> ${input.value}</p>
    <img class="gray" src="./Assets/delete-icon.svg" alt="cancel">
    
`

        toDoList.style.display = 'block'
        toDoList.appendChild(newTask);
        input.value = '';
        if (toDoList.childElementCount == 5) {
            inputDiv.style.display = 'none';
        } else if (toDoList.childElementCount < 5) {
            inputDiv.style.display = 'block';
        }
        const grayCancel = document.querySelectorAll('.gray');
        const deleteList = document.querySelectorAll('.task img');
        deleteList.forEach(element => {
            grayCancel.forEach((e) => {
                e.addEventListener('mouseover', function (event) {
                    event.target.setAttribute('src', './Assets/cancel-blueviolet.svg');
                })
                e.addEventListener('mouseout', function (event) {
                    event.target.setAttribute('src', './Assets/delete-icon.svg')
                })
            })
            element.addEventListener('click', function (e) {

                e.target.parentElement.remove();
                if (toDoList.childElementCount == 5) {
                    inputDiv.style.display = 'none';
                } else if (toDoList.childElementCount < 5 && toDoList.childElementCount > 0) {
                    inputDiv.style.display = 'block';
                } else if (toDoList.childElementCount == 0) {
                    inputDiv.style.display = 'block';
                    toDoList.style.display = 'none';
                }
            })
        })
    }
}

inputImg.addEventListener('click', function () {
    input.value = '';
})

const arrowDown = document.querySelector('.sort-icon svg:first-child');
const arrowUp = document.querySelector('.sort-icon svg:last-child')

arrowDown.addEventListener('click', function () {
    this.style.display = 'none';
    arrowUp.style.display = 'inline';

    const tasks = [...document.querySelectorAll('.task')];
    tasks.sort((a, b) => { return parseInt(b.innerText) - parseInt(a.innerText) });
    toDoList.replaceChildren(...toDoList.children, ...tasks)
});
arrowUp.addEventListener('click', function () {
    this.style.display = 'none';
    arrowDown.style.display = 'inline';
    
    const tasks = [...document.querySelectorAll('.task')];
    tasks.sort((a, b) => { return parseInt(a.innerText) - parseInt(b.innerText) });
    toDoList.replaceChildren(...toDoList.children, ...tasks)
})



