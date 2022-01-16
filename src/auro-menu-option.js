// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------
import { LitElement, html } from "lit-element";
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-menu-option-css.js";
import styleCssFixed from "./style-menu-option-fixed-css.js";
import check from '@alaskaairux/icons/dist/icons/interface/check-sm_es6';

/**
 * Auro-menu provides users a way to select one option from a pre-defined list of options.
 *
 * @attr {Boolean} disabled - When true specifies that the menu-option is disabled.
 */
class AuroMenuOption extends LitElement {
  constructor() {
    super();
    this.hasFocus = false;

    /**
     * @private
     */
    this.dom = new DOMParser().parseFromString(check.svg, 'text/html');

    /**
     * @private
     */
    this.svg = this.dom.body.firstChild;
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
    this.icon = this.closest('auro-menu').hasAttribute('icon');
  }

  render() {
    return html`
      <li class="menuOption" part="menuOption">
        ${this.icon ? html`
          ${this.selected ? html`${this.svg}` : undefined}
        ` : undefined}
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
