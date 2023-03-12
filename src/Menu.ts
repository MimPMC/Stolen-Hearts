import GameButton from "./GameButton";

export default class Menu {
    position: { x: number, y: number };
    size: { x: number, y: number };
    background: string;
    buttons: GameButton[];

    constructor(position: { x: number, y: number }, size: { x: number, y: number }, background: string, buttons: GameButton[]) {
        this.position = position;
        this.size = size;
        this.background = background;
        this.buttons = buttons;
    }

    public draw() {
        // Create the background div
        const backgroundDiv = document.createElement("div");
        backgroundDiv.style.position = "absolute";
        backgroundDiv.style.left = this.position.x + "%";
        backgroundDiv.style.top = this.position.y + "%";
        backgroundDiv.style.width = this.size.x + "%";
        backgroundDiv.style.height = this.size.y + "%";
        backgroundDiv.style.backgroundImage = `url(${this.background})`;
        backgroundDiv.style.backgroundSize = "cover";
        backgroundDiv.style.zIndex = "100";
        document.body.appendChild(backgroundDiv);

        // Draw each button
        this.buttons.forEach(button => button.draw(backgroundDiv, () => {
            
        }));
    }

    public erase() {
        // Remove the background div and each button
        document.body.removeChild(document.body.lastChild!);
        this.buttons.forEach(button => button.erase());
    }
}