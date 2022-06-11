import { Todo } from './storage.js';

export default function addEventListenersToListItems() {
  document.querySelectorAll('.checkbox').forEach((link) => {
      link.addEventListener('click', (e) => {
          link.nextElementSibling.classList.toggle('line-through');
          Todo.completed(link.id, e.target.checked);
      });
  });
  document.querySelectorAll('.textarea').forEach((link, index) => {
      link.addEventListener('keyup', (e) => {
          e.preventDefault();
          Todo.updateTodo(index, e.target.value);
      });
  });
  document.querySelectorAll('.delete').forEach((link, index) => {
      link.addEventListener('click', (e) => {
          e.preventDefault();
          Todo.removeTodo(index);
      });
  });
}