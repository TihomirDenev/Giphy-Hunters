import { getFavorites } from '../data/favorites.js';
import { getGifsAsync, getGifsByIdAsync, getTrendyGifAsync, postGifAsync } from '../data/fetch-gifs.js';
import { getUploaded } from '../data/uploaded.js';

// request for getting the gif and return it
export const loadGifsAsync = async () => {
  const imageData = await getGifsAsync();
  return imageData;
};

// visualize gifs with buttons - view details and heart (add favorite)
export const loadGifsById = (id = null) => {
  const gif = getGifsByIdAsync(id);
  return gif;
};

// after view details button - the information for gif
export const loadGifDetailAsync = async (id = null) => {
  const gif = await getGifsByIdAsync(id);
  return gif;
};

// request for getting trendy gifs and return them
export const loadTrendyGifAsync = async (offSet = 0) => {
  const trendyGifs = await getTrendyGifAsync(offSet);
  return trendyGifs;
};

export const uploadGifAsync = async (url) => {
  const uploadedGif = await postGifAsync(url);
  return uploadedGif;
};

export const loadUploadedGifsAsync = async () => {
  const gifsById = getUploaded();
  const gifs = [];
  for (let i = 0; i < gifsById.length; i++) {
    const gif = await getGifsByIdAsync(gifsById[i]);
    gifs.push(gif);
  }
  return gifs;
};

export const loadFavoriteGifsAsync = async () => {
  const gifsById = getFavorites();
  const gifs = [];
  for (let i = 0; i < gifsById.length; i++) {
    const gif = await getGifsByIdAsync(gifsById[i]);
    gifs.push(gif);
  }
  return gifs;
}