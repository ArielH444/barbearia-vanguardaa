import { LitElement, html, css } from "lit";

export class MenuSection extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      dialog {
        z-index: 110;

        display: flex;
        width: 360px;
        height: 640px;
        padding: 32px;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
      }
    `,
  ];

  render() {
    return html`
      <dialog open>
        <app-logo></app-logo>

        <nav>
          <a href="">Unidades</a>
          <a href="">Contato</a>
          <a href="servicos">Serviços</a>
          <a href="A-Barbearia">A Barbearia</a>
          <a href="/">Home</a>
        </nav>
      </dialog>
    `;
  }
}
customElements.define("menu-section", MenuSection);