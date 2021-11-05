/**
 * 28 - Workshop: Lightbox
 *
 */

const imagesEl = document.querySelectorAll("a");
const lightboxWrapperEl = document.querySelector("#lightbox-wrapper");

imagesEl.addEventListener("click", (e) => {
  e.preventDefault();

  lightboxWrapperEl.classList.add("show");
});
