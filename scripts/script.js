/* CARGA DE IMÁGENES SEGÚN TAMAÑO DE VENTANA */

putImageBySizeScreen();
window.addEventListener("resize", putImageBySizeScreen);

function putImageBySizeScreen(){
  const heroCarouselImage1 = document.getElementById("imgCarousel1");
  const heroCarouselImage2 = document.getElementById("imgCarousel2");
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    heroCarouselImage1.src = "./images/hero_img_ramon_xs.jpg";
    heroCarouselImage2.src = "./images/hero_img_cucumbers_xs.jpg";
  }  else {
    heroCarouselImage1.src = "./images/hero_img_ramon_xl.jpg";
    heroCarouselImage2.src = "./images/hero_img_cucumbers_xl.jpg";
  }
}

/* CÓDIGO MENÚ */

const menuPrincipal = document.getElementById("menu");

function showMenu() {
  menuPrincipal.classList.contains("shown")
    ? menuPrincipal.classList.remove("shown")
    : menuPrincipal.classList.add("shown");
}

/* CÓDIGO CAROUSEL */

const carousel = document.querySelector(".carousel-inner");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
const carouselItems = document.querySelectorAll(".carousel-item");
carouselItems[currentIndex].classList.add("active");

function goToSlide(index) {
  carousel.style.transform = `translateX(-${index * 100}%)`;
  carouselItems[currentIndex].classList.remove("active");
  carouselItems[index].classList.add("active");
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

nextBtn.addEventListener("click", goToNextSlide);
prevBtn.addEventListener("click", goToPrevSlide);

// setInterval(goToNextSlide, 3000);
