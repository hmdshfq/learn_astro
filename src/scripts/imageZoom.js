const smallImage = document.getElementsByClassName("small-image");
const bigImgContainer = document.getElementsByClassName("big-image-container");
const bigImg = document.getElementsByClassName("big-image");
const overlay = document.getElementsByClassName("overlay");

for (let i = 0; i < overlay.length; i++) {
    overlay[i].onclick = function () {
        bigImgContainer[i].classList.add("active");
        // bigImg[i].src = this.src;
        // bigImg[i].alt = this.alt;
        // bigImgContainer.style.animationName="zoom-in";
    };

    bigImgContainer[i].onclick = function () {
        closeAnimation();
    }

    function closeAnimation() {
        bigImg[i].classList.add("zoom-out")
        setTimeout(function() {
            bigImgContainer[i].classList.remove("active");
            bigImg[i].classList.remove("zoom-out");
        }, 300);
    }
}


// for (let i = 0; i < smallImage.length; i++) {
//     smallImage[i].onclick = function () {        
//         bigImgContainer[i].classList.add("active");
//         // bigImg[i].src = this.src;
//         // bigImg[i].alt = this.alt;
//         // bigImgContainer.style.animationName="zoom-in";
//     };

//     bigImgContainer[i].onclick = function () {
//         closeAnimation();
//     }

//     function closeAnimation() {
//         bigImg[i].classList.add("zoom-out")
//         setTimeout(function() {
//             bigImgContainer[i].classList.remove("active");
//             bigImg[i].classList.remove("zoom-out");
//         }, 300);
//     }
// }