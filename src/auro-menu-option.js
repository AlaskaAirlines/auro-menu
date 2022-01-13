// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------
import { LitElement, html } from "lit-element";
// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-menu-option-css.js";
import styleCssFixed from "./style-menu-option-fixed-css.js";

/**
 * Auro-menu provides users a way to select one option from a pre-defined list of options.
 *
 * @attr {Number} index - Index of the individual auro-menu-option.
 * @attr {Boolean} isHidden - If the auro-menu-option is currently visible or not, perhaps because auro-dropdown is controlling whether or not auro-menu is visible or hidden.
 * @attr {Number} tabIndex - Will be either -1 or 0 depending on if auro-menu is currently visible or not.
 * @attr {Boolean} hasFocus - Used to help determine if auro-menu-option is being tabbed onto. Used to help determine the color and background color of auro-menu-option.
 * @attr {Boolean} beingMouseOvered - Used to help determine the color and background color of auro-menu-option.
 * @attr {Boolean} disabled - When true specifies that the menu-option is disabled.
 */
class AuroMenuOption extends LitElement {
  constructor() {
    super();
    this.hasFocus = false;
  }

  static get properties() {
    return {
      beingMouseOvered: { type: Boolean },
      hasFocus:         { type: Boolean },
      index:            { type: Number },
      selected:         { type: Boolean },
      disabled:         { type: Boolean }
    };
  }

  static get styles() {
    return [
      styleCss,
      styleCssFixed
    ];
  }

  firstUpdated() {
    this.checkmark = this.closest('auro-menu').hasAttribute('checkmark');
  }

  render() {
    return html`
      <li>
        <div class="content">
          ${this.checkmark ? html`
            <div class="checkmark">
              ${this.selected ? html`
                <auro-icon category="interface" name="check-sm" customColor></auro-icon>
              `
              : undefined}
            </div>
          ` : undefined}
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
