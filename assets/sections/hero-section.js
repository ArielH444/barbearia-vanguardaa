import { LitElement, html, css } from "lit";
import { section } from "../styles/section-style";

export class HeroSection extends LitElement {
  static styles = [
    section,
    css`
      section {
        display: flex;
        padding: 16px 0px;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
      }

      span {
        color: var(--tom-3);
        font-weight: 900;
      }

      app-titulo {
        position: relative;
        display: flex;
        align-items: center;
        align-self: stretch;
      }

      app-logo {
        width: 128px;
        height: 128px;

        position: absolute;
        right: -72px;
        bottom: -39px;
      }

      img {
        width: auto;
        height: 100%;
      }

      app-paragrafo {
        font-size: 1.25rem;
      }
    `,
  ];

  render() {
    return html`
      <section>
        <app-titulo
          ><h1>Barbearia <span>Vanguarda</span></h1>
          <app-logo></app-logo>
        </app-titulo>
        <app-quadro>
          <img loading="lazy" src="slider-1.jpg" alt="Imagem slider" />
        </app-quadro>
      </section>
      <app-paragrafo
        >Obtenha um estilo impecável, do cabelo à barba.</app-paragrafo
      >
    `;
  }
}
customElements.define("hero-section", HeroSection);
