import { getGifsAsync, getGifsById, getGifsDetailedInfoAsync, getTrendyGifAsync, } from '../data/fetch-gifs.js';

// request for getting the gif and return it
export const loadGifsAsync = async () => {
  const imageData = await getGifsAsync();
  return imageData;
};

// visualize gifs with buttons - view details and heart (add favorite)
export const loadGifsById = (id = null) => {
  const gif = getGifsById(id);
  return gif;
};

// after view details button - the information for gif
export const loadGifDetailAsync = async (id = null) => {
  const gif = await getGifsDetailedInfoAsync(id);
  return gif;
};

// request for getting trendy gifs and return them

export const loadTrendyGifAsync = async () => {
  const trendyGifs = await getTrendyGifAsync();
  return trendyGifs;
};
