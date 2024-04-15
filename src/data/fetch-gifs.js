// public API
import { API_KEY, GET_GIPHY_URL, UPLOAD_GIPHY_URL } from '../common/constants.js';
import { addUploaded } from './uploaded.js';

export const getGifsAsync = async () => {
  try {
    const randomGif = await fetch(
      `${GET_GIPHY_URL}random?api_key=${API_KEY}`
    );
    const data = await randomGif.json();
    const imageData = data.data;
    return imageData;
  } catch (e) {
    console.log(e.message);
  }
};

export const getGifsByIdAsync = async (gifId = null) => {
  try {
    const gifByID = await fetch(
      `${GET_GIPHY_URL}${gifId}?api_key=${API_KEY}`
    );
    const data = await gifByID.json();
    return data.data;
  } catch (e) {
    console.log(e.message);
  }
};

export const searchGifsAsync = async (searchTerm = '') => {
  try {
    const response = await fetch(
      `${GET_GIPHY_URL}search?api_key=${API_KEY}&q=${searchTerm}`
    );
    const dataJson = await response.json();
    return dataJson.data;
  } catch (e) {
    console.log(e.message);
  }
};

export const getTrendyGifAsync = async () => {
  try {
    const data = await fetch(
      `${GET_GIPHY_URL}trending?api_key=${API_KEY}`
    );
    const getTrendyGif = await data.json();
    return getTrendyGif;
  } catch (e) {
    console.log(e.message);
  }
};

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
    addUploaded(response.data.id);
  } catch (e) {
    console.log(e.message);
  }
};
