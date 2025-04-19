let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let copyCode = document.querySelector(".code-div");

let rgb1 = "#00f";
let rgba2 = "#fff";

const hexValues = function () {
  let myHexValues = "0123456789abcdef";
  let colors = "#";
  for (let i = 0; i < 6; i++) {
    colors = colors + myHexValues[Math.floor(Math.random() * 16)];
  }
  return colors;
};

const handlebtn1 = () => {
  rgb1 = hexValues();
  btn1.innerText = rgb1;
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgba2})`;
  copyCode.innerHTML = `background-image: linear-gradient(to right,${rgb1}, ${rgba2})`;
};

const handlebtn2 = () => {
  rgba2 = hexValues();
  btn2.innerText = rgba2;
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgba2}, ${rgb1})`;
  copyCode.innerHTML = `background-image: linear-gradient(to right,${rgba2}, ${rgb1})`;
};

btn1.addEventListener("click", handlebtn1);
btn2.addEventListener("click", handlebtn2);

copyCode.addEventListener("click", () => {
    navigator.clipboard.writeText(copyCode.innerText);
});