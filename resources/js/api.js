import { updateHeading, renderRecipes } from './recipes.js';
import { saveSearch } from './search.js';

export async function searchRecipe(input) {
  document.getElementById('displayText').style.display = 'none';
  if (!input) return console.log('No valid input');
  
  saveSearch(input);

  try {
    const data = await fetchData(input);
    if (data) {
      updateHeading(data.q);
      renderRecipes(data);
    }
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Function for fetching data from the API
async function fetchData(query) {
  const API_KEY = 'b6c9f8b9fab8134a2fe2610078c0d2ed';
  const APP_ID = '6c6361b3';
  const apiUrl = `https://api.edamam.com/search?q=${encodeURIComponent(query)}&app_id=${APP_ID}&app_key=${API_KEY}`;
  
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) throw new Error('No recipes were found');
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
