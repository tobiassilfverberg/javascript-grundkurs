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
const todos = [
  {
    id: 1,
    title: "Eat",
    completed: false,
  },
  {
    id: 2,
    title: "Sleep",
    completed: false,
  },
  {
    id: 3,
    title: "Code",
    completed: false,
  },
  {
    id: 4,
    title: "Drink Coffee",
    completed: false,
  },
];

const renderTodos = () => {
  // empty UL of todos
  todosEl.innerHTML = "";
  completedTodosEl.innerHTML = "";

  // render todos to DOM
  todos.sort((a, b) => a.title.toUpperCase() > b.title.toUpperCase());
  console.log(todos);
  todos.forEach((todo, i) => {
    console.log(`Todo at index ${i} is: ${todo.title}`);
    if (todo.completed === true) {
      completedTodosEl.innerHTML += `<li class="list-group-item completed d-flex justify-content-between" id="${todo.id}" data-index="${i}">
             ${todo.title}<button class="ms-2">🗑</button></li>`;
    } else {
      todosEl.innerHTML += `<li class="list-group-item d-flex justify-content-between" id="${todo.id}" data-index="${i}">
             ${todo.title}<button class="ms-2">🗑</button></li>`;
    }
  });
};

renderTodos();

newTodoFormEl.addEventListener("submit", (e) => {
  // stop form from being submitted to web server and hence causinga page reload
  e.preventDefault();

  let newTodo = [...todos].sort((a, b) => b.id - a.id);

  // get todo to add new object to array
  todos.push({
    id: newTodo[0].id + 1,
    title: e.target.newTodo.value,
    completed: false,
  });

  // empty input
  e.target.newTodo.value = "";

  //render todos
  renderTodos();
});

newTodoFormEl.addEventListener("reset", () => {
  // oh no u reset form
  // e.preventDefault();
  alert("gOOD job cleaning");
});

todosEl.addEventListener("click", (e) => {
  // check if user clicked on a LI element
  if (e.target.tagName === "LI") {
    // deklarera variabeln index för att veta vilken li som blev klickad
    const index = e.target.dataset.index;
    // kolla om property "completed" är false
    if (todos[index].completed === false) {
      // om "completed" är false, ändra "completed" till true, klassen "completed" läggs på den klickade li:n
      todos[index].completed = true;
      // rendera ut ny todo-lista med klassen "completed" på den li som blev klickad
      renderTodos();
    } // kolla annars om property "completed" är true
    else if (todos[index].completed === true) {
      // isåfall, sätt "completed" till false, klassen "completed" tas bort från klickade li:n
      todos[index].completed = false;
      // rendera ut ny todo-lista utan klassen "completed"
      renderTodos();
    }
  } else if (e.target.tagName === "BUTTON") {
    //remove list item from list and array
    const buttonEl = e.target;
    const liEl = buttonEl.parentElement;
    const index = liEl.dataset.index; //data-index =""

    // shorter version of above 3 lines
    // const index = e.target.parentElement.dataset.index;

    //remove item with index from array
    todos.splice(index, 1);

    // render todos
    renderTodos();
  }
});

completedTodosEl.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    // deklarera variabeln index för att veta vilken li som blev klickad
    const index = e.target.dataset.index;
    console.log(index);
    // kolla om property "completed" är false
    if (todos[index].completed === false) {
      // om "completed" är false, ändra "completed" till true, klassen "completed" läggs på den klickade li:n
      todos[index].completed = true;
      // rendera ut ny todo-lista med klassen "completed" på den li som blev klickad
      renderTodos();
    } // kolla annars om property "completed" är true
    else if (todos[index].completed === true) {
      // isåfall, sätt "completed" till false, klassen "completed" tas bort från klickade li:n
      todos[index].completed = false;
      // rendera ut ny todo-lista utan klassen "completed"
      renderTodos();
    }
  } else if (e.target.tagName === "BUTTON") {
    //remove list item from list and array
    const buttonEl = e.target;
    const liEl = buttonEl.parentElement;
    const index = liEl.dataset.index; //data-index =""

    // shorter version of above 3 lines
    // const index = e.target.parentElement.dataset.index;

    //remove item with index from array
    todos.splice(index, 1);

    // render todos
    renderTodos();
  }
});
