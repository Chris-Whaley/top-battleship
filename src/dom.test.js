/**
 * @jest-environment jsdom
 */

const { beforeEach, test } = require("jest-circus");
import expect from "expect";
import { createSquares } from "./dom.js";

test("use jsdom in this test file", () => {
  const element = document.createElement("div");
  expect(element).not.toBeNull();
});

it("We can check if the player called the class constructor", () => {
  expect(createSquares("player")).toBeTruthy();
});
