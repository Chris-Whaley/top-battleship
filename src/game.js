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

  attackEvent() {
    console.log(this.player.gameboard);
    const cells = document.querySelectorAll(".cell");
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
        console.log(`[${row}, ${column}]`);
        this.evaluateAttack(row, column, gameboardTurn, boardHTML);
      });
    });
  }

  evaluateAttack(row, column, turn, boardHTML) {
    let hitOrMiss;
    let ship;

    if (turn.gameboard.board[row][column] !== null) {
      ship = turn.gameboard.board[row][column];
      hitOrMiss = "hit";
    } else {
      hitOrMiss = "miss";
    }
    console.log(hitOrMiss);

    // TODO elinate ability to click squares more than once
    if (hitOrMiss == "hit") {
      const shipHit = turn.gameboard.positions[ship];
      shipHit.hit();
      console.log(shipHit);
    }

    // DOM events
    recordAttack(row, column, boardHTML, hitOrMiss);
  }
}
