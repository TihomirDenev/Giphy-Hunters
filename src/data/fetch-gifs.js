// public API
import { API_KEY, GET_GIPHY_URL, LOAD_N_GIFS, UPLOAD_GIPHY_URL } from '../common/constants.js';
import { addUploaded } from './uploaded.js';

/**
 * Fetches a random GIF from the GIPHY API.
 * @returns {Promise<Object>} The fetched GIF data.
 */
export const getGifsAsync = async () => {
  try {
    const randomGif = await fetch(
      `${GET_GIPHY_URL}random?api_key=${API_KEY}`
    );
    const data = await randomGif.json();
    const imageData = data.data;

    if (!imageData) {
      alert('Error getting gifs');
      throw new Error(data.meta.msg);
    }

    return imageData;
  } catch (e) {
    console.log(e.message);
  }
};

/**
 * Fetches a GIF by its ID from the Giphy API.
 * @param {string|null} gifId - The ID of the GIF to fetch. If null, fetches a random GIF.
 * @returns {Promise<Object>} - A promise that resolves to the fetched GIF data.
 */
export const getGifsByIdAsync = async (gifId = null) => {
  try {
    const gifByID = await fetch(
      `${GET_GIPHY_URL}${gifId}?api_key=${API_KEY}`
    );
    const data = await gifByID.json();

    if (!data.data) {
      alert('Error getting gif by id');
      throw new Error(data.meta.msg);
    }

    return data.data;
  } catch (e) {
    console.log(e.message);
  }
};

/**
 * Fetches GIFs from the GIPHY API based on the provided search term.
 *
 * @param {string} [searchTerm=''] - The search term to use for fetching GIFs.
 * @returns {Promise<Array>} - A promise that resolves to an array of GIF data.
 */
export const searchGifsAsync = async (searchTerm = '') => {
  try {
    const response = await fetch(
      `${GET_GIPHY_URL}search?api_key=${API_KEY}&q=${searchTerm}&limit=${LOAD_N_GIFS}`
    );
    const dataJson = await response.json();

    if (!dataJson.data) {
      alert('Error searching gifs');
      throw new Error(dataJson.meta.msg);
    }

    return dataJson.data;
  } catch (e) {
    console.log(e.message);
  }
};

/**
 * Fetches trendy gifs from the Giphy API.
 * @param {number} offSet - The offset value for pagination.
 * @returns {Promise<Object>} - A promise that resolves to the fetched trendy gifs.
 */
export const getTrendyGifAsync = async (offSet = 0) => {
  try {
    const data = await fetch(
      `${GET_GIPHY_URL}trending?api_key=${API_KEY}&limit=${LOAD_N_GIFS}&offset=${offSet}`
    );
    const getTrendyGif = await data.json();

    if (!getTrendyGif.data) {
      alert('Error getting trendy gifs');
      throw new Error(getTrendyGif.meta.msg);
    }

    return getTrendyGif;
  } catch (e) {
    console.log(e.message);
  }
};

/**
 * Uploads a GIF file to the GIPHY API.
 * @param {File} file - The GIF file to be uploaded.
 * @returns {Promise<void>} - A promise that resolves when the GIF is successfully uploaded.
 */
export const postGifAsync = async (file) => {
  try {
    const formData = new FormData();
    formData.append('file', file);

    const data = await fetch(
      `${UPLOAD_GIPHY_URL}?api_key=${API_KEY}`,
      {
        method: 'POST',
        body: formData,
      }
    );
    const response = await data.json();

    if (!response.data) {
      alert('Error uploading gif');
      throw new Error(response.meta.msg);
    }

    addUploaded(response.data.id);
  } catch (e) {
    console.log(e.message);
  }
};
