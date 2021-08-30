import fetchCountries from './js/fetchCountries.js';
import refs from './js/refs.js';
import templates from './templates/templates.hbs';
import items from './templates/items.hbs';
// === pnotify ===
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error, info, success } from '@pnotify/core';
// === lodash ===
const debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(searchCountries, 500));

function updateCountriesMarkup(data) {
  if (data.length === 1) {
    const markup = templates(data);
    refs.container.insertAdjacentHTML('beforeend', markup);
    success({
      title: 'Success!',
      text: 'That thing that you were trying to do worked.',
    });
  } else if (data.length > 1 && data.length <= 10 && data.length !== 0) {
    const markup = items(data);
    refs.container.insertAdjacentHTML('beforeend', markup);
    info({
      title: 'New Thing',
      text: 'Just to let you know, something happened.',
    });
  } else {
    error({
      title: 'Oh No!',
      text: 'Something terrible happened.',
    });
  }
}

function searchCountries(country) {
  country.preventDefault();

  const inputValue = country.target.value;
  refs.container.innerHTML = '';
  fetchCountries(inputValue).then(updateCountriesMarkup);
}
