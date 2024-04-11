// public API

import { API_KEY } from '../common/constants.js';

// TODO
export const getGifs = async () => {
  const randomGif = await fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
  );
  const data = await randomGif.json();
  const image = data.data.images.fixed_height.url;
  console.log(`Random GIF data: ${image}`);
  return image;
};

// TODO
export const getGifsById = (gifId = null) => {
  // fetch by id
};

//TODO
export const getGifsDetailedInfo = (gidId = null) => {
  // fetch gifs`s info
};

//TODO
export const searchGifs = (searchTerm = '') => {
  // search gifs
};

export const getTrendyGif = async () => {
  const data = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}`
  );

  const getTrendyGif = await data.json();
  return getTrendyGif;
};
