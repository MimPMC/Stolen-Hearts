export const background: HTMLDivElement = document.createElement("div");


export type ImageSources = {
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
    city: "/assets/centrum_bg.png",
    hall: "/assets/hall.png",
    pinkRoom: "/assets/bedroom_pink.png",
    pinkRoomDark: "/assets/bedroom_pink_night.png",
    alice1: "/assets/Alice/alice-1.png",
    alice2: "/assets/Alice/alice-messy.png",
    elias1: "/assets/Elias/elias-sprite-1.png",
    elias2: "/assets/Elias/elias-sprite-2.png",
    sarah1: "/assets/Sarah/sarah-1.png",
    sarah2: "/assets/Sarah/sarah-messy.png"
};
  
export const aliceImages = [ imageSources.alice1,imageSources.alice2]
export const eliasImages = [ imageSources.elias1,imageSources.elias2]
export const sarahImages = [ imageSources.sarah1,imageSources.sarah2]