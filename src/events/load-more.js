import { CONTAINER_SELECTOR, LOAD_N_GIFS } from "../common/constants.js";
import { getTrendyGifAsync } from "../data/fetch-gifs.js";
import { toLoadMoreView } from "../views/load-more-view.js";
import { q } from "./helpers.js";

/**
 * Loads more trendy GIFs asynchronously and appends them to the container.
 * @returns {Promise<void>} A promise that resolves when the GIFs are loaded and appended.
 */
export const renderLoadMore = async () => {
  const gifs = await getTrendyGifAsync(LOAD_N_GIFS);
  q(CONTAINER_SELECTOR).innerHTML += toLoadMoreView(gifs);
};