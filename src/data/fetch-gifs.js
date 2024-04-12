// public API

import { API_KEY } from '../common/constants.js';
import { addUploaded } from './uploaded.js';

export const getGifsAsync = async () => {
  const randomGif = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  );
  const data = await randomGif.json();
  const imageData = data.data;
  return imageData;
};

export const getGifsByIdAsync = async (gifId = null) => {
  const gifByID = await fetch(
    `https://api.giphy.com/v1/gifs/${gifId}?api_key=${API_KEY}`
  );
  const data = await gifByID.json();
  return data.data;
};

export const getGifsDetailedInfoAsync = async (gifId = null) => {
  const gifByID = await fetch(
    `https://api.giphy.com/v1/gifs/${gifId}?api_key=${API_KEY}`
  );
  const data = await gifByID.json();
  return data.data;
};

export const searchGifsAsync = async (searchTerm = '') => {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}`
  );
  const dataJson = await response.json();
  return dataJson.data;
};

export const getTrendyGifAsync = async () => {
  const data = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
  );

  const getTrendyGif = await data.json();
  return getTrendyGif;
};

export const postGifAsync = async (file) => {
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
};
