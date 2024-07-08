document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('#slider > div');
    const slides = document.querySelectorAll('#slider > div > div');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const pageCount = document.getElementById('pageCount');
    
    let currentIndex = 0;
    const totalSlides = slides.length;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        pageCount.textContent = `${currentIndex + 1} / ${totalSlides}`;
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    });

    updateSlider();
});

