// // query
const inputEl = document.querySelector('#validation-input');
inputEl.addEventListener('blur', (event) => {
    
    const arrayInput = event.currentTarget.value.split('');

    if (arrayInput.length<6) {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid')
    } else {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    }
});

