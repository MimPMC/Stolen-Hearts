export default class Character {
  Xposition: number;
  height: number;
  images: string[];
  imageIndex: number;
  element: HTMLDivElement | null;

  constructor(Xposition: number, height: number, images: string[], imageIndex:number) {
    this.Xposition = Xposition;
    this.height = height;
    this.images = images;
    this.imageIndex = imageIndex;
    this.element = null;
  }

  public draw(background: HTMLDivElement) {
    const characterElement = document.createElement("div");
    characterElement.classList.add("character-transition"); // add transition class
    characterElement.style.position = "absolute";
    characterElement.style.height = this.height + "%";
    characterElement.style.width = "50%";
    characterElement.style.bottom = 0 + "";
    characterElement.style.left = this.Xposition + "%";
    characterElement.style.backgroundImage = `url(${
      this.images[this.imageIndex]
    })`;
    characterElement.style.backgroundSize = "contain";
    characterElement.style.backgroundRepeat = "no-repeat";
    characterElement.style.backgroundPosition = "center bottom ";
    characterElement.style.zIndex = "120";
    characterElement.style.transition = "400ms ease-in-out";
    background.appendChild(characterElement);
    this.element = characterElement;
  }
  
public updateSprite(imageIndex: number) {
  if (imageIndex >= 0 && imageIndex < this.images.length) {
    this.imageIndex = imageIndex;
    if (this.element) {
      this.element.classList.remove("character-transition"); // remove transition class
      console.log(this.element.classList)
      this.element.style.backgroundImage = `url(${this.images[this.imageIndex]})`;
      setTimeout(() => {
      if(this.element) {
        this.element.classList.add("character-transition"); // add transition class
      }
      }, 0);
    }
  } else {
    console.error("Invalid image index");
  }
}

  public moveSprite(newPosition: number) {
    this.Xposition = newPosition;
    if (this.element) {
      this.element.style.left = `${this.Xposition}%`;
    }
  }

  public erase() {
    if (this.element) {
      this.element.parentElement?.removeChild(this.element);
      this.element = null;
    }
  }
}
