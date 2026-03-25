let cellsPerRow = 16;

const body = document.querySelector("body");
const grid = document.querySelector("#grid");

function fillGrid (cellsPerRow) {
    const cells = cellsPerRow ** 2;
    const cellSize = 100 / cellsPerRow;

    for (let i=0; i<cells; i++) {
        const square = document.createElement("div");
        square.classList.toggle("square");
        square.style.width = `${cellSize}%`;
        grid.appendChild(square);
    }
}

fillGrid(cellsPerRow);
body.appendChild(grid);