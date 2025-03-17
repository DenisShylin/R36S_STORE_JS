var C=(e,o,t)=>new Promise((n,i)=>{var l=a=>{try{d(t.next(a))}catch(m){i(m)}},c=a=>{try{d(t.throw(a))}catch(m){i(m)}},d=a=>a.done?n(a.value):Promise.resolve(a.value).then(l,c);d((t=t.apply(e,o)).next())});(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const l of i)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const l={};return i.integrity&&(l.integrity=i.integrity),i.referrerPolicy&&(l.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?l.credentials="include":i.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function n(i){if(i.ep)return;i.ep=!0;const l=t(i);fetch(i.href,l)}})();const N="modulepreload",F=function(e){return"/R36S_STORE_JS/"+e},M={},W=function(o,t,n){let i=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),d=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));i=Promise.allSettled(t.map(a=>{if(a=F(a),a in M)return;M[a]=!0;const m=a.endsWith(".css"),u=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const g=document.createElement("link");if(g.rel=m?"stylesheet":N,m||(g.as="script"),g.crossOrigin="",g.href=a,d&&g.setAttribute("nonce",d),document.head.appendChild(g),m)return new Promise((w,y)=>{g.addEventListener("load",w),g.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${a}`)))})}))}function l(c){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=c,window.dispatchEvent(d),!d.defaultPrevented)throw c}return i.then(c=>{for(const d of c||[])d.status==="rejected"&&l(d.reason);return o().catch(l)})};function O(){let e=!1,o=window.scrollY,t=null;const n=document.querySelector(".header"),i=document.querySelector(".burger-btn"),l=document.querySelector(".burger-line"),c=document.querySelector(".mobile-menu"),d=document.querySelectorAll(".our-menu-link, .mobile-menu__link");function a(){const r=window.scrollY,f=o<r;t&&clearTimeout(t),r>100?w(!f):w(!0),o=r,g(r>0),t=setTimeout(()=>{},150)}function m(){e=!e,u()}function u(){e?(n.classList.add("menu-open"),i.setAttribute("aria-expanded","true"),l.classList.add("open"),c.classList.add("open"),document.body.style.overflow="hidden"):(n.classList.remove("menu-open"),i.setAttribute("aria-expanded","false"),l.classList.remove("open"),c.classList.remove("open"),document.body.style.overflow="unset")}function g(r){r?n.classList.add("scrolled"):n.classList.remove("scrolled")}function w(r){r?(n.classList.add("visible"),n.classList.remove("hidden")):(n.classList.add("hidden"),n.classList.remove("visible"))}function y(r){r.preventDefault();const f=r.currentTarget.getAttribute("href"),x=f.replace("#",""),s=document.getElementById(x);s&&(w(!0),setTimeout(()=>{const h=n.offsetHeight,k=s.getBoundingClientRect().top+window.scrollY-h;window.scrollTo({top:k,behavior:"smooth"}),e&&(e=!1,u()),window.history.replaceState(null,"",`${window.location.pathname}${f}`),setTimeout(()=>{o=window.scrollY},100)},50))}function S(){if(window.location.hash){const r=window.location.hash.replace("#",""),f=document.getElementById(r);f&&setTimeout(()=>{const x=n.offsetHeight,h=f.getBoundingClientRect().top+window.scrollY-x;window.scrollTo({top:h,behavior:"smooth"})},100)}}window.addEventListener("scroll",a),window.addEventListener("resize",()=>{!(window.innerWidth<=768)&&e&&(e=!1,u())}),i&&i.addEventListener("click",m),d.forEach(r=>{r.addEventListener("click",y)}),S()}function G(){console.log("Hero section initialized");const e=document.querySelector(".hero"),o=document.querySelector(".hero__console-img"),t=document.querySelector(".hero__image source"),n=document.querySelector(".hero__content"),i=document.querySelector(".hero__description--desktop"),l=document.querySelector(".hero__description--mobile"),c=document.querySelector(".hero__pricing"),d=document.getElementById("buy-button"),a=document.getElementById("more-details-button"),m="/img/hero/herou1_1x_.png",u="/img/hero/herou1_2x_.png";console.log("Using image paths:",{heroImage1x:m,heroImage2x:u});function g(){if(!o){console.error("Hero image element not found");return}console.log("Setting hero image paths"),o.onerror=()=>{console.error("Failed to load hero image:",o.src),e.classList.add("hero--loaded")},o.onload=()=>{console.log("Hero image loaded successfully"),e.classList.add("hero--loaded")},o.src=u,o.srcset=`${m} 1x, ${u} 2x`,o.complete&&(console.log("Hero image already loaded (from cache)"),e.classList.add("hero--loaded"))}function w(){t?t.srcset=m:console.warn("Hero image source element not found")}function y(){const x=window.innerWidth>992;i&&l&&c&&(x?(i.style.display="block",l.style.display="none"):(i.style.display="none",l.style.display="block"))}function S(){if(!n)return;new IntersectionObserver(s=>{s.forEach(h=>{h.isIntersecting&&h.target.classList.add("animate-in")})},{threshold:.1}).observe(n)}function r(){d&&d.addEventListener("click",()=>{window.open("https://www.aliexpress.com/item/1005007171465465.html","_blank","noopener,noreferrer")}),a&&a.addEventListener("click",f)}function f(x){x.preventDefault();const s=document.getElementById("features"),h=document.querySelector(".header");if(s&&h){const v=h.offsetHeight,k=s.getBoundingClientRect().top,E=window.scrollY||window.pageYOffset,p=k+E-v;window.scrollTo({top:p,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features`)}}g(),w(),y(),S(),r(),window.addEventListener("resize",y)}function z(e){let o=null,t=null,n=!1,i=0,l=null;(()=>{const r="modal-about-styles";if(document.getElementById(r))return;const f=document.createElement("style");f.id=r,f.textContent=`
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
    `,document.head.appendChild(f)})();function d(r){r.key==="Escape"&&n&&y()}function a(){const r=document.createElement("div");return r.className="modal-about-overlay",r.style.display="none",r.addEventListener("click",y),e.appendChild(r),r}function m(){return t?t.title==="Extensive color selection"&&t.colorImages?`
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
    `:""}function u(){(t==null?void 0:t.title)==="Extensive color selection"&&t.colorImages&&(l&&clearInterval(l),l=setInterval(()=>{i=i===t.colorImages.length-1?0:i+1;const r=o.querySelector(".modal-about-image");r&&(r.src=t.colorImages[i],r.alt=`R36S Color Variant ${i+1}`)},1e3))}function g(){if(!o||!t)return;o.innerHTML=`
  <div class="modal-about-content">
    <button class="modal-about-close" aria-label="Close modal">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
    
    <div class="modal-about-header">
      <div class="modal-about-icon-wrapper">${t.icon}</div>
      <h3 class="modal-about-title">${t.title}</h3>
    </div>

        <div class="modal-about-body">
          <div class="modal-about-media-container">
            ${m()}
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
    `;const r=o.querySelector(".modal-about-close");r&&r.addEventListener("click",y);const f=o.querySelector(".modal-about-content");f&&f.addEventListener("click",x=>x.stopPropagation())}function w(r){return t=r,o||(o=a()),g(),o.style.display="flex",n=!0,window.addEventListener("keydown",d),document.body.style.overflow="hidden",u(),{close:y}}function y(){!n||!o||(n=!1,o.style.display="none",window.removeEventListener("keydown",d),document.body.style.overflow="visible",l&&(clearInterval(l),l=null))}function S(){y(),o&&e.contains(o)&&e.removeChild(o),o=null,t=null}return{open:w,close:y,destroy:S}}const U="/R36S_STORE_JS/assets/video_1_.dFmxd0JH.gif",Z="/R36S_STORE_JS/assets/video_2_.BNHP--Uh.gif",V="/R36S_STORE_JS/assets/Untitled_1_1x.BEwuD17K.jpg",Y="/R36S_STORE_JS/assets/Untitled_2_1x.B9nk1bhQ.jpg",J="/R36S_STORE_JS/assets/Untitled_3_1x.Dj7NRcjB.jpg",X="/R36S_STORE_JS/assets/Untitled_4_1x.q3_p-GyC.jpg",K="/R36S_STORE_JS/assets/video_3_batrey_.DLtKjI3M.MP4",Q="/R36S_STORE_JS/assets/video_6_.Na-nHAjA.MP4",ee="/R36S_STORE_JS/assets/video_5_option_.D1VzW0AP.MP4";function te(){console.log("Инициализация секции About");const e=document.querySelector(".about__cards");if(!e){console.error("Контейнер для карточек не найден");return}let o={x:0,y:0},t=null;const n=[{id:1,icon:`
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
• Optimized versions for modern hardware`,imageUrl:U,imageAlt:"Коллекция ретро-игр"},{id:2,icon:`
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
• Scratch-resistant surface`,imageUrl:Z,imageAlt:"Display Technologies"},{id:3,icon:`
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

Take your gaming anywhere – play more, charge less.`,videoUrl:K,imageAlt:"Battery Life"},{id:4,icon:`
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
- Radiant Yellow ...`,colorImages:[V,Y,J,X],imageAlt:"R36S Color Variants"},{id:5,icon:`
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
- User-friendly interface`,videoUrl:ee,imageAlt:"R36S Settings"},{id:6,icon:`
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

Never compromise between portability and performance - the R36S delivers both in a perfectly portable package.`,videoUrl:Q,imageAlt:"R36S Portability"}];function i(){e.innerHTML=n.map(m=>`
      <div class="about-card" data-id="${m.id}">
        <div class="card-blur"></div>
        <div class="card-glow"></div>
        <div class="about-card__content">
          <div class="about-card__icon-wrapper">${m.icon}</div>
          <h3 class="about-card__title">${m.title}</h3>
          <p class="about-card__description">${m.description}</p>
          <div class="about-card__stats">
            <span class="about-card__number">${m.number}</span>
            <span class="about-card__detail">${m.detail}</span>
          </div>
          <button class="about-card__button" data-feature-id="${m.id}">
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
    `).join("")}function l(m){const u=m.currentTarget,g=u.getBoundingClientRect();o={x:m.clientX-g.left,y:m.clientY-g.top},u.style.setProperty("--mouse-x",`${o.x}px`),u.style.setProperty("--mouse-y",`${o.y}px`)}function c(m){const u=parseInt(m.currentTarget.dataset.featureId);console.log("Клик по кнопке карточки ID:",u);const g=n.find(w=>w.id===u);if(!g){console.error("Данные для карточки не найдены");return}t||(t=z(document.body)),t.open(g)}function d(){document.querySelectorAll(".about-card").forEach(u=>{u.addEventListener("mouseenter",()=>{parseInt(u.dataset.id),u.classList.add("active")}),u.addEventListener("mouseleave",()=>{u.classList.remove("active")}),u.addEventListener("mousemove",l)}),document.querySelectorAll(".about-card__button").forEach(u=>{u.addEventListener("click",c)})}function a(){document.querySelectorAll(".about-card").forEach(u=>{u.removeEventListener("mouseenter",()=>{}),u.removeEventListener("mouseleave",()=>{}),u.removeEventListener("mousemove",l)}),document.querySelectorAll(".about-card__button").forEach(u=>{u.removeEventListener("click",c)}),t&&(t.destroy(),t=null)}try{console.log("Рендерим карточки..."),i(),console.log("Устанавливаем обработчики событий..."),d(),console.log("Инициализация About завершена успешно")}catch(m){console.error("Ошибка при инициализации About:",m)}return{cleanup:a}}document.addEventListener("DOMContentLoaded",()=>{q()});function q(){const e=document.getElementById("features"),o=document.getElementById("featuresVideo"),t=document.getElementById("soundToggleButton"),n=document.getElementById("volumeOffIcon"),i=document.getElementById("volumeOnIcon"),l=document.getElementById("buyButton"),c=document.getElementById("moreInfoButton");o&&(o.volume=.5,o.play().catch(d=>{console.log("Автовоспроизведение не удалось:",d)})),l&&l.addEventListener("click",ie),c&&c.addEventListener("click",re),t&&t.addEventListener("click",()=>oe(o,n,i)),window.addEventListener("scroll",()=>{ne(e,o,n,i)})}function oe(e,o,t){if(e)if(e.muted=!e.muted,e.muted){o.style.display="block",t.style.display="none";const n=document.getElementById("soundToggleButton");n&&n.setAttribute("aria-label","Включить звук")}else{e.volume=.5,o.style.display="none",t.style.display="block";const n=document.getElementById("soundToggleButton");n&&n.setAttribute("aria-label","Выключить звук")}}function ne(e,o,t,n){if(!e||!o||o.muted)return;const i=e.getBoundingClientRect();if(!(i.top<window.innerHeight&&i.bottom>0)){o.muted=!0,t.style.display="block",n.style.display="none";const c=document.getElementById("soundToggleButton");c&&c.setAttribute("aria-label","Включить звук")}}function ie(){window.open("https://www.aliexpress.com/item/1005007171465465.html?spm=a2g0o.store_pc_home.0.0.70583a88IDCuNJ&pdp_npi=4%40dis%21UAH%214%C2%A0485%2C21%20%D0%B3%D1%80%D0%BD.%211%C2%A0472%2C53%20%D0%B3%D1%80%D0%BD.%21%21%21767.45%21251.96%21%40211b498b17390151033607761d21d7%2112000039694115852%21sh%21UA%211927913003%21X","_blank","noopener,noreferrer")}function re(){const e=document.getElementById("features-r36s"),o=document.querySelector(".header");if(e&&o){const t=o.offsetHeight,n=e.getBoundingClientRect().top,i=window.scrollY||window.pageYOffset,l=n+i-t;window.scrollTo({top:l,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features-r36s`)}}function se(){console.log("Инициализация секции Categories");const e=document.querySelector(".categories__video"),o=document.querySelector(".categories__video-placeholder"),t=document.getElementById("categories"),n=document.querySelector(".categories__content"),i=document.querySelector(".categories__video-play"),l=document.querySelector(".categories__video-mute"),c=document.querySelector(".categories__video-slider"),d=document.querySelector(".categories__video-container"),a=document.querySelector(".categories__video-time span:first-child"),m=document.querySelector(".categories__video-time span:last-child");if(!t)return console.error("Секция Categories не найдена в DOM"),{};n||console.warn("Элемент categories__content не найден");let u=!1,g=!0,w=!1,y=!1;const S=p=>{if(isNaN(p)||p<0)return"0:00";const b=Math.floor(p/60),_=Math.floor(p%60);return`${b}:${_.toString().padStart(2,"0")}`};function r(){i&&(i.innerHTML=u?`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <rect x="6" y="4" width="4" height="16"></rect>
           <rect x="14" y="4" width="4" height="16"></rect>
         </svg>`:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <polygon points="5 3 19 12 5 21 5 3"></polygon>
         </svg>`)}function f(){l&&(l.innerHTML=g?`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
           <line x1="23" y1="9" x2="17" y2="15"></line>
           <line x1="17" y1="9" x2="23" y2="15"></line>
         </svg>`:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
           <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
         </svg>`)}function x(){if(!(!e||y)){if(u)e.pause(),u=!1;else{const p=e.play();if(p!==void 0){p.then(()=>{console.log("Воспроизведение видео успешно"),u=!0}).catch(b=>{console.warn("Не удалось воспроизвести видео:",b),u=!1}).finally(()=>{r()});return}else u=!0}r()}}function s(p){if(!e)return;for(;e.firstChild;)e.removeChild(e.firstChild);const b=document.createElement("source");b.src=p,b.type="video/mp4";const _=document.createTextNode("Your browser does not support the video tag.");e.appendChild(b),e.appendChild(_),e.load()}function h(){d&&(y=!0,e&&(e.style.display="none"),d.innerHTML=`
      <div class="categories__video-fallback" style="height: 300px; display: flex; align-items: center; justify-content: center; background: rgba(15, 23, 42, 0.8); border-radius: 24px;">
        <div style="text-align: center; padding: 20px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 20px;">
            <path d="M8 16l12-8-12-8v16z"></path>
          </svg>
          <p style="margin: 0; font-size: 16px;">Видео временно недоступно</p>
        </div>
      </div>
    `)}if(window.IntersectionObserver&&n)try{const p=new IntersectionObserver(b=>{b.forEach(_=>{_.isIntersecting?_.target.classList.add("animate-in"):e&&_.target===t&&(e.muted=!0,g=!0,f())})},{threshold:.1});p.observe(n),t&&p.observe(t)}catch(p){console.error("Ошибка при инициализации IntersectionObserver:",p),n&&n.classList.add("animate-in")}else n&&n.classList.add("animate-in");const v=["/video/categories/video_categories_.MP4","/public/video/categories/video_categories_.MP4","../video/categories/video_categories_.MP4","video_categories_.MP4"];function k(p){return new Promise(b=>{const _=setTimeout(()=>{console.log(`Превышено время ожидания для ${p}`),b(!1)},2e3);fetch(p,{method:"HEAD",cache:"no-cache"}).then(A=>{clearTimeout(_),A.ok?(console.log(`Видео доступно по пути: ${p}`),b(!0)):(console.log(`Видео недоступно по пути: ${p}, статус: ${A.status}`),b(!1))}).catch(A=>{clearTimeout(_),console.warn(`Ошибка при проверке пути ${p}:`,A),b(!1)})})}function E(){return C(this,null,function*(){for(const p of v)if(yield k(p))return p;return null})}return e?(console.log("Видео элемент найден:",e),e.muted=!0,e.loop=!0,e.playsInline=!0,e.addEventListener("loadedmetadata",()=>{try{console.log("Метаданные видео загружены"),w=!0,o&&(o.style.display="none"),e.style.display="block",c&&!isNaN(e.duration)&&(c.max=e.duration,m&&(m.textContent=S(e.duration)));const p=e.play();p!==void 0&&p.then(()=>{console.log("Автовоспроизведение видео успешно"),u=!0,r()}).catch(b=>{console.warn("Автовоспроизведение видео не поддерживается, не критично:",b),r()})}catch(p){console.error("Ошибка при обработке метаданных видео:",p)}}),e.addEventListener("timeupdate",()=>{try{c&&!isNaN(e.currentTime)&&(c.value=e.currentTime,a&&(a.textContent=S(e.currentTime)))}catch(p){console.error("Ошибка при обновлении времени видео:",p)}}),e.addEventListener("error",p=>{console.error("Ошибка при загрузке видео:",p),w||E().then(b=>{b?(console.log("Найден работающий путь к видео:",b),s(b)):(console.error("Ни один из путей к видео не работает"),h())})}),setTimeout(()=>{!w&&!y&&(console.log("Видео не загрузилось автоматически, ищем работающий путь"),E().then(p=>{p?(console.log("Найден работающий путь к видео:",p),s(p)):(console.error("Ни один из путей к видео не работает"),h())}))},2e3)):(console.error("Видео элемент не найден в DOM"),h()),i&&i.addEventListener("click",p=>{p.stopPropagation(),x()}),l&&l.addEventListener("click",p=>{p.stopPropagation(),e&&(g=!g,e.muted=g,f())}),c&&c.addEventListener("input",p=>{if(e)try{const b=parseFloat(p.target.value);isNaN(b)||(e.currentTime=b)}catch(b){console.error("Ошибка при изменении времени видео:",b)}}),d&&d.addEventListener("click",p=>{p.target.closest(".categories__video-controls")||x()}),r(),f(),t&&t.classList.add("initialized"),{togglePlay:x,cleanup:()=>{e&&(e.pause(),e.removeAttribute("src"),e.load())}}}function T(){const e=document.querySelectorAll(".accordion__item");if(e.length===0){console.warn("FAQ аккордеон: элементы не найдены");return}console.log(`FAQ аккордеон: найдено ${e.length} вопросов`);const o=(n=null)=>{e.forEach(i=>{i!==n&&i.classList.contains("active")&&i.classList.remove("active")})};e.forEach(n=>{const i=n.querySelector(".accordion__header"),l=n.querySelector(".accordion__toggle"),c=n.querySelector(".accordion__content");if(!i||!l||!c){console.warn("FAQ аккордеон: структура элемента неполная",n);return}n===e[0]&&setTimeout(()=>{l.classList.add("pulse"),setTimeout(()=>{l.classList.remove("pulse")},1500)},1e3);const d=g=>{if(g.preventDefault(),g.stopPropagation(),l.classList.add("clicked"),setTimeout(()=>l.classList.remove("clicked"),300),n.classList.contains("active")){n.classList.remove("active");return}o(n),n.classList.add("active");const w=i.getBoundingClientRect();w.top>=10&&w.bottom<=window.innerHeight-10||setTimeout(()=>{window.scrollTo({top:window.scrollY+w.top-100,behavior:"smooth"})},100)};i.addEventListener("click",d),l.addEventListener("click",g=>{g.stopPropagation(),d(g)});const a=`faq-question-${Math.random().toString(36).substring(2,9)}`,m=`faq-answer-${Math.random().toString(36).substring(2,9)}`;i.setAttribute("id",a),i.setAttribute("aria-expanded","false"),i.setAttribute("aria-controls",m),c.setAttribute("id",m),c.setAttribute("aria-labelledby",a),c.setAttribute("role","region"),c.setAttribute("hidden","true"),new MutationObserver(g=>{g.forEach(w=>{if(w.type==="attributes"&&w.attributeName==="class"){const y=n.classList.contains("active");i.setAttribute("aria-expanded",y?"true":"false"),y?c.removeAttribute("hidden"):setTimeout(()=>{n.classList.contains("active")||c.setAttribute("hidden","true")},500)}})}).observe(n,{attributes:!0})});const t=n=>{if(n.key==="Escape"){o();return}const i=document.activeElement.closest(".accordion__item");if(!i)return;const l=Array.from(e),c=l.indexOf(i);if(c===-1)return;let d;switch(n.key){case"ArrowDown":d=(c+1)%l.length;break;case"ArrowUp":d=(c-1+l.length)%l.length;break;case"Home":d=0;break;case"End":d=l.length-1;break;default:return}const a=l[d].querySelector(".accordion__header");a&&(a.focus(),n.preventDefault())};return document.addEventListener("keydown",t),console.log("FAQ аккордеон успешно инициализирован"),{openItem:n=>{n>=0&&n<e.length&&(o(e[n]),e[n].classList.add("active"))},closeAll:()=>o()}}typeof window!="undefined"&&(document.addEventListener("DOMContentLoaded",()=>{window.faqAccordeon=T()}),window.initFaqAccordion=T);function ae(){const e=document.getElementById("articles");if(!e){console.warn("Секция Articles не найдена в DOM, пробуем найти с другим id");const a=document.querySelector(".articles")||document.querySelector('section[id^="articles"]')||document.querySelector("section.articles");if(!a){console.error("Не удалось найти секцию Articles в DOM никаким способом"),console.debug("Структура DOM:",document.body.innerHTML);return}a.id||(a.id="articles"),console.log("Найден альтернативный элемент для секции Articles:",a)}console.log("Инициализация секции Articles с SEO-оптимизацией");const o=[{id:1,title:"R36S: The Ultimate Handheld Gaming Console for Retro Gaming Enthusiasts",sections:[{subtitle:"R36S: The Ultimate Handheld Gaming Console for Retro Gaming Enthusiasts",content:"Welcome to the official home of the <strong>R36S handheld gaming console</strong>. The R36S has quickly become the go-to device for retro gaming enthusiasts across the <em>United States</em>, <em>United Kingdom</em>, and <em>Australia</em>. This powerful portable gaming system offers an exceptional combination of performance, versatility, and value that puts other retro consoles to shame. Whether you're reliving childhood classics or discovering retro gems for the first time, the <mark>R36S console</mark> delivers an unmatched gaming experience. Many gamers compare the <span>R36S vs Anbernic</span> models and consistently find that the R36S offers superior features at a more competitive price point. Ready to elevate your portable gaming experience? The R36S is now available for purchase online with special promotional pricing for a limited time."},{subtitle:"Comprehensive R36S Review: Performance That Exceeds Expectations",content:'After extensive testing, our <strong>R36S review</strong> confirms what many gamers have discovered – this console punches well above its weight class. The <mark>R36S emulator performance</mark> is particularly impressive, handling everything from 8-bit classics to more demanding 32-bit titles with remarkable smoothness. Games load quickly and run without the lag or frame drops that plague lesser devices. The <strong>R36S specs</strong> include a powerful processor paired with ample RAM that ensures consistent performance across various emulation platforms. What truly sets the R36S console apart in our review is its ability to handle multiple emulation systems without compromising on quality. Unlike competitors in the same price range, the R36S maintains excellent performance even with graphically intensive games. Players across <em>North America</em> and <em>Europe</em> have shared <mark>R36S reviews</mark> praising its reliable performance during extended gaming sessions. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Gaming Console" target="_blank" rel="nofollow">Order your R36S today</a> to experience this exceptional performance firsthand at our special online price.'},{subtitle:"How to Install Games on R36S: Simple Setup for Maximum Fun",content:`Learning <strong>how to install ROMs on R36S</strong> is refreshingly straightforward. The console's user-friendly interface makes the process accessible even for those new to retro gaming handhelds. First, you'll need to format a microSD card (up to 512GB supported) using your computer. Then, download your preferred game files and organize them in folders corresponding to each console type. After inserting the card into your R36S, the built-in menu system automatically detects and categorizes your games for easy access. The <mark>R36S setup guide</mark> included with every purchase walks you through this process with clear, step-by-step instructions. Additionally, the R36S console supports various file formats, eliminating compatibility headaches common with other devices. Customers in <em>Canada</em>, <em>Australia</em>, and throughout <em>Europe</em> appreciate how the R36S simplifies the game installation process. Need more guidance? The complete <strong>R36S setup guide</strong> is available on our website, along with video tutorials. Don't miss our current sale price on the R36S – <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Now" target="_blank" rel="nofollow">order now</a> while supplies last!`},{subtitle:"R36S Specifications: Hardware That Delivers Premium Gaming Experience",content:"The impressive <strong>R36S specifications</strong> explain why this console has garnered such positive attention. At its heart, the R36S boasts a quad-core processor clocked at 1.5GHz, paired with 1GB of DDR3 RAM for smooth multitasking. The <mark>R36S screen resolution</mark> of 640x480 on its 3.5-inch IPS display delivers crisp visuals with excellent color reproduction and wide viewing angles. This display quality significantly enhances the gaming experience, particularly for pixel-art classics. The <strong>R36S battery life</strong> extends to an impressive 6-8 hours of continuous play on a single charge, with charging time of approximately 2-3 hours via the USB-C port. Storage options are flexible, with support for microSD cards up to 512GB, allowing an extensive game library. The <mark>R36S controller layout</mark> features a responsive D-pad, dual analog sticks, four action buttons, and shoulder triggers that provide precise control across different game genres. Available in multiple colors, the R36S is currently offered at a special promotional price in the <em>UK</em>, <em>USA</em>, and throughout <em>Asia</em>. Check our website for the current <strong>R36S price</strong> and available discount offers."},{subtitle:"Best Games for R36S: Thousands of Classics at Your Fingertips",content:`The <strong>R36S console</strong> truly shines when loaded with the best games that showcase its capabilities. The system excels at running 8-bit and 16-bit classics from Nintendo, Sega, and other iconic platforms with perfect emulation. More impressively, the R36S handles PlayStation 1 titles with remarkable fidelity, maintaining smooth framerates even in 3D games. Fighting game enthusiasts praise the <mark>R36S controller layout</mark> and responsive buttons, which make titles like Street Fighter and King of Fighters a joy to play. RPG fans can enjoy lengthy adventures like Final Fantasy and Chrono Trigger with the benefit of the extended <strong>R36S battery life</strong>. The console's excellent <mark>R36S sound quality</mark> and speakers deliver immersive audio, though many users opt for headphones for the full experience. The R36S firmware supports save states across all emulators, allowing you to pause and resume your progress at any time. Gamers in <em>Mexico</em>, <em>Brazil</em>, and across <em>South America</em> have particularly embraced the R36S for its extensive game compatibility. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Gaming Console" target="_blank" rel="nofollow">Order your R36S today</a> from our official online store to receive exclusive bonus content and take advantage of our current sale price.`},{subtitle:"A Unique Gaming Experience with R36S",content:`The <strong>R36S</strong> has garnered attention for its impressive gaming library, housing over 15,000 titles in the 64GB model and expanding to approximately 20,000 games in the 128GB version. This comprehensive collection spans across several iconic gaming platforms, including: <ul><li><strong>Nintendo Entertainment System (NES)</strong></li><li><strong>Super Nintendo Entertainment System (SNES)</strong></li><li><strong>Sega Genesis</strong></li><li><strong>PlayStation 1</strong></li><li><strong>Nintendo 64</strong></li><li><strong>Game Boy Advance</strong></li><li><strong>Nintendo DS</strong></li><li><strong>PlayStation Portable (PSP)</strong></li></ul><p>This extraordinary compilation allows enthusiasts to journey through the golden era of gaming across multiple legendary platforms, all within a single portable device.</p><p class="article__highlight"><strong>R36S Standout Gaming Experiences</strong><br>While the device offers thousands of nostalgic adventures, certain masterpieces particularly shine through:<ul><li><strong>Super Mario Bros.</strong> (NES): The revolutionary platformer that defined an entire genre and laid the groundwork for countless games to follow.</li><li><strong>The Legend of Zelda: A Link to the Past</strong> (SNES): A timeless adventure that masterfully combines puzzle-solving, exploration, and combat into an unforgettable experience.</li><li><strong>Sonic the Hedgehog</strong> (Sega Genesis): Sega's signature blue speedster that challenged Nintendo's dominance with its distinctive fast-paced gameplay.</li><li><strong>Final Fantasy VII</strong> (PlayStation 1): The groundbreaking RPG that transformed video game storytelling with its complex characters and emotional narrative.</li><li><strong>Super Mario 64</strong> (Nintendo 64): The trailblazing 3D platformer that revolutionized how players interact with virtual worlds.</li><li><strong>Pokémon FireRed</strong> (Game Boy Advance): The beloved reimagining of the original Pokémon Red, enhanced with additional features and improved graphics.</li><li><strong>Mario Kart DS</strong> (Nintendo DS): An exhilarating racing experience offering endless entertainment through its inventive tracks and competitive multiplayer.</li><li><strong>God of War: Chains of Olympus</strong> (PSP): An action-packed epic showcasing the impressive capabilities of Sony's handheld console.</li></ul>These highlighted gems represent merely a glimpse into the vast array of quality titles available on the <mark>R36S</mark>, catering to diverse gaming preferences from casual play to hardcore challenges.</p>`},{subtitle:"R36S Firmware Update Guide: Keeping Your Console at Peak Performance",content:`Maintaining the latest <strong>R36S firmware</strong> ensures you'll enjoy optimal performance and access to the newest features. The <mark>R36S firmware update</mark> process is straightforward and user-friendly. Begin by downloading the latest firmware package from our official website. Then, place the file in the root directory of your microSD card. After inserting the card into your powered-off R36S, hold the select button while powering on the device to enter update mode. The console will automatically detect and install the new firmware, typically completing in 2-3 minutes. Each <strong>R36S firmware update</strong> brings performance optimizations, new emulators, and interface improvements. Following the update, the <mark>R36S user manual</mark> recommends recalibrating your controls for the best gaming experience. Our technical support team, available to customers worldwide including <em>Japan</em>, <em>South Korea</em>, and across <em>Europe</em>, can assist with any firmware update questions. Subscribe to our newsletter for notifications about new R36S firmware releases and special offers on accessories. Don't miss our <a href="https://www.aliexpress.com/item/1005007171465465.html" title="R36S Limited Time Promotion" target="_blank" rel="nofollow">limited-time promotion</a> with discounted pricing on the R36S console and accessory bundles.`}]},{id:2,title:"R36S Official Website - The Ultimate Gaming Experience at Your Fingertips",sections:[{subtitle:"R36S Official Website - The Ultimate Gaming Experience at Your Fingertips",content:"Welcome to the <strong>R36S Official Website</strong>, your premier destination for cutting-edge handheld gaming technology. Our revolutionary gaming console has transformed the portable gaming landscape, offering unprecedented performance in a sleek, ergonomic design. The <mark>R36S</mark> combines powerful hardware with intuitive controls to deliver an immersive gaming experience wherever you go. Whether you're a casual gamer or a dedicated enthusiast, the <strong>R36S game console</strong> provides the perfect balance of power, portability, and playability. Discover why gamers across <em>North America</em>, <em>Europe</em>, and <em>Asia</em> are choosing the R36S as their preferred handheld gaming device. Continue reading to learn about our exclusive features, technical specifications, and why the R36S stands apart from other gaming consoles on the market today."},{subtitle:"Discover the Revolutionary R36S Handheld Gaming Experience",content:'The <strong>R36S handheld</strong> represents the next generation of portable gaming technology. Unlike conventional gaming devices, the R36S handheld features an advanced cooling system that prevents overheating during extended gaming sessions. Additionally, the vibrant high-resolution display ensures crystal-clear visuals even in bright outdoor conditions. Moreover, the <mark>R36S game console</mark> includes customizable controls that adapt to your unique gaming style. Furthermore, the lightweight yet durable construction makes the R36S perfect for gaming on the go. Meanwhile, the extended battery life keeps you playing for hours without interruption. Subsequently, the intuitive user interface makes navigating between games and settings effortless. In contrast to other portable systems, the <strong>R36S handheld</strong> offers exceptional value without compromising on quality. Consequently, gamers in the <em>United Kingdom</em>, <em>Australia</em>, and <em>Canada</em> can <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Online" target="_blank" rel="nofollow">order online</a> and experience the difference today. However, limited-time promotional pricing makes this the ideal time to purchase your R36S game console.'},{subtitle:"Unmatched Performance in the R36S Game Console",content:"The heart of the <strong>R36S game console</strong> lies in its powerful processing capabilities. Specifically, the custom-designed CPU and GPU combination delivers desktop-quality graphics in a handheld format. In particular, the advanced thermal management system prevents throttling during intensive gaming sessions. Similarly, the high-speed RAM ensures smooth multitasking between games and applications. Likewise, the expandable storage options allow you to carry your entire game library wherever you go. Certainly, the <mark>R36S handheld's</mark> performance metrics exceed industry standards in its price range. Nevertheless, the energy-efficient design maintains battery life without sacrificing processing power. Above all, the <strong>R36S game console's</strong> architecture supports both retro classics and modern gaming experiences. Therefore, gamers looking for performance and versatility consistently choose the R36S. Indeed, retailers across <em>Germany</em>, <em>France</em>, and <em>Japan</em> report steadily increasing demand for this innovative gaming device. Finally, manufacturer specifications confirm that the R36S outperforms competing handhelds costing significantly more."},{subtitle:"Enhanced Gaming Experience with the R36S Handheld's Exclusive Features",content:"The <strong>R36S handheld</strong> comes equipped with numerous exclusive features designed to enhance your gaming experience. First, the haptic feedback system provides immersive tactile responses that correspond with in-game actions. Second, the adjustable performance modes allow you to prioritize either graphical fidelity or battery conservation. Third, the integrated voice chat functionality eliminates the need for external communication devices. Fourth, the customizable RGB lighting adds a personal touch to your gaming setup. Fifth, the quick-resume feature lets you instantly return to your game after a break. Sixth, the dedicated streaming mode optimizes performance for content creators. Meanwhile, the brand's commitment to quality ensures each <mark>R36S game console</mark> meets rigorous standards before shipping. As a result, customers in <em>Spain</em>, <em>Italy</em>, and <em>South Korea</em> can shop confidently knowing they're receiving a premium product. Consequently, the history of the brand demonstrates consistent innovation in the gaming sector. Therefore, the manufacturer continues to support the R36S with regular firmware updates and expanded compatibility."},{subtitle:"Why Gamers Worldwide Choose the R36S Official Website for Their Gaming Needs",content:"The <strong>R36S Official Website</strong> offers distinct advantages for discerning gamers seeking the ultimate handheld experience. Primarily, exclusive online-only configurations provide enhanced specifications unavailable through retail channels. Additionally, direct purchases from the <mark>R36S Official Website</mark> include extended warranty coverage at no additional cost. Furthermore, members of the official online community gain early access to firmware updates and beta features. Moreover, the official online store frequently offers promotional pricing unavailable elsewhere. Consequently, the <strong>R36S game console</strong> purchased directly from the manufacturer includes premium accessories in standard packages. Subsequently, customers in <em>Brazil</em>, <em>Mexico</em>, and <em>India</em> benefit from regionalized payment options and shipping methods. Meanwhile, the brand's commitment to customer satisfaction has established a loyal following in competitive gaming circles. In essence, the <mark>R36S handheld</mark> represents not just a product but an entire ecosystem of gaming innovation. Therefore, visiting the <span>R36S Official Website</span> remains the optimal way to experience everything this revolutionary console offers. Indeed, the manufacturer's direct sales model ensures authenticity and full support for every purchased device."},{subtitle:"The Future of Gaming with the R36S Official Website and Upcoming Innovations",content:"The <strong>R36S Official Website</strong> stands as the definitive source for information about upcoming innovations in the R36S ecosystem. Primarily, the <mark>R36S game console's</mark> modular design allows for future hardware expansions without requiring a completely new device. Additionally, the development team is actively working on cloud gaming integration to further expand the available game library. Furthermore, the <strong>R36S handheld</strong> will soon support cross-platform multiplayer with major gaming systems. Moreover, announced accessories will enhance the versatility of the base R36S game console for specialized gaming genres. Consequently, early adopters of the R36S platform will benefit from a continuously evolving gaming experience. Subsequently, the price point remains competitive despite these substantial additions to functionality. Meanwhile, the brand continues to expand its presence in emerging markets including <em>Southeast Asia</em> and <em>Eastern Europe</em>. Therefore, the <mark>R36S handheld</mark> represents not just current gaming technology but a future-proof investment. In conclusion, whether you're looking to purchase your first R36S or upgrade from a previous model, the <span>R36S Official Website</span> offers the most comprehensive information and purchase options. Indeed, as the gaming landscape evolves, the <strong>R36S game console</strong> evolves with it, maintaining its position at the forefront of handheld gaming innovation."},{subtitle:"Why Choose the R36S: Value, Performance, and Community Support",content:`The <strong>R36S</strong> has established itself as the preferred choice for discerning retro gamers for several compelling reasons. When conducting an <span>R36S vs Anbernic comparison</span>, the R36S consistently offers better specifications at a more competitive price point. The <mark>R36S price</mark> and value for money is unmatched in the portable retro gaming market, delivering premium features without the premium cost. The <strong>R36S portable gaming console</strong> features extend beyond mere hardware specifications – the active community of users continues to develop custom firmware, game ports, and utilities that expand the system's capabilities. The <mark>R36S emulator performance</mark> receives regular optimizations through community contributions, ensuring that even the most demanding games run smoothly. The <strong>R36S handheld gaming console review</strong> scores consistently highlight the device's exceptional build quality, with a solid feel that withstands the rigors of portable gaming. Customers across <em>North America</em>, <em>Europe</em>, <em>Australia</em>, and <em>Asia</em> have made the R36S their go-to retro gaming solution. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Official" target="_blank" rel="nofollow">Order your R36S today</a> from our official website to join this passionate community and take advantage of our current promotional pricing, exclusive bundles, and free worldwide shipping on orders over $100.`},{subtitle:"Welcome to the R36S Official Store",content:`Discover premium products at the <strong>R36S official store</strong>, your ultimate destination for authentic R36S merchandise. Our official store offers an extensive selection of cutting-edge devices designed to enhance your daily experience. Looking to buy <strong>R36S products</strong> at the best price? The <strong>R36S official store</strong> delivers exceptional value with regular promotions and sales events. <mark>Order online today</mark> and experience the convenience of worldwide shipping from the R36S official store. Our team is dedicated to providing superior customer service, ensuring your shopping experience exceeds expectations. Whether you're searching for the latest releases or popular bestsellers, the <strong>R36S official store</strong> has everything you need. Check out our current <span>special offers</span> and take advantage of exclusive deals available only at the R36S official store. With secure payment options and fast delivery, shopping at the <strong>R36S official store</strong> is both safe and convenient. Join thousands of satisfied customers who trust the R36S official store for authentic products and unmatched quality. Visit our website now or contact our support team to learn more about where to buy R36S products. The <strong>R36S official store</strong> ships to major regions including <em>North America</em>, <em>Europe</em>, <em>Asia</em>, and <em>Australia</em>, making our premium products accessible to customers worldwide. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Visit R36S Official Store" target="_blank" rel="nofollow">Shop at the R36S official store today</a> and experience the difference that quality products and exceptional service can make.`}]}],t=e.querySelector(".articles__grid");if(!t){console.error("Элемент .articles__grid не найден в секции Articles");return}(()=>{if(!document.querySelector('meta[name="description"]')){const a=document.createElement("meta");a.name="description",a.content="R36S - The Ultimate Handheld Gaming Console for Retro Gaming. Official website with specifications, reviews, and purchase options.",document.head.appendChild(a)}if(!document.querySelector('meta[name="keywords"]')){const a=document.createElement("meta");a.name="keywords",a.content="R36S, retro gaming, handheld console, portable gaming, R36S specs, R36S review, retro games, emulator, gaming device",document.head.appendChild(a)}})();const i=[];o.forEach(a=>{const m=document.createElement("article");m.className="article",m.id=`article-${a.id}`,m.dataset.articleId=a.id,m.style.opacity="0",m.style.transform="translateY(20px)",m.style.transition="all 0.6s ease-out",m.setAttribute("itemscope",""),m.setAttribute("itemtype","http://schema.org/Article");const u=document.createElement("h2");u.className="article__title",u.setAttribute("itemprop","headline"),u.innerHTML=a.title,m.appendChild(u);const g=document.createElement("div");g.className="article__content-wrapper",g.setAttribute("itemprop","articleBody"),a.sections.forEach((f,x)=>{const s=document.createElement("section");if(s.className="article__section",s.id=`section-${a.id}-${x}`,x!==0||f.subtitle!==a.title){const v=document.createElement("h3");v.className="article__subtitle",v.innerHTML=f.subtitle,s.appendChild(v)}const h=document.createElement("div");h.className="article__content",h.innerHTML=f.content,s.appendChild(h),g.appendChild(s)}),m.appendChild(g);const w=document.createElement("script");w.type="application/ld+json";const y={"@context":"https://schema.org","@type":"Article",headline:a.title,description:a.sections[0].content.substring(0,150)+"...",keywords:"R36S, retro gaming, handheld console, portable gaming",author:{"@type":"Organization",name:"R36S Official"},publisher:{"@type":"Organization",name:"R36S",logo:{"@type":"ImageObject",url:"/assets/images/r36s-logo.png"}},datePublished:new Date().toISOString(),dateModified:new Date().toISOString()};w.textContent=JSON.stringify(y),m.appendChild(w);const S=document.createElement("footer");S.className="article__footer";const r=document.createElement("a");r.href="https://www.aliexpress.com/item/1005007171465465.html",r.className="article__cta",r.textContent="Order R36S Now",r.setAttribute("itemprop","url"),r.setAttribute("title","Order R36S Gaming Console"),r.setAttribute("rel","nofollow"),r.setAttribute("target","_blank"),S.appendChild(r),m.appendChild(S),t.appendChild(m),i.push(m)});const l=()=>{if("IntersectionObserver"in window){const a=new IntersectionObserver(m=>{m.forEach(u=>{u.isIntersecting&&(u.target.style.opacity=1,u.target.style.transform="translateY(0)",a.unobserve(u.target))})},{threshold:.1});i.forEach(m=>{a.observe(m)})}else i.forEach(a=>{a.style.opacity=1,a.style.transform="translateY(0)"}),console.warn("IntersectionObserver не поддерживается. Анимация появления отключена.")};(()=>{const a=document.createElement("nav");a.className="articles__breadcrumbs",a.setAttribute("aria-label","Breadcrumbs"),a.setAttribute("itemscope",""),a.setAttribute("itemtype","https://schema.org/BreadcrumbList");const m=document.createElement("ol");m.className="breadcrumbs__list";const u=document.createElement("li");u.className="breadcrumbs__item",u.setAttribute("itemprop","itemListElement"),u.setAttribute("itemscope",""),u.setAttribute("itemtype","https://schema.org/ListItem");const g=document.createElement("span");g.className="breadcrumbs__link",g.setAttribute("itemprop","item"),g.innerHTML='<span itemprop="name">Home</span>',u.appendChild(g);const w=document.createElement("meta");w.setAttribute("itemprop","position"),w.content="1",u.appendChild(w);const y=document.createElement("li");y.className="breadcrumbs__item",y.setAttribute("itemprop","itemListElement"),y.setAttribute("itemscope",""),y.setAttribute("itemtype","https://schema.org/ListItem");const S=document.createElement("span");S.className="breadcrumbs__current",S.setAttribute("itemprop","name"),S.textContent="R36S Gaming Console",y.appendChild(S);const r=document.createElement("meta");r.setAttribute("itemprop","position"),r.content="2",y.appendChild(r),m.appendChild(u),m.appendChild(y),a.appendChild(m),e.querySelector(".articles__container").insertBefore(a,t)})(),(()=>{const a=document.createElement("h1");a.className="articles__heading",a.textContent="R36S Gaming Console - Official Information",e.querySelector(".articles__container").insertBefore(a,e.querySelector(".articles__breadcrumbs"))})(),setTimeout(()=>{T()},500),setTimeout(l,100),console.log("Инициализация секции Articles завершена успешно")}function le(){const e="/R36S_STORE_JS/",t={review1:{webp:`${e}img/reviews/imm_1_1x.webp`,jpg:`${e}img/reviews/imm_1_1x.jpg`},review2:{webp:`${e}img/reviews/imm_2_1x.webp`,jpg:`${e}img/reviews/imm_2_1x.jpg`},review3:{webp:`${e}img/reviews/imm_3_1x.webp`,jpg:`${e}img/reviews/imm_3_1x.jpg`},review4:{webp:`${e}img/reviews/imm_4_1x.webp`,jpg:`${e}img/reviews/imm_4_1x.jpg`}},n=[{id:1,rating:5,color:"Purple 64GB",author:"AliExpress Shopper",date:"21 Aug 2024",text:"I just got my hands on the R36S retro console and it's seriously amazing for old-school gaming. The screen is super clear, it runs games smoothly, and battery life is solid. I love how I can load up my favorite classics and play...",images:{webp:t.review1.webp,jpeg:t.review1.jpg},helpful:12,verified:!0},{id:2,rating:5,color:"Yellow 128G",author:"V***h",date:"26 Aug 2024",text:"After playing with the R36S for a week, I'm really impressed and absolutely delighted. The build quality feels great, and switching between different retro games is super easy. The controls are comfortable for long gaming sessions.",images:{webp:t.review4.webp,jpeg:t.review4.jpg},helpful:8,verified:!0},{id:3,rating:5,color:"White 64GB",author:"M***z",date:"22 Aug 2024",text:"The R36S has become my go-to gaming device. I wasn't sure about buying another retro console, but this one surprised me. The screen is bright and sharp, games run without issues, and it's small enough to fit in my pocket.",images:{webp:t.review3.webp,jpeg:t.review3.jpg},helpful:15,verified:!0},{id:4,rating:5,color:"Black 128GB",author:"K***r",date:"28 Aug 2024",text:"I've been using the R36S for a few weeks now, and I'm genuinely impressed. The 3.5-inch IPS screen delivers crisp visuals, and the build quality feels solid. The dual analog sticks are responsive, making retro gaming a joy.",images:{webp:t.review2.webp,jpeg:t.review2.jpg},helpful:10,verified:!0,mobileOnly:!0}],i=new Set;let l=null,c=window.innerWidth<=1200;function d(s=!1){const h=document.createElementNS("http://www.w3.org/2000/svg","svg");h.classList.add("review-card__star"),h.setAttribute("viewBox","0 0 24 24"),h.setAttribute("fill",s?"currentColor":"none"),h.setAttribute("stroke","currentColor"),h.setAttribute("stroke-width","2");const v=document.createElementNS("http://www.w3.org/2000/svg","polygon");return v.setAttribute("points","12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"),h.appendChild(v),h}function a(){const s=document.createElementNS("http://www.w3.org/2000/svg","svg");s.classList.add("review-card__verified"),s.setAttribute("width","16"),s.setAttribute("height","16"),s.setAttribute("viewBox","0 0 24 24"),s.setAttribute("fill","none"),s.setAttribute("stroke","currentColor"),s.setAttribute("stroke-width","2");const h=document.createElementNS("http://www.w3.org/2000/svg","path");return h.setAttribute("d","M20 6L9 17l-5-5"),s.appendChild(h),s}function m(s){const h=document.getElementById("reviewCardTemplate");if(!h)return console.error("Шаблон карточки отзыва не найден"),null;const v=h.content.cloneNode(!0).querySelector(".review-card");v.dataset.id=s.id,s.mobileOnly&&(v.classList.add("mobile-only"),c||(v.style.display="none"));const k=v.querySelector(".review-card__rating");for(let A=0;A<5;A++)k.appendChild(d(A<s.rating));v.querySelector(".review-card__variant").textContent=s.color,v.querySelector(".review-card__text").textContent=s.text;const E=v.querySelector("picture");E.querySelector("source").setAttribute("srcset",s.images.webp);const p=E.querySelector("img");p.setAttribute("src",s.images.jpeg),p.setAttribute("alt",`Review ${s.id}`);const b=v.querySelector(".review-card__name");s.verified&&b.prepend(a()),b.appendChild(document.createTextNode(s.author)),v.querySelector(".review-card__date").textContent=s.date,v.querySelector(".review-card__helpful-count").textContent=`Helpful (${s.helpful})`,v.addEventListener("click",u),v.addEventListener("mouseenter",()=>g(s.id)),v.addEventListener("mouseleave",w);const _=v.querySelector(".review-card__helpful");return _.addEventListener("mouseenter",()=>{_.querySelector("svg").setAttribute("fill","currentColor"),_.querySelector("svg").classList.add("scale-125"),_.querySelector("svg").classList.remove("scale-100")}),_.addEventListener("mouseleave",()=>{_.querySelector("svg").setAttribute("fill","none"),_.querySelector("svg").classList.remove("scale-125"),_.querySelector("svg").classList.add("scale-100")}),v}function u(){window.open("https://www.aliexpress.com/item/1005007226123844.html#feedback","_blank","noopener,noreferrer")}function g(s){l=s;const h=document.querySelector(`.review-card[data-id="${s}"]`);if(h){const v=h.querySelector(".review-card__arrow-wrapper");v&&(v.style.display="flex")}}function w(){const s=document.querySelector(`.review-card[data-id="${l}"]`);if(s){const h=s.querySelector(".review-card__arrow-wrapper");h&&(h.style.display="none")}l=null}function y(){const s=document.getElementById("reviewsGrid");if(!s){console.error("Контейнер для отзывов не найден");return}const h=document.getElementById("reviewCardTemplate"),v={};s.querySelectorAll(".review-card").forEach(p=>{p.dataset.id&&(v[p.dataset.id]=p)});const k=n.filter(p=>!p.mobileOnly||p.mobileOnly&&c),E=[];k.forEach(p=>{if(v[p.id]){const b=v[p.id];b.style.display="block",E.push(b),delete v[p.id]}else{const b=m(p);b&&E.push(b)}}),Object.values(v).forEach(p=>{p!==h&&(p.style.display="none")}),s.innerHTML="",s.appendChild(h),E.forEach(p=>{s.appendChild(p)}),S()}function S(){if(!("IntersectionObserver"in window)){console.warn("IntersectionObserver не поддерживается в этом браузере"),document.querySelectorAll(".review-card").forEach(h=>{h.classList.add("animate-in")});return}const s=new IntersectionObserver(h=>{h.forEach(v=>{if(v.isIntersecting){const k=v.target.dataset.id;i.has(k)||(v.target.classList.add("animate-in"),i.add(k))}})},{threshold:.1});document.querySelectorAll(".review-card").forEach(h=>{s.observe(h)})}function r(){c=window.innerWidth<=1200,y(),document.querySelectorAll(".review-card").forEach(h=>{h.classList.contains("mobile-only")&&(h.style.display=c?"block":"none")})}function f(){y();let s;const h=()=>{clearTimeout(s),s=setTimeout(r,250)};window.addEventListener("resize",h);const v=document.createElement("style");v.textContent=`
      .review-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      .review-card.animate-in {
        opacity: 1;
        transform: translateY(0);
      }
    `,document.head.appendChild(v),setTimeout(r,100);const k=document.getElementById("reviews");if(k&&!k.hasAttribute("itemscope")){k.setAttribute("itemscope",""),k.setAttribute("itemtype","http://schema.org/Product");const E=document.createElement("meta");E.setAttribute("itemprop","name"),E.setAttribute("content","R36S Handheld Game Console"),k.prepend(E);const p=document.createElement("meta");p.setAttribute("itemprop","description"),p.setAttribute("content","R36S Handheld Game Console with 3.5-inch IPS screen and retro games"),k.prepend(p)}}f();function x(){if(window.removeEventListener("resize",r),window.removeEventListener("resize",()=>{}),"IntersectionObserver"in window){const s=[];new IntersectionObserver(()=>{}).disconnect(),s.forEach(v=>v.disconnect())}document.querySelectorAll(".review-card").forEach(s=>{s.removeEventListener("click",u),s.removeEventListener("mouseenter",()=>{}),s.removeEventListener("mouseleave",w),Object.keys(n).forEach(v=>{s.removeEventListener("mouseenter",()=>g(v))});const h=s.querySelector(".review-card__helpful");h&&(h.removeEventListener("mouseenter",()=>{}),h.removeEventListener("mouseleave",()=>{}))}),console.log("Reviews section cleanup completed")}return{cleanup:x,renderReviewCards:y}}const j={"phone-call":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>',mail:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>',"map-pin":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>',"message-circle":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>',send:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>',"alert-circle":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>',loader:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader animate-spin"><line x1="12" x2="12" y1="2" y2="6"></line><line x1="12" x2="12" y1="18" y2="22"></line><line x1="4.93" x2="7.76" y1="4.93" y2="7.76"></line><line x1="16.24" x2="19.07" y1="16.24" y2="19.07"></line><line x1="2" x2="6" y1="12" y2="12"></line><line x1="18" x2="22" y1="12" y2="12"></line><line x1="4.93" x2="7.76" y1="19.07" y2="16.24"></line><line x1="16.24" x2="19.07" y1="7.76" y2="4.93"></line></svg>'};function L(e,o=24){return j[e]?j[e].replace(/width="24"/,`width="${o}"`).replace(/height="24"/,`height="${o}"`):(console.error(`Icon "${e}" not found`),"")}function ce(){console.log("Инициализация секции Contact");const e=document.querySelector(".contact__form"),o=document.getElementById("name"),t=document.getElementById("email"),n=document.getElementById("phone"),i=document.getElementById("message"),l=document.querySelector(".form__button"),c=document.createElement("div");c.className="form__error",c.style.display="none",c.innerHTML=`
    <div class="form__error-icon">${L("alert-circle",16)}</div>
    <span></span>
  `,e.insertBefore(c,e.firstChild);const d={name:"",email:"",phone:"",message:""};function a(y){c.querySelector("span").textContent=y,c.style.display="flex"}function m(){c.style.display="none"}function u(y){const{name:S,value:r}=y.target;d[S]=r,m()}o.addEventListener("input",u),t.addEventListener("input",u),n.addEventListener("input",u),i.addEventListener("input",u);function g(y){return C(this,null,function*(){y.preventDefault(),w(!0);try{if(!d.name||!d.email||!d.phone||!d.message)throw new Error("Please fill in all fields");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(d.email))throw new Error("Please enter a valid email");if(!/^\+?[0-9]{10,14}$/.test(d.phone.replace(/\D/g,"")))throw new Error("Please enter a valid phone number.");yield new Promise(x=>setTimeout(x,1e3)),o.value="",t.value="",n.value="",i.value="",Object.keys(d).forEach(x=>{d[x]=""}),alert("Message sent successfully! We will contact you shortly.")}catch(r){a(r.message||"There was an error sending your message. Please try again later."),console.error("Form submission error:",r)}finally{w(!1)}})}function w(y){[o,t,n,i].forEach(r=>{r.disabled=y}),l.disabled=y,l.innerHTML=y?`<span class="button__icon">${L("loader",20)}</span> Sending...`:`<span class="button__icon">${L("send",20)}</span> Send message`}return e.addEventListener("submit",g),function(){o.removeEventListener("input",u),t.removeEventListener("input",u),n.removeEventListener("input",u),i.removeEventListener("input",u),e.removeEventListener("submit",g)}}const de={BASE_URL:"/R36S_STORE_JS/",DEV:!1,MODE:"production",PROD:!0,SSR:!1};function ue(){console.log("Products секция инициализирована");const o=!de?"/":"/R36S_STORE_JS/",t={i0_0:{jpg:`${o}img/products/i_0_0x.jpg`,webp:`${o}img/products/i_0_0x.webp`},i1:{jpg:`${o}img/products/i_1_1x.jpg`,webp:`${o}img/products/i_1_1x.webp`},i2:{jpg:`${o}img/products/i_2_1x.jpg`,webp:`${o}img/products/i_2_1x.webp`},i3:{jpg:`${o}img/products/i_3_1x.jpg`,webp:`${o}img/products/i_3_1x.webp`},i4:{jpg:`${o}img/products/i_4_1x.jpg`,webp:`${o}img/products/i_4_1x.webp`},i5:{jpg:`${o}img/products/i_5_1x.jpg`,webp:`${o}img/products/i_5_1x.webp`},i6:{jpg:`${o}img/products/i_6_1x.jpg`,webp:`${o}img/products/i_6_1x.webp`},i7:{jpg:`${o}img/products/i_7_1x.jpg`,webp:`${o}img/products/i_7_1x.webp`},i8:{jpg:`${o}img/products/i_8_1x.jpg`,webp:`${o}img/products/i_8_1x.webp`},i9:{jpg:`${o}img/products/i_9_1x.jpg`,webp:`${o}img/products/i_9_1x.webp`},i10:{jpg:`${o}img/products/i_10_1x.jpg`,webp:`${o}img/products/i_10_1x.webp`}},n=[{id:"getting-started",title:"Getting Started",content:{text:`Please be aware that this tutorial does not apply to K36 devices or clones marketed as R36S. For additional information about your hardware, please refer to the comprehensive R36S Wiki Page.

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

• A quick press of the power button will put the device into standby mode.`,images:{jpg:t.i9.jpg,webp:t.i9.webp}}},{id:"downloads",title:"Available Downloads",content:{downloads:[{file:"Firmware v1.0.4 2024.04.13",link:"https://drive.google.com/file/d/10z7j7IZ7WX3y10ZJBW_a2-agcIe1Dx9m/edit",date:"2024.04.13",version:"v1.0.4"},{file:"ArkOS_K36_v2.0_03112025.img.xz",link:"https://drive.google.com/file/d/1F93Q1jXYaTCftOlzAt0BaM43rmVexXsn/view",date:"2023.12.22",version:"v1.0.3"},{file:"ArkOS_R35S-R36S_v2.0_02092025_P3.img.xz",link:"https://drive.google.com/file/d/18VL7uLNdyFKDH4_V8YM5zhHSjLiJdkUc/view",date:"2023.11.16",version:"v1.0.2"},{file:"ArkOS_R35S-R36S_v2.0_02092025_P4.img.xz",link:"https://drive.google.com/file/d/1MT1AGGch6Ou4RAfxDvVCxUI4aXX6Qa5v/view",date:"2023.11.05",version:"v1.0.0"}]}}];let i="downloads",l=!1;const c=document.getElementById("products-nav-list"),d=document.getElementById("products-sections"),a=document.getElementById("products-nav");function m(){l=window.innerWidth<=1024,a&&(l?a.classList.add("nav-mobile"):a.classList.remove("nav-mobile"))}function u(r){i=r,document.querySelectorAll(".nav-item").forEach(s=>{s.dataset.sectionId===r?s.classList.add("nav-item-active"):s.classList.remove("nav-item-active")}),document.querySelectorAll(".section").forEach(s=>{s.id===r?s.classList.add("section-active"):s.classList.remove("section-active")}),setTimeout(()=>{const s=document.getElementById(r);if(s){const h=l?80:20,k=s.getBoundingClientRect().top+window.pageYOffset-h;window.scrollTo({top:k,behavior:"smooth"})}},100)}function g(){c.innerHTML="",n.forEach(r=>{const f=document.createElement("button");f.className=`nav-item ${i===r.id?"nav-item-active":""}`,f.dataset.sectionId=r.id,f.innerHTML=`
        <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <span>${r.title}</span>
      `,f.addEventListener("click",()=>u(r.id)),c.appendChild(f)})}function w(r){if(r.id==="downloads"){let s='<div class="download-list">';return r.content.downloads.forEach(h=>{s+=`
          <div class="download-card">
            <div class="download-info">
              <svg class="download-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M9 13h6"></path>
                <path d="M9 17h3"></path>
              </svg>
              <div>
                <div class="download-filename">${h.file}</div>
                <div class="download-meta">Update: ${h.date} • ${h.version}</div>
              </div>
            </div>
            <a href="${h.link}" class="download-button" target="_blank">
              <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        `}),s+="</div>",s}let f='<div class="section-content"><div class="text-content">';return r.content.text.split(`
`).forEach(s=>{f+=`<p>${s.trim()}</p>`}),f+="</div>",r.content.images&&(f+=`
        <div class="image-container">
          <picture>
            <source srcset="${r.content.images.webp}" type="image/webp">
            <img src="${r.content.images.jpg}" alt="${r.title}" class="section-image" loading="lazy">
          </picture>
        </div>
      `),r.content.subsections&&(f+='<div class="subsections">',r.content.subsections.forEach(s=>{f+=`
          <div class="subsection">
            <h3 class="subsection-title">${s.title}</h3>
            <div class="subsection-content">
              <div class="text-content">
        `,s.content.text.split(`
`).forEach(v=>{f+=`<p>${v.trim()}</p>`}),f+="</div>",s.content.images&&(f+=`
            <div class="image-container">
              <picture>
                <source srcset="${s.content.images.webp}" type="image/webp">
                <img src="${s.content.images.jpg}" alt="${s.title}" class="subsection-image" loading="lazy">
              </picture>
            </div>
          `),f+="</div></div>"}),f+="</div>"),f+="</div>",f}function y(){d.innerHTML="",n.forEach(r=>{const f=document.createElement("section");f.id=r.id,f.className=`section ${i===r.id?"section-active":""}`,f.innerHTML=`
        <h2 class="section-title">${r.title}</h2>
        ${w(r)}
      `,d.appendChild(f)})}function S(){m(),g(),y(),window.addEventListener("resize",m),console.log("Products: Инициализация завершена. Используются пути к изображениям без /public/")}return c&&d&&a?S():console.error("Не найдены необходимые DOM элементы для секции Products"),{handleSectionClick:u,checkMobile:m}}function P(){console.log("Инициализация Footer");const e=document.querySelector(".footer");if(!e){console.error("Элемент footer не найден");return}const o=e.querySelector(".partnership-button");o&&o.addEventListener("click",()=>{const t=document.querySelector(".partnership-modal-overlay");if(t){t.classList.add("active");const n=t.querySelector(".partnership-modal-content");n&&n.classList.add("active"),document.body.style.overflow="hidden"}}),me()}function me(){const e=document.querySelector(".partnership-modal-overlay");if(!e){console.warn("Модальное окно не найдено");return}const o=e.querySelector(".partnership-modal-close");o&&o.addEventListener("click",t),e.addEventListener("click",n=>{n.target===e&&t()}),document.addEventListener("keydown",n=>{n.key==="Escape"&&e.classList.contains("active")&&t()});function t(){const n=e.querySelector(".partnership-modal-content");e.classList.remove("active"),n&&n.classList.remove("active"),document.body.style.overflow=""}}function $(){const e=document.querySelector(".mobile-menu");if(!e){console.error("Мобильное меню не найдено в DOM");return}const o=e.querySelector(".close-button");if(!o){console.error("Кнопка закрытия не найдена в мобильном меню");return}o.addEventListener("click",()=>{t()});function t(){e.classList.remove("open");const c=document.querySelector(".burger-line");c&&c.classList.remove("open"),document.body.style.overflow="unset";const d=document.querySelector(".header");d&&d.classList.remove("menu-open");const a=document.querySelector(".burger-btn");a&&a.setAttribute("aria-expanded","false")}e.querySelectorAll(".mobile-menu__link").forEach(c=>{c.addEventListener("click",()=>{setTimeout(()=>{t()},150)})});const i=e.querySelector(".mobile-menu__background");i&&i.addEventListener("click",()=>{t()});function l(){e.querySelectorAll(".mobile-menu__icon").forEach((d,a)=>{d.style.opacity="0",d.style.transform="translateX(-20px)",new MutationObserver(u=>{u.forEach(g=>{g.attributeName==="class"&&(e.classList.contains("open")?setTimeout(()=>{d.style.transition="all 0.4s ease",d.style.opacity="1",d.style.transform="translateX(0)"},100+a*70):(d.style.opacity="0",d.style.transform="translateX(-20px)"))})}).observe(e,{attributes:!0})})}l(),console.log("Мобильное меню с иконками инициализировано")}let D=()=>console.log("Modal компонент недоступен");(function(){return C(this,null,function*(){try{D=(yield W(()=>import("./ModalPortal.Cv5sWs3j.js"),[])).initModal}catch(o){console.log("Modal.js не загружен:",o)}})})();function H(e){return C(this,null,function*(){try{return(yield fetch(e,{method:"HEAD"})).ok}catch(o){return console.warn(`Ресурс ${e} недоступен:`,o),!1}})}function I(e){return C(this,null,function*(){const t=`/R36S_STORE_JS/sections/${e}/${e}.html`;try{if(!(yield H(t)))return console.warn(`Секция ${e} недоступна, используем заглушку`),`<section id="${e.toLowerCase()}" class="section">
                <div class="container">
                  <h2>Секция ${e}</h2>
                  <p>Контент будет доступен позже</p>
                </div>
              </section>`;const i=yield fetch(t);if(!i.ok)throw new Error(`HTTP ошибка ${i.status}`);return yield i.text()}catch(n){return console.error(`Ошибка загрузки секции ${e}:`,n),`<div class="error-section">Ошибка загрузки секции ${e}</div>`}})}function pe(e){return C(this,null,function*(){const t=`/R36S_STORE_JS/components/${e}/${e}.html`;try{if(!(yield H(t)))return console.warn(`Компонент ${e} недоступен, используем заглушку`),`<div id="${e.toLowerCase()}" class="component">
                <div class="container">
                  <p>Компонент ${e} недоступен</p>
                </div>
              </div>`;const i=yield fetch(t);if(!i.ok)throw new Error(`HTTP ошибка ${i.status}`);return yield i.text()}catch(n){return console.error(`Ошибка загрузки компонента ${e}:`,n),`<div class="error-component">Ошибка загрузки компонента ${e}</div>`}})}function R(e,o){try{o(),console.log(`${e} инициализирован`)}catch(t){console.error(`Ошибка инициализации ${e}:`,t)}}function he(){return C(this,null,function*(){console.log("Инициализация приложения");const e=document.getElementById("root");if(!e)throw console.error("Элемент #root не найден"),new Error("Элемент #root не найден");e.innerHTML=`
    <div style="display: flex; justify-content: center; align-items: center; height: 100vh;">
      <div style="text-align: center;">
        <div style="border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; width: 50px; height: 50px; animation: spin 2s linear infinite; margin: 0 auto;"></div>
        <p style="margin-top: 15px; font-family: Arial, sans-serif;">Loading...</p>
      </div>
    </div>
    <style>
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    </style>
  `;const o="/R36S_STORE_JS/";console.log("Режим:","production"),console.log("Базовый путь:",o);try{const[t,n]=yield Promise.all([I("Header").catch(()=>'<header class="header">Заголовок сайта</header>'),pe("MobileMenu").catch(()=>'<div class="mobile-menu"></div>')]),i=window.location.pathname.replace(o,"/");if(i==="/"||i==="/index.html"){const l={hero:I("Hero"),about:I("About"),features:I("Features"),categories:I("Categories"),articles:I("Articles"),reviews:I("Reviews"),contact:I("Contact"),products:I("Products"),footer:I("Footer")},c=yield Promise.allSettled(Object.values(l)),d={};Object.keys(l).forEach((a,m)=>{d[a]=c[m].status==="fulfilled"?c[m].value:`<section id="${a}" class="error-section">Ошибка загрузки ${a}</section>`}),e.innerHTML=`
        ${t}
        ${n}
        <main id="main-content">
          ${d.hero}
          ${d.about}
          ${d.features}
          ${d.categories}
          ${d.articles}
          ${d.reviews}
          ${d.contact}
          ${d.products}
        </main>
        ${d.footer}
      `,R("Header",O),R("MobileMenu",$),R("Hero",G),R("About",te),R("Features",q),R("Categories",se),R("Articles",ae),R("Reviews",le),R("Contact",ce),R("Products",ue),R("Footer",P),R("Modal",D)}else{const l=yield I("Footer").catch(()=>'<footer class="footer"><p>© 2025</p></footer>');e.innerHTML=`
        ${t}
        ${n}
        <div class="not-found">
          <div class="container">
            <h1>404</h1>
            <p>Страница не найдена</p>
            <a href="${o}" class="back-home">Вернуться на главную</a>
          </div>
        </div>
        ${l}
      `,R("Header",O),R("MobileMenu",$),R("Footer",P)}console.log("Приложение инициализировано")}catch(t){throw console.error("Ошибка при инициализации приложения:",t),e.innerHTML=`
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
    `);const o=he(),t=new Promise((n,i)=>{setTimeout(()=>i(new Error("Превышено время ожидания инициализации (15 сек)")),15e3)});Promise.race([o,t]).then(()=>{B(),ge()}).catch(n=>{console.error("Ошибка инициализации:",n),e&&(e.innerHTML=`
          <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
            <h1>Не удалось загрузить приложение</h1>
            <p>${n.message}</p>
            <button onclick="location.reload()" style="padding: 10px 20px; margin-top: 15px; cursor: pointer;">
              Попробовать снова
            </button>
          </div>
        `)})});window.addEventListener("popstate",B);console.log("Main.js инициализирован");function fe(){const e="IntersectionObserver"in window,o=function(){const n=document.createElement("div");return n.style.display="flex",n.style.display==="flex"}(),t=function(){const n=document.createElement("div");return n.style.display="grid",n.style.display==="grid"}();return console.log("Поддержка браузера:"),console.log("- IntersectionObserver:",e),console.log("- Flexbox:",o),console.log("- CSS Grid:",t),e||document.body.classList.add("no-intersection-observer"),o||document.body.classList.add("no-flexbox"),t||document.body.classList.add("no-grid"),{hasIntersectionObserver:e,hasFlexbox:o,hasGrid:t}}document.addEventListener("DOMContentLoaded",()=>{console.log("DOM загружен"),document.getElementById("root"),fe();const e=performance.now();console.log(`Страница загружена за ${e.toFixed(2)}ms`),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").then(o=>{console.log("ServiceWorker зарегистрирован:",o)}).catch(o=>{console.error("Ошибка регистрации ServiceWorker:",o)})}),"performance"in window&&"getEntriesByType"in performance&&window.addEventListener("load",()=>{const o=performance.getEntriesByType("navigation")[0],t=performance.getEntriesByType("resource");console.log(`Общее время загрузки: ${o.loadEventEnd.toFixed(2)}ms`);const n=t.reduce((i,l)=>i+l.transferSize,0);console.log(`Загружено ${t.length} ресурсов (${(n/1024).toFixed(2)} KB)`)})});window.onerror=function(e,o,t,n,i){return console.error("Глобальная ошибка:",{message:e,source:o,lineno:t,colno:n,error:i}),!1};window.appVersion={version:"1.0.0",buildDate:new Date().toISOString(),environment:"production"};console.log("Main.js выполнение завершено");
