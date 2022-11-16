
const prev = document.getElementById("button_prev");
const next = document.getElementById("button_next");

const slide = document.querySelectorAll(".slide_img, .slide_img-showing");
let currentSlide = 0;


function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    
    slide[currentSlide].classList = 'slide_img';
    currentSlide = (n  + slide.length) % slide.length;
    slide[currentSlide].classList = 'slide_img-showing';
}

prev.addEventListener('click', () => {
    previousSlide() 
});

next.addEventListener('click', () => {
    nextSlide() 
});