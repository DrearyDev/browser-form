'use strict';

const showBtn = document.querySelector('button');
const dialog = document.querySelector('dialog');
const submitBtn = document.querySelector('form > button');

showBtn.addEventListener('click', () => {
    dialog.showModal();
});



