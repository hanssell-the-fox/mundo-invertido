window.addEventListener("click", function () {
  const audio = document.getElementById("music");
  audio.play();
  audio.volume = 0.2;
});

function switchTheme() {
  const { body } = document;

  body.classList.toggle("dark-theme");
  body.classList.toggle("light-theme");

  const theme = body.classList[0];
  const music =
    theme === "light-theme" ? "normal-world.mpeg" : "inverted-world.mpeg";

  const audio = document.querySelector("#music");
  audio.setAttribute("src", `assets/sounds/${music}`);
  audio.play();
  audio.volume = 0.2;
}
