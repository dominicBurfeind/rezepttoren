// BMI Calculator
export function setupBMICalculator() {
  const bmiInput = document.getElementById('Bmi');
  const bmiCategoryDisplay = document.getElementById('Bmi-kategorie');

  document.getElementById('Berechnen').addEventListener('click', () => {
    const weight = parseFloat(document.getElementById('Gewicht').value);
    const height = parseFloat(document.getElementById('Größe').value) / 100;

    if (weight > 0 && height > 0) {
      const bmi = (weight / height ** 2).toFixed(2);
      bmiInput.value = bmi;

      // Bestimme die BMI-Kategorie
      let category = '';
      if (bmi < 18.5) {
        category = 'Untergewicht';
      } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Normalgewicht';
      } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Übergewicht';
      } else {
        category = 'Adipositas';
      }
      bmiCategoryDisplay.textContent = category;
    } else {
      bmiInput.value = '';
      bmiCategoryDisplay.textContent = 'Bitte gültige Zahlen eingeben';
    }
  });
}
