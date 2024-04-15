import { toGifSimple } from './gif-views.js';

export const toSearchView = (gifs, searchTerm) => `
<div id="gifs">${searchTerm ? `<h1>Gifs found for "${searchTerm}":</h1>
<div class="content">
${gifs.map(gif => toGifSimple(gif)).join('\n') || '<p>No Gifs Found</p>'}
</div>`: '<h1>Search view page</h1>'}
</div>`;
