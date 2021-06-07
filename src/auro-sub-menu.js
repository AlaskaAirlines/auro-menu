// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------
import "@alaskaairux/auro-icon";
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
    }
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  firstUpdated() {
  }

  render() {
    return html`
      <div>
        <hr class="divider" />
        <slot></slot>
        <hr class="divider" />
      </div>
    `;
  }

}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-sub-menu")) {
  customElements.define("auro-sub-menu", AuroSubMenu);
}
