const carousel = document.querySelector('.carousel-inner');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');
carouselItems[currentIndex].classList.add('active');

function goToSlide(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
  carouselItems[currentIndex].classList.remove('active');
  carouselItems[index].classList.add('active');
  currentIndex = index;
}

function goToNextSlide() {
  if (currentIndex < carouselItems.length - 1) {
    goToSlide(currentIndex + 1);
  } else {
    goToSlide(0);
  }
}

function goToPrevSlide() {
  if (currentIndex > 0) {
    goToSlide(currentIndex - 1);
  } else {
    goToSlide(carouselItems.length - 1);
  }
}

nextBtn.addEventListener('click', goToNextSlide);
prevBtn.addEventListener('click', goToPrevSlide);

// setInterval(goToNextSlide, 3000);
