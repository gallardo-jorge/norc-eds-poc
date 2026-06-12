/**
 * News List block.
 * Each row is one news article: [source cell | headline cell | description cell].
 * A single-cell row with strong>a is treated as a CTA button row.
 * @param {Element} block
 */
export default function decorate(block) {
  const rows = [...block.children];

  const heading = document.createElement('h3');
  heading.textContent = 'GSS in the News';
  heading.className = 'news-list-heading';

  const separator = document.createElement('hr');
  separator.className = 'news-list-separator';

  const list = document.createElement('ul');
  list.className = 'news-list-items';

  let ctaRow = null;

  rows.forEach((row) => {
    const cells = [...row.children];

    // CTA row
    if (cells.length === 1 && cells[0].querySelector('strong > a')) {
      ctaRow = row;
      row.className = 'news-list-cta';
      const link = cells[0].querySelector('strong > a');
      link.className = 'button primary';
      link.closest('strong')?.replaceWith(link);
      return;
    }

    const [sourceCell, headlineCell, descCell] = cells;

    const item = document.createElement('li');
    item.className = 'news-list-item';

    // Source line: logo img + source name + date
    const sourceLine = document.createElement('div');
    sourceLine.className = 'news-source';
    const sourceImg = sourceCell?.querySelector('img');
    if (sourceImg) {
      sourceImg.className = 'news-source-logo';
      sourceLine.append(sourceImg);
    }
    const sourceText = sourceCell?.querySelector('p')?.cloneNode(true);
    if (sourceText) {
      // Remove the img element from the text clone (already appended)
      sourceText.querySelector('img')?.remove();
      sourceText.className = 'news-source-text';
      sourceLine.append(sourceText);
    }

    // Headline
    const headlineEl = document.createElement('p');
    headlineEl.className = 'news-headline';
    const headlineLink = headlineCell?.querySelector('a');
    if (headlineLink) {
      headlineEl.append(headlineLink.cloneNode(true));
    }

    // Description
    const descEl = document.createElement('p');
    descEl.className = 'news-description';
    descEl.innerHTML = descCell?.querySelector('p')?.innerHTML || '';

    item.append(sourceLine, headlineEl, descEl);
    list.append(item);
  });

  block.textContent = '';
  block.append(heading, separator, list);
  if (ctaRow) block.append(ctaRow);
}
