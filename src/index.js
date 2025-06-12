if (process.env.NODE_ENV !== "production") {
  console.log("Looks like we are in development mode!");
} else if (process.env.NODE_ENV == "production") {
  console.log("Actually, we ARE in production");
}

import Player from "./player.js";

// const player = new Player();
// const ai = new Player(false);

// console.log(player.gameboard);
// console.log(ai.gameboard);

export { Player };
