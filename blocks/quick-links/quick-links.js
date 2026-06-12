/**
 * Quick Links block.
 * Authored as a single row with one cell containing a heading and an unordered list.
 * Renders a titled sidebar link list with nested sub-lists support.
 * @param {Element} block
 */
export default function decorate(block) {
  const cell = block.querySelector('div > div');
  if (!cell) return;

  const heading = cell.querySelector('h3');
  const list = cell.querySelector('ul');

  const wrapper = document.createElement('div');
  wrapper.className = 'quick-links-inner';

  if (heading) {
    heading.className = 'quick-links-heading';
    wrapper.append(heading);
  }

  const separator = document.createElement('hr');
  separator.className = 'quick-links-separator';
  wrapper.append(separator);

  if (list) {
    list.className = 'quick-links-list';
    wrapper.append(list);
  }

  block.textContent = '';
  block.append(wrapper);
}
