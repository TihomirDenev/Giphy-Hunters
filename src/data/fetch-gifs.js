// public API

import { API_KEY } from '../common/constants.js';

export const getGifsAsync = async () => {
  const randomGif = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`);
  const data = await randomGif.json();
  const imageData = data.data;
  return imageData;
};

// TODO
export const getGifsById = (gifId = null) => {
  // fetch by id
};

export const getGifsDetailedInfoAsync = async (gifId = null) => {
  const gifByID = await fetch(`https://api.giphy.com/v1/gifs/${gifId}?api_key=${API_KEY}`);
  const data = await gifByID.json();
  return data.data;
};

export const searchGifsAsync = async (searchTerm = '') => {
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}`);
  const dataJson = await response.json();
  return dataJson.data;
};

export const getTrendyGifAsync = async () => {
  const data = await fetch(`https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`);

  const getTrendyGif = await data.json();
  return getTrendyGif;
};
