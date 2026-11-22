document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.category-btn');
  const cards = document.querySelectorAll('.service-card');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');

      cards.forEach(card => {
        if (category === 'all' || card.classList.contains(category)) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});
