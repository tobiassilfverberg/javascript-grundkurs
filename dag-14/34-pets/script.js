/**
 * Async pets
 *
 */

const getJSON = (url) => {
  return new Promise((resolve, reject) => {
    // Create a new XML Http Reqest
    const request = new XMLHttpRequest();

    // Attach an event listener to the request
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          console.log("Request was OK!", url);

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

    // Done?
    console.log("Request sent!", url);
  });
};

// Get list of cats using promise
getJSON("data/cats.json")
  .then((data) => {
    console.log("Got cats");
    console.log("List of cats:", data);
  })
  .catch((err) => {
    console.log("No cats...");
    console.log("Request rejected:", err);
  });
