import { renderFavoriteStatus } from '../events/favorites-events.js';

export const toTrendingView = (gif) => `
<div id="Trendy">
  <div class="content">
    <h1>Trending</h1>
    <h2>Here you can find the latest trending giphys</h2>
    ${gif.data.map(
      (obj) =>
        ` 
        <div class="trending-gif-container">
          <img src="${obj.images.fixed_height.url}" alt="missing img"></img>
          <button class="viewDetails" data-gif-id="${
            obj.id
          }">View Details</button>
          ${renderFavoriteStatus(obj.id)}
        </div>
        `
    )}
  </div>
</div>
`;
