
interface scenes: {[
    main: string
]

}

export default class GameHandler {
    scenes: string[];
    Activescene: number;
    music: string[];
    isMusicPlaying: boolean
    points: number


    constructor(scene:string[], music:string[], isMusicPlaying:boolean, points:number) {
        this.scenes = scene
        this.music = music
        this.isMusicPlaying = isMusicPlaying
        this.points = points
    }

    public changeScene(Scene: string):string {
        switch(scene) {
            case "mainmenu"
            return:

        }
        
    }
    public updatepoints(number):number {

    }
    public updatepoints(number):number {
        
    }
    public changeMusic():boolean {
        
    }
    public pauseMusic():boolean {
        
    }

}