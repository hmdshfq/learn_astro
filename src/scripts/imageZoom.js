const img = document.getElementsByClassName("toZoom");
const modal = document.getElementsByClassName("modal");
const modalContainer = document.getElementsByClassName("modal-content");
const span = document.getElementsByClassName("close");

for (let i = 0; i < img.length; i++) {
    img[i].onclick = function () {
        modal[i].classList.add("active");
    };

    span[i].onclick = function () {
        modal[i].classList.remove("active");
    };

    modalContainer[i].onclick = function () {
        modal[i].classList.remove("active");
    }
}