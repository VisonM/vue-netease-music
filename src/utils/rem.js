const autoSize = () => {
  const clienWidth =
    document.documentElement.clientWidth || document.body.clientWidth;
  const htmlElem = document.getElementsByTagName("html")[0];
  htmlElem.style.fontSize = (clienWidth * 32) / 750 + "px";
};
autoSize();
window.addEventListener("resize", autoSize);
