//Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector('.nav-links');

// Open/close hamburger menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('expanded');
    navLinks.classList.toggle('expanded');
})

// Hide hamburger menu if clicked on the link
const menuButtons = document.querySelectorAll('.menu-button');

menuButtons.forEach((e) => {
    e.addEventListener('click', () => {
        hamburger.classList.remove('expanded');
        navLinks.classList.remove('expanded');
    })
})

// Hide hamburger menu if screen size more than min-width
const mediaMinWidth = window.matchMedia("(min-width: 700px)")

function closeMenuIfMedia() {
    //if (x <= 700) than {hide hamburger menu} else {....}
    if (mediaMinWidth.matches) {
        hamburger.classList.remove('expanded');
        navLinks.classList.remove('expanded');
    }
}

closeMenuIfMedia() // Call listener function at run time
mediaMinWidth.addEventListener("change" ,closeMenuIfMedia) // Attach listener function on state changes 


// JQuery
// Active link in menu
var sections = $('section');
var header_height = $('header').outerHeight();
var nav = $('nav');

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
        var top = $(this).offset().top - header_height;
        var bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('class') + '"]').addClass('active');
        }
    });
});