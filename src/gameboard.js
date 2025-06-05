import Ship from "./ship.js";

export default class Gameboard {
  constructor() {
    this.board = this.createBoard();
    // this.carrier = new Ship("carrier");
    // this.battleship = new Ship("battleship");
    // this.destroyer = new Ship("destroyer");
    // this.submarine = new Ship("submarine");
    // this.patrolboat = new Ship("patrolboat");
    this.unplacedShips = [
      "carrier",
      "battleship",
      "destroyer",
      "submarine",
      "patrolboat",
    ];
    this.placedShips = [];
  }

  createBoard() {
    // 10x10 squared board
    let board = new Array(10);

    // y-axis is board index, x-axis is the row array's index (ex: board[0][7] = y=0 and x=7; bottom row, right column; bottom-right corner square)
    for (let i = 0; i < board.length; i++) {
      let row = new Array(10).fill(null);
      for (let j = 0; j < board.length; j++) {
        board[i] = row;
      }
    }
    return board;
  }

  positionShip(row, column, axis, shipType) {
    let ship = new Ship(shipType);
    let board = this.board;

    for (let index = 0; index < ship.length; index++) {
      if (axis == "horizontal") {
        board[row][column + index] = shipType;
      } else if (axis == "vertical") {
        board[row + index][column] = shipType;
      }
    }
  }
}

const board = new Gameboard();
board.positionShip(0, 0, "horizontal", "patrolboat");
