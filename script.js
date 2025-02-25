const done = document.querySelector(".b2");
const inputBox = document.querySelector("#input-on-box");

function addOnBox() {
  let input = document.querySelector("#input-on-box").value;
  if (input == "") {
    return;
  }
  document.querySelector("#input-on-box").value = "";
  document.querySelector(".box").innerText = input;
}

function AddRectToCanvas(initial_count) {
  c.clearRect(0, 0, 1300, canvas.height);
  let ic = initial_count;
  let y = 0;
  let maximum = 8 * 150;
  let k = parseInt(initial_count / 8) + 1;
  while (k > 0) {
    for (let i = 0; i < maximum; i = i + 160) {
      if (ic <= 0) break;
      c.fillStyle = "#8FD4CB";
      c.fillRect(30 + i, 50 + y, 150, 150);
      ic--;
    }
    y += 160;
    k -= 1;
  }
}

function updateCount(num) {
  initial_count = num;
  let str = "Update Initial count: " + num;
  document.querySelector("#update-count").innerText = str;
  AddRectToCanvas(initial_count);
}

done.addEventListener("click", addOnBox);
inputBox.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    addOnBox();
  }
});

const arrayBtn = document.getElementById("array");

const canvas = document.querySelector("canvas");
const scale = window.devicePixelRatio;
let c = canvas.getContext("2d");
canvas.width = canvas.clientWidth * scale;
canvas.height = canvas.clientHeight * scale;

let initial_count = 4;
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
arrayBtn.addEventListener("click", () => {
  document.querySelector(".hidden").classList.toggle("hidden");
  AddRectToCanvas(initial_count);
});
