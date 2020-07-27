import { GemElement, customElement, html, boolattribute } from '@mantou/gem';

import { theme } from '../../common/theme';

@customElement('ele-button')
export class Switch extends GemElement {
  @boolattribute disabled: boolean;

  clickHandler = (e: Event) => {
    if (this.disabled) e.stopPropagation();
  };
  render() {
    return html`
      <style>
        :host {
          display: contents;
        }
        :host([disabled]) button {
          cursor: not-allowed;
          background: rgba(${theme.blackRGB}, 0.1);
          color: rgba(${theme.blackRGB}, 0.5);
        }
        button {
          cursor: pointer;
          border-radius: 2px;
          border: 1px solid;
          background: transparent;
          line-height: 1.3;
          padding: 0.5em 1em;
          font-weight: 500;
        }
        button:hover {
          background: rgba(${theme.blackRGB}, 0.05);
        }
        button:active {
          background: rgba(${theme.blackRGB}, 0.1);
        }
        button:focus {
          outline: none;
        }
        button:focus-visible {
          outline-offset: 1px;
          outline: rgba(${theme.primaryRGB}, 0.2) auto 1px;
        }
      </style>
      <button @click=${this.clickHandler}><slot></slot></button>
    `;
  }
}
