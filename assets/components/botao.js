import { LitElement, html, css } from "lit";

export class Botao extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      ::slotted(button),
      button,
      ::slotted(a) {
        width: inherit;

        display: inline-flex;
        padding: 5px 24px;
        border: 0;
        justify-content: flex-start;
        align-items: center;

        border-radius: 8px;
        background-color: var(
          --button-background,
          color-mix(in srgb, white 20%, var(--tom-2, #b38962))
        );
        box-shadow: 0px 2px 4px 0px #665e57;

        /* Tipografia */
        color: var(
          --color,
          color-mix(in srgb, black 20%, var(--tom-3, #664e38))
        );
        text-align: center;
        font-family: var(--fonte-titulo);
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        white-space: nowrap;
        text-decoration: none;

        transition: all 0.2ms;
        cursor: pointer;
      }
    `,
  ];

  render() {
    return html`
      <slot>
        <button>Pressione</button>
      </slot>
    `;
  }
}
customElements.define("app-botao", Botao);
