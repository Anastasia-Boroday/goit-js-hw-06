// query
const inputEl = document.querySelector('#name-input');
const textEl = document.querySelector('#name-output');
// add listener
inputEl.addEventListener('input', (event) => {
    textEl.textContent = event.currentTarget.value;
if (event.currentTarget.value==='') {
    textEl.textContent = 'Anonymous';
}
    
});

