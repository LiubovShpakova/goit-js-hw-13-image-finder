import pixabayApi from './apiService.js';
import { clear, updatecardsMarkup } from './markup.js';
import refs from './refs.js';
const { input, loader } = refs;
const NewPixabay = new pixabayApi();
export function onSearch(event) {
  event.preventDefault();
  const inputValue = event.target.elements.query.value;

  NewPixabay.searchQuery = inputValue;

  if (NewPixabay.searchQuery === '') return;
  NewPixabay.resetPage();
  clear();
  observer.observe(loader);

  input.value = '';
}

const onTry = entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && NewPixabay.query !== '') {
      NewPixabay.getFetch().then(hits => {
        updatecardsMarkup(hits);
      });
    }
  });
};
const observer = new IntersectionObserver(onTry, {
  rootMargin: '160px',
});
