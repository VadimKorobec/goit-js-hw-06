// const input = document.querySelector('#name-input');
// const span = document.querySelector('#name-output');

// input.addEventListener('input', onInputChange);

// function onInputChange(event) {
//   span.textContent = event.currentTarget.value;
//   if (input.value === '') {
//     span.textContent = 'Anonymous';
//   }
// }

const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name - ouput'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  refs.span.textContent = event.target.value;
  if (refs.input.value === '') {
    span.textContent = 'Anonymous';
  }
}
