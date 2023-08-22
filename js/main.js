const button = document.getElementById("button");
const griglia = document.getElementById("main");
var select = document.getElementById("level");

button.addEventListener("click", function () {
  generaGriglia();
});

function generaGriglia() {
  for (let i = 1; i <= select.value; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerHTML = i;

    cell.addEventListener("click", function () {
      cell.classList.add("color");
      console.log("cella numero " + i);
    });

    griglia.append(cell);

    if (select.value == 49) {
      cell.classList.add("easy");
    } else if (select.value == 81) {
      cell.classList.add("medium");
    } else {
      cell.classList.add("hard");
    }
  }
}
