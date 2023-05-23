export function auroMenuResetExample() {
  const resetExampleBtnElem = document.querySelector('#resetExampleBtn');
  const resetExampleElem = document.querySelector('#resetExample');

  if (resetExampleElem && resetExampleBtnElem) {
    resetExampleBtnElem.addEventListener('click', () => {
      resetExampleElem.value = undefined;
    })
  }
}
