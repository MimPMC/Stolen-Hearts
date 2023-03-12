export function createMenu() {
  // Create menu div
  const menuDiv = document.createElement("div");
  menuDiv.classList.add("menu", "closed");

  // Create title h1
  const title = document.createElement("h1");
  title.textContent = "Game Title";

  // Create button container div
  const buttonContainer = document.createElement("div");

  // Create continue button
  const continueButton = document.createElement("button");
  continueButton.classList.add("menu-button");
  continueButton.textContent = "Continue";

  // Create settings button
  const settingsButton = document.createElement("button");
  settingsButton.classList.add("menu-button");
  settingsButton.textContent = "Settings";

  // Create main menu button
  const mainMenuButton = document.createElement("button");
  mainMenuButton.classList.add("menu-button");
  mainMenuButton.textContent = "Main Menu";

  // Append elements to their parent containers
  buttonContainer.append(continueButton, settingsButton, mainMenuButton);
  menuDiv.append(title, buttonContainer);

  // Add click event listener to menu div
  menuDiv.addEventListener("click", (event) => {
    // Check if the clicked element is the menu div
    if (event.target === menuDiv) {
      // Open the menu
      menuDiv.classList.remove("closed");

      // Add click event listener to continue button
      continueButton.addEventListener("click", () => {
        // Close the menu
        menuDiv.classList.add("closed");
        // Remove the click event listener from continue button
        continueButton.removeEventListener("click", () => {});
      });
      settingsButton.addEventListener("click", () => {
        // Close the menu
        menuDiv.classList.add("closed");
        // Remove the click event listener from continue button
        continueButton.removeEventListener("click", () => {});
      });
      mainMenuButton.addEventListener("click", () => {
        // Close the menu
        menuDiv.classList.add("closed");
        // Remove the click event listener from continue button
        continueButton.removeEventListener("click", () => {});
      });
    }
  });

  return menuDiv;
}
