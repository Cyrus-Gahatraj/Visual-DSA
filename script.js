import AddRectToCanvas from "./javaScript/canvas.js";
import { addOnBox, updateCount } from "./javaScript/buttonFunction.js";

const done = document.querySelector(".b2");
const inputBox = document.querySelector("#input-on-box");

done.addEventListener("click", addOnBox);
inputBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addOnBox();
  }
});

const count = document.querySelector("#count1");
count.addEventListener("keypress", (event) => {
  if (event.key === "Enter" && count.value && count.value > 0) {
    updateCount(count.value);
  }
});
const countBtn = document.querySelector("#update-count");
countBtn.addEventListener("click", () => {
  if (count.value && count.value > 0) {
    updateCount(count.value);
  }
});
const arrayBtn = document.getElementById("array");
arrayBtn.addEventListener("click", () => {
  document.querySelector(".hidden").classList.toggle("hidden");
  AddRectToCanvas();
});
