/* Смена главного изображения в галерее */

let activePhoto = document.querySelector('.active-photo');
let previewPhotos = document.querySelectorAll('.preview-list li a');

for (let previewPhoto of previewPhotos) {
    previewPhoto.onclick = function (evt) {
        evt.preventDefault();
        activePhoto.src = previewPhoto.href;
        let activePreview = document.querySelector('.preview-list .active-item');
        activePreview.classList.remove('active-item');
        previewPhoto.classList.add('active-item');
    }
}