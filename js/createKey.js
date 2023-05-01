import createNode from "./createNode.js";

const createKey = (obj) => {
   const key = createNode("div", "key", `${obj[0].key}`);
   key.innerHTML = `
       <span class="rus">
         <span class="caseDown">${obj[0].rus.caseDown}</span>
         <span class="caseUp hidden">${obj[0].rus.caseUp}</span>
         <span class="caps hidden">${obj[0].rus.caps}</span>
         <span class="shiftCaps hidden">${obj[0].rus.shiftCaps}</span>
       </span>
       <span class="eng hidden">
         <span class="caseDown hidden">${obj[0].eng.caseDown}</span>
         <span class="caseUp hidden">${obj[0].eng.caseUp}</span>
         <span class="caps hidden">${obj[0].eng.caps}</span>
         <span class="shiftCaps hidden">${obj[0].eng.shiftCaps}</span>
       </span>
   `;
   return key;
};

export default createKey;