const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listEl = document.querySelector('#ingredients');

const elements = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const navItemEl = document.createElement('li');
  navItemEl.classList.add('item');
  navItemEl.textContent = ingredients[i];
  elements.push(listEl);
}
