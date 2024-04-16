import { TRENDING_GIFS } from '../common/constants.js';
import { toGifSimple } from './gif-views.js';

export const toLoadMoreView = (gifs) => `
    <div class="gif-listing" style="margin: 0px">
    ${gifs.data
    .map((gif) => toGifSimple(gif, TRENDING_GIFS))
    .join('')
  }
</div>
`;