import Gameboard from "./gameboard.js";

export default class Player {
  constructor(realPlayer = true) {
    this.realPlayer = realPlayer;
    this.gameboard = new Gameboard();
    this.createAiBoard();
  }

  createAiBoard() {
    if (this.realPlayer == false) {
      this.gameboard.aiPositionShip();
    }
  }
}
