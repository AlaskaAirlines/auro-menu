
import { fixture, html, expect, triggerFocusFor, oneEvent } from '@open-wc/testing';
import '../src/auro-menu.js';
import '../src/auro-menu-option.js';

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

  it('Preset value is selected', async () => {
    const el = await generateFixtureWithParentIndex();

    const index = 0;

    const menuEl = el.querySelector('auro-menu');

    console.warn(menuEl);

    let options = menuEl.shadowRoot.querySelector('slot[name=listOfOptions]').assignedNodes();
    options[index].click();

    for (let i = 0; i < options.length; i++) {
      if (index === i) {
        expect(options[i].hasAttribute('selected')).to.equal(true);
      } else {
        expect(options[i].hasAttribute('selected')).to.equal(false);
      }
    }
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

  it('pressing the Space button when an option has focus marks only that option as selected', async () => {
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

    expect(currentlySelectedIndex).to.equal(0);
  });

  it('pressing the Enter button when an option has focus dispatches an event signifying the option was selected', async () => {
    const el = await generateDefaultFixture();

    let options = el.shadowRoot.querySelector('slot[name=listOfOptions]').assignedNodes();

    options[1].dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': 'Enter' }
    ));
    // await listener;

    expect(currentlySelectedIndex).to.equal(1);
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

    expect(currentlySelectedIndex).to.equal(2);
  });

});


// Template fixture used in all the tests
async function generateDefaultFixture() {
  return await fixture(html`
      <auro-menu indexselectedoption="0">
        <auro-menu-option slot="listOfOptions" data-value="the value for option 1">option 1</auro-menu-option>
        <auro-menu-option slot="listOfOptions" data-value="the value for option 2">option 2</auro-menu-option>
        <auro-menu-option slot="listOfOptions" data-value="the value for option 3">option 3</auro-menu-option>
        <auro-menu-option slot="listOfOptions" data-value="lorem ipsum lorem ipsum">lorem ipsum lorem ipsum</auro-menu-option>
        <auro-menu-option slot="listOfOptions" data-value="departures">Departures</auro-menu-option>
        <auro-menu-option slot="listOfOptions" data-value="arrivals">Arrivals</auro-menu-option>
        <auro-sub-menu slot="listOfOptions">
          <auro-menu-option data-value="the value for option 2">Everett, WA (PAE-Paine Field)</auro-menu-option>
          <auro-menu-option data-value="the value for option 3">Seattle, WA (SEA-Seattle/Tacoma Intl.)</auro-menu-option>
        </auro-sub-menu>
      </auro-menu>
  `);
}

async function generateFixtureWithParentIndex() {
  return await fixture(html`
      <div indexSelectedOption="0">
        <auro-menu>
          <auro-menu-option slot="listOfOptions" data-value="the value for option 1">option 1</auro-menu-option>
          <auro-menu-option slot="listOfOptions" data-value="the value for option 2">option 2</auro-menu-option>
          <auro-menu-option slot="listOfOptions" data-value="the value for option 3">option 3</auro-menu-option>
          <auro-menu-option slot="listOfOptions" data-value="lorem ipsum lorem ipsum">lorem ipsum lorem ipsum</auro-menu-option>
          <auro-menu-option slot="listOfOptions" data-value="departures">Departures</auro-menu-option>
          <auro-menu-option slot="listOfOptions" data-value="arrivals">Arrivals</auro-menu-option>
        </auro-menu>
      </div>
  `);
}
