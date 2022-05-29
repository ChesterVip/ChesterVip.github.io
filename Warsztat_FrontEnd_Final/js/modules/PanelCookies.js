import { Cookies } from "./Cookies.js";

export class PanelCookie extends Cookies {

    constructor(){

        super();

        this.infoCookie = 'W celu świadczenia usług na najwyższym poziomie stosujemy pliki cookies. Korzystanie z naszej witryny oznacza, że będą one zamieszczane w Państwa urządzeniu. W każdym momencie można dokonać zmiany ustawień Państwa przeglądarki. Dodatkowo, korzystanie z naszej witryny oznacza akceptację przez Państwa klauzuli przetwarzania danych osobowych udostępnionych drogą elektroniczną.';
        this.textClose = '<a href="#" title="Akceptuj i Zamknij">Zamknij</a>';

        this.textColor = '#fff';

        this.panel = document.querySelector('.cookies');

        if(!this.getCookie('Accept1')){
            this.showPanel();
        }
        // }else this.hidePanel();

        this.setPanelProperties();
    }

    setPanelProperties(){
        const text = document.querySelector('.cookies__text');
        const close = document.querySelector('.cookies__close');

        text.innerHTML = this.infoCookie;
        close.innerHTML = this.textClose;
    }
    showPanel(){
        this.panel.style.display = 'flex';
    }
    hidePanel(){
        this.panel.style.display = 'none';
    }
    setCookie(){
        super.setCookie({
            name: 'Accept1',
            value: 'yes',
            days: 90,
        });
    }
}

