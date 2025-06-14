if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
} else if (process.env.NODE_ENV == "production") {
  console.log("Actually, we ARE in production");
}

import "./style.css";
import Ship from "./ship.js";
import Player from "./player.js";
import {
  createDOMLayout,
  createSquares,
  createShips,
  attackEvent,
} from "./dom.js";

createDOMLayout();

const playerGameboard = document.getElementById("playerGameboard");
const aiGameboard = document.getElementById("aiGameboard");

createSquares(playerGameboard);
createSquares(aiGameboard);
attackEvent();

const player = new Player(false);
const ai = new Player(false);

// const carrier = document.createElement("div");
// const battleship = document.createElement("div");
// const destroyer = document.createElement("div");
// const submarine = document.createElement("div");
// const patrolboat = document.createElement("div");

// const carrierShip = createShips("carrier", 5);
// Player ships
const carrierPlayer = new Ship("carrier");
const battlePlayer = new Ship("battleship");
const destroyerPlayer = new Ship("destroyer");
const submarinePlayer = new Ship("submarine");
const patrolboatPlayer = new Ship("patrolboat");
// AI ships
const carrierAI = new Ship("carrier");
const battleAI = new Ship("battleship");
const destroyerAI = new Ship("destroyer");
const submarineAI = new Ship("submarine");
const patrolboatAI = new Ship("patrolboat");

// createShips(carrierPlayer.shipType, carrierPlayer.length);
// createShips(battlePlayer.shipType, battlePlayer.length);
// createShips(destroyerPlayer.shipType, destroyerPlayer.length);
// createShips(submarinePlayer.shipType, submarinePlayer.length);
// createShips(patrolboatPlayer.shipType, patrolboatPlayer.length);

console.log(player.gameboard);
export { Player, createSquares };
