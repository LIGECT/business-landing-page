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

// Add some fun to the fun fact
const funFact = document.querySelector(".fun-fact");
funFact.addEventListener("click", function () {
  this.style.transform = "scale(1.02)";
  setTimeout(() => {
    this.style.transform = "scale(1)";
  }, 200);
});

// Services section animations
const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach((card) => {
  // Add ripple effect on click
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

  // Add tilt effect on mouse move
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
