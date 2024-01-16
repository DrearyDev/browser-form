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


function checkZIP() {
    const constraints = {
        Switzerland: [
            "^(CH-)?\\d{4}$",
            "Switzerland ZIPs must have 4 digits: e.g. CH-1950 or 1950",
            "CH-1950 or 1950"
        ],
        France: [
            "^(F-)?\\d{5}$",
            "France ZIPs must have 5 digits: e.g. F-75012 or 75012",
            "F-75012 or 75012"
        ],
        Germany: [
            "^(D-)?\\d{5}$",
            "Germany ZIPs must have 5 digits: e.g. D-12345 or 12345",
            "D-12345 or 12345"
        ],
        Netherlands: [
            "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
            "Netherland ZIPs must have 4 digits, then 2 letters except SA, SD and SS",
            "1234SD"
        ]
    };

    const constraint = new RegExp(constraints[countryInput.value][0], '');

    if (zCodeInput.value === '') {
        return false;
    }
    else if (constraint.test(zCodeInput.value)) {
        zCodeInput.style.borderColor = 'green';
        zCodeInput.setCustomValidity('');
        zCodeInput.nextElementSibling.innerText = zCodeInput.validationMessage;
    } else {
        zCodeInput.style.borderColor = 'red';
        zCodeInput.setCustomValidity(constraints[countryInput.value][1]);
        zCodeInput.nextElementSibling.innerText = zCodeInput.validationMessage;
        return false;
    };

    return true;
};



function validate() {
    let valid = true;

    inputs.forEach(input => {
        //all input validation
        if (input.checkValidity()) {
            input.style.borderColor = 'green';
            input.nextElementSibling.innerText = '';
        } else {
            input.style.borderColor = 'red';
            input.nextElementSibling.innerText = input.validationMessage;
            valid = false;
        };
    });

    //zip code validation
    if (!checkZIP()) {
        valid = false;
    };

    //password validation
    if (!checkPassword()) {
        valid = false;
    };

    return valid;
};
inputs.forEach(input => { input.addEventListener('input', validate) });




submitBtn.addEventListener('click', (e) => {

    if (!validate()) {
        e.preventDefault();
    };

});

