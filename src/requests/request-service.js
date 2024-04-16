import { getFavorites } from '../data/favorites.js';
import { getGifsAsync, getGifsByIdAsync, getTrendyGifAsync, postGifAsync } from '../data/fetch-gifs.js';
import { getUploaded } from '../data/uploaded.js';

/**
 * Loads GIFs asynchronously.
 * @returns {Promise<any>} A promise that resolves to the loaded image data.
 */
export const loadGifsAsync = async () => {
  const imageData = await getGifsAsync();
  return imageData;
};

/**
 * Loads GIFs by ID.
 * @param {string|null} id - The ID of the GIF to load. If null, loads all GIFs.
 * @returns {Promise} - A promise that resolves to the loaded GIF.
 */
export const loadGifsById = (id = null) => {
  const gif = getGifsByIdAsync(id);
  return gif;
};

/**
 * Loads the details of a GIF asynchronously.
 * @param {string|null} id - The ID of the GIF to load. If null, it will load all GIFs.
 * @returns {Promise<Object>} - A promise that resolves to the loaded GIF details.
 */
export const loadGifDetailAsync = async (id = null) => {
  const gif = await getGifsByIdAsync(id);
  return gif;
};

/**
 * Loads trendy GIFs asynchronously.
 * @param {number} offSet - The offset value for pagination.
 * @returns {Promise<Array>} - A promise that resolves to an array of trendy GIFs.
 */
export const loadTrendyGifAsync = async (offSet = 0) => {
  const trendyGifs = await getTrendyGifAsync(offSet);
  return trendyGifs;
};

/**
 * Uploads a GIF asynchronously.
 *
 * @param {string} url - The URL of the GIF to upload.
 * @returns {Promise} A promise that resolves to the uploaded GIF.
 */
export const uploadGifAsync = async (url) => {
  const uploadedGif = await postGifAsync(url);
  return uploadedGif;
};

/**
 * Loads uploaded GIFs asynchronously.
 * @returns {Promise<Array>} A promise that resolves to an array of GIFs.
 */
export const loadUploadedGifsAsync = async () => {
  const gifsById = getUploaded();
  const gifs = [];
  for (let i = 0; i < gifsById.length; i++) {
    const gif = await getGifsByIdAsync(gifsById[i]);
    gifs.push(gif);
  }
  return gifs;
};

/**
 * Loads favorite GIFs asynchronously.
 * @returns {Promise<Array>} A promise that resolves to an array of favorite GIFs.
 */
export const loadFavoriteGifsAsync = async () => {
  const gifsById = getFavorites();
  const gifs = [];
  for (let i = 0; i < gifsById.length; i++) {
    const gif = await getGifsByIdAsync(gifsById[i]);
    gifs.push(gif);
  }
  return gifs;
}