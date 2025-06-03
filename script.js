// Mobile menu toggle
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Close mobile menu if open
    if (!mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Back to top button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.remove("opacity-0", "invisible");
    backToTopButton.classList.add("opacity-100", "visible");
  } else {
    backToTopButton.classList.remove("opacity-100", "visible");
    backToTopButton.classList.add("opacity-0", "invisible");
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Scroll animation
const fadeElements = document.querySelectorAll(".fade-in");

const fadeInOnScroll = () => {
  fadeElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (elementTop < windowHeight - 100) {
      element.classList.add("visible");
    }
  });
};

// Initialize on load
window.addEventListener("load", fadeInOnScroll);
// And on scroll
window.addEventListener("scroll", fadeInOnScroll);

// Animate skill bars on scroll
const skillBars = document.querySelectorAll(".skill-progress");
let skillsAnimated = false;

const animateSkillBars = () => {
  const skillsSection = document.getElementById("skills");
  const skillsSectionTop = skillsSection.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (skillsSectionTop < windowHeight - 200 && !skillsAnimated) {
    skillBars.forEach((bar) => {
      const width = bar.getAttribute("data-width");
      bar.style.width = width;
      bar.classList.add("animate");
    });
    skillsAnimated = true;
  }
};

window.addEventListener("scroll", animateSkillBars);

// Initialize skill bars with 0 width
document.addEventListener("DOMContentLoaded", () => {
  skillBars.forEach((bar) => {
    bar.style.width = "0";
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".carousel-images");

  carousels.forEach((carousel) => {
    const images = carousel.querySelectorAll(".carousel-image");
    let index = 0;

    setInterval(() => {
      images[index].classList.remove("opacity-100");
      images[index].classList.add("opacity-0");
      index = (index + 1) % images.length;
      images[index].classList.remove("opacity-0");
      images[index].classList.add("opacity-100");
    }, 3000); // Change every 3 seconds
  });
});

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Initialize EmailJS
  emailjs.init("g6avWLMCkf8684pQ0");
  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // ✅ Prevent the default form submission (refresh)

      emailjs
        .sendForm("service_ltyccpa", "template_pfb3ebs", form)
        .then(function () {
          alert("Message sent successfully!");
          form.reset();
        })
        .catch(function (error) {
          console.error("Email send error:", error);
          alert("Failed to send message. Please try again.");
        });
    });
  } else {
    console.error("Form with id 'contact-form' not found.");
  }
});
