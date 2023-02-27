export default class TextBubble {
    position: {x:number,y:number};
    size: {x:number,y:number};
    element: HTMLDivElement | null;
    cssClass: string;
    text: string;

    constructor(position:{x:number,y:number}, size: {x:number,y:number}, cssClass: string, text: string) {
        this.position = position;
        this.size = size;
        this.element = null;  // initialize instance variable to null
        this.cssClass = cssClass
        this.text= text;
    }
    public draw(background: HTMLDivElement) {
        const textBubble = document.createElement("div");
        textBubble.style.position = "absolute";
        textBubble.className = this.cssClass;
        textBubble.style.left = this.position.x + "%";
        textBubble.style.top = this.position.y + "%";
        textBubble.style.width = this.size.x + "%";
        textBubble.style.height = this.size.y + "%";
        textBubble.style.zIndex = "300";
        textBubble.innerHTML = this.text;
        background.appendChild(textBubble);
        this.element = textBubble;  // update instance variable
    }
    public updateText(newText: string) {
        this.text = newText;
        if (this.element) {
            this.element.innerHTML = this.text;
        }
    }

    public erase() {
        if (this.element) {
            this.element.parentElement?.removeChild(this.element);
            this.element = null;  // reset instance variable to null
        }
    }
}