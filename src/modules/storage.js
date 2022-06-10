export class Todo {
  constructor(description) {
    this.description = description;
  }

  static clearInput = () => {
    const inputField = document.querySelector('#activity');
    inputField.value = '';
    return true;
  }

  static getTodo = () => {
    let todoList = [];
    const data = localStorage.getItem('todo');
    if (data === null) {
      localStorage.setItem('todo', JSON.stringify(todoList));
    }
    todoList = JSON.parse(localStorage.getItem('todo'));
    return todoList;
  }

  static getIndex = () => {
    const todoList = Todo.getTodo();
    let index = 0;
    if (todoList === null) {
      return index + 1;
    }
    index = todoList.length + 1;
    return index;
  }

  static updateIndex = () => {
    const todoList = Todo.getTodo();
    todoList.forEach((item) => {
      const indx = todoList.findIndex((obj) => obj === item);
      item.index = indx + 1;
    });
    localStorage.setItem('todo', JSON.stringify(todoList));
  }

  addTodo = () => {
    const data = Todo.getTodo();
    const index = Todo.getIndex();
    const todo = {
      index,
      description: this.description,
      completed: false,
    };

    if (data === null) {
      data.push(todo);
      localStorage.setItem('todo', JSON.stringify(data));
    }
    let newtodoList = JSON.parse(localStorage.getItem('todo'));
    newtodoList = [...data, todo];
    localStorage.setItem('todo', JSON.stringify(newtodoList));
    Todo.clearInput();
    Todo.display();
    Todo.updateIndex();
  }

  static display() {
    const todoList = Todo.getTodo();
    const list = document.querySelector('.list');
    let str = '';
    todoList.forEach((todo) => {
      str += `<li class="list-item">
            <div class="form-group">
            <input type="checkbox"  id="${todo.index}" class="checkbox">
            <textarea id="textarea">${todo.description}</textarea>
          </div>
          <div class="action-icons">
              <i class="fa fa-trash-can delete"></i>
          </div>
          </li>`;
    });
    list.innerHTML = str;
  }

  static removeTodo = (index) => {
    const todoList = Todo.getTodo(index);
    todoList.splice(index, 1);
    localStorage.setItem('todo', JSON.stringify(todoList));
    Todo.display();
    Todo.updateIndex();
  }

  static updateTodo = (index, value) => {
    const todoList = Todo.getTodo();
    todoList.forEach((item) => {
      const indx = todoList.findIndex((obj) => obj === item);
      if (index === indx) {
        item.description = value;
      }
      localStorage.setItem('todo', JSON.stringify(todoList));
    });
  }

  static completed = (index, value) => {
    const todoList = Todo.getTodo();
    todoList.forEach((item) => {
      const indx = todoList.findIndex((obj) => obj === item);
      if (index === indx) {
        item.completed = value;
      }
      localStorage.setItem('todo', JSON.stringify(todoList));
    });
  }

  static clearCompleted = () => {
    const todoList = Todo.getTodo();
    const newtodoList = [];
    todoList.forEach((item) => {
      if (item.completed === false) {
        newtodoList.push(item);
      }
      localStorage.setItem('todo', JSON.stringify(newtodoList));
      Todo.display();
    });
  }

  static checkedTask = () => {
    const todoList = Todo.getTodo();
    todoList.forEach((item) => {
      if (item.completed === true) {
        Todo.display();
        document.querySelector('.checkbox').checked = true;
      }
    });
  }

  static reset = () => {
    const todoList = Todo.getTodo();
    todoList.splice(0, todoList.length);
    localStorage.setItem('todo', JSON.stringify(todoList));
    Todo.display();
  }
}