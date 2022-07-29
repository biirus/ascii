import { clampDimensions } from "./lib/dimensions.js";
import { getAsciiText } from "./lib/text.js";

const run = () => {
  const output = document.querySelector("#output");
  const image = document.querySelector("img");
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const [width, height] = clampDimensions(image.width, image.height);

  canvas.width = width;
  canvas.height = height;

  ctx.drawImage(image, 0, 0, width, height);
  const data = ctx.getImageData(0, 0, width, height).data;

  output.textContent = getAsciiText(data, width);
};

run();
