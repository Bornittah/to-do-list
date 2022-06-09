import {Todo} from './modules/storage.js';
const form = document.querySelector('.form');
let inputField = document.querySelector('#activity'); 

Todo.display();
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let description = inputField.value;
  let todo = new Todo(description);
  todo.addTodo();
});

document.querySelectorAll('.list').forEach((link, id) => {
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








