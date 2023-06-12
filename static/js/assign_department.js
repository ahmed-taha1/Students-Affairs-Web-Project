
let students = [];
let form = document.querySelector('#Assign');

getStudentsData();
fillTable();

let department = document.querySelector('.assign');
let SaveBtn = document.querySelectorAll('.save-button');
let exitBtn = document.getElementById('exit');

function getStudentsData(){
     let request = new XMLHttpRequest();
     request.open("GET","http://127.0.0.1:8000/students/",false);
     request.send();
     students = JSON.parse(request.responseText);
 }
function fillTable() {
    let tableBody = document.querySelector('tbody');
    let count = 1;
    for (let id in students){
      const newRow = document.createElement('tr');
      const countCell = document.createElement('td');
      countCell.textContent = count.toString();
      const nameCell = document.createElement('td');
      nameCell.innerHTML = students[id]["name"];
      console.log(students[id]["name"]);
      const idCell = document.createElement('td');
      idCell.textContent = id
      const levelCell = document.createElement('td');
      levelCell.textContent = students[id]["level"];
      const departmentCell = document.createElement('td');
      departmentCell.textContent = students[id]["department"];
      const saveCell = document.createElement('td');
      const saveBtn = document.createElement('button');
      saveBtn.classList.add("save-button");
      saveBtn.id = id;
      saveBtn.innerText = "Assign";
      saveCell.append(saveBtn);
      newRow.append(countCell);
      newRow.append(nameCell);
      newRow.append(idCell);
      newRow.append(levelCell);
      newRow.append(departmentCell);
      newRow.append(saveCell);
      tableBody.append(newRow);
      count++;
    }
}

exitBtn.addEventListener('click', () => {
    department.style.display = 'none';
});
SaveBtn.forEach(button => {
    button.addEventListener('click', (event) => {
        department.style.display = 'block';
        let id = event.target.id;
        console.log(id);
        let boxes = {
            "department": document.querySelector('#AssignDep'),
            "id": document.querySelector('#id'),
        };
        for (let student in students) {
            if (student === id) {
                boxes["department"].value = students[student]["department"];
                boxes["id"].value = student;
            }
        }
    });
});

window.addEventListener('DOMContentLoaded', () => {
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search');
  const tableRows = document.querySelectorAll('tbody tr');

  searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchId = searchInput.value.trim();
    if (searchId !== '') {
      const matchingIds = findMatchingIds(searchId);
      if (matchingIds.length > 0) {
        displayMatchingStudents(matchingIds);
      } else {
        clearTable();
      }
    } else {
      clearTable();
    }
  });

  function findMatchingIds(searchId) {
    const matchingIds = [];
    for (const row of tableRows) {
      const studentId = row.querySelector('td:nth-child(3)').textContent;
      if (studentId.includes(searchId)) {
        matchingIds.push(studentId);
      }
    }
    return matchingIds;
  }

  function displayMatchingStudents(matchingIds) {
    for (const row of tableRows) {
      const studentId = row.querySelector('td:nth-child(3)').textContent;
      if (matchingIds.includes(studentId)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    }
  }

  function clearTable() {
    for (const row of tableRows) {
      row.style.display = '';
    }
  }
});