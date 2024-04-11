import { renderFavoriteStatus } from '../events/favorites-events.js';

export const toSingleGifView = (gif) => `
<div id="gif">
    <h1>${gif.title}</h1>
    <div class="content">
    ${toGifDetailed(gif)}
    </div>
</div>
`;

export const toGifSimple = (gif) => `
<div class="gif">
    <img src="${gif.images.original.url}" alt="missing image"><br>
    <button class="view-gif-btn" data-gif-id="${gif.id}">View Gif details</button>
    ${renderFavoriteStatus(gif.id)}
</div>
`;

const toGifDetailed = (gif) => `
<div class="gif-detailed">
    <div class="poster">
    <img src="${gif}">
    </div>
    <div class="gif-info">
    <p>Type: ${gif.type}</p>
    <p>Username: ${gif.username}</p>
    <p>Import Data: ${gif.import_datetime}</p>
    </div>
</div>
`;
