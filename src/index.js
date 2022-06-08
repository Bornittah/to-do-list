const todo = [
  {
    index: 1,
    description: 'Take breakfast',
    completed: true
  },
  {
    index: 2,
    description: 'Attend morning session',
    completed: true
  },
  {
    index: 3,
    description: 'Work on the project',
    completed: false
  },
  {
    index: 4,
    description: 'Take lunch',
    completed: false
  }
];

const list = document.querySelector('.list');
let str = '';
todo.map((activity) => {
  const li = document.createElement("li");
  li.setAttribute('class', 'list-item');
  str = `<div>
            <input type="checkbox" id=${activity.index} >
            <label for="${activity.index}">${activity.description}</label>
          </div>
          <i class="fa-solid fa-ellipsis-vertical"></i>
          `;
  li.innerHTML = str;
  list.appendChild(li);
  return list;
});
