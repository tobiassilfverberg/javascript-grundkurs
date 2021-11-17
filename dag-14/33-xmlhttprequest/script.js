/**
 * XMLHttpRequest
 * 
 */

const getJSON = (url, callback) => {
    // insert code here
    
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
                // console.log("Data:", data);

                callback(false, data);

            } else {
                // Something went wrong with the request
                console.log("Request was *NOT* OK!");

                callback("Something went wrong");
            }
        }
    });

// Set request to GET data from url
request.open('GET', url);

// Send request
request.send();

// Done?
console.log("Request sent!");
}

// Get users
getJSON('https://jsonplaceholder.typicode.com/users', (err, data) => {
    if (err) {
        console.log("Error!")
        return;
    }
    // console.log("Got data?", data)

    data.forEach(user => {
        document.querySelector('#users').innerHTML += `<li>${user.name}</li>`;
    })
});

getJSON('https://jsonplaceholder.typicode.com/posts', (err, data) => {
    if (err) {
        console.log("Could not get posts. Error:", err);
        return;
    }
    
    data.forEach(post => {
        document.querySelector('#posts').innerHTML += `<li>${post.title}</li>`;
    })
})