import createSearchBar from "./search-bar";
import { createResultsContainer } from "./search-results";

function populateMainBlock() {
  const mainBlock = document.getElementById("main");
  const searchBar = createSearchBar();
  const resultsContainer = createResultsContainer();

  mainBlock.appendChild(searchBar);
  mainBlock.appendChild(resultsContainer);

  return mainBlock;
}

export default populateMainBlock;
