import { setupEventListeners } from './eventListeners.js';
import { setupBMICalculator } from './bmiCalculator.js';

setupEventListeners();

window.addEventListener('load', () => {
  setupBMICalculator();
});
