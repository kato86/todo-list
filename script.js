let todoList = {
    todos: [],
    displayTodos: function() {
        if (this.todos.length === 0) {
            console.log('No items to display!');
        } else {
            console.log('My Todos:');
            for (let i = 0; length = this.todos.length, i < length; i++) {
                if (this.todos[i].complete === true) {
                    console.log(`[x] ${this.todos[i].todoText}`);
                } else {
                    console.log(`[ ] ${this.todos[i].todoText}`);
                }
            }
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
    },
    toggleAll: function() {
        totalTodos = this.todos.length;
        completeTodos = 0;

        for (let i = 0; i < totalTodos; i++) {
            if (this.todos[i].complete === true) {
                completeTodos++;
            }
        }

        if (totalTodos === completeTodos) {
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].complete = false;
            }
        } else {
            for (let i = 0; i < totalTodos; i++) {
                this.todos[i].complete = true;
            }
        }

        this.displayTodos();
    }
};
