if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
} else if (process.env.NODE_ENV == "production") {
  console.log("Actually, we ARE in production");
}

import "./style.css";
import Player from "./player.js";
import PlayGame from "./game.js";
import { createDOMLayout, createSquares } from "./dom.js";

// Set up html containers
createDOMLayout();

// Feed each html gameboard into a function to create the grid
const playerGameboard = document.getElementById("playerGameboard");
const aiGameboard = document.getElementById("aiGameboard");
createSquares(playerGameboard);
createSquares(aiGameboard);

// Create players
const player = new Player(false);
const ai = new Player(false);

// Create and start game
const game = new PlayGame(player, ai);
game.turn();
// console.log(game.player.gameboard);
// console.log(game.ai.gameboard);

// TODO: make AI guess more accurate when it hits a ship
// TODO: create modal for player to enter name
// TODO: create draggable ships
