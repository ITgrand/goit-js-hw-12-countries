import { alert } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

alert({
  type: 'arror',
  text: 'success!',
});

PNotify.error({
  title: 'Oh No!',
  text: 'Something terrible happened.',
});

PNotify.success({
  title: 'Success!',
  text: 'That thing that you were trying to do worked.',
});

PNotify.info({
  title: 'New Thing',
  text: 'Just to let you know, something happened.',
});

PNotify.notice({
  title: 'Regular Notice',
  text: "Check me out! I'm a notice.",
});
