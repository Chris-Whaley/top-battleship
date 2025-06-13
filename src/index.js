if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
} else if (process.env.NODE_ENV == "production") {
  console.log("Actually, we ARE in production");
}

import "./style.css";
import Player from "./player.js";
import { createDOMLayout, createSquares, listeners } from "./dom.js";

createDOMLayout();

const playerGameboard = document.getElementById("playerGameboard");
const aiGameboard = document.getElementById("aiGameboard");

createSquares(playerGameboard);
createSquares(aiGameboard);
listeners();

const player = new Player();
const ai = new Player(false);

export { Player, createSquares };
