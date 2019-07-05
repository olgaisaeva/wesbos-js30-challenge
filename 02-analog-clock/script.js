const secondsHand = document.querySelector('.seconds');
const minutesHand = document.querySelector('.minutes');
const hoursHand = document.querySelector('.hours');

// 1 sec = 6 deg | 1 min = 6 deg | 1 hour = 30 deg
// 1 sec = 1/60 min | 1 min = 1/60 hour

const setDate = () => {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsInDegrees = seconds * 6;
  secondsHand.style.transform = `rotate(${secondsInDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesWithSeconds = minutes + seconds / 60;
  const minutesInDegrees = minutesWithSeconds * 6;
  minutesHand.style.transform = `rotate(${minutesInDegrees}deg)`;

  const hours = now.getHours();
  const hoursWithMinutes = hours + minutes / 60;
  const hoursInDegrees = hoursWithMinutes * 30;
  hoursHand.style.transform = `rotate(${hoursInDegrees}deg)`;
};

setInterval(setDate, 1000);

setDate();
