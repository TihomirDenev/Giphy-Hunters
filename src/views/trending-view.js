export const toTrendingView = (gif) => `
<div id="Trendy">
  <div class="content">
    <h1>Trending</h1>
    <h2>Here you can find the latest trending giphys</h2>
    ${gif.data.map(
      (obj) =>
        ` <img src= ${obj.images.fixed_height.url} alt="missing img"></img>`
    )}
  </div>
</div>
`;
