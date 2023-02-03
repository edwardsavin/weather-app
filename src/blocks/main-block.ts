import createSearchBar from "./search-bar";
import { createResultsContainer } from "./search-results";
import { createUnitSwitcher } from "./unit-switch";

function populateMainBlock() {
  const mainBlock = document.getElementById("main");

  const searchBar = createSearchBar();
  const resultsContainer = createResultsContainer();
  const unitSwitcher = createUnitSwitcher();

  mainBlock.appendChild(searchBar);
  mainBlock.appendChild(unitSwitcher);
  mainBlock.appendChild(resultsContainer);

  return mainBlock;
}

export default populateMainBlock;
