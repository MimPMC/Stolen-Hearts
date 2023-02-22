export {};
import GameObject from "./GameObject";

const app: HTMLBodyElement | null = document.querySelector('#app') as HTMLBodyElement;

type ImageSources = {
  city: string;
  school: string;
};

const imageSources: ImageSources = {
  city: "./public/assets/centrum_bg.png",
  school: "./public/assets/downtown_bg.png",
};

const background: HTMLImageElement = document.createElement('img'); 

if (imageSources.city) {
  background.src = imageSources.city;
  app?.appendChild(background);
  background.className = "background"
}







