
import { fixture, html, expect } from '@open-wc/testing';
import '../src/auro-menu.js';
import '../src/auro-menuoption.js';

describe('auro-menu', () => {
  it('auro-menu custom element is defined', async () => {
    const el = await !!customElements.get("auro-menu");

    await expect(el).to.be.true;
  });

  it('auro-menu is accessible', async () => {
    const el = await fixture(html`
      <auro-menu>
        <auro-menuoption value="foo">Foo</auro-menuoption>
      </auro-menu>
    `);

    await expect(el).to.be.accessible();
  });

  it('Preset value is selected', async () => {
    const el = await defaultFixture();
    const index = 1;
    const menuEl = el.querySelector('auro-menu');
    let options = menuEl.shadowRoot.querySelector('slot').assignedNodes();

    options[index].click();

    options[index].dispatchEvent(new Event('mousedown', {
      bubbles: true,
      composed: true
    }));

    for (let i = 0; i < options.length; i++) {
      if (index === i) {
        expect(options[i].hasAttribute('selected')).to.equal(true);
        expect(options[i].hasAttribute('aria-selected')).to.equal(true);
      } else {
        expect(options[i].hasAttribute('selected')).to.equal(false);
        expect(options[i].hasAttribute('aria-selected')).to.equal(false);
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
        expect(options[i].hasAttribute('aria-selected')).to.equal(true);
      } else {
        expect(options[i].hasAttribute('selected')).to.equal(false);
        expect(options[i].hasAttribute('aria-selected')).to.equal(false);
      }
    }
  });

  it('Enter ArrowDown marks option as selected', async () => {
    const el = await defaultFixture();
    const menuEl = el.querySelector('auro-menu');
    let options = menuEl.shadowRoot.querySelector('slot').assignedNodes();

    options[0].dispatchEvent(new Event('mousedown', {
      bubbles: true,
      composed: true
    }));

    options[0].dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': 'ArrowDown'
    }));

    options[1].dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': 'Enter'
    }));

    expect(options[1].hasAttribute('selected')).to.equal(true);
  });

  it('ArrowDown loops to 1st option in slot', async () => {
    const el = await defaultFixture();
    const menuEl = el.querySelector('auro-menu');
    let options = menuEl.shadowRoot.querySelector('slot').assignedNodes();

    options[5].dispatchEvent(new Event('mousedown', {
      bubbles: true,
      composed: true
    }));

    options[5].dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': 'ArrowDown'
    }));

    options[0].dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': 'Enter'
    }));

    expect(options[0].hasAttribute('selected')).to.equal(true);
  });

  it('Enter ArrowUp marks option as selected', async () => {
    const el = await defaultFixture();
    const menuEl = el.querySelector('auro-menu');
    let options = menuEl.shadowRoot.querySelector('slot').assignedNodes();

    options[2].dispatchEvent(new Event('mousedown', {
      bubbles: true,
      composed: true
    }));

    options[2].dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': 'ArrowUp'
    }));

    options[1].dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': 'Enter'
    }));

    expect(options[1].hasAttribute('selected')).to.equal(true);
  });

  it('ArrowUp moves to last option in slot', async () => {
    const el = await defaultFixture();
    const menuEl = el.querySelector('auro-menu');
    let options = menuEl.shadowRoot.querySelector('slot').assignedNodes();

    options[0].dispatchEvent(new Event('mousedown', {
      bubbles: true,
      composed: true
    }));

    options[0].dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': 'ArrowUp'
    }));

    options[5].dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': 'Enter'
    }));

    expect(options[5].hasAttribute('selected')).to.equal(true);
  });
});


// Template fixtures used in tests
async function defaultFixture() {
  return await fixture(html`
      <div>
        <auro-menu><auro-menuoption value="option 1">option 1</auro-menuoption><auro-menuoption value="option 2">option 2</auro-menuoption><auro-menuoption disabled value="option 3">option 3</auro-menuoption><auro-menuoption value="lorem ipsum lorem ipsum">lorem ipsum lorem ipsum</auro-menuoption><auro-menuoption value="departures">Departures</auro-menuoption><auro-menuoption value="arrivals">Arrivals</auro-menuoption></auro-menu>
      </div>
  `);
}
