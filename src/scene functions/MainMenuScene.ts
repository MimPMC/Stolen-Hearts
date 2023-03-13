import { background, imageSources } from "../data/data";
import { createMainMenu } from "../mainmenu";


export function playMainMenuScene() {
    console.log("menu")
    const app: HTMLBodyElement | null = document.querySelector(
      "#app"
    ) as HTMLBodyElement;
  
    if (imageSources.city) {
      background.style.backgroundImage = `url(${imageSources.mainMenu})`;
      app?.appendChild(background);
      background.className = "background";
    }

    background.append(createMainMenu());

      

    
  }