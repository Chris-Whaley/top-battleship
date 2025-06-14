if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
} else if (process.env.NODE_ENV == "production") {
  console.log("Actually, we ARE in production");
}

import "./style.css";
import Player from "./player.js";
import {
  createDOMLayout,
  createSquares,
  createShips,
  listeners,
} from "./dom.js";

createDOMLayout();

const playerGameboard = document.getElementById("playerGameboard");
const aiGameboard = document.getElementById("aiGameboard");

createSquares(playerGameboard);
createSquares(aiGameboard);
listeners();

const player = new Player();
const ai = new Player(false);

// const carrier = document.createElement("div");
// const battleship = document.createElement("div");
// const destroyer = document.createElement("div");
// const submarine = document.createElement("div");
// const patrolboat = document.createElement("div");

const carrierShip = createShips("carrier", 5);

export { Player, createSquares };
