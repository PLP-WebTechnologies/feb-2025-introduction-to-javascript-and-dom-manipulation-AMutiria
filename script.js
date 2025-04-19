// script.js

// Change text content dynamically
const changeTextButton = document.getElementById('changeTextButton');
const dynamicTextElement = document.getElementById('dynamicText');

changeTextButton.addEventListener('click', () => {
    dynamicTextElement.textContent = 'The text has been changed dynamically!';
});

// Modify CSS styles via JavaScript
const styleElement = document.getElementById('styleElement');
const changeStyleButton = document.getElementById('changeStyleButton');

changeStyleButton.addEventListener('click', () => {
    styleElement.style.backgroundColor = 'lightblue';
    styleElement.style.color = 'darkblue';
    styleElement.style.borderRadius = '5px';
    styleElement.style.padding = '20px';
});

// Add or remove an element when a button is clicked
const addElementButton = document.getElementById('addElementButton');
const removeElementButton = document.getElementById('removeElementButton');
const elementContainer = document.getElementById('elementContainer');
let addedElement = null;

addElementButton.addEventListener('click', () => {
    if (!addedElement) {
        addedElement = document.createElement('div');
        addedElement.id = 'addedElement';
        addedElement.textContent = 'This element was added dynamically!';
        elementContainer.appendChild(addedElement);
    }
});

removeElementButton.addEventListener('click', () => {
    if (addedElement) {
        elementContainer.removeChild(addedElement);
        addedElement = null;
    }
});