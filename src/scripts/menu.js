//Hamburge menu
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

function myFunction(mediaMinWidth) {
    //if (x <= 700) than {hide haburger menu} else {....}
    if (mediaMinWidth.matches) {
        hamburger.classList.remove('expanded');
        navLinks.classList.remove('expanded');
    }
}

myFunction(mediaMinWidth) // Call listener function at run time
mediaMinWidth.addListener(myFunction) // Attach listener function on state changes 

// JQuery

// Active link in menu
var sections = $('section')
var header_height = $('header').outerHeight();
var nav = $('nav');

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
        var top = $(this).offset().top - header_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
    });
});

//Smooth scrolling page when clicked on menu button
nav.find('a').on('click', function () {
    var $el = $(this);
    var id = $el.attr('href');

    $('html, body').animate({ scrollTop: $(id).offset().top - header_height }, 500);

    return false;
});