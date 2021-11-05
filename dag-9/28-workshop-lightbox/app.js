/**
 * Workshop: Lightbox
 *
 * Två möjliga tillvägagångssätt
 *
 * 1a. Hämta ut alla `a.photo`, loopa över dem och lägg till en
 * click-EventListener för varje element.
 *
 * 1b. Hämta ut `.photos`-elementet och lägg till en click-EventListener
 * på den. I EventListener:n, kolla om det som klickades på är
 * en IMG.
 *
 * 2. Hämta ut IMG's förälder (A-tagg) href och sätt på `#lightbox-wrapper img` src-attribut.
 *
 * 3. Lägg till klassen `show` på `#lightbox-wrapper`.
 *
 * 4. (Lägg till en click-EventListener på `#lightbox-wrapper` som tar bort `show`-klassen.)
 *
 * 5. 🌟 Om du kan fixa så man kan ha en caption på varje bild och den visas. Naturligtvis
 * via JavaScript, lägg inte till en caption i själva bildfilen :P.
 *
 */

const imagesPhotoEl = document.querySelectorAll("a.photo");
const imagesPhotoImageEl = document.querySelector("#lightbox-img");
const lightboxWrapperEl = document.querySelector("#lightbox-wrapper");
const imgCaption = document.querySelector(".caption");

imagesPhotoEl.forEach((image) =>
  image.addEventListener("click", (e) => {
    //prevent img from opening in new window
    e.preventDefault();
    // steg 2
    let photoParent = e.target.parentElement.getAttribute("href");
    imagesPhotoImageEl.setAttribute("src", photoParent);
    // steg 3
    lightboxWrapperEl.classList.add("show");
    // steg 5
    imgCaption.innerHTML = photoParent;
  })
);

// steg 4
lightboxWrapperEl.addEventListener("click", () => {
  lightboxWrapperEl.classList.remove("show");
});
