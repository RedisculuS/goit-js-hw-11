'use strict';

import { fetchImages } from './js/pixabay-api';
import { renderImages, showError } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const searchInput = document.querySelector('.search-img-input');
const gallery = document.querySelector('.gallery');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const query = searchInput.value.trim();

  if (!query) {
    showError('Please enter a search term');
    return;
  }

  fetchImages(query)
    .then(images => {
      if (images.length === 0) {
        showError(
          'Sorry, there are no images matching your search query. Please try again!'
        );
      } else {
          gallery.innerHTML = renderImages(images);
          const galleryLightbox = new SimpleLightbox('.gallery a', {
            captionsData: 'alt',
            captionDelay: 250,
});
      }
    })
    .catch(error => {
      showError('An error occured while fetching images');
      console.error(error);
    });
}