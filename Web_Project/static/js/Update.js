 /* display student form */
let students = [];
let form = document.querySelector('.data');
let boxes = {};
let verifications = {}

getStudentsData();
fillTable();
getInputBoxes();
setUpBoxesVerification();
setupBoxesActions();


const editButtons = document.querySelectorAll('.edit');
const studentInfo = document.querySelector('.student_info');
const exitBtn = document.getElementById('exit');
const studentInfoDiv = document.querySelector('.student_info');
const searchInput = document.getElementById("Search");
const tableBody = document.querySelector('.table_data tbody');

 function getStudentsData(){
     let request = new XMLHttpRequest();
     request.open("GET","http://127.0.0.1:8000/students/",false);
     request.send();
     students = JSON.parse(request.responseText);
 }
 editButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        studentInfo.style.display = 'block';
        let id = event.target.id;
        console.log(id);
        let boxes = {
            "first": document.querySelector('#first'),
            "last": document.querySelector('#last'),
            "email": document.querySelector('#email'),
            "phone": document.querySelector('#phone'),
            "gpa": document.querySelector('#gpa'),
            "id": document.querySelector('#id'),
            "gender": document.querySelector('#gender'),
            "department": document.querySelector('#department'),
            "level": document.querySelector('#level'),
            "status": document.querySelector('#status'),
            "dateOfBirth": document.querySelector('#date'),
        };
        for (let student in students) {
            if (student === id) {
                boxes["first"].value = students[student]["firstName"];
                boxes["last"].value = students[student]["lastName"];
                boxes["email"].value = students[student]["email"];
                boxes["phone"].value = students[student]["phone"];
                boxes["gpa"].value = students[student]["gpa"];
                boxes["id"].value = students[student]["id"];
                boxes["gender"].value = students[student]["gender"];
                boxes["department"].value = students[student]["department"];
                boxes["level"].value = students[student]["level"];
                boxes["status"].value = students[student]["status"];
                boxes["dateOfBirth"].value = students[student]["dateOfBirth"];

            }
        }
    });
});




exitBtn.addEventListener('click', () => {
    studentInfoDiv.style.display = 'none';
});

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();
    const rows = tableBody.getElementsByTagName("tr");
    for (let row of rows) {
        let found = false;
        const cells = row.getElementsByTagName("td");
        for (let cell of cells) {
            const text = cell.textContent.toLowerCase();
            if (text.indexOf(searchText) !== -1) {
                found = true;
                break;
            }
        }
        if (found) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    }
});





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
    verifications["Students status"] = isValidStatus;
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
function displayError(inputBox){
    let errorBox = document.querySelector(`#${inputBox.id}-error`);
    errorBox.classList.remove("hide");
}
function removeError(inputBox){
    let errorBox = document.querySelector(`#${inputBox.id}-error`);
    errorBox.classList.add("hide");
}
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
    return gpa > 0.0 && gpa < 4.0;
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
    return boxes["Students status"].selectedIndex !== 0 ;
}

form.addEventListener('submit',(event)=>{
    for (let boxID in verifications){
        let isValid = verifications[boxID]();
        if(!isValid){
            displayError(boxes[boxID]);
            event.preventDefault();
        }
    }
})


function fillTable() {
    let tableBody = document.querySelector('tbody');
    let count = 1;
    for (let id in students){
      const newRow = document.createElement('tr');
      const countCell = document.createElement('td');
      countCell.textContent = count.toString();
      const nameCell = document.createElement('td');
      nameCell.innerHTML = students[id]["name"];
      const idCell = document.createElement('td');
      idCell.textContent = id
      const statusCell = document.createElement('td');
      statusCell.textContent = students[id]["status"];
      console.log(students[id]["firstName"]);
      const buttonCell = document.createElement('td');
      const button = document.createElement('button');
      button.classList.add("edit");
      button.id = id;
      button.innerText = "Edit";
      buttonCell.append(button);
      newRow.append(countCell);
      newRow.append(nameCell);
      newRow.append(idCell);
      newRow.append(statusCell);
      newRow.append(buttonCell);
      tableBody.append(newRow);
      count++;
    }
}

    /*{% for column in data %}
                <tr>
                    <td></td>
                    <td>{{column.name}}</td>
                    <td>{{column.id}}</td>
                    <td>{{column.status}}</td>
                </tr>
            {% endfor %}*/