import { createOptimizedPicture } from '../../scripts/aem.js';

/**
 * Feature Card block.
 * Authored as a single row: [image cell | content cell].
 * Content cell rows: eyebrow (em paragraph), heading, body text, CTA link.
 * @param {Element} block
 */
export default function decorate(block) {
  const row = block.firstElementChild;
  if (!row) return;

  const [imageCell, contentCell] = row.children;

  // Image side
  const imageWrapper = document.createElement('div');
  imageWrapper.className = 'feature-card-image';
  const img = imageCell?.querySelector('img');
  if (img) {
    const optimized = createOptimizedPicture(img.src, img.alt, true, [
      { media: '(min-width: 900px)', width: '600' },
      { width: '750' },
    ]);
    imageWrapper.append(optimized);
  }

  // Content side
  const contentWrapper = document.createElement('div');
  contentWrapper.className = 'feature-card-content';
  if (contentCell) {
    while (contentCell.firstElementChild) {
      contentWrapper.append(contentCell.firstElementChild);
    }
  }

  // Mark eyebrow
  const eyebrowPara = contentWrapper.querySelector('p > em:first-child:last-child');
  if (eyebrowPara) eyebrowPara.closest('p').className = 'feature-card-eyebrow';

  // Mark CTA link
  const ctaLink = [...contentWrapper.querySelectorAll('p strong > a')].at(-1);
  if (ctaLink) ctaLink.closest('p').className = 'feature-card-cta button-wrapper';

  block.textContent = '';
  block.append(imageWrapper, contentWrapper);
}
