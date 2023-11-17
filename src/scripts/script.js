//Observer API
let jumpElements;

window.addEventListener(
    "load",
    (event) => {

        jumpElements = document.querySelectorAll('.jump-when-visible');

        createJumpObserver();
    },
    false,
);

function createJumpObserver() {

    let options = {
        root: null, // use the document's viewport as the container
        rootMargin: "0px",  // % or px - offsets added to each side of the intersection 
        threshold: 0.7,    // percentage of the target element which is visible
    };

    // Create the intersection observer instance by calling its constructor and passing it a
    // callback function to be run whenever a threshold is crossed in one direction or the other:
    let observer = new IntersectionObserver(callback, options);

    // Get all the `.jump-when-visible` from DOM and attach the observer to these
    jumpElements.forEach(element => { observer.observe(element) });
}

let callback = (entries) => {
    entries.forEach(entry => {
        const ratio = entry.intersectionRatio;
        const boundingRect = entry.boundingClientRect;
        const intersectionRect = entry.intersectionRect;

        // If entry is visible - according with the params set in `options`
        // then, depends on what direction, adds `jump-animation-up/down` class to box
        // otherwise removes `jump-animation-up/down` class

        if (entry.isIntersecting) {
            if (ratio < 1) {
                if (boundingRect.top < intersectionRect.top) {
                    entry.target.classList.add('jump-animation-up');
                } else {
                    entry.target.classList.add('jump-animation-down');
                }
            }
        } else {
            entry.target.classList.remove('jump-animation-up');
            entry.target.classList.remove('jump-animation-down');
        }
    })
}