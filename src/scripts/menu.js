document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('expanded');
    document.querySelector('.mobile-nav-menu').classList.toggle('expanded');
});