// const counterValue = {
//   value: 0,
//   increment() {
//     this.value += 1;
//   },
//   decrement() {
//     this.value -= 1;
//   },
// };

// const decrementBtn = document.querySelector('button[data-action="decrement"]');
// const incrementBtn = document.querySelector('button[data-action="increment"]');
// const valueEl = document.querySelector('#value');

// decrementBtn.addEventListener('click', function () {
//   counterValue.decrement();
//   valueEl.textContent = counterValue.value;
//   console.log(counterValue);
// });

// incrementBtn.addEventListener('click', function () {
//   counterValue.increment();
//   valueEl.textContent = counterValue.value;
//   console.log(counterValue);
// });

class Counter {
  constructor(selector, step, initialValue) {
    this.counterContainer = document.querySelector(selector);
    this.incrementBtn = this.counterContainer.querySelector("[data-action = 'increment']");
    this.decrementBtn = this.counterContainer.querySelector("[data-action = 'decrement']");
    this.spanRef = this.counterContainer.querySelector('#value');
    this.step = step;
    this.initialvalue = initialValue;
  }

  addListners = () => {
    this.spanRef.textContent = this.initialvalue;
    this.incrementBtn.addEventListner('click', this.hendelIncriment);
    this.decrementBtn.addEventListner('click', this.hendelDecrement);
  };

  hendelIncriment = () => {
    this.initialvalue += this.step;
    this.spanRef.textContent = this.initialValue;
  };

  hendelDecrement = () => {
    this.initialvalue += this.step;
    this.spanRef.textContent = this.initialValue;
  };
}

new Counter('#counter', 5, 0);
new Counter('#counter2 ', 10, 100);
