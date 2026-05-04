// Menu fixo ao rolar
window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  if (window.scrollY > 50) {
    header.classList.add("header-scrolled");
  } else {
    header.classList.remove("header-scrolled");
  }
});

// Toggle do menu mobile
const btnMenu = document.getElementById("btn-menu-mobile");
const navMenu = document.getElementById("nav-menu");

if (btnMenu && navMenu) {
  btnMenu.addEventListener("click", function () {
    navMenu.classList.toggle("show");
    const icon = btnMenu.querySelector("i");
    if (navMenu.classList.contains("show")) {
      icon.classList.replace("fa-bars", "fa-times");
    } else {
      icon.classList.replace("fa-times", "fa-bars");
    }
  });

  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show");
      const icon = btnMenu.querySelector("i");
      icon.classList.replace("fa-times", "fa-bars");
    });
  });
}

// Animação de revelação ao rolar
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-element");
      revealObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.08,
  rootMargin: "0px 0px -40px 0px"
});

document.querySelectorAll(".hidden-left, .hidden-right, .hidden-bottom").forEach(el => {
  revealObserver.observe(el);
});

// Contador animado
function animateCounters() {
  document.querySelectorAll(".stat-number").forEach(counter => {
    const target = +counter.getAttribute("data-target");
    const suffix = counter.getAttribute("data-suffix") || "";
    const duration = 1800;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(eased * target);
      counter.textContent = value + suffix;
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        counter.textContent = target + suffix;
      }
    }

    requestAnimationFrame(step);
  });
}

const statsSection = document.querySelector(".stats");
if (statsSection) {
  const statsObserver = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateCounters();
      statsObserver.unobserve(statsSection);
    }
  }, { threshold: 0.4 });
  statsObserver.observe(statsSection);
}
