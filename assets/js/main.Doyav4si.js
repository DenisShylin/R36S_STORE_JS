var w=(e,t,o)=>new Promise((n,r)=>{var c=l=>{try{s(o.next(l))}catch(a){r(a)}},i=l=>{try{s(o.throw(l))}catch(a){r(a)}},s=l=>l.done?n(l.value):Promise.resolve(l.value).then(c,i);s((o=o.apply(e,t)).next())});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const i of c.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(r){if(r.ep)return;r.ep=!0;const c=o(r);fetch(r.href,c)}})();const H="modulepreload",P=function(e){return"/R36S_STORE_JS/"+e},$={},_=function(t,o,n){let r=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),s=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));r=Promise.allSettled(o.map(l=>{if(l=P(l),l in $)return;$[l]=!0;const a=l.endsWith(".css"),f=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const d=document.createElement("link");if(d.rel=a?"stylesheet":H,a||(d.as="script"),d.crossOrigin="",d.href=l,s&&d.setAttribute("nonce",s),document.head.appendChild(d),a)return new Promise((p,g)=>{d.addEventListener("load",p),d.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function c(i){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=i,window.dispatchEvent(s),!s.defaultPrevented)throw i}return r.then(i=>{for(const s of i||[])s.status==="rejected"&&c(s.reason);return t().catch(c)})};function x(){let e=!1,t=window.scrollY,o=null;const n=document.querySelector(".header"),r=document.querySelector(".burger-btn"),c=document.querySelector(".burger-line"),i=document.querySelector(".mobile-menu"),s=document.querySelectorAll(".our-menu-link, .mobile-menu__link");function l(){const u=window.scrollY,h=t<u;o&&clearTimeout(o),u>100?p(!h):p(!0),t=u,d(u>0),o=setTimeout(()=>{},150)}function a(){e=!e,f()}function f(){e?(n.classList.add("menu-open"),r.setAttribute("aria-expanded","true"),c.classList.add("open"),i.classList.add("open"),document.body.style.overflow="hidden"):(n.classList.remove("menu-open"),r.setAttribute("aria-expanded","false"),c.classList.remove("open"),i.classList.remove("open"),document.body.style.overflow="unset")}function d(u){u?n.classList.add("scrolled"):n.classList.remove("scrolled")}function p(u){u?(n.classList.add("visible"),n.classList.remove("hidden")):(n.classList.add("hidden"),n.classList.remove("visible"))}function g(u){u.preventDefault();const h=u.currentTarget.getAttribute("href"),b=h.replace("#",""),L=document.getElementById(b);L&&(p(!0),setTimeout(()=>{const E=n.offsetHeight,T=L.getBoundingClientRect().top+window.scrollY-E;window.scrollTo({top:T,behavior:"smooth"}),e&&(e=!1,f()),window.history.replaceState(null,"",`${window.location.pathname}${h}`),setTimeout(()=>{t=window.scrollY},100)},50))}function v(){if(window.location.hash){const u=window.location.hash.replace("#",""),h=document.getElementById(u);h&&setTimeout(()=>{const b=n.offsetHeight,E=h.getBoundingClientRect().top+window.scrollY-b;window.scrollTo({top:E,behavior:"smooth"})},100)}}window.addEventListener("scroll",l),window.addEventListener("resize",()=>{!(window.innerWidth<=768)&&e&&(e=!1,f())}),r&&r.addEventListener("click",a),s.forEach(u=>{u.addEventListener("click",g)}),v()}function O(){const e=document.querySelector(".hero"),t=document.querySelector(".hero__console-img"),o=document.querySelector(".hero__content"),n=document.querySelector(".hero__description--desktop"),r=document.querySelector(".hero__description--mobile"),c=document.querySelector(".hero__pricing"),i=document.getElementById("buy-button"),s=document.getElementById("more-details-button");t&&(t.onload=()=>{e.classList.add("hero--loaded")},t.complete&&e.classList.add("hero--loaded"));function l(){const a=window.innerWidth>992;n&&r&&c&&(a?(n.style.display="block",r.style.display="none"):(n.style.display="none",r.style.display="block"))}l(),window.addEventListener("resize",l),o&&new IntersectionObserver(f=>{f.forEach(d=>{d.isIntersecting&&d.target.classList.add("animate-in")})},{threshold:.1}).observe(o),i&&i.addEventListener("click",()=>{window.open("https://www.aliexpress.com/item/1005007171465465.html","_blank","noopener,noreferrer")}),s&&s.addEventListener("click",a=>{a.preventDefault();const f=document.getElementById("features"),d=document.querySelector(".header");if(f&&d){const p=d.offsetHeight,g=f.getBoundingClientRect().top,v=window.scrollY||window.pageYOffset,u=g+v-p;window.scrollTo({top:u,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features`)}})}function k(){const e=document.querySelector(".mobile-menu");if(!e){console.error("Мобильное меню не найдено в DOM");return}const t=e.querySelector(".close-button");if(!t){console.error("Кнопка закрытия не найдена в мобильном меню");return}t.addEventListener("click",()=>{o()});function o(){e.classList.remove("open");const i=document.querySelector(".burger-line");i&&i.classList.remove("open"),document.body.style.overflow="unset";const s=document.querySelector(".header");s&&s.classList.remove("menu-open");const l=document.querySelector(".burger-btn");l&&l.setAttribute("aria-expanded","false")}e.querySelectorAll(".mobile-menu__link").forEach(i=>{i.addEventListener("click",()=>{setTimeout(()=>{o()},150)})});const r=e.querySelector(".mobile-menu__background");r&&r.addEventListener("click",()=>{o()});function c(){e.querySelectorAll(".mobile-menu__icon").forEach((s,l)=>{s.style.opacity="0",s.style.transform="translateX(-20px)",new MutationObserver(f=>{f.forEach(d=>{d.attributeName==="class"&&(e.classList.contains("open")?setTimeout(()=>{s.style.transition="all 0.4s ease",s.style.opacity="1",s.style.transform="translateX(0)"},100+l*70):(s.style.opacity="0",s.style.transform="translateX(-20px)"))})}).observe(e,{attributes:!0})})}c(),console.log("Мобильное меню с иконками инициализировано")}let B=()=>console.log("Modal компонент недоступен");(function(){return w(this,null,function*(){try{B=(yield _(()=>import("./ModalPortal.Cv5sWs3j.js"),[])).initModal}catch(t){console.log("Modal.js не загружен:",t)}})})();function M(e){return w(this,null,function*(){try{return(yield fetch(e,{method:"HEAD"})).ok}catch(t){return console.warn(`Ресурс ${e} недоступен:`,t),!1}})}function m(e){return w(this,null,function*(){const t=`/sections/${e}/${e}.html`;try{if(!(yield M(t)))return console.warn(`Секция ${e} недоступна, используем заглушку`),`<section id="${e.toLowerCase()}" class="section">
                <div class="container">
                  <h2>Секция ${e}</h2>
                  <p>Контент будет доступен позже</p>
                </div>
              </section>`;const n=yield fetch(t);if(!n.ok)throw new Error(`HTTP ошибка ${n.status}`);return yield n.text()}catch(o){return console.error(`Ошибка загрузки секции ${e}:`,o),`<div class="error-section">Ошибка загрузки секции ${e}</div>`}})}function I(e){return w(this,null,function*(){const t=`/components/${e}/${e}.html`;try{if(!(yield M(t)))return console.warn(`Компонент ${e} недоступен, используем заглушку`),`<div id="${e.toLowerCase()}" class="component">
                <div class="container">
                  <p>Компонент ${e} недоступен</p>
                </div>
              </div>`;const n=yield fetch(t);if(!n.ok)throw new Error(`HTTP ошибка ${n.status}`);return yield n.text()}catch(o){return console.error(`Ошибка загрузки компонента ${e}:`,o),`<div class="error-component">Ошибка загрузки компонента ${e}</div>`}})}function y(e,t){try{t(),console.log(`${e} инициализирован`)}catch(o){console.error(`Ошибка инициализации ${e}:`,o)}}function q(){return w(this,null,function*(){console.log("Инициализация приложения");const e=document.getElementById("root");if(!e)throw console.error("Элемент #root не найден"),new Error("Элемент #root не найден");e.innerHTML=`
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
  `;const t="/R36S_STORE_JS/";console.log("Режим:","production"),console.log("Базовый путь:",t);try{const[o,n]=yield Promise.all([m("Header").catch(()=>'<header class="header">Заголовок сайта</header>'),I("MobileMenu").catch(()=>'<div class="mobile-menu"></div>')]),r=window.location.pathname.replace(t,"/");if(r==="/"||r==="/index.html"){const c={hero:m("Hero"),about:m("About"),features:m("Features"),categories:m("Categories"),articles:m("Articles"),reviews:m("Reviews"),contact:m("Contact"),products:m("Products"),footer:m("Footer")},i=yield Promise.allSettled(Object.values(c)),s={};Object.keys(c).forEach((l,a)=>{s[l]=i[a].status==="fulfilled"?i[a].value:`<section id="${l}" class="error-section">Ошибка загрузки ${l}</section>`}),e.innerHTML=`
        ${o}
        ${n}
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
      `,y("Header",x),y("MobileMenu",k),y("Hero",O)}else{const c=yield m("Footer").catch(()=>'<footer class="footer"><p>© 2025</p></footer>');e.innerHTML=`
        ${o}
        ${n}
        <div class="not-found">
          <div class="container">
            <h1>404</h1>
            <p>Страница не найдена</p>
            <a href="/" class="back-home">Вернуться на главную</a>
          </div>
        </div>
        ${c}
      `,y("Header",x),y("MobileMenu",k)}console.log("Приложение инициализировано")}catch(o){throw console.error("Ошибка при инициализации приложения:",o),e.innerHTML=`
      <div class="error">
        <h1>Ошибка</h1>
        <p>Произошла ошибка при загрузке страницы:</p>
        <pre>${o.message}</pre>
        <button onclick="location.reload()">Перезагрузить страницу</button>
      </div>
    `,o}})}function S(){if(window.location.hash){const e=window.location.hash.substring(1),t=document.getElementById(e);t&&setTimeout(()=>{const o=document.querySelector(".header"),n=o?o.offsetHeight:0,r=t.getBoundingClientRect().top+window.scrollY-n;window.scrollTo({top:r,behavior:"smooth"})},300)}}function A(){document.body.addEventListener("click",e=>{const t=e.target.closest("a");if(t&&t.href&&t.href.startsWith(window.location.origin)&&!t.dataset.external){const o=new URL(t.href);o.pathname===window.location.pathname&&o.hash&&(e.preventDefault(),window.history.pushState(null,"",o.hash),S())}})}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("root");e&&(e.innerHTML=`
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
    `);const t=q(),o=new Promise((n,r)=>{setTimeout(()=>r(new Error("Превышено время ожидания инициализации (15 сек)")),15e3)});Promise.race([t,o]).then(()=>{S(),A()}).catch(n=>{console.error("Ошибка инициализации:",n),e&&(e.innerHTML=`
          <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
            <h1>Не удалось загрузить приложение</h1>
            <p>${n.message}</p>
            <button onclick="location.reload()" style="padding: 10px 20px; margin-top: 15px; cursor: pointer;">
              Попробовать снова
            </button>
          </div>
        `)})});window.addEventListener("popstate",S);console.log("Main.js инициализирован");function C(){const e="IntersectionObserver"in window,t=function(){const n=document.createElement("div");return n.style.display="flex",n.style.display==="flex"}(),o=function(){const n=document.createElement("div");return n.style.display="grid",n.style.display==="grid"}();return console.log("Поддержка браузера:"),console.log("- IntersectionObserver:",e),console.log("- Flexbox:",t),console.log("- CSS Grid:",o),e||document.body.classList.add("no-intersection-observer"),t||document.body.classList.add("no-flexbox"),o||document.body.classList.add("no-grid"),{hasIntersectionObserver:e,hasFlexbox:t,hasGrid:o}}document.addEventListener("DOMContentLoaded",()=>{console.log("DOM загружен"),document.getElementById("root"),C();const e=performance.now();console.log(`Страница загружена за ${e.toFixed(2)}ms`),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").then(t=>{console.log("ServiceWorker зарегистрирован:",t)}).catch(t=>{console.error("Ошибка регистрации ServiceWorker:",t)})}),"performance"in window&&"getEntriesByType"in performance&&window.addEventListener("load",()=>{const t=performance.getEntriesByType("navigation")[0],o=performance.getEntriesByType("resource");console.log(`Общее время загрузки: ${t.loadEventEnd.toFixed(2)}ms`);const n=o.reduce((r,c)=>r+c.transferSize,0);console.log(`Загружено ${o.length} ресурсов (${(n/1024).toFixed(2)} KB)`)})});window.onerror=function(e,t,o,n,r){return console.error("Глобальная ошибка:",{message:e,source:t,lineno:o,colno:n,error:r}),!1};window.appVersion={version:"1.0.0",buildDate:new Date().toISOString(),environment:"production"};console.log("Main.js выполнение завершено");
