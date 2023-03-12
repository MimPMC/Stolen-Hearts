import { background, imageSources } from "./data";
import GameButton from "./GameButton";
import { gameHandler } from "./main";
import TextBubble from "./TextBubble";

export function playMainMenuScene() {
  const app: HTMLBodyElement | null = document.querySelector(
    "#app"
  ) as HTMLBodyElement;

  if (imageSources.city) {
    background.style.backgroundImage = `url(${imageSources.pinkRoom})`;
    app?.appendChild(background);
    background.className = "background";
  }

  const button = new GameButton({x:10,y:40}, {x:10,y:20}, "I want two points!", "standard-button")
  button.draw(background, addTwoPoints)

  function addTwoPoints(){
    gameHandler.setPoints("+", 2)
    console.log(`current points: ${gameHandler.getPoints()}`)
  }

  const eliasBubble = new TextBubble({x:20,y:20},{x:20,y:20},"text-bubble", "Whats's up?","Elias")
  eliasBubble.draw(background)
  eliasBubble.updateText("NewText")
  
  

  
}
