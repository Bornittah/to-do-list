export class Todo {
  constructor(description) {
    this.description = description;
  }

  static clearInput = () => {
    let inputField = document.querySelector('#activity'); 
    inputField.value = '';
    return true;
  }

  static getTodo = () => {
    let todoList = [];
    let data = localStorage.getItem('todo') 
    if (data === null) {
      localStorage.setItem('todo', JSON.stringify(todoList));
    }
    todoList = JSON.parse(localStorage.getItem('todo'));
    return todoList;
  }

  static getIndex = () => {
    const todoList = Todo.getTodo();
   let index=0;
    if(todoList === null){
      return index+1;
    }
    return index = todoList.length+1;
  }

    addTodo = () => {
    let data = Todo.getTodo();
    const index= Todo.getIndex();

    const todo = {
      index: index,
      description: this.description,
      completed: false,
    };
  
    if (data === null) {
      data.push(todo);
      localStorage.setItem('todo', JSON.stringify(todoList))
    }
    let newtodoList = JSON.parse(localStorage.getItem('todo'));
    newtodoList = [...data, todo];
    localStorage.setItem('todo', JSON.stringify(newtodoList));
    Todo.clearInput();
    Todo.display();
  }

  static display() {
    const todoList =  Todo.getTodo();
    const list = document.querySelector('.list');
    let str='';
    todoList.forEach((todo) => {
    str += `<li class="list-item">
            <div class="form-group">
            <input type="checkbox" id="${todo.index}">
            <label for="${todo.index}">${todo.description}</label>
          </div>
          <div class="action-icons">
              <i class="fa-solid fa-ellipsis-vertical show-more"></i>
              <i class="fa fa-pen edit"></i>
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
  }
}