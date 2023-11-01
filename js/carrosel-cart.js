document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel-card");
  const prevButton = document.getElementById("prev-card");
  const nextButton = document.getElementById("next-card");

  let currentIndex = 0;
  let intervalId;

  function startCarousel() {
    intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % carousel.children.length;
      updateCarousel();
    }, 5000); // Mude de imagem a cada 5 segundos (ajuste o valor conforme necessário)
  }

  function stopCarousel() {
    clearInterval(intervalId);
  }

  prevButton.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + carousel.children.length) % carousel.children.length;
    updateCarousel();
    stopCarousel();
    startCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 5) % carousel.children.length;
    updateCarousel();
    stopCarousel();
    startCarousel();
  });

  function updateCarousel() {
    const translateValue = -currentIndex * 13;
    carousel.style.transform = `translateX(${translateValue}%)`;
  }

  startCarousel(); // Iniciar o carrossel automaticamente
});