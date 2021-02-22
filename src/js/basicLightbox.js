import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

export function openModal(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
  const imageShow = `<img src= ${event.target.dataset.source}>`;
  const imageInstance = basicLightbox.create(imageShow);
  imageInstance.show();
}
