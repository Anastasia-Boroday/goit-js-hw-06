// query
const counterValueEl = document.querySelector('#value');
const decrementEl = document.querySelector('button[data-action="decrement"]');
const incrementEl = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
// create function for dec
const calcDec = () => {
    counterValue -= 1;
    counterValueEl.textContent = counterValue;
}
// create function fot inc
const calcInc = () => {
    counterValue += 1;
    counterValueEl.textContent = counterValue;

}
// add listener
decrementEl.addEventListener('click', calcDec);
incrementEl.addEventListener('click', calcInc);
