const toggleShift = (keys, status) => {
  keys.forEach((key) => {
    Array.from(key.children).forEach((el) => {
      if (!el.className.includes("hidden")) {
        Array.from(el.children).forEach((el) => {
          //console.log('toggle shift');
          if (status === "keydown") {
            console.log("keydown");
            if (el.className.includes("caseDown")) {
              console.log("caseDown");
              if (!el.className.includes("hidden")) {
                el.classList.add("hidden");
              }
            }
            if (el.className.includes("caseUp")) { 
              if (el.className.includes("hidden")) { 
                el.classList.remove("hidden");
              }
            }
          } else if (status === "keyup") {
            console.log("keyup");
            if (el.className.includes("caseDown")) {
              console.log("caseDown");
              if (el.className.includes("hidden")) {
                el.classList.remove("hidden");
              }
            }
            if (el.className.includes("caseUp")) { 
              if (!el.className.includes("hidden")) { 
                el.classList.add("hidden");
              }
            }
          } else {
            return; 
          }
          // if (el.className.includes("caseDown")) {
          //   if (status === "keydown" && !el.className.includes("hidden")) {
          //     el.classList.add("hidden");
          //   } else {
          //     el.classList.remove("hidden");
          //   }
          // } 
          // if (el.className.includes("caseUp")) {
          //   if (status === "keyup" && !el.className.includes("hidden")) {
          //     el.classList.add("hidden");
          //   } else {
          //     el.classList.remove("hidden");
          //   }
          // }
            //debugger;
            // if (el.className.includes("hidden")) {
            //   el.classList.remove("hidden");
            // } else {
            //   el.classList.add("hidden");
            // }
            //el.classList.toggle("hidden");
          //}
          // if (el.className.includes("caseUp")) {
          //   //debugger;
          //   if (el.className.includes("hidden")) {
          //     el.classList.remove("hidden");
          //   } else {
          //     el.classList.add("hidden");
          //   }
          //   //el.classList.toggle("hidden");
          // }
        });
      }
    });
  });
}

export default toggleShift;