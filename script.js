// Efeito de fundo no menu ao rolar a página
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

// Toggle do menu responsivo (Mobile)
const btnMenu = document.getElementById("btn-menu-mobile");
const navMenu = document.getElementById("nav-menu");

if (btnMenu && navMenu) {
  btnMenu.addEventListener("click", function () {
    navMenu.classList.toggle("show");
  });

  // Fecha o menu ao clicar em um link
  const links = navMenu.querySelectorAll("a");
  links.forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
    });
  });
}

// Animação de Scroll (Revelar Elementos ao Rolar a Página)
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // Se o elemento estiver aparecendo na tela...
    if (entry.isIntersecting) {
      entry.target.classList.add('show-element');
    }
  });
}, {
  threshold: 0.05 // Dispara muito mais rápido (quando apenas 5% aparecer na tela)
});

// Selecionar todos os elementos com as classes de ocultação (.hidden-left, .hidden-right, .hidden-bottom)
const hiddenElements = document.querySelectorAll('.hidden-left, .hidden-right, .hidden-bottom');

// Mandar o observador monitorar cada um deles
hiddenElements.forEach((el) => observer.observe(el));
