import cardsTpl from '../templates/cards.hbs';
import refs from './refs.js';

export function updatecardsMarkup(cards) {
  const markup = cardsTpl(cards);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
}

export function clear() {
  refs.gallery.innerHTML = '';
}
