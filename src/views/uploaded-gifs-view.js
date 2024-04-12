import { UPLOADED_GIFS } from '../common/constants.js';
import { toGifSimple } from './gif-views.js';
export const toUploadedGifsView = (gifs) => `
<div id="about">
  <div class="content">
    <h1>Animated Treasures Uploaded by Me</h1>
    <div class="gif-listing">${gifs.map((gif) => toGifSimple(gif, UPLOADED_GIFS)).join('') || `
    <h2>No GIFs uploaded yet!</h2>
    <h2>GIF gallery is waiting for your contributions!</h2>
    `
  }</div>
  </div>
</div>
`;
