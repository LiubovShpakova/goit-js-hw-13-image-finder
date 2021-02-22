import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import { info, error } from '@pnotify/core';
import { defaults } from '@pnotify/core';
import '@pnotify/mobile/dist/PNotifyMobile.css';

defaults.delay = 2000;
defaults.width = '300px';
defaults.styling = 'material';

export function infoTitle() {
  info({
    text: 'Please enter a more specific query!',
  });
}

export function errorTitle() {
  error({
    text: 'Sorry, no results found.',
  });
}
