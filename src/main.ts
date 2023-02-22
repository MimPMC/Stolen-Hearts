export {};
import GameObject from "./GameObject";

const app: HTMLBodyElement | null = document.querySelector('#app') as HTMLBodyElement;

type ImageSources = {
  city: string;
  fisk:string;
  school: string;
};

const imageSources: ImageSources = {
  city: "./public/assets/centrum_bg.png",
  fisk: "./public/assets/fisk.png",
  school: "./public/assets/downtown_bg.png",
};

const background: HTMLImageElement = document.createElement('img'); 

if (imageSources.city) {
  background.src = imageSources.city;
  app?.appendChild(background);
  background.className = "background"
}

const gameObject = new GameObject({x: 500, y: 500}, {x: 100, y: 100}, imageSources.city);
gameObject.draw(background);


const fisk: HTMLImageElement = document.createElement('img'); 
if (fisk) {
  fisk.src = imageSources.fisk;
  background?.appendChild(fisk);
  fisk.className = "fisk"
}








