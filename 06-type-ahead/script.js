// Utilities
const numberWithCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

// Path to the list of cities
const endpoint = `https://gist.githubusercontent.com/Miserlou/
c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json`;

// Get list of cities
const cities = [];

fetch(endpoint)
  .then(blob => blob.json()
    .then(data => cities.push(...data)));

// Figure out if the city or state matches the pattern
const findMatches = (pattern, listOfCities) => {
  const regex = new RegExp(pattern, 'gi');
  return listOfCities.filter(
    place => place.city.match(regex) || place.state.match(regex),
  );
};

// Display matches
const suggestions = document.querySelector('.suggestions');

const displayMatches = (value) => {
  const matchedArray = findMatches(value, cities);
  const content = matchedArray.map((place) => {
    // Highlight matches
    const regex = new RegExp(value, 'gi');
    const highlightedValue = `<span class="hl">${value}</span>`;
    const cityName = place.city.replace(regex, highlightedValue);
    const stateName = place.state.replace(regex, highlightedValue);
    return `
      <li>
        <span>${cityName}, ${stateName}</span>
        <span class="population">${numberWithCommas(place.population)}</span>
      </li>
    `;
  }).join('');

  suggestions.innerHTML = content;
};

// Listen to the input
const searchInput = document.querySelector('.search');
searchInput.addEventListener('input', e => displayMatches(e.target.value));
