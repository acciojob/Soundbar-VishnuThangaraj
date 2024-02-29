//your JS code here. If required.
const buttons = [...document.getElementsByClassName("btn")];

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id == "stop") {
      audio.pause();
      return;
    }
    let audio = new Audio(`./sounds/${button.id}.mp3`);
    audio.play();
  });
});
