let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let copyCode = document.querySelector(".code-div");
const openBtn = document.getElementById("openPopup");
const popup = document.getElementById("popup");

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
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgba2}, ${rgb1})`;
  copyCode.innerHTML = `background-image: linear-gradient(to right,${rgba2}, ${rgb1})`;
};

const handlebtn2 = () => {
  rgba2 = hexValues();
  document.body.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgba2})`;
  copyCode.innerHTML = `background-image: linear-gradient(to right,${rgb1}, ${rgba2})`;
};

btn1.addEventListener("click", handlebtn1);
btn2.addEventListener("click", handlebtn2);

copyCode.addEventListener("click", () => {
  navigator.clipboard.writeText(copyCode.innerText);
});
// click paxi hover effect dina ko lagi
btn2.addEventListener("click", () => {
  btn2.classList.add("hover-enabled");
  setTimeout(() => {
    btn2.classList.remove("hover-enabled");
  }, 300);
});

// copy pupup btn

openBtn.addEventListener("click", function () {
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 1000);
});
