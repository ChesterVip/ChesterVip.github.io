'use strict';

import { PanelCookie } from "./modules/PanelCookies.js";


const panel = new PanelCookie();
const closeLink = document.querySelector('.cookies a');

closeLink.addEventListener('click', (e)=>{
    // console.log('ppp');
    
    e.preventDefault;
    panel.setCookie();
    panel.hidePanel();
});