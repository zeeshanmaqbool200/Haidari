document.addEventListener('DOMContentLoaded', function () {
const swiper = new Swiper(".testimonial", {
  speed: 400,
  loop: true,
  spaceBetween: 100,
  navigation: {
    nextEl: ".btn__next",
    prevEl: ".btn__prev"
  }
});
});

