import { HOME } from '../common/constants.js';
import { renderFavoriteStatus } from '../events/favorites-events.js';

let previousPage = HOME;

export const toSingleGifView = (gif) => {
    if (gif.title === '') gif.title = 'Missing title for this gif';
    return `
    <div id="gif">
        <h1>${gif.title}</h1>
        <div class="content">
        ${toGifDetailed(gif)}
        </div>
    </div>`
};

export const toGifSimple = (gif, prevPage = HOME) => {
    previousPage = prevPage;
    return `
    <div class="gif trending-gif-container">
        <img src="${gif.images.original.url}" alt="missing image"><br>
        <div class="button-container">
            <button type="button" class="view-gif-btn button-golden" data-gif-id="${gif.id}">View Gif details</button>
            ${renderFavoriteStatus(gif.id)}
        </div>
    </div>`;
}

export const toGifDetailed = (gif) => `
<div class="gif-detailed">
    <div class="gif-gif ">
        <img src="${gif.images.original.url}">
    </div>
    <div class="gif-info">
        <h2>Type: ${gif.type}</h2><br>
        <h2>Username: ${gif.username}</h2><br>
        <h2>Upload Data: ${gif.import_datetime}</h2><br>
        <h2>Go Back Button: ${`<button class="nav-link" data-page="${previousPage}" id="Back" >Back</button>`}</h2>
    </div>
</div>
`;
