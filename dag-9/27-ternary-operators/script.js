/**
 * Ternary operators
 *
 */

let username = prompt("Enter your usernane");

let msg = username ? `Welcome, ${username}` : "Welcome, Guest";

/* let msg;

if (username) {
  msg = `Welcome, ${username}`;
} else {
  msg = "Welcome, Guest";
} */

console.log(msg);
document.querySelector("#greetings").innerText = msg;
