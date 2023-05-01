const addChar = (element, char) => {
   const selectionStart = element.selectionStart;
   const selectionEnd = element.selectionEnd;
   const before = element.value.slice(0, selectionStart);
   const after = element.value.slice(selectionEnd);
   element.value = before + char + after;
   element.selectionStart = selectionStart + 1;
   element.selectionEnd = selectionStart + 1;
}

export default addChar;