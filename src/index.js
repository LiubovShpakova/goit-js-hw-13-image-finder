import './styles.css';
import { onSearch } from './js/onSearch.js';
import { openModal } from './js/basicLightbox.js';

import refs from './js/refs.js';
const { form, gallery } = refs;

form.addEventListener('submit', onSearch);
gallery.addEventListener('click', openModal);
