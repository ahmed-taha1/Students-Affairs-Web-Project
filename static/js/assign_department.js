
let students = [];
getStudentsData();
fillTable();

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
      const departmentSelect = document.createElement('select');
      departmentSelect.name = "department";
      const department = ["CS", "AI", "IS", "IT", "DS"];
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
      newRow.append(countCell);
      newRow.append(nameCell);
      newRow.append(idCell);
      newRow.append(levelCell);
      newRow.append(departmentCell);
      tableBody.append(newRow);
      count++;
    }
}
window.addEventListener('DOMContentLoaded', () => {
  const saveButton = document.querySelector('.save-button');
  const searchForm = document.getElementById('search-form');
  const searchInput = document.getElementById('search');
  const tableRows = document.querySelectorAll('tbody tr');

  saveButton.addEventListener('click', () => {
    const selectedDepartment = document.querySelector('select[name="department"]:checked');
    if (selectedDepartment) {
      const selectedDepartmentValue = selectedDepartment.value;
      console.log('Selected Department:', selectedDepartmentValue);
    } else {
      console.log('Please select a department.');
    }
  });

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