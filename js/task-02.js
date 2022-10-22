const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');

const elements = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const navItemEl = document.createElement('li');
  navItemEl.classList.add('item');
  navItemEl.textContent = ingredients[i];
  console.log(navItemEl);
  elements.push(navItemEl);
}

list.append(...elements);
