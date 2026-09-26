// Portfolio interactions: mobile menu, current year, contact form feedback.
document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Mobile menu toggle
  const toggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");
  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      const open = toggle.classList.toggle("active");
      toggle.setAttribute("aria-expanded", String(open));
      navLinks.style.display = open ? "flex" : "";
    });

    // Close the menu once a link is chosen
    navLinks.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        toggle.classList.remove("active");
        navLinks.style.display = "";
      })
    );
  }

  // Contact form: local confirmation (no backend)
  const form = document.getElementById("contactForm");
  const status = document.getElementById("contactStatus");
  if (form && status) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const name = form.querySelector("#name");
      const who = name && name.value ? name.value : "there";
      status.textContent = "Message noted, " + who + ". I'll reply to your email soon.";
      form.reset();
    });
  }
});