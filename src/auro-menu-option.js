// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import "@alaskaairux/auro-icon";

import { LitElement, html, css } from "lit-element";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./auro-menu-option-css.js";

class AuroMenuOption extends LitElement {
  constructor() {
    super();
    this.hasFocus = false;
  }

  static get properties() {
    return {
      index: { type: Number, },
      isHidden: { type: Boolean },
      tabIndex: { type: Number },
      hasFocus: { type: Boolean},
      beingMouseOvered: { type: Boolean},
    }

  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  firstUpdated() {
    this.tabIndex = this.parentElement.hasAttribute('ishidden') ? '-1' : '0';
  }

  render() {
    return html`
      <li>
        <span class="checkmark">
          <auro-icon category="interface" name="check-sm" emphasis ?ondark="${!this.beingMouseOvered && this.hasFocus}"></auro-icon>
        </span>
        <slot></slot>
      </li>
    `;
  }

}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-menu-option")) {
  customElements.define("auro-menu-option", AuroMenuOption);
}
