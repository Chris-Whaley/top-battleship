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
    let board;
    let gameboard = this.turnIsPlayer
      ? this.player.gameboard
      : this.ai.gameboard;

    cells.forEach((square) => {
      square.addEventListener("click", () => {
        row = square.getAttribute("data-row");
        column = square.getAttribute("data-column");
        board = square.parentElement.id;
        console.log(square.parentElement.id);
        console.log(`[${row}, ${column}]`);
        this.evaluateAttack(row, column, gameboard);
      });
    });
  }

  evaluateAttack(row, column, gameboard) {
    let hitOrMiss;
    let ship;

    if (gameboard.board[row][column] !== null) {
      ship = gameboard.board[row][column];
      hitOrMiss = "hit";
    } else {
      hitOrMiss = "miss";
    }
    console.log(hitOrMiss);
  }
}
