let currentIndex = 0;

function moveCarousel(step) {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex += step;

    if (currentIndex >= items.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }

    const newTransform = `translateX(-${currentIndex * 100}%)`;
    document.querySelector('.carousel-inner').style.transform = newTransform;
}