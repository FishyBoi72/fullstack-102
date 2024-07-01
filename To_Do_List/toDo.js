document.getElementById('addTodoButton').addEventListener('click', function() {
    const todoInput = document.getElementById('newTodo');
    const todoText = todoInput.value.trim();

    if (todoText) {
        const li = document.createElement('li');
        li.textContent = todoText;
        li.classList.add('list-group-item');
        document.getElementById('todoList').appendChild(li);
        todoInput.value = '';
    }
});

document.getElementById('todoList').addEventListener('click', function(event) {
    if (event.target && event.target.nodeName === 'LI') {
        event.target.remove();
    }
});