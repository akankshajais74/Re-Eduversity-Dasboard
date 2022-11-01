let sidebar = document.getElementById('sidebar');
let toggleBtn = document.getElementById('toggle-btn')

toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('hide');
})