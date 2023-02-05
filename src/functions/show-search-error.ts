function clearSearchError() {
  const errorDiv = document.querySelector(".search-error");
  if (errorDiv) {
    errorDiv.remove();
  }
}

function showSearchError() {
  const contentWrapper = document.querySelector(".content-wrapper");
  const searchBarContainer = document.querySelector(".search-bar-container");

  const errorDiv = document.createElement("div");
  errorDiv.classList.add("search-error");
  errorDiv.textContent =
    "Cannot find this location. To make search more precise, please put the city's name, comma, 2-letter country code (ISO3166).";

  // Insert error div after search bar container
  contentWrapper?.insertBefore(errorDiv, searchBarContainer?.nextSibling);
}

export { showSearchError, clearSearchError };
