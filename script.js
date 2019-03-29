let todoList = {
    todos: [],
    displayTodos: function() {
        console.log('My Todos:');
        for (let i = 0; length = this.todos.length, i < length; i++) {
            console.log(this.todos[i].todoText);
        }
    },
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            complete: false
        });
        this.displayTodos();
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodos();
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodos();
    },
    toggleComplete: function(position) {
        let todo = this.todos[position];
        todo.complete = !todo.complete;
        this.displayTodos();
    }
};
