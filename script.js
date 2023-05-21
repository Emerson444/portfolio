let btnlight = document.getElementById("btn-ligth");
let btndark = document.getElementById("btn-dark");
let container = document.getElementById("container");

function temalight() {
  container.classList.add("light");
  container.classList.remove("dark");
}

function temadark() {
  container.classList.add("dark");
  container.classList.remove("light");
}

btnlight.addEventListener("click", temalight);
btndark.addEventListener("click", temadark);
