'use strict';

const showBtn = document.querySelector('button');
const dialog = document.querySelector('dialog');
const submitBtn = document.querySelector('form > button');

const fNameInput = document.querySelector('#fname');
const lNameInput = document.querySelector('#lname');
const emailInput = document.querySelector('#email');
const countryInput = document.querySelector('#country');
const zCodeInput = document.querySelector('#zcode');
const pWord = document.querySelector('#pword');
const pConfirm = document.querySelector('#pconfirm');

let inputs = [...document.querySelectorAll('form .option')];


showBtn.addEventListener('click', () => {
    dialog.showModal();
});




function validate() {
    let valid = true;

    inputs.forEach(input => {
        console.log(input.validity);

        if (input.checkValidity()) {
            console.log('test');
            input.nextElementSibling.innerText = '';
        } else {
            console.log('failed');
            input.nextElementSibling.innerText = input.validationMessage;
            valid = false;
        };
    });

    return valid;
};
inputs.forEach(input => { input.addEventListener('input', validate) });




submitBtn.addEventListener('click', (e) => {

    if (!validate()) {
        e.preventDefault();
    };

});

