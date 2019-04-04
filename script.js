let todoList = {
    todos: [],
    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            complete: false
        });
    },
    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },
    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },
    toggleComplete: function(position) {
        let todo = this.todos[position];
        todo.complete = !todo.complete;
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
    }
};

let handlers = {
    addTodo: function() {
        let addTodoTextInput = document.getElementById('addTodoTextInput');
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = '';
        view.displayTodos();
    },
    changeTodo: function() {
        let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
        let changeTodoTextInput = document.getElementById('changeTodoTextInput');
        todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
        changeTodoPositionInput.value = '';
        changeTodoTextInput.value = '';
        view.displayTodos();
    },
    deleteTodo: function() {
        let deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = '';
        view.displayTodos();
    },
    toggleComplete: function() {
        let toggleCompleteTodoPositionInput = document.getElementById('toggleCompleteTodoPositionInput');
        todoList.toggleComplete(toggleCompleteTodoPositionInput.valueAsNumber);
        toggleCompleteTodoPositionInput.value = '';
        view.displayTodos();
    },
    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    },
};

let view = {
    displayTodos: function() {
        let todoUl = document.querySelector('ul');
        todoUl.innerHTML = '';
        for (let i = 0; i < todoList.todos.length; i++) {
            let todoLi = document.createElement('li');
            let todo = todoList.todos[i];
            let todoTextWidthCompletion = '';

            if (todo.complete === true) {
                todoTextWidthCompletion = '[x] ' + todo.todoText;
            } else {
                todoTextWidthCompletion = '[ ] ' + todo.todoText;
            }

            todoLi.textContent = todoTextWidthCompletion;
            todoUl.appendChild(todoLi);
        }
    }
}
