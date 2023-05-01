import createContainerWithMainElements from './js/createContainerWithMainElements.js';

createContainerWithMainElements();

const textarea = document.querySelector(".textarea");
const keys = document.querySelectorAll(".key");

//prevent default textarea
textarea.addEventListener("keydown", (e) => {
  e.preventDefault();
});


//remove class active on keyup
document.addEventListener("keyup", (e) => {
  console.log(e);
  //Shift
  if (e.key === "Shift") {
    console.log('shift up');
    e.preventDefault();
    toggleShift(keys, "keyup");
  }
  keys.forEach((key) => {
    if (key.className.includes("active") && !key.className.includes("CapsLock")) {
      key.classList.remove("active");
    }
  });
});

//add class active on click key
document.addEventListener("keydown", (e) => {
  keys.forEach((key) => {
    if (key.className.includes(e.code) && !key.className.includes("CapsLock")) {
      key.classList.add("active");
    }
  });
});

document.addEventListener("keydown", (e) => {
  keys.forEach((key) => {
    if (key.className.includes(e.code)) {
        Array.from(key.children).forEach((el) => {
          if (!el.className.includes("hidden")) {
            Array.from(el.children).forEach((el) => {
              if (!el.className.includes("hidden") && el.innerText) {
                //if (!(e.ctrlKey || e.altKey || e.shiftKey)) {
                  addChar(textarea, el.innerText); 
                //}
              } 
            });
          }
        });
      // }
    }
  });
});