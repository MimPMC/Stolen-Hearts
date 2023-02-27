export { };
  import Character from "./Character";
  import GameButton from "./GameButton";
  import TextBubble from "./TextBubble";

window.addEventListener("DOMContentLoaded", startGame);

function startGame() {
  const app: HTMLBodyElement | null = document.querySelector(
    "#app"
  ) as HTMLBodyElement;

  type ImageSources = {
    city: string;
    fisk: string;
    home: string;
  };

  const imageSources: ImageSources = {
    city: "/assets/centrum_bg.png",
    fisk: "/assets/fisk.png",
    home: "/assets/hall.png",
  };

  const background: HTMLDivElement = document.createElement("div");
  if (imageSources.city) {
    background.style.backgroundImage = `url(${imageSources.city})`;
    app?.appendChild(background);
    background.className = "background";
  }

  const startButton = new GameButton(
    { x: 20, y: 20 },
    { x: 20, y: 50 },
    "Delete jankos",
    "standard-button"
  );
  startButton.draw(background, function () {
    jankos.erase();
    jankosTextBubble.erase();
  });

  const choice = new GameButton(
    { x: 20, y: 30 },
    { x: 20, y: 50 },
    "Make jankos sad",
    "choice-button"
  );
  const blushButton = new GameButton(
    { x: 20, y: 40 },
    { x: 20, y: 50 },
    "Make jankos surprised",
    "choice-button"
  );
  blushButton.draw(background, function () {
    jankos.update(5);
    jankosTextBubble.updateText("wHAT????")

  });

  choice.draw(background, handleChoiceButtonClick);

  const character1Images = [
    "/assets/jankos_talking.png",
    "/assets/jankos_worry.png",
    "/assets/jankos_blush1.png",
    "/assets/jankos_cry.png",
    "/assets/jankos_smirk.png",
    "/assets/jankos_surprised.png",
  ];
  const jankos = new Character(60, 90, character1Images);
  jankos.draw(background);

 

  function handleChoiceButtonClick() {
    jankos.update(1);
    const cryButton = new GameButton(
      { x: 20, y: 60 },
      { x: 20, y: 50 },
      "make Jankos cry",
      "standard-button"
    );
    jankosTextBubble.updateText("That was very mean :(")
    cryButton.draw(background, function () {
      jankos.update(3);
      jankosTextBubble.updateText("WUUÄÄH")

    });
  }
  const resetButton = new GameButton(
    { x: 20, y: 50 },
    { x: 20, y: 50 },
    "reset",
    "standard-button"
  );
  resetButton.draw(background, function () {
    app.innerHTML = "";
    startGame();
  });

  const homeButton = new GameButton(
    { x: 20, y: 70 },
    { x: 20, y: 50 },
    "Go home",
    "standard-button"
  );
  homeButton.draw(background, function () {
    background.style.backgroundImage = `url(${imageSources.home})`;
    jankosTextBubble.updateText("We are home")
  });

  const jankosTextBubble = new TextBubble( { x: 5, y: 83},
    { x: 90, y: 15 },
    "text-bubble",
    "Hey, what's up?")
  jankosTextBubble.draw(background)

  

  
}
