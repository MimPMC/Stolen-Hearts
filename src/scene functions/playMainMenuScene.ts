import Character from "../Character";
import { background, eliasImages, imageSources } from "../data";
import GameButton from "../GameButton";
import { gameHandler } from "../main";
import Menu from "../Menu";
import TextBubble from "../TextBubble";

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
    "Move to the right",
    "standard-button"
  ).draw(background, () => {
    elias.moveSprite(64);
    elias.updateSprite(0);
    eliasBubble.updateText("Why?");
  });

  const menu = new Menu({ x: 50, y: 50 },
    { x: 60, y: 50 },
    "/assets/hall.png",
    )
    menu.draw()





  
  

  
}
