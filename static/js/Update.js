
    /* display student form */
    const editButtons = document.querySelectorAll('.edit');
    const studentInfo = document.querySelector('.student_info');

    editButtons.forEach(button => {
    button.addEventListener('click', () => {
        studentInfo.style.display = 'block';
    });
});


    /* hidden the student form */
    const exitBtn = document.getElementById('exit');
    const studentInfoDiv = document.querySelector('.student_info');

    exitBtn.addEventListener('click', () => {
    studentInfoDiv.style.display = 'none';
});



    const searchInput = document.getElementById("Search");
    const tableBody = document.querySelector('.table_data tbody');

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

