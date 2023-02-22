export {};

const body: HTMLBodyElement | null = document.querySelector('body') as HTMLBodyElement;

const startbutton: HTMLElement = document.createElement('button')
startbutton.textContent = "Start"
body?.appendChild(startbutton)

const imageSources = [
  { city: "./public/assets/centrum_bg.png" },
  { school: "./public/assets/downtown_bg.png" }
];

console.log(imageSources[1].school)








