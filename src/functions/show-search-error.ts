function showSearchError() {
  const searchBarContainer = document.querySelector(".search-bar-container");
  const errorDiv = document.createElement("div");
  errorDiv.classList.add("search-error");
  errorDiv.textContent =
    "Cannot find this location. To make search more precise, please put the city's name, comma, 2-letter country code (ISO3166).";

    searchBarContainer.appendChild(errorDiv);
}

export default showSearchError;