import { LitElement, html, css } from "lit";
import { section } from "../styles/section-style";
export class ABarbeariaSection extends LitElement {
  static styles = [
    section,
    css`
      :host {
        display: flex;
        align-items: flex-start;
        gap: 10px;

        justify-content: space-between;
        align-items: flex start;
      }

      article {
        display: flex;
        padding: 9px 0px 4px 0px;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;

        background: var(--tom-1, #ead8c7);

        border: 3px solid;
        border-image-source: linear-gradient(
          42deg,
          rgba(102, 78, 56, 0) 50%,
          rgba(102, 78, 56, 1) 100%
        );
        border-image-slice: 1;

        border-left: 0;
        border-bottom: 0;
      }

      app-paragrafo {
        width: 270px;
        text-align: justify;
        line-height: 140%; /* 22.4px */
        letter-spacing: -1.424px;
      }

      app-paragrafo {
        width: 335px;
        height: 335px;

        position: absolute;
        right: -82px;
        top: 106px;
        left: 0;
        top: 106px;
      }

      app-quadro {
        width: 335px;
        right: 335;
        border-radius: 100%px;

        position: absolute;
        left: -82px;
        top: 106px;
        z-index: -10;
      }

      app-bolinhas {
        display: flex;
        width: 300px;
        height: 300px;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;

        position: absolute;
        left: -150px;
        top: 72px;
        z-index: -20;

      --cor-bolinhas: var(--tom-3);
      }

      img {
        width: 100%;
      }

      app-botao {
         
        display: var(--display-botao);
      }
    `,
  ];

  render() {
    return html`
      <app-titulo>A Barbearia</app-titulo><app-bolinhas></app-bolinhas>
      <app-quadro><img loading="lazy" src="a-barbearia.jpg" alt="Imagem"/></app-quadro>
      <article>
        <app-paragrafo>Bem-vindo à Barbearia Vanguarda, onde tradição e inovação se
          encontram para proporcionar cortes de cabelo e barbas impecáveis. Com
          uma equipe de barbeiros especializados, combinamos técnicas
          tradicionais com as últimas tendências, garantindo um atendimento
          personalizado em um ambiente acolhedor.</app-paragrafo
        >
        <app-botao><a href="Serviços">Leia Mais</a></app-botao>
      </article>
    `;
  }
}
customElements.define("a-barbearia-section", ABarbeariaSection);
