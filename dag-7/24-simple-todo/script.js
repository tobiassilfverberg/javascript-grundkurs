/**
 * Simple TODOs
 * ## Steg 1
 * Skapa en lista av TODOs. Man ska kunna lägga till nya genom att klicka på en knapp som tar emot TODO-beskrivning genom en prompt().
 *
 * ## Steg 2
 * Gör så att det även gå att ta bort TODOs.
 *
 * ## Steg 3
 * Lägg därefter till en input-fält istället och skriv så att knappen för att lägga till TODO istället hämtar beskrivningen ifrån input-fältet.
 *
 * ## Steg 4
 * Se om du kan få till så att istället för att ta bort TODOs så blir dem överstrukna. Kan du kanske kombinera båda så att när man klickar på texten så blir dem överstrukna, men om man klickar på en knapp på varje TODO så tags dem bort?
 *
 * Exempel:
 *
 * <li>list item 1 <button>🗑</button></li>
 *
 */

const todos = document.querySelector("#todos");

btnAddNewTodo.addEventListener("click", () => {
  let newItem = document.querySelector("#new-todo-description");
  todos.innerHTML += `<li>${newItem.value} <button>🗑</button></li>`;
  newItem.value = "";
});

document
  .querySelector("#new-todo-description")
  .addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      let newItem = document.querySelector("#new-todo-description");
      todos.innerHTML += `<li>${newItem.value} <button>🗑</button></li>`;
      newItem.value = "";
    }
  });

document
  .querySelector("#new-todo-form")
  .addEventListener("submit", (e) => e.preventDefault());

document.querySelector("ul").addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.style.textDecoration = "line-through";
  }
  if (e.target.tagName === "BUTTON") {
    e.target.parentElement.remove();
  }
});
