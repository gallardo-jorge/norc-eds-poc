import { createOptimizedPicture } from '../../scripts/aem.js';

/**
 * Carousel block.
 * Each authored row represents one slide: [image cell | content cell].
 * The content cell may contain: eyebrow (em), heading, body paragraphs, CTA link.
 * @param {Element} block
 */
export default function decorate(block) {
  const rows = [...block.children];
  const total = rows.length;

  // Build slide elements
  const slidesWrapper = document.createElement('div');
  slidesWrapper.className = 'carousel-slides';
  slidesWrapper.setAttribute('aria-live', 'polite');

  rows.forEach((row, index) => {
    const [imageCell, contentCell] = row.children;

    const slide = document.createElement('article');
    slide.className = 'carousel-slide';
    slide.setAttribute('role', 'tabpanel');
    slide.setAttribute('aria-label', `Slide ${index + 1} of ${total}`);
    slide.setAttribute('aria-hidden', index !== 0 ? 'true' : 'false');
    if (index === 0) slide.classList.add('active');

    // Image
    const imageWrapper = document.createElement('div');
    imageWrapper.className = 'carousel-slide-image';
    const img = imageCell?.querySelector('img');
    if (img) {
      const optimized = createOptimizedPicture(img.src, img.alt, index === 0, [
        { media: '(min-width: 900px)', width: '1200' },
        { width: '750' },
      ]);
      imageWrapper.append(optimized);
    }

    // Content
    const contentWrapper = document.createElement('div');
    contentWrapper.className = 'carousel-slide-content';
    if (contentCell) {
      while (contentCell.firstElementChild) {
        contentWrapper.append(contentCell.firstElementChild);
      }
    }

    // Mark eyebrow (first <em> paragraph)
    const eyebrowPara = contentWrapper.querySelector('p > em:first-child:last-child');
    if (eyebrowPara) eyebrowPara.closest('p').className = 'carousel-eyebrow';

    // Mark CTA (last <strong><a> paragraph)
    const ctaLink = [...contentWrapper.querySelectorAll('p strong > a')].at(-1);
    if (ctaLink) ctaLink.closest('p').className = 'carousel-cta button-wrapper';

    slide.append(imageWrapper, contentWrapper);
    slidesWrapper.append(slide);
  });

  // Navigation buttons
  const prevBtn = document.createElement('button');
  prevBtn.className = 'carousel-prev';
  prevBtn.setAttribute('aria-label', 'Previous slide');
  prevBtn.innerHTML = '&#10094;';

  const nextBtn = document.createElement('button');
  nextBtn.className = 'carousel-next';
  nextBtn.setAttribute('aria-label', 'Next slide');
  nextBtn.innerHTML = '&#10095;';

  // Dot indicators
  const dotsWrapper = document.createElement('div');
  dotsWrapper.className = 'carousel-dots';
  dotsWrapper.setAttribute('role', 'tablist');
  dotsWrapper.setAttribute('aria-label', 'Slide navigation');

  let currentIndex = 0;

  function goTo(index) {
    const slides = [...slidesWrapper.querySelectorAll('.carousel-slide')];
    const dots = [...dotsWrapper.querySelectorAll('.carousel-dot')];
    slides[currentIndex].classList.remove('active');
    slides[currentIndex].setAttribute('aria-hidden', 'true');
    dots[currentIndex].classList.remove('active');
    dots[currentIndex].setAttribute('aria-current', 'false');
    currentIndex = (index + total) % total;
    slides[currentIndex].classList.add('active');
    slides[currentIndex].setAttribute('aria-hidden', 'false');
    dots[currentIndex].classList.add('active');
    dots[currentIndex].setAttribute('aria-current', 'true');
  }

  for (let i = 0; i < total; i += 1) {
    const dot = document.createElement('button');
    dot.className = 'carousel-dot';
    dot.setAttribute('role', 'tab');
    dot.setAttribute('aria-label', `Go to slide ${i + 1}`);
    dot.setAttribute('aria-current', i === 0 ? 'true' : 'false');
    if (i === 0) dot.classList.add('active');
    const idx = i;
    dot.addEventListener('click', () => goTo(idx));
    dotsWrapper.append(dot);
  }

  prevBtn.addEventListener('click', () => goTo(currentIndex - 1));
  nextBtn.addEventListener('click', () => goTo(currentIndex + 1));

  // Keyboard support
  block.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') goTo(currentIndex - 1);
    else if (e.key === 'ArrowRight') goTo(currentIndex + 1);
  });

  block.textContent = '';
  block.append(slidesWrapper, prevBtn, nextBtn, dotsWrapper);
}
