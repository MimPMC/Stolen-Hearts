import Character from "../classes/Character";
import GameButton from "../classes/GameButton";
import TextBubble from "../classes/TextBubble";
import { aliceImages, background, eliasImages, imageSources, sarahImages } from "../data/data";
import { eliasDialog, mainDialog, textbubbletext } from "../data/text";
import { createMenu } from "../Menu";

let mainCharacter: Character

let elias: Character
let isac : Character


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
    { x: 60, y: 19 },"text-bubble", textbubbletext[0],"","rgb(64, 51, 134, 0.6)")
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
  const momText = new TextBubble( { x: 20, y: 80 },
    { x: 60, y: 19 },"text-bubble", textbubbletext[2],"Mom","rgb(89,0,44, 0.6)")
    
  const sarah = new Character(40, 85, sarahImages, 1, "Sarah");
  const alice = new Character(10, 85, aliceImages, 1, "Alice");
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
      mainCharacter = alice
      sarah.moveSprite(200);
      alice.moveSprite(25);
      pickAliceButton.erase();
      pickSarahButton.erase();
      changeClothes(alice, background);
      mainText.erase();
      momText.draw(background)
    };
    pickAliceButton.draw(background, pickAlice);
  
    const pickSarahButton = new GameButton(
      { x: 60, y: 10 },
      { x: 10, y: 20 },
      "Sarah",
      "standard-button"
    );
    const pickSarah = () => {
      mainCharacter = sarah
      alice.moveSprite(-200);
      sarah.moveSprite(25);
      pickAliceButton.erase();
      pickSarahButton.erase();
      changeClothes(sarah, background);
      mainText.erase();
      momText.draw(background)
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
      momText.updateText(textbubbletext[4]);
      button1.erase();
      setTimeout(() => {
        background.style.backgroundImage = `url(${imageSources.pinkRoom})`;
        button2.draw(background, doSomething2);
      }, 1500);
    };
    button1.draw(background, doSomething1);
  }

  const button2 = new GameButton(
      { x: 20, y: 20 },
      { x: 10, y: 20 },
      "go to school!",
      "choice-button"
    );
    const doSomething2 = () => {
      mainCharacter.updateSprite(3);
      momText.erase();
      button2.erase();
      mainCharacter.moveSprite(-5)
      background.style.backgroundImage = `url(${imageSources.school})`;
      setTimeout(() => {  
        playChapter2()
      }, 1500);
    };

}

export function playChapter2() {
  background.style.backgroundImage = `url(${imageSources.school})`;
  if (!mainCharacter) {
    mainCharacter = new Character(10, 85, aliceImages, 3, "Alice");
    mainCharacter.draw(background)
    mainCharacter.moveSprite(-5)
  }

  background.append(createMenu());

  elias = new Character(58, 100, eliasImages, 1,"Elias");

  const eliasText = new TextBubble( { x: 20, y: 80 },{ x: 60, y: 19 },"text-bubble", eliasDialog[0], elias.name ,"rgb(64, 51, 134, 0.6)")

  const myText = new TextBubble( { x: 20, y: 80 },{ x: 60, y: 19 },"text-bubble", mainDialog[0], mainCharacter.name ,"rgb(89,0,44, 0.6)")
  myText.draw(background)

  const nextButton = new GameButton(
    { x: 85, y: 90 },
    { x: 10, y: 10 },
    "next",
    "choice-button"
  );
  const nextText = () => {
    elias.draw(background)
    nextButton.erase()
    myText.erase()
    eliasText.draw(background)
    nextButton2.draw(background, nextText2);
  };
  nextButton.draw(background, nextText);

  const nextButton2 = new GameButton(
    { x: 85, y: 90 },
    { x: 10, y: 10 },
    "next",
    "choice-button"
  );
  const nextText2 = () => {
    eliasText.updateText(eliasDialog[1])
    mainCharacter.updateSprite(4)
    nextButton2.erase()
  };
  



    



}