
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
    const el = await defaultFixture();
    const index = 1;
    const menuEl = el.querySelector('auro-menu');
    let options = menuEl.shadowRoot.querySelector('slot').assignedNodes();

    options[index].click();

    for (let i = 0; i < options.length; i++) {
      if (index === i) {
        expect(options[i].hasAttribute('selected')).to.equal(true);
      } else {
        expect(options[i].hasAttribute('selected')).to.equal(false);
      }
    }
  });


  it('Enter keyboardEvent marks option as selected', async () => {
    const el = await defaultFixture();
    const index = 1;
    const menuEl = el.querySelector('auro-menu');
    let options = menuEl.shadowRoot.querySelector('slot').assignedNodes();

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

  it('Spacebar keyboardEvent marks option as selected', async () => {
    const el = await defaultFixture();
    const index = 2;
    const menuEl = el.querySelector('auro-menu');
    let options = menuEl.shadowRoot.querySelector('slot').assignedNodes();

    options[2].dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': ' '
    }
    ));

    for (let i = 0; i < options.length; i++) {
      if (index === i) {
        expect(options[i].hasAttribute('selected')).to.equal(true);
      } else {
        expect(options[i].hasAttribute('selected')).to.equal(false);
      }
    }
  });
});


// Template fixture used in all the tests
async function defaultFixture() {
  return await fixture(html`
      <div>
        <auro-menu><auro-menu-option data-value="option 1">option 1</auro-menu-option><auro-menu-option data-value="option 2">option 2</auro-menu-option><auro-menu-option data-value="option 3">option 3</auro-menu-option><auro-menu-option data-value="lorem ipsum lorem ipsum">lorem ipsum lorem ipsum</auro-menu-option><auro-menu-option data-value="departures">Departures</auro-menu-option><auro-menu-option data-value="arrivals">Arrivals</auro-menu-option><auro-sub-menu><auro-menu-option data-value="option 4">option 4</auro-menu-option><auro-menu-option data-value="option 5">option 5</auro-menu-option></auro-sub-menu></auro-menu>
      </div>
  `);
}
