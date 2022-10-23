const inputVal = document.getElementById('validation-input');
const totalLenght = inputVal.getAttribute('data-length');
const intTotallenght = parseInt(totalLenght, 10);

inputVal.addEventListener('blur', () => {
  if (inputVal.value.length === intTotallenght) {
    inputVal.classList.add('valid');
    inputVal.classList.remove('invalid');
  } else if (inputVal.value.length === 0) {
    inputVal.classList.remove('valid');
    inputVal.classList.remove('invalid');
  } else {
    inputVal.value.length !== intTotallenght && inputVal.value.length !== 0;
    inputVal.classList.add('invalid');
  }
});
