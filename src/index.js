if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
} else if (process.env.NODE_ENV == "production") {
  console.log("Actually, we ARE in production");
}

import Player from "./player.js";
import { createBoards, createSquares } from "./dom.js";

const playerGameboard = document.createElement("div");
const aiGameboard = document.createElement("div");

createBoards(playerGameboard, "player");
createBoards(aiGameboard, "ai");

const player = new Player();
const ai = new Player(false);

export { Player, createSquares };
