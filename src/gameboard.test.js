const { beforeEach, test } = require("jest-circus");
import expect from "expect";
import Gameboard from "./gameboard";

it("We can check if the player called the class constructor", () => {
  const gameboard = new Gameboard();
  expect(gameboard).toBeTruthy;
});

it("We can check if the player called a method on the class instance", () => {
  const gameboard = new Gameboard();
  expect(gameboard.createBoard()).not.toBeUndefined();
});

it("The player should be able to position a new ship on the board", () => {
  const gameboard = new Gameboard();
  expect(
    gameboard.positionShip(0, 0, "horizontal", "patrolboat")
  ).toContainEqual([0, 0]);
});

it("The game should throw an error when a player tries to place a ship in a spot where there is already another ship", () => {
  const gameboard = new Gameboard();
  gameboard.positionShip(0, 0, "horizontal", "patrolboat");
  expect(() => {
    gameboard.positionShip(0, 1, "horizontal", "carrier");
  }).toThrow();
});

it("The game should throw an error when a player tries to place a ship that extends past the gameboard edge", () => {
  const gameboard = new Gameboard();
  expect(() => {
    gameboard.positionShip(0, 9, "horizontal", "patrolboat");
  }).toThrow();
});
