export default class GameButton {
    position: {x:number,y:number};
    size: {x:number,y:number};
    text: string;
    element: HTMLButtonElement | null;
    cssClass: string

    constructor(position:{x:number,y:number}, size: {x:number,y:number}, text:string, cssClass:string) {
        this.position = position;
        this.size = size;
        this.text = text;
        this.element = null;  // initialize instance variable to null
        this.cssClass = cssClass
    }

    public draw(background: HTMLDivElement, onClick: () => void) {
        const buttonElement = document.createElement("button");
        buttonElement.style.position = "absolute";
        buttonElement.className = this.cssClass
        buttonElement.style.left = this.position.x + "%";
        buttonElement.style.top = this.position.y + "%";
        buttonElement.style.width = this.size.x + "%";
        buttonElement.style.height = "auto";
        buttonElement.style.zIndex = "150";
        buttonElement.innerHTML = this.text;  // add button text
        buttonElement.addEventListener("click", onClick);  // add event listener
        background.appendChild(buttonElement);
        this.element = buttonElement;  // update instance variable
    }

    public erase() {
        if (this.element) {
            this.element.parentElement?.removeChild(this.element);
            this.element = null;  // reset instance variable to null
        }
    }
}