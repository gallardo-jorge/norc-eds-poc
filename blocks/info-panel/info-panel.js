/**
 * Info Panel block.
 * Authored as rows: [heading row] | [body row] | [button/CTA row (optional)].
 * Each row contains a single cell with its content.
 * @param {Element} block
 */
export default function decorate(block) {
  const rows = [...block.children];

  rows.forEach((row, index) => {
    const cell = row.firstElementChild;
    if (!cell) return;

    if (index === 0) {
      row.className = 'info-panel-heading';
    } else if (index === rows.length - 1 && cell.querySelector('strong > a')) {
      row.className = 'info-panel-cta';
      const link = cell.querySelector('strong > a');
      if (link) {
        link.className = 'button primary';
        link.closest('strong')?.replaceWith(link);
        cell.closest('p')?.classList.add('button-wrapper');
      }
    } else {
      row.className = 'info-panel-body';
    }
  });
}
