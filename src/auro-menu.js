/* eslint-disable no-magic-numbers */
/* eslint-disable no-plusplus */
// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit-element";
import styleCss from "./style-base-css.js";
import styleCssFixed from "./style-base-fixed-css.js";
import './auro-menuoption';
import "focus-visible/dist/focus-visible.min.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-menu element provides users a way to select one option from a pre-defined list of options.
 *
 * @slot Open slot for insertion of menu options.
 */

class AuroMenu extends LitElement {
  constructor() {
    super();

    this.options = null;
  }

  static get properties() {
    return {
      indexSelectedOption: { type: Number },

      /**
       * @private
       */
      options: { type: Array }
    };
  }

  static get styles() {
    return [
      styleCss,
      styleCssFixed
    ];
  }

  /**
   * @private
   */

  handleSlotChange() {
    const dispatchEventOptionSelected = (indexValue, dataValue, displayText) => {
      this.dispatchEvent(new CustomEvent('optionSelected', {
        bubbles: true,
        cancelable: false,
        composed: true,
        detail: {
          index: indexValue,
          value: dataValue,
          displayText,
        }
      }));

      // go through each option <li> and if it is the same index as the option that was selected
      // mark it as selected, else un-mark it as selected
      this.options.forEach((option, index) => {
        if (indexValue === index) {
          option.setAttribute('selected', '');
          this.indexSelectedOption = index;
        } else {
          option.removeAttribute('selected');
        }
      });
    };

    this.options = this.querySelectorAll('auro-menuoption');

    /**
     * Checks to see if indexSelectedOption is set on element.
     * If indexSelectedOption is not set, looks to see if parent element has indexSelectedOption defined
     * Use case: TBD.
     */
    if (!this.indexSelectedOption) {

      // Check if the parent has a declared indexSelectedOption
      if (this.parentElement.hasAttribute('indexSelectedOption')) {
        // Get the declared index value
        const parentIndexSelectedOption = Number(this.parentElement.getAttribute('indexSelectedOption'));

        // If the index value is a valid index declaration select the value
        if (parentIndexSelectedOption >= 0) {
          this.indexSelectedOption = parentIndexSelectedOption;

          dispatchEventOptionSelected(this.indexSelectedOption, this.options[this.indexSelectedOption].attributes['data-value'].value, this.options[this.indexSelectedOption].innerText);
        }
      }
    }

    this.options.forEach((option, index) => {
      option.setAttribute('index', index);
      if (this.indexSelectedOption === index) {
        option.setAttribute('selected', '');
      } else {
        option.removeAttribute('selected');
      }
    });

    const handleKeyDown = (evt) => {
      if (evt.key.toLowerCase() === 'enter' || evt.key.toLowerCase() === ' ') {
        dispatchEventOptionSelected(Number(evt.target.getAttribute('index')), evt.target.getAttribute('data-value'), evt.target.innerText);
      }

      // if user tabs off of last li, send a custom event 'hideOptionsContainer' to parent component
      if (evt.key.toLowerCase() === 'tab' && !evt.shiftKey && Number(evt.target.getAttribute('index')) === this.options.length - 1) {
        evt.target.dispatchEvent(new CustomEvent('hideOptionsContainer', {
          bubbles: true,
          cancelable: false,
          composed: true,
        }));
      }

      if (evt.key.toLowerCase() === 'arrowdown') {
        evt.preventDefault();

        if (Number(evt.target.getAttribute('index')) === this.options.length - 1) {
          this.options[0].focus();
        } else {
          this.options[Number(evt.target.getAttribute('index')) + 1].focus();
        }
      }

      if (evt.key.toLowerCase() === 'arrowup') {
        evt.preventDefault();

        if (Number(evt.target.getAttribute('index')) === 0) {
          this.options[this.options.length - 1].focus();
        } else {
          this.options[Number(evt.target.getAttribute('index')) - 1].focus();
        }
      }
    };

    // Prep each <li>. Give it an index, set its tabindex to -1, add 'keydown' and 'click' event listeners, inject a check mark icon
    for (let iter = 0; iter < this.options.length; iter += 1) {

      // each option is tabbable
      this.options[iter].setAttribute('tabindex', '0');
      this.options[iter].addEventListener('keydown', (evt) => handleKeyDown(evt));
      this.options[iter].addEventListener('click', (evt) => dispatchEventOptionSelected(Number(evt.target.getAttribute('index')), evt.target.getAttribute('data-value'), evt.target.innerText));
    }
  }

  render() {
    return html`
      <ul>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </ul>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-menu")) {
  customElements.define("auro-menu", AuroMenu);
}
