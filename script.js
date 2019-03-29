let todoList = {
    todos: ['item 1', 'item 2', 'item 3', 'item 4'],
    displayTodos: function() {
        console.log('My Todos: ', this.todos);
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    }
};

console.log(todoList.addTodo('item 5'));

// addTodo('item 5'); // item 1, item 2, item 3, item 4, item 5

// function changeTodo(position, newValue) {
//     todos[position] = newValue;
//     displayTodos();
// }

// changeTodo(0, 'new item 1'); // new item 1, item 2, item 3, item 4, item 5

// function deleteTodo(position) {
//     todos.splice(position, 1);
//     displayTodos();
// }

// deleteTodo(-1);  // new item 1, item 2, item 3, item 4, item 5