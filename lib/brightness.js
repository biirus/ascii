const average = (r, g, b) => {
  return (r + g + b) / 3;
};

const luminance = (r, g, b) => {
  return Math.sqrt(0.299 * r * r + 0.587 * g * g + 0.114 * b * b);
};

export const getBrightness = (r, g, b) => {
  return luminance(r, g, b);
};
