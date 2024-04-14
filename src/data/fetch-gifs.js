// public API

import { API_KEY } from '../common/constants.js';
import { addUploaded } from './uploaded.js';

export const getGifsAsync = async () => {
  try {
    const randomGif = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
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
      `https://api.giphy.com/v1/gifs/${gifId}?api_key=${API_KEY}`
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
      `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}`
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
      `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
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
      `https://upload.giphy.com/v1/gifs?api_key=${API_KEY}`,
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
