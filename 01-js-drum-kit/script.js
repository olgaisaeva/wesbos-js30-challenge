const removeTransition = (e) => {
  if (e.propertyName !== 'transform') return; // skip it if it's not a transition
  e.target.classList.remove('pressed');
};

const playSound = (keyCode) => {
  const audio = document.querySelector(`audio[data-key="${keyCode}"]`); // get audio tag
  if (!audio) return; // stop the function from running
  audio.currentTime = 0; // rewind to the start
  audio.play();
};

const animatePressed = (keyCode) => {
  const currentKey = document.querySelector(`div[data-key="${keyCode}"]`);
  if (!currentKey) return; // stop the function from running
  currentKey.classList.add('pressed');
  currentKey.addEventListener('transitionend', removeTransition);
};

window.addEventListener('keydown', (e) => {
  animatePressed(e.keyCode);
  playSound(e.keyCode);
});
