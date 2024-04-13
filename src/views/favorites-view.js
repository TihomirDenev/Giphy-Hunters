import { toGifSimple } from "./gif-views.js";

export const toFavoritesView = (gifs) =>`
<div id="gifs">
  <div class="content">
  <h1>Favorite gifs:</h1>
  ${gifs.map(toGifSimple).join('\n') || `
  <h2>No GIFs added in favorites yet!</h2>
  <h2>GIF favorites is waiting for your contributions!</h2>
  `}
  </div>
</div>
`;
