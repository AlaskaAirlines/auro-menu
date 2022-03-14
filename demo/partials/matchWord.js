let matchWordInput;
let matchWordMenu;

function matchWords() {
  matchWordInput = document.querySelector('#matchWordInput');
  matchWordMenu = document.querySelector('#matchWordMenu');

  matchWordInput.addEventListener('keyup', updateMatch);
}

function updateMatch() {
  matchWordMenu.matchWord = matchWordInput.value;
}
