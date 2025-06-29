const gallery = document.getElementById('gallery');
const addImageBtn = document.getElementById('addImage');
const removeImageBtn = document.getElementById('removeImage');
const imageUrlInput = document.getElementById('imageUrl');

let selectedImage = null;

// Agregar imagen
addImageBtn.addEventListener('click', () => {
  const url = imageUrlInput.value.trim();
  if (url) {
    const img = document.createElement('img');
    img.src = url;
    img.alt = 'Imagen agregada';
    img.addEventListener('click', () => selectImage(img));
    gallery.appendChild(img);
    imageUrlInput.value = '';
  }
});

// Seleccionar imagen
function selectImage(img) {
  if (selectedImage) {
    selectedImage.classList.remove('selected');
  }
  selectedImage = img;
  selectedImage.classList.add('selected');
}

// Eliminar imagen seleccionada
removeImageBtn.addEventListener('click', () => {
  if (selectedImage) {
    gallery.removeChild(selectedImage);
    selectedImage = null;
  } else {
    alert('Selecciona una imagen para eliminar.');
  }
});

// Atajo de teclado: Enter para agregar imagen
imageUrlInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    addImageBtn.click();
  }
});
