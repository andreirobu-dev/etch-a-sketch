let cellsPerRow = 16;

const body = document.querySelector("body");
const grid = document.querySelector("#grid");

function fillGrid (cellsPerRow) {
    const cells = cellsPerRow ** 2;
    const cellSize = 100 / cellsPerRow;

    for (let i=0; i<cells; i++) {
        const cell = document.createElement("div");
        cell.classList.toggle("cell");
        cell.style.width = `${cellSize}%`;
        grid.appendChild(cell);
    }
}

function changeCellClass (event) {
    event.target.classList.toggle("cell");
    event.target.classList.toggle("cell-hover");
}

function changeColorOnHover (cells) {
    cells.forEach ((cell) => { 
        cell.addEventListener("mouseover", changeCellClass)
    })
}

fillGrid(cellsPerRow);
body.appendChild(grid);
const cells = document.querySelectorAll(".cell");
console.log(cells.length);
changeColorOnHover(cells);