// Get canvas and set properties
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineWidth = 1;
ctx.strokeStyle = 'hsl(0, 100%, 50%)';
ctx.lineCap = 'round';

// Drawing
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let direction = true;
let hue = 0;

const changeLineWidth = () => {
  if (direction) {
    ctx.lineWidth += 1;
  } else if (!direction) {
    ctx.lineWidth -= 1;
  }

  if (ctx.lineWidth >= 80 || ctx.lineWidth <= 1) {
    direction = !direction;
  }
};

const changeHue = () => {
  if (hue >= 360) {
    hue = 0;
  } else {
    hue += 1;
  }

  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
};

const draw = (e) => {
  if (isDrawing) {
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    changeLineWidth();
    changeHue();
  }
};

// Listen
canvas.addEventListener('mousedown', (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => {
  isDrawing = false;
});
canvas.addEventListener('mouseout', () => {
  isDrawing = false;
});
canvas.addEventListener('mousemove', draw);
