import { CustomElement } from './element.js';
import { api } from '@converse/headless/core';
import { html } from 'lit-html';


export class ConverseBrandHeading extends CustomElement {

    render () { // eslint-disable-line class-methods-use-this
        return html`
           <img src="dist/images/banner.png" style="width: 100%; height: auto;" /> 
        `;
    }
}

api.elements.define('converse-brand-heading', ConverseBrandHeading);
