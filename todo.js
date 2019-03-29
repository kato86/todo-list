let todos = ['item 1', 'item 2', 'item 3', 'item 4'];

function displayTodos() {
    console.log('My todos: ', todos);
}

displayTodos();

function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

addTodo('item 5');