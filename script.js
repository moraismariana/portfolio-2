(function slides() {
  if (typeof Splide === "undefined") return;
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
      // gap: "1rem",
    }).mount();

    new Splide("#slider-projetos", {
      perPage: 1,
      autoplay: true,
      arrows: true,
      pagination: false,
      pauseOnHover: false,
      drag: false,
      updateOnMove: true,

      interval: 10000,
      speed: 1100,
      gap: "20px",
      fixedWidth: "60vw",

      type: "loop",
      focus: "center",
      slideFocus: true,
      omitEnd: true,
      trimSpace: false,
      clones: 6,
    }).mount();
  });
})();

(function emailContato() {
  document.addEventListener("DOMContentLoaded", () => {
    const botaoEmail = document.getElementById("contato-email");
    const textoEmail = document.getElementById("email");
    if (botaoEmail && textoEmail) {
      botaoEmail.addEventListener("click", () => {
        textoEmail.innerHTML = "moraismariana200@gmail.com";
        botaoEmail.classList.toggle("ativo");
      });
    }
  });
})();

(function efeitoScroll() {
  const transitionElement = document.querySelectorAll(".transition-element");

  const exibirElementos = () => {
    transitionElement.forEach((element) => {
      if (isInView(element)) {
        element.classList.add("transition-element--visible");
      }
    });
  };

  document.addEventListener("DOMContentLoaded", exibirElementos);
  document.addEventListener("scroll", exibirElementos);

  function isInView(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.bottom > 0 &&
      rect.top <
        (window.innerHeight - 100 ||
          document.documentElement.clientHeight - 100)
    );
  }
})();

(function efeitoTecnologias() {
  document.addEventListener("DOMContentLoaded", () => {
    const itens = document.querySelectorAll(".pagina-tecnologias .tec-grid li");
    console.log(itens);

    const intervalo = 30;

    itens.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("ativo");
      }, index * intervalo);
    });
  });
})();
