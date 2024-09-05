const checkbox = document.getElementById('check');
const menuItems = document.querySelectorAll('.nav-links li');


menuItems.forEach(item => {
  item.addEventListener('click', () => {

    checkbox.checked = false;
  });
});