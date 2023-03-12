import Character from "../classes/Character";
import { background, eliasImages, imageSources } from "../data/data";
import GameButton from "../classes/GameButton";
import { gameHandler } from "../main";
import { createMenu } from "../Menu";
import TextBubble from "../classes/TextBubble";

export function playMainMenuScene() {
  const app: HTMLBodyElement | null = document.querySelector(
    "#app"
  ) as HTMLBodyElement;

  if (imageSources.city) {
    background.style.backgroundImage = `url(${imageSources.pinkRoom})`;
    app?.appendChild(background);
    background.className = "background";
    background.append(createMenu());
  }

  const button = new GameButton({x:10,y:40}, {x:10,y:20}, "I want two points!", "standard-button")
  button.draw(background, addTwoPoints)

  function addTwoPoints(){
    gameHandler.setPoints("+", 2)
    console.log(`current points: ${gameHandler.getPoints()}`)
  }

  const eliasBubble = new TextBubble({x:20,y:20},{x:20,y:20},"text-bubble", "Whats's up?","Elias")
  eliasBubble.draw(background)
  

  const elias = new Character(60,97, eliasImages,1)
  elias.draw(background)

  const move = new GameButton(
    { x: 10, y: 60 },
    { x: 10, y: 20 },
    "Move elias!",
    "standard-button"
  )
  move.draw(background, () => {
    elias.moveSprite(40);
    eliasBubble.updateText("Yea I dont know why");
    move.erase();
  });
  
  new GameButton(
    { x: 10, y: 20 },
    { x: 10, y: 20 },
    "button",
    "standard-button"
  ).draw(background, () => {

  });


  






  
  

  
}
