export { };
  import Character from "./Character";
  import GameButton from "./GameButton";

window.addEventListener("DOMContentLoaded", startGame);

type ImageSources = {
  city: string;
  hall: string;
  pinkRoom: string;
  alice1: string;
  elias1:string;
  elias2:string;
};

const imageSources: ImageSources = {
  city: "/assets/centrum_bg.png",
  hall: "/assets/hall.png",
  pinkRoom: "/assets/bedroom_pink.png",
  alice1: "/assets/Alice/alice-1.png",
  elias1: "/assets/Elias/elias-sprite-1.png",
  elias2: "/assets/Elias/elias-sprite-2.png"
};

const aliceImages = [ imageSources.alice1,imageSources.alice1]
const eliasImages = [ imageSources.elias1,imageSources.elias2]


function startGame() {
  const app: HTMLBodyElement | null = document.querySelector(
    "#app"
  ) as HTMLBodyElement;

  const background: HTMLDivElement = document.createElement("div");
  if (imageSources.city) {
    background.style.backgroundImage = `url(${imageSources.pinkRoom})`;
    app?.appendChild(background);
    background.className = "background";
  }

  const alice = new Character(30,85, aliceImages)
  alice.draw(background)

  const elias = new Character(60,97, eliasImages)
  elias.draw(background)
  elias.updateSprite(0)

  const button = new GameButton({x:10,y:40}, {x:10,y:20}, "Move to the left", "standard-button")

  const doSomething = () => {
    elias.moveSprite(6);
  };
  button.draw(background, doSomething)

  const button1 = new GameButton({x:10,y:20}, {x:10,y:20}, "Move to the right", "standard-button")
  const doSomething1 = () => {
    elias.moveSprite(64);
  };
  button1.draw(background, doSomething1)

 
}

function characterChoice() {
  const app: HTMLBodyElement | null = document.querySelector(
    "#app"
  ) as HTMLBodyElement;
  
  const background: HTMLDivElement = document.createElement("div");
  if (imageSources.city) {
    background.style.backgroundImage = `url(${imageSources.pinkRoom})`;
    app?.appendChild(background);
    background.className = "background";
  }

}


