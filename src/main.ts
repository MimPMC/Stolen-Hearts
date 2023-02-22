export {};

const app: HTMLBodyElement | null = document.querySelector('#app') as HTMLBodyElement;

type imageSources = [
  { city: string },
  { school: string }

]

const imageSources = [
  { city: "./public/assets/centrum_bg.png" },
  { school: "./public/assets/downtown_bg.png" }
];

const background: HTMLImageElement = document.createElement('img'); 

if (imageSources[0].city) {
  background.src = imageSources[0].city;
  app?.appendChild(background);
  background.className = "background"
}







