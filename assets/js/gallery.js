document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.gallery-container').forEach(function(container) {
    const scroll = container.querySelector('.gallery-scroll');
    const leftBtn = container.querySelector('.gallery-arrow-left');
    const rightBtn = container.querySelector('.gallery-arrow-right');
    const lightbox = container.nextElementSibling;
    const lightboxImg = lightbox ? lightbox.querySelector('img') : null;
    const lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;

    if (!scroll || !leftBtn || !rightBtn) return;

    function getScrollAmount() {
      const img = scroll.querySelector('img');
      if (!img) return 300;
      return img.offsetWidth + 12;
    }

    function updateArrows() {
      leftBtn.disabled = scroll.scrollLeft <= 0;
      rightBtn.disabled = scroll.scrollLeft >= scroll.scrollWidth - scroll.clientWidth - 1;
    }

    leftBtn.addEventListener('click', function() {
      scroll.scrollBy({ left: -getScrollAmount(), behavior: 'smooth' });
    });

    rightBtn.addEventListener('click', function() {
      scroll.scrollBy({ left: getScrollAmount(), behavior: 'smooth' });
    });

    scroll.addEventListener('scroll', updateArrows);
    window.addEventListener('resize', updateArrows);
    updateArrows();

    if (lightbox && lightboxImg) {
      scroll.querySelectorAll('img').forEach(function(img) {
        img.addEventListener('click', function() {
          lightboxImg.src = img.src;
          lightbox.hidden = false;
          document.body.style.overflow = 'hidden';
        });
      });

      function closeLightbox() {
        lightbox.hidden = true;
        document.body.style.overflow = '';
      }

      lightboxClose.addEventListener('click', closeLightbox);

      lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) closeLightbox();
      });

      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && !lightbox.hidden) closeLightbox();
      });
    }
  });
});
