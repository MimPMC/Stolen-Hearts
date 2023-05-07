import Character from "../classes/Character";

export const background: HTMLDivElement = document.createElement("div");
export let yourCharacter = Character

export type ImageSources = {
    mainMenu: string;
    city: string;
    hall: string;
    pinkRoom: string;
    pinkRoomDark: string;
    school: string;
    cityNight: string;
    mcDonalds: string;

    aliceNormal: string;
    aliceMessy: string;
    aliceTalking: string;
    aliceSmile: string;
    aliceBlush: string;

    sofieNormal: string;
    sofieMessy: string;
    sofieTalking: string;
    sofieSmile: string;
    sofieBlush: string;

    eliasNormal: string;
    eliasAngryTalking: string;
    eliasAngry: string;
    eliasAngryBlush: string;
    eliasBlush: string;
    eliasSad: string;
    eliasSmile: string;
    eliasSmirk: string;
    eliasSurprised: string;
    eliasTalking: string;
    eliasThinking: string;

    isacNormal: string;
    isacAngryTalking: string;
    isacAngry: string;
    isacBlush: string;
    isacSad: string;
    isacSmile: string;
    isacSurprised: string;
    isacTalking: string;
    isacThinking: string;
  };
  
export const imageSources: ImageSources = {
    mainMenu: "/assets/backgrounds/menu-bg.png",
    city: "/assets/backgrounds/centrum_bg.png",
    hall: "/assets/backgrounds/hall.png",
    pinkRoom: "/assets/backgrounds/bedroom_pink.png",
    pinkRoomDark: "/assets/backgrounds/bedroom_pink_night.png",
    school: "/assets/backgrounds/bg school.png",
    cityNight: "/assets/backgrounds/bg-city-night.png",
    mcDonalds: "/assets/backgrounds/mcdonuts_1.png",

    
    aliceNormal: "/assets/Alice/alice.png",
    aliceMessy: "/assets/Alice/aliceMessy.png",
    aliceTalking: "/assets/Alice/aliceTalking.png",
    aliceSmile: "/assets/Alice/aliceSmile.png",
    aliceBlush: "/assets/Alice/aliceBlush.png",
    
    sofieNormal: "/assets/Sarah/sofie.png",
    sofieMessy: "/assets/Sarah/sofieMessy.png",
    sofieTalking: "/assets/Sarah/sofieTalking.png",
    sofieSmile: "/assets/Sarah/sophieSmile.png",
    sofieBlush: "/assets/Sarah/sophieSmile.png",

    eliasNormal: "/assets/Elias/elias-normal.png",
    eliasAngryTalking: "/assets/Elias/elias-angry-talking.png",
    eliasAngry: "/assets/Elias/eliasAngry.png",
    eliasAngryBlush: "/assets/Elias/eliasAngryBlush.png",
    eliasBlush: "/assets/Elias/eliasBlush.png",
    eliasSmirk: "/assets/Elias/eliasSmirk.png",
    eliasSad: "/assets/Elias/eliasSad.png",
    eliasSmile: "/assets/Elias/eliasSmile.png",
    eliasSurprised: "/assets/Elias/eliasSurprised.png",
    eliasTalking: "/assets/Elias/eliasTalking.png",
    eliasThinking: "/assets/Elias/eliasThinking.png",

    isacNormal: "/assets/isac/isac.png",
    isacAngryTalking: "/assets/isac/isacAngryTalking.png",
    isacAngry: "/assets/isac/isacAngry.png",
    isacBlush: "/assets/isac/isacBlush.png",
    isacSad: "/assets/isac/isacSad.png",
    isacSmile: "/assets/isac/isacSmile.png",
    isacSurprised: "/assets/isac/isacSurprised.png",
    isacTalking: "/assets/isac/isacTalking.png",
    isacThinking: "/assets/isac/isacTHinking.png",
};
  
export const aliceImages = [
    imageSources.aliceNormal,
    imageSources.aliceMessy,
    imageSources.aliceTalking,
    imageSources.aliceSmile,
    imageSources.aliceBlush,
  ];
  
  export const eliasImages = [
    imageSources.eliasNormal,
    imageSources.eliasAngryTalking,
    imageSources.eliasAngry,
    imageSources.eliasAngryBlush,
    imageSources.eliasBlush,
    imageSources.eliasSmirk,
    imageSources.eliasSad,
    imageSources.eliasSmile,
    imageSources.eliasSurprised,
    imageSources.eliasTalking,
    imageSources.eliasThinking,
  ];
  
  export const sarahImages = [
    imageSources.sofieNormal,
    imageSources.sofieMessy,
    imageSources.sofieTalking,
    imageSources.sofieSmile,
    imageSources.sofieBlush,
  ];
  
  export const isacImages = [
    imageSources.isacNormal,
    imageSources.isacAngryTalking,
    imageSources.isacAngry,
    imageSources.isacBlush,
    imageSources.isacSad,
    imageSources.isacSmile,
    imageSources.isacSurprised,
    imageSources.isacTalking,
    imageSources.isacThinking,
  ];
