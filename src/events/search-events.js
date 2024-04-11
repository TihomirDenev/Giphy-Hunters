import { CONTAINER_SELECTOR } from "../common/constants.js";
import { searchGifsAsync } from "../data/fetch-gifs.js";
import { toSearchView } from "../views/search-view.js";
import { q } from "./helpers.js";

export const renderSearchItemsAsync = async (searchTerm) => {
  const gifs = await searchGifsAsync(searchTerm);
  q(CONTAINER_SELECTOR).innerHTML = toSearchView(gifs, searchTerm);
};
