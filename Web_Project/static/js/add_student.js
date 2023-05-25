let form = document.querySelector('.student-data');
let usedEmails = []
let usedIDs = []
let usedPhones = []
/**
 *
 * BOX ID => BOX itself
 */
let boxes = {};

/**
 * BoxID => Verification function
 */
let verifications = {};

getInputBoxes();
setUpBoxesVerification();
setupBoxesActions();
getStoredData();


function getStoredData(){
    usedEmails.length = 0;
    usedPhones.length = 0;
    usedIDs.length = 0;
    let request = new XMLHttpRequest();
    request.open("GET","http://127.0.0.1:8000/students/",false);
    request.send();
    let students = JSON.parse(request.responseText);
    for (let id in students){
        usedEmails.push(students[id]["email"]);
        usedPhones.push(students[id]["phone"]);
        usedIDs.push(id);
    }
}
function getInputBoxes(){
    let inputBoxes = document.querySelectorAll('input');
    let selectBoxes = document.querySelectorAll('select');
    for (let i = 0;i < inputBoxes.length;i++){
        boxes[inputBoxes[i].id] = inputBoxes[i];
    }
    for (let i = 0;i < selectBoxes.length;i++){
        boxes[selectBoxes[i].id] = selectBoxes[i];
    }
}
function setUpBoxesVerification(){
   verifications["first"] = isValidFirstName;
   verifications["last"] = isValidLastName;
   verifications["email"] = isValidEmail;
   verifications["phone"] = isValidPhoneNumber;
   verifications["gpa"] = isValidGPA;
   verifications["id"] = isValidID;
   verifications["gender"] = isValidGender;
   verifications["department"] = isValidDepartment;
   verifications["level"] = isValidLevel;
   verifications["status"] = isValidStatus;
}
function setupBoxesActions(){
    for (let boxID in boxes){
        let box = boxes[boxID];
        if(verifications[boxID] === undefined)
            continue;
        box.onblur = ()=>{
            let isValid = verifications[box.id]();
            if(!isValid){
                displayError(box);
            }
            else{
                removeError(box);
            }
        }
    }
}
function displayError(inputBox,msg = "Invalid!"){
    let errorBox = document.querySelector(`#${inputBox.id}-error`);
    errorBox.textContent = msg;
    errorBox.classList.remove("hide");
}
function removeError(inputBox){
    let errorBox = document.querySelector(`#${inputBox.id}-error`);
    errorBox.classList.add("hide");
}

/**
 * Validations for Student input
 */
function isValidFirstName(){
    let firstName = boxes["first"].value;
    const regex = /^[a-zA-Z]+$/;
    return regex.test(firstName) && firstName.length > 1;
}
function isValidLastName(){
    let lastName = boxes["last"].value;
    const regex = /^[a-zA-Z]+$/;
    return regex.test(lastName) && lastName.length > 1;
}
function isValidGPA(){
    let gpa = boxes["gpa"].value;
    return gpa > 0.0 && gpa <= 4.0;
}

function isValidEmail(){
    let email = boxes["email"].value;
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    return regex.test(email);
}

function isValidPhoneNumber(){
    let phoneNumber = boxes["phone"].value;
    const regex = /^(01)[0-9]{9}$/;
    return regex.test(phoneNumber);
}

function isValidID(){
    let id = boxes["id"].value;
    const regex = /^[0-9]+$/;
    return regex.test(id) && id.length > 6;
}

function isValidGender(){
    return boxes["gender"].selectedIndex !== 0 ;
}
function isValidDepartment(){
    return boxes["department"].selectedIndex !== 0 ;
}

function isValidLevel(){
    return boxes["level"].selectedIndex !== 0 ;
}

function isValidStatus(){
    return boxes["status"].selectedIndex !== 0 ;
}

/**
 * Validation on Submitting student form
 */
form.addEventListener('submit',(event)=>{
    for (let boxID in verifications){
        let isValid = verifications[boxID]();
        if(!isValid){
            displayError(boxes[boxID]);
            event.preventDefault();
        }
    }
    if(usedEmails.includes(boxes["email"].value)){
        displayError(boxes["email"],"Email Used");
        event.preventDefault();
    }
    if(usedIDs.includes(boxes["id"].value)){
        displayError(boxes["id"],"ID Used");
        event.preventDefault();
    }
    if(usedPhones.includes(boxes["phone"].value)){
        displayError(boxes["phone"],"Phone Used");
        event.preventDefault();
    }
})
