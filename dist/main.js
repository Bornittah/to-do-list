"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["main"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/storage.js */ "./src/modules/storage.js");


const form = document.querySelector('.form');
const inputField = document.querySelector('#activity');

_modules_storage_js__WEBPACK_IMPORTED_MODULE_0__.Todo.display();
_modules_storage_js__WEBPACK_IMPORTED_MODULE_0__.Todo.checkedTask();

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const description = inputField.value;
  const todo = new _modules_storage_js__WEBPACK_IMPORTED_MODULE_0__.Todo(description);
  todo.addTodo();
});

document.querySelectorAll('.checkbox').forEach((link, id) => {
  link.addEventListener('change', (e) => {
    const completed = true;
    const uncomplted = false;
    e.preventDefault();
    if (e.target.checked) {
      _modules_storage_js__WEBPACK_IMPORTED_MODULE_0__.Todo.completed(id, completed);
    } else {
      _modules_storage_js__WEBPACK_IMPORTED_MODULE_0__.Todo.completed(id, uncomplted);
    }
  });
});

document.querySelectorAll('#textarea').forEach((link, id) => {
  link.addEventListener('keyup', (e) => {
    e.preventDefault();
    _modules_storage_js__WEBPACK_IMPORTED_MODULE_0__.Todo.updateTodo(id, e.target.value);
  });
});

document.querySelectorAll('.delete').forEach((link, id) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    _modules_storage_js__WEBPACK_IMPORTED_MODULE_0__.Todo.removeTodo(id);
  });
});

document.querySelectorAll('.clear').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    _modules_storage_js__WEBPACK_IMPORTED_MODULE_0__.Todo.clearCompleted();
  });
});

document.querySelectorAll('.reset').forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    _modules_storage_js__WEBPACK_IMPORTED_MODULE_0__.Todo.reset();
  });
});


/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
class Todo {
  constructor(description) {
    this.description = description;
  }

  static clearInput = () => {
    const inputField = document.querySelector('#activity');
    inputField.value = '';
    return true;
  }

  static getTodo = () => {
    let todoList = [];
    const data = localStorage.getItem('todo');
    if (data === null) {
      localStorage.setItem('todo', JSON.stringify(todoList));
    }
    todoList = JSON.parse(localStorage.getItem('todo'));
    return todoList;
  }

  static getIndex = () => {
    const todoList = Todo.getTodo();
    let index = 0;
    if (todoList === null) {
      return index + 1;
    }
    index = todoList.length + 1;
    return index;
  }

  static updateIndex = () => {
    const todoList = Todo.getTodo();
    todoList.forEach((item) => {
      const indx = todoList.findIndex((obj) => obj === item);
      item.index = indx + 1;
    });
    localStorage.setItem('todo', JSON.stringify(todoList));
  }

  addTodo = () => {
    const data = Todo.getTodo();
    const index = Todo.getIndex();
    const todo = {
      index,
      description: this.description,
      completed: false,
    };

    if (data === null) {
      data.push(todo);
      localStorage.setItem('todo', JSON.stringify(data));
    }
    let newtodoList = JSON.parse(localStorage.getItem('todo'));
    newtodoList = [...data, todo];
    localStorage.setItem('todo', JSON.stringify(newtodoList));
    Todo.clearInput();
    Todo.display();
    Todo.updateIndex();
  }

  static display() {
    const todoList = Todo.getTodo();
    const list = document.querySelector('.list');
    let str = '';
    todoList.forEach((todo) => {
      str += `<li class="list-item">
            <div class="form-group">
            <input type="checkbox"  id="${todo.index}" class="checkbox">
            <textarea id="textarea">${todo.description}</textarea>
          </div>
          <div class="action-icons">
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
    Todo.updateIndex();
  }

  static updateTodo = (index, value) => {
    const todoList = Todo.getTodo();
    todoList.forEach((item) => {
      const indx = todoList.findIndex((obj) => obj === item);
      if (index === indx) {
        item.description = value;
      }
      localStorage.setItem('todo', JSON.stringify(todoList));
    });
  }

  static completed = (index, value) => {
    const todoList = Todo.getTodo();
    todoList.forEach((item) => {
      const indx = todoList.findIndex((obj) => obj === item);
      if (index === indx) {
        item.completed = value;
      }
      localStorage.setItem('todo', JSON.stringify(todoList));
    });
  }

  static clearCompleted = () => {
    const todoList = Todo.getTodo();
    const newtodoList = [];
    todoList.forEach((item) => {
      if (item.completed === false) {
        newtodoList.push(item);
      }
      localStorage.setItem('todo', JSON.stringify(newtodoList));
      Todo.display();
    });
  }

  static checkedTask = () => {
    const todoList = Todo.getTodo();
    todoList.forEach((item) => {
      if (item.completed === true) {
        Todo.display();
        document.querySelector('.checkbox').checked = true;
      }
    });
  }

  static reset = () => {
    const todoList = Todo.getTodo();
    todoList.splice(0, todoList.length);
    localStorage.setItem('todo', JSON.stringify(todoList));
    Todo.display();
  }
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUE0Qzs7QUFFNUM7QUFDQTs7QUFFQSw2REFBWTtBQUNaLGlFQUFnQjs7QUFFaEI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHFEQUFJO0FBQ3ZCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLCtEQUFjO0FBQ3BCLE1BQU07QUFDTixNQUFNLCtEQUFjO0FBQ3BCO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsSUFBSSxnRUFBZTtBQUNuQixHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdFQUFlO0FBQ25CLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUksb0VBQW1CO0FBQ3ZCLEdBQUc7QUFDSCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLElBQUksMkRBQVU7QUFDZCxHQUFHO0FBQ0gsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDdERNO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFdBQVc7QUFDckQsc0NBQXNDLGlCQUFpQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vbW9kdWxlcy9zdG9yYWdlLmpzJztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb3JtJyk7XG5jb25zdCBpbnB1dEZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjdGl2aXR5Jyk7XG5cblRvZG8uZGlzcGxheSgpO1xuVG9kby5jaGVja2VkVGFzaygpO1xuXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBpbnB1dEZpZWxkLnZhbHVlO1xuICBjb25zdCB0b2RvID0gbmV3IFRvZG8oZGVzY3JpcHRpb24pO1xuICB0b2RvLmFkZFRvZG8oKTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2hlY2tib3gnKS5mb3JFYWNoKChsaW5rLCBpZCkgPT4ge1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChlKSA9PiB7XG4gICAgY29uc3QgY29tcGxldGVkID0gdHJ1ZTtcbiAgICBjb25zdCB1bmNvbXBsdGVkID0gZmFsc2U7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmIChlLnRhcmdldC5jaGVja2VkKSB7XG4gICAgICBUb2RvLmNvbXBsZXRlZChpZCwgY29tcGxldGVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgVG9kby5jb21wbGV0ZWQoaWQsIHVuY29tcGx0ZWQpO1xuICAgIH1cbiAgfSk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnI3RleHRhcmVhJykuZm9yRWFjaCgobGluaywgaWQpID0+IHtcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFRvZG8udXBkYXRlVG9kbyhpZCwgZS50YXJnZXQudmFsdWUpO1xuICB9KTtcbn0pO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZGVsZXRlJykuZm9yRWFjaCgobGluaywgaWQpID0+IHtcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFRvZG8ucmVtb3ZlVG9kbyhpZCk7XG4gIH0pO1xufSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jbGVhcicpLmZvckVhY2goKGxpbmspID0+IHtcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIFRvZG8uY2xlYXJDb21wbGV0ZWQoKTtcbiAgfSk7XG59KTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlc2V0JykuZm9yRWFjaCgobGluaykgPT4ge1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgVG9kby5yZXNldCgpO1xuICB9KTtcbn0pO1xuIiwiZXhwb3J0IGNsYXNzIFRvZG8ge1xuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbikge1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgfVxuXG4gIHN0YXRpYyBjbGVhcklucHV0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGlucHV0RmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWN0aXZpdHknKTtcbiAgICBpbnB1dEZpZWxkLnZhbHVlID0gJyc7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0aWMgZ2V0VG9kbyA9ICgpID0+IHtcbiAgICBsZXQgdG9kb0xpc3QgPSBbXTtcbiAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8nKTtcbiAgICBpZiAoZGF0YSA9PT0gbnVsbCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8nLCBKU09OLnN0cmluZ2lmeSh0b2RvTGlzdCkpO1xuICAgIH1cbiAgICB0b2RvTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8nKSk7XG4gICAgcmV0dXJuIHRvZG9MaXN0O1xuICB9XG5cbiAgc3RhdGljIGdldEluZGV4ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gVG9kby5nZXRUb2RvKCk7XG4gICAgbGV0IGluZGV4ID0gMDtcbiAgICBpZiAodG9kb0xpc3QgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBpbmRleCArIDE7XG4gICAgfVxuICAgIGluZGV4ID0gdG9kb0xpc3QubGVuZ3RoICsgMTtcbiAgICByZXR1cm4gaW5kZXg7XG4gIH1cblxuICBzdGF0aWMgdXBkYXRlSW5kZXggPSAoKSA9PiB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBUb2RvLmdldFRvZG8oKTtcbiAgICB0b2RvTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBpbmR4ID0gdG9kb0xpc3QuZmluZEluZGV4KChvYmopID0+IG9iaiA9PT0gaXRlbSk7XG4gICAgICBpdGVtLmluZGV4ID0gaW5keCArIDE7XG4gICAgfSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8nLCBKU09OLnN0cmluZ2lmeSh0b2RvTGlzdCkpO1xuICB9XG5cbiAgYWRkVG9kbyA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRhID0gVG9kby5nZXRUb2RvKCk7XG4gICAgY29uc3QgaW5kZXggPSBUb2RvLmdldEluZGV4KCk7XG4gICAgY29uc3QgdG9kbyA9IHtcbiAgICAgIGluZGV4LFxuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgIH07XG5cbiAgICBpZiAoZGF0YSA9PT0gbnVsbCkge1xuICAgICAgZGF0YS5wdXNoKHRvZG8pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8nLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfVxuICAgIGxldCBuZXd0b2RvTGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG8nKSk7XG4gICAgbmV3dG9kb0xpc3QgPSBbLi4uZGF0YSwgdG9kb107XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8nLCBKU09OLnN0cmluZ2lmeShuZXd0b2RvTGlzdCkpO1xuICAgIFRvZG8uY2xlYXJJbnB1dCgpO1xuICAgIFRvZG8uZGlzcGxheSgpO1xuICAgIFRvZG8udXBkYXRlSW5kZXgoKTtcbiAgfVxuXG4gIHN0YXRpYyBkaXNwbGF5KCkge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gVG9kby5nZXRUb2RvKCk7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0Jyk7XG4gICAgbGV0IHN0ciA9ICcnO1xuICAgIHRvZG9MaXN0LmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIHN0ciArPSBgPGxpIGNsYXNzPVwibGlzdC1pdGVtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiICBpZD1cIiR7dG9kby5pbmRleH1cIiBjbGFzcz1cImNoZWNrYm94XCI+XG4gICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJ0ZXh0YXJlYVwiPiR7dG9kby5kZXNjcmlwdGlvbn08L3RleHRhcmVhPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY3Rpb24taWNvbnNcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10cmFzaC1jYW4gZGVsZXRlXCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+YDtcbiAgICB9KTtcbiAgICBsaXN0LmlubmVySFRNTCA9IHN0cjtcbiAgfVxuXG4gIHN0YXRpYyByZW1vdmVUb2RvID0gKGluZGV4KSA9PiB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBUb2RvLmdldFRvZG8oaW5kZXgpO1xuICAgIHRvZG9MaXN0LnNwbGljZShpbmRleCwgMSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8nLCBKU09OLnN0cmluZ2lmeSh0b2RvTGlzdCkpO1xuICAgIFRvZG8uZGlzcGxheSgpO1xuICAgIFRvZG8udXBkYXRlSW5kZXgoKTtcbiAgfVxuXG4gIHN0YXRpYyB1cGRhdGVUb2RvID0gKGluZGV4LCB2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gVG9kby5nZXRUb2RvKCk7XG4gICAgdG9kb0xpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3QgaW5keCA9IHRvZG9MaXN0LmZpbmRJbmRleCgob2JqKSA9PiBvYmogPT09IGl0ZW0pO1xuICAgICAgaWYgKGluZGV4ID09PSBpbmR4KSB7XG4gICAgICAgIGl0ZW0uZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvJywgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBjb21wbGV0ZWQgPSAoaW5kZXgsIHZhbHVlKSA9PiB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBUb2RvLmdldFRvZG8oKTtcbiAgICB0b2RvTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBpbmR4ID0gdG9kb0xpc3QuZmluZEluZGV4KChvYmopID0+IG9iaiA9PT0gaXRlbSk7XG4gICAgICBpZiAoaW5kZXggPT09IGluZHgpIHtcbiAgICAgICAgaXRlbS5jb21wbGV0ZWQgPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvJywgSlNPTi5zdHJpbmdpZnkodG9kb0xpc3QpKTtcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBjbGVhckNvbXBsZXRlZCA9ICgpID0+IHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IFRvZG8uZ2V0VG9kbygpO1xuICAgIGNvbnN0IG5ld3RvZG9MaXN0ID0gW107XG4gICAgdG9kb0xpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0uY29tcGxldGVkID09PSBmYWxzZSkge1xuICAgICAgICBuZXd0b2RvTGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8nLCBKU09OLnN0cmluZ2lmeShuZXd0b2RvTGlzdCkpO1xuICAgICAgVG9kby5kaXNwbGF5KCk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgY2hlY2tlZFRhc2sgPSAoKSA9PiB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBUb2RvLmdldFRvZG8oKTtcbiAgICB0b2RvTGlzdC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoaXRlbS5jb21wbGV0ZWQgPT09IHRydWUpIHtcbiAgICAgICAgVG9kby5kaXNwbGF5KCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveCcpLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIHJlc2V0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gVG9kby5nZXRUb2RvKCk7XG4gICAgdG9kb0xpc3Quc3BsaWNlKDAsIHRvZG9MaXN0Lmxlbmd0aCk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG8nLCBKU09OLnN0cmluZ2lmeSh0b2RvTGlzdCkpO1xuICAgIFRvZG8uZGlzcGxheSgpO1xuICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9