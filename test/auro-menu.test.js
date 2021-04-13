
import { fixture, html, expect, triggerFocusFor, oneEvent } from '@open-wc/testing';
import '../src/auro-menu.js';

describe('auro-menu', () => {
  let currentlySelectedIndex = null;

  before(() => {
    document.addEventListener('optionSelected', (evt) => {
      currentlySelectedIndex = evt.detail.index;
    });
  });

  after(() => {
    currentlySelectedIndex = null;
  });
  
  // selecting an option marks only that option as selected

  it('clicking on an option marks only that option as selected', async () => {
    const el = await generateDefaultFixture();

    const index = 0;

    let options = el.shadowRoot.querySelector('slot[name=listOfOptions]').assignedNodes();
    options[index].click();

    for (let i = 0; i < options.length; i++) {
      if (index === i) {
        expect(options[i].hasAttribute('selected')).to.equal(true);
      } else {
        expect(options[i].hasAttribute('selected')).to.equal(false);
      }
    }
  });

  it('pressing the Enter button when an option has focus marks only that option as selected', async () => {
    const el = await generateDefaultFixture();

    const index = 1;

    let options = el.shadowRoot.querySelector('slot[name=listOfOptions]').assignedNodes();
    options[index].dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': 'Enter'
    }));

    for (let i = 0; i < options.length; i++) {
      if (index === i) {
        expect(options[i].hasAttribute('selected')).to.equal(true);
      } else {
        expect(options[i].hasAttribute('selected')).to.equal(false);
      }
    }
  });

  it('pressing the Space button when an option has focus marks only that option as selectedd', async () => {
    const el = await generateDefaultFixture();

    const index = 2;

    let options = el.shadowRoot.querySelector('slot[name=listOfOptions]').assignedNodes();
    options[index].dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': ' '
    }));

    for (let i = 0; i < options.length; i++) {
      if (index === i) {
        expect(options[i].hasAttribute('selected')).to.equal(true);
      } else {
        expect(options[i].hasAttribute('selected')).to.equal(false);
      }
    }
  });

  it('clicking through different options results in only 1 option being selected at a time', async () => {
    const el = await generateDefaultFixture();

    let options = el.shadowRoot.querySelector('slot[name=listOfOptions]').assignedNodes();

    let index = 0;

    options[index].click();

    for (let i = 0; i < options.length; i++) {
      if (index === i) {
        expect(options[i].hasAttribute('selected')).to.equal(true);
      } else {
        expect(options[i].hasAttribute('selected')).to.equal(false);
      }
    }

    index = 5;

    options[index].click();

    for (let i = 0; i < options.length; i++) {
      if (index === i) {
        expect(options[i].hasAttribute('selected')).to.equal(true);
      } else {
        expect(options[i].hasAttribute('selected')).to.equal(false);
      }
    }

    index = 3;

    options[index].click();

    for (let i = 0; i < options.length; i++) {
      if (index === i) {
        expect(options[i].hasAttribute('selected')).to.equal(true);
      } else {
        expect(options[i].hasAttribute('selected')).to.equal(false);
      }
    }
  });

  // selecting an option dispatches an event with information about the index of the option

  it('clicking on an option dispatches an event signifying the option was selected', async () => {
    const el = await generateDefaultFixture();

    let options = el.shadowRoot.querySelector('slot[name=listOfOptions]').assignedNodes();
    options[0].click();

    expect(currentlySelectedIndex).to.equal('0');
  });

  it('pressing the Enter button when an option has focus dispatches an event signifying the option was selected', async () => {
    const el = await generateDefaultFixture();

    let options = el.shadowRoot.querySelector('slot[name=listOfOptions]').assignedNodes();
    // let listener = oneEvent(options[1], 'keydown');
    options[1].dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': 'Enter'
    }
    ));
    // await listener;
  
    expect(currentlySelectedIndex).to.equal('1');
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

    expect(currentlySelectedIndex).to.equal('2');
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