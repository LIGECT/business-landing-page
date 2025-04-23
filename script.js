document.querySelector(".logo").addEventListener("mouseover", function () {
  this.style.animation = "float 1s ease-in-out infinite, pulse 1s infinite";
});

document.querySelector(".logo").addEventListener("mouseout", function () {
  this.style.animation = "float 3s ease-in-out infinite, pulse 2s infinite";
});
