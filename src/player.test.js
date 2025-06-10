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
  expect(
    player.gameboard.positionShip(0, 0, "horizontal", "patrolboat")
  ).toContainEqual([0, 0]);
});
