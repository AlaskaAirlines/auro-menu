export function auroMenuCustomEventExample() {
  let menuCustomEventEl = document.querySelector('auro-menu#customEvent');

  if (menuCustomEventEl) {
    menuCustomEventEl.addEventListener('mycustomevent', () => {
      console.warn('My Custom Event Fired');
      alert(`My Custom Event Fired`);
    });
  }
}
