import { LitElement, html, css } from "lit";
import { nav } from "../../main";

export class MenuSection extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }

      dialog {
        display: flex;
        width: 100%;
        height: 100%;
        max-width: 100%;
        max-height: 100%;
        padding: 32px;
        border: 0;
        box-sizing: border-box;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        flex-shrink: 0;

        opacity: 0;
        pointer-events: none;
        transition: opacity 300ms;
        background-color: rgba(0, 0, 0, 40%);
        position: fixed;
        z-index: 110;
      }

      dialog[open] {
        opacity: 1;
        pointer-events: auto;

      }

      app-logo {
        width: 96px;
        height: 96px;
        background-color: white;
      }

      nav {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        align-self: flex-end;
        gap: 24px;
      }

      a, button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 16px;

        color: #fff;
        font-family: Exo;
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        text-decoration: none;

        cursor: pointer;
      }

      a:active,
      button:active {
        color: var(--tom-1);
      }




      button {
        padding: 0;
        border: 0;
        background: transparent;
      }

      svg,
      feather-icon {
        display: flex;
        width: 24px;
        fill: currentColor;

      } 

      
    `,
  ];

  rolarContato() {
    return nav.rolarPara('#contato')
  }

  rolarUnidades() {
    return nav.rolarPara('#unidades')
  }

  render() {
    return html`
      <dialog>
        <app-logo></app-logo>

        <nav>
          <button title="Fechar menu" @click=${this.rolarUnidades}>Unidades <feather-icon icon="map-pin"></feather-icon></button>
          <button @click=${this.rolarContato}>Contato <feather-icon icon="phone"></feather-icon></button>
          <a @click=${nav.fechar} href="servicos"
            >Serviços <feather-icon icon="scissors"></feather-icon
          ></a>
          <a @click=${nav.fechar} href="A-Barbearia"
            >A Barbearia
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="46"
              viewBox="0 0 37 46"
            >
              <path
                d="M35.9899 44.7332C35.9366 44.8891 35.8347 45.0239 35.6992 45.1177C35.5637 45.2115 35.4017 45.2595 35.237 45.2546H33.5934L34.6144 40.1612C34.7366 40.4028 34.8466 40.6503 34.9439 40.9029L36.0118 44.2361C36.0686 44.3985 36.0607 44.5765 35.9899 44.7332ZM0.0594771 44.7356C-0.0116497 44.5788 -0.0200503 44.4006 0.0359981 44.2377L1.09175 40.9409C1.19241 40.6758 1.30672 40.4161 1.43422 40.1629L2.45517 45.2546H0.811621C0.665297 45.256 0.521427 45.217 0.395761 45.142C0.270096 45.0671 0.16748 44.959 0.0991491 44.8296C0.0839633 44.7991 0.0707128 44.7678 0.0594771 44.7356ZM11.1247 40.6721C11.3129 40.8962 11.5591 41.0643 11.8363 41.1579L14.177 45.2546H12.182L11.1247 40.6721ZM13.5875 40.9587L15.6853 40.362C16.3312 40.9319 17.1629 41.2463 18.0243 41.2463C18.8857 41.2463 19.7174 40.9319 20.3633 40.362L22.4611 40.9587L20.0063 45.2546H16.0423L13.5875 40.9587ZM24.2123 41.1579C24.3755 41.102 24.5288 41.0206 24.6665 40.9166C24.7608 40.8446 24.8472 40.7626 24.9239 40.6721L23.8666 45.2546H21.8717L24.2123 41.1579ZM21.5624 30.0709C20.5619 30.8827 19.3127 31.3259 18.0243 31.3259C16.7359 31.3259 15.4867 30.8827 14.4862 30.0709C13.9033 29.5932 13.3851 29.1398 12.8913 28.6783C12.8994 28.7593 12.9156 28.8402 12.9236 28.9131C13.0103 29.6278 13.0562 30.3468 13.0613 31.0667L18.0243 35.3253L22.9873 31.0667C22.9924 30.3468 23.0383 29.6278 23.125 28.9131C23.1331 28.8321 23.1492 28.7593 23.1573 28.6783C22.6635 29.1398 22.1453 29.5932 21.5624 30.0709ZM4.52781 36.8393C3.2486 37.7704 3.05429 37.9323 2.98952 37.9971C2.89236 38.0943 2.8033 38.2076 2.71425 38.3048L4.10681 45.2514H6.47092L4.52781 36.8393ZM14.8425 37.9L12.3569 36.4426V39.6245L14.8425 38.9201C14.8072 38.7523 14.7882 38.5815 14.7858 38.41C14.7887 38.2386 14.8076 38.0678 14.8425 37.9ZM14.8425 37.9L12.3569 36.4426V39.6245L14.8425 38.9201C14.8072 38.7523 14.7882 38.5815 14.7858 38.41C14.7887 38.2386 14.8076 38.0678 14.8425 37.9ZM8.32497 35.6006C7.53725 35.6511 6.76052 35.8118 6.01753 36.0783L8.13065 45.2514H10.5191L8.33306 35.7625C8.32229 35.7093 8.31956 35.6547 8.32497 35.6006ZM14.8425 37.9L12.3569 36.4426V39.6245L14.8425 38.9201C14.8072 38.7523 14.7882 38.5815 14.7858 38.41C14.7887 38.2386 14.8076 38.0678 14.8425 37.9ZM14.8425 37.9L12.3569 36.4426V39.6245L14.8425 38.9201C14.8072 38.7523 14.7882 38.5815 14.7858 38.41C14.7887 38.2386 14.8076 38.0678 14.8425 37.9ZM18.0243 37.1956C17.1499 37.1956 16.405 37.7542 16.405 38.41C16.405 39.0739 17.1499 39.6245 18.0243 39.6245C18.8987 39.6245 19.6436 39.0739 19.6436 38.41C19.6436 37.7542 18.8987 37.1956 18.0243 37.1956ZM27.7236 35.6006C27.729 35.6547 27.7263 35.7093 27.7155 35.7625L25.5295 45.2514H27.918L30.0311 36.0783C29.2881 35.8118 28.5114 35.6511 27.7236 35.6006ZM33.0591 37.9971C32.9943 37.9323 32.8 37.7704 31.5208 36.8393L29.5777 45.2514H31.9418L33.3344 38.3048C33.2453 38.2076 33.1562 38.0943 33.0591 37.9971ZM18.0243 37.1956C17.1499 37.1956 16.405 37.7542 16.405 38.41C16.405 39.0739 17.1499 39.6245 18.0243 39.6245C18.8987 39.6245 19.6436 39.0739 19.6436 38.41C19.6436 37.7542 18.8987 37.1956 18.0243 37.1956ZM18.0243 37.1956C17.1499 37.1956 16.405 37.7542 16.405 38.41C16.405 39.0739 17.1499 39.6245 18.0243 39.6245C18.8987 39.6245 19.6436 39.0739 19.6436 38.41C19.6436 37.7542 18.8987 37.1956 18.0243 37.1956ZM21.2061 37.9C21.241 38.0678 21.2599 38.2386 21.2628 38.41C21.2604 38.5815 21.2414 38.7523 21.2061 38.9201L23.6917 39.6245V36.4426L21.2061 37.9ZM18.0243 37.1956C17.1499 37.1956 16.405 37.7542 16.405 38.41C16.405 39.0739 17.1499 39.6245 18.0243 39.6245C18.8987 39.6245 19.6436 39.0739 19.6436 38.41C19.6436 37.7542 18.8987 37.1956 18.0243 37.1956ZM18.0243 37.1956C17.1499 37.1956 16.405 37.7542 16.405 38.41C16.405 39.0739 17.1499 39.6245 18.0243 39.6245C18.8987 39.6245 19.6436 39.0739 19.6436 38.41C19.6436 37.7542 18.8987 37.1956 18.0243 37.1956ZM14.8425 37.9L12.3569 36.4426V39.6245L14.8425 38.9201C14.8072 38.7523 14.7882 38.5815 14.7858 38.41C14.7887 38.2386 14.8076 38.0678 14.8425 37.9ZM23.6512 32.6374L19.7164 36.0054C19.964 36.1392 20.1927 36.3053 20.3965 36.4993L23.1331 34.8962C23.2094 34.8474 23.2947 34.8143 23.384 34.7991C23.618 34.754 23.859 34.7612 24.0899 34.8199C24.3209 34.8787 24.536 34.9877 24.7199 35.1391C24.9999 35.3677 25.194 35.6846 25.2705 36.0378L25.9182 34.9043L23.6512 32.6374ZM27.586 15.7485C27.5317 15.7722 27.4745 15.7885 27.416 15.7971C27.3731 15.8203 27.3324 15.8474 27.2945 15.8781C26.9441 17.4123 26.7891 18.9846 26.833 20.5577C26.938 20.6968 27.0574 20.8244 27.1893 20.9383C27.3836 20.582 27.7398 19.4485 27.7398 16.9144C27.7628 16.5196 27.7106 16.1239 27.586 15.7485ZM27.0274 0.10654C26.3958 -0.273985 25.1085 0.430391 23.7403 1.18334C22.0643 2.10632 20.1617 3.15074 18.0243 3.15074C8.69739 3.15074 7.49914 6.39735 7.49914 9.22295C7.4955 9.59159 7.52258 9.9599 7.58011 10.324C7.73615 11.4963 8.13903 12.6222 8.76216 13.6273L12.446 8.92338C12.6155 8.6833 12.8321 8.48022 13.0826 8.3265C13.3331 8.17278 13.6123 8.07164 13.9031 8.02923C14.1939 7.98681 14.4904 8.00402 14.7743 8.07979C15.0583 8.15557 15.3239 8.28833 15.5549 8.46999C16.2618 9.01269 17.1277 9.30754 18.0189 9.309C18.9101 9.31047 19.7769 9.01846 20.4856 8.47809C20.7163 8.2947 20.9821 8.16032 21.2665 8.08317C21.551 8.00602 21.8482 7.98773 22.14 8.02941C22.4318 8.0711 22.712 8.17188 22.9635 8.32559C23.215 8.47931 23.4325 8.68272 23.6026 8.92338L27.0759 13.3601L27.4484 13.3682C28.1679 12.105 28.5473 10.6767 28.5495 9.22295C28.5495 2.43017 27.7236 0.511354 27.0274 0.10654ZM8.75407 15.8862C8.70606 15.8465 8.65458 15.8113 8.60024 15.7809C8.55371 15.7731 8.50773 15.7623 8.4626 15.7485C8.33714 16.1237 8.28491 16.5195 8.30877 16.9144C8.30877 19.4485 8.66501 20.582 8.85932 20.9383C8.99121 20.8244 9.11062 20.6968 9.21556 20.5577C9.25953 18.9873 9.10447 17.4176 8.75407 15.8862ZM22.3315 9.92732C22.2891 9.85775 22.2328 9.79772 22.1661 9.75101C22.0993 9.70431 22.0236 9.67195 21.9437 9.65597C21.8639 9.64 21.7815 9.64075 21.702 9.65819C21.6224 9.67563 21.5473 9.70938 21.4814 9.7573C20.4908 10.5167 19.2779 10.9289 18.0297 10.9304C16.7816 10.9318 15.5676 10.5224 14.5753 9.7654C14.5097 9.71587 14.4344 9.68061 14.3543 9.66187C14.2743 9.64313 14.1912 9.64133 14.1104 9.65657C14.0296 9.67182 13.9529 9.70378 13.8851 9.7504C13.8174 9.79703 13.7602 9.85729 13.7171 9.92732L10.1061 14.5422C10.1142 14.5746 10.1223 14.6151 10.1304 14.6555C10.1385 14.694 10.1494 14.7319 10.1628 14.7689V14.7932C10.7951 17.1393 10.9981 19.5805 10.7619 21.9989C10.7458 22.1608 10.7377 22.3389 10.7377 22.517C10.7377 24.0877 12.4298 26.3223 15.5064 28.8078C16.2176 29.3864 17.106 29.703 18.0229 29.7044C18.9397 29.7059 19.8292 29.3922 20.5422 28.8159C23.6188 26.3223 25.3109 24.0877 25.3109 22.517C25.3109 22.3389 25.3029 22.1608 25.2867 21.9827C25.0611 19.6425 25.2447 17.2809 25.8291 15.0037C25.8372 14.9794 25.8453 14.9308 25.8615 14.8822L25.902 14.7365C25.9182 14.6717 25.9263 14.607 25.9425 14.5341L22.3315 9.92732ZM17.2147 21.7722H18.8339C19.0487 21.7722 19.2546 21.8575 19.4064 22.0093C19.5583 22.1611 19.6436 22.3671 19.6436 22.5818C19.6436 22.7965 19.5583 23.0025 19.4064 23.1543C19.2546 23.3061 19.0487 23.3914 18.8339 23.3914H17.2147C16.9999 23.3914 16.794 23.3061 16.6422 23.1543C16.4903 23.0025 16.405 22.7965 16.405 22.5818C16.405 22.3671 16.4903 22.1611 16.6422 22.0093C16.794 21.8575 16.9999 21.7722 17.2147 21.7722ZM14.7858 17.724V18.5337C14.7858 18.7484 14.7005 18.9543 14.5487 19.1062C14.3968 19.258 14.1909 19.3433 13.9762 19.3433C13.7614 19.3433 13.5555 19.258 13.4037 19.1062C13.2518 18.9543 13.1665 18.7484 13.1665 18.5337V17.724H12.3569C12.1422 17.724 11.9363 17.6387 11.7844 17.4869C11.6326 17.3351 11.5473 17.1291 11.5473 16.9144C11.5473 16.6997 11.6326 16.4938 11.7844 16.3419C11.9363 16.1901 12.1422 16.1048 12.3569 16.1048H15.5954C15.8101 16.1048 16.0161 16.1901 16.1679 16.3419C16.3197 16.4938 16.405 16.6997 16.405 16.9144C16.405 17.1291 16.3197 17.3351 16.1679 17.4869C16.0161 17.6387 15.8101 17.724 15.5954 17.724H14.7858ZM19.6436 26.6299H16.405C16.1903 26.6299 15.9844 26.5446 15.8326 26.3928C15.6807 26.241 15.5954 26.035 15.5954 25.8203C15.5954 25.6056 15.6807 25.3997 15.8326 25.2478C15.9844 25.096 16.1903 25.0107 16.405 25.0107H19.6436C19.8583 25.0107 20.0642 25.096 20.2161 25.2478C20.3679 25.3997 20.4532 25.6056 20.4532 25.8203C20.4532 26.035 20.3679 26.241 20.2161 26.3928C20.0642 26.5446 19.8583 26.6299 19.6436 26.6299ZM23.6917 17.724H22.8821V18.5337C22.8821 18.7484 22.7968 18.9543 22.6449 19.1062C22.4931 19.258 22.2872 19.3433 22.0724 19.3433C21.8577 19.3433 21.6518 19.258 21.4999 19.1062C21.3481 18.9543 21.2628 18.7484 21.2628 18.5337V17.724H20.4532C20.2385 17.724 20.0325 17.6387 19.8807 17.4869C19.7289 17.3351 19.6436 17.1291 19.6436 16.9144C19.6436 16.6997 19.7289 16.4938 19.8807 16.3419C20.0325 16.1901 20.2385 16.1048 20.4532 16.1048H23.6917C23.9064 16.1048 24.1124 16.1901 24.2642 16.3419C24.416 16.4938 24.5013 16.6997 24.5013 16.9144C24.5013 17.1291 24.416 17.3351 24.2642 17.4869C24.1124 17.6387 23.9064 17.724 23.6917 17.724ZM12.3974 32.6374L10.1304 34.9043L10.7781 36.0378C10.8692 35.6263 11.1173 35.2665 11.4697 35.0351C11.822 34.8038 12.2507 34.7191 12.6646 34.7991C12.7539 34.8143 12.8392 34.8474 12.9156 34.8962L15.6521 36.4993C15.8559 36.3053 16.0846 36.1392 16.3322 36.0054L12.3974 32.6374Z"
              />
            </svg>
          </a>
          <a @click=${nav.fechar} href="/">Home <feather-icon icon="home"></feather-icon></a>
          <button @click=${nav.fechar}>
            <feather-icon icon="x"></feather-icon>
          </button>
        </nav>
      </dialog>
    `;
  }
}
customElements.define("menu-section", MenuSection);
