document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;

    function showSlide(index) {
        // Ensure the index wraps around
        currentIndex = (index + slides.length) % slides.length;

        // Update the slide positions and visibility
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            slide.style.opacity = i === currentIndex ? 1 : 0;
            slide.style.transform = `translateX(${100 * (i - currentIndex)}%)`;
        });

        slides[currentIndex].classList.add('active');
        slides[currentIndex].style.transform = 'translateX(0%)';
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    // Event listeners for buttons
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);

    // Auto slide every 5 seconds
    const autoSlideInterval = setInterval(nextSlide, 5000);

    // Pause auto slide on button hover
    prevBtn.addEventListener('mouseover', () => clearInterval(autoSlideInterval));
    nextBtn.addEventListener('mouseover', () => clearInterval(autoSlideInterval));
    prevBtn.addEventListener('mouseout', () => setInterval(nextSlide, 5000));
    nextBtn.addEventListener('mouseout', () => setInterval(nextSlide, 5000));

    // Initialize the first slide
    showSlide(currentIndex);
});
