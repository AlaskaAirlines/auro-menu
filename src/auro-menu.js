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
    let options = this.shadowRoot.querySelector('slot[name=listOfOptions]').assignedNodes();

    for (let i = 0; i < options.length; i++) {
      options[i].setAttribute('index', i)
      options[i].setAttribute('tabindex', '0') // each option is tabbable
      options[i].addEventListener('keydown', (evt) => handleKeyDown(evt));
      options[i].addEventListener('click', (evt) => handleClick(evt));

      // insert checkmark icon into each option's li
      let span = document.createElement('span');
      span.id = `${i}check`;
      span.innerHTML = '<auro-icon category="interface" name="check-sm" emphasis></auro-icon>';
      span.style.visibility = 'hidden';
      span.style.marginRight = '8px';
      options[i].insertBefore(span, options[i].firstChild);
    }

    function dispatchEventOptionSelected(el) {
      el.dispatchEvent(new CustomEvent('optionSelected', {
        bubbles: true,
        cancelable: false,
        composed: true,
        detail: {
          selectedIndex: el.getAttribute('index')
        }
      }));

      options.forEach((option) => {
        if (el.getAttribute('index') === option.getAttribute('index')) {
          option.setAttribute('selected', true);
        } else {
          option.removeAttribute('selected');
        }
      });

      let index = parseInt(el.getAttribute('index'));

      for (let j = 0; j < options.length; j++) {
        if (index === j) {
          options[j].setAttribute('selected', '');
          options[j].querySelector('span').setAttribute('style', 'visibility: visible; margin-right: 8px;');
        } else {
          options[j].removeAttribute('selected');
          options[j].querySelector('span').setAttribute('style', 'visibility: hidden; margin-right: 8px;');
        }
      }
    }

    const handleKeyDown = (evt) => {
      if (evt.key.toLowerCase() === 'enter' || evt.key.toLowerCase() === ' ') {
        dispatchEventOptionSelected(evt.target);
      }
    }
    const handleClick = (evt) => {
      dispatchEventOptionSelected(evt.target);
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
