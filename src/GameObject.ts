

export default class GameObject {
    position: {x:number,y:number}
    size: {x:number,y:number}
    image: string
    

    constructor(position:{x:number,y:number}, size: {x:number,y:number},image: string) {
        this.position = position
        this.size = size
        this.image = image
    }

    public draw(background: HTMLImageElement) {
        const imageElement = document.createElement("img");
        imageElement.src = this.image;
        imageElement.style.position = "absolute";
        imageElement.style.left = this.position.x + "px";
        imageElement.style.top = this.position.y + "px";
        imageElement.style.width = this.size.x + "px";
        imageElement.style.height = this.size.y + "px";
        imageElement.style.zIndex = "100";
        background.appendChild(imageElement);
    }
}