var R=(e,o,t)=>new Promise((n,i)=>{var a=g=>{try{c(t.next(g))}catch(p){i(p)}},l=g=>{try{c(t.throw(g))}catch(p){i(p)}},c=g=>g.done?n(g.value):Promise.resolve(g.value).then(a,l);c((t=t.apply(e,o)).next())});(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();const H="modulepreload",z=function(e){return"/R36S_STORE_JS/"+e},T={},F=function(o,t,n){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=Promise.allSettled(t.map(g=>{if(g=z(g),g in T)return;T[g]=!0;const p=g.endsWith(".css"),u=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${g}"]${u}`))return;const v=document.createElement("link");if(v.rel=p?"stylesheet":H,p||(v.as="script"),v.crossOrigin="",v.href=g,c&&v.setAttribute("nonce",c),document.head.appendChild(v),p)return new Promise((b,y)=>{v.addEventListener("load",b),v.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${g}`)))})}))}function a(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return i.then(l=>{for(const c of l||[])c.status==="rejected"&&a(c.reason);return o().catch(a)})};function M(){let e=!1,o=window.scrollY,t=null;const n=document.querySelector(".header"),i=document.querySelector(".burger-btn"),a=document.querySelector(".burger-line"),l=document.querySelector(".mobile-menu"),c=document.querySelectorAll(".our-menu-link, .mobile-menu__link");function g(){const s=window.scrollY,h=o<s;t&&clearTimeout(t),s>100?b(!h):b(!0),o=s,v(s>0),t=setTimeout(()=>{},150)}function p(){e=!e,u()}function u(){e?(n.classList.add("menu-open"),i.setAttribute("aria-expanded","true"),a.classList.add("open"),l.classList.add("open"),document.body.style.overflow="hidden"):(n.classList.remove("menu-open"),i.setAttribute("aria-expanded","false"),a.classList.remove("open"),l.classList.remove("open"),document.body.style.overflow="unset")}function v(s){s?n.classList.add("scrolled"):n.classList.remove("scrolled")}function b(s){s?(n.classList.add("visible"),n.classList.remove("hidden")):(n.classList.add("hidden"),n.classList.remove("visible"))}function y(s){s.preventDefault();const h=s.currentTarget.getAttribute("href"),x=h.replace("#",""),r=document.getElementById(x);r&&(b(!0),setTimeout(()=>{const m=n.offsetHeight,k=r.getBoundingClientRect().top+window.scrollY-m;window.scrollTo({top:k,behavior:"smooth"}),e&&(e=!1,u()),window.history.replaceState(null,"",`${window.location.pathname}${h}`),setTimeout(()=>{o=window.scrollY},100)},50))}function _(){if(window.location.hash){const s=window.location.hash.replace("#",""),h=document.getElementById(s);h&&setTimeout(()=>{const x=n.offsetHeight,m=h.getBoundingClientRect().top+window.scrollY-x;window.scrollTo({top:m,behavior:"smooth"})},100)}}window.addEventListener("scroll",g),window.addEventListener("resize",()=>{!(window.innerWidth<=768)&&e&&(e=!1,u())}),i&&i.addEventListener("click",p),c.forEach(s=>{s.addEventListener("click",y)}),_()}function N(){console.log("Hero section initialized");const e=document.querySelector(".hero"),o=document.querySelector(".hero__console-img"),t=document.querySelector(".hero__image source"),n=document.querySelector(".hero__content"),i=document.querySelector(".hero__description--desktop"),a=document.querySelector(".hero__description--mobile"),l=document.querySelector(".hero__pricing"),c=document.getElementById("buy-button"),g=document.getElementById("more-details-button"),p="/img/hero/herou1_1x_.png",u="/img/hero/herou1_2x_.png";console.log("Using image paths:",{heroImage1x:p,heroImage2x:u});function v(){if(!o){console.error("Hero image element not found");return}console.log("Setting hero image paths"),o.onerror=()=>{console.error("Failed to load hero image:",o.src),e.classList.add("hero--loaded")},o.onload=()=>{console.log("Hero image loaded successfully"),e.classList.add("hero--loaded")},o.src=u,o.srcset=`${p} 1x, ${u} 2x`,o.complete&&(console.log("Hero image already loaded (from cache)"),e.classList.add("hero--loaded"))}function b(){t?t.srcset=p:console.warn("Hero image source element not found")}function y(){const x=window.innerWidth>992;i&&a&&l&&(x?(i.style.display="block",a.style.display="none"):(i.style.display="none",a.style.display="block"))}function _(){if(!n)return;new IntersectionObserver(r=>{r.forEach(m=>{m.isIntersecting&&m.target.classList.add("animate-in")})},{threshold:.1}).observe(n)}function s(){c&&c.addEventListener("click",()=>{window.open("https://www.aliexpress.com/item/1005007171465465.html","_blank","noopener,noreferrer")}),g&&g.addEventListener("click",h)}function h(x){x.preventDefault();const r=document.getElementById("features"),m=document.querySelector(".header");if(r&&m){const f=m.offsetHeight,k=r.getBoundingClientRect().top,I=window.scrollY||window.pageYOffset,d=k+I-f;window.scrollTo({top:d,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features`)}}v(),b(),y(),_(),s(),window.addEventListener("resize",y)}function W(e){let o=null,t=null,n=!1,i=0,a=null;(()=>{const s="modal-about-styles";if(document.getElementById(s))return;const h=document.createElement("style");h.id=s,h.textContent=`
      .modal-about-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(15, 23, 42, 0.9);
        backdrop-filter: blur(8px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        padding: 30px;
        animation: modalAboutOverlayShow 0.3s ease;
      }

      .modal-about-content {
        background: linear-gradient(135deg,
                rgba(255, 255, 255, 0.05) 0%,
                rgba(255, 255, 255, 0.02) 100%);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        width: 100%;
        max-width: 980px;
        max-height: 85vh;
        position: relative;
        animation: modalAboutShow 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(12px);
        overflow: hidden;
        display: flex;
        flex-direction: column;
      }

      .modal-about-close {
        cursor: pointer;
        padding: 17px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 13px;
        right: 13px;
        background: transparent;
        border: none;
        border-radius: 50%;
        z-index: 1000;
        width: 41px;
        height: 41px;
        transition: all 0.3s ease;
        color: white;
      }

      .modal-about-header {
        padding: 26px;
        display: flex;
        align-items: center;
        gap: 17px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }

      .modal-about-icon-wrapper {
        width: 51px;
        height: 51px;
        background: rgba(37, 99, 235, 0.1);
        border-radius: 14px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .modal-about-title {
        font-size: 20px;
        font-weight: 600;
        color: #fff;
        margin: 0;
      }

      .modal-about-body {
        padding: 26px;
        display: flex;
        flex-direction: row;
        gap: 30px;
        flex: 1;
      }

      .modal-about-media-container {
        width: 50%;
        flex-shrink: 0;
      }

      .modal-about-content-container {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        overflow-y: auto;
        max-height: calc(85vh - 82px);
        padding-right: 10px;
      }

      .modal-about-stats {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 20px;
        padding: 17px;
        background: rgba(37, 99, 235, 0.1);
        border-radius: 14px;
        border: 1px solid rgba(96, 165, 250, 0.2);
        gap: 17px;
        flex-wrap: wrap;
      }

      .modal-about-description {
        color: #94A3B8;
        line-height: 1.8;
        font-size: 14px;
        white-space: pre-line;
      }

      @media (max-width: 768px) {
        .modal-about-content {
          max-width: 680px;
          max-height: 76.5vh;
          overflow-y: auto;
        }

        .modal-about-body {
          flex-direction: column;
          padding: 17px;
        }

        .modal-about-media-container,
        .modal-about-content-container {
          width: 100%;
        }

        .modal-about-content-container {
          overflow-y: visible;
          max-height: none;
          padding-right: 0;
        }
      }
    `,document.head.appendChild(h)})();function c(s){s.key==="Escape"&&n&&y()}function g(){const s=document.createElement("div");return s.className="modal-about-overlay",s.style.display="none",s.addEventListener("click",y),e.appendChild(s),s}function p(){return t?t.title==="Extensive color selection"&&t.colorImages?`
        <img
          src="${t.colorImages[i]}"
          alt="R36S Color Variant ${i+1}"
          class="modal-about-image"
          onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+Q29sb3IgVmFyaWFudCBJbWFnZTwvdGV4dD48L3N2Zz4=';"
        />
      `:t.videoUrl?`
        <video
          class="modal-about-video"
          autoplay
          muted
          loop
          playsInline
          preload="auto"
          poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+VmlkZW8gLSAke2ZlYXR1cmUuaW1hZ2VBbHR9PC90ZXh0Pjwvc3ZnPg=="
        >
          <source src="${t.videoUrl}" type="video/mp4" />
          <p>Your browser does not support HTML5 video.</p>
        </video>
      `:t.imageUrl?`
      <img
        src="${t.imageUrl}"
        alt="${t.imageAlt||"Feature image"}"
        class="modal-about-image"
        onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+SW1hZ2UgLSAke2ZlYXR1cmUuaW1hZ2VBbHR9PC90ZXh0Pjwvc3ZnPg==';"
      />
    `:`
      <div class="modal-about-image" style="background-color: #333; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px;">
        ${t.imageAlt||"Feature Image"}
      </div>
    `:""}function u(){(t==null?void 0:t.title)==="Extensive color selection"&&t.colorImages&&(a&&clearInterval(a),a=setInterval(()=>{i=i===t.colorImages.length-1?0:i+1;const s=o.querySelector(".modal-about-image");s&&(s.src=t.colorImages[i],s.alt=`R36S Color Variant ${i+1}`)},1e3))}function v(){if(!o||!t)return;o.innerHTML=`
      <div class="modal-about-content">
        <button class="modal-about-close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div class="modal-about-header">
          <div class="modal-about-icon-wrapper">${t.icon}</div>
          <h3 class="modal-about-title">${t.title}</h3>
        </div>

        <div class="modal-about-body">
          <div class="modal-about-media-container">
            ${p()}
          </div>
          
          <div class="modal-about-content-container">
            <div class="modal-about-stats">
              <div class="modal-about-price-wrapper">
                <span class="modal-about-original-price">US $108.06</span>
                <span class="modal-about-current-price">
                  $35.48
                  <span style="font-size: 24px">US</span>
                </span>
              </div>

              <a
                href="https://www.aliexpress.com/item/1005007171465465.html"
                class="modal-about-button modal-about-button--primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="modal-about-button-pulse"></span>
                <span class="modal-about-button-text">BUY NOW -68%</span>
                <span class="modal-about-button-shine"></span>
              </a>
            </div>

            <div class="modal-about-description">
              ${t.fullDescription}
            </div>
          </div>
        </div>
      </div>
    `;const s=o.querySelector(".modal-about-close");s&&s.addEventListener("click",y);const h=o.querySelector(".modal-about-content");h&&h.addEventListener("click",x=>x.stopPropagation())}function b(s){return t=s,o||(o=g()),v(),o.style.display="flex",n=!0,window.addEventListener("keydown",c),document.body.style.overflow="hidden",u(),{close:y}}function y(){!n||!o||(n=!1,o.style.display="none",window.removeEventListener("keydown",c),document.body.style.overflow="visible",a&&(clearInterval(a),a=null))}function _(){y(),o&&e.contains(o)&&e.removeChild(o),o=null,t=null}return{open:b,close:y,destroy:_}}const Z="/R36S_STORE_JS/assets/video_1_.dFmxd0JH.gif",U="/R36S_STORE_JS/assets/video_2_.BNHP--Uh.gif",G="/R36S_STORE_JS/assets/Untitled_1_1x.BEwuD17K.jpg",V="/R36S_STORE_JS/assets/Untitled_2_1x.B9nk1bhQ.jpg",Y="/R36S_STORE_JS/assets/Untitled_3_1x.Dj7NRcjB.jpg",X="/R36S_STORE_JS/assets/Untitled_4_1x.q3_p-GyC.jpg",J="/R36S_STORE_JS/assets/video_3_batrey_.DLtKjI3M.MP4",Q="/R36S_STORE_JS/assets/video_6_.Na-nHAjA.MP4",K="/R36S_STORE_JS/assets/video_5_option_.D1VzW0AP.MP4";function ee(){console.log("Инициализация секции About");const e=document.querySelector(".about__cards");if(!e){console.error("Контейнер для карточек не найден");return}let o={x:0,y:0},t=null;const n=[{id:1,icon:`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <line x1="6" y1="12" x2="10" y2="12"></line>
          <line x1="8" y1="10" x2="8" y2="14"></line>
          <line x1="15" y1="13" x2="15.01" y2="13"></line>
          <line x1="18" y1="11" x2="18.01" y2="11"></line>
          <rect x="2" y="6" width="20" height="12" rx="2"></rect>
        </svg>
      `,title:"Retro Game Collection",description:"Get into the game with the r36s portable gaming console.",number:"15K+",detail:"classic games",fullDescription:`Discover a rich collection of classic games, including over 15,000 titles from different eras. From iconic arcade games to beloved console games, our library spans every significant platform of the past.

The collection includes:
• Classic arcade games from the 80s and 90s
• Complete libraries of NES, SNES, Sega and other consoles
• Exclusive ports and rare releases
• Optimized versions for modern hardware`,imageUrl:Z,imageAlt:"Коллекция ретро-игр"},{id:2,icon:`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      `,title:"Vibrant Display Technologies",description:"Enjoy vivid games on the 3.5* LCD display with crisp 640x480 resolution.",number:'3.5"',detail:"IPS display",fullDescription:`R36S Console Display Specifications:
• 3.5-inch IPS display
• 640x480 resolution
• High brightness and contrast
• Wide viewing angles
• Anti-glare coating
• Energy-efficient backlight
• Scratch-resistant surface`,imageUrl:U,imageAlt:"Display Technologies"},{id:3,icon:`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
          <line x1="22" y1="11" x2="22" y2="13"></line>
        </svg>
      `,title:"Powerful battery",description:"Enjoy up to 7-8 hours of continuous gaming with the R36S.",number:"7-8",detail:"hours of play",fullDescription:`**Powerful 3200 mAh Battery**

Experience up to 7-8 hours of extended gaming with the R36S. The high-capacity 3200 mAh battery powers its crisp 3.5-inch IPS display (640x480 resolution), delivering an immersive gaming experience without frequent charging.

Key features:
- Long-lasting gameplay 
- Full-screen IPS display
- Portable design
- Uninterrupted entertainment

Take your gaming anywhere – play more, charge less.`,videoUrl:J,imageAlt:"Battery Life"},{id:4,icon:`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <circle cx="12" cy="12" r="6"></circle>
          <circle cx="12" cy="12" r="2"></circle>
        </svg>
      `,title:"Extensive color selection",description:"Experience our wide selection of stunning console colors.",number:"10+",detail:"COLORS",fullDescription:`Experience the R36S Collection:

The R36S console delivers 12+ captivating color variations in 2024, including our signature Midnight Black and eye-catching Galactic Purple. Each R36S model features recycled plastic finish and scratch-resistant coating.

Available Colors:
- Classic Black
- Vibrant Orange
- Mesmerizing Purple
- Dynamic Red
- Pure White
- Radiant Yellow ...`,colorImages:[G,V,Y,X],imageAlt:"R36S Color Variants"},{id:5,icon:`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      `,title:"Extensive settings",description:"Customize controls, brightness, sound and settings for maximum comfort",number:"30+",detail:"settings",fullDescription:`Features & Connectivity:

- Connect to external displays via OTG for large-screen gaming
- Compatible with modern gaming controllers and gamepads
- Multi-language interface support
- Customizable control schemes and button mapping
- Advanced display settings with adjustable brightness and contrast
- Audio optimization with multiple sound profiles
- Screen mirroring capability
- Low latency connection for seamless gameplay
- Expandable storage support
- Quick system updates
- User-friendly interface`,videoUrl:K,imageAlt:"R36S Settings"},{id:6,icon:`
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="about-card__icon"
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      `,title:"Maximum portability",description:"Portable console with removable battery for gaming on the go.",number:"Ultra",detail:"Portable",fullDescription:`Whether commuting, traveling, or taking a quick break, the R36S is ready for instant entertainment. Its durable design and protected screen ensure worry-free portability, while the long-lasting battery keeps you gaming on the go.

Features:
• Pocket-sized dimensions for ultimate portability
• Rugged construction for daily carry
• Ergonomic grip for extended gaming sessions
• Quick startup for instant gaming access

Never compromise between portability and performance - the R36S delivers both in a perfectly portable package.`,videoUrl:Q,imageAlt:"R36S Portability"}];function i(){e.innerHTML=n.map(p=>`
      <div class="about-card" data-id="${p.id}">
        <div class="card-blur"></div>
        <div class="card-glow"></div>
        <div class="about-card__content">
          <div class="about-card__icon-wrapper">${p.icon}</div>
          <h3 class="about-card__title">${p.title}</h3>
          <p class="about-card__description">${p.description}</p>
          <div class="about-card__stats">
            <span class="about-card__number">${p.number}</span>
            <span class="about-card__detail">${p.detail}</span>
          </div>
          <button class="about-card__button" data-feature-id="${p.id}">
            <span class="button-text">More details</span>
            <span class="button-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </span>
          </button>
        </div>
        <div class="card-indicator"></div>
      </div>
    `).join("")}function a(p){const u=p.currentTarget,v=u.getBoundingClientRect();o={x:p.clientX-v.left,y:p.clientY-v.top},u.style.setProperty("--mouse-x",`${o.x}px`),u.style.setProperty("--mouse-y",`${o.y}px`)}function l(p){const u=parseInt(p.currentTarget.dataset.featureId);console.log("Клик по кнопке карточки ID:",u);const v=n.find(b=>b.id===u);if(!v){console.error("Данные для карточки не найдены");return}t||(t=W(document.body)),t.open(v)}function c(){document.querySelectorAll(".about-card").forEach(u=>{u.addEventListener("mouseenter",()=>{parseInt(u.dataset.id),u.classList.add("active")}),u.addEventListener("mouseleave",()=>{u.classList.remove("active")}),u.addEventListener("mousemove",a)}),document.querySelectorAll(".about-card__button").forEach(u=>{u.addEventListener("click",l)})}function g(){document.querySelectorAll(".about-card").forEach(u=>{u.removeEventListener("mouseenter",()=>{}),u.removeEventListener("mouseleave",()=>{}),u.removeEventListener("mousemove",a)}),document.querySelectorAll(".about-card__button").forEach(u=>{u.removeEventListener("click",l)}),t&&(t.destroy(),t=null)}try{console.log("Рендерим карточки..."),i(),console.log("Устанавливаем обработчики событий..."),c(),console.log("Инициализация About завершена успешно")}catch(p){console.error("Ошибка при инициализации About:",p)}return{cleanup:g}}document.addEventListener("DOMContentLoaded",()=>{D()});function D(){const e=document.getElementById("features"),o=document.getElementById("featuresVideo"),t=document.getElementById("soundToggleButton"),n=document.getElementById("volumeOffIcon"),i=document.getElementById("volumeOnIcon"),a=document.getElementById("buyButton"),l=document.getElementById("moreInfoButton");o&&(o.volume=.5,o.play().catch(c=>{console.log("Автовоспроизведение не удалось:",c)})),a&&a.addEventListener("click",ne),l&&l.addEventListener("click",ie),t&&t.addEventListener("click",()=>te(o,n,i)),window.addEventListener("scroll",()=>{oe(e,o,n,i)})}function te(e,o,t){if(e)if(e.muted=!e.muted,e.muted){o.style.display="block",t.style.display="none";const n=document.getElementById("soundToggleButton");n&&n.setAttribute("aria-label","Включить звук")}else{e.volume=.5,o.style.display="none",t.style.display="block";const n=document.getElementById("soundToggleButton");n&&n.setAttribute("aria-label","Выключить звук")}}function oe(e,o,t,n){if(!e||!o||o.muted)return;const i=e.getBoundingClientRect();if(!(i.top<window.innerHeight&&i.bottom>0)){o.muted=!0,t.style.display="block",n.style.display="none";const l=document.getElementById("soundToggleButton");l&&l.setAttribute("aria-label","Включить звук")}}function ne(){window.open("https://www.aliexpress.com/item/1005007171465465.html?spm=a2g0o.store_pc_home.0.0.70583a88IDCuNJ&pdp_npi=4%40dis%21UAH%214%C2%A0485%2C21%20%D0%B3%D1%80%D0%BD.%211%C2%A0472%2C53%20%D0%B3%D1%80%D0%BD.%21%21%21767.45%21251.96%21%40211b498b17390151033607761d21d7%2112000039694115852%21sh%21UA%211927913003%21X","_blank","noopener,noreferrer")}function ie(){const e=document.getElementById("features-r36s"),o=document.querySelector(".header");if(e&&o){const t=o.offsetHeight,n=e.getBoundingClientRect().top,i=window.scrollY||window.pageYOffset,a=n+i-t;window.scrollTo({top:a,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features-r36s`)}}function re(){console.log("Инициализация секции Categories");const e=document.querySelector(".categories__video"),o=document.querySelector(".categories__video-placeholder"),t=document.getElementById("categories"),n=document.querySelector(".categories__content"),i=document.querySelector(".categories__video-play"),a=document.querySelector(".categories__video-mute"),l=document.querySelector(".categories__video-slider"),c=document.querySelector(".categories__video-container"),g=document.querySelector(".categories__video-time span:first-child"),p=document.querySelector(".categories__video-time span:last-child");if(!t)return console.error("Секция Categories не найдена в DOM"),{};n||console.warn("Элемент categories__content не найден");let u=!1,v=!0,b=!1,y=!1;const _=d=>{if(isNaN(d)||d<0)return"0:00";const w=Math.floor(d/60),S=Math.floor(d%60);return`${w}:${S.toString().padStart(2,"0")}`};function s(){i&&(i.innerHTML=u?`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <rect x="6" y="4" width="4" height="16"></rect>
           <rect x="14" y="4" width="4" height="16"></rect>
         </svg>`:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <polygon points="5 3 19 12 5 21 5 3"></polygon>
         </svg>`)}function h(){a&&(a.innerHTML=v?`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
           <line x1="23" y1="9" x2="17" y2="15"></line>
           <line x1="17" y1="9" x2="23" y2="15"></line>
         </svg>`:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
           <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
         </svg>`)}function x(){if(!(!e||y)){if(u)e.pause(),u=!1;else{const d=e.play();if(d!==void 0){d.then(()=>{console.log("Воспроизведение видео успешно"),u=!0}).catch(w=>{console.warn("Не удалось воспроизвести видео:",w),u=!1}).finally(()=>{s()});return}else u=!0}s()}}function r(d){if(!e)return;for(;e.firstChild;)e.removeChild(e.firstChild);const w=document.createElement("source");w.src=d,w.type="video/mp4";const S=document.createTextNode("Your browser does not support the video tag.");e.appendChild(w),e.appendChild(S),e.load()}function m(){c&&(y=!0,e&&(e.style.display="none"),c.innerHTML=`
      <div class="categories__video-fallback" style="height: 300px; display: flex; align-items: center; justify-content: center; background: rgba(15, 23, 42, 0.8); border-radius: 24px;">
        <div style="text-align: center; padding: 20px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 20px;">
            <path d="M8 16l12-8-12-8v16z"></path>
          </svg>
          <p style="margin: 0; font-size: 16px;">Видео временно недоступно</p>
        </div>
      </div>
    `)}if(window.IntersectionObserver&&n)try{const d=new IntersectionObserver(w=>{w.forEach(S=>{S.isIntersecting?S.target.classList.add("animate-in"):e&&S.target===t&&(e.muted=!0,v=!0,h())})},{threshold:.1});d.observe(n),t&&d.observe(t)}catch(d){console.error("Ошибка при инициализации IntersectionObserver:",d),n&&n.classList.add("animate-in")}else n&&n.classList.add("animate-in");const f=["/video/categories/video_categories_.MP4","/public/video/categories/video_categories_.MP4","../video/categories/video_categories_.MP4","video_categories_.MP4"];function k(d){return new Promise(w=>{const S=setTimeout(()=>{console.log(`Превышено время ожидания для ${d}`),w(!1)},2e3);fetch(d,{method:"HEAD",cache:"no-cache"}).then(C=>{clearTimeout(S),C.ok?(console.log(`Видео доступно по пути: ${d}`),w(!0)):(console.log(`Видео недоступно по пути: ${d}, статус: ${C.status}`),w(!1))}).catch(C=>{clearTimeout(S),console.warn(`Ошибка при проверке пути ${d}:`,C),w(!1)})})}function I(){return R(this,null,function*(){for(const d of f)if(yield k(d))return d;return null})}return e?(console.log("Видео элемент найден:",e),e.muted=!0,e.loop=!0,e.playsInline=!0,e.addEventListener("loadedmetadata",()=>{try{console.log("Метаданные видео загружены"),b=!0,o&&(o.style.display="none"),e.style.display="block",l&&!isNaN(e.duration)&&(l.max=e.duration,p&&(p.textContent=_(e.duration)));const d=e.play();d!==void 0&&d.then(()=>{console.log("Автовоспроизведение видео успешно"),u=!0,s()}).catch(w=>{console.warn("Автовоспроизведение видео не поддерживается, не критично:",w),s()})}catch(d){console.error("Ошибка при обработке метаданных видео:",d)}}),e.addEventListener("timeupdate",()=>{try{l&&!isNaN(e.currentTime)&&(l.value=e.currentTime,g&&(g.textContent=_(e.currentTime)))}catch(d){console.error("Ошибка при обновлении времени видео:",d)}}),e.addEventListener("error",d=>{console.error("Ошибка при загрузке видео:",d),b||I().then(w=>{w?(console.log("Найден работающий путь к видео:",w),r(w)):(console.error("Ни один из путей к видео не работает"),m())})}),setTimeout(()=>{!b&&!y&&(console.log("Видео не загрузилось автоматически, ищем работающий путь"),I().then(d=>{d?(console.log("Найден работающий путь к видео:",d),r(d)):(console.error("Ни один из путей к видео не работает"),m())}))},2e3)):(console.error("Видео элемент не найден в DOM"),m()),i&&i.addEventListener("click",d=>{d.stopPropagation(),x()}),a&&a.addEventListener("click",d=>{d.stopPropagation(),e&&(v=!v,e.muted=v,h())}),l&&l.addEventListener("input",d=>{if(e)try{const w=parseFloat(d.target.value);isNaN(w)||(e.currentTime=w)}catch(w){console.error("Ошибка при изменении времени видео:",w)}}),c&&c.addEventListener("click",d=>{d.target.closest(".categories__video-controls")||x()}),s(),h(),t&&t.classList.add("initialized"),{togglePlay:x,cleanup:()=>{e&&(e.pause(),e.removeAttribute("src"),e.load())}}}function se(){const e=document.getElementById("articles");if(!e){console.warn("Секция Articles не найдена в DOM, пробуем найти с другим id");const a=document.querySelector(".articles")||document.querySelector('section[id^="articles"]')||document.querySelector("section.articles");if(!a){console.error("Не удалось найти секцию Articles в DOM никаким способом"),console.debug("Структура DOM:",document.body.innerHTML);return}a.id||(a.id="articles"),console.log("Найден альтернативный элемент для секции Articles:",a)}console.log("Инициализация секции Articles");const o=[{id:1,title:"Global Expansion of R36S: A Growing Gaming Empire",sections:[{subtitle:"Global Market Presence",content:"The R36S Retro Handheld Game Console brand actively expands its presence across global markets through strategic partnerships. As an R36S distributor, companies gain access to a rapidly growing retro gaming market. Moreover, the brand welcomes partnerships in North America, Europe, Asia, and Australia, offering exclusive distribution rights to qualified partners. Currently, R36S cooperation extends to major marketplaces like Amazon, eBay, and regional e-commerce platforms."},{subtitle:"Distribution Network and Market Opportunities",content:"Becoming an R36S dealer opens opportunities in both online and offline retail channels. The brand particularly focuses on emerging markets in Southeast Asia, Latin America, and Eastern Europe. Furthermore, R36S maintains strict quality control and provides comprehensive support to its partners. Local distributors receive marketing materials, technical documentation, and dedicated account managers. Additionally, exclusive distributor status comes with territory protection and preferential pricing."},{subtitle:"Partnership Benefits and Support System",content:"R36S collaboration offers significant advantages for business growth. Partners receive priority access to new product launches and promotional campaigns. The brand's contact number for R36S ensures direct communication with headquarters. Besides, the company provides extensive training programs and marketing support. Subsequently, partners can leverage the brand's established reputation in the gaming industry."},{subtitle:"E-commerce Integration and Digital Presence",content:"The R36S dealer network actively utilizes modern e-commerce solutions. Partners can integrate with popular marketplace platforms or develop dedicated online stores. Meanwhile, the brand provides complete API documentation and inventory management tools. The R36S distributor network spans across 47 countries, with plans for further expansion. Consequently, partners benefit from established logistics and supply chain infrastructure."},{subtitle:"Quality Assurance and Customer Support",content:"As an exclusive distributor, partners receive comprehensive warranty and after-sales support. The brand maintains regional service centers and provides technical training. For seamless communication, the R36S contact number connects partners with dedicated support teams. Furthermore, the company implements strict quality control measures throughout the distribution chain. Regular audits and performance reviews ensure consistent service quality."},{subtitle:"Future Growth and Market Development",content:"R36S cooperation continues to evolve with market demands. The brand actively develops new product lines and explores emerging markets. Through strategic R36S collaboration, partners participate in product development and market research. Subsequently, distributors gain competitive advantages in their respective regions. The brand maintains flexible partnership models adapted to local market conditions, ensuring sustainable growth for all stakeholders."},{subtitle:"Global Distribution Opportunities with R36S",content:"The R36S Distributor network continues to expand across multiple continents. Moreover, this presents an excellent opportunity for entrepreneurs worldwide. Currently, R36S seeks strategic partnerships in key markets including North America, Europe, Asia, and Australia. Furthermore, becoming an R36S dealer opens doors to a rapidly growing retro gaming market."},{subtitle:"Exclusive Distribution Rights and Territory Protection",content:"As an Exclusive Distributor for R36S, you'll receive comprehensive territory protection. Additionally, the company provides extensive support for market development. The R36S team understands local market dynamics and helps partners succeed. Therefore, each exclusive territory comes with dedicated marketing support and competitive pricing advantages. Indeed, this partnership model has proven successful across various international markets."},{subtitle:"Marketplace Integration and E-commerce Solutions",content:"Collaboration with R36S includes full support for marketplace integration. Subsequently, partners can sell through popular platforms like Amazon, eBay, and regional marketplaces. Meanwhile, R36S dealers receive specialized training for online sales optimization. Thus, whether you choose marketplace integration or your own e-commerce store, R36S provides necessary tools and resources."}]},{id:2,title:"Revolutionizing Retro Gaming: The R36S Story",sections:[{subtitle:"A New Era in Handheld Gaming",content:"Welcome to the world of R36S, where nostalgia meets innovation. The R36S handheld has quickly become a dominant force in English-speaking markets, captivating gamers from the United States to Australia. Moreover, this revolutionary r36s game console brings together classic gaming charm and modern technology. Initially launched as a passion project, the R36S retro handheld has evolved into a gaming phenomenon that continues to exceed expectations."},{subtitle:"Superior Design and Build Quality",content:"The r36s handheld game console stands out with its exceptional build quality and ergonomic design. Furthermore, every component undergoes rigorous testing to ensure durability. The device features a premium-grade aluminum body, responsive buttons, and a crystal-clear IPS display. Additionally, the thoughtful button layout prevents hand fatigue during extended gaming sessions. Thanks to user feedback, we've refined every aspect of the console's design."},{subtitle:"Powerful Performance for Endless Entertainment",content:"Under the hood, the R36S packs impressive hardware that delivers smooth performance. Consequently, you can enjoy thousands of classic games without lag or stuttering. The powerful processor handles complex emulation effortlessly. Meanwhile, the optimized software ensures quick load times and stable gameplay. Besides, the r36s handheld review community consistently praises its reliable performance."},{subtitle:"Expansive Game Library and Compatibility",content:"One of the most compelling features of the retro r36s is its extensive game compatibility. In fact, the system supports multiple classic gaming platforms. Subsequently, users can access their favorite childhood games all in one device. The intuitive interface makes game management simple and straightforward. Naturally, we regularly update the firmware to expand compatibility even further."},{subtitle:"Battery Life That Goes the Distance",content:"The R36S showcases impressive battery longevity, surpassing many competitors in its class. Therefore, you can enjoy extended gaming sessions without constantly searching for a power outlet. The efficient power management system maximizes battery life. Similarly, the quick-charge feature gets you back in the game faster. Indeed, the battery performance sets a new standard for handheld gaming devices."},{subtitle:"Advanced Display Technology",content:"Experience your favorite games in stunning clarity on the R36S's advanced display. Hence, every pixel appears sharp and vibrant, bringing classic games to life. The customizable display settings accommodate different lighting conditions. Likewise, the anti-glare coating reduces eye strain during long gaming sessions. Certainly, the visual quality enhances the overall gaming experience."},{subtitle:"User-Friendly Interface and Controls",content:"We've designed the r36s handheld game console with user convenience in mind. Thus, navigating menus and configuring settings feels natural and intuitive. The responsive controls provide precise gaming input. Nevertheless, we continue to refine the interface based on community feedback. As a result, both newcomers and experienced gamers feel right at home."},{subtitle:"Robust Community Support",content:"Behind every R36S is a thriving community of passionate gamers. Accordingly, users share tips, game recommendations, and troubleshooting advice. Our dedicated support team actively engages with the community. Furthermore, we implement community suggestions in regular updates. Together, we're building more than just a gaming device – we're creating a gaming movement."},{subtitle:"Value That Exceeds Expectations",content:"The R36S delivers premium features without the premium price tag. Yet, we never compromise on quality or performance. The comprehensive package includes essential accessories and detailed documentation. In addition, free firmware updates add new features and improvements. Undoubtedly, the R36S offers exceptional value for retro gaming enthusiasts."},{subtitle:"Future-Proof Investment",content:"Choosing an R36S means investing in a device that grows with you. Subsequently, regular software updates introduce new features and improvements. The robust hardware ensures long-term reliability. Meanwhile, our commitment to innovation drives continuous development. Finally, the R36S represents not just a gaming console, but a gateway to endless retro gaming possibilities."}]}],t=e.querySelector(".articles__grid");if(!t){console.error("Элемент .articles__grid не найден в секции Articles");return}const n=[];o.forEach(a=>{const l=document.createElement("article");l.className="article",l.style.opacity="0",l.style.transform="translateY(20px)",l.style.transition="all 0.6s ease-out";const c=document.createElement("h2");c.className="article__title",c.textContent=a.title,l.appendChild(c),a.sections.forEach(g=>{const p=document.createElement("div"),u=document.createElement("h3");u.className="article__subtitle",u.textContent=g.subtitle,p.appendChild(u);const v=document.createElement("div");v.className="article__content";const b=document.createElement("p");b.textContent=g.content,v.appendChild(b),p.appendChild(v),l.appendChild(p)}),t.appendChild(l),n.push(l)}),setTimeout(()=>{if("IntersectionObserver"in window){const a=new IntersectionObserver(l=>{l.forEach(c=>{c.isIntersecting&&(c.target.style.opacity=1,c.target.style.transform="translateY(0)",a.unobserve(c.target))})},{threshold:.1});n.forEach(l=>{a.observe(l)})}else n.forEach(a=>{a.style.opacity=1,a.style.transform="translateY(0)"}),console.warn("IntersectionObserver не поддерживается. Анимация появления отключена.")},100)}function ae(){const e="/R36S_STORE_JS/",t={review1:{webp:`${e}img/reviews/imm_1_1x.webp`,jpg:`${e}img/reviews/imm_1_1x.jpg`},review2:{webp:`${e}img/reviews/imm_2_1x.webp`,jpg:`${e}img/reviews/imm_2_1x.jpg`},review3:{webp:`${e}img/reviews/imm_3_1x.webp`,jpg:`${e}img/reviews/imm_3_1x.jpg`},review4:{webp:`${e}img/reviews/imm_4_1x.webp`,jpg:`${e}img/reviews/imm_4_1x.jpg`}},n=[{id:1,rating:5,color:"Purple 64GB",author:"AliExpress Shopper",date:"21 Aug 2024",text:"I just got my hands on the R36S retro console and it's seriously amazing for old-school gaming. The screen is super clear, it runs games smoothly, and battery life is solid. I love how I can load up my favorite classics and play anywhere.",images:{webp:t.review1.webp,jpeg:t.review1.jpg},helpful:12,verified:!0},{id:2,rating:5,color:"Yellow 128G",author:"V***h",date:"26 Aug 2024",text:"After playing with the R36S for a week, I'm really impressed and absolutely delighted. The build quality feels great, and switching between different retro games is super easy. The controls are comfortable for long gaming sessions.",images:{webp:t.review4.webp,jpeg:t.review4.jpg},helpful:8,verified:!0},{id:3,rating:5,color:"White 64GB",author:"M***z",date:"22 Aug 2024",text:"The R36S has become my go-to gaming device. I wasn't sure about buying another retro console, but this one surprised me. The screen is bright and sharp, games run without issues, and it's small enough to fit in my pocket.",images:{webp:t.review3.webp,jpeg:t.review3.jpg},helpful:15,verified:!0},{id:4,rating:5,color:"Black 128GB",author:"K***r",date:"28 Aug 2024",text:"I've been using the R36S for a few weeks now, and I'm genuinely impressed. The 3.5-inch IPS screen delivers crisp visuals, and the build quality feels solid. The dual analog sticks are responsive, making retro gaming a joy.",images:{webp:t.review2.webp,jpeg:t.review2.jpg},helpful:10,verified:!0,mobileOnly:!0}],i=new Set;let a=null,l=window.innerWidth<=1200;function c(r=!1){const m=document.createElementNS("http://www.w3.org/2000/svg","svg");m.classList.add("review-card__star"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill",r?"currentColor":"none"),m.setAttribute("stroke","currentColor"),m.setAttribute("stroke-width","2");const f=document.createElementNS("http://www.w3.org/2000/svg","polygon");return f.setAttribute("points","12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"),m.appendChild(f),m}function g(){const r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.classList.add("review-card__verified"),r.setAttribute("width","16"),r.setAttribute("height","16"),r.setAttribute("viewBox","0 0 24 24"),r.setAttribute("fill","none"),r.setAttribute("stroke","currentColor"),r.setAttribute("stroke-width","2");const m=document.createElementNS("http://www.w3.org/2000/svg","path");return m.setAttribute("d","M20 6L9 17l-5-5"),r.appendChild(m),r}function p(r){const m=document.getElementById("reviewCardTemplate");if(!m)return console.error("Шаблон карточки отзыва не найден"),null;const f=m.content.cloneNode(!0).querySelector(".review-card");f.dataset.id=r.id,r.mobileOnly&&(f.classList.add("mobile-only"),l||(f.style.display="none"));const k=f.querySelector(".review-card__rating");for(let C=0;C<5;C++)k.appendChild(c(C<r.rating));f.querySelector(".review-card__variant").textContent=r.color,f.querySelector(".review-card__text").textContent=r.text;const I=f.querySelector("picture");I.querySelector("source").setAttribute("srcset",r.images.webp);const d=I.querySelector("img");d.setAttribute("src",r.images.jpeg),d.setAttribute("alt",`Review ${r.id}`);const w=f.querySelector(".review-card__name");r.verified&&w.prepend(g()),w.appendChild(document.createTextNode(r.author)),f.querySelector(".review-card__date").textContent=r.date,f.querySelector(".review-card__helpful-count").textContent=`Helpful (${r.helpful})`,f.addEventListener("click",u),f.addEventListener("mouseenter",()=>v(r.id)),f.addEventListener("mouseleave",b);const S=f.querySelector(".review-card__helpful");return S.addEventListener("mouseenter",()=>{S.querySelector("svg").setAttribute("fill","currentColor"),S.querySelector("svg").classList.add("scale-125"),S.querySelector("svg").classList.remove("scale-100")}),S.addEventListener("mouseleave",()=>{S.querySelector("svg").setAttribute("fill","none"),S.querySelector("svg").classList.remove("scale-125"),S.querySelector("svg").classList.add("scale-100")}),f}function u(){window.open("https://www.aliexpress.com/item/1005007226123844.html#feedback","_blank","noopener,noreferrer")}function v(r){a=r;const m=document.querySelector(`.review-card[data-id="${r}"]`);if(m){const f=m.querySelector(".review-card__arrow-wrapper");f&&(f.style.display="flex")}}function b(){const r=document.querySelector(`.review-card[data-id="${a}"]`);if(r){const m=r.querySelector(".review-card__arrow-wrapper");m&&(m.style.display="none")}a=null}function y(){const r=document.getElementById("reviewsGrid");if(!r){console.error("Контейнер для отзывов не найден");return}const m=document.getElementById("reviewCardTemplate"),f={};r.querySelectorAll(".review-card").forEach(d=>{d.dataset.id&&(f[d.dataset.id]=d)});const k=n.filter(d=>!d.mobileOnly||d.mobileOnly&&l),I=[];k.forEach(d=>{if(f[d.id]){const w=f[d.id];w.style.display="block",I.push(w),delete f[d.id]}else{const w=p(d);w&&I.push(w)}}),Object.values(f).forEach(d=>{d!==m&&(d.style.display="none")}),r.innerHTML="",r.appendChild(m),I.forEach(d=>{r.appendChild(d)}),_()}function _(){if(!("IntersectionObserver"in window)){console.warn("IntersectionObserver не поддерживается в этом браузере"),document.querySelectorAll(".review-card").forEach(m=>{m.classList.add("animate-in")});return}const r=new IntersectionObserver(m=>{m.forEach(f=>{if(f.isIntersecting){const k=f.target.dataset.id;i.has(k)||(f.target.classList.add("animate-in"),i.add(k))}})},{threshold:.1});document.querySelectorAll(".review-card").forEach(m=>{r.observe(m)})}function s(){l=window.innerWidth<=1200,y(),document.querySelectorAll(".review-card").forEach(m=>{m.classList.contains("mobile-only")&&(m.style.display=l?"block":"none")})}function h(){y();let r;const m=()=>{clearTimeout(r),r=setTimeout(s,250)};window.addEventListener("resize",m);const f=document.createElement("style");f.textContent=`
      .review-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      .review-card.animate-in {
        opacity: 1;
        transform: translateY(0);
      }
    `,document.head.appendChild(f),setTimeout(s,100)}h();function x(){if(window.removeEventListener("resize",s),window.removeEventListener("resize",()=>{}),"IntersectionObserver"in window){const r=[];new IntersectionObserver(()=>{}).disconnect(),r.forEach(f=>f.disconnect())}document.querySelectorAll(".review-card").forEach(r=>{r.removeEventListener("click",u),r.removeEventListener("mouseenter",()=>{}),r.removeEventListener("mouseleave",b),Object.keys(n).forEach(f=>{r.removeEventListener("mouseenter",()=>v(f))});const m=r.querySelector(".review-card__helpful");m&&(m.removeEventListener("mouseenter",()=>{}),m.removeEventListener("mouseleave",()=>{}))}),console.log("Reviews section cleanup completed")}return{cleanup:x,renderReviewCards:y}}const j={"phone-call":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>',mail:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>',"map-pin":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>',"message-circle":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>',send:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>',"alert-circle":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>',loader:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader animate-spin"><line x1="12" x2="12" y1="2" y2="6"></line><line x1="12" x2="12" y1="18" y2="22"></line><line x1="4.93" x2="7.76" y1="4.93" y2="7.76"></line><line x1="16.24" x2="19.07" y1="16.24" y2="19.07"></line><line x1="2" x2="6" y1="12" y2="12"></line><line x1="18" x2="22" y1="12" y2="12"></line><line x1="4.93" x2="7.76" y1="19.07" y2="16.24"></line><line x1="16.24" x2="19.07" y1="7.76" y2="4.93"></line></svg>'};function A(e,o=24){return j[e]?j[e].replace(/width="24"/,`width="${o}"`).replace(/height="24"/,`height="${o}"`):(console.error(`Icon "${e}" not found`),"")}function le(){console.log("Инициализация секции Contact");const e=document.querySelector(".contact__form"),o=document.getElementById("name"),t=document.getElementById("email"),n=document.getElementById("phone"),i=document.getElementById("message"),a=document.querySelector(".form__button"),l=document.createElement("div");l.className="form__error",l.style.display="none",l.innerHTML=`
    <div class="form__error-icon">${A("alert-circle",16)}</div>
    <span></span>
  `,e.insertBefore(l,e.firstChild);const c={name:"",email:"",phone:"",message:""};function g(y){l.querySelector("span").textContent=y,l.style.display="flex"}function p(){l.style.display="none"}function u(y){const{name:_,value:s}=y.target;c[_]=s,p()}o.addEventListener("input",u),t.addEventListener("input",u),n.addEventListener("input",u),i.addEventListener("input",u);function v(y){return R(this,null,function*(){y.preventDefault(),b(!0);try{if(!c.name||!c.email||!c.phone||!c.message)throw new Error("Please fill in all fields");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email))throw new Error("Please enter a valid email");if(!/^\+?[0-9]{10,14}$/.test(c.phone.replace(/\D/g,"")))throw new Error("Please enter a valid phone number.");yield new Promise(x=>setTimeout(x,1e3)),o.value="",t.value="",n.value="",i.value="",Object.keys(c).forEach(x=>{c[x]=""}),alert("Message sent successfully! We will contact you shortly.")}catch(s){g(s.message||"There was an error sending your message. Please try again later."),console.error("Form submission error:",s)}finally{b(!1)}})}function b(y){[o,t,n,i].forEach(s=>{s.disabled=y}),a.disabled=y,a.innerHTML=y?`<span class="button__icon">${A("loader",20)}</span> Sending...`:`<span class="button__icon">${A("send",20)}</span> Send message`}return e.addEventListener("submit",v),function(){o.removeEventListener("input",u),t.removeEventListener("input",u),n.removeEventListener("input",u),i.removeEventListener("input",u),e.removeEventListener("submit",v)}}const ce={BASE_URL:"/R36S_STORE_JS/",DEV:!1,MODE:"production",PROD:!0,SSR:!1};function de(){console.log("Products секция инициализирована");const o=!ce?"/":"/R36S_STORE_JS/",t={i0_0:{jpg:`${o}img/products/i_0_0x.jpg`,webp:`${o}img/products/i_0_0x.webp`},i1:{jpg:`${o}img/products/i_1_1x.jpg`,webp:`${o}img/products/i_1_1x.webp`},i2:{jpg:`${o}img/products/i_2_1x.jpg`,webp:`${o}img/products/i_2_1x.webp`},i3:{jpg:`${o}img/products/i_3_1x.jpg`,webp:`${o}img/products/i_3_1x.webp`},i4:{jpg:`${o}img/products/i_4_1x.jpg`,webp:`${o}img/products/i_4_1x.webp`},i5:{jpg:`${o}img/products/i_5_1x.jpg`,webp:`${o}img/products/i_5_1x.webp`},i6:{jpg:`${o}img/products/i_6_1x.jpg`,webp:`${o}img/products/i_6_1x.webp`},i7:{jpg:`${o}img/products/i_7_1x.jpg`,webp:`${o}img/products/i_7_1x.webp`},i8:{jpg:`${o}img/products/i_8_1x.jpg`,webp:`${o}img/products/i_8_1x.webp`},i9:{jpg:`${o}img/products/i_9_1x.jpg`,webp:`${o}img/products/i_9_1x.webp`},i10:{jpg:`${o}img/products/i_10_1x.jpg`,webp:`${o}img/products/i_10_1x.webp`}},n=[{id:"getting-started",title:"Getting Started",content:{text:`Please be aware that this tutorial does not apply to K36 devices or clones marketed as R36S. For additional information about your hardware, please refer to the comprehensive R36S Wiki Page.

Essential Items:
- R36S handheld device
- Computer with USB port
- MicroSD cards (suggestions: 16GB for custom firmware, 128GB for game files)
- MicroSD card reader
- Recommended software: Balena Etcher, Rufus, 7-Zip, MiniTool Partition Wizard
- Optional: Linux system or Ubuntu Live USB

All information provided is for educational purposes, and users accept full responsibility for any potential damage to their hardware.

To identify which version of the R36S you have, use the quick identification tool on the R36 Wiki – "Screen Identification Guide". This step is crucial as it determines which custom firmware image is compatible with your device.`,images:{jpg:t.i0_0.jpg,webp:t.i0_0.webp}}},{id:"original-backup",title:"Creating Original Firmware Backup",content:{text:"This step can be critical in your modification journey. Having a complete backup of the stock firmware ensures you can restore your device if anything goes wrong during the flashing process, or if you want to revert to the original state later.",subsections:[{id:"backup-procedure",title:"Backup Using Win32DiskImager",content:{text:`1. Launch Win32DiskImager: Click the folder icon in the "Image File" section and select a location to save your backup, making sure to add the .img extension to your filename.
              
2. Select the device: Choose the drive letter corresponding to your R36S. *Exercise extreme caution during this selection to avoid accidentally erasing unintended drives.
              
3. Enable Read Only mode: Make sure the "Read Only Allocated Partitions" option is selected to avoid copying empty sectors along with the data.
              
4. Start the backup: Click the "Read" button to begin creating the backup image file at your chosen location.`,images:{jpg:t.i1.jpg,webp:t.i1.webp}}}]}},{id:"custom-installation",title:"Installing Custom Firmware",content:{text:`As mentioned previously, one of your first priorities should be obtaining a quality brand-name SD card. The cards included with the R36S are typically unreliable. It's not a question of if they will fail, but when.

Single vs. Dual Card Configuration – The R36S features two microSD card slots. You can choose to have everything on a single card or separate the operating system from your game collection.`,subsections:[{id:"method-balena",title:"Option 1: Balena Etcher Method",content:{text:`While the general process is similar for all custom firmware options, there are some differences to note during installation.

1. Start Balena Etcher and select "Flash From File", then browse to your downloaded .img firmware file.
              
2. Select "Select Target" and choose your blank SD card from the device list.
              
3. Allow Balena Etcher to write and verify the image, and you're finished!
              
*Note – If verification fails with ArkOS using Balena Etcher, the installation may still work correctly, but you can try alternative image writing software if preferred.`,images:{jpg:t.i2.jpg,webp:t.i2.webp}}},{id:"method-win32",title:"Option 2: Win32DiskImager Method",content:{text:`1. Open Win32DiskImager and click the folder icon in the "Image File" section to select your downloaded custom firmware.
              
2. Select destination: Choose the correct SD card as your target device. Double-check to ensure you're writing to the correct location.
              
3. Write image: Click the Write button to begin the flashing process.`,images:{jpg:t.i3.jpg,webp:t.i3.webp}}},{id:"method-raspberry",title:"Option 3: Raspberry Pi Imager",content:{text:`1. Open Raspberry Pi Imager and click "Choose OS", then select "Use Custom" to locate your firmware file.
              
2. Select storage: Choose your SD card carefully, NOT your computer's internal drive!
              
3. Begin writing: Click the Write button to start flashing the image.`,images:{jpg:t.i4.jpg,webp:t.i4.webp}}}]}},{id:"firmware-options",title:"R36S Firmware Options",content:{text:"Several custom firmware options are available for the R36S. Here are the most popular choices:",subsections:[{id:"option-arkos",title:"ArkOS - Community Enhanced Edition",content:{text:`GitHub Repository: ArkOS Community Edition

This is a community-maintained fork of ArkOS developed by AeolusUX specifically for the 36S family of devices.
              
Installation guide:
1. Download the latest ArkOS release from the project's GitHub page
2. Extract the image file using 7-Zip, WinRAR, or similar extraction tool
3. Flash the image to an SD card using your preferred imaging software
4. If necessary, replace the DTB file on the boot partition based on your screen type
5. Insert the SD card into your R36S
6. Power on and follow on-screen setup instructions`,images:{jpg:t.i5.jpg,webp:t.i5.webp}}},{id:"option-rocknix",title:"ROCKNIX Operating System",content:{text:`GitHub Repository: ROCKNIX

Installation guide:
1. Download the latest ROCKNIX release from the GitHub repository
2. Extract the image file using your preferred extraction tool
3. Write the image to an SD card using any supported imaging software
4. Insert the SD card into your R36S device and power it on
5. Complete the initial configuration by following the on-screen prompts`,images:{jpg:t.i6.jpg,webp:t.i6.webp}}},{id:"option-amber",title:"AmberELEC System",content:{text:`GitHub Repository: AmberELEC

Installation guide:
1. Download the AmberELEC image specifically for R36S from their GitHub repository
2. Flash the image to an SD card using Balena Etcher or an equivalent tool
3. Insert the SD card into your R36S handheld and power it on
4. Follow the on-screen instructions to finalize the setup process`,images:{jpg:t.i7.jpg,webp:t.i7.webp}}}]}},{id:"game-setup",title:"Adding Games and BIOS Files",content:{text:`1. For dual-card setups, format your second card to FAT32 or exFAT (depending on your card capacity)

2. Connect your R36S to your computer via USB cable, or remove the game storage SD card and connect it directly to your PC.

3. Copy your game files to the appropriate directories on the SD card. NOTE: North American users may be confused by some folder names initially. All systems use their original regional names, so NES is labeled as FC (Famicom), Genesis as MD (Mega Drive), and so on.

4. Reinsert the SD card and refresh your game lists through the system menu.`,images:{jpg:t.i8.jpg,webp:t.i8.webp}}},{id:"helpful-tips",title:"Usage Tips",content:{text:`• NEVER force shutdown by holding the power button. Your device now functions like a computer that requires proper shutdown. Press START and navigate to QUIT —-> Shutdown

• You can switch between Nintendo (default) or Xbox button layouts. Press START and go to Advanced Settings —-> Switch A/B

• Change system themes locally by pressing START and navigating to UI Settings —-> Themes

• A quick press of the power button will put the device into standby mode.`,images:{jpg:t.i9.jpg,webp:t.i9.webp}}},{id:"downloads",title:"Available Downloads",content:{downloads:[{file:"Firmware v1.0.4 2024.04.13",link:"https://drive.google.com/file/d/10z7j7IZ7WX3y10ZJBW_a2-agcIe1Dx9m/edit",date:"2024.04.13",version:"v1.0.4"},{file:"ArkOS_K36_v2.0_03112025.img.xz",link:"https://drive.google.com/file/d/1F93Q1jXYaTCftOlzAt0BaM43rmVexXsn/view",date:"2023.12.22",version:"v1.0.3"},{file:"ArkOS_R35S-R36S_v2.0_02092025_P3.img.xz",link:"https://drive.google.com/file/d/18VL7uLNdyFKDH4_V8YM5zhHSjLiJdkUc/view",date:"2023.11.16",version:"v1.0.2"},{file:"ArkOS_R35S-R36S_v2.0_02092025_P4.img.xz",link:"https://drive.google.com/file/d/1MT1AGGch6Ou4RAfxDvVCxUI4aXX6Qa5v/view",date:"2023.11.05",version:"v1.0.0"}]}}];let i="downloads",a=!1;const l=document.getElementById("products-nav-list"),c=document.getElementById("products-sections"),g=document.getElementById("products-nav");function p(){a=window.innerWidth<=1024,g&&(a?g.classList.add("nav-mobile"):g.classList.remove("nav-mobile"))}function u(s){i=s,document.querySelectorAll(".nav-item").forEach(r=>{r.dataset.sectionId===s?r.classList.add("nav-item-active"):r.classList.remove("nav-item-active")}),document.querySelectorAll(".section").forEach(r=>{r.id===s?r.classList.add("section-active"):r.classList.remove("section-active")}),setTimeout(()=>{const r=document.getElementById(s);if(r){const m=a?80:20,k=r.getBoundingClientRect().top+window.pageYOffset-m;window.scrollTo({top:k,behavior:"smooth"})}},100)}function v(){l.innerHTML="",n.forEach(s=>{const h=document.createElement("button");h.className=`nav-item ${i===s.id?"nav-item-active":""}`,h.dataset.sectionId=s.id,h.innerHTML=`
        <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <span>${s.title}</span>
      `,h.addEventListener("click",()=>u(s.id)),l.appendChild(h)})}function b(s){if(s.id==="downloads"){let r='<div class="download-list">';return s.content.downloads.forEach(m=>{r+=`
          <div class="download-card">
            <div class="download-info">
              <svg class="download-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M9 13h6"></path>
                <path d="M9 17h3"></path>
              </svg>
              <div>
                <div class="download-filename">${m.file}</div>
                <div class="download-meta">Update: ${m.date} • ${m.version}</div>
              </div>
            </div>
            <a href="${m.link}" class="download-button" target="_blank">
              <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        `}),r+="</div>",r}let h='<div class="section-content"><div class="text-content">';return s.content.text.split(`
`).forEach(r=>{h+=`<p>${r.trim()}</p>`}),h+="</div>",s.content.images&&(h+=`
        <div class="image-container">
          <picture>
            <source srcset="${s.content.images.webp}" type="image/webp">
            <img src="${s.content.images.jpg}" alt="${s.title}" class="section-image" loading="lazy">
          </picture>
        </div>
      `),s.content.subsections&&(h+='<div class="subsections">',s.content.subsections.forEach(r=>{h+=`
          <div class="subsection">
            <h3 class="subsection-title">${r.title}</h3>
            <div class="subsection-content">
              <div class="text-content">
        `,r.content.text.split(`
`).forEach(f=>{h+=`<p>${f.trim()}</p>`}),h+="</div>",r.content.images&&(h+=`
            <div class="image-container">
              <picture>
                <source srcset="${r.content.images.webp}" type="image/webp">
                <img src="${r.content.images.jpg}" alt="${r.title}" class="subsection-image" loading="lazy">
              </picture>
            </div>
          `),h+="</div></div>"}),h+="</div>"),h+="</div>",h}function y(){c.innerHTML="",n.forEach(s=>{const h=document.createElement("section");h.id=s.id,h.className=`section ${i===s.id?"section-active":""}`,h.innerHTML=`
        <h2 class="section-title">${s.title}</h2>
        ${b(s)}
      `,c.appendChild(h)})}function _(){p(),v(),y(),window.addEventListener("resize",p),console.log("Products: Инициализация завершена. Используются пути к изображениям без /public/")}return l&&c&&g?_():console.error("Не найдены необходимые DOM элементы для секции Products"),{handleSectionClick:u,checkMobile:p}}function $(){console.log("Инициализация Footer");const e=document.querySelector(".footer");if(!e){console.error("Элемент footer не найден");return}const o=e.querySelector(".partnership-button");o&&o.addEventListener("click",()=>{const t=document.querySelector(".partnership-modal-overlay");if(t){t.classList.add("active");const n=t.querySelector(".partnership-modal-content");n&&n.classList.add("active"),document.body.style.overflow="hidden"}}),ue()}function ue(){const e=document.querySelector(".partnership-modal-overlay");if(!e){console.warn("Модальное окно не найдено");return}const o=e.querySelector(".partnership-modal-close");o&&o.addEventListener("click",t),e.addEventListener("click",n=>{n.target===e&&t()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&e.classList.contains("active")&&t()});function t(){const n=e.querySelector(".partnership-modal-content");e.classList.remove("active"),n&&n.classList.remove("active"),document.body.style.overflow=""}}function P(){const e=document.querySelector(".mobile-menu");if(!e){console.error("Мобильное меню не найдено в DOM");return}const o=e.querySelector(".close-button");if(!o){console.error("Кнопка закрытия не найдена в мобильном меню");return}o.addEventListener("click",()=>{t()});function t(){e.classList.remove("open");const l=document.querySelector(".burger-line");l&&l.classList.remove("open"),document.body.style.overflow="unset";const c=document.querySelector(".header");c&&c.classList.remove("menu-open");const g=document.querySelector(".burger-btn");g&&g.setAttribute("aria-expanded","false")}e.querySelectorAll(".mobile-menu__link").forEach(l=>{l.addEventListener("click",()=>{setTimeout(()=>{t()},150)})});const i=e.querySelector(".mobile-menu__background");i&&i.addEventListener("click",()=>{t()});function a(){e.querySelectorAll(".mobile-menu__icon").forEach((c,g)=>{c.style.opacity="0",c.style.transform="translateX(-20px)",new MutationObserver(u=>{u.forEach(v=>{v.attributeName==="class"&&(e.classList.contains("open")?setTimeout(()=>{c.style.transition="all 0.4s ease",c.style.opacity="1",c.style.transform="translateX(0)"},100+g*70):(c.style.opacity="0",c.style.transform="translateX(-20px)"))})}).observe(e,{attributes:!0})})}a(),console.log("Мобильное меню с иконками инициализировано")}let O=()=>console.log("Modal компонент недоступен");(function(){return R(this,null,function*(){try{O=(yield F(()=>import("./ModalPortal.Cv5sWs3j.js"),[])).initModal}catch(o){console.log("Modal.js не загружен:",o)}})})();function q(e){return R(this,null,function*(){try{return(yield fetch(e,{method:"HEAD"})).ok}catch(o){return console.warn(`Ресурс ${e} недоступен:`,o),!1}})}function L(e){return R(this,null,function*(){const t=`/R36S_STORE_JS/sections/${e}/${e}.html`;try{if(!(yield q(t)))return console.warn(`Секция ${e} недоступна, используем заглушку`),`<section id="${e.toLowerCase()}" class="section">
                <div class="container">
                  <h2>Секция ${e}</h2>
                  <p>Контент будет доступен позже</p>
                </div>
              </section>`;const i=yield fetch(t);if(!i.ok)throw new Error(`HTTP ошибка ${i.status}`);return yield i.text()}catch(n){return console.error(`Ошибка загрузки секции ${e}:`,n),`<div class="error-section">Ошибка загрузки секции ${e}</div>`}})}function me(e){return R(this,null,function*(){const t=`/R36S_STORE_JS/components/${e}/${e}.html`;try{if(!(yield q(t)))return console.warn(`Компонент ${e} недоступен, используем заглушку`),`<div id="${e.toLowerCase()}" class="component">
                <div class="container">
                  <p>Компонент ${e} недоступен</p>
                </div>
              </div>`;const i=yield fetch(t);if(!i.ok)throw new Error(`HTTP ошибка ${i.status}`);return yield i.text()}catch(n){return console.error(`Ошибка загрузки компонента ${e}:`,n),`<div class="error-component">Ошибка загрузки компонента ${e}</div>`}})}function E(e,o){try{o(),console.log(`${e} инициализирован`)}catch(t){console.error(`Ошибка инициализации ${e}:`,t)}}function pe(){return R(this,null,function*(){console.log("Инициализация приложения");const e=document.getElementById("root");if(!e)throw console.error("Элемент #root не найден"),new Error("Элемент #root не найден");e.innerHTML=`
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
  `;const o="/R36S_STORE_JS/";console.log("Режим:","production"),console.log("Базовый путь:",o);try{const[t,n]=yield Promise.all([L("Header").catch(()=>'<header class="header">Заголовок сайта</header>'),me("MobileMenu").catch(()=>'<div class="mobile-menu"></div>')]),i=window.location.pathname.replace(o,"/");if(i==="/"||i==="/index.html"){const a={hero:L("Hero"),about:L("About"),features:L("Features"),categories:L("Categories"),articles:L("Articles"),reviews:L("Reviews"),contact:L("Contact"),products:L("Products"),footer:L("Footer")},l=yield Promise.allSettled(Object.values(a)),c={};Object.keys(a).forEach((g,p)=>{c[g]=l[p].status==="fulfilled"?l[p].value:`<section id="${g}" class="error-section">Ошибка загрузки ${g}</section>`}),e.innerHTML=`
        ${t}
        ${n}
        <main id="main-content">
          ${c.hero}
          ${c.about}
          ${c.features}
          ${c.categories}
          ${c.articles}
          ${c.reviews}
          ${c.contact}
          ${c.products}
        </main>
        ${c.footer}
      `,E("Header",M),E("MobileMenu",P),E("Hero",N),E("About",ee),E("Features",D),E("Categories",re),E("Articles",se),E("Reviews",ae),E("Contact",le),E("Products",de),E("Footer",$),E("Modal",O)}else{const a=yield L("Footer").catch(()=>'<footer class="footer"><p>© 2025</p></footer>');e.innerHTML=`
        ${t}
        ${n}
        <div class="not-found">
          <div class="container">
            <h1>404</h1>
            <p>Страница не найдена</p>
            <a href="${o}" class="back-home">Вернуться на главную</a>
          </div>
        </div>
        ${a}
      `,E("Header",M),E("MobileMenu",P),E("Footer",$)}console.log("Приложение инициализировано")}catch(t){throw console.error("Ошибка при инициализации приложения:",t),e.innerHTML=`
      <div class="error">
        <h1>Ошибка</h1>
        <p>Произошла ошибка при загрузке страницы:</p>
        <pre>${t.message}</pre>
        <button onclick="location.reload()">Перезагрузить страницу</button>
      </div>
    `,t}})}function B(){if(window.location.hash){const e=window.location.hash.substring(1),o=document.getElementById(e);o&&setTimeout(()=>{const t=document.querySelector(".header"),n=t?t.offsetHeight:0,i=o.getBoundingClientRect().top+window.scrollY-n;window.scrollTo({top:i,behavior:"smooth"})},300)}}function ge(){document.body.addEventListener("click",e=>{const o=e.target.closest("a");if(o&&o.href&&o.href.startsWith(window.location.origin)&&!o.dataset.external){const t=new URL(o.href);t.pathname===window.location.pathname&&t.hash&&(e.preventDefault(),window.history.pushState(null,"",t.hash),B())}})}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("root");e&&(e.innerHTML=`
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
    `);const o=pe(),t=new Promise((n,i)=>{setTimeout(()=>i(new Error("Превышено время ожидания инициализации (15 сек)")),15e3)});Promise.race([o,t]).then(()=>{B(),ge()}).catch(n=>{console.error("Ошибка инициализации:",n),e&&(e.innerHTML=`
          <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
            <h1>Не удалось загрузить приложение</h1>
            <p>${n.message}</p>
            <button onclick="location.reload()" style="padding: 10px 20px; margin-top: 15px; cursor: pointer;">
              Попробовать снова
            </button>
          </div>
        `)})});window.addEventListener("popstate",B);console.log("Main.js инициализирован");function he(){const e="IntersectionObserver"in window,o=function(){const n=document.createElement("div");return n.style.display="flex",n.style.display==="flex"}(),t=function(){const n=document.createElement("div");return n.style.display="grid",n.style.display==="grid"}();return console.log("Поддержка браузера:"),console.log("- IntersectionObserver:",e),console.log("- Flexbox:",o),console.log("- CSS Grid:",t),e||document.body.classList.add("no-intersection-observer"),o||document.body.classList.add("no-flexbox"),t||document.body.classList.add("no-grid"),{hasIntersectionObserver:e,hasFlexbox:o,hasGrid:t}}document.addEventListener("DOMContentLoaded",()=>{console.log("DOM загружен"),document.getElementById("root"),he();const e=performance.now();console.log(`Страница загружена за ${e.toFixed(2)}ms`),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").then(o=>{console.log("ServiceWorker зарегистрирован:",o)}).catch(o=>{console.error("Ошибка регистрации ServiceWorker:",o)})}),"performance"in window&&"getEntriesByType"in performance&&window.addEventListener("load",()=>{const o=performance.getEntriesByType("navigation")[0],t=performance.getEntriesByType("resource");console.log(`Общее время загрузки: ${o.loadEventEnd.toFixed(2)}ms`);const n=t.reduce((i,a)=>i+a.transferSize,0);console.log(`Загружено ${t.length} ресурсов (${(n/1024).toFixed(2)} KB)`)})});window.onerror=function(e,o,t,n,i){return console.error("Глобальная ошибка:",{message:e,source:o,lineno:t,colno:n,error:i}),!1};window.appVersion={version:"1.0.0",buildDate:new Date().toISOString(),environment:"production"};console.log("Main.js выполнение завершено");
