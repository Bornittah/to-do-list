const inputField = document.querySelector('#activity'); 
const form = document.querySelector('.form');
const list = document.querySelector('.list');

let todoList = [];
const add = (todo) => {
  todoList = [...todoList, todo];
  console.log(todoList)
  return todoList.map(function(obj, index) {
    return Object.assign({}, obj, { index: index+1 });
  });
}

const display = (todo) => {
  let str = '';
  const li = document.createElement('li');
  todoList.forEach((activity) => {
    li.setAttribute('class', 'list-item');
    str = `<div class="form-group">
              <input type="checkbox" id=${activity.index} >
              <label for="${activity.index}">${activity.description}</label>
            </div>
           <div class="action-icons">
              <i class="fa-solid fa-ellipsis-vertical show-more"></i>
              <i class="fa fa-pen edit"></i>
              <i class="fa fa-trash-can delete"></i>
           </div>
            `;
    li.innerHTML = str;
    return li;
  });
  list.appendChild(li);
}

const remove = (index) => {
  todoList.splice(index, 1);
  console.log(todoList)
  return todoList;
}


const clearFields = () => {
  inputField.value = '';
  return true;
}

let count = 1;
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const obj = {
    index: count++,
    description: inputField.value,
    completed: false,
  }
  add(obj);
  display(obj);
  clearFields();
});

document.querySelectorAll('.list').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    if(e.target.classList.contains('delete')){
    console.log('yes')
    remove(e.target);
    }
    
  });

});





