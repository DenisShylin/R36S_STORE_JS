import{C as o}from"./core-4iGfENdb.js";class i{constructor(){this.supportedLocales=["en","ru","tr","uk","nl","fr","de","it","pt","es","tg","uz","be","ky","ar"],this.defaultLocale="en"}detect(){const e=this.getFromLocalStorage();if(e)return e;const t=this.getFromUrl();if(t)return t;const a=this.getFromBrowser();return a||this.defaultLocale}getFromLocalStorage(){const e=localStorage.getItem("userLanguage");return e&&this.supportedLocales.includes(e)?e:null}getFromUrl(){const t=window.location.pathname.match(/^\/([a-z]{2})\//);return t&&this.supportedLocales.includes(t[1])?t[1]:null}getFromBrowser(){const e=navigator.language||navigator.userLanguage||"",t=e.split("-")[0];if(t&&this.supportedLocales.includes(t))return t;const a={be:["ru"],uk:["ru"],kk:["ru"],ky:["ru"],uz:["ru"],tg:["ru"],"en-US":["en"],"en-GB":["en"],"fr-FR":["fr"],"fr-CA":["fr"],"fr-BE":["fr"],"fr-CH":["fr"],"de-DE":["de"],"de-AT":["de"],"de-CH":["de"],"es-ES":["es"],"es-MX":["es"],"es-AR":["es"],"it-IT":["it"],"nl-NL":["nl"],"nl-BE":["nl"],"pt-PT":["pt"],"pt-BR":["pt"],"tr-TR":["tr"]};return e&&a[e]&&this.supportedLocales.includes(a[e][0])?a[e][0]:t&&a[t]&&this.supportedLocales.includes(a[t][0])?a[t][0]:null}isRtlLanguage(e){return["ar"].includes(e)}saveUserLanguage(e){this.supportedLocales.includes(e)&&localStorage.setItem("userLanguage",e)}applyTextDirection(e){const t=this.isRtlLanguage(e)?"rtl":"ltr";document.documentElement.setAttribute("dir",t),document.documentElement.setAttribute("lang",e),t==="rtl"?document.body.classList.add("rtl"):document.body.classList.remove("rtl")}getSupportedLanguages(){return[{code:"en",name:"English"},{code:"ru",name:"Русский"},{code:"tr",name:"Türkçe"},{code:"uk",name:"Українська"},{code:"nl",name:"Nederlands"},{code:"fr",name:"Français"},{code:"de",name:"Deutsch"},{code:"it",name:"Italiano"},{code:"pt",name:"Português"},{code:"es",name:"Español"},{code:"tg",name:"Тоҷикӣ"},{code:"uz",name:"O'zbek"},{code:"be",name:"Беларуская"},{code:"ky",name:"Кыргызча"},{code:"ar",name:"العربية"}]}}class u extends o{constructor(e,t){super(e,t),this.i18n=t.i18n,this.detector=new i,this.currentLocale=this.i18n.getCurrentLocale(),this.languages=this.detector.getSupportedLanguages()}render(){const e=this.languages.find(t=>t.code===this.currentLocale);return`
      <div class="language-switcher">
        <button class="language-switcher__current" aria-haspopup="true" aria-expanded="false">
          <span class="language-switcher__code">${e==null?void 0:e.code.toUpperCase()}</span>
          <span class="language-switcher__name">${e==null?void 0:e.name}</span>
          <svg class="language-switcher__arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </button>
        <div class="language-switcher__dropdown" aria-hidden="true">
          <ul class="language-switcher__list">
            ${this.languages.map(t=>`
              <li class="language-switcher__item ${t.code===this.currentLocale?"language-switcher__item--active":""}">
                <button class="language-switcher__button" data-locale="${t.code}">
                  <span class="language-switcher__code">${t.code.toUpperCase()}</span>
                  <span class="language-switcher__name">${t.name}</span>
                </button>
              </li>
            `).join("")}
          </ul>
        </div>
      </div>
    `}afterRender(){const e=this.container.querySelector(".language-switcher__current"),t=this.container.querySelector(".language-switcher__dropdown");this.addEventListeners(e,"click",()=>{const s=e.getAttribute("aria-expanded")==="true";e.setAttribute("aria-expanded",!s),t.setAttribute("aria-hidden",s),t.classList.toggle("language-switcher__dropdown--open")}),this.container.querySelectorAll(".language-switcher__button").forEach(s=>{this.addEventListeners(s,"click",()=>{const n=s.getAttribute("data-locale");this.changeLanguage(n),e.setAttribute("aria-expanded","false"),t.setAttribute("aria-hidden","true"),t.classList.remove("language-switcher__dropdown--open")})}),this.addEventListeners(document,"click",s=>{this.container.contains(s.target)||(e.setAttribute("aria-expanded","false"),t.setAttribute("aria-hidden","true"),t.classList.remove("language-switcher__dropdown--open"))})}async changeLanguage(e){e!==this.currentLocale&&(await this.i18n.changeLocale(e),this.currentLocale=e,this.detector.saveUserLanguage(e),this.detector.applyTextDirection(e),this.update())}}export{u as L};
//# sourceMappingURL=i18n-CMhHESMe.js.map
