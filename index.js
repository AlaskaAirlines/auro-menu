import { AuroMenu } from './src/auro-menu.js';

/**
 * Register Custom Element.
 * @param {Object} name - Name to use for custom element.
 * @returns {void}
 */
 const registerComponent = (name = 'custom-menu') => {
  // alias definition
  if (!customElements.get(name)) {
    customElements.define(name, class extends AuroMenu {});
  }
}

export { registerComponent }
