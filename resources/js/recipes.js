// Import dependencies
import { recipeContainer } from './domElements.js';
import { addBookmark } from './bookmark.js'; 

// Update Page Heading with search query
export function updateHeading(query) {
  document.getElementById('searchName').textContent = query;
}

// Render Recipes in Container
export function renderRecipes(data) {
  recipeContainer.innerHTML = '';  // Clear the container
  const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];  // Load bookmarks from local storage

  if (!data.hits || !data.hits.length) {  // Handle no recipes found
    recipeContainer.innerHTML = '<p>No recipes found</p>';
    return;
  }

  data.hits.forEach(hit => createRecipeCard(hit.recipe, savedBookmarks));  // Render each recipe
}

// Function to create an individual recipe card
export function createRecipeCard(recipe, savedBookmarks) {
  const card = document.createElement('div');
  card.className = 'card rezept container';
  card.style.width = '18rem';
  card.dataset.recipeLabel = recipe.label;

  const isBookmarked = savedBookmarks.some(bookmark => bookmark.label === recipe.label);
  card.innerHTML = `
    <button class="bookmark-btn mt-1 d-flex mt-auto" style="cursor: pointer;">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="${isBookmarked ? 'green' : 'currentColor'}" viewBox="0 0 16 16" class="me-2">
        <path d="M2 2v13.5l5.5-3.5L13 15.5V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1z"/>
      </svg>
    </button>
    <img src="${recipe.image}" class="card-img-top" alt="${recipe.label}">
    <div class="card-body d-flex flex-column">
      <h5 class="card-title">${recipe.label}</h5>
      <div class="zutaten-container">
        <p class="text-secondary" style="font-size: 11.5px;">${recipe.ingredientLines.join(', ')}</p>
      </div>
      <a href="${recipe.url}" class="btn btn-outline-success rezept-btn mt-auto">Zum Rezept</a>
    </div>
  `;
  card.querySelector('.bookmark-btn').addEventListener('click', () => addBookmark(recipe));  // Bookmark button
  recipeContainer.appendChild(card);  // Add the card to the container
}
