// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html, css } from "lit-element";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-menu provides users a way to select one option from a pre-defined list of options
 */

class AuroMenu extends LitElement {
  static get styles() {
    return css`
      ${styleCss}
    `;
  }


  firstUpdated() {
    let options = this.shadowRoot.querySelector('slot[name=listOfOptions]').assignedNodes();

    // 1) make each option tabbable 2) add click and keypress event listeners, to dispatchEvent that a particular option
    // was selected
    for (let i = 0; i < options.length; i++) {
      options[i].setAttribute('tabindex', '0')
      options[i].addEventListener('keydown', (evt) => handleKeyDown(evt, i));
      options[i].addEventListener('click', () => handleClick(i));
    }

    function dispatchEventOptionSelected() {
      options[i].dispatchEvent(new CustomEvent('optionSelected', {
        bubbles: true,
        cancelable: false,
        composed: true,
        detail: {
          value: options[i].getAttribute('data-value')
        }
      }));
    }

    const handleKeyDown = (evt, i) => {
      if (evt.key.toLowerCase() === 'enter' || evt.key.toLowerCase() === ' ') {
        dispatchEventOptionSelected();
      }
    }
    const handleClick = (i) => {
      dispatchEventOptionSelected();
    }
  }

  render() {
    return html`
      <ul>
        <slot name="listOfOptions"></slot>
      </ul>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-menu")) {
  customElements.define("auro-menu", AuroMenu);
}
