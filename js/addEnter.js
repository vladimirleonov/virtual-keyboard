const addEnter = () => {
   const cursorPosition = textarea.selectionStart;
   const firstPart = textarea.value.substring(0, cursorPosition);
   const secondPart = textarea.value.substring(cursorPosition, textarea.value.length);
   
   if (cursorPosition === 0) {
   textarea.value = "\n" + firstPart + secondPart;
   } else {
   textarea.value = firstPart + "\n" + secondPart;
   }

   textarea.selectionStart = cursorPosition + 1;
   textarea.selectionEnd = cursorPosition + 1;
}

export default addEnter;