const addSpace = (element) => {
   const cursorPos = element.selectionStart;

   element.value = element.value.slice(0, cursorPos) + ' ' + element.value.slice(cursorPos); // вставляем пробел в текст
   element.selectionStart = cursorPos + 1; // обновляем позицию курсора
   element.selectionEnd = cursorPos + 1;
}

export default addSpace;