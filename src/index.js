import { Todo } from './modules/storage.js';

const form = document.querySelector('.form');
const inputField = document.querySelector('#activity');

Todo.display();
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = inputField.value;
  const todo = new Todo(description);
  todo.addTodo();
});

document.querySelectorAll('.list').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    document.querySelectorAll('.delete').forEach((link, id) => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        Todo.removeTodo(id);
      });
    });
  });
});