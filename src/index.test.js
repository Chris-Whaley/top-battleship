const { beforeEach, test } = require("jest-circus");
import expect from "expect";
import { Player } from "./index.js";
import { createBoards, createSquares } from "./dom.js";

it("We can check if the player called the class constructor", () => {
  const player = new Player();
  expect(player).toBeTruthy();
});

it("We can check if the player created a gameboard", () => {
  const player = new Player();
  expect(player.gameboard).toBeTruthy();
});

it("We can check if the ai created a gameboard", () => {
  const player = new Player(false);
  expect(player.gameboard).toBeTruthy();
});

it("We can check if the ai gameboard is filled in", () => {
  const player = new Player(false);
  expect(player.gameboard.unplacedShips.length).toBe(0);
});

it("We can check if the player called the class constructor", () => {
  const playerGameboard = document.createElement("div");
  expect(createBoards(playerGameboard, "player")).toBeTruthy();
});
