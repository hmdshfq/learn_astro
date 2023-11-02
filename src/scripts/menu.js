document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.toggle('expanded');
})

// Hide menu if clicked out of the menu
window.addEventListener('click', function (e) {
    if (!document.getElementById('mobile-nav-menu').contains(e.target)
        && !document.getElementById('menu').contains(e.target)) {
        document.querySelector('.mobile-menu').classList.toggle('expanded');
    }
})

// Hide menu if clicked on the link
// menuButtonElement.addEventListener('click', () => {
//     mobileMenuElement.classList.toggle('expanded');
// })


//For multiple page. Show the hamburge menu if you go to another page.
// document.addEventListener('astro:page-load', () => {
//     document.querySelector('.hamburger').addEventListener('click', () => {
//         document.querySelector('.mobile-menu').classList.toggle('expanded');
//     })
// });