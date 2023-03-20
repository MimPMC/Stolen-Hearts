import Character from "../classes/Character";
import GameButton from "../classes/GameButton";
import TextBubble from "../classes/TextBubble";
import { aliceImages, background, imageSources, sarahImages } from "../data/data";
import { textbubbletext } from "../data/text";
import { createMenu } from "../Menu";

export function playChapter1() {
  const app: HTMLBodyElement | null = document.querySelector(
    "#app"
  ) as HTMLBodyElement;
  if (imageSources) {
    background.style.backgroundImage = `url(${imageSources.pinkRoomDark})`;
    app?.appendChild(background);
    background.className = "background";
  }
  background.append(createMenu());
  console.log(textbubbletext)

  const mainText = new TextBubble( { x: 20, y: 80 },
    { x: 60, y: 15 },"text-bubble", textbubbletext[0],"")
    mainText.draw(background)
  
  const nextButton = new GameButton(
    { x: 85, y: 90 },
    { x: 10, y: 10 },
    "next",
    "choice-button"
  );
  const nextText = () => {
    showCharactersButton.draw(background, showCharacters);
    nextButton.erase()
    mainText.updateText(textbubbletext[1])
  };
  nextButton.draw(background, nextText);
  
  
  const showCharactersButton = new GameButton(
    { x: 85, y: 81 },
    { x: 10, y: 10 },
    "Pick your character",
    "standard-button"
  );
  const sarah = new Character(40, 85, sarahImages, 1);
  const alice = new Character(10, 85, aliceImages, 1);
  const showCharacters = () => {
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
      mainText.updateText(textbubbletext[2])
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
      mainText.updateText(textbubbletext[3])
    };
    pickSarahButton.draw(background, pickSarah);
    showCharactersButton.erase()
  };

  function changeClothes(main: Character, background: HTMLDivElement) {
    console.log(`Changing clothes for ${main}`);
  
    const button1 = new GameButton(
      { x: 20, y: 20 },
      { x: 10, y: 20 },
      "Get dressed!",
      "choice-button"
    );
  
    const doSomething1 = () => {
      main.updateSprite(0);
      mainText.updateText(textbubbletext[4]);
      button1.erase();
  
      setTimeout(() => {
        background.style.backgroundImage = `url(${imageSources.pinkRoom})`;
      }, 1500);
    };
  
    button1.draw(background, doSomething1);
  }
}
