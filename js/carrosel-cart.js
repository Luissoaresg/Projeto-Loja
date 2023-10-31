document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-card");
  const prevButton = document.getElementById("prev-card");
  const nextButton = document.getElementById("next-card");

  let currentIndex = 0;
  let intervalId;

  function startCarousel() {
    intervalId = currentIndex = (currentIndex + 1) % carousel.children.length;
  }

  function stopCarousel() {
    clearInterval(intervalId);
  }

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + carousel.children.length) % carousel.children.length;
    updateCarousel();
    stopCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % carousel.children.length;
    updateCarousel();
    stopCarousel();
  });

  function updateCarousel() {
    const translateValue = -currentIndex * 30;
    carousel.style.transform = `translateX(${translateValue}%)`;
  }

  startCarousel(); // Iniciar o carrossel automaticamente
});
