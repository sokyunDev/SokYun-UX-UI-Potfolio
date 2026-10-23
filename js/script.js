document.documentElement.classList.add("js-ready");

const menuButton = document.querySelector(".menu-toggle");
const menuPanel = document.querySelector(".nav-panel");

function closeMenu() {
  if (!menuButton || !menuPanel) return;
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation menu");
  menuPanel.classList.remove("is-open");
}

if (menuButton && menuPanel) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
    menuPanel.classList.toggle("is-open", !isOpen);
  });

  menuPanel.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 992) closeMenu();
  });
}

const year = document.querySelector(".current-year");
if (year) year.textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll("[data-reveal]");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if ("IntersectionObserver" in window && !prefersReducedMotion) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
