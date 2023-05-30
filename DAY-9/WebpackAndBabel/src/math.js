class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  printPoint() {
    console.log(`[X=${this.x},Y=${this.y}]`);
  }
}

const Square = x => x * x;

const PI = 3.14;

module.exports.Point = Point;
module.exports.Square = Square;
module.exports.PI = PI;
