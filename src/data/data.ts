import Character from "../classes/Character";

export const background: HTMLDivElement = document.createElement("div");
export let yourCharacter = Character

export type ImageSources = {
    mainMenu:string;
    city: string;
    hall: string;
    pinkRoom: string;
    pinkRoomDark: string;
    alice1: string;
    alice2: string;
    elias1:string;
    elias2:string;
    sarah1:string;
    sarah2:string;
    
};
  
export const imageSources: ImageSources = {
    mainMenu: "/assets/backgrounds/menu-bg.png",
    city: "/assets/backgrounds/centrum_bg.png",
    hall: "/assets/backgrounds/hall.png",
    pinkRoom: "/assets/backgrounds/bedroom_pink.png",
    pinkRoomDark: "/assets/backgrounds/bedroom_pink_night.png",
    alice1: "/assets/Alice/alice-1.png",
    alice2: "/assets/Alice/alice-messy.png",
    elias1: "/assets/Elias/elias-normal.png",
    elias2: "/assets/Elias/elias-angry-talking.png",
    sarah1: "/assets/Sarah/sarah-1.png",
    sarah2: "/assets/Sarah/sarah-messy.png"
};
  
export const aliceImages = [ imageSources.alice1,imageSources.alice2]
export const eliasImages = [ imageSources.elias1,imageSources.elias2]
export const sarahImages = [ imageSources.sarah1,imageSources.sarah2]