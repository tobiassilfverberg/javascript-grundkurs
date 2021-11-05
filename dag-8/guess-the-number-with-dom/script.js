/* Instructions
1. En input-box där man kan gissa på ett tal. En knapp för att gissa. ✅
    1.2 Visa resultatet i en alert. ✅
	1.3 Visa om talet var rätt eller inte i ett HTML-element. ✅
	
2. Visa antalet gissningar hittills i ett HTML-element. ✅
	
3. Visa om det gissade talet var för högt eller lågt i ett HTML-element. ✅
	
4. Skapa en knapp för att starta om spelet (ett nytt tal ska slumpas fram och antalet gissningar ska nollställas). ✅ */

//skapa random tal
let randomNumber = Math.round(Math.random() * 10);
console.log(randomNumber);

//deklarera antal gissningar och sätt till 0
let guesses = 0;

//deklarera formuläret
const newGuessEl = document.querySelector("#guessTheNumber");

//deklarera input fältet för gissning
let guessInputField = document.querySelector("#userGuess");
//rensa input fältet
const clearInput = function () {
  //varje gång användaren "submitar", rensa tidigare gissning
  guessInputField.value = "";
};

//deklarera knappen starta om
const startOverBtn = document.querySelector("#startNewGame");

//deklarera knappen submit
let submitButton = document.querySelector("#submitButton");

//deklerar output element för att visa rätt/fel, högt/lågt, antal gissningar, gissat tal
const outputFeedback = document.querySelector("#guessFeedback");

//submit event för formen
newGuessEl.addEventListener("submit", (e) => {
  //förhindra att sidan laddar om
  e.preventDefault();

  //varje gång användaren "submitar", rensa tidigare text
  outputFeedback.innerHTML = "";

  //deklarera användarens gissning
  let userAnswer = Number(e.target.userGuess.value);

  //varje gång användaren har "submittat", öka antalet gissningar med 1
  guesses++;

  //om användaren svarar rätt
  if (randomNumber === userAnswer) {
    outputFeedback.innerHTML = `Du gissade på ${userAnswer}, det är rätt svar! 😁. Du gissade rätt på ${guesses} försök.`;
    clearInput();
    submitButton.disabled = true;
    guessInputField.disbled = true;
  } else if (userAnswer > randomNumber) {
    //om användaren gissar för högt
    outputFeedback.innerHTML = `Du gissade på: ${userAnswer}, trash! Det var för högt 😒. Du har gissat ${guesses} ${
      guesses === 1 ? "gång" : "gånger"
    }`;
    clearInput();
  } else if (userAnswer < randomNumber) {
    //om användaren gissar för lågt
    outputFeedback.innerHTML = `Du gissade på: ${userAnswer}, trash! Det var för lågt 😒. Du har gissat ${guesses} ${
      guesses === 1 ? "gång" : "gånger"
    }`;
    clearInput();
  }
});

startOverBtn.addEventListener("click", () => {
  outputFeedback.innerHTML = "Nytt spel startat";
  guesses = 0;
  randomNumber = Math.round(Math.random() * 10);
  submitButton.disabled = false;
  guessInputField.disabled = false;
  console.log(randomNumber);
});
