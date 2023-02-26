export { };
  import GameButton from "./GameButton";
  import GameObject from "./GameObject";

window.addEventListener("DOMContentLoaded", startGame);

function startGame() {
  const app: HTMLBodyElement | null = document.querySelector(
    "#app"
  ) as HTMLBodyElement;

  type ImageSources = {
    city: string;
    fisk: string;
    school: string;
  };

  const imageSources: ImageSources = {
    city: "./public/assets/centrum_bg.png",
    fisk: "./public/assets/fisk.png",
    school: "./public/assets/downtown_bg.png",
  };

  const background: HTMLDivElement = document.createElement("div");
  if (imageSources.city) {
    background.style.backgroundImage = `url(${imageSources.city})`;
    app?.appendChild(background);
    background.className = "background";
  }
  const fish = new GameObject({x:50,y:20},{x:5,y:5},imageSources.fisk)
  fish.draw(background)
  const startButton = new GameButton({x:20,y:20},{x:10,y:50}, "Start game", "standard-button")
  startButton.draw(background, function() {
    console.log("StartButton clicked!");
});

  const choice = new GameButton({x:40,y:30},{x:20,y:50}, "Go to the store", "choice-button")
  choice.draw(background, handleChoiceButtonClick)
};


function handleChoiceButtonClick() {
  console.log("ChoiceButton clicked!");
}

 
