import { toGifSimple } from "./gif-views.js";
import { FAVORITES } from '../common/constants.js';

export const toFavoritesView = (gifs) => `
<div id="favorite">
<div class="content">
  <h1>Favorites</h1>
  <div class="gif-listing">${gifs.map((gif) => toGifSimple(gif, FAVORITES)).join('') || `
  <h2>No GIFs added in favorites yet!</h2>
  <h2>GIF favorites is waiting for your contributions!</h2>
  `}</div>
  </div>
</div>
`;