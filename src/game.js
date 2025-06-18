import { recordAttack, createModal } from "./dom.js";

export default class PlayGame {
  constructor(player, ai) {
    this.player = player;
    this.ai = ai;
    this.turnIsPlayer = true;
  }

  turn() {
    if (this.turnIsPlayer) {
      this.playerChoice();
    } else {
      this.aiChoice();
    }
  }

  playerChoice() {
    const cells = document.querySelectorAll("#aiGameboard > .cell");
    let row;
    let column;
    let boardHTML;

    cells.forEach((square) => {
      square.addEventListener("click", () => {
        row = square.getAttribute("data-row");
        column = square.getAttribute("data-column");
        boardHTML = square.parentElement.id;
        this.evaluateAttack(row, column, this.ai, boardHTML);
      });
    });
  }

  aiChoice() {
    let row = Math.floor(Math.random() * 10);
    let column = Math.floor(Math.random() * 10);
    const board = this.player;
    const boardHTML = "playerGameboard";

    while (board.gameboard.squaresSelected.has(`${row}-${column}`)) {
      row = Math.floor(Math.random() * 10);
      column = Math.floor(Math.random() * 10);
    }

    this.evaluateAttack(row, column, board, boardHTML);
  }

  evaluateAttack(row, column, gameboardAttacked, boardHTML) {
    let hitOrMiss;
    let ship;

    // elinate ability to click squares more than once
    if (gameboardAttacked.gameboard.squaresSelected.has(`${row}-${column}`)) {
      return false;
    } else {
      gameboardAttacked.gameboard.squaresSelected.add(`${row}-${column}`);
    }

    if (gameboardAttacked.gameboard.board[row][column] !== null) {
      ship = gameboardAttacked.gameboard.board[row][column];
      hitOrMiss = "hit";
    } else {
      hitOrMiss = "miss";
    }

    if (hitOrMiss == "hit") {
      const shipHit = gameboardAttacked.gameboard.positions[ship];
      shipHit.hit();
      // are all ships sunk?
      if (shipHit.isSunk()) {
        console.log(`${shipHit.shipType} is sunk!`);
        gameboardAttacked.gameboard.sunkShips.add(shipHit.shipType);
      }
    }

    // // DOM events
    recordAttack(row, column, boardHTML, hitOrMiss);

    // switch turns unless player or AI wins
    if (gameboardAttacked.gameboard.sunkShips.size == 5) {
      this.endGame();
    } else {
      this.turnIsPlayer = !this.turnIsPlayer;
      this.turn();
    }
  }

  endGame() {
    const winner = this.turnIsPlayer ? "Player" : "AI";
    const winnerClass = this.turnIsPlayer ? this.player : this.ai;
    const winnerNumberOfMoves = winnerClass.gameboard.squaresSelected.size;
    const loserClass = this.turnIsPlayer ? this.ai : this.player;
    const loserNumberOfMoves = loserClass.gameboard.squaresSelected.size;
    console.log(`${winner} WINS!`);
    createModal(winner, winnerNumberOfMoves, loserNumberOfMoves);
  }
}
