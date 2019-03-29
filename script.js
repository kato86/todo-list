let todos = ['item 1', 'item 2', 'item 3', 'item 4'];

function displayTodos() {
    console.log('My todos: ', todos);
}

displayTodos(); // item 1, item 2, item 3, item 4

function addTodo(todo) {
    todos.push(todo);
    displayTodos();
}

addTodo('item 5'); // item 1, item 2, item 3, item 4, item 5

function changeTodo(position, newValue) {
    todos[position] = newValue;
    displayTodos();
}

changeTodo(0, 'new item 1'); // new item 1, item 2, item 3, item 4, item 5

function deleteTodo(position) {
    todos.splice(position, 1);
    displayTodos();
}

deleteTodo(-1);  // new item 1, item 2, item 3, item 4, item 5