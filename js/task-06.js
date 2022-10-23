const input = document.querySelector('#validation-input');

input.addEventListener('blur', onChangeFocus);

function onChangeFocus(event) {
  console.log(event);
  if (event.currentTarget.value.length == input.getAttribute('data-length')) {
    input.classList.add('valid');
  } else {
    input.classList.remove('valid');
    input.classList.add('invalid');
  }
}
