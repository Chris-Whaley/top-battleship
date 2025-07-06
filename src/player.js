import Gameboard from "./gameboard.js";

export default class Player {
  constructor(playerName = null, realPlayer = true) {
    this.realPlayer = realPlayer;
    this.playerName = this.setPlayerName(playerName);
    this.gameboard = new Gameboard();
    this.createAiBoard();
  }

  createAiBoard() {
    if (this.realPlayer == false) {
      this.gameboard.aiPositionShip();
    }

    console.log(`in player class. player name is: ${this.playerName}`);
  }

  setPlayerName(playerName) {
    if (playerName != null) {
      return playerName;
    } else if (playerName == null && this.realPlayer) {
      return "Player";
    } else {
      return "AI";
    }
  }
}
