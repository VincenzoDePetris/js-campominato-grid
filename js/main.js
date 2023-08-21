const button = document.getElementById("button");
const griglia = document.getElementById("main");

button.addEventListener("click", function () {
  generaGriglia();
});

function generaGriglia() {
  for (let i = 1; i <= 100; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.innerHTML = i;

    cell.addEventListener("click", function () {
      cell.classList.add("color");
      console.log("cella numero " + i);
    });

    griglia.append(cell);
  }
}
