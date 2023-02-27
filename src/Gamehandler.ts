
export default class GameHandler {
    scenes: string[];
    activeScene: string;
    music: string;
    isMusicPlaying: boolean;
    points: number;


    constructor(scene:string[], music:string) {
        this.scenes = scene
        this.music = music
        this.isMusicPlaying = false
        this.points = 0
        this.activeScene = "mainmenu"
    }

    public changeScene(scene:string) {
        return this.activeScene = scene 
    }

    public renderActiveScene() {
        switch(this.activeScene) {
            case "mainmenu":
                //start main menu scene
            break;
            case "library":
                //start library story scene
            break
            case "story":
                //start background story scene
            break
            case "play":
                //start gameplay scene
            break
            default:
                //start main menu music
        }    
    }
    public getPoints() {
        return this.points
    }
    public setPoints(operator:string, number:number) {
        if (operator="+") {
            return this.points + number;
        }
        if ("-"){
            return this.points - number;
        }
        else {
            return this.points
        }
    }
    public changeMusic(){
        switch(this.music) {
            case "sadsong":
                //start main menu music
            break;
            case "happysong":
                //start library story music
            break
            case "guitar":
                //start background story music
            break
            case "pop":
                //start gameplay music
            default:
                //start main menu music
        }    
    }
    public toggleMusic() {
        return !this.isMusicPlaying   
    }
}