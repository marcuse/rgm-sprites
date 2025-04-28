export class AgonyOwl {
  x = -32;
  y = 0;
  f = 0;
  frames = [
    [0, 0, 32, 86],
    [32, 0, 32, 86],
    [64, 0, 32, 86],
    [96, 0, 32, 86],
    [128, 0, 32, 86],
    [160, 0, 32, 86],
    [192, 0, 32, 86],
    [224, 0, 32, 86],
    [0, 86, 32, 86],
    [32, 86, 32, 86],
    [64, 86, 32, 86],
    [96, 86, 32, 86],
    [128, 86, 32, 86],
    [160, 86, 32, 86],
    [192, 86, 32, 86],
  ];

  constructor(ctx, canvas) {
    this.ctx = ctx;
    this.canvas = canvas;

    this.sheet = new Image();
    this.sheet.src = "./sheets/owl.png";

    this.y = Math.random() * this.canvas.height - 86;
    this.dx = 1 + Math.random() * 2;
    this.freq = 5 + Math.random() * 10;
    this.amp = Math.random() * 50;
    this.count = 0;
  }

  tick = function () {
    this.count++;
    const offset = Math.sin(this.count / this.freq) * this.amp;

    const frame = this.frames[this.f];
    this.ctx.drawImage(
      this.sheet,
      frame[0],
      frame[1],
      frame[2],
      frame[3],
      this.x,
      this.y + offset,
      frame[2],
      frame[3]
    );

    this.f = (this.f + 1) % this.frames.length;
    this.x += this.dx;

    return this.x < this.canvas.width + 32;
  };
}
