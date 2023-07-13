import { LitElement, html, css } from "lit";

export class Titulo extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        color: var(--cor-secundria, #665e57);
        text-shadow: 2px 2px 0px rgba(0, 0, 0, 0.25);
        font-family: var(--fonte-titulo);
        font-size: 3rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal; /* 48px */
      }
    `,
  ];

  render() {
    return html`Título`;
  }
}
customElements.define("app-titulo", Titulo);
