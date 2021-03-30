import { fixture, html, expect, triggerFocusFor } from '@open-wc/testing';
import '../src/auro-menu.js';

describe('auro-menu', () => {
  let currentlySelectedValue = null;

  before(() => {
    document.addEventListener('optionSelected', (evt) => {
      currentlySelectedValue = evt.detail.value;
    });
  });

  after(() => {
    currentlySelectedValue = null;
  });

  it('clicking on an option dispatches an event signifying the option was selected', async () => {
    const el = await generateDefaultFixture();

    let options = el.shadowRoot.querySelector('slot[name=listOfOptions]').assignedNodes();
    options[0].click();

    expect(currentlySelectedValue).to.equal('the value for option 1');
  });

  it('pressing the Enter button when an option has focus dispatches an event signifying the option was selected', async () => {
    const el = await generateDefaultFixture();

    let options = el.shadowRoot.querySelector('slot[name=listOfOptions]').assignedNodes();
    options[1].dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': 'Enter'
    }
    ));
  
    expect(currentlySelectedValue).to.equal('the value for option 2');
  });

  it('pressing the Space button when an option has focus dispatches an event signifying the option was selected', async () => {
    const el = await generateDefaultFixture();

    let options = el.shadowRoot.querySelector('slot[name=listOfOptions]').assignedNodes();
    options[2].dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': ' '
    }
    ));

    expect(currentlySelectedValue).to.equal('the value for option 3');
  });

  // BRENT: Browsers don't allow the Tab button to be dispatched. I left the code in for posterity.
  /*
  it('options can be tabbed and alt-tabbed through', async () => {
    const el = await fixture(html`
      <div>
        <button id="tabbableButtonAbove" tabindex="0">tabbable button above</button>
      
        <auro-menu>
          <li slot="listOfOptions" data-value="the value for option 1">option 1</li>
          <li slot="listOfOptions" data-value="the value for option 2">option 2</li>
          <li slot="listOfOptions" data-value="the value for option 3">option 3</li>
          <li slot="listOfOptions" data-value="lorem ipsum lorem ipsum">lorem ipsum lorem ipsum</li>
          <li slot="listOfOptions" data-value="departures">Departures</li>
          <li slot="listOfOptions" data-value="arrivals">Arrivals</li>
        </auro-menu>
      
        <button id="tabbableButtonBelow" tabindex="0">tabbable button below</button>
      </div>
    `);

    let options = el.querySelector('auro-menu').shadowRoot.querySelector('slot[name=listOfOptions]').assignedNodes();

    let button = document.querySelector('#tabbableButtonAbove')

    button.focus()
    button.click()

    button.dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': 'Tab'
    }));

    // returns the tabbable button above the menu, not the first option like we'd want
    document.activeElement
  });
  */

});

async function generateDefaultFixture() {
  return await fixture(html`
      <auro-menu>
        <li slot="listOfOptions" data-value="the value for option 1">option 1</li>
        <li slot="listOfOptions" data-value="the value for option 2">option 2</li>
        <li slot="listOfOptions" data-value="the value for option 3">option 3</li>
        <li slot="listOfOptions" data-value="lorem ipsum lorem ipsum">lorem ipsum lorem ipsum</li>
        <li slot="listOfOptions" data-value="departures">Departures</li>
        <li slot="listOfOptions" data-value="arrivals">Arrivals</li>
      </auro-menu>
  `);
}