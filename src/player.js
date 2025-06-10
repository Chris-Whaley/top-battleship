import Gameboard from "./gameboard";

export default class Player {
  constructor(realPlayer = true) {
    this.realPlayer = realPlayer;
    this.gameboard = new Gameboard();
  }
}
