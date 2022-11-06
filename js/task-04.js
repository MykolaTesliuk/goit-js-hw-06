let counterValue = 0;
const decrBtn = document.querySelector('[data-action="decrement"]');
const inkrBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value')


decrBtn.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
})

inkrBtn.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
})