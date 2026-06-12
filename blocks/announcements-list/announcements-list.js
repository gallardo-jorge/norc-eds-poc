/**
 * Announcements List block.
 * Each row represents one announcement: [body cell | meta cell (link + date)].
 * A row with only one cell and a strong>a link is treated as a CTA button row.
 * @param {Element} block
 */
export default function decorate(block) {
  const rows = [...block.children];
  const list = document.createElement('ul');
  list.className = 'announcements-list-items';

  const heading = document.createElement('h3');
  heading.textContent = 'Announcements';
  heading.className = 'announcements-list-heading';

  const separator = document.createElement('hr');
  separator.className = 'announcements-list-separator';

  let ctaRow = null;

  rows.forEach((row) => {
    const cells = [...row.children];

    // CTA row: single cell with a strong>a link
    if (cells.length === 1 && cells[0].querySelector('strong > a')) {
      ctaRow = row;
      row.className = 'announcements-list-cta';
      const link = cells[0].querySelector('strong > a');
      link.className = 'button primary';
      link.closest('strong')?.replaceWith(link);
      return;
    }

    const [bodyCell, metaCell] = cells;
    const item = document.createElement('li');
    item.className = 'announcements-list-item';

    const bodyEl = document.createElement('p');
    bodyEl.className = 'announcement-body';
    bodyEl.innerHTML = bodyCell?.querySelector('p')?.innerHTML || '';

    const metaEl = document.createElement('div');
    metaEl.className = 'announcement-meta';
    const readMoreLink = metaCell?.querySelector('a');
    const dateEl = metaCell?.querySelectorAll('p')[1];
    if (readMoreLink) {
      const linkEl = document.createElement('a');
      linkEl.href = readMoreLink.href;
      linkEl.textContent = readMoreLink.textContent;
      linkEl.className = 'announcement-read-more';
      metaEl.append(linkEl);
    }
    if (dateEl) {
      const span = document.createElement('span');
      span.className = 'announcement-date';
      span.textContent = dateEl.textContent;
      metaEl.append(document.createTextNode(' | '), span);
    }

    item.append(bodyEl, metaEl);
    list.append(item);
  });

  block.textContent = '';
  block.append(heading, separator, list);
  if (ctaRow) block.append(ctaRow);
}
