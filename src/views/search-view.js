import { toGifSimple } from './gif-views.js';

export const toSearchView = (gifs, searchTerm) => `
<div id="gifs">${searchTerm ? `<h1>Gifs found for "${searchTerm}":</h1>
<div class="content">
<div class="gif-listing">${gifs.map(gif => toGifSimple(gif)).join('\n') || '<p>No Gifs Found</p>'}</div>
</div>`: '<h1>Search view page</h1>'}
</div>`;
