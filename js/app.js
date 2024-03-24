//Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

//Modals
const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

//Alert
const alertBtn = document.getElementById('alert-btn')
alertBtn.addEventListener('click', () => {
    const alertElement = document.getElementById('alert');
    alertElement.classList.toggle('isDisabled');
})

//My date
showMyBirthdayDate();


document.getElementById('submit-btn').addEventListener('click', () => {

    const form = document.forms[0];
    const inputFields = form.querySelectorAll('input[type="text"]');

    if (isAllInputsFilledCorrect(inputFields)) {
        let userDOB = form.dob.value;
        showUserBirthdayDate(userDOB);
    }
})









