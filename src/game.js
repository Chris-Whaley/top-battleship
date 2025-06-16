import {
  createDOMLayout,
  createSquares,
  createShips,
  recordAttack,
} from "./dom.js";

export default class PlayGame {
  constructor(player, ai) {
    this.player = player;
    this.ai = ai;
    this.turnIsPlayer = true;
  }

  playerChoice() {
    const cells = document.querySelectorAll("#playerGameboard > .cell");
    let row;
    let column;
    let boardHTML;
    let gameboardTurn = this.turnIsPlayer ? this.player : this.ai;

    cells.forEach((square) => {
      square.addEventListener("click", () => {
        row = square.getAttribute("data-row");
        column = square.getAttribute("data-column");
        boardHTML = square.parentElement.id;
        // console.log(square.parentElement.id);
        // console.log(square);
        console.log(`[${row}, ${column}]`);

        this.attackEvent(row, column, gameboardTurn, boardHTML);
        // square.removeEventListener("click", handler);
      });
    });
  }

  attackEvent(row, column, gameboardTurn, boardHTML) {
    console.log(this.player.gameboard);
    console.log(this.ai.gameboard);
    const cells = document.querySelectorAll("#playerGameboard > .cell");
    const cellOccupied = document.querySelectorAll(
      "playerGameboard > .cell-occupied"
    );
    // let row;
    // let column;
    // let boardHTML;
    // let gameboardTurn = this.turnIsPlayer ? this.player : this.ai;
    if (this.turnIsPlayer) {
      console.log("player turn");
      this.evaluateAttack(row, column, gameboardTurn, boardHTML);
    } else {
      console.log("ai turn");
      this.aiAttack();
    }
    // this.evaluateAttack(row, column, gameboardTurn, boardHTML);
  }

  aiAttack() {
    const row = Math.floor(Math.random() * 10);
    const column = Math.floor(Math.random() * 10);
    const turn = this.ai;
    const boardHTML = "aiGameboard";
    console.log("in aiAttack");
    if (this.evaluateAttack(row, column, turn, boardHTML) == false) {
      this.aiAttack();
    }
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
    console.log(hitOrMiss);

    if (hitOrMiss == "hit") {
      const shipHit = turn.gameboard.positions[ship];
      shipHit.hit();
      console.log(shipHit);
    }

    // DOM events
    recordAttack(row, column, boardHTML, hitOrMiss);

    // switch to AI
    this.turnIsPlayer = !this.turnIsPlayer;
    console.log(`this.turnIsPlayer = ${this.turnIsPlayer}`);
    return true;
  }
}
