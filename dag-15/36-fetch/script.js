/**
 * Fetch
 *
 */

/* 
fetch("data/ogs.json")
  .then((res) => res.json())
  .then((data) => {
    console.log("got data!:", data);
  })
  .catch((err) => {
    console.log("Dogs rejected:", err);
  });
 */

fetch("https://api.chucknorris.io/jokes/random")
  .then((res) => {
    // Trigger an error
    if (!res.ok) {
      throw new Error("Response was not ok");
    }

    return res.json();
  })
  .then((data) => {
    document.querySelector("p").innerHTML += `${data.value}`;
  })
  .catch((err) => {
    console.log("Dogs rejected:", err);
  });
