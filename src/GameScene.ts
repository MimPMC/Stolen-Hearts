import Character from "./Character";
import Menu from "./Menu";

export default class GameScene {
  scene: string;
  yourCharacter: Character;
  NPCCharacters: Character[];
  menu: Menu;

  constructor(
    scene: string,
    yourCharacter: Character,
    NPCCharacters: Character[],
    menu: Menu,
  ) {
    this.scene = scene;
    this.yourCharacter = yourCharacter;
    this.NPCCharacters = NPCCharacters;
    this.menu = menu;
    
  }

  public playScene() {
    // TODO: Implement gameplay logic
  }

  private changeScene(newScene: string) {
    //this.gameHandler.renderActiveScene(newScene);
  }

  private showCloseMenu() {
    //this.menu.toggle();
  }
}

