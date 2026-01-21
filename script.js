const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const yearEl = document.getElementById("year");

if (yearEl) yearEl.textContent = new Date().getFullYear();

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const isOpen = navLinks.style.display === "flex";
    navLinks.style.display = isOpen ? "none" : "flex";
    menuBtn.setAttribute("aria-expanded", String(!isOpen));
  });

  // Fermer le menu quand on clique un lien (mobile)
  navLinks.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      if (window.innerWidth <= 980) navLinks.style.display = "none";
    });
  });
}
