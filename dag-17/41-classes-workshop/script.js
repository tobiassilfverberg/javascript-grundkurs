/**
 * Classes workshop
 *
 * Instanser av Todo-klassen måste ha en titel (title) och som standard ska de
 * vara ej avklarade. Det ska finnas metoder för att hämta ut titel
 * (`getTitle()`), veta om todo:n är avklarad eller ej (`isCompleted`), samt
 * både markera todo:n som avklarad (`setCompleted()`) och som ej avklarad
 * `setIncomplete()`.
 *
 * 1. Skapa en lista som du skapar ett antal Todo-objekt i.
 *
 * 2. Sätt några av objekten i listan till avklarade (efter att du skapat dem
 * och lagt dem i listan).
 *
 * 3. Loopa över listan och skriv ut till konsolen titel för varje todo samt om
 * den är avklarad eller ej.
 *
 * Om du hinner klart, se om du kan skapa en klass för todo-listan, så att vi
 * kan ha flera olika listor som var och en kan ha Todo-objekt i sig.
 * Listan ska som standard vara tom, samt ha metoderna `addTodo()`,
 * `getTodos()` och `sortTodos()`.
 *
 */

class TodoList {
    constructor(todo) {
        this.todo = todo;
    }

    addTodo() {
        todoList.push(this.todo);
    }

    getTodos() {
        return todoList;
    }

    sortTodos() {
        return todoList.sort();
    }
}

class Todo {
    completed = false 

    constructor(title) {
        // this will be called when a new instance of this class is created
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    isCompleted() {
        return this.completed;
    }

    setCompleted() {
        this.completed = true;
    }

    setIncomplete() {
        this.completed = false;
    }
}

const todoList = [];

const todos = [
    new Todo("Äta lunch"),
    new Todo("Tömma diskmaskinen"),
    new Todo("Skapa fler todos"),
    new Todo("Fixa dricka"),
    new Todo("Dammsuga"),
];

todos[0].setCompleted();
todos[3].setCompleted();
todos[4].setCompleted();

todos.forEach(todo => {
    console.log(todo);
})

