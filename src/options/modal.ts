// Firefox bug: https://bugzilla.mozilla.org/show_bug.cgi?id=1656732
import { html } from '@mantou/gem/lib/element';
import { customElement } from '@mantou/gem/lib/decorators';

import { Event } from '../common/consts';

import { Modal } from '../common/elements/modal-base';

import './app';

@customElement('options-modal')
class OptionsModal extends Modal {}

window.addEventListener('message', ({ data }) => {
  if (data?.type === Event.OPEN_OPTIONS) {
    OptionsModal.open(html`<options-app></options-app>`);
  }
});
