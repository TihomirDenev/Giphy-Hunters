import { HOME } from './common/constants.js';
import { q } from './events/helpers.js';
import { loadPage, renderGifDetailsAsync } from './events/navigation-events.js';
import { renderSearchItemsAsync } from './events/search-events.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { uploadGifAsync } from './requests/request-service.js';
import { renderLoadMore } from './events/load-more.js';

document.addEventListener('DOMContentLoaded', () => {
  // add global listener
  document.addEventListener('click', (event) => {
    // nav events
    if (event.target.classList.contains('nav-link')) {
      loadPage(event.target.getAttribute('data-page'));
    }

    // show gifs events
    if (event.target.classList.contains('view-gif-btn')) {
      renderGifDetailsAsync(event.target.getAttribute('data-gif-id'));
    }

    // favorite button click event
    if (event.target.classList.contains('favorite')) {
      const gifId = event.target.getAttribute('data-gif-id');
      toggleFavoriteStatus(gifId);
    }
    // Upload
    if (event.target.classList.contains('upload')) {
      const uploadForm = document.getElementById('uploadForm');
      uploadForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior

        const fileInput = document.getElementById('fileInput');
        const file = fileInput.files[0];

        if (!file) {
          alert('Please select a file.');
          return;
        }
        alert('Please wait gif to be uploaded');
        await uploadGifAsync(file);
        alert('File has been uploaded!');
      });
    }

    // search on button press
    if (event.target.classList.contains('search-btn')) {
      const searchInput = event.target.previousElementSibling;
      renderSearchItemsAsync(searchInput.value);
    }

    // search on key (enter) press
    q('input#search').addEventListener('keyup', (event) => {
      if (event.key === 'Enter') {
        renderSearchItemsAsync(event.target.value);
      }
    });

    q('#dark-theme').addEventListener('click', () => {
      console.log('this is dark mode');
      document.body.classList.add('dark-mode');
    });

    q('#cosmic-theme').addEventListener('click', () => {
      console.log('this is light mode');
      document.body.classList.remove('dark-mode');
    });

    q('#light-theme').addEventListener('click', () => {
      q(CONTAINER_SELECTOR).innerHTML = renderVideoView();
    });
  });

  document.addEventListener('scroll', () => {
    // check if user has scrolled to the bottom
    if (document.activeElement.dataset.page === 'trending-gifs') {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      ) {
        renderLoadMore();
      }
    }
  });

  loadPage(HOME);
});
