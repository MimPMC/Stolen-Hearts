import GameButton from "../classes/GameButton";
import { background, imageSources } from "../data/data";
import { gameHandler } from "../main";


export function playMainMenuScene() {
    console.log("menu")
    const app: HTMLBodyElement | null = document.querySelector(
      "#app"
    ) as HTMLBodyElement;
  
    if (imageSources.city) {
      background.style.backgroundImage = `url(${imageSources.pinkRoomDark})`;
      app?.appendChild(background);
      background.className = "background";
    }

    const startButton = new GameButton(
        { x: 45, y: 20 },
        { x: 10, y: 20 },
        "Start Game!",
        "menu-button"
      )
      startButton.draw(background, () => {
        while (background.firstChild) {
            background.removeChild(background.firstChild)
        }
        startButton.erase();
        gameHandler.renderActiveScene("chapter1")
      });
  }