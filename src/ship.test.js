const { beforeEach, test } = require("jest-circus");
import expect from "expect";
import Ship from "./ship";

it("The player should be able to call new() on Ship", () => {
  const ship = new Ship("carrier");
  // Ensure constructor created the object:
  expect(ship).toBeTruthy();
});

it("We can check if the ship has NOT sunk after just one hit", () => {
  const ship = new Ship("carrier");
  ship.hit();
  expect(ship.isSunk()).toBeFalsy();
});

it("We can check if the player correctly sunk a ship", () => {
  const ship = new Ship("patrolboat");
  ship.hit();
  expect(ship.isSunk()).toBeFalsy();
  ship.hit();
  expect(ship.isSunk()).toBeTruthy();
});

it("The player should be able to create a new ship of the correct length", () => {
  const ship = new Ship("patrolboat");
  expect(ship.setLength("patrolboat")).toBe(2);
});

it("The ship type (i.e., name) should return the correct value", () => {
  const ship = new Ship("patrolboat");
  expect(ship.shipType).toBe("patrolboat");
});
