const { beforeEach, test } = require("jest-circus");
import expect from "expect";
import Gameboard from "./gameboard";

it("We can check if the player called the class constructor", () => {
  const gameboard = new Gameboard();
  expect(gameboard).toBeTruthy;
});

it("We can check if the player called a method on the class instance", () => {
  const Gameboard = new Gameboard();
  expect(Gameboard.createBoard()).not.toBeUndefined();
});
