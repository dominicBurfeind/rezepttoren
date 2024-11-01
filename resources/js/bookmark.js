// bookmark.js

import { bookmarkContainer } from './domElements.js'; // Ensure the path is correct


// Adds a recipe to bookmarks and updates the display
export function addBookmark(recipe) {
  if (bookmarkExists(recipe.label)) return console.log('Recipe already bookmarked');

  const svgButton = document.querySelector(`[data-recipe-label="${recipe.label}"] .bookmark-btn svg`);
  if (svgButton) svgButton.style.fill = 'green';

  const bookmarkCard = createBookmarkCard(recipe);
  bookmarkContainer.appendChild(bookmarkCard);
  
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  bookmarks.push(recipe);
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
}

// Creates the bookmark card to display in the bookmark container
function createBookmarkCard(recipe) {
  const bookmarkCard = document.createElement('div');
  bookmarkCard.className = 'container card mb-2';
  bookmarkCard.style.width = '16rem';
  bookmarkCard.dataset.recipe = recipe.label;
  bookmarkCard.innerHTML = `
    <h6 class="card-title m-2">${recipe.label}</h6>
    <img src="${recipe.image}" class="card-img-top">
    <a href="${recipe.url}" class="btn btn-sm btn-outline-success m-2">Zum Rezept</a>
    <button class="btn btn-sm btn-outline-danger m-2">Entfernen</button>
  `;
  bookmarkCard.querySelector('button').addEventListener('click', () => removeBookmark(recipe.label));
  return bookmarkCard;
}

// Checks if a recipe is already bookmarked
function bookmarkExists(label) {
  return bookmarkContainer.querySelector(`[data-recipe="${label}"]`);
}

// Removes a recipe from bookmarks and updates the display
export function removeBookmark(recipeLabel) {
  const bookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];
  const updatedBookmarks = bookmarks.filter(recipe => recipe.label !== recipeLabel);
  localStorage.setItem('bookmarks', JSON.stringify(updatedBookmarks));
  
  const bookmarkCard = bookmarkContainer.querySelector(`[data-recipe="${recipeLabel}"]`);
  if (bookmarkCard) bookmarkCard.remove();

  const svgButton = document.querySelector(`[data-recipe-label="${recipeLabel}"] .bookmark-btn svg`);
  if (svgButton) svgButton.style.fill = 'currentColor';
}
