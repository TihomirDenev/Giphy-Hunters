export const toUploadGifView = () => `
<div id="about">
  <div class="content">
    <h1>Upload your own gif</h1>
    <br />
    <p>Share your gif with the world!</p>
    <p>Upload your gif and see it in the <span class="golden-text">Uploaded Gifs</span> section.</p>
    <br />
    <form id="uploadForm" class="upload ">
      <input type="file" id="fileInput" accept=".gif" placeholder="Upload" />
      <button class="upload button-golden" type="submit">Upload GIF</button>
    </form>
  </div>
</div>
`;
