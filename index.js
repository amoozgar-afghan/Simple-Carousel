const slides = document.getElementsByClassName('carousel-item');
const carousel = document.getElementById('carousel');
const carouselDotsUl = document.getElementById('carousel-dots');
const totalSlides = slides.length;

let slidePosition = 0;
let carouselDots = "";
let theInterval;

document.getElementById('carousel-button-next').addEventListener('click', moveToNextSlide);
document.getElementById('carousel-button-prev').addEventListener('click', moveToPrevSlide);
carousel.addEventListener('mouseover', stopSlide);
carousel.addEventListener('mouseout', startSlide);

function startSlide() {
    theInterval = setInterval(moveToNextSlide, 2500);
}

startSlide();

function stopSlide() {
    clearInterval(theInterval);
}

function addCarouselDots(){
    for (let i = 0; i < slides.length; i++) {
        carouselDots += `<li id="slider-dot-${i}"></li>`;
    }
    carouselDotsUl.innerHTML = carouselDots;
}

addCarouselDots();

function hideAllSlides() {
    let counter = 0;
    for (let slide of slides) {
        slide.classList.remove('carousel-item-visible');
        slide.classList.add('carousel-item-hidden');
        document.getElementById("slider-dot-"+counter).classList.remove("active-dot");
        counter++;
    }
    
}

function moveToNextSlide() {
    hideAllSlides();
    
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0;
    } else {
        slidePosition++;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    document.getElementById("slider-dot-"+slidePosition).classList.add("active-dot");    
}

function moveToPrevSlide() {
    hideAllSlides();
    
    if (slidePosition === 0) {
        slidePosition = totalSlides - 1;
    } else {
        slidePosition--;
    }
    
    slides[slidePosition].classList.add("carousel-item-visible");
    document.getElementById("slider-dot-"+slidePosition).classList.add("active-dot");
}

