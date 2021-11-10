/**
 * Ultimate TODOs
 *
 * 1. Sortera todos baserat på titel ✅
 *
 * 2. Filtrera todos så ni har två listor, en med saker som är kvar att göra, och en lista med avklarade saker. ✅
 *
 * 3. Rendera ut varje TODO's ID till DOM istället för dess array-index.
 *
 * 4. Uppdatera click-eventhandler:n så att den hämtar ID från förälderns data-attribut istället för *index. Använd sedan detta ID för att hitta rätt TODO i `todos`-array:en.
 *
 * 5. (extra utmaning)
 * När man skapar en ny TODO, se om du kan få till en funktion som hämtar ut
 * det högsta ID som finns och tar +1 på det, och använder det talet som den
 * nya TODO:ns ID. ✅
 *
 */

const newTodoFormEl = document.querySelector("#new-todo-form");
const todosEl = document.querySelector("#todos");
const completedTodosEl = document.querySelector("#completed-todos");

// list of todos
let maxId = 0;
const todos = [
  {
    id: 1,
    title: "Eat",
    completed: true,
  },
  {
    id: 2,
    title: "Sleep",
    completed: false,
  },
  {
    id: 3,
    title: "Code",
    completed: true,
  },
  {
    id: 4,
    title: "Drink Coffee",
    completed: false,
  },
  {
    id: 5,
    title: "Learn Javascript",
    completed: false,
  },
];

todos.sort((a, b) => a.title.toUpperCase() > b.title.toUpperCase());

const renderTodos = () => {
  // empty UL of todos
  todosEl.innerHTML = "";
  completedTodosEl.innerHTML = "";

  const incompletedTodos = todos.filter(todo => !todo.completed);

  const completedTodos = todos.filter(todo => todo.completed);

  // render todos to DOM
  incompletedTodos.forEach((todo) => {
    todosEl.innerHTML += `<li class="list-group-item d-flex justify-content-between" data-id="${todo.id}">${todo.title}<button class="ms-2">🗑</button></li>`;
  });

  completedTodos.forEach((todo) => {
    completedTodosEl.innerHTML += `<li class="list-group-item d-flex justify-content-between" data-id="${todo.id}">${todo.title}<button class="ms-2">🗑</button></li>`;
  });
}; 

renderTodos();

newTodoFormEl.addEventListener("submit", (e) => {
  // stop form from being submitted to web server and hence causinga page reload
  e.preventDefault();

 // get todo to add to list of todos
 const newTodoDescription = e.target.newTodo.value;

  // empty input
  e.target.newTodo.value = "";

  // find max id of todos
  let maxId = 0;
  todos.forEach(todo => {
    if (todo.id > maxId) {
      maxId = todo.id;
    }
  }); 
  
  // increase maxId 
  const newTodoId = maxId + 1;

  // create an object for the new todo
  const newTodo = {
    id: newTodoId,
    title: newTodoDescription,
    completed: false,
  };

  todos.push(newTodo);

  //render todos
  renderTodos();
});

newTodoFormEl.addEventListener("reset", () => {
  // oh no u reset form
  // e.preventDefault();
  alert("gOOD job cleaning");
});

// get all todo-lists and attach a click-handler to each list
document.querySelectorAll('.todos').forEach(listEl => {
  listEl.addEventListener('click', e => {
     // check if user clicked on a LI element
  if (e.target.tagName === "LI") {
    // find id of clicked todo
    const todo_id = e.target.dataset.id;
    
    // find todo with id todo_id in list of todos
    const found_todo = todos.find(todo => todo.id == todo_id);

    // change completed status of found todo
    found_todo.completed = !found_todo.completed;

    renderTodos();
    } else if (e.target.tagName === "BUTTON") {
      // find id of clicked toto
      const todo_id = e.target.parentElement.dataset.id;

      // find array-index of todo with id "todo-id"
      const found_todo_index = todos.findIndex(todo => todo.id == todo_id);

    //remove item with index from array
    todos.splice(found_todo_index, 1);

    // render todos
    renderTodos();
  }
  });
});
