const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelectorAll('#name-output'),
};

refs.input.addEventListener('input', onInputChange);

function onInputChange(event) {
  console.log(event.currentTarget.value);
}
