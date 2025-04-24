document.querySelector(".logo").addEventListener("mouseover", function () {
  this.style.animation = "float 1s ease-in-out infinite, pulse 1s infinite";
});

document.querySelector(".logo").addEventListener("mouseout", function () {
  this.style.animation = "float 3s ease-in-out infinite, pulse 2s infinite";
});

document.querySelector(".bh-logo").addEventListener("mouseover", function () {
  this.style.transform = "scale(1.05) rotate(5deg)";
});

document.querySelector(".bh-logo").addEventListener("mouseout", function () {
  this.style.transform = "scale(1) rotate(0)";
});

const funFact = document.querySelector(".fun-fact");
funFact.addEventListener("click", function () {
  this.style.transform = "scale(1.02)";
  setTimeout(() => {
    this.style.transform = "scale(1)";
  }, 200);
});

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card) => {
  card.addEventListener("click", function (e) {
    const x = e.pageX - card.offsetLeft;
    const y = e.pageY - card.offsetTop;

    const ripple = document.createElement("span");
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";
    ripple.style.backgroundColor = "rgba(77, 166, 255, 0.3)";

    this.appendChild(ripple);

    setTimeout(() => {
      ripple.remove();
    }, 1000);
  });

  card.addEventListener("mousemove", function (e) {
    const cardWidth = this.offsetWidth;
    const cardHeight = this.offsetHeight;
    const centerX = this.offsetLeft + cardWidth / 2;
    const centerY = this.offsetTop + cardHeight / 2;
    const mouseX = e.pageX - centerX;
    const mouseY = e.pageY - centerY;

    const rotateX = ((mouseY / cardHeight) * -10).toFixed(2);
    const rotateY = ((mouseX / cardWidth) * 10).toFixed(2);

    this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    this.style.boxShadow = `${-mouseX / 10}px ${
      -mouseY / 10
    }px 20px rgba(77, 166, 255, 0.2)`;
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(-10px)";
    this.style.boxShadow = "0 10px 20px rgba(77, 166, 255, 0.2)";
  });
});

const caseCards = document.querySelectorAll(".case-card");

caseCards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.boxShadow = "0 5px 20px rgba(77, 166, 255, 0.4)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.boxShadow = "0 5px 15px rgba(77, 166, 255, 0.3)";
  });

  card.addEventListener("click", function () {
    this.style.transform = "translateY(-5px) scale(0.98)";
    setTimeout(() => {
      this.style.transform = "translateY(-5px) scale(1)";
    }, 200);
  });
});

let currentCase = 0;
const cases = document.querySelectorAll(".case-card");

function showCase(index) {
  cases.forEach((c, i) => {
    c.style.display = i === index ? "block" : "none";
  });
}

if (window.innerWidth <= 768) {
  showCase(0);

  document.querySelector("#clients").addEventListener("click", function (e) {
    if (e.target.closest(".case-card")) return;

    currentCase = (currentCase + 1) % cases.length;
    showCase(currentCase);
  });
}

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = this.elements["name"].value.trim();
  const email = this.elements["email"].value.trim();
  const message = this.elements["message"].value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all required fields!");
    return;
  }

  const submitBtn = this.querySelector(".submit-btn");
  submitBtn.textContent = "Message Sent!";
  submitBtn.style.backgroundColor = "#4CAF50";

  setTimeout(() => {
    submitBtn.textContent = "Fire Away →";
    submitBtn.style.backgroundColor = "#4da6ff";
    this.reset();
  }, 3000);
});

const messageField = document.getElementById("message");
messageField.addEventListener("focus", function () {
  this.placeholder = "Type here... 😊 🚀 💡";
});

messageField.addEventListener("blur", function () {
  this.placeholder = "";
});

const footerLogo = document.querySelector(".bh-logo-small");

footerLogo.addEventListener("mouseover", function () {
  this.style.transform = "rotate(10deg)";
  this.style.borderColor = "#3385ff";
});

footerLogo.addEventListener("mouseout", function () {
  this.style.transform = "rotate(0)";
  this.style.borderColor = "#4da6ff";
});

document.querySelector(".copyright").innerHTML = document
  .querySelector(".copyright")
  .innerHTML.replace("2023", new Date().getFullYear());

const burgerMenu = document.getElementById("burgerMenu");
const navbarLinks = document.getElementById("navbarLinks");

burgerMenu.addEventListener("click", function () {
  this.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});

navbarLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", function () {
    if (window.innerWidth <= 768) {
      burgerMenu.classList.remove("active");
      navbarLinks.classList.remove("active");
    }
  });
});

window.addEventListener("scroll", function () {
  const sections = document.querySelectorAll("section");
  const scrollPosition = window.scrollY + 100;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      document.querySelectorAll(".navbar-links a").forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

window.addEventListener("scroll", () => {
  const backToTop = document.querySelector(".back-to-top");
  if (window.scrollY > 300) {
    backToTop.classList.add("visible");
  } else {
    backToTop.classList.remove("visible");
  }
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

let visitorCount = 0;
document.addEventListener("DOMContentLoaded", () => {
  visitorCount++;
  document.querySelector("#visitor-count").textContent = visitorCount;
});

const timelineItems = document.querySelectorAll(".timeline-item");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.1 }
);
timelineItems.forEach((item) => observer.observe(item));
