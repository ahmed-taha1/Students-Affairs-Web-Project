
let students = [];
getStudentsData();
fillTable();


function getStudentsData(){
     let request = new XMLHttpRequest();
     request.open("GET","http://127.0.0.1:8000/students/",false);
     request.send();
     students = JSON.parse(request.responseText);
 }
 /*
function updateDepartment() {
    saveButton.addEventListener('click', () => {
        let id = event.target.id;
            let request = new XMLHttpRequest();
            request.open("GET",`http://127.0.0.1:8000/deleteData/${id}`,false);
            request.send();
            deletion.style.display = 'none';
            location.reload();

    });
}*/
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
      const departmentSelect = document.createElement('select');
      departmentSelect.name = "department";
      const department = ["General","CS", "AI", "IS", "IT", "DS"];
      for (let i = 0; i < department.length; i++) {
          const option = document.createElement('option');
          option.value = department[i];
          option.textContent = department[i];
          if (students[id]["department"] === department[i]) {
          option.selected = true;
          }
         departmentSelect.appendChild(option);
      }
      departmentCell.appendChild(departmentSelect);
      const saveCell = document.createElement('td');
      const saveBtn = document.createElement('button');
      saveBtn.classList.add("save-button");
      saveBtn.id = id;
      console.log(saveBtn.id);
      saveBtn.innerText = "Save";
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