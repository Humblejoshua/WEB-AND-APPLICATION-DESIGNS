// eventUtils.js
export function addClickListener(element, callback) {
    element.addEventListener('click', callback);
}

export function removeClickListener(element, callback) {
    element.removeEventListener('click', callback);
}