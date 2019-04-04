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
        this.todos.forEach(function(todo) {
            if (todo.complete === true) {
                completeTodos++;
            }
        });

        this.todos.forEach(function(todo) {
            if (completeTodos === totalTodos) {
                todo.complete = false;
            } else {
                todo.complete = true;
            }
        });
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
    deleteTodo: function(position) {
        todoList.deleteTodo(position);
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
        todoList.todos.forEach((todo, position) => {
            let todoLi = document.createElement('li');
            let todoTextWidthCompletion = '';

            if (todo.complete === true) {
                todoTextWidthCompletion = '[x] ' + todo.todoText;
            } else {
                todoTextWidthCompletion = '[ ] ' + todo.todoText;
            }

            todoLi.id = position;
            todoLi.textContent = todoTextWidthCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todoUl.appendChild(todoLi);
        })
    },
    createDeleteButton: function() {
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setUpEventListeners: function() {
        let todosUl = document.querySelector('ul');

        todosUl.addEventListener('click', function() {
            let elementClicked = event.target;
            
            if (elementClicked.className === 'deleteButton') {
                handlers.deleteTodo(parseInt(elementClicked.parentNode.id));        
            }
        });        
    }
};

view.setUpEventListeners();
