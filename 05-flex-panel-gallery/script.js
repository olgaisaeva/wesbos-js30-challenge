const panels = document.querySelectorAll('.panel');

const toogleOpen = panel => panel.classList.toggle('open');

const toggleActive = (e) => {
  /* Safari transitionend event.propertyName === flex */
  /* Chrome + FF transitionend event.propertyName === flex-grow */
  if (e.propertyName.includes('flex')) {
    e.target.classList.toggle('open-active');
  }
};

panels.forEach(panel => panel.addEventListener('click', () => toogleOpen(panel)));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
