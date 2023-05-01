const toggleCaps = (keys) => {
  keys.forEach((key) => {
    if (key.className.includes("CapsLock")) {
      key.classList.toggle("active");
    } else {
      Array.from(key.children).forEach((el) => {
        if (!el.className.includes("hidden")) {
          Array.from(el.children).forEach((el) => {
            if (el.className.includes("caseDown")) {
              el.classList.toggle("hidden");
            }
            if (el.className.includes("caps")) {
              el.classList.toggle("hidden");
            }
          });
        }
      });
    }
  })
}

export default toggleCaps;