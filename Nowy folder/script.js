// Pobieranie elementów DOM
const rodzajMaszynySelect = document.getElementById('rodzaj-maszyny');
const poleRoboczeSelect = document.getElementById('pole-robocze');
const mocWrzecionaSelect = document.getElementById('moc-wrzeciona');
const mocSilnikowOsiSelect = document.getElementById('moc-silnikow-osi');
const rodzajMagazynuSelect = document.getElementById('rodzaj-magazynu');
const typChlodzeniaSelect = document.getElementById('typ-chlodzenia');
const rodzajSterowaniaSelect = document.getElementById('rodzaj-sterowania');

// Wczytywanie danych z plików JSON
fetch('maszyna1.json')
  .then(response => response.json())
  .then(data => {
    // Aktualizacja opcji dla pierwszego pola po wczytaniu danych JSON
    updateOptions(poleRoboczeSelect, data.polaRobocze);
    updateOptions(mocWrzecionaSelect, data.mocWrzeciona);
    updateOptions(mocSilnikowOsiSelect, data.mocSilnikowOsi);
    updateOptions(rodzajMagazynuSelect, data.rodzajMagazynu);
    updateOptions(typChlodzeniaSelect, data.typChlodzenia);
    updateOptions(rodzajSterowaniaSelect, data.rodzajSterowania);
  });

// Obsługa zmiany wyboru rodzaju maszyny
rodzajMaszynySelect.addEventListener('change', function() {
  const selectedMachine = rodzajMaszynySelect.value;

  // Wczytywanie danych JSON dla wybranej maszyny
  fetch(`maszyna${selectedMachine}.json`)
    .then(response => response.json())
    .then(data => {
      // Aktualizacja opcji dla kolejnych pól
      updateOptions(poleRoboczeSelect, data.polaRobocze);
      updateOptions(mocWrzecionaSelect, data.mocWrzeciona);
      updateOptions(mocSilnikowOsiSelect, data.mocSilnikowOsi);
      updateOptions(rodzajMagazynuSelect, data.rodzajMagazynu);
      updateOptions(typChlodzeniaSelect, data.typChlodzenia);
      updateOptions(rodzajSterowaniaSelect, data.rodzajSterowania);
    });
});

// Funkcja aktualizująca opcje dla danego selecta
function updateOptions(selectElement, options) {
  // Usunięcie istniejących opcji
  selectElement.innerHTML = '';

  // Dodanie nowych opcji
  options.forEach(option => {
    const optionElement = document.createElement('option');
    optionElement.value = option;
    optionElement.textContent = option;
    selectElement.appendChild(optionElement);
  });
}