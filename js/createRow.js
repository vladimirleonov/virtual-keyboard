import createNode from "./createNode.js";
import createKey from "./createKey.js";
import data from './data.js';

const createRow = (number) => {
   const row = createNode("div", "row");
 
   let start;
   let end;
 
   switch (number) {
     case 1:
       start = 0;
       end = 14;
       break;
     case 2:
       start = 14;
       end = 29;
       break;
     case 3:
       start = 29;
       end = 42;
       break;
     case 4:
       start = 42;
       end = 55;
       break;
     case 5:
       start = 55;
       end = 64;
       break;
     default:
       start = 0;
       end = 0;
       break;
   }
 
   //rowKeys
   for (let i = start; i < end; i++) {
     let key = createKey(data[i]);
     row.append(key);
   }
 
   return row;
};
 
export default createRow;