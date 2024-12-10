const slides = document.querySelectorAll('.slide');
// const prevButton = document.getElementById('prev');
// const nextButton = document.getElementById('next');
let currentIndex = 0;

function showSlide(index) {
  // Remove classes das imagens atuais
  slides.forEach((slide) => slide.classList.remove('active', 'exit'));

  // Marca a imagem atual como "exit"
  slides[currentIndex].classList.add('exit');

  // Atualiza o índice
  currentIndex = index;

  // Marca a nova imagem como "active"
  slides[currentIndex].classList.add('active');
}

function nextSlide() {
  
  const nextIndex = (currentIndex + 1) % slides.length;
  showSlide(nextIndex);
}

function prevSlide() {
  
  const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(prevIndex);
}

// Inicializa o slider
slides[currentIndex].classList.add('active');

// Eventos dos botões de navegação
// nextButton.addEventListener('click', nextSlide);
// prevButton.addEventListener('click', prevSlide);

// Muda o slide automaticamente a cada 5 segundos
setInterval(nextSlide, 5000);
