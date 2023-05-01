const createNode = (tag, className, ...rest) => {
   const node = document.createElement(tag);
   node.classList.add(className);
   if (rest.length) {
     node.classList.add(rest[0]);
   }
   return node;
};

export default createNode;