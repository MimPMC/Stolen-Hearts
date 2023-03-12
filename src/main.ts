import GameHandler from "./Gamehandler";

export { };

window.addEventListener("DOMContentLoaded", start);

const gameHandler = new GameHandler(["mainmenu", "library", "story", "chapter1"]);

function start() {
  gameHandler.renderActiveScene("mainmenu");
}