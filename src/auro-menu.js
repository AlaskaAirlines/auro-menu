// Copyright (c) 2021 Alaska Airlines. All right reserved. Licensed under the Apache-2.0 license
// See LICENSE in the project root for license information.

// ---------------------------------------------------------------------

import "@alaskaairux/auro-icon";

import { LitElement, html, css } from "lit-element";

// Import touch detection lib
import "focus-visible/dist/focus-visible.min.js";
import styleCss from "./style-css.js";

// See https://git.io/JJ6SJ for "How to document your components using JSDoc"
/**
 * auro-menu provides users a way to select one option from a pre-defined list of options
 */

class AuroMenu extends LitElement {
  constructor() {
    super();

    this.options = null;
  
  }

  static get properties() {
    return {
      options: { type: Array }
    };
  }

  static get styles() {
    return css`
      ${styleCss}
    `;
  }

  // dispatchEventOptionSelected = (evt, i) => {
  //   debugger;
  //   // let options = this.shadowRoot.querySelector('slot[name=listOfOptions]').assignedNodes();

  //   this.options[i].dispatchEvent(new CustomEvent('optionSelected', {
  //     bubbles: true,
  //     cancelable: false,
  //     composed: true,
  //     detail: {
  //       value: this.options[i].getAttribute('data-value')
  //     }
  //   }));

  //   alert("index" + i);
  // }


  firstUpdated() {
    this.options = this.shadowRoot.querySelector('slot[name=listOfOptions]').assignedNodes();

    // 1) make each option tabbable 2) add click and keypress event listeners, to dispatchEvent that a particular option
    // was selected
    for (let i = 0; i < this.options.length; i++) {
      this.options[i].setAttribute('index', i)
      this.options[i].setAttribute('tabindex', '0')
      this.options[i].addEventListener('keydown', (evt, i) => handleKeyDown(evt, i));
      this.options[i].addEventListener('click', (i) => handleClick(i));

      let span = document.createElement('span');
      span.id = `${i}check`;
      span.classList.add('checkContainer')
      // span.innerHTML = 'a&nbsp;b';
      span.innerHTML = '<auro-icon category="interface" name="check-sm" emphasis></auro-icon>';

      span.style.display = 'inline-block';
      span.style.margin = '0 8px 0 8px';
      span.style.padding = '0';

      span.style.visibility = 'hidden';


      // this.options[i].appendChild(span);
      this.options[i].insertBefore(span, this.options[i].firstChild);    }



    const handleKeyDown = (evt, i) => {
      if (evt.key.toLowerCase() === 'enter' || evt.key.toLowerCase() === ' ') {
        // this.dispatchEventOptionSelected(evt, i);
        // debugger;
        this.options[i.target.getAttribute('index')].dispatchEvent(new CustomEvent('optionSelected', {
          bubbles: true,
          cancelable: false,
          composed: true,
          detail: {
            value: this.options[i].getAttribute('data-value')
          }
        }));

      }
    }
    const handleClick = (i) => {
      // this.dispatchEventOptionSelected(evt, i);
      // debugger;
      this.options[i.target.getAttribute('index')].dispatchEvent(new CustomEvent('optionSelected', {
        bubbles: true,
        cancelable: false,
        composed: true,
        detail: {
          value: this.options[i.target.getAttribute('index')].getAttribute('data-value')
        }
      }));

      let index = parseInt(i.target.getAttribute('index'));
      // console.log("this.options[i.target.getAttribute('index')]", this.options[index]);
// debugger;
      for (let j = 0; j < this.options.length; j++) {
        if (index === j) {
          // debugger;
          this.options[j].setAttribute('selected', '');
          this.options[j].querySelector('span').setAttribute('style', 'display: inline-block; margin: 0 8px 0 8px; visibility: visible');
        } else {
          this.options[j].removeAttribute('selected');
          this.options[j].querySelector('span').setAttribute('style', 'display: inline-block; margin: 0 8px 0 8px; visibility: hidden');

        }
      }
  
    }
  }

  render() {
    return html`
      <ul>
        <slot name="listOfOptions"></slot>
      </ul>
    `;
  }
}

/* istanbul ignore else */
// define the name of the custom component
if (!customElements.get("auro-menu")) {
  customElements.define("auro-menu", AuroMenu);
}
