import createSearchBar from "./search-bar";

function populateMainBlock() {
  const mainBlock = document.getElementById("main");
  const searchBar = createSearchBar();

  mainBlock.appendChild(searchBar);

  return mainBlock;
}

export default populateMainBlock;
