'use strict';

import { fetchImages } from './js/pixabay-api';
// import { renderImages, showError, clearError } from './js/render-functions';
import { renderImages, showError } from './js/render-functions';

const form = document.querySelector('.form');
const searchInput = document.querySelector('.search-img-input');
const gallery = document.querySelector('.gallery');
// const btnSubmit = document.querySelector('.submit-btn');

// console.log(form.children);

// form.addEventListener('input', handleInput);
form.addEventListener('submit', handleSubmit);

// function handleInput(event) {
//   event.preventDefault();
// }

function handleSubmit(event) {
  event.preventDefault();
  //   clearError();

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
      }
    })
    .catch(error => {
      showError('An error occured while fetching images');
      console.error(error);
    });
}
