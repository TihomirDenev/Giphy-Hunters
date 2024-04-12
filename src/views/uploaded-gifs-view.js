export const toUploadedGifsView = (gifs) => `
<div id="about">
  <div class="content">
    <h1>Uploaded Gifs View</h1>
     ${
       gifs.map(
         (gif) =>
           `<img src="${gif.images.original.url}" alt="missing image"><br>`
       ) || `<p>No Uploads</p>`
     }
  </div>
</div>
`;
