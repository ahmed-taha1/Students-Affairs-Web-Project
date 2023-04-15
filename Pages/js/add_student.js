let form = document.querySelector('.student-data');

/**
 * Input boxes
 */
let firstNameBox = document.querySelector('#first');
let lastNameBox = document.querySelector('#last');
let gpaBox = document.querySelector('#gpa');
let idBox = document.querySelector('#id');
let phoneNumberBox = document.querySelector('#phone');
let emailBox = document.querySelector('#email');

let genderBox = document.querySelector('#gender');
let dateOfBirthBox = document.querySelector('#date');
let departmentBox = document.querySelector('#department');
let levelBox = document.querySelector('#level');
let statusBox = document.querySelector('#status');



function displayError(inputBox){
    let selector = "#";
    selector+=inputBox.id;
    selector += "-error";
    let errorBox = document.querySelector(selector);
    console.log(errorBox);
    errorBox.classList.remove("hide");
}

/**
 * Validations for Student input
 */
function isValidName(name){
    const regex = /^[a-zA-Z]+$/;
    return regex.test(name) && name.length > 1;
}

function isValidGPA(gpa){
    return gpa > 0.0 && gpa < 4.0;
}

function isValidEmail(email){
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    return regex.test(email);
}

function isValidPhoneNumber(phoneNumber){
    const regex = /^(01)[0-9]{9}$/;
    return regex.test(phoneNumber);
}

function isValidID(id){
    const regex = /^d{6,}$/;
    return regex.test(id);
}


/**
 * Validation on Submitting student form
 */
form.addEventListener('submit',(event)=>{
    if(!isValidName(firstNameBox.value)){
        displayError(firstNameBox);
        event.preventDefault();
    }
    if(!isValidName(lastNameBox.value)){
        displayError(lastNameBox);
        event.preventDefault();
    }
    if(!isValidGPA(gpaBox.value)){
        displayError(gpaBox);
        event.preventDefault();
    }
    if(!isValidPhoneNumber(phoneNumberBox.value)){
        displayError(phoneNumberBox);
        event.preventDefault();
        event.preventDefault();
    }
    if(!isValidID(idBox.value)){
        displayError(idBox);
        event.preventDefault();
    }
    if(!isValidEmail(emailBox.value)){
        displayError(emailBox);
        event.preventDefault();
    }
})
