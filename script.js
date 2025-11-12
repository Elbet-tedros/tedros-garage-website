// ---------- Mobile Menu Toggle ----------
const mobileMenu = document.getElementById("mobile-menu");
const nav = document.querySelector("nav");

mobileMenu.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// ---------- Smooth Scroll for Anchor Links (Optional) ----------
const navLinks = document.querySelectorAll("nav ul li a");
navLinks.forEach(link => {
  link.addEventListener("click", (e) => {
    if (link.hash) {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      target.scrollIntoView({ behavior: "smooth" });
      nav.classList.remove("active"); // Close menu after clicking
    }
  });
});

// ---------- Contact Form Submission ----------
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    contactForm.reset();
  });
}

// ---------- Optional: Fade-in Animations ----------
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("appear");
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
