/**
 * Async pets
 *
 */

const getJSON = (url, callback) => {
  // Create a new XML Http Reqest
  const request = new XMLHttpRequest();

  // Attach an event listener to the request
  request.addEventListener("readystatechange", () => {
    // Check if readystate is 4 (=== DONE)
    if (request.readyState === 4) {
      // Was request successful (200 = OK)?
      if (request.status === 200) {
        // Request returned successful!
        console.log("Request was OK!", url);
        // console.log("Response:", request.responseText, typeof request.responseText);

        // Take a string and PARSE it into a JavaScript Object (array)
        const data = JSON.parse(request.responseText);

        callback(false, data);
      } else {
        // Something went wrong with the request
        console.log("Request was *NOT* OK!");

        callback("Something went wrong");
      }
    }
  });
  // Set request to GET data from url
  request.open("GET", url);

  // Send request
  request.send();

  // Done?
  console.log("Request sent!", url);
};

// Get list of pet species
getJSON("data/cats.json", (err, cats) => {
  if (err) {
    console.log("Could not get list of cats. Error was:", err);
  }

  console.log("Got list of cats:", cats);

  getJSON("data/dogs.json", (err, dogs) => {
    if (err) {
      console.log("Could not get list of dogs. Error was:", err);
    }

    console.log("Got list of dogs:", dogs);

    getJSON("data/birds.json", (err, birds) => {
      if (err) {
        console.log("Could not get list of birds. Error was:", err);
      }

      console.log("Got list of birds:", birds);
    });
  });
});
