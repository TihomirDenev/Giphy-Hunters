import { HOME } from './common/constants.js';
import { q } from './events/helpers.js';
import { loadPage } from './events/navigation-events.js';
import { renderSearchItems } from './events/search-events.js';
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
    // if (event.target.classList.contains(/* your button class here */)) {
    //   renderGifDetails(
    //     +(event.target.getAttribute(/* your correct data attribute here */))
    //   );
    // }
    // if (event.target.classList.contains('favorite')) {
    //   toggleFavoriteStatus(+event.target.getAttribute('data-movie-id'));
    // }
  });

  // search events
  q('input#search').addEventListener('input', (event) => {
    renderSearchItems(event.target.value);
  });

  loadPage(HOME);
});
