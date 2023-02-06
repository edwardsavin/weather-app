import { clearSearchError } from "../functions/show-search-error";
import { sendResultsToDom, clearResults } from "./search-results";

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
      clearSearchError();
      clearResults();
      sendResultsToDom(searchInput.value);
    }
  });

  searchButton.addEventListener("click", () => {
    clearSearchError();
    clearResults();
    sendResultsToDom(searchInput.value);
  });

  searchBarContainer.appendChild(searchInput);
  searchBarContainer.appendChild(searchButton);

  return searchBarContainer;
}

export default createSearchBar;
