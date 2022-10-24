const button = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.querySelector('body');
body.classList.add('js-backgroundcolor');
console.log(body);

// button.addEventListener('click', () => {
//   let hexColor = getRandomHexColor();
//   button.style.backgroundColor = getRandomHexColor();
//   color.textContent = getRandomHexColor();
// });

button.addEventListener('click', onClickMe);

function onClickMe(evt) {
  console.log(evt);
  let hexColor = getRandomHexColor();
  body.classList.toggle('js-backgroundcolor') = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
