// Effects Up and Down

ScrollReveal().reveal(".ef-up", {
  origin: "bottom",
  distance: "20px",
  duration: 2000,
  easing: "ease",
});

ScrollReveal().reveal(".ef-i-up", {
  origin: "bottom",
  distance: "20px",
  duration: 2000,
  easing: "ease",
  interval: 300,
});

ScrollReveal().reveal(".ef-down", {
  origin: "top",
  distance: "20px",
  duration: 2000,
  easing: "ease",
});

ScrollReveal().reveal(".ef-i-down", {
  origin: "top",
  distance: "20px",
  duration: 2000,
  easing: "ease",
  interval: 300,
});

// Effects Left and Right

ScrollReveal().reveal(".ef-left", {
  origin: "left",
  distance: "20px",
  duration: 2000,
  easing: "ease",
});

ScrollReveal().reveal(".ef-i-left", {
  origin: "left",
  distance: "20px",
  duration: 2000,
  easing: "ease",
  interval: 300,
});

ScrollReveal().reveal(".ef-right", {
  origin: "right",
  distance: "20px",
  duration: 2000,
  easing: "ease",
});

ScrollReveal().reveal(".ef-i-right", {
  origin: "right",
  distance: "20px",
  duration: 2000,
  easing: "ease",
  interval: 300,
});

// Effects Zoom

ScrollReveal().reveal(".ef-zoom", {
  distance: "0px",
  scale: 0.85,
  opacity: 0.4,
  duration: 2000,
  easing: "ease",
  interval: 300,
});

ScrollReveal().reveal(".ef-flip", {
  duration: 2600,
  rotate: {
    x: 360,
    y: -180,
    z: 20,
  },
  scale: 0.1,
  easing: "ease",
});

// Swipper Slide
var swiper = new Swiper(".slide_dp", {
  slidesPerView: 1,
  spaceBetween: 24,
  slidesPerGroup: 1,
  cssMode: true,
  keyboard: true,
  centeredSlides: true,
  navigation: {
    nextEl: ".btns_pagination .swiper-button-next",
    prevEl: ".btns_pagination .swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
});
