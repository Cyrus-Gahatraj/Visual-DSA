import AddRectToCanvas from "./canvas.js";
import { setInitialCount } from "./initialCount.js";

const addOnBox = () => {
  let input = document.querySelector("#input-on-box").value;
  if (input == "") {
    return;
  }
  document.querySelector("#input-on-box").value = "";
  document.querySelector(".box").innerText = input;
};

const updateCount = (num) => {
  setInitialCount(num);
  let str = "Update Initial count: " + num;
  document.querySelector("#update-count").innerText = str;
  AddRectToCanvas();
};

export { addOnBox, updateCount };
