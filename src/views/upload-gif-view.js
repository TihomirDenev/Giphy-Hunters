const url =
  'https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMzdkYmdrMTd6MG1xOXVvMmhmaHU4Z3owbzB4OTBoem5scmtuZWRubyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MuJDYvbYKzMwONKvdO/giphy.gif';

export const toUploadGifView = () => `
<div id="about">
  <div class="content">
    <h1>Upload gif view</h1>
    <input type="file" id="fileInput" accept=".gif" />
    <button class="upload" data-url="${url}">Upload</button>
  </div>
</div>
`;
