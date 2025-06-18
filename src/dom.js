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

function recordAttack(row, column, board, hitOrMiss) {
  const cell = document.querySelector(
    `#${board} > div[data-row="${row}"][data-column="${column}"]`
  );

  // use so we can't select this square again
  cell.removeAttribute("class", "cell");
  cell.setAttribute("class", "cell-occupied");

  if (hitOrMiss == "hit") {
    cell.style.setProperty("background-color", "blue");
  } else if (hitOrMiss == "miss") {
    cell.style.setProperty("background-color", "red");
  }
}

function createModal(winner, winnerNumberOfMoves, loserNumberOfMoves) {
  const modal = document.createElement("div");
  const modalContent = document.createElement("div");
  const newGameButton = document.createElement("button");

  modal.setAttribute("id", "myModal");
  modal.classList.add("modal");
  modalContent.classList.add("modal-content");
  newGameButton.setAttribute("id", "new-game");

  document.body.appendChild(modal);
  modal.appendChild(modalContent);
  modalContent.appendChild(newGameButton);

  modal.style.display = "block";

  newGameButton.onclick = function () {
    modal.style.display = "none";
    location.reload();
  };
}

export {
  createDOMLayout,
  createSquares,
  createShips,
  recordAttack,
  createModal,
};
