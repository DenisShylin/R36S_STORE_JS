var w=(e,t,o)=>new Promise((r,n)=>{var c=l=>{try{s(o.next(l))}catch(a){n(a)}},i=l=>{try{s(o.throw(l))}catch(a){n(a)}},s=l=>l.done?r(l.value):Promise.resolve(l.value).then(c,i);s((o=o.apply(e,t)).next())});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(n){if(n.ep)return;n.ep=!0;const c=o(n);fetch(n.href,c)}})();const H="modulepreload",O=function(e){return"/R36S_STORE_JS/"+e},$={},A=function(t,o,r){let n=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));n=Promise.allSettled(o.map(l=>{if(l=O(l),l in $)return;$[l]=!0;const a=l.endsWith(".css"),m=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${m}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":H,a||(d.as="script"),d.crossOrigin="",d.href=l,s&&d.setAttribute("nonce",s),document.head.appendChild(d),a)return new Promise((h,y)=>{d.addEventListener("load",h),d.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${l}`)))})}))}function c(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return n.then(i=>{for(const s of i||[])s.status==="rejected"&&c(s.reason);return t().catch(c)})};function x(){let e=!1,t=window.scrollY,o=null;const r=document.querySelector(".header"),n=document.querySelector(".burger-btn"),c=document.querySelector(".burger-line"),i=document.querySelector(".mobile-menu"),s=document.querySelectorAll(".our-menu-link, .mobile-menu__link");function l(){const u=window.scrollY,g=t<u;o&&clearTimeout(o),u>100?h(!g):h(!0),t=u,d(u>0),o=setTimeout(()=>{},150)}function a(){e=!e,m()}function m(){e?(r.classList.add("menu-open"),n.setAttribute("aria-expanded","true"),c.classList.add("open"),i.classList.add("open"),document.body.style.overflow="hidden"):(r.classList.remove("menu-open"),n.setAttribute("aria-expanded","false"),c.classList.remove("open"),i.classList.remove("open"),document.body.style.overflow="unset")}function d(u){u?r.classList.add("scrolled"):r.classList.remove("scrolled")}function h(u){u?(r.classList.add("visible"),r.classList.remove("hidden")):(r.classList.add("hidden"),r.classList.remove("visible"))}function y(u){u.preventDefault();const g=u.currentTarget.getAttribute("href"),b=g.replace("#",""),L=document.getElementById(b);L&&(h(!0),setTimeout(()=>{const S=r.offsetHeight,_=L.getBoundingClientRect().top+window.scrollY-S;window.scrollTo({top:_,behavior:"smooth"}),e&&(e=!1,m()),window.history.replaceState(null,"",`${window.location.pathname}${g}`),setTimeout(()=>{t=window.scrollY},100)},50))}function v(){if(window.location.hash){const u=window.location.hash.replace("#",""),g=document.getElementById(u);g&&setTimeout(()=>{const b=r.offsetHeight,S=g.getBoundingClientRect().top+window.scrollY-b;window.scrollTo({top:S,behavior:"smooth"})},100)}}window.addEventListener("scroll",l),window.addEventListener("resize",()=>{!(window.innerWidth<=768)&&e&&(e=!1,m())}),n&&n.addEventListener("click",a),s.forEach(u=>{u.addEventListener("click",y)}),v()}function B(){const e=document.querySelector(".hero"),t=document.querySelector(".hero__console-img"),o=document.querySelector(".hero__content"),r=document.querySelector(".hero__description--desktop"),n=document.querySelector(".hero__description--mobile"),c=document.querySelector(".hero__pricing"),i=document.getElementById("buy-button"),s=document.getElementById("more-details-button");t&&(t.onload=()=>{e.classList.add("hero--loaded")},t.complete&&e.classList.add("hero--loaded"));function l(){const a=window.innerWidth>992;r&&n&&c&&(a?(r.style.display="block",n.style.display="none"):(r.style.display="none",n.style.display="block"))}l(),window.addEventListener("resize",l),o&&new IntersectionObserver(m=>{m.forEach(d=>{d.isIntersecting&&d.target.classList.add("animate-in")})},{threshold:.1}).observe(o),i&&i.addEventListener("click",()=>{window.open("https://www.aliexpress.com/item/1005007171465465.html","_blank","noopener,noreferrer")}),s&&s.addEventListener("click",a=>{a.preventDefault();const m=document.getElementById("features"),d=document.querySelector(".header");if(m&&d){const h=d.offsetHeight,y=m.getBoundingClientRect().top,v=window.scrollY||window.pageYOffset,u=y+v-h;window.scrollTo({top:u,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features`)}})}function I(){return console.log("About секция инициализирована"),!0}function q(){return console.log("Features секция инициализирована"),!0}function C(){return console.log("Categories секция инициализирована"),!0}function R(){return console.log("Articles секция инициализирована"),!0}function F(){return console.log("Reviews секция инициализирована"),!0}function D(){return console.log("Contact секция инициализирована"),!0}function j(){return console.log("Products секция инициализирована"),!0}function k(){return console.log("Footer секция инициализирована"),!0}function P(){const e=document.querySelector(".mobile-menu");if(!e){console.error("Мобильное меню не найдено в DOM");return}const t=e.querySelector(".close-button");if(!t){console.error("Кнопка закрытия не найдена в мобильном меню");return}t.addEventListener("click",()=>{o()});function o(){e.classList.remove("open");const i=document.querySelector(".burger-line");i&&i.classList.remove("open"),document.body.style.overflow="unset";const s=document.querySelector(".header");s&&s.classList.remove("menu-open");const l=document.querySelector(".burger-btn");l&&l.setAttribute("aria-expanded","false")}e.querySelectorAll(".mobile-menu__link").forEach(i=>{i.addEventListener("click",()=>{setTimeout(()=>{o()},150)})});const n=e.querySelector(".mobile-menu__background");n&&n.addEventListener("click",()=>{o()});function c(){e.querySelectorAll(".mobile-menu__icon").forEach((s,l)=>{s.style.opacity="0",s.style.transform="translateX(-20px)",new MutationObserver(m=>{m.forEach(d=>{d.attributeName==="class"&&(e.classList.contains("open")?setTimeout(()=>{s.style.transition="all 0.4s ease",s.style.opacity="1",s.style.transform="translateX(0)"},100+l*70):(s.style.opacity="0",s.style.transform="translateX(-20px)"))})}).observe(e,{attributes:!0})})}c(),console.log("Мобильное меню с иконками инициализировано")}let T=()=>console.log("Modal компонент недоступен");(function(){return w(this,null,function*(){try{T=(yield A(()=>import("./ModalPortal.Cv5sWs3j.js"),[])).initModal}catch(t){console.log("Modal.js не загружен:",t)}})})();function M(e){return w(this,null,function*(){try{return(yield fetch(e,{method:"HEAD"})).ok}catch(t){return console.warn(`Ресурс ${e} недоступен:`,t),!1}})}function p(e){return w(this,null,function*(){const o=`/R36S_STORE_JS/sections/${e}/${e}.html`;try{if(!(yield M(o)))return console.warn(`Секция ${e} недоступна, используем заглушку`),`<section id="${e.toLowerCase()}" class="section">
                <div class="container">
                  <h2>Секция ${e}</h2>
                  <p>Контент будет доступен позже</p>
                </div>
              </section>`;const n=yield fetch(o);if(!n.ok)throw new Error(`HTTP ошибка ${n.status}`);return yield n.text()}catch(r){return console.error(`Ошибка загрузки секции ${e}:`,r),`<div class="error-section">Ошибка загрузки секции ${e}</div>`}})}function Y(e){return w(this,null,function*(){const o=`/R36S_STORE_JS/components/${e}/${e}.html`;try{if(!(yield M(o)))return console.warn(`Компонент ${e} недоступен, используем заглушку`),`<div id="${e.toLowerCase()}" class="component">
                <div class="container">
                  <p>Компонент ${e} недоступен</p>
                </div>
              </div>`;const n=yield fetch(o);if(!n.ok)throw new Error(`HTTP ошибка ${n.status}`);return yield n.text()}catch(r){return console.error(`Ошибка загрузки компонента ${e}:`,r),`<div class="error-component">Ошибка загрузки компонента ${e}</div>`}})}function f(e,t){try{t(),console.log(`${e} инициализирован`)}catch(o){console.error(`Ошибка инициализации ${e}:`,o)}}function W(){return w(this,null,function*(){console.log("Инициализация приложения");const e=document.getElementById("root");if(!e)throw console.error("Элемент #root не найден"),new Error("Элемент #root не найден");e.innerHTML=`
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <div style="text-align: center;">
        <div style="border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; width: 50px; height: 50px; animation: spin 2s linear infinite; margin: 0 auto;"></div>
        <p style="margin-top: 15px; font-family: Arial, sans-serif;">Загрузка...</p>
      </div>
    </div>
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  `;const t="/R36S_STORE_JS/";console.log("Режим:","production"),console.log("Базовый путь:",t);try{const[o,r]=yield Promise.all([p("Header").catch(()=>'<header class="header">Заголовок сайта</header>'),Y("MobileMenu").catch(()=>'<div class="mobile-menu"></div>')]),n=window.location.pathname.replace(t,"/");if(n==="/"||n==="/index.html"){const c={hero:p("Hero"),about:p("About"),features:p("Features"),categories:p("Categories"),articles:p("Articles"),reviews:p("Reviews"),contact:p("Contact"),products:p("Products"),footer:p("Footer")},i=yield Promise.allSettled(Object.values(c)),s={};Object.keys(c).forEach((l,a)=>{s[l]=i[a].status==="fulfilled"?i[a].value:`<section id="${l}" class="error-section">Ошибка загрузки ${l}</section>`}),e.innerHTML=`
        ${o}
        ${r}
        <main id="main-content">
          ${s.hero}
          ${s.about}
          ${s.features}
          ${s.categories}
          ${s.articles}
          ${s.reviews}
          ${s.contact}
          ${s.products}
        </main>
        ${s.footer}
      `,f("Header",x),f("MobileMenu",P),f("Hero",B),f("About",I),f("Features",q),f("Categories",C),f("Articles",R),f("Reviews",F),f("Contact",D),f("Products",j),f("Footer",k),f("Modal",T)}else{const c=yield p("Footer").catch(()=>'<footer class="footer"><p>© 2025</p></footer>');e.innerHTML=`
        ${o}
        ${r}
        <div class="not-found">
          <div class="container">
            <h1>404</h1>
            <p>Страница не найдена</p>
            <a href="${t}" class="back-home">Вернуться на главную</a>
          </div>
        </div>
        ${c}
      `,f("Header",x),f("MobileMenu",P),f("Footer",k)}console.log("Приложение инициализировано")}catch(o){throw console.error("Ошибка при инициализации приложения:",o),e.innerHTML=`
      <div class="error">
        <h1>Ошибка</h1>
        <p>Произошла ошибка при загрузке страницы:</p>
        <pre>${o.message}</pre>
        <button onclick="location.reload()">Перезагрузить страницу</button>
      </div>
    `,o}})}function E(){if(window.location.hash){const e=window.location.hash.substring(1),t=document.getElementById(e);t&&setTimeout(()=>{const o=document.querySelector(".header"),r=o?o.offsetHeight:0,n=t.getBoundingClientRect().top+window.scrollY-r;window.scrollTo({top:n,behavior:"smooth"})},300)}}function z(){document.body.addEventListener("click",e=>{const t=e.target.closest("a");if(t&&t.href&&t.href.startsWith(window.location.origin)&&!t.dataset.external){const o=new URL(t.href);o.pathname===window.location.pathname&&o.hash&&(e.preventDefault(),window.history.pushState(null,"",o.hash),E())}})}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("root");e&&(e.innerHTML=`
      <div style="padding: 20px; text-align: center;">
        <div style="border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; width: 30px; height: 30px; animation: spin 1s linear infinite; margin: 0 auto;"></div>
        <p style="margin-top: 10px;">Загрузка приложения...</p>
      </div>
      <style>
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      </style>
    `);const t=W(),o=new Promise((r,n)=>{setTimeout(()=>n(new Error("Превышено время ожидания инициализации (15 сек)")),15e3)});Promise.race([t,o]).then(()=>{E(),z()}).catch(r=>{console.error("Ошибка инициализации:",r),e&&(e.innerHTML=`
          <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
            <h1>Не удалось загрузить приложение</h1>
            <p>${r.message}</p>
            <button onclick="location.reload()" style="padding: 10px 20px; margin-top: 15px; cursor: pointer;">
              Попробовать снова
            </button>
          </div>
        `)})});window.addEventListener("popstate",E);console.log("Main.js инициализирован");function J(){const e="IntersectionObserver"in window,t=function(){const r=document.createElement("div");return r.style.display="flex",r.style.display==="flex"}(),o=function(){const r=document.createElement("div");return r.style.display="grid",r.style.display==="grid"}();return console.log("Поддержка браузера:"),console.log("- IntersectionObserver:",e),console.log("- Flexbox:",t),console.log("- CSS Grid:",o),e||document.body.classList.add("no-intersection-observer"),t||document.body.classList.add("no-flexbox"),o||document.body.classList.add("no-grid"),{hasIntersectionObserver:e,hasFlexbox:t,hasGrid:o}}document.addEventListener("DOMContentLoaded",()=>{console.log("DOM загружен"),document.getElementById("root"),J();const e=performance.now();console.log(`Страница загружена за ${e.toFixed(2)}ms`),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").then(t=>{console.log("ServiceWorker зарегистрирован:",t)}).catch(t=>{console.error("Ошибка регистрации ServiceWorker:",t)})}),"performance"in window&&"getEntriesByType"in performance&&window.addEventListener("load",()=>{const t=performance.getEntriesByType("navigation")[0],o=performance.getEntriesByType("resource");console.log(`Общее время загрузки: ${t.loadEventEnd.toFixed(2)}ms`);const r=o.reduce((n,c)=>n+c.transferSize,0);console.log(`Загружено ${o.length} ресурсов (${(r/1024).toFixed(2)} KB)`)})});window.onerror=function(e,t,o,r,n){return console.error("Глобальная ошибка:",{message:e,source:t,lineno:o,colno:r,error:n}),!1};window.appVersion={version:"1.0.0",buildDate:new Date().toISOString(),environment:"production"};console.log("Main.js выполнение завершено");
