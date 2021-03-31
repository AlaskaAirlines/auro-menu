import { fixture, html, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/auro-menu.js';

describe('auro-menu', () => {
  it('sets the CSS class on auro-menu > div element', async () => {
    const el = await fixture(html`
      <auro-menu cssclass="testClass"></auro-menu>
    `);

    const div = el.shadowRoot.querySelector('div');
    expect(div.className).to.equal('testClass');
  });

  it('auro-menu is accessible', async () => {
    const el = await fixture(html`
      <auro-menu cssclass="testClass"></auro-menu>
    `);

    await expect(el).to.be.accessible();
  });

  it('auro-menu custom element is defined', async () => {
    const el = await !!customElements.get("auro-menu");

    await expect(el).to.be.true;
  });
});
