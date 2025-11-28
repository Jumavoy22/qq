const slides = Array.from(document.querySelectorAll('.slide'));
const prevBtn = document.querySelector('[data-direction="prev"]');
const nextBtn = document.querySelector('[data-direction="next"]');
const progressLabel = document.getElementById('progress-label');
const progressBar = document.getElementById('progress-bar');
let currentIndex = 0;

const totalSlides = slides.length;

function setSlide(index) {
    if (!slides[index]) {
        return;
    }

    slides[currentIndex].classList.remove('is-active');
    currentIndex = index;
    slides[currentIndex].classList.add('is-active');
    progressLabel.textContent = `Slide ${currentIndex + 1} of ${totalSlides}`;
    progressBar.style.width = `${((currentIndex + 1) / totalSlides) * 100}%`;
    slides[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
}

function handleStep(direction) {
    const nextIndex = direction === 'next'
        ? (currentIndex + 1) % totalSlides
        : (currentIndex - 1 + totalSlides) % totalSlides;
    setSlide(nextIndex);
}

prevBtn?.addEventListener('click', () => handleStep('prev'));
nextBtn?.addEventListener('click', () => handleStep('next'));

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight' || event.key === 'PageDown') {
        handleStep('next');
    }
    if (event.key === 'ArrowLeft' || event.key === 'PageUp') {
        handleStep('prev');
    }
});

slides.forEach((slide, index) => {
    slide.addEventListener('click', (event) => {
        const target = event.target;
        if (target.dataset.action === 'jump') {
            const jumpIndex = Number(target.dataset.target);
            if (!Number.isNaN(jumpIndex)) {
                setSlide(Math.min(Math.max(jumpIndex, 0), totalSlides - 1));
            }
        }
    });
});

// Basic swipe support for touch screens.
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (event) => {
    touchStartX = event.changedTouches[0].screenX;
});

document.addEventListener('touchend', (event) => {
    touchEndX = event.changedTouches[0].screenX;
    const delta = touchEndX - touchStartX;
    if (Math.abs(delta) > 70) {
        handleStep(delta < 0 ? 'next' : 'prev');
    }
});

// Initialize first slide state.
setSlide(0);
