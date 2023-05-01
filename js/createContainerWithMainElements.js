
import createNode from './createNode.js';
import createRow from './createRow.js';


const createContainerWithMainElements = () => {
   //container
   const container = createNode("div", "container");
   document.body.append(container);
 
   //title
   const title = createNode("p", "title");
   title.innerText = "RSS Virtual Keyboard";
   container.append(title);
 
   //textarea
   const textarea = createNode("textarea", "textarea");
   textarea.rows = "5";
   textarea.cols = "50";
   textarea.setAttribute("id", "textarea");
   container.append(textarea);
 
   //keyboard
   const keyboard = createNode("div", "keyboard");
   keyboard.setAttribute("id", "keyboard");
   container.append(keyboard);
 
   //firstRow
   keyboard.append(createRow(1));
   //secondRow
   keyboard.append(createRow(2));
   //thirdRow
   keyboard.append(createRow(3));
   //forthRow
   keyboard.append(createRow(4));
   //fifthRow
   keyboard.append(createRow(5));
 
   //description
   const description = createNode("p", "description");
   description.innerText = "The keyboard is created in Windows";
   container.append(description);
 
   //language
   const language = createNode("p", "description");
   language.innerText = "To switch the language: ctrl + alt";
   container.append(language);
 
   //container
   document.body.append(container);
};
 
export default createContainerWithMainElements;