function selectElement(selector) {
   return document.querySelector(selector);
}

function selectAllElements(selector) {
   return document.querySelectorAll(selector);
}

export {selectElement, selectAllElements};