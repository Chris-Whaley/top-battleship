export default class Ship {
  constructor(shipType, hits = 0, sunk = false) {
    this.shipType = shipType;
    this.hits = hits;
    this.sunk = sunk;
    this.length = this.setLength(shipType);
  }

  hit() {
    this.hits += 1;
    this.isSunk();
  }

  isSunk() {
    if (this.hits == this.length) {
      this.sunk = true;
    }
    return this.sunk;
  }

  setLength(shipType) {
    let length = this.length;
    switch (shipType.toLowerCase()) {
      case "carrier":
        length = 5;
        break;
      case "battleship":
        length = 4;
        break;
      case "destroyer":
        length = 3;
        break;
      case "submarine":
        length = 3;
        break;
      case "patrolboat":
        length = 2;
        break;
      default:
        break;
    }

    return length;
  }
}
