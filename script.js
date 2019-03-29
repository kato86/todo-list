let todoList = {
    todos: [],
    displayTodos: function() {
        console.log('My Todos: ', this.todos);
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
