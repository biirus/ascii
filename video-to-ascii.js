import { clampDimensions } from "./lib/dimensions.js";
import { getAsciiText } from "./lib/text.js";

const run = async () => {
  const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: true,
  });

  const video = document.querySelector("video");
  const output = document.querySelector("#output");

  video.srcObject = mediaStream;
  await new Promise((r) => (video.onloadedmetadata = r));

  video.width = video.videoWidth;
  video.height = video.videoHeight;

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  const [width, height] = clampDimensions(video.width, video.height);

  canvas.width = width;
  canvas.height = height;

  requestAnimationFrame(function loop() {
    ctx.drawImage(video, 0, 0, width, height);
    const data = ctx.getImageData(0, 0, width, height).data;

    output.textContent = getAsciiText(data, width);
    requestAnimationFrame(loop);
  });
};

run();
