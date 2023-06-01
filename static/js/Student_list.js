let students = [];

function getStudentsData() {
  fetch('http://127.0.0.1:8000/students/')
    .then(response => response.json())
    .then(data => {
      students = Object.values(data); // Convert data to an array
      fillTable();
    })
    .catch(error => {
      console.error('Error fetching student data:', error);
    });
}

function fillTable(filteredStudents = null) {
  const tableBody = document.querySelector('#table_design tbody');
  tableBody.innerHTML = ''; // Clear existing table rows

  let count = 1;

  const studentsToDisplay = filteredStudents ? filteredStudents : students;

  for (const student of studentsToDisplay) {
    const newRow = document.createElement('tr');

    const countCell = document.createElement('td');
    countCell.textContent = count.toString();

    const idCell = document.createElement('td');
    idCell.textContent = student.id;

    const nameCell = document.createElement('td');
    nameCell.innerHTML = `${student.firstName} ${student.lastName}`;

    const levelCell = document.createElement('td');
    levelCell.textContent = student.level;

    const departmentCell = document.createElement('td');
    departmentCell.textContent = student.department;

    const gpaCell = document.createElement('td');
    gpaCell.textContent = student.gpa;

    const phoneCell = document.createElement('td');
    phoneCell.textContent = student.phone;

    const genderCell = document.createElement('td');
    genderCell.textContent = student.gender;

    const dobCell = document.createElement('td');
    dobCell.textContent = student.dateOfBirth;

    const emailCell = document.createElement('td');
    emailCell.textContent = student.email;

    const statusCell = document.createElement('td');
    statusCell.textContent = student.status;

    newRow.append(
      countCell,
      nameCell,
      idCell,
      levelCell,
      departmentCell,
      gpaCell,
      phoneCell,
      genderCell,
      dobCell,
      emailCell,
      statusCell
    );

    tableBody.appendChild(newRow);

    count++;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  getStudentsData();

  const searchInput = document.querySelector('input[type="search"]');
const tableBody = document.querySelector('#table_design tbody');

searchInput.addEventListener('input', () => {
  const searchValue = searchInput.value.toLowerCase();
  const rows = tableBody.querySelectorAll('tr');

  rows.forEach(row => {
    const columns = row.querySelectorAll('td');
    let found = false;

    columns.forEach(column => {
      const text = column.textContent.toLowerCase();
      if (text.includes(searchValue)) {
        found = true;
        return;
      }
    });

    if (found) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
});

});
