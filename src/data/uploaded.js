let uploadedFiles = JSON.parse(localStorage.getItem('uploaded')) || [];

export const addUploaded = (gifId) => {
  if (uploadedFiles.find((id) => id === gifId)) {
    return;
  }
  uploadedFiles.push(gifId);
  localStorage.setItem('uploaded', JSON.stringify(uploadedFiles));
};

export const getUploaded = () => [...uploadedFiles];
