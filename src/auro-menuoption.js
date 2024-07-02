// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------
import { LitElement, html } from "lit";
import styleCss from "./style-menuoption-css.js";
import check from '@alaskaairux/icons/dist/icons/interface/check-sm_es6.js';

/**
 * The auro-menu element provides users a way to define a menu option.
 *
 * @attr {String} value - Specifies the value to be sent to a server.
 * @attr {String} noCheckmark - When true, selected option will not show the checkmark.
 * @attr {Boolean} disabled - When true specifies that the menuoption is disabled.
 * @attr {Boolean} selected - Specifies that an option is selected.
 * @event auroMenuOption-mouseover - Notifies that this option has been hovered over.
 * @slot Specifies text for an option, but is not the value.
 */
class AuroMenuOption extends LitElement {
  constructor() {
    super();

    this.nocheckmark = false;
    this.disabled = false;
    this.selected = false;

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
      nocheckmark: {
        type: Boolean,
        reflect: true
      },
      selected:  {
        type: Boolean,
        reflect: true
      },
      disabled:  {
        type: Boolean,
        reflect: true
      },
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
    return [styleCss];
  }

  firstUpdated() {
    this.setAttribute('role', 'option');

    this.addEventListener('mouseover', () => {
      this.dispatchEvent(new CustomEvent('auroMenuOption-mouseover', {
        bubbles: true,
        cancelable: false,
        composed: true,
        detail: this
      }));
    });
  }

  render() {
    return html`
      ${this.selected && !this.nocheckmark ? html`${this.svg}` : undefined}
      <slot></slot>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-menuoption")) {
  customElements.define("auro-menuoption", AuroMenuOption);
}
