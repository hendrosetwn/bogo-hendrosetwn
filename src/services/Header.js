let men = document.querySelector(".men");
let menDrop = document.querySelector(".mendrop");

let women = document.querySelector(".wom");
let womenDrop = document.querySelector(".womendrop");

men.onclick = function () {
  menDroping();
};

function menDroping() {
  menDrop.classList.toggle("active");
}

women.onclick = function () {
  womenDroping();
};

function womenDroping() {
  womenDrop.classList.toggle("active");
}
