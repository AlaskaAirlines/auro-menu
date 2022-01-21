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
 * The auro-menu element provides users a way to select from a list of options.
 *
 * @attr {Number} selectOption - Predefine selected option from menu. Index starts at 0.
 * @fires optionSelected - Value for pre-selected menu option. This value may be places on the `auro-menu` element specifically or on a outer parent element.
 * @slot Open slot for insertion of menu options.
 */

class AuroMenu extends LitElement {
  constructor() {
    super();

    this.options = null;
  }

  static get properties() {
    return {
      selectOption: { type: Number },

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
    const dispatchEventOptionSelected = (indexValue) => {

      this.dispatchEvent(new CustomEvent('optionSelected', {
        bubbles: true,
        cancelable: false,
        composed: true,
        detail: {
          index: indexValue
        }
      }));

      /**
       * Specifically for use case where the `selectOption`
       * is set on an anonymous parent element.
       */
      this.options.forEach((option, index) => {
        if (indexValue === index) {
          option.setAttribute('selected', '');
          this.selectOption = index;
        } else {
          option.removeAttribute('selected');
        }
      });
    };

    this.options = this.querySelectorAll('auro-menuoption');

    /**
     * Loop to apply index attribute and value to menuoption elements.
     * If this.selectOption has a value, use that to pre-apply
     * the `selected` attribute.
     */
    this.options.forEach((option, index) => {
      option.setAttribute('index', index);

      if (this.selectOption === index) {
        option.setAttribute('selected', '');
      } else {
        option.removeAttribute('selected');
      }
    });

    /**
     * Checks to see if `this.selectOption` is set on the menu element.
     * If `selectOption` is not set, looks to see if
     * parent element has `selectOption` defined.
     */
    if (!this.selectOption) {

      // Check if the parent has a declared `this.selectOption`
      if (this.parentElement.hasAttribute('selectOption')) {
        // Get the declared index value
        const parentSelectOption = Number(this.parentElement.getAttribute('selectOption'));

        // If the index value is a valid index declaration select the value
        if (parentSelectOption >= 0) {
          this.selectOption = parentSelectOption;

          dispatchEventOptionSelected(this.selectOption, this.options[this.selectOption].attributes['data-value'].value, this.options[this.selectOption].innerText);
        }
      }
    }

    const handleKeyDown = (evt) => {
      if (!evt.target.hasAttribute('disabled')) {
        if (evt.key.toLowerCase() === 'enter' || evt.key.toLowerCase() === ' ') {
          if (evt.key.toLowerCase() === ' ') {
            evt.preventDefault();
          }
          dispatchEventOptionSelected(Number(evt.target.getAttribute('index')), evt.target.getAttribute('data-value'), evt.target.innerText);
        }
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
    const triggerEvent = (evt) => dispatchEventOptionSelected(Number(evt.target.getAttribute('index')), evt.target.getAttribute('data-value'), evt.target.innerText);

    for (let iter = 0; iter < this.options.length; iter += 1) {

      // each option is tabbable
      this.options[iter].setAttribute('tabindex', '0');
      this.options[iter].addEventListener('click', triggerEvent);
      this.options[iter].addEventListener('mousedown', triggerEvent);
      this.options[iter].addEventListener('keydown', (evt) => handleKeyDown(evt));
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
