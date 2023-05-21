import createContainerWithMainElements from './js/createContainerWithMainElements.js';
import deleteNextChar from './js/deleteNextChar.js';
import deletePrevChar from './js/deletePrevChar.js';
import addChar from './js/addChar.js';
import addTab from './js/addTab.js';
import toggleCaps from './js/toggleCaps.js';
import toggleShift from './js/toggleShift.js';
import addSpace from './js/addSpace.js';
import addEnter from './js/addEnter.js';
import convertToEnglishLayout from "./js/convertToEnglishLayout.js";

//convertToEnglishLayout

window.onload = function () {
  //console.log(localStorage.getItem('language'));
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

//prevent default textarea
textarea.addEventListener("keydown", (e) => {
  e.preventDefault();
});

//!!! virtual-keyboard
const addDispatchEventOnKey = (key, code, keyEvent) => {
  console.log("key:", key);
  console.log("code:", code);
  console.log(`${keyEvent} on ${code}`);
  let event = new KeyboardEvent(keyEvent, {
    bubbles: true,
    cancelable: true,
    key: key,
    code: code,
    ctrlKey: key === "Ctrl", 
    shiftKey: key === "Shift", 
    altKey: key === "Alt", 
    metaKey: key === "Win"
  });
  document.dispatchEvent(event);
  return;
}

keys.forEach((key) => {
  key.addEventListener("mousedown", (e) => {
    const eventKey = e.target.innerText;
    const parentElement = e.target.parentNode;
    const grandparentElement = parentElement.parentNode;
    const code = grandparentElement.classList[1];
    addDispatchEventOnKey(eventKey, code, "keydown");
  });
});

keys.forEach((key) => {
  key.addEventListener("mouseup", (e) => {
    //console.log(e);
    const eventKey = e.target.innerText;
    const parentElement = e.target.parentNode;
    const grandparentElement = parentElement.parentNode;
    const code = grandparentElement.classList[1];
    addDispatchEventOnKey(eventKey, code, "keyup");
  });
});
//!!!

//!!! physical-keyboard
//remove class active on keyup
document.addEventListener("keyup", (e) => {
  //Shift
  if (e.shiftKey) {
    console.log(e);
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
    console.log(e);
    const currentLanguage = localStorage.getItem("language");
    currentLanguage === "rus" ? setLanguage('eng') : setLanguage('rus'); 
    changeLanguage();
  }
  //Backspace
  if (e.code === 'Backspace') {
    e.preventDefault();
    console.log(e);
    if (textarea.value.length) {
      deletePrevChar(textarea); 
    }
    return;
  } 
  //Tab
  if (e.code === 'Tab') {
    e.preventDefault();
    console.log(e);
    addTab(textarea);
    return;
  }
  //Delete
  if (e.code === "Delete") {
    e.preventDefault();
    console.log(e);
    deleteNextChar(textarea);
    return;
  }
  //CapsLock
  if (e.code === "CapsLock") {
    e.preventDefault();
    console.log(e);
    if (e.repeat) {
      return; 
    }
    toggleCaps(keys);
    return;
  }
  //Enter
  if (e.code === "Enter") {
    e.preventDefault();
    console.log(e);
    addEnter();
    return;
  }
  //Shift
  if (e.shiftKey) {
    e.preventDefault();
    console.log(e);
    toggleShift(keys, "keydown");
  }
  //Space
  if (e.code === "Space") {
    e.preventDefault();
    console.log(e);
    addSpace(textarea);
    return;
  }

  keys.forEach((key) => {
    if (key.className.includes(e.code)) {
      Array.from(key.children).forEach((el) => {
        if (!el.className.includes("hidden")) {
          Array.from(el.children).forEach((el) => {
            if (!el.className.includes("hidden") && el.innerText) {
              //console.log(e);
              if (!e.ctrlKey && !e.shiftKey && !e.altKey && !e.metaKey) {
                console.log(e);
                addChar(textarea, el.innerText);
              }
              // else if (
              //   (e.ctrlKey || e.altKey || e.shiftKey || e.metaKey) &&
              //   e.key !== "Control" &&
              //   e.key !== "Alt" &&
              //   e.key !== "Shift" &&
              //   e.key !== "Meta"
              // ) {
              //   console.log(e);
              //   addChar(textarea, el.innerText);
              // }
              else {
                return;
              } 
            } 
          });
        }
      });
    }
  });
});
//!!!


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