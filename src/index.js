import fetchCountries from './js/fetchCountries.js';
import tpl from './templates/tpl.hbs';
import items from './templates/list.hbs';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { error, info, success } from '@pnotify/core';

const debounce = require('lodash.debounce');

const refs = {
  input: document.getElementById('js-input'),
  container: document.querySelector('.container'),
};


refs.input.addEventListener('input', debounce(onSearchCountries, 500));

function updateCountriesMarkup(data) {
  if (data.length === 1) {
    const markup = tpl(data);
    refs.container.insertAdjacentHTML('beforeend', markup);
    success({
      title: 'Success!',
    });
  } else if (data.length > 1 && data.length <= 10 && data.length !== 0) {
    const markup = items(data);
    refs.container.insertAdjacentHTML('beforeend', markup);
    info({
      title: 'Too many matches found. Please enter a more specific query.',
    });
  } else {
    error({
      title: 'Check the correctness of the entered data!',
    });
  }
}

function onSearchCountries(country) {
  country.preventDefault();

  const inputValue = country.target.value;
  refs.container.innerHTML = '';
  fetchCountries(inputValue).then(updateCountriesMarkup);
}
