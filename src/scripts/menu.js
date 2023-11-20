// Open/close hamburger menu
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.hamburger').classList.toggle('expanded');
    document.querySelector('.nav-links').classList.toggle('expanded');
})

// Hide menu if clicked on the link
let menuElements = document.querySelectorAll('.menu-button');

menuElements.forEach( (element) => {
    element.addEventListener('click', () => {
        document.querySelector('.hamburger').classList.remove('expanded');
        document.querySelector('.nav-links').classList.remove('expanded');
    })
})

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

    $('html, body').animate({scrollTop: $(id).offset().top - header_height}, 500);

    return false;
});