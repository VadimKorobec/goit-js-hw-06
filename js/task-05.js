const input = document.querySelector('#name-input');
const span = document.querySelectorAll('#name-output');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
  span.textContent = event.currentTarget.value;
}

// const input = document.getElementById(`name-input`);
// const nameOutput = document.getElementById(`name-output`);
// input.oninput = function () {
//   if (input.value === '') {
//     nameOutput.innerHTML = 'Anonymous';
//   } else {
//     nameOutput.innerHTML = input.value;
//   }
// };
