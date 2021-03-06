/**
 * Async pets
 *
 */
let cats = document.querySelector("#cats");
let dogs = document.querySelector("#dogs");
let birds = document.querySelector("#birds");

const getJSON = (url) => {
  return new Promise((resolve, reject) => {
    // Create a new XML Http Reqest
    const request = new XMLHttpRequest();

    // Attach an event listener to the request
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          // Take a string and PARSE it into a JavaScript Object (array)
          const data = JSON.parse(request.responseText);
          resolve(data);
        } else {
          // Something went wrong with the request
          reject("Request was not ok!");
        }
      }
    });
    // Set request to GET data from url
    request.open("GET", url);

    // Send request
    request.send();
  });
};

// Get list of cats using promise
getJSON("data/cats.json")
  .then((data) => {
    data.forEach((item) => {
      cats.innerHTML += `<li>${item.name}, ${item.age} years old</li>`;
    });
    console.log("List of cats:", data);
    return getJSON("data/dogs.json");
  })
  .then((data) => {
    data.forEach((item) => {
      dogs.innerHTML += `<li>${item.name}, ${item.age} years old</li>`;
    });
    console.log("List of dogs:", data);
    return getJSON("data/birds.json");
  })
  .then((data) => {
    data.forEach((item) => {
      birds.innerHTML += `<li>${item.name}, ${item.age} years old</li>`;
    });
    console.log("List of birds:", data);
  })
  .catch((err) => {
    console.log("No pets...");
    console.log("Request rejected:", err);
  });
