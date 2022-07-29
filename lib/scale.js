import { ascii } from "./ascii.js";

const scale = (aSize, bSize) => (value) => {
  const position = value / aSize;
  const result = position * bSize;

  return Math.floor(result);
};

export const asciiScale = scale(255, ascii.length - 1);
