import { HOME } from './common/constants.js';
import { q } from './events/helpers.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchItemsAsync } from './events/search-events.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';

document.addEventListener('DOMContentLoaded', () => {
  // add global listener
  document.addEventListener('click', (event) => {
    // nav events
    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttribute('data-page'));
    }

    // show gifs events
    // TODO
    if (event.target.classList.contains('view-gif-btn')) {
      renderGifDetails((event.target.getAttribute('data-gif-id')));
    }

    // favorite button click event
    if (event.target.classList.contains('favorite')) {
      const gifId = event.target.getAttribute('data-gif-id');
      toggleFavoriteStatus(gifId);
    }
  });

  // search events
  q('input#search').addEventListener('input', (event) => {
    renderSearchItemsAsync(event.target.value);
  });

  loadPage(HOME);
});
