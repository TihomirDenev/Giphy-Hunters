import {
  getGifs,
  getGifsById,
  getGifsDetailedInfo
} from '../data/fetch-gifs.js';

// request for getting the gif and return it
export const loadGifs = () => {
  const gif = getGifs();
  return gif;
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
