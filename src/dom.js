const SQUARES_PER_ROW = 10;

function createDOMLayout() {
  const header = document.createElement("div");
  const content = document.createElement("div");
  const playerGameboard = document.createElement("div");
  const aiGameboard = document.createElement("div");
  const shipyard = document.createElement("div");

  // assign classes
  header.classList.add("header");
  content.classList.add("content");
  playerGameboard.classList.add("gameboard");
  playerGameboard.setAttribute("id", "playerGameboard");
  aiGameboard.classList.add("gameboard");
  aiGameboard.setAttribute("id", "aiGameboard");
  shipyard.setAttribute("id", "shipyard");

  // set DOM structure
  document.body.appendChild(header);
  document.body.appendChild(content);
  content.appendChild(playerGameboard);
  content.appendChild(shipyard);
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

function createShips(shipType, shipLength) {
  const shipyard = document.getElementById("shipyard");
  const ship = document.createElement("div");

  ship.setAttribute("id", `${shipType}`);
  ship.classList.add("ship");
  ship.setAttribute("draggable", "true");

  // dock all ships in shipyard
  for (let index = 0; index < shipLength; index++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    ship.appendChild(cell);
  }
  shipyard.appendChild(ship);
}

function attackEvent() {
  const cells = document.querySelectorAll(".cell");
  let row;
  let column;
  let board;
  cells.forEach((square) => {
    square.addEventListener("click", () => {
      row = square.getAttribute("data-row");
      column = square.getAttribute("data-column");
      board = square.parentElement.id;
      console.log(square.parentElement.id);
      console.log(`[${row}, ${column}]`);
    });
  });
}

export { createDOMLayout, createSquares, createShips, attackEvent };
