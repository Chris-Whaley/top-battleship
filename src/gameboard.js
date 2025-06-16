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
    this.squaresSelected = new Set();
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

  aiPositionShip() {
    while (this.unplacedShips.length > 0) {
      const randomRow = Math.floor(Math.random() * 10);
      const randomColumn = Math.floor(Math.random() * 10);
      const randomAxisChooser = Math.floor(Math.random() * 2);
      const randomAxis = randomAxisChooser == 1 ? "vertical" : "horizontal";
      try {
        this.positionShip(
          randomRow,
          randomColumn,
          randomAxis,
          this.unplacedShips[0]
        );
      } catch (error) {
        continue;
      }
    }
  }

  positionShip(row, column, axis, shipType) {
    let ship = new Ship(shipType);
    let position = [];

    // make sure we haven't already placed this ship
    if (this.placedShips.has(shipType)) {
      throw new Error("Ship has already been placed");
    }

    // make sure we can't place a ship in a square that already has another ship
    for (let index = 0; index < ship.length; index++) {
      if (axis == "horizontal" && this.board[row][column + index] !== null) {
        throw new Error("Ship already placed here");
      } else if (
        axis == "vertical" &&
        this.board[row + index][column] !== null
      ) {
        throw new Error("Ship already placed here");
      }
    }

    // can't place ship that extends past gameboard edge
    if (row + ship.length >= 10 && axis == "vertical") {
      throw new Error("Attempting to place ship off the gameboard");
    } else if (column + ship.length >= 10 && axis == "horizontal") {
      throw new Error("Attempting to place ship off the gameboard");
    }

    // if squares are empty, place ship horizontally or vertically
    for (let index = 0; index < ship.length; index++) {
      if (axis == "horizontal") {
        position.push([row, column + index]);
        this.board[row][column + index] = shipType;
      } else if (axis == "vertical") {
        position.push([row + index, column]);
        this.board[row + index][column] = shipType;
      }
    }

    this.unplacedShips = this.unplacedShips.filter((item) => item !== shipType);
    this.placedShips.add(shipType);
    ship.positions = position;
    this.positions[shipType] = ship;

    return true;
  }

  receiveAttack(row, column) {
    let ship;
    // is there a ship here
    if (this.board[row][column] !== null) {
      ship = this.board[row][column];
      this.positions[ship].hit();
      return this.positions[ship].sunk;
    } else {
      this.board[row][column] = "miss";
      return "miss";
    }

    // if so, what kind
    // add the hit to the class instance within this.positions
    // is it sunk?
  }
}

// const board = new Gameboard();
// // board.positionShip(0, 0, "horizontal", "patrolboat");
// // board.receiveAttack(4, 4);
// // board.receiveAttack(0, 0);
// // board.receiveAttack(0, 1);
// board.aiPositionShip();
