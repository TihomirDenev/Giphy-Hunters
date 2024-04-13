import { HOME } from './common/constants.js';
import { q } from './events/helpers.js';
import { loadPage, renderGifDetailsAsync } from './events/navigation-events.js';
import { renderSearchItemsAsync } from './events/search-events.js';
import { toggleFavoriteStatus } from './events/favorites-events.js';
import { uploadGifAsync } from './requests/request-service.js';

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
      uploadForm.addEventListener('submit', handleFormSubmit);
    }
  });

  // search events
  q('input#search').addEventListener('input', (event) => {
    renderSearchItemsAsync(event.target.value);
  });

  loadPage(HOME);
});

async function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (!file) {
    alert('Please select a file.');
    return;
  }
  alert('File has been uploaded!');
  await uploadGifAsync(file);
}
