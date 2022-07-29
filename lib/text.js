import { getSymbol } from "./ascii.js";
import { asciiScale } from "./scale.js";
import { getBrightness } from "./brightness.js";

export const getAsciiText = (data, width) => {
  let text = "";

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i + 0];
    const g = data[i + 1];
    const b = data[i + 2];

    const brightness = getBrightness(r, g, b);
    const idx = asciiScale(brightness);
    const symbol = getSymbol(idx);

    text += symbol;

    if ((i / 4 + 1) % width === 0) {
      text += "\n";
    }
  }

  return text;
};
