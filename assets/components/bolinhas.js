import { LitElement, html, css } from 'lit';

export class Bolinhas extends LitElement {
    static styles = [
        css`
            :host {
                width: 100px;
                height: 100px;
                
                background-color: black;
               -webkit-mask: url('bolinhas.svg') no-repeat center;
                mask: url('bolinhas.svg') no-repeat center;

                -webkit-mask-size: 100%;
                mask-size: 100%;

                display: block;

            }
        `
    ];

    render() {
        return html``;
    }
}
customElements.define('app-bolinhas', Bolinhas);
