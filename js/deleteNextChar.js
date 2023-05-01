const deleteNextChar = (element) => {
   const position = element.selectionEnd;
   const text = element.value;
   const newText = text.slice(0, position) + text.slice(position + 1);
   element.value = newText;
   element.selectionEnd = position;
}

export default deleteNextChar;
 