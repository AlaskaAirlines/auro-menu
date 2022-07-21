/* eslint-disable no-magic-numbers, max-lines */
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
 * @attr {Object} optionSelected - Specifies the current selected menuOption.
 * @attr {String} matchWord - Specifies the a string used to highlight matched string parts in options.
 * @attr {String} value - Value selected for the menu.
 * @prop {Boolean} ready - When false the component API should not be called.
 * @fires auroMenu-selectedOption - Notifies that a new menuoption selection has been made.
 * @fires selectedOption - (DEPRECATED) Notifies that a new menuoption selection has been made.
 * @fires auroMenu-activatedOption - Notifies that a menuoption has been made `active`.
 * @fires auroMenuActivatedOption - (DEPRECATED) Notifies that a menuoption has been made `active`.
 * @fires auroMenu-selectValueFailure - Notifies that a an attempt to select a menuoption by matching a value has failed.
 * @fires auroMenuSelectValueFailure - (DEPRECATED) Notifies that a an attempt to select a menuoption by matching a value has failed.
 * @fires auroMenu-customEventFired - Notifies that a custom event has been fired.
 * @fires auroMenuCustomEventFired - (DEPRECATED) Notifies that a custom event has been fired.
 * @fires auroMenu-ready - Notifies that the component has finished initializing.
 * @slot Slot for insertion of menu options.
 */

class AuroMenu extends LitElement {
  constructor() {
    super();
    this.value = undefined;
    this.optionSelected = undefined;
    this.ready = false;

    /**
     * @private
     */
    this.rootMenu = true;
  }

  static get properties() {
    return {
      optionSelected: { type: Object },
      matchWord: { type: String },
      ready: { type: Boolean },
      value: { type: String }
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
  }

  updated(changedProperties) {
    if (changedProperties.has('matchWord')) {
      this.markOptions();
    }

    if (changedProperties.has('value')) {
      if (this.value && (!this.optionSelected || this.value !== this.optionSelected.value)) {
        this.selectByValue(this.value);
      }
    }
  }

  /**
   * @private
   * @param {Object} option - The menuoption to check for interactive state.
   * @returns {Boolean} Returns true if the option is interactive.
   */
  optionInteractive(option) {
    return !option.hasAttribute('disabled') && !option.hasAttribute('hidden') && !option.hasAttribute('static');
  }

  /**
   * @private
   * @returns {void} When called will update the DOM with visible suggest text matches.
   */
  markOptions() {
    let itemsToMark = []; // eslint-disable-line prefer-const

    this.items.forEach((item) => {
      if (this.optionInteractive(item) && !item.hasAttribute('persistent')) {
        itemsToMark.push(item);
      }
    });

    const markInstance = new Mark(itemsToMark); // eslint-disable-line

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
   * Reset the menu and all options.
   */
  resetOptionsStates() {
    this.optionSelected = null;
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
   * Process actions for making making a menuoption selection.
   */
  makeSelection() {
    if (!this.items) {
      this.initItems();
    }

    const option = this.items[this.index];

    // only handle options that are not disabled, hidden or static
    if (option && this.optionInteractive(option)) {
      // fire custom event if defined otherwise make selection
      if (option.hasAttribute('event')) {
        this.dispatchEvent(new CustomEvent(option.getAttribute('event'), {
          bubbles: true,
          cancelable: false,
          composed: true,
        }));

        // this event needs to be removed after select and combobox are updated to use the new standard name
        this.dispatchEvent(new CustomEvent('auroMenuCustomEventFired', {
          bubbles: true,
          cancelable: false,
          composed: true,
        }));

        this.dispatchEvent(new CustomEvent('auroMenu-customEventFired', {
          bubbles: true,
          cancelable: false,
          composed: true,
        }));
      } else {
        this.resetOptionsStates();
        this.handleLocalSelectState(option);

        // this event needs to be removed after select and combobox are updated to use the new standard name
        this.dispatchEvent(new CustomEvent('selectedOption', {
          bubbles: true,
          cancelable: false,
          composed: true,
        }));

        this.dispatchEvent(new CustomEvent('auroMenu-selectedOption', {
          bubbles: true,
          cancelable: false,
          composed: true,
        }));
      }
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
   * Initializes all menu options in the DOM. This must be re-run every time the options are changed.
   * @private
   */
  initItems() {
    this.items = Array.from(this.querySelectorAll('auro-menuoption'));
  }

  /**
   * Sets the index value of the selected item or first non-disabled menuoption.
   * @private
   */
  getSelectedIndex() {
    // find the first `selected` and not `disabled`, `hidden` or `static` option
    const index = this.items.findIndex((option) => option.hasAttribute('selected') && this.optionInteractive(option));

    if (index >= 0) {
      this.index = index;
      this.makeSelection();
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

      // check if new index is disabled, static or hidden, if so, execute again
      if (!this.optionInteractive(this.items[this.index])) {
        this.selectNextItem(moveDirection);
      } else {
        // apply focus to new index
        this.updateActiveOption(this.index);
      }
    } else {
      this.index = 0;
      if (this.items[this.index].hasAttribute('hidden') || this.items[this.index].hasAttribute('disabled')) {
        this.selectNextItem(moveDirection);
      } else {
        this.updateActiveOption(this.index);
      }
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

  /**
   * Method to apply `selected` attribute to `menuoption` via `value`.
   * @private
   * @param {String} value - Must match a unique `menuoption` value.
   */
  selectByValue(value) {
    let valueMatch = false;

    if (!this.items) {
      this.initItems();
    }

    for (let index = 0; index < this.items.length; index += 1) {
      if (this.items[index].value === value) {
        valueMatch = true;
        this.index = index;
        this.makeSelection();
      }
    }

    if (!valueMatch) {
      // this event needs to be removed after select and combobox are updated to use the new standard name
      this.dispatchEvent(new CustomEvent('auroMenuSelectValueFailure', {
        bubbles: true,
        cancelable: false,
        composed: true,
      }));

      this.dispatchEvent(new CustomEvent('auroMenu-selectValueFailure', {
        bubbles: true,
        cancelable: false,
        composed: true,
      }));
    }
  }

  /**
   * Used to make the active state for options follow mouseover.
   * @param {Number} index - Index of the menuoption that will be made active.
   * @private
   */
  updateActiveOption(index) {
    this.items.forEach((item) => {
      item.classList.remove('active');
    });
    this.items[index].classList.add('active');

    this.dispatchEvent(new CustomEvent('auroMenuActivatedOption', {
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: this.items[index]
    }));

    this.dispatchEvent(new CustomEvent('auroMenu-activatedOption', {
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: this.items[index]
    }));
  }

  /**
   * Used for @slotchange event on slotted element.
   * @private
   */
  handleSlotItems() {

    /**
     * Determine if this is the root of the menu/submenu layout.
     */
    if (this.parentElement && this.parentElement.closest('auro-menu')) {
      this.rootMenu = false;
    }

    /**
     * If this is the root menu (not a nested menu) handle events, states and styling.
     */
    if (this.rootMenu) {
      this.initItems();
      this.setAttribute('role', 'listbox');
      this.handleNestedMenus(this);
      this.markOptions();
      this.index = -1;
      this.getSelectedIndex();

      this.addEventListener('keydown', this.handleKeyDown);
      this.addEventListener('mousedown', this.makeSelection);
      this.addEventListener('auroMenuOption-mouseover', (evt) => {
        this.index = this.items.indexOf(evt.target);
        this.updateActiveOption(this.index);
      });

      this.notifyReady();
    }
  }

  /**
   * @private
   * @returns {void} Marks the component as ready and sends event.
   */
  notifyReady() {
    this.ready = true;

    this.dispatchEvent(new CustomEvent('auroMenu-ready', {
      bubbles: true,
      cancelable: false,
      composed: true,
    }));
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
