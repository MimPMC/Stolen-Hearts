import { background } from "./data/data";
import { gameHandler } from "./main";

export function createMenu() {
  // Create menu div
  const mainMenuDiv = document.createElement("div");
  mainMenuDiv.classList.add("mainmenu");

  // Create title h1
  const title = document.createElement("img");
  title.classList.add("titleImg")
  title.src = "/assets/ui/gametitle.png";

  // Create button container div
  const buttonContainer = document.createElement("div");

  // Create continue button
  const startbutton = document.createElement("button");
  startbutton.classList.add("menu-button");
  startbutton.textContent = "Start game";

   // Create main menu button
   const storyButton = document.createElement("button");
   storyButton.classList.add("menu-button");
   storyButton.textContent = "Story";

  // Create settings button
  const settingsButton = document.createElement("button");
  settingsButton.classList.add("menu-button");
  settingsButton.textContent = "Settings";

  // Append elements to their parent containers
  buttonContainer.append(startbutton, settingsButton, storyButton);
  background.append(title)
  mainMenuDiv.append(buttonContainer);

  startbutton.addEventListener("click", () => {
    gameHandler.renderActiveScene("chapter1")
  });

  return mainMenuDiv;
}
