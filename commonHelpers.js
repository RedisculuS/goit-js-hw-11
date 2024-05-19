import{i as l}from"./assets/vendor-ad859c2f.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))c(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();const a="43967749-ce2f7a1bd8d115ad659da346f",u="https://pixabay.com/api/";function f(n){const e=`${u}?key=${a}&q=${encodeURIComponent(n)}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(e).then(t=>{if(!t.ok)throw new Error(`Error: ${err.message}`);return t.json()}).then(t=>t.hits).catch(t=>(console.log("Fetch error:",t),[]))}function d(n){return n.map(e=>`<li class="gallery-item">
      <a class="gallery-link" href="${e.webformatURL}">
        <img 
          class="gallery-image" 
          src="${e.largeImageURL}" 
          alt="${e.tags}" 
          />
          
      </a>
      <ul class='description'>
      <li><strong>Likes</strong> ${e.likes}</li>
      <li><strong>Views</strong> ${e.views}</li>
      <li><strong>Comments</strong> ${e.comments}</li>
      <li><strong>Downloads</strong> ${e.downloads}</li>

      </ul>
    </li>`).join("")}function i(n){l.error({title:"Error",message:n})}const m=document.querySelector(".form"),h=document.querySelector(".search-img-input"),g=document.querySelector(".gallery");m.addEventListener("submit",y);function y(n){n.preventDefault();const e=h.value.trim();if(!e){i("Please enter a search term");return}f(e).then(t=>{t.length===0?i("Sorry, there are no images matching your search query. Please try again!"):g.innerHTML=d(t)}).catch(t=>{i("An error occured while fetching images"),console.error(t)})}
//# sourceMappingURL=commonHelpers.js.map
