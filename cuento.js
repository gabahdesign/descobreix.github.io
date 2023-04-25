const container = document.querySelector(".container");
const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const textBox = document.querySelector(".text-box");

openBtn.addEventListener("click", function() {
  textBox.style.opacity = "1";
  textBox.style.visibility = "visible";
});

closeBtn.addEventListener("click", function() {
  textBox.style.opacity = "0";
  textBox.style.visibility = "hidden";
});
