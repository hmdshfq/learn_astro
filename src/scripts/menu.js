document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.toggle('expanded');
})

// Hide menu if clicked out of the menu or nav bar
window.addEventListener('click', function (e) {
    if (document.querySelector('.mobile-menu').classList.contains('expanded')
        &&
        !document.getElementById('mobile-nav-menu').contains(e.target)
        && 
        !document.getElementById('menu').contains(e.target)) {
            document.querySelector('.mobile-menu').classList.toggle('expanded');
        }
})

// Hide menu if clicked on the link
let mobileMenuElements = document.querySelectorAll('.menu-button');

for (var i = 0; i < mobileMenuElements.length; i++){
    mobileMenuElements[i].addEventListener('click', () => 
            document.querySelector('.mobile-menu').classList.remove('expanded')
        )
}

// mobileMenuElements.map( (element) => {
//     element.addEventListener('click', () => {
//         document.querySelector('.mobile-menu').classList.toggle('expanded');
//     })
// })