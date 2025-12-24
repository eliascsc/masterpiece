const buttons = document.querySelectorAll('.tabs button');
const images = document.querySelectorAll('.grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

/* Filtro */
buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');

    const filter = button.dataset.filter;

    images.forEach(img => {
      const category = img.dataset.category;
      if (filter === 'all' || category === filter) {
        img.style.display = 'block';
        setTimeout(() => img.style.opacity = '1', 50);
      } else {
        img.style.opacity = '0';
        setTimeout(() => img.style.display = 'none', 300);
      }
    });
  });
});

/* Lightbox */
images.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.classList.add('show');
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener('click', () => {
  lightbox.classList.remove('show');
});
