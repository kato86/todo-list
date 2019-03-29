let todoList = {
    todos: ['item 1', 'item 2', 'item 3', 'item 4'],
    displayTodos: function() {
        console.log('My Todos: ', this.todos);
    },
    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodos();
    },
    changeTodo: function(position, newValue) {
        this.todos[position] = newValue;
        this.displayTodos();
    }
};

console.log(todoList.addTodo('item 5'));
console.log(todoList.changeTodo(0, 'new item 1'));


// function changeTodo(position, newValue) {
//     todos[position] = newValue;
//     displayTodos();
// }


// function deleteTodo(position) {
//     todos.splice(position, 1);
//     displayTodos();
// }

