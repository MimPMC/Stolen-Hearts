
export default class GameObject {
    position: {x:number,y:number}
    size: {x:number,y:number}
    image: string

    constructor(position:{x:number,y:number}, size: {x:number,y:number},image: string) {
        this.position = position
        this.size = size
        this.image = image
    }
    
}