// Import dependencies
import { searchRecipe } from './api.js';            // `searchRecipe` is defined in `api.js`
import { addBookmark } from './bookmark.js';        // `addBookmark` handles bookmark logic

// Save Search to Local Storage
export function saveSearch(input) {
  localStorage.setItem('lastSearch', input);
}

// Function to handle search events triggered by the user
export function handleSearchEvent(inputElement, event) {
  event.preventDefault();
  if (inputElement.value) {
    saveSearch(inputElement.value); // Save search term before performing the search
    searchRecipe(inputElement.value);
    inputElement.value = '';
  }
}

// Load the last search term and bookmarks from local storage and apply them on page load
export function loadLastSearchAndBookmarks() {
  const lastSearch = localStorage.getItem('lastSearch');
  const savedBookmarks = JSON.parse(localStorage.getItem('bookmarks')) || [];

  if (lastSearch) searchRecipe(lastSearch);         // Perform a search with the last search term
  savedBookmarks.forEach(addBookmark);              // Display bookmarks on the page
}
