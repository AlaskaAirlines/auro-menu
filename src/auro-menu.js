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
 * @fires selectedOption - Value for selected menu option.
 * @slot Slot for insertion of menu options.
 */

class AuroMenu extends LitElement {
  constructor() {
    super();
    this.value = undefined;
  }

  // static get properties() {
  //   return {

  //   };
  // }

  static get styles() {
    return [
      styleCss,
      styleCssFixed
    ];
  }

  firstUpdated() {
    this.addEventListener('keydown', this.handleKeyDown);
    this.addEventListener('mousedown', this.handleClick);
    this.addEventListener('click', this.selectedOption);
  }

  /**
   * Manage click events.
   * Event fires, but attributes are not changed on elements with the disabled attribute.
   * @private
   * @param {Object} event - Event object from the browser.
   */
  handleClick(event) {

    this.index = this.items.indexOf(event.target);

    if (!event.target.disabled) {
      this.items.forEach((item) => {
        item.tabIndex = -1;
        item.removeAttribute('selected');
        item.removeAttribute('aria-selected');
      });

      event.target.tabIndex = 0;
      event.target.setAttribute('selected', '');
      event.target.ariaSelected = true;
      this.value = event.target.value;
    }
  }

  /**
   * Manage ArrowDown, ArrowUp and Enter keyboard events.
   * @private
   * @param {Object} event - Event object from the browser.
   */
  handleKeyDown(event) {
    event.preventDefault();

    // With each keyboard 'enter' event, reset attr settings on options.
    this.items.forEach((item) => {
      if (event.key === `Enter`) {
        item.removeAttribute('selected');
        item.removeAttribute('aria-selected');
        item.tabIndex = -1;
      }
    });

    // With ArrowDown/ArrowUp events, pass new value to selectNextItem()
    // With Enter event, set value and apply attrs
    switch (event.key) {
      case "ArrowDown":
        this.selectNextItem(this.index === this.items.length - 1 ? 0 : this.index + 1, "Down");
        break;

      case "ArrowUp":
        this.selectNextItem(this.index === 0 ? this.items.length - 1 : this.index - 1, "Up");
        break;

      case "Enter":
        event.target.setAttribute('selected', '');
        event.target.ariaSelected = true;
        event.target.tabIndex = 0;
        this.value = event.target.value;
        break;
      default:
        break;
    }
  }

  /**
   * Using value of current this.index, on keyboard event, evaluates index
   * of next :focus to set based on array of this.items ignoring items
   * with disabled attr.
   *
   * The event.target is not used as the function needs to know where to go,
   * versus knowing where it is.
   * @private
   * @param {Number} index - Index value from array of elements.
   * @param {String} moveDirection - Up or Down based on keyboard event.
   */
  selectNextItem(index, moveDirection) {
    let currentIndex = index;

    for (currentIndex; currentIndex < this.items.length; moveDirection === "Down" ? currentIndex += 1 : currentIndex -= 1) {
      currentIndex = currentIndex === -1 ? this.items.length - 1 : currentIndex;
      const selectedItem = this.items[currentIndex];

      if (!selectedItem.disabled) {
        selectedItem.click();
        selectedItem.focus();
        this.index = currentIndex;
        break;
      }
    }
  }

  /**
   * Custom event that returns the selected option's value.
   * Use event to trigger the state of wrapping elements.
   * @private
   */
  selectedOption() {
    this.dispatchEvent(new CustomEvent('selectedOption', {
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: {
        value: this.value
      }
    }));
  }

  /**
   * Used for @slotchange event on slotted element.
   * @private
   */
  handleSlotItems() {
    this.items = Array.from(this.querySelectorAll('auro-menuoption'));
    this.initializeIndex();
    this.selectedOption();
  }

  /**
   * This function will iterate over the array of items in the slot find the selected
   * option that is not disabled and apply tabindex='0' to set tab order.
   * @private
   */
  initializeIndex() {
    const index = this.items.findIndex((item) => item.hasAttribute('selected') && !item.hasAttribute('disabled'));
    const nextEnabledIndex = this.items.findIndex((item) => !item.hasAttribute('disabled'));
    this.index = index >= 0 ? index : nextEnabledIndex;
    this.setAttribute('role', 'menu');
    this.items.map((item) => item.setAttribute('role', 'menuitem'));

    if (this.index >= 0) {
      this.items[this.index].tabIndex = 0;
    }

    if (this.items[this.index].selected) {
      this.items[this.index].ariaSelected = true;
      this.value = this.items[this.index].value;
    }
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
