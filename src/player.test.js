const { beforeEach, test } = require("jest-circus");
import expect from "expect";
import Player from "./player";

it("We can check if the player called the class constructor", () => {
  const player = new Player();
  expect(player).toBeTruthy;
});

it("We can check if the player has their own gameboard", () => {
  const player = new Player();
  expect(player.gameboard).toBeTruthy;
});

it("We can check if the player can place a ship", () => {
  const player = new Player();
  player.gameboard.positionShip(0, 0, "horizontal", "patrolboat");
  expect(player.gameboard.board[0][0]).toBe("patrolboat");
});

it("Player places ship, and respective ship is hit by opponent", () => {
  const player = new Player();
  player.gameboard.positionShip(0, 0, "horizontal", "patrolboat");
  player.gameboard.receiveAttack(0, 0);
  expect(player.gameboard.positions["patrolboat"].hits).toBe(1);
});

it("Player places ship, and respective ship is sunk by opponent", () => {
  const player = new Player();
  player.gameboard.positionShip(0, 0, "horizontal", "patrolboat");
  player.gameboard.receiveAttack(0, 0);
  player.gameboard.receiveAttack(0, 1);
  expect(player.gameboard.positions["patrolboat"].sunk).toBe(true);
});

it("Player places ship, and respective ship is missed by opponent", () => {
  const player = new Player();
  player.gameboard.positionShip(0, 0, "horizontal", "patrolboat");
  expect(player.gameboard.receiveAttack(4, 4)).toBe("miss");
});
