// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import "@alaskaairux/auro-icon";

import { LitElement, html, css } from "lit-element";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-menu provides users a way to select one option from a pre-defined list of options
 */

class AuroMenu extends LitElement {
  constructor() {
    super();

    this.options = null;
  }

  static get properties() {
    return {
      options: { type: Array }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  firstUpdated() {
    const options = this.shadowRoot.querySelector('slot[name=listOfOptions]').assignedNodes();

    const dispatchEventOptionSelected = (el) => {
      el.dispatchEvent(new CustomEvent('optionSelected', {
        bubbles: true,
        cancelable: false,
        composed: true,
        detail: {
          index: el.getAttribute('index'),
          value: el.getAttribute('value'),
          displayText: el.innerText,
        }
      }));

      options.forEach((option) => {
        if (el.getAttribute('index') === option.getAttribute('index')) {
          option.setAttribute('selected', true);
        } else {
          option.removeAttribute('selected');
        }
      });

      const elIndex = parseInt(el.getAttribute('index'), 10);

      // TODO: refactor
      for (let i = 0; i < options.length; i += 1) {
        if (elIndex === i) {
          options[i].setAttribute('selected', '');
          options[i].querySelector('span').setAttribute('style', 'visibility: visible; margin-right: 8px;');
        } else {
          options[i].removeAttribute('selected');
          options[i].querySelector('span').setAttribute('style', 'visibility: hidden; margin-right: 8px;');
        }
      }
    }

    const handleKeyDown = (evt) => {
      if (evt.key.toLowerCase() === 'enter' || evt.key.toLowerCase() === ' ') {
        dispatchEventOptionSelected(evt.target);
      }
    };

    for (let i = 0; i < options.length; i += 1) {
      options[i].setAttribute('index', i);
      // each option is tabbable
      options[i].setAttribute('tabindex', '0');
      options[i].addEventListener('keydown', (evt) => handleKeyDown(evt));
      options[i].addEventListener('click', (evt) => dispatchEventOptionSelected(evt.target));

      // insert checkmark icon into each option's li
      const span = document.createElement('span');

      span.innerHTML = '<auro-icon category="interface" name="check-sm" emphasis></auro-icon>';
      span.style.visibility = 'hidden';
      span.style.marginRight = '8px';
      options[i].insertBefore(span, options[i].firstChild);
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
