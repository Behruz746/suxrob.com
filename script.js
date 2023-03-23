function scrollWindow() {

    window.addEventListener('scroll', function() {
        const header = document.querySelector('#header');
        header.classList.toggle('header_scrollY', this.window.scrollY >= 750);
    });

}

scrollWindow();

function toggleMenu() {

    const icon = document.querySelector('.hamIcon');
    const menu = document.querySelector('.mainMenu');
    const burger = document.querySelector('.menu-burger');

    icon.addEventListener('click', function() {
        menu.classList.toggle('active');
        burger.classList.toggle('active__bureger');
    });    

}

toggleMenu();