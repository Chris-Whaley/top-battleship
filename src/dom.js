const SQUARES_PER_ROW = 10;

function createDOMLayout() {
  const header = document.createElement("div");
  const content = document.createElement("div");
  const playerGameboard = document.createElement("div");
  const aiGameboard = document.createElement("div");

  // assign classes
  header.classList.add("header");
  content.classList.add("content");
  playerGameboard.classList.add("gameboard");
  playerGameboard.setAttribute("id", "playerGameboard");
  aiGameboard.classList.add("gameboard");
  aiGameboard.setAttribute("id", "aiGameboard");

  // set DOM structure
  document.body.appendChild(header);
  document.body.appendChild(content);
  content.appendChild(playerGameboard);
  content.appendChild(aiGameboard);
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

export { createDOMLayout, createSquares };
