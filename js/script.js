// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Dynamic Features Section Animation
window.addEventListener("scroll", () => {
  const featureCards = document.querySelectorAll(".feature-card");
  featureCards.forEach((card) => {
    const cardPosition = card.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;
    if (cardPosition < screenPosition) {
      card.classList.add("animate");
    }
  });
});

// Testimonials Carousel (Optional for extra effect)
let currentIndex = 0;
const testimonials = document.querySelectorAll(".testimonial-item");
const changeTestimonial = () => {
  testimonials.forEach((item, index) => {
    item.style.display = index === currentIndex ? "block" : "none";
  });
  currentIndex = (currentIndex + 1) % testimonials.length;
};
setInterval(changeTestimonial, 5000);
