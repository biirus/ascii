export const getFont = () => {
  const pre = document.createElement("pre");
  pre.style.display = "inline";
  pre.textContent = " ";

  document.body.appendChild(pre);
  const { width, height } = pre.getBoundingClientRect();
  document.body.removeChild(pre);

  return {
    width,
    height,
    ratio: width / height,
  };
};
