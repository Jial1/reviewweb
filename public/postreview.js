/**
 * Handles the 'change' event of an image upload input. Reads the selected image file,
 * clears any existing previews, and displays the selected image in a specified container.
 *
 * @param {Event} event - The 'change' event object.
 */
const imageUpload = document.getElementById('imageUpload');

imageUpload.addEventListener('change', function(event) {
    const input = event.target;
    const preview = document.getElementById('selectedImage');

    while (preview.firstChild) {
        preview.removeChild(preview.firstChild);
    }

    const file = input.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        const img = document.createElement('img');
        img.src = reader.result;
        img.width = 200; // Adjust the image width as needed
        preview.appendChild(img);
    }

    if (file) {
        reader.readAsDataURL(file);
    }
});

