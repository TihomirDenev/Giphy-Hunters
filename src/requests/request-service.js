import { getGifs, getGifsById, getGifsDetailedInfo, getTrendyGif, } from '../data/fetch-gifs.js';

// request for getting the gif and return it
export const loadGifs = async () => {
  const imageData = await getGifs();
  return imageData;
};

// visualize gifs with buttons - view details and heart (add favorite)
export const loadGifsById = (id = null) => {
  const gif = getGifsById(id);
  return gif;
};

// after view details button - the information for gif
export const loadGifDetail = (id = null) => {
  const gif = getGifsDetailedInfo(id);
  return gif;
};

// request for getting trendy gifs and return them

export const loadTrendyGifAsync = async () => {
  const trendyGifs = await getTrendyGif();
  return trendyGifs;
};
