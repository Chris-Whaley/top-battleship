import Ship from "./ship.js";

export default class Gameboard {
  constructor() {
    this.board = this.createBoard();
    this.unplacedShips = [
      "carrier",
      "battleship",
      "destroyer",
      "submarine",
      "patrolboat",
    ];
    this.placedShips = new Set();
    this.positions = new Object();
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
    let position = [];

    // make sure we haven't already placed this ship
    if (this.placedShips.has(shipType)) {
      throw new Error("Ship has already been placed");
    }

    // make sure we can't place a ship in a square that already has another ship
    for (let index = 0; index < ship.length; index++) {
      if (axis == "horizontal" && board[row][column + index] !== null) {
        throw new Error("Ship already placed here");
      } else if (axis == "vertical" && board[row + index][column] !== null) {
        throw new Error("Ship already placed here");
      }
    }

    // can't place ship that extends past gameboard edge
    if (row + ship.length >= 10 || column + ship.length >= 10) {
      throw new Error("Attempting to place ship off the gameboard");
    }

    // if squares are empty, place ship horizontally or vertically
    for (let index = 0; index < ship.length; index++) {
      if (axis == "horizontal") {
        position.push([row, column + index]);
        board[row][column + index] = shipType;
      } else if (axis == "vertical") {
        position.push([row + index, column]);
        board[row + index][column] = shipType;
      }
    }

    this.unplacedShips.pop(shipType);
    this.placedShips.add(shipType);
    this.positions[shipType] = position;

    return position;
  }
}

// const board = new Gameboard();
// board.positionShip(1, 2, "horizontal", "patrolboat");
