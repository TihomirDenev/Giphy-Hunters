import { renderFavoriteStatus } from '../events/favorites-events.js';

export const toTrendingView = (gif) => `
<div id="Trendy">
  <div class="content">
    <h1>Trending</h1>
    <h2>Here you can find the latest trending giphys</h2>
    <div class="trending-gif-container">
    ${gif.data.map(
      (obj) =>
        ` 
          <img src="${obj.images.fixed_height.url}" alt="missing img"></img> 
          ${renderFavoriteStatus(
            obj.id
          )}<button class="viewDetails" data-gif-id="${
          obj.id
        }">View Details</button> `
    )}
</div>
  </div>
</div>
`;
