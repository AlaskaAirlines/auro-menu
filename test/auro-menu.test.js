import { fixture, html, expect, oneEvent, elementUpdated } from '@open-wc/testing';
import '../src/auro-menu.js';
import '../src/auro-menuoption.js';

describe('auro-menu', () => {
  it('auro-menu custom element is defined', async () => {
    const el = await !!customElements.get("auro-menu");

    await expect(el).to.be.true;
  });

  it('auro-menu is accessible', async () => {
    const el = await nestedMenuFixture();

    await expect(el).to.be.accessible();
  });

  it('Preset value is selected', async () => {
    const el = await presetValueFixture();
    const menuEl = el.querySelector('auro-menu');
    const options = getOptions(menuEl);
    const valueIndex = 2;

    // Validate the menuOptions have the correct attributes
    for (let index = 0; index < options.length; index += 1) {
      if (valueIndex === index) {
        expect(options[index].hasAttribute('selected')).to.equal(true);
        expect(options[index].hasAttribute('aria-selected')).to.equal(true);
      } else {
        expect(options[index].hasAttribute('selected')).to.equal(false);
        expect(options[index].hasAttribute('aria-selected')).to.equal(false);
      }
    }

    // validate the menu has the correct stored value/optionSelected
    expect(menuEl.getAttribute('value')).to.equal('option 3');
    expect(menuEl.optionSelected.getAttribute('value')).to.equal('option 3');
  });

  it('Reset value to undefined unmarks selected option', async () => {
    const el = await presetValueFixture();
    const menuEl = el.querySelector('auro-menu');

    expect(menuEl.optionSelected).to.not.equal(undefined);

    menuEl.value = undefined;

    await elementUpdated(menuEl);

    expect(menuEl.optionSelected).to.equal(undefined);
  });

  it('Setting value attribute with incorrect value is handled correctly', async () => {
    const el = await defaultFixture();
    const menuEl = el.querySelector('auro-menu');
    const listener1 = oneEvent(el, 'auroMenu-selectValueFailure');

    menuEl.setAttribute('value', 'error');

    const { result1 } = await listener1;

    expect(result1).to.equal(undefined);
  });

  it('Enter keyboardEvent marks option as selected', async () => {
    const el = await defaultFixture();
    const index = 0;
    const menuEl = el.querySelector('auro-menu');
    const options = getOptions(menuEl);

    menuEl.selectNextItem('down');

    menuEl.dispatchEvent(new KeyboardEvent('keydown', {
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
    const options = getOptions(menuEl);

    menuEl.selectNextItem('down');

    menuEl.dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': 'ArrowDown'
    }));

    menuEl.dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': 'Enter'
    }));

    menuEl.dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': 'Space'
    }));

    expect(options[1].hasAttribute('selected')).to.equal(true);
  });

  it('ArrowDown loops to 1st option in slot', async () => {
    const el = await defaultFixture();
    const menuEl = el.querySelector('auro-menu');
    const options = getOptions(menuEl);

    menuEl.selectNextItem('down');
    menuEl.selectNextItem('up');

    menuEl.dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': 'ArrowDown'
    }));

    expect(options[0].classList['0']).to.equal('active');
  });

  it('Enter ArrowUp marks option as active', async () => {
    const el = await defaultFixture();
    const menuEl = el.querySelector('auro-menu');
    const options = getOptions(menuEl);

    menuEl.selectNextItem('down');

    menuEl.dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': 'ArrowDown'
    }));

    expect(options[1].classList['0']).to.equal('active');
  });

  it('Arrow key navigation of menu skips hidden and disabled menuoptions', async () => {
    const el = await noninteractiveOptionsFixture();
    const menuEl = el.querySelector('auro-menu');
    const options = getOptions(menuEl);

    menuEl.selectNextItem('down');

    menuEl.dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': 'ArrowDown'
    }));

    expect(options[3].classList['0']).to.equal('active');
  });

  it('ArrowUp moves to last option in slot', async () => {
    const el = await defaultFixture();
    const menuEl = el.querySelector('auro-menu');
    const options = getOptions(menuEl);


    menuEl.selectNextItem('down');

    menuEl.dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': 'ArrowUp'
    }));

    expect(options[5].classList['0']).to.equal('active');
  });

  it('Sends custom events', async () => {
    const el = await customEventFixture();
    const menuEl = el.querySelector('auro-menu');
    const options = getOptions(menuEl);

    const listener1 = oneEvent(el, 'auroMenu-customEventFired');
    const listener2 = oneEvent(el, options[0].getAttribute('event'));

    menuEl.selectNextItem('down');

    menuEl.dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': 'Enter'
    }));

    const { result1 } = await listener1;
    const { result2 } = await listener2;

    expect(result1).to.equal(undefined);
    expect(result2).to.equal(undefined);
  });

  it('test matchWord feature functionality', async () => {
    const el = await customEventFixture();
    const menuEl = el.querySelector('auro-menu');
    expect(menuEl.innerHTML.includes('<strong')).to.be.true;
  })

  it('test disabled handler', async () => {
    const el = await customEventFixture();
    const menuEl = el.querySelector('auro-menu');
    menuEl.setAttribute('disabled', '');

    expect(menuEl.disabled).to.be.true;
  })

  it('test empty items handler', async () => {
    const el = await emptyItemsFixture();
    const menuEl = el.querySelector('auro-menu');
    menuEl.dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': 'Enter'
    }));

    const menuChild = menuEl.querySelector('[test-id=test-child]');
    menuChild.dispatchEvent(new KeyboardEvent('keydown', {
      bubbles: true,
      composed: true,
      'key': 'Enter'
    }));

    expect(menuEl.items.length).to.equal(0);
    expect(menuChild.items.length).to.equal(0);
  })

  it('test mouseover and mousedown on menu option', async () => {
    const el = await defaultFixture();
    const menuEl = el.querySelector('auro-menu');
    const optionEl = menuEl.querySelector('auro-menuoption');
    
    optionEl.dispatchEvent(new KeyboardEvent('mouseover', {
      bubbles: true,
      composed: true
    }));

    optionEl.dispatchEvent(new KeyboardEvent('mousedown', {
      bubbles: true,
      composed: true
    }));
  })

  it('handle noCheckmark property function handler', async () => {
    const el = await nestedMenuFixture();
    const menuEl = el.querySelector('auro-menu');
    
    const childMenu = document.createElement('auro-menu');
    menuEl.appendChild(childMenu)
    menuEl.setAttribute('noCheckmark', '');
    
    expect(menuEl.hasAttribute('noCheckmark')).to.be.true;
  })
});

function getOptions(menu) {
  let options = menu.shadowRoot.querySelector('slot').assignedNodes();

  for(let index = 0; index < options.length; index += 1) {
    if (JSON.stringify(options[index]) === '{}') {
      options.splice(index, 1);
    }
  }

  return options;
}

// Template fixtures used in tests
async function defaultFixture() {
  return await fixture(html`
    <div>
      <auro-menu aria-label="test">
        <auro-menuoption value="option 1">option 1</auro-menuoption>
        <auro-menuoption value="option 2">option 2</auro-menuoption>
        <auro-menuoption disabled value="option 3">option 3</auro-menuoption>
        <auro-menuoption value="lorem ipsum lorem ipsum">lorem ipsum lorem ipsum</auro-menuoption>
        <auro-menuoption value="departures">Departures</auro-menuoption>
        <auro-menuoption value="arrivals">Arrivals</auro-menuoption>
      </auro-menu>
    </div>
  `);
}

async function noninteractiveOptionsFixture() {
  return await fixture(html`
    <div>
      <auro-menu aria-label="test">
        <auro-menuoption disabled value="option 1">option 1</auro-menuoption>
        <auro-menuoption hidden value="option 2">option 2</auro-menuoption>
        <auro-menuoption value="option 3">option 3</auro-menuoption>
        <auro-menuoption value="lorem ipsum lorem ipsum">lorem ipsum lorem ipsum</auro-menuoption>
        <auro-menuoption value="departures">Departures</auro-menuoption>
        <auro-menuoption value="arrivals">Arrivals</auro-menuoption>
      </auro-menu>
    </div>
  `);
}

async function nestedMenuFixture() {
  return await fixture(html`
      <div>
        <auro-menu aria-label="test">
          <auro-menuoption value="option 1">option 1</auro-menuoption>
          <auro-menu>
            <auro-menuoption value="option a">option a</auro-menuoption>
            <auro-menuoption value="option b">option b</auro-menuoption>
          </auro-menu>
          <auro-menuoption value="option 2">option 2</auro-menuoption>
        </auro-menu>
      </div>
  `);
}

async function customEventFixture() {
  return await fixture(html`
      <div>
        <auro-menu matchword="o">
          <auro-menuoption value="option 1" event="uniqueEventName">option 1</auro-menuoption>
        </auro-menu>
      </div>
  `);
}

async function presetValueFixture() {
  return await fixture(html`
    <div>
      <auro-menu value="option 3">
        <auro-menuoption value="option 1">option 1</auro-menuoption>
        <auro-menuoption value="option 2">option 2</auro-menuoption>
        <auro-menuoption value="option 3">option 3</auro-menuoption>
        <auro-menuoption value="lorem ipsum lorem ipsum">lorem ipsum lorem ipsum</auro-menuoption>
        <auro-menuoption value="departures">Departures</auro-menuoption>
        <auro-menuoption value="arrivals">Arrivals</auro-menuoption>
      </auro-menu>
    </div>
  `);
}

async function emptyItemsFixture() {
  return await fixture(html`
    <div>
      <auro-menu aria-label="test">
        <auro-menu aria-label="test-child" test-id="test-child">
        </auro-menu>
      </auro-menu>
    </div>
  `);
}
