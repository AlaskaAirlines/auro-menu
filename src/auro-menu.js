/* eslint-disable no-magic-numbers */
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
 * @attr {String} value - Specifies the value to be sent to a server.
 * @attr {Object} optionSelected - Specifies the current selected menuOption.
 * @fires selectedOption - Value for selected menu option.
 * @slot Slot for insertion of menu options.
 */

class AuroMenu extends LitElement {
  constructor() {
    super();
    this.value = undefined;
    this.optionSelected = undefined;
  }

  static get properties() {
    return {
      optionSelected: { type: Object }
    };
  }

  static get styles() {
    return [
      styleCss,
      styleCssFixed
    ];
  }

  firstUpdated() {
    this.addEventListener('keydown', this.handleKeyDown);
    this.addEventListener('mousedown', this.makeSelection);
  }

  /**
   * Reset all attributes on all menuoptions.
   * @private
   */
  resetOptionsStates() {
    this.items.forEach((item) => {
      item.tabIndex = -1;
      item.removeAttribute('selected');
      item.removeAttribute('aria-selected');
    });
  }

  /**
   * Set the attributes on the selected menuoption, the menu value and stored option.
   * @param {Object} option - The menuoption to be selected.
   * @private
   */
  handleLocalSelectState(option) {
    option.tabIndex = 0;
    option.setAttribute('selected', '');
    option.classList.add('focus-visible');
    option.ariaSelected = true;
    option.focus();

    this.value = option.value;
    this.optionSelected = option;
    this.index = this.items.indexOf(option);
  }

  /**
   * Process actions for making making a menuoption selection.
   * @param {Object} evt - The event or option to be selected.
   * @private
   */
  makeSelection(evt) {
    // Handle if a click/key event is passed or if the target is directly passed
    let option = {};

    if (evt.target) {
      option = evt.target;
    } else {
      option = evt;
    }

    // only handle options that are not disabled
    if (!option.disabled) {
      this.resetOptionsStates();
      this.handleLocalSelectState(option);
      this.dispatchEvent(new CustomEvent('selectedOption', {
        bubbles: true,
        cancelable: false,
        composed: true,
      }));
    }
  }

  /**
   * Manage ArrowDown, ArrowUp and Enter keyboard events.
   * @private
   * @param {Object} event - Event object from the browser.
   */
  handleKeyDown(event) {
    event.preventDefault();

    // With ArrowDown/ArrowUp events, pass new value to selectNextItem()
    // With Enter event, set value and apply attrs
    switch (event.key) {
      case "ArrowDown":
        this.selectNextItem('down');
        break;

      case "ArrowUp":
        this.selectNextItem('up');
        break;

      case "Enter":
        this.makeSelection(event.target);
        break;
      default:
        break;
    }
  }

  /**
   * @private
   * @returns { Number } Returns the index value of the selected item or first non-disabled menuoption.
   */
  getSelectedIndex() {
    // find the first `selected` and not `disabled` option
    let index = this.items.findIndex((item) => item.hasAttribute('selected') && !item.hasAttribute('disabled'));

    if (index === -1) {
      // make index be the next non-`disabled` option
      index = this.items.findIndex((item) => !item.hasAttribute('disabled'));
    }

    if (index >= 0) {
      this.index = index;
    }

    return index;
  }

  /**
   * Using value of current this.index evaluates index
   * of next :focus to set based on array of this.items ignoring items
   * with disabled attr.
   *
   * The event.target is not used as the function needs to know where to go,
   * versus knowing where it is.
   * @private
   * @param {String} moveDirection - Up or Down based on keyboard event.
   */
  selectNextItem(moveDirection) {
    // remove focus-visible from current selection
    this.items[this.index].classList.remove('focus-visible');

    // calculate which is the selection we should focus next
    let increment = 0;

    if (moveDirection === 'down') {
      increment = 1;
    } else if (moveDirection === 'up') {
      increment = -1;
    }

    this.index += increment;

    // keep looping inside the array of options
    if (this.index > this.items.length - 1) {
      this.index = 0;
    } else if (this.index < 0) {
      this.index = this.items.length - 1;
    }

    // check if new index is disabled, if so, execute again
    if (this.items[this.index].disabled) {
      this.selectNextItem(moveDirection);
    } else {
      // apply focus to new index
      this.items[this.index].classList.add('focus-visible');
      this.items[this.index].focus();
    }
  }

  /**
   * Used for @slotchange event on slotted element.
   * @private
   */
  handleSlotItems() {
    this.setAttribute('role', 'listbox');
    this.items = Array.from(this.querySelectorAll('auro-menuoption'));
    this.getSelectedIndex();
    this.selectNextItem();
  }

  render() {
    return html`
      <slot @slotchange=${this.handleSlotItems}></slot>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-menu")) {
  customElements.define("auro-menu", AuroMenu);
}
