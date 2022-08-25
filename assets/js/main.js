import { app } from "./firebase/app.js";
import { subscribeToHellfireClub } from "./firebase/subscription.js";

const txtName = document.getElementById("txtName");
const txtEmail = document.getElementById("txtEmail");
const txtLevel = document.getElementById("txtLevel");
const txtCharacter = document.getElementById("txtCharacter");

const btnSubscribe = document.getElementById("btnSubscribe");
btnSubscribe.addEventListener("click", async () => {
  const subscription = {
    name: txtName.value,
    email: txtEmail.value,
    level: txtLevel.value,
    character: txtCharacter.value,
  };

  await subscribeToHellfireClub(subscription);
});

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
