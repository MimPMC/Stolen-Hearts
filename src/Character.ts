export default class Character {
    Xposition: number;
    height: number;
    images: string[];
    imageIndex: number;
    element: HTMLImageElement | null;

    constructor(Xposition:number, height:number, images: string[]) {
        this.Xposition = Xposition;
        this.height = height;
        this.images = images;
        this.imageIndex = 0; // initialize image index to 0
        this.element = null;
    }

    public draw(background: HTMLDivElement) {
        const imageElement = document.createElement("img");
        imageElement.src = this.images[this.imageIndex];
        imageElement.style.position = "absolute";
        imageElement.style.left = this.Xposition + "%"
        imageElement.style.bottom = 0 +  ""
        imageElement.style.height = this.height + "%";
        imageElement.style.width = "auto";
        imageElement.style.zIndex = "120";
        imageElement.style.transform = "translate(-50%)"
        imageElement.style.transition = "200ms";
        background.appendChild(imageElement);
        this.element = imageElement;
    }
    public update(imageIndex: number) {
        if (imageIndex >= 0 && imageIndex < this.images.length) {
            this.imageIndex = imageIndex;
            if (this.element) {
                this.element.src = this.images[this.imageIndex];
            }
        } else {
            console.error("Invalid image index");
        }
    }

    public erase() {
        if (this.element) {
            this.element.parentElement?.removeChild(this.element);
            this.element = null;
        }
    }
}