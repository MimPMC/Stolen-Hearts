import Character from "../classes/Character";
import GameButton from "../classes/GameButton";
import { gameHandler } from "../main";

type ImageSources = {
    city: string;
    hall: string;
    pinkRoom: string;
    pinkRoomDark: string;
    alice1: string;
    alice2: string;
    elias1:string;
    elias2:string;
    sarah1:string;
    sarah2:string;
    
  };
  
  const imageSources: ImageSources = {
    city: "/assets/centrum_bg.png",
    hall: "/assets/hall.png",
    pinkRoom: "/assets/bedroom_pink.png",
    pinkRoomDark: "/assets/bedroom_pink_night.png",
    alice1: "/assets/Alice/alice-1.png",
    alice2: "/assets/Alice/alice-messy.png",
    elias1: "/assets/Elias/elias-sprite-1.png",
    elias2: "/assets/Elias/elias-sprite-2.png",
    sarah1: "/assets/Sarah/sarah-1.png",
    sarah2: "/assets/Sarah/sarah-messy.png"
  };
  
  let yourCharacter:Character
  
  const aliceImages = [ imageSources.alice1,imageSources.alice2]
  const eliasImages = [ imageSources.elias1,imageSources.elias2]
  const sarahImages = [ imageSources.sarah1,imageSources.sarah2]
  
  const background: HTMLDivElement = document.createElement("div");
  
  const sarah = new Character(40,85, sarahImages,1)
  const alice = new Character(10,85, aliceImages,1)
  
  
function startGame() {
    const app: HTMLBodyElement | null = document.querySelector(
      "#app"
    ) as HTMLBodyElement;
  
    
    if (imageSources.city) {
      background.style.backgroundImage = `url(${imageSources.pinkRoom})`;
      app?.appendChild(background);
      background.className = "background";
    }
  
    const alice = new Character(30,85, aliceImages,1)
    alice.draw(background)
  
    const elias = new Character(60,97, eliasImages,1)
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

    const button2 = new GameButton({x:10,y:70}, {x:10,y:10}, "Move to the right", "standard-button")
    button2.draw(background, () => { elias.moveSprite(64); elias.updateSprite(1); });
  
   
  }
  
function characterChoice() {
    const app: HTMLBodyElement | null = document.querySelector(
      "#app"
    ) as HTMLBodyElement;
    
    const background: HTMLDivElement = document.createElement("div");
    if (imageSources.city) {
      background.style.backgroundImage = `url(${imageSources.pinkRoomDark})`;
      app?.appendChild(background);
      background.className = "background";
    }
    const sarah = new Character(40,85, sarahImages,1)
    const alice = new Character(10,85, aliceImages,1)
  
    
    alice.draw(background)
    sarah.draw(background)
  
    const pickAliceButton = new GameButton({x:30,y:10}, {x:10,y:20}, "Alice", "standard-button")
  
    const pickAlice = () => {
      console.log("You picked Alice")
      sarah.moveSprite(200);
      alice.moveSprite(25);
      pickAliceButton.erase()
      pickSarahButton.erase()
      changeClothes(alice, background)
      yourCharacter = alice
      
    };
    pickAliceButton.draw(background, pickAlice)
  
    const pickSarahButton = new GameButton({x:60,y:10}, {x:10,y:20}, "Sarah", "standard-button")
    const pickSarah = () => {
      console.log("You picked Sarah")
      
      alice.moveSprite(-200);
      sarah.moveSprite(25);
      pickAliceButton.erase()
      pickSarahButton.erase()
      changeClothes(sarah, background)
      yourCharacter = sarah
    };
    pickSarahButton.draw(background, pickSarah)
}
  
function changeClothes(main:Character, background:HTMLDivElement) {
    if (main === sarah) {
      console.log("Changing clothes for Sarah");
      const button1 = new GameButton({x:20,y:20}, {x:10,y:20}, "Get dressed!", "choice-button")
      const doSomething1 = () => {
        sarah.updateSprite(0)
        console.log(yourCharacter)
        setTimeout(() => {
          background.style.backgroundImage = `url(${imageSources.pinkRoom})`;
        }, 1500);
      };
      button1.draw(background, doSomething1)
    } else if (main === alice) {
      const button1 = new GameButton({x:20,y:20}, {x:10,y:20}, "Get dressed!", "choice-button")
      const doSomething1 = () => {
        alice.updateSprite(0)
        setTimeout(() => {
          background.style.backgroundImage = `url(${imageSources.pinkRoom})`;
        }, 1500);
      };
      button1.draw(background, doSomething1)
      console.log("Changing clothes for Alice");
    } else {
      console.log("Unknown character");
    }
    const button = new GameButton(
      { x: 10, y: 40 },
      { x: 10, y: 20 },
      "I want two points!",
      "standard-button"
    );
    button.draw(background, addTwoPoints);
  
    function addTwoPoints() {
      gameHandler.setPoints("+", 2);
      console.log(`current points: ${gameHandler.getPoints()}`);
    }
}
  
  