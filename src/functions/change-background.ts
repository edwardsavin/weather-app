// Change the background image of the body tag depending on the icon code
function changeBodyBackground(icon: string) {
  const body = document.querySelector("body");

  if (icon[2] === "d") {
    body.style.backgroundImage = `url(../src/imgs/background-images/day/${icon}.gif)`;
  } else {
    body.style.backgroundImage = `url(../src/imgs/background-images/night/${icon}.gif)`;
  }
}

export default changeBodyBackground;
