import createSearchBar from "./search-bar";
import { createResultsContainer } from "./search-results";
import { createUnitSwitcher } from "./unit-switch";
import createFooter from "./footer";

// Populate the main block with all the elements
function populateMainBlock() {
  const mainBlock = document.getElementById("main");

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  const contentWrapper = document.createElement("div");
  contentWrapper.classList.add("content-wrapper");

  const searchBar = createSearchBar();
  const resultsContainer = createResultsContainer();
  const unitSwitcher = createUnitSwitcher();
  const footer = createFooter();

  contentWrapper.appendChild(searchBar);
  contentWrapper.appendChild(resultsContainer);
  contentWrapper.appendChild(unitSwitcher);
  contentWrapper.appendChild(footer);

  mainContainer.appendChild(contentWrapper);
  mainBlock.appendChild(mainContainer);

  return mainBlock;
}

export default populateMainBlock;
