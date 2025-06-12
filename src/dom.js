const SQUARES_PER_ROW = 10;
function createBoards(boardElement, boardType) {
  boardElement.classList.add("gameboard");
  boardElement.setAttribute("id", `${boardType}Gameboard`);
  document.body.appendChild(boardElement);

  createSquares(boardElement);
}

function createSquares(board) {
  // create row (outer loop), and boxes (inner loop)
  for (let row = 0; row < SQUARES_PER_ROW; row++) {
    for (let j = 0; j < SQUARES_PER_ROW; j++) {
      const square = document.createElement("div");
      square.classList.add("cell");
      square.setAttribute("data-row", `${row}`);
      square.setAttribute("data-column", `${j}`);
      board.appendChild(square);
    }
  }
}

export { createBoards, createSquares };
