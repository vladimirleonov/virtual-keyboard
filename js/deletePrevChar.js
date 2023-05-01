const deletePrevChar = (element) => {
   const position = element.selectionStart;
   const text = element.value;
   const newText = text.slice(0, position - 1) + text.slice(position);
   element.value = newText;
   element.selectionStart = position - 1; 
   element.selectionEnd = position - 1;
}

export default deletePrevChar;