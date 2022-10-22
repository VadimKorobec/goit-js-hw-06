const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');

const elements = [];

for (let i = 0; i < ingredients.length; i += 1) {
  const newItemEl = document.createElement('li');
  newItemEl.classList.add('item');
  newItemEl.textContent = ingredients[i];
  console.log(newItemEl);
  elements.push(newavItemEl);
}

list.append(...elements);
