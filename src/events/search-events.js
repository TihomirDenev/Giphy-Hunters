import { CONTAINER_SELECTOR } from "../common/constants.js";
import { searchGifsAsync } from "../data/fetch-gifs.js";
import { toSearchView } from "../views/search-view.js";
import { q } from "./helpers.js";

/**
 * Renders search items asynchronously.
 *
 * @param {string} searchTerm - The search term to be used for searching gifs.
 * @returns {Promise<void>} - A promise that resolves when the search items are rendered.
 */
export const renderSearchItemsAsync = async (searchTerm) => {
  const gifs = await searchGifsAsync(searchTerm);
  q(CONTAINER_SELECTOR).innerHTML = toSearchView(gifs, searchTerm);
};
