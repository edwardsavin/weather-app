import createSearchBar from "./search-bar";
import { createResultsContainer } from "./search-results";
import { createUnitSwitcher } from "./unit-switch";

function populateMainBlock() {
  const mainBlock = document.getElementById("main");

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  const contentWrapper = document.createElement("div");
  contentWrapper.classList.add("content-wrapper");

  const searchBar = createSearchBar();
  const resultsContainer = createResultsContainer();
  const unitSwitcher = createUnitSwitcher();

  contentWrapper.appendChild(searchBar);
  contentWrapper.appendChild(unitSwitcher);
  contentWrapper.appendChild(resultsContainer);

  mainContainer.appendChild(contentWrapper);
  mainBlock.appendChild(mainContainer);

  return mainBlock;
}

export default populateMainBlock;
