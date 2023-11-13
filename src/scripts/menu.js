//Open/close hamburger menu
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

mobileMenuElements.forEach( (element) => {
    element.addEventListener('click', () => {
        document.querySelector('.mobile-menu').classList.remove('expanded');
    })
})

//JQuery

//Active link in menu
var sections = $('section')
var nav = $('nav')
var nav_height = nav.outerHeight();

$(window).on('scroll', function () {
    var cur_pos = $(this).scrollTop();

    sections.each(function () {
        var top = $(this).offset().top - nav_height,
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

    $('html, body').animate({scrollTop: $(id).offset().top - nav_height}, 500);

    return false;
});