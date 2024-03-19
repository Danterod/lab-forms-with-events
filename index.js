document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Clear error message
        errorMessage.style.display = 'none';

        const todoText = input.value.trim();
        if (todoText === '') {
            // Show error message
            errorMessage.style.display = 'block';
        } else {
            // Create new to-do item
            const newTodo = document.createElement('li');
            newTodo.textContent = todoText;
            newTodo.addEventListener('click', function() {
                // line-through style on click
                if (newTodo.style.textDecoration === 'line-through') {
                    newTodo.style.textDecoration = 'none';
                } else {
                    newTodo.style.textDecoration = 'line-through';
                }
            });
            // Add new to-do to the list
            todoList.appendChild(newTodo);
            // Clear the input for new entry
            input.value = '';
        }
    });
});
