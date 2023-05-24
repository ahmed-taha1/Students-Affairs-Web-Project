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