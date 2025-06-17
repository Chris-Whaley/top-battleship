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
    const cells = document.querySelectorAll("#playerGameboard > .cell");
    let row;
    let column;
    let boardHTML;

    cells.forEach((square) => {
      square.addEventListener("click", () => {
        row = square.getAttribute("data-row");
        column = square.getAttribute("data-column");
        boardHTML = square.parentElement.id;
        this.attackEvent(row, column, this.player, boardHTML);
      });
    });
  }

  attackEvent(row, column, gameboardTurn, boardHTML) {
    if (this.turnIsPlayer) {
      this.evaluateAttack(row, column, gameboardTurn, boardHTML);
    } else {
      this.aiChoice();
    }
    return;
  }

  aiChoice() {
    const row = Math.floor(Math.random() * 10);
    const column = Math.floor(Math.random() * 10);
    const turn = this.ai;
    const boardHTML = "aiGameboard";

    if (this.evaluateAttack(row, column, turn, boardHTML) == false) {
      this.aiChoice();
    } else {
      this.evaluateAttack(row, column, turn, boardHTML);
    }
    return;
  }

  evaluateAttack(row, column, turn, boardHTML) {
    let hitOrMiss;
    let ship;

    // elinate ability to click squares more than once
    if (turn.gameboard.squaresSelected.has(`${row}-${column}`)) {
      return false;
    } else {
      turn.gameboard.squaresSelected.add(`${row}-${column}`);
    }

    if (turn.gameboard.board[row][column] !== null) {
      ship = turn.gameboard.board[row][column];
      hitOrMiss = "hit";
    } else {
      hitOrMiss = "miss";
    }

    if (hitOrMiss == "hit") {
      const shipHit = turn.gameboard.positions[ship];
      shipHit.hit();
      console.log(shipHit);
      // are all ships sunk?
      if (shipHit.isSunk()) {
        console.log(`${shipHit.shipType} is sunk!`);
        turn.gameboard.sunkShips.add(shipHit.shipType);
      }
    }

    // // DOM events
    recordAttack(row, column, boardHTML, hitOrMiss);

    // switch turns unless player or AI wins
    if (turn.gameboard.sunkShips.size == 5) {
      this.endGame();
    } else {
      this.turnIsPlayer = !this.turnIsPlayer;
      this.turn();
    }
  }

  endGame() {
    const winner = this.player ? "Player" : "AI";
    console.log(`${winner} WINS!`);
    createModal(winner);
  }
}
