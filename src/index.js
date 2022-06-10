import { Todo } from './modules/storage.js';

const form = document.querySelector('.form');
const inputField = document.querySelector('#activity');

Todo.display();
Todo.checkedTask();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = inputField.value;
  const todo = new Todo(description);
  todo.addTodo();
});

document.querySelectorAll('.checkbox').forEach((link, id) => {
  link.addEventListener('change', (e) => {
    let completed = true;
    let uncomplted  = false;
    e.preventDefault();
    if(e.target.checked){
      Todo.completed(id, completed);
    }
    else{
      Todo.completed(id, uncomplted);
    }
  });
});

document.querySelectorAll('#textarea').forEach((link, id) => {
  link.addEventListener('keyup', (e) => {
    e.preventDefault();
    console.log(e.target.value)
    Todo.updateTodo(id, e.target.value);
  });
});

document.querySelectorAll('.delete').forEach((link, id) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    Todo.removeTodo(id);
  });
});

document.querySelectorAll('.clear').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    Todo.clearCompleted();
  });
});

document.querySelectorAll('.reset').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    Todo.reset();
  });
});
