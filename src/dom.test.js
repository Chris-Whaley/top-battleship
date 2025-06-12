const { beforeEach, test } = require("jest-circus");
import expect from "expect";
import { createSquares } from "./dom.js";

it("We can check if the player called the class constructor", () => {
  expect(createSquares("player")).toBeTruthy();
});
