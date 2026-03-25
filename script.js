let cellsPerRow = 16;

const body = document.querySelector("body");
const grid = document.querySelector("#grid");
const btn = document.querySelector("#ask");

fillGrid(cellsPerRow);
btn.addEventListener("click", changeGridSize);
let cells = document.querySelectorAll(".cell");
changeColorOnHover(cells);

function fillGrid (cellsPerRow) {
    let cellsNumber = cellsPerRow ** 2;
    let cellSize = 100 / cellsPerRow;

    for (let i=0; i<cellsNumber; i++) {
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

function clearGrid () {
    const numberOfCells = cells.length;
    for (i=0; i<numberOfCells; i++) {
        grid.removeChild(grid.firstChild)
    }
}

function changeGridSize () {
    clearGrid(grid, cells);
    while (true) {
        cellsPerRow = parseInt(prompt("Cells per row: "));
        if (cellsPerRow <= 100) {
            break
        }
    }
    fillGrid(cellsPerRow);
    cells = document.querySelectorAll(".cell");
    changeColorOnHover(cells);
}

