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
