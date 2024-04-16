import { ABOUT, CONTAINER_SELECTOR, FAVORITES, HOME, TRENDING_GIFS, UPLOADED_GIFS, UPLOAD_GIF, } from '../common/constants.js';
import { loadFavoriteGifsAsync, loadGifDetailAsync, loadGifsAsync, loadTrendyGifAsync, loadUploadedGifsAsync, } from '../requests/request-service.js';
import { toAboutView } from '../views/about-view.js';
import { toFavoritesView } from '../views/favorites-view.js';
import { toSingleGifView } from '../views/gif-views.js';
import { toHomeView } from '../views/home-view.js';
import { toTrendingView } from '../views/trending-view.js';
import { toUploadGifView } from '../views/upload-gif-view.js';
import { toUploadedGifsView } from '../views/uploaded-gifs-view.js';
import { toVideoView } from '../views/video-view.js';
import { q, setActiveNav } from './helpers.js';

// public API
export const loadPage = (page = '') => {
  switch (page) {
    case HOME:
      setActiveNav(HOME);
      return renderHomeAsync();

    case TRENDING_GIFS:
      setActiveNav(TRENDING_GIFS);
      return renderTrendingAsync();

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

    /* if the app supports error logging, use default to log mapping errors */
    default:
      return null;
  }
};

/**
 * Renders the details of a GIF asynchronously.
 *
 * @param {string|null} id - The ID of the GIF to load. If null, it will load a random GIF.
 * @returns {Promise<void>} - A promise that resolves when the GIF details are rendered.
 */
export const renderGifDetailsAsync = async (id = null) => {
  const gif = await loadGifDetailAsync(id);
  q(CONTAINER_SELECTOR).innerHTML = toSingleGifView(gif);
};

/**
 * Renders the home view asynchronously.
 * @returns {Promise<void>} A promise that resolves when the home view is rendered.
 */
const renderHomeAsync = async () => {
  const imageData = await loadGifsAsync();
  q(CONTAINER_SELECTOR).innerHTML = toHomeView(imageData);
};

/**
 * Renders the trending GIF asynchronously.
 * @returns {Promise<void>} A promise that resolves when the rendering is complete.
 */
const renderTrendingAsync = async () => {
  const gif = await loadTrendyGifAsync();
  q(CONTAINER_SELECTOR).innerHTML = toTrendingView(gif);
};

/**
 * Renders the favorite GIFs on the webpage.
 * @returns {Promise<void>} A promise that resolves when the rendering is complete.
 */
const renderFavorites = async () => {
  const favorites = await loadFavoriteGifsAsync()
  q(CONTAINER_SELECTOR).innerHTML = toFavoritesView((favorites));
};

/**
 * Renders the upload GIF view by updating the innerHTML of the container element.
 */
const renderUploadGif = () => {
  q(CONTAINER_SELECTOR).innerHTML = toUploadGifView();
};

/**
 * Renders the uploaded GIFs on the page.
 * @returns {Promise<void>} A promise that resolves when the GIFs are rendered.
 */
const renderUploadedGifs = async () => {
  const files = await loadUploadedGifsAsync();
  q(CONTAINER_SELECTOR).innerHTML = toUploadedGifsView(files);
};

/**
 * Renders the about view by updating the content of the container element.
 */
const renderAbout = () => {
  q(CONTAINER_SELECTOR).innerHTML = toAboutView();
};

/**
 * Renders the video view by setting the active navigation and updating the container's innerHTML.
 */
export const renderVideoView = () => {
  setActiveNav();
  q(CONTAINER_SELECTOR).innerHTML = toVideoView();
} 