const icon = document.querySelector('.hamIcon');
const menu = document.querySelector('.mainMenu');

icon.addEventListener('click', function() {
    menu.classList.toggle('active');
});