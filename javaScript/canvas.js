import { getInitialCount } from "./initialCount.js";

const canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");

// Added to make the canvas in higher-quality
const scale = window.devicePixelRatio;
canvas.width = canvas.clientWidth * scale;
canvas.height = canvas.clientHeight * scale;

const boxPerRow = 8;
const boxSize = 150;

const drawARectangle = (x, y) => {
  c.fillStyle = "#8FD4CB";
  c.fillRect(30 + x, 50 + y, 150, 150);
};

const AddRectToCanvas = () => {
  c.clearRect(0, 0, 1300, canvas.height);
  let count = getInitialCount();
  let y = 0;
  let maximum = boxPerRow * boxSize;
  let k = parseInt(count / boxPerRow) + 1;
  while (k > 0) {
    for (let i = 0; i < maximum; i = i + boxSize + 10) {
      if (count <= 0) break;
      drawARectangle(i, y);
      count--;
    }
    y += boxSize + 10;
    k -= 1;
  }
};

export default AddRectToCanvas;
