import Character from "../classes/Character";
import GameButton from "../classes/GameButton";
import {
  aliceImages,
  background,
  imageSources,
  sarahImages,
} from "../data/data";
import { gameHandler } from "../main";
import { createMenu } from "../Menu";

export function playChapter1() {
  background.style.backgroundImage = `url(${imageSources.pinkRoomDark})`;
  background.append(createMenu());

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
  const sarah = new Character(40, 85, sarahImages, 1);
  const alice = new Character(10, 85, aliceImages, 1);

  alice.draw(background);
  sarah.draw(background);

  const pickAliceButton = new GameButton(
    { x: 30, y: 10 },
    { x: 10, y: 20 },
    "Alice",
    "standard-button"
  );

  const pickAlice = () => {
    sarah.moveSprite(200);
    alice.moveSprite(25);
    pickAliceButton.erase();
    pickSarahButton.erase();
    changeClothes(alice, background);
  };
  pickAliceButton.draw(background, pickAlice);

  const pickSarahButton = new GameButton(
    { x: 60, y: 10 },
    { x: 10, y: 20 },
    "Sarah",
    "standard-button"
  );
  const pickSarah = () => {
    alice.moveSprite(-200);
    sarah.moveSprite(25);
    pickAliceButton.erase();
    pickSarahButton.erase();
    changeClothes(sarah, background);
  };
  pickSarahButton.draw(background, pickSarah);

  function changeClothes(main: Character, background: HTMLDivElement) {
    if (main === sarah) {
      console.log("Changing clothes for Sarah");
      const button1 = new GameButton(
        { x: 20, y: 20 },
        { x: 10, y: 20 },
        "Get dressed!",
        "choice-button"
      );
      const doSomething1 = () => {
        sarah.updateSprite(0);
        setTimeout(() => {
          background.style.backgroundImage = `url(${imageSources.pinkRoom})`;
        }, 1500);
      };
      button1.draw(background, doSomething1);
    } else if (main === alice) {
      const button1 = new GameButton(
        { x: 20, y: 20 },
        { x: 10, y: 20 },
        "Get dressed!",
        "choice-button"
      );
      const doSomething1 = () => {
        alice.updateSprite(0);
        setTimeout(() => {
          background.style.backgroundImage = `url(${imageSources.pinkRoom})`;
        }, 1500);
      };
      button1.draw(background, doSomething1);
      console.log("Changing clothes for Alice");
    } else {
      console.log("Unknown character");
    }
  }
}
