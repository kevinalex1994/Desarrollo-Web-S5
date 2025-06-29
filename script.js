const gallery = document.getElementById('gallery');
const addImageBtn = document.getElementById('addImageBtn');
const deleteImageBtn = document.getElementById('deleteImageBtn');
let selectedImage = null;

addImageBtn.addEventListener('click', () => {
  const url = document.getElementById('imageUrl').value;
  if (!url) return;

  const img = document.createElement('img');
  img.src = url;

  img.addEventListener('click', () => {
    if (selectedImage) selectedImage.classList.remove('selected');
    img.classList.add('selected');
    selectedImage = img;
  });

  gallery.appendChild(img);
  document.getElementById('imageUrl').value = '';
});

deleteImageBtn.addEventListener('click', () => {
  if (selectedImage) {
    gallery.removeChild(selectedImage);
    selectedImage = null;
  }
});
