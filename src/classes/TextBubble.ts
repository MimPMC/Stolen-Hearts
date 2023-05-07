export default class TextBubble {
    position: {x:number,y:number};
    size: {x:number,y:number};
    element: HTMLDivElement | null;
    cssClass: string;
    characterName: string;
    text: string;
    color:string;

    constructor(position:{x:number,y:number}, size: {x:number,y:number}, cssClass: string, text: string, characterName:string, color: string) {
        this.position = position;
        this.size = size;
        this.element = null;  // initialize instance variable to null
        this.cssClass = cssClass
        this.text= text;
        this.characterName = characterName;
        this.color = color
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
        textBubble.style.backgroundColor = this.color;
        background.appendChild(textBubble);

        const characterName = document.createElement("h3")
        characterName.innerHTML = this.characterName;
        textBubble.appendChild(characterName)

        const textBubbleText = document.createElement("p")
        textBubbleText.innerHTML = this.text;
        textBubbleText.style.fontSize = "1.2rem";
        textBubble.appendChild(textBubbleText)
        
        this.element = textBubble;  // update instance variable
    }
    public updateText(newText: string) {
        this.text = newText;
        if (this.element) {
          const textBubbleText = this.element.querySelector("p");
          if (textBubbleText) {
            textBubbleText.innerHTML = this.text;
          }
        }
      }

    public erase() {
        if (this.element) {
            this.element.parentElement?.removeChild(this.element);
            this.element = null;  // reset instance variable to null
        }
    }
}