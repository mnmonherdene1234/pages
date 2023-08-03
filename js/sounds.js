const tapSound = new Audio("/sounds/tap.mp3");
const clickSound = new Audio("/sounds/click.mp3");

const buttons = document.getElementsByTagName("button");

for (const button of buttons) {
  button.addEventListener("click", () => {
    const audio = new Audio(clickSound.src);
    audio.play();
  });
}
