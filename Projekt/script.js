document.addEventListener("DOMContentLoaded", function(event) { 
  let currentIndex = 0;
  const slides = document.querySelectorAll(".slide");

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
  }

  document.querySelector(".carousel").addEventListener("click", function(event) {
    if (event.target.classList.contains("next")) {
      nextSlide();
    } else if (event.target.classList.contains("prev")) {
      prevSlide();
    }
  });

  showSlide(currentIndex);
});
