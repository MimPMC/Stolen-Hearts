export { };
  import Character from "./Character";

window.addEventListener("DOMContentLoaded", startGame);

type ImageSources = {
  city: string;
  hall: string;
  pinkRoom: string;
  alice1: string;
  jankos:string;
  elias1:string;
  elias2:string;
};

const imageSources: ImageSources = {
  city: "/assets/centrum_bg.png",
  hall: "/assets/hall.png",
  pinkRoom: "/assets/bedroom_pink.png",
  alice1: "/assets/Alice/alice-1.png",
  jankos: "/assets/jankos/jankos_talking.png",
  elias1: "/assets/Elias/elias-sprite-1.png",
  elias2: "/assets/Elias/elias-sprite-1.png"
};

const aliceImages = [ imageSources.alice1,imageSources.alice1]
const jankosImages = [ imageSources.jankos,imageSources.jankos]
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

  const alice = new Character(50,85, aliceImages)
  alice.draw(background)

  const jankos = new Character(30,90, jankosImages)
  jankos.draw(background)

  const elias = new Character(70,95, eliasImages)
  elias.draw(background)

}

