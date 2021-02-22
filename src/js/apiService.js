import { infoTitle, errorTitle } from './pnotify.js';
export default class pixabayApi {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 12;
  }

  getFetch() {
    const key = '20348954-7114cf64e9bcf2486dba09445';
    const BASE_URL = 'https://pixabay.com/api';
    let params = `/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=${this.perPage}&key=${key}`;
    let url = BASE_URL + params;

    return fetch(url)
      .then(res => {
        return res.json();
      })
      .then(({ hits }) => {
        if (hits.length != 0) {
          this.incrementPage();
          return hits;
        } else {
          errorTitle();
          setTimeout(() => {
            document.location.reload();
          }, 3000);
          infoTitle();
        }
      });
  }
  resetPage() {
    this.page = 1;
  }
  incrementPage() {
    this.page += 1;
  }
  get query() {
    return this.searchQuery;
  }
  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
