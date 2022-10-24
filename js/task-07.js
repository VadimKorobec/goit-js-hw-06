const spanEl = document.querySelector('#text');
const inputEl = document.querySelector('#font-size-control');

inputEl.addEventListener('input', onSearch);

function onSearch(evt) {
  const size = inputEl.value;
  spanEl.style.fontSize = size + 'px';
}
