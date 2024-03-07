let index = 0;
const images = document.querySelectorAll('.carousel-image');

function updateCarousel() {
    images.forEach((img, i) => {
        if(i === index) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}

setInterval(() => {
    index = (index + 1) % images.length;
    updateCarousel();
}, 2000); // Change image every 2 seconds

window.addEventListener('scroll', function() {
    const fadeElements = document.querySelectorAll('.fade');
    fadeElements.forEach(function(element) {
        const top = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top - windowHeight <= 0) {
            element.style.opacity = 1;
        } else {
            element.style.opacity = 0;
        }
    });
});

let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const progress = document.querySelector('.progress-bar');
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop){
        progress.style.width = '38%';
    } else {
        progress.style.width = '0%';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
}, false);