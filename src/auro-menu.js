/* eslint-disable no-magic-numbers */
// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import { LitElement, html } from "lit-element";
import styleCss from "./style-base-css.js";
import styleCssFixed from "./style-base-fixed-css.js";
import './auro-menuoption';
import "mark.js/dist/mark.min";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * The auro-menu element provides users a way to select from a list of options.
 * @attr {String} value - Specifies the value to be sent to a server.
 * @attr {Object} optionSelected - Specifies the current selected menuOption.
 * @attr {String} matchWord - Specifies the a string used to highlight matched string parts in options.
 * @fires selectedOption - Value for selected menu option.
 * @slot Slot for insertion of menu options.
 */

class AuroMenu extends LitElement {
  constructor() {
    super();
    this.value = undefined;
    this.optionSelected = undefined;

    /**
     * @private
     */
    this.rootMenu = true;
  }

  static get properties() {
    return {
      optionSelected: { type: Object },
      matchWord: { type: String }
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
    this.addEventListener('mousedown', this.clickOption);
  }

  updated(changedProperties) {
    if (changedProperties.has('matchWord')) {
      this.markOptions();
    }
  }

  /**
   * @private
   * @returns {void} When called will update the DOM with visible suggest text matches.
   */
  markOptions() {
    const markInstance = new Mark(this.items); // eslint-disable-line

    markInstance.unmark();

    if (this.matchWord && this.matchWord.length > 0) {
      markInstance.mark(this.matchWord, {
        'element': 'strong',
        'separateWordSearch': false,
        'acrossElements': true
      });
    }
  }

  /**
   * Reset all attributes on all menuoptions.
   * @private
   */
  resetOptionsStates() {
    this.items.forEach((item) => {
      item.classList.remove('active');
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
    option.setAttribute('selected', '');
    option.classList.add('active');
    option.ariaSelected = true;

    this.value = option.value;
    this.optionSelected = option;
    this.index = this.items.indexOf(option);
  }

  /**
   * @private
   * @param {Object} evt - Event passed in from the click eventListener.
   */
  clickOption(evt) {
    this.index = this.items.indexOf(evt.target);
  }

  /**
   * Process actions for making making a menuoption selection.
   */
  makeSelection() {
    const option = this.items[this.index];

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
        this.makeSelection();
        break;
      default:
        break;
    }
  }

  /**
   * Sets the index value of the selected item or first non-disabled menuoption.
   * @private
   */
  getSelectedIndex() {
    // find the first `selected` and not `disabled` option
    let index = this.items.findIndex((item) => item.hasAttribute('selected') && !item.hasAttribute('disabled'));

    if (index >= 0) {
      this.index = index;
      this.makeSelection();
    }

    if (index === -1) {
      // make index be the next non-`disabled` option
      index = this.items.findIndex((item) => !item.hasAttribute('disabled'));
    }
  }

  /**
   * Using value of current this.index evaluates index
   * of next :focus to set based on array of this.items ignoring items
   * with disabled attr.
   *
   * The event.target is not used as the function needs to know where to go,
   * versus knowing where it is.
   * @param {String} moveDirection - Up or Down based on keyboard event.
   */
  selectNextItem(moveDirection) {
    // remove focus-visible from current selection
    if (this.index >= 0) {
      this.items[this.index].classList.remove('active');

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
        this.items[this.index].classList.add('active');
      }
    } else {
      this.items[0].classList.add('active');
      this.index = 0;
    }
  }

  /**
   * Used for applying indentation to each level of nested menu.
   * @private
   * @param {String} menu - Root level menu object.
   */
  handleNestedMenus(menu) {
    const nestedMenus = menu.querySelectorAll('auro-menu');

    if (nestedMenus.length === 0) {
      return;
    }

    nestedMenus.forEach((nestedMenu) => {
      const options = nestedMenu.querySelectorAll(':scope > auro-menuoption');

      options.forEach((option) => {
        option.innerHTML = `<span class="nestingSpacer"></span> ${option.innerHTML}`;
      });

      this.handleNestedMenus(nestedMenu);
    });
  }

  updateActiveOption(evt) {
    this.items[this.index].classList.remove('active');
    this.index = this.items.indexOf(evt.target);
    evt.target.classList.add('active');
  }

  /**
   * Used for @slotchange event on slotted element.
   * @private
   */
  handleSlotItems() {

    /**
     * Determine if this is the root of the menu/submenu layout.
     */
    if (this.parentElement.closest('auro-menu')) {
      this.rootMenu = false;
    }

    /**
     * If this is the root menu (not a nested menu) handle events, states and styling.
     */
    if (this.rootMenu) {
      this.items = Array.from(this.querySelectorAll('auro-menuoption'));

      this.setAttribute('role', 'listbox');
      this.handleNestedMenus(this);
      this.markOptions();
      this.getSelectedIndex();
      this.selectNextItem();

      this.addEventListener('keydown', this.handleKeyDown);
      this.addEventListener('mousedown', this.makeSelection);
      this.addEventListener('mouseover', this.updateActiveOption);
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
