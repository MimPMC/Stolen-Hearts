

export default class Item {
    position: {x:number,y:number};
    size: {x:number,y:number};
    description: string;
    image: string;
    isInInventory: boolean;
    element: HTMLImageElement | null;

    constructor(position:{x:number,y:number}, size: {x:number,y:number}, description: string, image: string) {
        this.position = position;
        this.size = size;
        this.image = image;
        this.isInInventory = false;
        this.description = description;
        this.element = null;  // initialize instance variable to null
    }

    public draw(background: HTMLDivElement) {
            const imageElement = document.createElement("img");
            imageElement.src = this.image;
            imageElement.style.position = "absolute";
            imageElement.style.left = this.position.x + "%";
            imageElement.style.top = this.position.y + "%";
            imageElement.style.width = this.size.x + "%";
            imageElement.style.height = "auto";
            imageElement.style.zIndex = "100";
            background.appendChild(imageElement);
            this.element = imageElement;  // update instance variable
    }

    public addToInventory() {
        this.isInInventory = true;
    }
    public removeFromInventory() {
        this.isInInventory = false;
    }
    public useItem(useFunction:(item:Item)=> void) {
      if(this.isInInventory) {
        useFunction(this);
      }
    }

    public erase() {
        if (this.element) {
            this.element.parentElement?.removeChild(this.element);
            this.element = null;  // reset instance variable to null
        }
    }
}

