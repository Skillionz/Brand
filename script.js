// ===== Navbar Toggle =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-link');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// ===== Hero Slider =====
const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const dotsContainer = document.querySelector('.dots');
let currentIndex = 0;

function createDots() {
  slide.forEach((_, i) => {
    const dot = document.createElement('span');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
}
createDots();

const dots = document.querySelectorAll('.dots span');
dots[0].classList.add('active');

function updateSlide() {
  slides.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slide.length;
  updateSlide();
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slide.length) % slide.length;
  updateSlide();
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

setInterval(nextSlide, 5000); // auto slide every 5s

function goToSlide(index) {
  currentIndex = index;
  updateSlide();
}

// ===== Back to Top Button =====
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
});

backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
