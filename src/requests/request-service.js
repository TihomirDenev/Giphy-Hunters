import { getFavorites } from '../data/favorites.js';
import { getGifsAsync, getGifsByIdAsync, getGifsDetailedInfoAsync, getTrendyGifAsync, postGifAsync } from '../data/fetch-gifs.js';
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
  const gif = await getGifsDetailedInfoAsync(id);
  return gif;
};

// request for getting trendy gifs and return them

export const loadTrendyGifAsync = async () => {
  const trendyGifs = await getTrendyGifAsync();
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
    gifs.push(await getGifsByIdAsync(gifsById[i]));
  }
  return gifs;
};

export const loadFavoriteGifsAsync = async () => {
  const gifsById = getFavorites();
  const gifs = [];
  for (let i = 0; i < gifsById.length; i++) {
    gifs.push(await getGifsByIdAsync(gifsById[i]));
  }
  return gifs;
}