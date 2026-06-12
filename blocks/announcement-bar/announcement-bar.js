/**
 * Announcement Bar block.
 * Renders a highlighted informational banner.
 * No DOM transformation needed — content is rendered as-is.
 * @param {Element} block
 */
export default function decorate(block) {
  block.setAttribute('role', 'region');
  block.setAttribute('aria-label', 'Announcement');
}
