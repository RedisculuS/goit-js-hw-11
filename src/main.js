'use strict';

const form = document.querySelector(".form");
const searchInput = document.querySelector(".search-img-input");
const btnSubmit = document.querySelector(".submit-btn")

// console.log(form.children);

form.addEventListener("input", handleInput)
form.addEventListener("submit", handleSubmit);

function handleInput(event) {
    event.preventDefault();
    
}


function handleSubmit(event) {
    event.preventDefault();

    const query = searchInput.value.trim();

    if (!query) {
        // alert
        return;
    }


}