import { toGifSimple } from "./gif-views.js";

export const toHomeView = (gifData) => `
<div id="home">
  <h1>Giphy Hunters</h1>
  <div class="content">
  <div>${toGifSimple(gifData)}</div>
  </div>
</div>
`;