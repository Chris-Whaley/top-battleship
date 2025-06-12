// const playerGameboard = document.getElementById("playerGameboard");
// const aiGameboard = document.getElementById("aiGameboard");

function createBoards(board, boardType) {
  const bodyElement = document.body;
  board.classList("gameboard");
  board.setAttribute("id", `${boardType}Gameboard`);
  bodyElement.appendChild(board);
}

function createSquares(board) {
  const boardType = board == "player" ? playerGameboard : aiGameboard;

  // create row (outer loop), and boxes (inner loop)
  for (let index = 0; index < 10; index++) {
    const row = document.createElement("div");
    row.classList.add("row");
    row.setAttribute("id", `row-${index}`);
    boardType.appendChild(row);
  }

  return boardType;
}

export { createBoards, createSquares };
