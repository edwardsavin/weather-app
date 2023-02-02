import getTemperature from "../functions/api-search";

function createSearchInput() {
  const searchBarInput = document.createElement("input");
  searchBarInput.classList.add("search-input");
  searchBarInput.setAttribute("type", "text");
  searchBarInput.setAttribute("placeholder", "Search a location...");

  return searchBarInput;
}

function createSearchButton() {
  const searchButton = document.createElement("button");
  searchButton.classList.add("search-button");
  searchButton.setAttribute("type", "submit");
  searchButton.textContent = "Search";

  return searchButton;
}

function createSearchBar() {
  const searchBarContainer = document.createElement("div");
  searchBarContainer.classList.add("search-bar-container");

  const searchInput = createSearchInput();
  const searchButton = createSearchButton();

  searchInput.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      const response = getTemperature(searchInput.value);
      console.log(response);
    }
  });

  searchButton.addEventListener("click", () => {
    const response = getTemperature(searchInput.value);
    console.log(response);
  });

  searchBarContainer.appendChild(searchInput);
  searchBarContainer.appendChild(searchButton);

  return searchBarContainer;
}

export default createSearchBar;
