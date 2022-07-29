import { getFont } from "./font.js";

export const clampDimensions = (width, height) => {
  const font = getFont();

  const { innerWidth, innerHeight } = window;

  const screenRatio = innerWidth / innerHeight;
  const sourceRatio = width / height;
  const pixelRatio = font.ratio;

  const canvasWidth = Math.min(
    innerWidth < innerHeight ? innerWidth : innerHeight * sourceRatio,
    innerWidth
  );

  const canvasHeight = canvasWidth / sourceRatio;

  const pixelCols = Math.floor(canvasWidth / font.width);
  const pixelRows = Math.floor(canvasHeight / font.height);

  return [pixelCols, pixelRows];
};
