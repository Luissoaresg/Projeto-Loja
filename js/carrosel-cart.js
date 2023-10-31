document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-card");
  const prevButton = document.getElementById("prev-card");
  const nextButton = document.getElementById("next-card");

  let currentIndex = 0;
  let intervalId;

  function startCarousel() {
    intervalId = currentIndex = (currentIndex + 1) % carousel.children.length;
  }

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % carousel.children.length;
    updateCarousel();
  });

  function updateCarousel() {
    const translateValue = -currentIndex * 30;
    carousel.style.transform = `translateX(${translateValue}%)`;
  }

  startCarousel(); // Iniciar o carrossel automaticamente
});
