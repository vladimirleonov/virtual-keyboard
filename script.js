import createContainerWithMainElements from './js/createContainerWithMainElements.js';

createContainerWithMainElements();

const textarea = document.querySelector(".textarea");
const keys = document.querySelectorAll(".key");

//prevent default textarea
textarea.addEventListener("keydown", (e) => {
  e.preventDefault();
});
