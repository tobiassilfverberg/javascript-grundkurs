/**
 * XMLHttpRequest
 * 
 */

// Create a new XML Http Reqest
const request = new XMLHttpRequest();

// Attach an event listener to the request
request.addEventListener('readystatechange', () => {
    // Check if readystate is 4 (=== DONE)
    if (request.readyState === 4) {

        // Was request successful (200 = OK)?
        if (request.status === 200) {
            // Request returned successful!
            console.log("Request was *OK*!");
            // console.log("Response:", request.responseText, typeof request.responseText);

            // Take a string and PARSE it into a JavaScript Object (array)
            const data = JSON.parse(request.responseText);
            console.log("Data:", data);

        } else {
            // Something went wrong with the request
            console.log("Request was *NOT* OK!");
        }
        
    }
});

// Set request to GET data from 'https://jsonplaceholder.typicode.com/users'
request.open('GET', 'https://jsonplaceholder.typicode.com/users');

// Send request
request.send();

// Done?
console.log("Request sent!");