function updateMatch() {
  let matchWordMenu = document.querySelector('#matchWordMenu');

  matchWordMenu.matchWord = matchWordInput.value;
}

export function auroMenuMatchWordExample() {
  let matchWordInput = document.querySelector('#matchWordInput');

  matchWordInput.addEventListener('keyup', updateMatch);
}
