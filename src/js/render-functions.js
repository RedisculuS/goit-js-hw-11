'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

export function renderImages(images) {
  return images
    .map(
      img => `<li class="gallery-item">
      <a class="gallery-link" href="${img.webformatURL}">
        <img 
          class="gallery-image" 
          src="${img.largeImageURL}" 
          alt="${img.tags}" 
          />
          
      </a>
      <ul class='description'>
      <li><strong>Likes</strong> ${img.likes}</li>
      <li><strong>Views</strong> ${img.views}</li>
      <li><strong>Comments</strong> ${img.comments}</li>
      <li><strong>Downloads</strong> ${img.downloads}</li>

      </ul>
    </li>`
    )
    .join('');
}

export function showError(message) {
  iziToast.error({
    title: 'Error',
    message: message,
  });
}
