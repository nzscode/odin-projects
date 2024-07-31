let container = document.querySelector(".container");

function createGrid(num) {
    let squareSize = (600 - 2 * num) / num;
    let totalGrids = num * num;
    for (let i = 0; i < totalGrids; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        container.appendChild(square);
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
        let color = Math.floor(Math.random() * 16777215).toString(16);
        let opacity = "10";
        if (color != "ffffff") {
            square.addEventListener("mouseover", () => {
                square.style.backgroundColor = "#" + color;
                square.style.opacity = "50%";
            });
        }
    }
}

let newGrid = document.getElementById("reset");
newGrid.addEventListener("click", () => {
    window.location.reload();
});

window.addEventListener("load", (e) => {
    let gridSize = enterNumber();
    window.onload = createGrid(gridSize);
});

function enterNumber() {
    let result = prompt("please enter a number: ");
    return result;
}
