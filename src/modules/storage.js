export class Todo {
  constructor(index, description, completed) {
    this.index = index;
    this.description = description;
    this.completed = completed;
  }

  static getTodo = () => {
    let todoList;
    let data = localStorage.getItem('todo') 
    if (data === null) {
      todoList = [];
    }
    todoList = JSON.parse(localStorage.getItem('todo'));
    return todoList;
  }

  static addTodo = (todo) => {
    let todoList = Todo.getTodo();
    todoList = [...todoList, todo];
    localStorage.setItem('todo', JSON.stringify(todoList));
  }

  static display() {
    const todoList = Todo.getTodo();
    console.log(todoList)
    let str = '';
   
    todoList.forEach((todo) => {
      const list = document.querySelector('.list');
      const li = document.createElement('li');
      li.setAttribute('class', 'list-item');
      str = `<div class="form-group">
                <input type="checkbox" id=${todo.index}>
                <label for="${todo.index}">${todo.description}</label>
              </div>
             <div class="action-icons">
                <i class="fa-solid fa-ellipsis-vertical show-more"></i>
                <i class="fa fa-pen edit"></i>
                <i class="fa fa-trash-can delete"></i>
             </div>
              `;
      li.innerHTML = str;
      list.appendChild(li);
      console.log(li)
    });
   
    
    
  }

  static removeTodo = (index) => {
    // const todo = Todo.getTodo(index);
    // todoList.splice(index, 1);
    // console.log(todoList)
    // localStorage.setItem('todo', JSON.stringify(todoList));
    let data = JSON.parse(localStorage.getItem('todo'));
    const selectedTodo = data[index];
    const filteredList = data.filter((item) => item !== selectedTodo);
    localStorage.setItem('todo', JSON.stringify(filteredList));
    const newData = JSON.parse(localStorage.getItem('todo'));
    data = newData;
  }

}