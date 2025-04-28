export class Arbron {
  x = 0;
  y = 0;
  f = 0;

  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;

    this.sheet = new Image();
    this.sheet.src = "./sheets/beast_arbron.png";

    const w = 32;
    const h = 52;
    this.walkFrames = [
      [0, 0, w, h],
      [w * 1, 0, w, h],
      [w * 2, 0, w, h],
      [w * 3, 0, w, h],
      [w * 4, 0, w, h],
      [w * 5, 0, w, h],
    ];

    this.y = this.canvas.height - 52;
    this.dx = 1.8;
    this.x = -w;
    this.count = 0;
  }

  tick = function () {
    this.count++;

    const frame = this.walkFrames[this.f];
    this.ctx.drawImage(
      this.sheet,
      frame[0],
      frame[1],
      frame[2],
      frame[3],
      this.x,
      this.y,
      frame[2],
      frame[3]
    );

    this.f = Math.floor(this.count / 3) % this.walkFrames.length;
    this.x += this.dx;

    return this.x < this.canvas.width + 40;
  };
}
