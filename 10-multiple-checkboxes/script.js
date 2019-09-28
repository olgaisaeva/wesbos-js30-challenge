/* eslint-disable no-param-reassign */
const checkboxes = document.querySelectorAll('.item input');

let lastChecked;
const handleClick = (e) => {
  let inBetween = false;
  if (e.shiftKey && e.target.checked) {
    checkboxes.forEach((checkbox) => {
      if ((checkbox.id === e.target.id) || (checkbox.id === lastChecked)) {
        inBetween = !inBetween;
      }
      if (inBetween) {
        checkbox.checked = true;
      }
    });
  }
  lastChecked = e.target.id;
};

checkboxes.forEach(checkbox => checkbox.addEventListener('click', e => handleClick(e)));
