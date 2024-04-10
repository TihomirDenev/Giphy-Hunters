import { ABOUT, CONTAINER_SELECTOR, FAVORITES, HOME, TRENDING_GIFS, UPLOADED_GIFS, UPLOAD_GIF } from '../common/constants.js';
import { toAboutView } from '../views/about-view.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { toHomeView } from '../views/home-view.js';
import { toTrendingView } from '../views/trending-view.js';
import { toUploadGifView } from '../views/upload-gif-view.js';
import { toUploadedGifsView } from '../views/uploaded-gifs-view.js';
import { q, setActiveNav } from './helpers.js';

// public API
export const loadPage = (page = '') => {
  switch (page) {
    case HOME:
      setActiveNav(HOME);
      return renderHome();

    case TRENDING_GIFS:
      setActiveNav(TRENDING_GIFS);
      return renderTrending();

    case FAVORITES:
      setActiveNav(FAVORITES);
      return renderFavorites();

    case UPLOAD_GIF:
      setActiveNav(UPLOAD_GIF);
      return renderUploadGif();

    case UPLOADED_GIFS:
      setActiveNav(UPLOADED_GIFS);
      return renderUploadedGifs();

    case ABOUT:
      setActiveNav(ABOUT);
      return renderAbout();

    // missing partial implementation

    /* if the app supports error logging, use default to log mapping errors */
    default:
      return null;
  }
};

const renderHome = () => {
  q(CONTAINER_SELECTOR).innerHTML = toHomeView();
};

const renderTrending = () => {
  q(CONTAINER_SELECTOR).innerHTML = toTrendingView();
};

const renderFavorites = () => {
  q(CONTAINER_SELECTOR).innerHTML = toFavoritesView();
};

const renderUploadGif = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadGifView();
};

const renderUploadedGifs = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadedGifsView();
};

const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};