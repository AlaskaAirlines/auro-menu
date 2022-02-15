
// import { fixture, html, expect, triggerFocusFor, oneEvent } from '@open-wc/testing';
// import '../src/auro-menu.js';
// import '../src/auro-menuoption.js';

// describe('auro-menu', () => {
//   let currentlySelectedIndex = null;

//   before(() => {
//     document.addEventListener('optionSelected', (evt) => {
//       currentlySelectedIndex = evt.detail.index;
//     });
//   });

//   after(() => {
//     currentlySelectedIndex = null;
//   });

//   it('Preset value is selected', async () => {
//     const el = await defaultFixture();
//     const index = 1;
//     const menuEl = el.querySelector('auro-menu');
//     let options = menuEl.shadowRoot.querySelector('slot').assignedNodes();

//     options[index].click();

//     for (let i = 0; i < options.length; i++) {
//       if (index === i) {
//         expect(options[i].hasAttribute('selected')).to.equal(true);
//       } else {
//         expect(options[i].hasAttribute('selected')).to.equal(false);
//       }
//     }
//   });


//   it('Enter keyboardEvent marks option as selected', async () => {
//     const el = await defaultFixture();
//     const index = 1;
//     const menuEl = el.querySelector('auro-menu');
//     let options = menuEl.shadowRoot.querySelector('slot').assignedNodes();

//     options[index].dispatchEvent(new KeyboardEvent('keydown', {
//       bubbles: true,
//       composed: true,
//       'key': 'Enter'
//     }));

//     for (let i = 0; i < options.length; i++) {
//       if (index === i) {
//         expect(options[i].hasAttribute('selected')).to.equal(true);
//       } else {
//         expect(options[i].hasAttribute('selected')).to.equal(false);
//       }
//     }
//   });

//   it('Spacebar keyboardEvent marks option as selected', async () => {
//     const el = await defaultFixture();
//     const index = 2;
//     const menuEl = el.querySelector('auro-menu');
//     let options = menuEl.shadowRoot.querySelector('slot').assignedNodes();

//     options[2].dispatchEvent(new KeyboardEvent('keydown', {
//       bubbles: true,
//       composed: true,
//       'key': ' '
//     }
//     ));

//     for (let i = 0; i < options.length; i++) {
//       if (index === i) {
//         expect(options[i].hasAttribute('selected')).to.equal(true);
//       } else {
//         expect(options[i].hasAttribute('selected')).to.equal(false);
//       }
//     }
//   });

//   it('Preselected option is true', async () => {
//     const el = await preSelectFixture();
//     const index = 2;
//     const menuEl = el.querySelector('auro-menu');
//     let options = menuEl.shadowRoot.querySelector('slot').assignedNodes();

//     for (let i = 0; i < options.length; i++) {
//       if (index === i) {
//         expect(options[i].hasAttribute('selected')).to.equal(true);
//       } else {
//         expect(options[i].hasAttribute('selected')).to.equal(false);
//       }
//     }
//   });

//   it('Preselected option is true from outer parent', async () => {
//     const el = await outerParentPreSelectFixture();
//     const index = 2;
//     const menuEl = el.querySelector('auro-menu');
//     let options = menuEl.shadowRoot.querySelector('slot').assignedNodes();

//     for (let i = 0; i < options.length; i++) {
//       if (index === i) {
//         expect(options[i].hasAttribute('selected')).to.equal(true);
//       } else {
//         expect(options[i].hasAttribute('selected')).to.equal(false);
//       }
//     }
//   });
// });


// // Template fixtures used in tests
// async function defaultFixture() {
//   return await fixture(html`
//       <div>
//         <auro-menu><auro-menuoption value="option 1">option 1</auro-menuoption><auro-menuoption value="option 2">option 2</auro-menuoption><auro-menuoption value="option 3">option 3</auro-menuoption><auro-menuoption value="lorem ipsum lorem ipsum">lorem ipsum lorem ipsum</auro-menuoption><auro-menuoption value="departures">Departures</auro-menuoption><auro-menuoption value="arrivals">Arrivals</auro-menuoption></auro-menu>
//       </div>
//   `);
// }

// async function preSelectFixture() {
//   return await fixture(html`
//       <div>
//         <auro-menu selectOption="2"><auro-menuoption value="option 1">option 1</auro-menuoption><auro-menuoption value="option 2">option 2</auro-menuoption><auro-menuoption value="option 3">option 3</auro-menuoption><auro-menuoption value="lorem ipsum lorem ipsum">lorem ipsum lorem ipsum</auro-menuoption><auro-menuoption value="departures">Departures</auro-menuoption><auro-menuoption value="arrivals">Arrivals</auro-menuoption></auro-menu>
//       </div>
//   `);
// }

// async function outerParentPreSelectFixture() {
//   return await fixture(html`
//       <div selectOption="2">
//         <auro-menu><auro-menuoption value="option 1">option 1</auro-menuoption><auro-menuoption value="option 2">option 2</auro-menuoption><auro-menuoption value="option 3">option 3</auro-menuoption><auro-menuoption value="lorem ipsum lorem ipsum">lorem ipsum lorem ipsum</auro-menuoption><auro-menuoption value="departures">Departures</auro-menuoption><auro-menuoption value="arrivals">Arrivals</auro-menuoption></auro-menu>
//       </div>
//   `);
// }
