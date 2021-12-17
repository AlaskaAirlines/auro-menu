// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------
import { LitElement, html, css } from "lit-element";
import styleCss from "./auro-sub-menu-css.js";
import "focus-visible/dist/focus-visible.min.js";

class AuroSubMenu extends LitElement {
  constructor() {
    super();
    this.hasFocus = false;
  }

  static get properties() {
    return {
      hideTop: { type: Boolean },
      hideBottom: { type: Boolean }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  firstUpdated() {
    // Prevent duplicate dividers, or a divider as the first or last element in the menu
    this.hideTop = this.previousElementSibling === null || this.previousElementSibling.matches('auro-sub-menu');
    this.hideBottom = this.nextElementSibling === null;
  }

  render() {
    return html`
      <div class="subMenu">
        ${this.hideTop ? undefined : html`<div class="divider"></div>`}
        <slot></slot>
        ${this.hideBottom ? undefined : html`<div class="divider"></div>`}
      </div>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-sub-menu")) {
  customElements.define("auro-sub-menu", AuroSubMenu);
}