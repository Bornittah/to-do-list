import { Todo } from './modules/storage.js';
import './style.css';
import './modules/fontawesome/css/all.css';

const form = document.querySelector('.form');
const inputField = document.querySelector('#activity');
const submitBtn = document.querySelector('#submit');
const checkbox = document.querySelectorAll('.checkbox');

Todo.display();
Todo.checkedTask();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = inputField.value;
  const todo = new Todo(description);
  todo.addTodo();
});

inputField.addEventListener('focus', (e) => {
  e.preventDefault();
  submitBtn.style.display = 'block';
});

document.querySelector('#submit').addEventListener('click', (e) => {
  e.preventDefault();
  const description = inputField.value;
  const todo = new Todo(description);
  todo.addTodo();
});

document.querySelectorAll('.checkbox').forEach((link, id) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.checked === true) {
      Todo.completed(id, true);
    } else {
    Todo.completed(id, false);
    }
  });
});

document.querySelectorAll('#textarea').forEach((link, id) => {
  link.addEventListener('keyup', (e) => {
    e.preventDefault();
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

document.querySelector('.reset').addEventListener('click', (e) => {
  e.preventDefault();
  Todo.reset();
});
