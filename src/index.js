if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
} else if (process.env.NODE_ENV == "production") {
  console.log("Actually, we ARE in production");
}

import "./style.css";
import Player from "./player.js";
import PlayGame from "./game.js";
import {
  createDOMLayout,
  createShips,
  createSquares,
  createInitializeModal,
} from "./dom.js";
import Ship from "./ship.js";

// Set up html containers
createDOMLayout();
createInitializeModal();

// Feed each html gameboard into a function to create the grid
const playerGameboard = document.getElementById("playerGameboard");
const aiGameboard = document.getElementById("aiGameboard");
createSquares(playerGameboard);
createSquares(aiGameboard);

const carrier = new Ship("carrier");
createShips(carrier.shipType, carrier.length);

const modal = document.getElementById("welcome-modal");
const modalForm = document.getElementById("modal-form");
const inputName = document.getElementById("username");

// Start game
modalForm.addEventListener("submit", (event) => {
  event.preventDefault();
  localStorage.setItem("username", inputName.value);
  const playerName = localStorage.getItem("username");

  const player = new Player(playerName, false);
  const ai = new Player(null, false);

  // Create and start game
  const game = new PlayGame(player, ai);
  game.turn();
  modal.style.display = "none";
});

// TODO: make AI guess more accurate when it hits a ship

// TODO: create draggable ships
