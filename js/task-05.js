// const input = document.querySelector('#name-input');
// const span = document.querySelectorAll('#name-output');

// console.log(span);

// input.addEventListener('input', onInputChange);

// function onInputChange(event) {
//   span.textContent = event.currentTarget.value;
// }

const input = document.querySelector('#name-input');
const span = document.getElementById('#name-output');

input.oninput = function () {
  if (input.value === '') {
    span.innerHTML = 'Anonymous';
  } else {
    span.innerHTML = input.value;
  }
};
