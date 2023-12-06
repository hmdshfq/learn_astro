//Hamburger menu and buttons (links)
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
// Listener for media 
mediaMinWidth.addEventListener("change", closeMenuIfMedia)

//Spy-scroll (active link when it in section) Intersection Observer API
const sections = document.querySelectorAll("section");
let activeSectionIndicator = '';

function createSectionObserver() {
    let options = {
        root: null,
        rootMargin: "-10% 0px -90% 0px",
    };

    let observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => {
        observer.observe(section);
    });
}

let callback = (entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            //get the class name of current section
            activeSectionIndicator = "#" + entry.target.classList[0];

            menuButtons.forEach(element => {
                //delete .active from menu links
                if(element.classList.contains("active")){
                    element.classList.remove("active");
                }
                //add .active if href link equals to section class name
                if (element.getAttribute("href") === activeSectionIndicator) {
                    element.classList.add("active");
                }
            });

        }
    });
};

createSectionObserver();