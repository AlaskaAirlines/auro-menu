// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------
import { LitElement, html } from "lit-element";
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-menuoption-css.js";
import styleCssFixed from "./style-menuoption-fixed-css.js";
import check from '@alaskaairux/icons/dist/icons/interface/check-sm_es6';

/**
 * The auro-menu element provides users a way to define a menu option.
 *
 * @attr {String} value - Specifies the value to be sent to a server.
 * @attr {Boolean} disabled - When true specifies that the menuoption is disabled.
 * @attr {Boolean} selected - Specifies that an option is selected.
 * @slot Specifies text for an option, but is not the value.
 */
class AuroMenuOption extends LitElement {
  constructor() {
    super();

    /**
     * @private
     */
    this.tabIndex = -1;

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
      selected:         { type: Boolean },
      disabled:         { type: Boolean },
      value: {
        type: String,
        reflect: true
      },
      tabIndex: {
        type: Number,
        reflect: true
      }
    };
  }

  static get styles() {
    return [
      styleCss,
      styleCssFixed
    ];
  }

  firstUpdated() {
    this.setAttribute('role', 'option');
  }

  render() {
    return html`
      ${this.selected ? html`${this.svg}` : undefined}
      <slot></slot>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-menuoption")) {
  customElements.define("auro-menuoption", AuroMenuOption);
}
