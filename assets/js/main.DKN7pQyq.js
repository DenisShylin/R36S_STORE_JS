var x=(e,t,o)=>new Promise((i,n)=>{var r=u=>{try{s(o.next(u))}catch(l){n(l)}},a=u=>{try{s(o.throw(u))}catch(l){n(l)}},s=u=>u.done?i(u.value):Promise.resolve(u.value).then(r,a);s((o=o.apply(e,t)).next())});(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const T="modulepreload",H=function(e){return"/R36S_STORE_JS/"+e},k={},D=function(t,o,i){let n=Promise.resolve();if(o&&o.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));n=Promise.allSettled(o.map(u=>{if(u=H(u),u in k)return;k[u]=!0;const l=u.endsWith(".css"),d=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${u}"]${d}`))return;const m=document.createElement("link");if(m.rel=l?"stylesheet":T,l||(m.as="script"),m.crossOrigin="",m.href=u,s&&m.setAttribute("nonce",s),document.head.appendChild(m),l)return new Promise((h,f)=>{m.addEventListener("load",h),m.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${u}`)))})}))}function r(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return n.then(a=>{for(const s of a||[])s.status==="rejected"&&r(s.reason);return t().catch(r)})};function L(){let e=!1,t=window.scrollY,o=null;const i=document.querySelector(".header"),n=document.querySelector(".burger-btn"),r=document.querySelector(".burger-line"),a=document.querySelector(".mobile-menu"),s=document.querySelectorAll(".our-menu-link, .mobile-menu__link");function u(){const c=window.scrollY,p=t<c;o&&clearTimeout(o),c>100?h(!p):h(!0),t=c,m(c>0),o=setTimeout(()=>{},150)}function l(){e=!e,d()}function d(){e?(i.classList.add("menu-open"),n.setAttribute("aria-expanded","true"),r.classList.add("open"),a.classList.add("open"),document.body.style.overflow="hidden"):(i.classList.remove("menu-open"),n.setAttribute("aria-expanded","false"),r.classList.remove("open"),a.classList.remove("open"),document.body.style.overflow="unset")}function m(c){c?i.classList.add("scrolled"):i.classList.remove("scrolled")}function h(c){c?(i.classList.add("visible"),i.classList.remove("hidden")):(i.classList.add("hidden"),i.classList.remove("visible"))}function f(c){c.preventDefault();const p=c.currentTarget.getAttribute("href"),y=p.replace("#",""),w=document.getElementById(y);w&&(h(!0),setTimeout(()=>{const v=i.offsetHeight,S=w.getBoundingClientRect().top+window.scrollY-v;window.scrollTo({top:S,behavior:"smooth"}),e&&(e=!1,d()),window.history.replaceState(null,"",`${window.location.pathname}${p}`),setTimeout(()=>{t=window.scrollY},100)},50))}function I(){if(window.location.hash){const c=window.location.hash.replace("#",""),p=document.getElementById(c);p&&setTimeout(()=>{const y=i.offsetHeight,v=p.getBoundingClientRect().top+window.scrollY-y;window.scrollTo({top:v,behavior:"smooth"})},100)}}window.addEventListener("scroll",u),window.addEventListener("resize",()=>{!(window.innerWidth<=768)&&e&&(e=!1,d())}),n&&n.addEventListener("click",l),s.forEach(c=>{c.addEventListener("click",f)}),I()}function j(){console.log("Hero section initialized");const e=document.querySelector(".hero"),t=document.querySelector(".hero__console-img"),o=document.querySelector(".hero__image source"),i=document.querySelector(".hero__content"),n=document.querySelector(".hero__description--desktop"),r=document.querySelector(".hero__description--mobile"),a=document.querySelector(".hero__pricing"),s=document.getElementById("buy-button"),u=document.getElementById("more-details-button"),l="/img/hero/herou1_1x_.png",d="/img/hero/herou1_2x_.png";console.log("Using image paths:",{heroImage1x:l,heroImage2x:d});function m(){if(!t){console.error("Hero image element not found");return}console.log("Setting hero image paths"),t.onerror=()=>{console.error("Failed to load hero image:",t.src),e.classList.add("hero--loaded")},t.onload=()=>{console.log("Hero image loaded successfully"),e.classList.add("hero--loaded")},t.src=d,t.srcset=`${l} 1x, ${d} 2x`,t.complete&&(console.log("Hero image already loaded (from cache)"),e.classList.add("hero--loaded"))}function h(){o?o.srcset=l:console.warn("Hero image source element not found")}function f(){const y=window.innerWidth>992;n&&r&&a&&(y?(n.style.display="block",r.style.display="none"):(n.style.display="none",r.style.display="block"))}function I(){if(!i)return;new IntersectionObserver(w=>{w.forEach(v=>{v.isIntersecting&&v.target.classList.add("animate-in")})},{threshold:.1}).observe(i)}function c(){s&&s.addEventListener("click",()=>{window.open("https://www.aliexpress.com/item/1005007171465465.html","_blank","noopener,noreferrer")}),u&&u.addEventListener("click",p)}function p(y){y.preventDefault();const w=document.getElementById("features"),v=document.querySelector(".header");if(w&&v){const _=v.offsetHeight,S=w.getBoundingClientRect().top,P=window.scrollY||window.pageYOffset,$=S+P-_;window.scrollTo({top:$,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features`)}}m(),h(),f(),I(),c(),window.addEventListener("resize",f)}function Z(e){let t=null,o=null,i=!1,n=0,r=null;(()=>{const c="modal-about-styles";if(document.getElementById(c))return;const p=document.createElement("style");p.id=c,p.textContent=`
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
        padding: 17px;
      }

      .modal-about-content {
        background: linear-gradient(135deg,
                rgba(255, 255, 255, 0.05) 0%,
                rgba(255, 255, 255, 0.02) 100%);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 20px;
        width: 100%;
        max-width: 680px;
        max-height: 76.5vh;
        overflow-y: auto;
        position: relative;
        backdrop-filter: blur(12px);
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
      }

      .modal-about-image {
        width: 100%;
        aspect-ratio: 1;
        object-fit: cover;
        border-radius: 14px;
        margin-bottom: 20px;
        box-shadow: 0 7px 27px rgba(0, 0, 0, 0.2);
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

      .modal-about-price-wrapper {
        display: flex;
        flex-direction: column;
        gap: 3px;
      }

      .modal-about-original-price {
        font-size: 17px;
        color: rgba(255, 255, 255, 0.6);
        text-decoration: line-through;
      }

      .modal-about-current-price {
        font-size: 31px;
        font-weight: 800;
        color: #22C55E;
        display: flex;
        align-items: center;
        gap: 3px;
        text-shadow: 0 2px 3px rgba(34, 197, 94, 0.2);
      }

      .modal-about-button {
        padding: 12px 23px;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 700;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        letter-spacing: 0.4px;
        text-decoration: none;
      }

      .modal-about-button--primary {
        background: linear-gradient(45deg,
                #FF3366,
                #FF6B6B,
                #4CAF50,
                #2196F3,
                #FF3366);
        background-size: 400% 400%;
        color: #ffffff;
        border: none;
        animation: gradientShift 8s ease infinite;
        box-shadow: 0 7px 20px rgba(255, 51, 102, 0.3);
        transform: scale(1);
        text-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
      }

      .modal-about-description {
        color: #94A3B8;
        line-height: 1.8;
        font-size: 14px;
        white-space: pre-line;
      }
      
      @keyframes gradientShift {
        0% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
        100% { background-position: 0% 50%; }
      }
    `,document.head.appendChild(p)})();function s(c){c.key==="Escape"&&i&&f()}function u(){const c=document.createElement("div");return c.className="modal-about-overlay",c.style.display="none",c.addEventListener("click",f),e.appendChild(c),c}function l(){return o?o.title==="Extensive color selection"&&o.colorImages?`
        <img
          src="${o.colorImages[n]}"
          alt="R36S Color Variant ${n+1}"
          class="modal-about-image"
          onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+Q29sb3IgVmFyaWFudCBJbWFnZTwvdGV4dD48L3N2Zz4=';"
        />
      `:o.videoUrl?`
        <video
          class="modal-about-image"
          autoplay
          muted
          loop
          playsInline
          preload="auto"
          poster="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+VmlkZW8gLSAke2ZlYXR1cmUuaW1hZ2VBbHR9PC90ZXh0Pjwvc3ZnPg=="
        >
          <source src="${o.videoUrl}" type="video/mp4" />
          <p>Your browser does not support HTML5 video.</p>
        </video>
      `:o.imageUrl?`
      <img
        src="${o.imageUrl}"
        alt="${o.imageAlt||"Feature image"}"
        class="modal-about-image"
        onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+SW1hZ2UgLSAke2ZlYXR1cmUuaW1hZ2VBbHR9PC90ZXh0Pjwvc3ZnPg==';"
      />
    `:`
      <div class="modal-about-image" style="background-color: #333; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px;">
        ${o.imageAlt||"Feature Image"}
      </div>
    `:""}function d(){(o==null?void 0:o.title)==="Extensive color selection"&&o.colorImages&&(r&&clearInterval(r),r=setInterval(()=>{n=n===o.colorImages.length-1?0:n+1;const c=t.querySelector(".modal-about-image");c&&(c.src=o.colorImages[n],c.alt=`R36S Color Variant ${n+1}`)},1e3))}function m(){if(!t||!o)return;t.innerHTML=`
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
          <div class="modal-about-icon-wrapper">${o.icon}</div>
          <h3 class="modal-about-title">${o.title}</h3>
        </div>

        <div class="modal-about-body">
          ${l()}

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
            ${o.fullDescription}
          </div>
        </div>
      </div>
    `;const c=t.querySelector(".modal-about-close");c&&c.addEventListener("click",f);const p=t.querySelector(".modal-about-content");p&&p.addEventListener("click",y=>y.stopPropagation())}function h(c){return o=c,t||(t=u()),m(),t.style.display="flex",i=!0,window.addEventListener("keydown",s),document.body.style.overflow="hidden",d(),{close:f}}function f(){!i||!t||(i=!1,t.style.display="none",window.removeEventListener("keydown",s),document.body.style.overflow="visible",r&&(clearInterval(r),r=null))}function I(){f(),t&&e.contains(t)&&e.removeChild(t),t=null,o=null}return{open:h,close:f,destroy:I}}const O="/R36S_STORE_JS/assets/video_1_.dFmxd0JH.gif",F="/R36S_STORE_JS/assets/video_2_.BNHP--Uh.gif",W="/R36S_STORE_JS/assets/Untitled_1_1x.BEwuD17K.jpg",z="/R36S_STORE_JS/assets/Untitled_2_1x.B9nk1bhQ.jpg",U="/R36S_STORE_JS/assets/Untitled_3_1x.Dj7NRcjB.jpg",q="/R36S_STORE_JS/assets/Untitled_4_1x.q3_p-GyC.jpg",V="/R36S_STORE_JS/assets/video_3_batrey_.DLtKjI3M.MP4",N="/R36S_STORE_JS/assets/video_6_.Na-nHAjA.MP4",Y="/R36S_STORE_JS/assets/video_5_option_.D1VzW0AP.MP4";function G(){console.log("Инициализация секции About");const e=document.querySelector(".about__cards");if(!e){console.error("Контейнер для карточек не найден");return}let t={x:0,y:0},o=null;const i=[{id:1,icon:`
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
• Optimized versions for modern hardware`,imageUrl:O,imageAlt:"Коллекция ретро-игр"},{id:2,icon:`
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
• Scratch-resistant surface`,imageUrl:F,imageAlt:"Display Technologies"},{id:3,icon:`
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

Take your gaming anywhere – play more, charge less.`,videoUrl:V,imageAlt:"Battery Life"},{id:4,icon:`
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
- Radiant Yellow
- Serene Lake Blue
- Deep Marine Blue
- Natural Olive Green
- Premium Transparent Red`,colorImages:[W,z,U,q],imageAlt:"R36S Color Variants"},{id:5,icon:`
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
- User-friendly interface`,videoUrl:Y,imageAlt:"R36S Settings"},{id:6,icon:`
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

Never compromise between portability and performance - the R36S delivers both in a perfectly portable package.`,videoUrl:N,imageAlt:"R36S Portability"}];function n(){e.innerHTML=i.map(l=>`
      <div class="about-card" data-id="${l.id}">
        <div class="card-blur"></div>
        <div class="card-glow"></div>
        <div class="about-card__content">
          <div class="about-card__icon-wrapper">${l.icon}</div>
          <h3 class="about-card__title">${l.title}</h3>
          <p class="about-card__description">${l.description}</p>
          <div class="about-card__stats">
            <span class="about-card__number">${l.number}</span>
            <span class="about-card__detail">${l.detail}</span>
          </div>
          <button class="about-card__button" data-feature-id="${l.id}">
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
    `).join("")}function r(l){const d=l.currentTarget,m=d.getBoundingClientRect();t={x:l.clientX-m.left,y:l.clientY-m.top},d.style.setProperty("--mouse-x",`${t.x}px`),d.style.setProperty("--mouse-y",`${t.y}px`)}function a(l){const d=parseInt(l.currentTarget.dataset.featureId);console.log("Клик по кнопке карточки ID:",d);const m=i.find(h=>h.id===d);if(!m){console.error("Данные для карточки не найдены");return}o||(o=Z(document.body)),o.open(m)}function s(){document.querySelectorAll(".about-card").forEach(d=>{d.addEventListener("mouseenter",()=>{parseInt(d.dataset.id),d.classList.add("active")}),d.addEventListener("mouseleave",()=>{d.classList.remove("active")}),d.addEventListener("mousemove",r)}),document.querySelectorAll(".about-card__button").forEach(d=>{d.addEventListener("click",a)})}function u(){document.querySelectorAll(".about-card").forEach(d=>{d.removeEventListener("mouseenter",()=>{}),d.removeEventListener("mouseleave",()=>{}),d.removeEventListener("mousemove",r)}),document.querySelectorAll(".about-card__button").forEach(d=>{d.removeEventListener("click",a)}),o&&(o.destroy(),o=null)}try{console.log("Рендерим карточки..."),n(),console.log("Устанавливаем обработчики событий..."),s(),console.log("Инициализация About завершена успешно")}catch(l){console.error("Ошибка при инициализации About:",l)}return{cleanup:u}}document.addEventListener("DOMContentLoaded",()=>{C()});function C(){const e=document.getElementById("features"),t=document.getElementById("featuresVideo"),o=document.getElementById("soundToggleButton"),i=document.getElementById("volumeOffIcon"),n=document.getElementById("volumeOnIcon"),r=document.getElementById("buyButton"),a=document.getElementById("moreInfoButton");t&&(t.volume=.5,t.play().catch(s=>{console.log("Автовоспроизведение не удалось:",s)})),r&&r.addEventListener("click",Q),a&&a.addEventListener("click",K),o&&o.addEventListener("click",()=>J(t,i,n)),window.addEventListener("scroll",()=>{X(e,t,i,n)})}function J(e,t,o){if(e)if(e.muted=!e.muted,e.muted){t.style.display="block",o.style.display="none";const i=document.getElementById("soundToggleButton");i&&i.setAttribute("aria-label","Включить звук")}else{e.volume=.5,t.style.display="none",o.style.display="block";const i=document.getElementById("soundToggleButton");i&&i.setAttribute("aria-label","Выключить звук")}}function X(e,t,o,i){if(!e||!t||t.muted)return;const n=e.getBoundingClientRect();if(!(n.top<window.innerHeight&&n.bottom>0)){t.muted=!0,o.style.display="block",i.style.display="none";const a=document.getElementById("soundToggleButton");a&&a.setAttribute("aria-label","Включить звук")}}function Q(){window.open("https://www.aliexpress.com/item/1005007171465465.html?spm=a2g0o.store_pc_home.0.0.70583a88IDCuNJ&pdp_npi=4%40dis%21UAH%214%C2%A0485%2C21%20%D0%B3%D1%80%D0%BD.%211%C2%A0472%2C53%20%D0%B3%D1%80%D0%BD.%21%21%21767.45%21251.96%21%40211b498b17390151033607761d21d7%2112000039694115852%21sh%21UA%211927913003%21X","_blank","noopener,noreferrer")}function K(){const e=document.getElementById("features-r36s"),t=document.querySelector(".header");if(e&&t){const o=t.offsetHeight,i=e.getBoundingClientRect().top,n=window.scrollY||window.pageYOffset,r=i+n-o;window.scrollTo({top:r,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features-r36s`)}}function ee(){return console.log("Categories секция инициализирована"),!0}function te(){return console.log("Articles секция инициализирована"),!0}function oe(){return console.log("Reviews секция инициализирована"),!0}function ne(){return console.log("Contact секция инициализирована"),!0}function ie(){return console.log("Products секция инициализирована"),!0}function B(){return console.log("Footer секция инициализирована"),!0}function M(){const e=document.querySelector(".mobile-menu");if(!e){console.error("Мобильное меню не найдено в DOM");return}const t=e.querySelector(".close-button");if(!t){console.error("Кнопка закрытия не найдена в мобильном меню");return}t.addEventListener("click",()=>{o()});function o(){e.classList.remove("open");const a=document.querySelector(".burger-line");a&&a.classList.remove("open"),document.body.style.overflow="unset";const s=document.querySelector(".header");s&&s.classList.remove("menu-open");const u=document.querySelector(".burger-btn");u&&u.setAttribute("aria-expanded","false")}e.querySelectorAll(".mobile-menu__link").forEach(a=>{a.addEventListener("click",()=>{setTimeout(()=>{o()},150)})});const n=e.querySelector(".mobile-menu__background");n&&n.addEventListener("click",()=>{o()});function r(){e.querySelectorAll(".mobile-menu__icon").forEach((s,u)=>{s.style.opacity="0",s.style.transform="translateX(-20px)",new MutationObserver(d=>{d.forEach(m=>{m.attributeName==="class"&&(e.classList.contains("open")?setTimeout(()=>{s.style.transition="all 0.4s ease",s.style.opacity="1",s.style.transform="translateX(0)"},100+u*70):(s.style.opacity="0",s.style.transform="translateX(-20px)"))})}).observe(e,{attributes:!0})})}r(),console.log("Мобильное меню с иконками инициализировано")}let A=()=>console.log("Modal компонент недоступен");(function(){return x(this,null,function*(){try{A=(yield D(()=>import("./ModalPortal.Cv5sWs3j.js"),[])).initModal}catch(t){console.log("Modal.js не загружен:",t)}})})();function R(e){return x(this,null,function*(){try{return(yield fetch(e,{method:"HEAD"})).ok}catch(t){return console.warn(`Ресурс ${e} недоступен:`,t),!1}})}function b(e){return x(this,null,function*(){const o=`/R36S_STORE_JS/sections/${e}/${e}.html`;try{if(!(yield R(o)))return console.warn(`Секция ${e} недоступна, используем заглушку`),`<section id="${e.toLowerCase()}" class="section">
                <div class="container">
                  <h2>Секция ${e}</h2>
                  <p>Контент будет доступен позже</p>
                </div>
              </section>`;const n=yield fetch(o);if(!n.ok)throw new Error(`HTTP ошибка ${n.status}`);return yield n.text()}catch(i){return console.error(`Ошибка загрузки секции ${e}:`,i),`<div class="error-section">Ошибка загрузки секции ${e}</div>`}})}function re(e){return x(this,null,function*(){const o=`/R36S_STORE_JS/components/${e}/${e}.html`;try{if(!(yield R(o)))return console.warn(`Компонент ${e} недоступен, используем заглушку`),`<div id="${e.toLowerCase()}" class="component">
                <div class="container">
                  <p>Компонент ${e} недоступен</p>
                </div>
              </div>`;const n=yield fetch(o);if(!n.ok)throw new Error(`HTTP ошибка ${n.status}`);return yield n.text()}catch(i){return console.error(`Ошибка загрузки компонента ${e}:`,i),`<div class="error-component">Ошибка загрузки компонента ${e}</div>`}})}function g(e,t){try{t(),console.log(`${e} инициализирован`)}catch(o){console.error(`Ошибка инициализации ${e}:`,o)}}function se(){return x(this,null,function*(){console.log("Инициализация приложения");const e=document.getElementById("root");if(!e)throw console.error("Элемент #root не найден"),new Error("Элемент #root не найден");e.innerHTML=`
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
  `;const t="/R36S_STORE_JS/";console.log("Режим:","production"),console.log("Базовый путь:",t);try{const[o,i]=yield Promise.all([b("Header").catch(()=>'<header class="header">Заголовок сайта</header>'),re("MobileMenu").catch(()=>'<div class="mobile-menu"></div>')]),n=window.location.pathname.replace(t,"/");if(n==="/"||n==="/index.html"){const r={hero:b("Hero"),about:b("About"),features:b("Features"),categories:b("Categories"),articles:b("Articles"),reviews:b("Reviews"),contact:b("Contact"),products:b("Products"),footer:b("Footer")},a=yield Promise.allSettled(Object.values(r)),s={};Object.keys(r).forEach((u,l)=>{s[u]=a[l].status==="fulfilled"?a[l].value:`<section id="${u}" class="error-section">Ошибка загрузки ${u}</section>`}),e.innerHTML=`
        ${o}
        ${i}
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
      `,g("Header",L),g("MobileMenu",M),g("Hero",j),g("About",G),g("Features",C),g("Categories",ee),g("Articles",te),g("Reviews",oe),g("Contact",ne),g("Products",ie),g("Footer",B),g("Modal",A)}else{const r=yield b("Footer").catch(()=>'<footer class="footer"><p>© 2025</p></footer>');e.innerHTML=`
        ${o}
        ${i}
        <div class="not-found">
          <div class="container">
            <h1>404</h1>
            <p>Страница не найдена</p>
            <a href="${t}" class="back-home">Вернуться на главную</a>
          </div>
        </div>
        ${r}
      `,g("Header",L),g("MobileMenu",M),g("Footer",B)}console.log("Приложение инициализировано")}catch(o){throw console.error("Ошибка при инициализации приложения:",o),e.innerHTML=`
      <div class="error">
        <h1>Ошибка</h1>
        <p>Произошла ошибка при загрузке страницы:</p>
        <pre>${o.message}</pre>
        <button onclick="location.reload()">Перезагрузить страницу</button>
      </div>
    `,o}})}function E(){if(window.location.hash){const e=window.location.hash.substring(1),t=document.getElementById(e);t&&setTimeout(()=>{const o=document.querySelector(".header"),i=o?o.offsetHeight:0,n=t.getBoundingClientRect().top+window.scrollY-i;window.scrollTo({top:n,behavior:"smooth"})},300)}}function ae(){document.body.addEventListener("click",e=>{const t=e.target.closest("a");if(t&&t.href&&t.href.startsWith(window.location.origin)&&!t.dataset.external){const o=new URL(t.href);o.pathname===window.location.pathname&&o.hash&&(e.preventDefault(),window.history.pushState(null,"",o.hash),E())}})}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("root");e&&(e.innerHTML=`
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
    `);const t=se(),o=new Promise((i,n)=>{setTimeout(()=>n(new Error("Превышено время ожидания инициализации (15 сек)")),15e3)});Promise.race([t,o]).then(()=>{E(),ae()}).catch(i=>{console.error("Ошибка инициализации:",i),e&&(e.innerHTML=`
          <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
            <h1>Не удалось загрузить приложение</h1>
            <p>${i.message}</p>
            <button onclick="location.reload()" style="padding: 10px 20px; margin-top: 15px; cursor: pointer;">
              Попробовать снова
            </button>
          </div>
        `)})});window.addEventListener("popstate",E);console.log("Main.js инициализирован");function le(){const e="IntersectionObserver"in window,t=function(){const i=document.createElement("div");return i.style.display="flex",i.style.display==="flex"}(),o=function(){const i=document.createElement("div");return i.style.display="grid",i.style.display==="grid"}();return console.log("Поддержка браузера:"),console.log("- IntersectionObserver:",e),console.log("- Flexbox:",t),console.log("- CSS Grid:",o),e||document.body.classList.add("no-intersection-observer"),t||document.body.classList.add("no-flexbox"),o||document.body.classList.add("no-grid"),{hasIntersectionObserver:e,hasFlexbox:t,hasGrid:o}}document.addEventListener("DOMContentLoaded",()=>{console.log("DOM загружен"),document.getElementById("root"),le();const e=performance.now();console.log(`Страница загружена за ${e.toFixed(2)}ms`),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").then(t=>{console.log("ServiceWorker зарегистрирован:",t)}).catch(t=>{console.error("Ошибка регистрации ServiceWorker:",t)})}),"performance"in window&&"getEntriesByType"in performance&&window.addEventListener("load",()=>{const t=performance.getEntriesByType("navigation")[0],o=performance.getEntriesByType("resource");console.log(`Общее время загрузки: ${t.loadEventEnd.toFixed(2)}ms`);const i=o.reduce((n,r)=>n+r.transferSize,0);console.log(`Загружено ${o.length} ресурсов (${(i/1024).toFixed(2)} KB)`)})});window.onerror=function(e,t,o,i,n){return console.error("Глобальная ошибка:",{message:e,source:t,lineno:o,colno:i,error:n}),!1};window.appVersion={version:"1.0.0",buildDate:new Date().toISOString(),environment:"production"};console.log("Main.js выполнение завершено");
