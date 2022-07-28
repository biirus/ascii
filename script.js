const ascii = `$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/\|()1{}[]?-_+~<>i!lI;:,"^''. `;
// .split("")
// .reverse()
// .join("");

const scale = (aStart, aEnd, bStart, bEnd) => (value) => {
  const aSize = aEnd - aStart;
  const bSize = bEnd - bStart;

  const position = value / aSize;
  const result = position * bSize;

  return Math.floor(result);
};

const asciiScale = scale(0, ascii.length - 1, 0, 1);

const average = (r, g, b) => {
  return (r + g + b) / 3;
};

const luminance = (r, g, b) => {
  return Math.sqrt(0.299 * r * r + 0.587 * g * g + 0.114 * b * b);
};

const getBrightness = (r, g, b) => {
  return luminance(r, g, b);
};

const run = () => {
  const image = document.querySelector("#img");
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  canvas.width = image.width;
  canvas.height = image.height;

  ctx.drawImage(image, 0, 0, image.width, image.height);

  let string = "";

  for (let row = 0; row < image.height; row++) {
    for (let col = 0; col < image.width; col++) {
      const data = ctx.getImageData(col, row, 1, 1).data;
      const [r, g, b] = data;

      const brightness = getBrightness(r, g, b);
      const idx = asciiScale(brightness);
      const symbol = ascii[idx];

      string += symbol === " " ? "&nbsp;" : symbol;
    }

    string += "<br />";
  }

  document.body.innerHTML = string;
};

run();
