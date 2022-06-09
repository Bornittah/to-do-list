import {Todo} from './modules/storage.js';

const form = document.querySelector('.form');
let inputField = document.querySelector('#activity'); 
const completed = false;
let index = 1;

Todo.display();

form.addEventListener('submit', (e) => {
  let description = inputField.value;
  let todo = new Todo(index, description, completed);
  console.log(description);
  e.preventDefault();
  Todo.addTodo(todo);
  Todo.display();
  description = '';
});

document.querySelectorAll('.list').forEach((link, id) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.classList.contains('delete')){
    console.log(id)
    Todo.removeTodo(id);
    }
    
  });

});






