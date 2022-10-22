const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const navItemEl = document.createElement('li');
navItemEl.classList.add('item');
navItemEl.textContent = ' NEW';

const listEl = document.querySelector('#ingredients');
listEl.appendChild(navItemEl);

console.log(listEl);
