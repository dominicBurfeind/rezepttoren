import { inputHeader, inputNav } from './domElements.js';
import { handleSearchEvent } from './search.js';
import { loadLastSearchAndBookmarks } from './search.js';

// Event Listeners for Search Forms
export function setupEventListeners() {
  document.getElementById('submitRecipe').addEventListener('submit', handleSearchEvent.bind(null, inputHeader));
  document.getElementById('navForm').addEventListener('submit', handleSearchEvent.bind(null, inputNav));
  window.addEventListener('load', loadLastSearchAndBookmarks);
}