import { AgonyOwl } from "./AgonyOwl.js";
import { Hercules } from "./Hercules.js";
import { Arbron } from "./Arbron.js";

let sprites = [];

const allSprites = [AgonyOwl, Hercules, Arbron];

function init() {
  const display = document.getElementById("display");
  const ctx = display.getContext("2d");
  ctx.globalCompositeOperation = "lighten";

  setInterval(() => {
    const pick = allSprites[Math.floor(Math.random() * allSprites.length)];
    const s = new pick(ctx, display);
    sprites.push(s);
  }, 5000);

  setInterval(tick, 32);
}

function tick() {
  const display = document.getElementById("display");
  const ctx = display.getContext("2d");
  ctx.clearRect(0, 0, 800, 600);

  const nextSprites = [];
  sprites.forEach((s) => {
    if (s.tick()) nextSprites.push(s);
  });
  sprites = nextSprites;
  document.getElementById("numSprites").innerText = sprites.length;
}

init();
