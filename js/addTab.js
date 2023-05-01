const addTab = (element) => {
   const selectionStart = element.selectionStart;
   const selectionEnd = element.selectionEnd;
   const before = element.value.substring(0, selectionStart);
   const after = element.value.substring(selectionEnd);
   element.value = before + "    " + after; 
   element.selectionStart = selectionStart + 4; 
   element.selectionEnd = element.selectionStart;
}

export default addTab;