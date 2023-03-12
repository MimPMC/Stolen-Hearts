import { playMainMenuScene } from "./playMainMenuScene";

export default class GameHandler {
    activeScene: string;
    isMusicPlaying: boolean;
    points: number;
    constructor() {
        this.isMusicPlaying = false
        this.points = 0
        this.activeScene = "mainmenu"
    }

    public renderActiveScene(scene:string) {
        this.activeScene = scene 
        switch(this.activeScene) {
            case "mainmenu":
                playMainMenuScene()
   
            break;
            case "library":
                //start library story scene
                
            break
            case "story":
                //start background story scene
            break
            case "chapter1":
                //start gameplay scene
            break
            default:
                //start main menu music
        }    
    }
    public getPoints() {
        return this.points
    }
    public setPoints(operator: string, number: number) {
        if (operator === "+") {
          this.points += number;
        } else if (operator === "-") {
          this.points -= number;
        }
      }

}
