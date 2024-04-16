let uploadedFiles = JSON.parse(localStorage.getItem('uploaded')) || [];

/**
 * Adds a GIF ID to the uploadedFiles array and stores it in localStorage.
 * @param {string} gifId - The ID of the GIF to be added.
 */
export const addUploaded = (gifId) => {
  if (uploadedFiles.find((id) => id === gifId)) {
    return;
  }
  uploadedFiles.push(gifId);
  localStorage.setItem('uploaded', JSON.stringify(uploadedFiles));
};

/**
 * Retrieves the uploaded files.
 * @returns {Array} An array containing the uploaded files.
 */
export const getUploaded = () => [...uploadedFiles];
