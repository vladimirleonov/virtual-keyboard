import createContainerWithMainElements from './js/createContainerWithMainElements.js';
import deleteNextChar from './js/deleteNextChar.js';
import deletePrevChar from './js/deletePrevChar.js';
import addChar from './js/addChar.js';
import addTab from './js/addTab.js';
import toggleCaps from './js/toggleCaps.js';
import toggleShift from './js/toggleShift.js';
import addSpace from './js/addSpace.js';
import addEnter from './js/addEnter.js';

window.onload = function () {
  console.log(localStorage.getItem('language'));
  if (localStorage.getItem('language') === "eng") {
    setLanguage("eng");
    changeLanguage();
  } else {
    setLanguage("rus");
  }
}

createContainerWithMainElements();

const textarea = document.querySelector(".textarea");
const keys = document.querySelectorAll(".key");
const shiftLeft = document.querySelector(".ShiftLeft");
const shiftRight = document.querySelector(".ShiftRight");



//prevent default textarea
textarea.addEventListener("keydown", (e) => {
  e.preventDefault();
});

//!!! virtual-keyboard
//on mousedown shift left
shiftLeft.addEventListener("mousedown", (e) => {
  toggleShift(keys, "keydown");
});
//on mousedown shift right
shiftRight.addEventListener("mousedown", (e) => {
  toggleShift(keys, "keydown");
});

//on mouseup shift left
shiftLeft.addEventListener("mouseup", (e) => {
  toggleShift(keys, "keyup");
});
//on mouseup shift right
shiftRight.addEventListener("mouseup", (e) => {
  toggleShift(keys, "keyup");
});

keys.forEach((key) => {
  key.addEventListener("click", (e) => {
    if (e.target.innerText === "Tab") {
      addTab(textarea);
      return;
    } else if (e.target.innerText === "CapsLock") {
      if (e.repeat) {
        return;
      }
      toggleCaps(keys);
      return;
    } else if (e.target.innerText === "Backspace") {
      if (textarea.value.length) {
        deletePrevChar(textarea);
      }
      return;
    } else if (e.target.innerText === "Del") {
      deleteNextChar(textarea);
      return;
    } else if (e.target.innerText === "Enter") {
      e.preventDefault();
      addEnter();
      return;
    } else if (e.target.innerText === "Shift") {
      return;
    } else {
      addChar(textarea, e.target.innerText);
      //return;
    }
  });
});
//!!!

//!!! physical-keyboard
//remove class active on keyup
document.addEventListener("keyup", (e) => {
  //Shift
  if (e.key === "Shift") {
    e.preventDefault();
    toggleShift(keys, "keyup");
  }
  keys.forEach((key) => {
    if (key.className.includes("active") &&
      !key.className.includes("CapsLock")
    ) {
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
  //ctrl + alt
  if (e.ctrlKey && e.altKey) {
    const currentLanguage = localStorage.getItem("language");
    currentLanguage === "rus" ? setLanguage('eng') : setLanguage('rus'); 
    changeLanguage();
  }
  //Backspace
  if (e.code === 'Backspace') {
    e.preventDefault();
    if (textarea.value.length) {
      deletePrevChar(textarea); 
    }
    return;
  } 
  //Tab
  if (e.code === 'Tab') {
    e.preventDefault();
    addTab(textarea);
    return;
  }
  //Delete
  if (e.code === "Delete") {
    e.preventDefault();
    deleteNextChar(textarea);
    return;
  }
  //CapsLock
  if (e.code === "CapsLock") {
    e.preventDefault();
    if (e.repeat) {
      return; 
    }
    toggleCaps(keys);
    return;
  }
  //Enter
  if (e.code === "Enter") {
    e.preventDefault();
    addEnter();
    return;
  }
  //Shift
  if (e.shiftKey) {
    e.preventDefault();
    toggleShift(keys, "keydown");
  }
  //Space
  if (e.code === "Space") {
    e.preventDefault();
    addSpace(textarea);
    return;
  }

  keys.forEach((key) => {
    if (key.className.includes(e.code)) {
      Array.from(key.children).forEach((el) => {
        if (!el.className.includes("hidden")) {
          Array.from(el.children).forEach((el) => {
            if (!el.className.includes("hidden") && el.innerText) {
              if (!e.ctrlKey && !e.shiftKey && !e.altKey) {
                addChar(textarea, el.innerText);
              } else if (
                (e.ctrlKey || e.altKey || e.shiftKey) &&
                e.key !== "Control" &&
                e.key !== "Alt" &&
                e.key !== "Shift"
              ) {
                addChar(textarea, el.innerText);
              } else {
                return;
              } 
            } 
          });
        }
      });
    }
  });
});


//set language
function setLanguage(language) {
  localStorage.setItem('language', language);
}

//change language
function changeLanguage() {
  keys.forEach((key) => {
    Array.from(key.children).forEach((el) => {
      if (el.className.includes("hidden")) {
        el.classList.toggle("hidden");
        Array.from(el.children).forEach((el) => {
          if (el.className.includes("caseDown") && el.className.includes("hidden")) {
            el.classList.toggle("hidden");
          }
        });
      } else {
        el.classList.toggle("hidden");
      }
    });
  });
  return;
}