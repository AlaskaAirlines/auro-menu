// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------
import "@alaskaairux/auro-icon";
import { LitElement, html, css } from "lit-element";
import { classMap } from 'lit-html/directives/class-map.js';

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./auro-menu-option-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-menu provides users a way to select one option from a pre-defined list of options
 * 
 * @attr {Number} index - Index of the individual auro-menu-otion.
 * @attr {Boolean} isHidden - If the auro-menu-option is currently visible or not, perhaps because auro-dropdown is controlling whether or not auro-menu is visible or hidden.
 * @attr {Number} tabIndex - Will be either -1 or 0 depending on if auro-menu is currently visible or not.
 * @attr {Boolean} hasFocus - Used to help determine if auro-menu-option is being tabbed onto. Used to help determine the color and background color of auro-menu-option.
 * @attr {Boolean} beingMouseOvered - Used to help determine the color and background color of auro-menu-option.
 * @attr {Boolean} indented - Used to visually indicate a 'sub-menu'
 */
class AuroMenuOption extends LitElement {
  constructor() {
    super();
    this.hasFocus = false;
  }

  static get properties() {
    return {
      index: { type: Number },
      isHidden: { type: Boolean },
      tabIndex: { type: Number },
      hasFocus: { type: Boolean},
      beingMouseOvered: { type: Boolean},
      indented: { type: Boolean },
      hideCheckmark: { type: Boolean},
    }
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  firstUpdated() {
    this.tabIndex = this.parentElement.hasAttribute('ishidden') ? '-1' : '0';
    this.hideCheckmark = this.parentElement.hasAttribute('hideCheckmark') || this.parentElement.parentElement.hasAttribute('hidecheckmark');
  }

  render() {
    const subMenu = {
      'content': true,
      'indented': this.indented,
      'hideCheckmark': this.hideCheckmark
    }

    const checkMark = { 
      'checkmark': true,
      'display--none': this.hideCheckmark
    }

    return html`
      <li>
        <div class="${classMap(subMenu)}">
          <span class="${classMap(checkMark)}">
            <auro-icon category="interface" name="check-sm" emphasis ?ondark="${!this.beingMouseOvered && this.hasFocus}"></auro-icon>
          </span>
          <slot></slot>
        </div>
      </li>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-menu-option")) {
  customElements.define("auro-menu-option", AuroMenuOption);
}
