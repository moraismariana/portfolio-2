console.log("oi");

// Slides

document.addEventListener("DOMContentLoaded", () => {
  new Splide("#slider-tecnologias", {
    perPage: 7,
    type: "loop",
    drag: false,
    pagination: false,
    arrows: false,
    gap: "1rem",
    autoScroll: {
      speed: 0.5,
      pauseOnHover: false,
      pauseOnFocus: false,
    },
  }).mount(window.splide.Extensions);

  new Splide("#slider-certificados", {
    perPage: 1,
    type: "loop",
    drag: false,
    pagination: false,
    arrows: true,
    gap: "1rem",
  }).mount();

  new Splide("#slider-projetos", {
    perPage: 1,
    autoplay: true,
    interval: 10000,
    speed: 1100,
    pauseOnHover: false,
    type: "loop",
    drag: false,
    pagination: false,
    arrows: true,
    focus: "center",
    gap: "1rem",
    slideFocus: true,
    fixedWidth: "60vw",
    gap: "20px",
  }).mount();
});
