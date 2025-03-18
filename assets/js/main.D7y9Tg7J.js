var C=(e,o,t)=>new Promise((i,n)=>{var a=s=>{try{c(t.next(s))}catch(u){n(u)}},l=s=>{try{c(t.throw(s))}catch(u){n(u)}},c=s=>s.done?i(s.value):Promise.resolve(s.value).then(a,l);c((t=t.apply(e,o)).next())});(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();const N="modulepreload",F=function(e){return"/R36S_STORE_JS/"+e},M={},G=function(o,t,i){let n=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));n=Promise.allSettled(t.map(s=>{if(s=F(s),s in M)return;M[s]=!0;const u=s.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${d}`))return;const v=document.createElement("link");if(v.rel=u?"stylesheet":N,u||(v.as="script"),v.crossOrigin="",v.href=s,c&&v.setAttribute("nonce",c),document.head.appendChild(v),u)return new Promise((w,y)=>{v.addEventListener("load",w),v.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${s}`)))})}))}function a(l){const c=new Event("vite:preloadError",{cancelable:!0});if(c.payload=l,window.dispatchEvent(c),!c.defaultPrevented)throw l}return n.then(l=>{for(const c of l||[])c.status==="rejected"&&a(c.reason);return o().catch(a)})};function O(){let e=!1,o=window.scrollY,t=null;const i=document.querySelector(".header"),n=document.querySelector(".burger-btn"),a=document.querySelector(".burger-line"),l=document.querySelector(".mobile-menu"),c=document.querySelectorAll(".our-menu-link, .mobile-menu__link");function s(){const m=window.scrollY,p=o<m;t&&clearTimeout(t),m>100?w(!p):w(!0),o=m,v(m>0),t=setTimeout(()=>{},150)}function u(){e=!e,d()}function d(){e?(i.classList.add("menu-open"),n.setAttribute("aria-expanded","true"),a.classList.add("open"),l.classList.add("open"),document.body.style.overflow="hidden"):(i.classList.remove("menu-open"),n.setAttribute("aria-expanded","false"),a.classList.remove("open"),l.classList.remove("open"),document.body.style.overflow="unset")}function v(m){m?i.classList.add("scrolled"):i.classList.remove("scrolled")}function w(m){m?(i.classList.add("visible"),i.classList.remove("hidden")):(i.classList.add("hidden"),i.classList.remove("visible"))}function y(m){m.preventDefault();const p=m.currentTarget.getAttribute("href"),x=p.replace("#",""),r=document.getElementById(x);r&&(w(!0),setTimeout(()=>{const g=i.offsetHeight,k=r.getBoundingClientRect().top+window.scrollY-g;window.scrollTo({top:k,behavior:"smooth"}),e&&(e=!1,d()),window.history.replaceState(null,"",`${window.location.pathname}${p}`),setTimeout(()=>{o=window.scrollY},100)},50))}function S(){if(window.location.hash){const m=window.location.hash.replace("#",""),p=document.getElementById(m);p&&setTimeout(()=>{const x=i.offsetHeight,g=p.getBoundingClientRect().top+window.scrollY-x;window.scrollTo({top:g,behavior:"smooth"})},100)}}window.addEventListener("scroll",s),window.addEventListener("resize",()=>{!(window.innerWidth<=768)&&e&&(e=!1,d())}),n&&n.addEventListener("click",u),c.forEach(m=>{m.addEventListener("click",y)}),S()}function W(){console.log("Hero section initialized");const e=document.querySelector(".hero"),o=document.querySelector(".hero__console-img"),t=document.querySelector(".hero__image source"),i=document.querySelector(".hero__content"),n=document.querySelector(".hero__description--desktop"),a=document.querySelector(".hero__description--mobile"),l=document.querySelector(".hero__pricing"),c=document.getElementById("buy-button"),s=document.getElementById("more-details-button"),u="/img/hero/herou1_1x_.png",d="/img/hero/herou1_2x_.png",v="/img/hero/fallback-image.png";console.log("Using image paths:",{heroImage1x:u,heroImage2x:d});function w(){if(!o){console.error("Hero image element not found");return}console.log("Setting hero image paths"),o.onerror=()=>{console.error("Failed to load hero image:",o.src),o.src=v,e.classList.add("hero--loaded")},o.onload=()=>{console.log("Hero image loaded successfully"),e.classList.add("hero--loaded")},o.src=d,o.srcset=`${u} 1x, ${d} 2x`,o.decoding="async",o.complete&&(console.log("Hero image already loaded (from cache)"),e.classList.add("hero--loaded"))}function y(){t?t.srcset=u:console.warn("Hero image source element not found")}function S(){const r=window.innerWidth>992;n&&a&&l&&(r?(n.style.display="block",a.style.display="none"):(n.style.display="none",a.style.display="block"))}function m(){if(!i)return;new IntersectionObserver(g=>{g.forEach(f=>{f.isIntersecting&&f.target.classList.add("animate-in")})},{threshold:.1}).observe(i)}function p(){c&&c.addEventListener("click",()=>{window.open("https://www.aliexpress.com/item/1005007171465465.html","_blank","noopener,noreferrer")}),s&&s.addEventListener("click",x)}function x(r){r.preventDefault();const g=document.getElementById("features"),f=document.querySelector(".header");if(g&&f){const k=f.offsetHeight,E=g.getBoundingClientRect().top,h=window.scrollY||window.pageYOffset,b=E+h-k;window.scrollTo({top:b,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features`)}}w(),y(),S(),m(),p(),window.addEventListener("resize",S)}function z(e){let o=null,t=null,i=!1,n=0,a=null;(()=>{const p="modal-about-styles";if(document.getElementById(p))return;const x=document.createElement("style");x.id=p,x.textContent=`
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
    `,document.head.appendChild(x)})();function c(p){p.key==="Escape"&&i&&S()}function s(){const p=document.createElement("div");return p.className="modal-about-overlay",p.setAttribute("role","dialog"),p.setAttribute("aria-modal","true"),p.setAttribute("tabindex","-1"),p.style.display="none",p.addEventListener("click",S),e.appendChild(p),p}function u(){return t?t.title==="Extensive color selection"&&t.colorImages?`
        <img
          src="${t.colorImages[n]}"
          alt="R36S Color Variant ${n+1}"
          class="modal-about-image"
          loading="lazy"
          width="400" 
          height="400"
          onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+Q29sb3IgVmFyaWFudCBJbWFnZTwvdGV4dD48L3N2Zz4=';"
        />
      `:t.videoUrl?`
        <video
          class="modal-about-video"
          autoplay
          muted
          loop
          playsInline
          preload="metadata"
          width="640" 
          height="360"
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
        loading="lazy"
        width="400" 
        height="400"
        onerror="this.onerror=null; this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjI0IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBhbGlnbm1lbnQtYmFzZWxpbmU9Im1pZGRsZSIgZmlsbD0iI2ZmZiI+SW1hZ2UgLSAke2ZlYXR1cmUuaW1hZ2VBbHR9PC90ZXh0Pjwvc3ZnPg==';"
      />
    `:`
      <div class="modal-about-image" style="background-color: #333; display: flex; align-items: center; justify-content: center; color: white; font-size: 18px;">
        ${t.imageAlt||"Feature Image"}
      </div>
    `:""}function d(){(t==null?void 0:t.title)==="Extensive color selection"&&t.colorImages&&(a&&clearInterval(a),a=setInterval(()=>{n=n===t.colorImages.length-1?0:n+1;const p=o.querySelector(".modal-about-image");p&&(p.src=t.colorImages[n],p.alt=`R36S Color Variant ${n+1}`)},1e3))}function v(){if(!o||!t)return;const p={"@context":"https://schema.org","@type":"ItemPage",mainEntity:{"@type":"Product",name:"R36S Handheld Game Console",description:t.fullDescription,image:t.imageUrl||(t.colorImages?t.colorImages[0]:""),offers:{"@type":"Offer",price:"35.48",priceCurrency:"USD",url:"https://www.aliexpress.com/item/1005007171465465.html"},category:"Video Game Console",feature:t.title}};t.id===1&&(p.mainEntity.faqPage={"@type":"FAQPage",mainEntity:[{"@type":"Question",name:"How many games are included in the R36S console?",acceptedAnswer:{"@type":"Answer",text:"The R36S console includes over 15,000 classic retro games from various platforms."}}]});const x=`
      <script type="application/ld+json">
        ${JSON.stringify(p)}
      <\/script>
    `;o.innerHTML=`
      ${x}
      <div class="modal-about-content" itemscope itemtype="https://schema.org/Product">
        <meta itemprop="name" content="R36S Handheld Game Console" />
        <meta itemprop="description" content="${t.title} for R36S console" />
        <meta itemprop="sku" content="R36S-${t.id}" />
        <meta itemprop="brand" content="R36S" />
        <meta itemprop="productID" content="R36S-F${t.id}" />
        
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
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        
        <div class="modal-about-header">
          <div class="modal-about-icon-wrapper" aria-hidden="true">${t.icon}</div>
          <h3 class="modal-about-title" itemprop="name">${t.title}</h3>
        </div>

        <div class="modal-about-body">
          <div class="modal-about-media-container" itemprop="image">
            ${u()}
          </div>
          
          <div class="modal-about-content-container">
            <div class="modal-about-stats" itemprop="offers" itemscope itemtype="https://schema.org/Offer">
              <div class="modal-about-price-wrapper">
                <span class="modal-about-original-price">US $108.06</span>
                <span class="modal-about-current-price" itemprop="price" content="35.48">
                  $35.48
                  <span style="font-size: 24px" itemprop="priceCurrency" content="USD">US</span>
                </span>
                <meta itemprop="availability" content="https://schema.org/InStock" />
                <meta itemprop="url" content="https://www.aliexpress.com/item/1005007171465465.html" />
              </div>

              <a
                href="https://www.aliexpress.com/item/1005007171465465.html"
                class="modal-about-button modal-about-button--primary"
                target="_blank"
                rel="noopener noreferrer"
                itemprop="url"
              >
                <span class="modal-about-button-pulse"></span>
                <span class="modal-about-button-text">BUY NOW -68%</span>
                <span class="modal-about-button-shine"></span>
              </a>
            </div>

            <div class="modal-about-description" itemprop="description">
              ${t.fullDescription}
            </div>
          </div>
        </div>
      </div>
    `;const r=o.querySelector(".modal-about-close");r&&r.addEventListener("click",S);const g=o.querySelector(".modal-about-content");g&&g.addEventListener("click",f=>f.stopPropagation())}function w(p){t=p,o||(o=s()),v();const x=window.location.href,r=new URL(x);return r.searchParams.set("feature",t.id),window.history.pushState({featureId:t.id},"",r),o.style.display="flex",i=!0,o.focus(),window.addEventListener("keydown",c),document.body.style.overflow="hidden",d(),window.addEventListener("popstate",y),{close:S}}function y(p){i&&(!p.state||!p.state.featureId)&&S()}function S(){if(!i||!o)return;i=!1,o.style.display="none",window.removeEventListener("keydown",c),window.removeEventListener("popstate",y),document.body.style.overflow="visible",a&&(clearInterval(a),a=null);const p=new URL(window.location.href);p.searchParams.delete("feature"),window.history.pushState({},"",p)}function m(){S(),o&&e.contains(o)&&e.removeChild(o),o=null,t=null}return{open:w,close:S,destroy:m}}const U="/R36S_STORE_JS/assets/video_1_.dFmxd0JH.gif",Z="/R36S_STORE_JS/assets/video_2_.BNHP--Uh.gif",V="/R36S_STORE_JS/assets/Untitled_1_1x.BEwuD17K.jpg",Y="/R36S_STORE_JS/assets/Untitled_2_1x.B9nk1bhQ.jpg",J="/R36S_STORE_JS/assets/Untitled_3_1x.Dj7NRcjB.jpg",X="/R36S_STORE_JS/assets/Untitled_4_1x.q3_p-GyC.jpg",K="/R36S_STORE_JS/assets/video_3_batrey_.DLtKjI3M.MP4",Q="/R36S_STORE_JS/assets/video_6_.Na-nHAjA.MP4",ee="/R36S_STORE_JS/assets/video_5_option_.D1VzW0AP.MP4";function te(){console.log("Инициализация секции About");const e=document.querySelector(".about__cards");if(!e){console.error("Контейнер для карточек не найден");return}let o={x:0,y:0},t=null;const i=[{id:1,icon:`
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

Never compromise between portability and performance - the R36S delivers both in a perfectly portable package.`,videoUrl:Q,imageAlt:"R36S Portability"}];function n(){e.innerHTML=i.map(u=>`
      <div class="about-card" data-id="${u.id}">
        <div class="card-blur"></div>
        <div class="card-glow"></div>
        <div class="about-card__content">
          <div class="about-card__icon-wrapper">${u.icon}</div>
          <h3 class="about-card__title">${u.title}</h3>
          <p class="about-card__description">${u.description}</p>
          <div class="about-card__stats">
            <span class="about-card__number">${u.number}</span>
            <span class="about-card__detail">${u.detail}</span>
          </div>
          <button class="about-card__button" data-feature-id="${u.id}">
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
    `).join("")}function a(u){const d=u.currentTarget,v=d.getBoundingClientRect();o={x:u.clientX-v.left,y:u.clientY-v.top},d.style.setProperty("--mouse-x",`${o.x}px`),d.style.setProperty("--mouse-y",`${o.y}px`)}function l(u){const d=parseInt(u.currentTarget.dataset.featureId);console.log("Клик по кнопке карточки ID:",d);const v=i.find(w=>w.id===d);if(!v){console.error("Данные для карточки не найдены");return}t||(t=z(document.body)),t.open(v)}function c(){document.querySelectorAll(".about-card").forEach(d=>{d.addEventListener("mouseenter",()=>{parseInt(d.dataset.id),d.classList.add("active")}),d.addEventListener("mouseleave",()=>{d.classList.remove("active")}),d.addEventListener("mousemove",a)}),document.querySelectorAll(".about-card__button").forEach(d=>{d.addEventListener("click",l)})}function s(){document.querySelectorAll(".about-card").forEach(d=>{d.removeEventListener("mouseenter",()=>{}),d.removeEventListener("mouseleave",()=>{}),d.removeEventListener("mousemove",a)}),document.querySelectorAll(".about-card__button").forEach(d=>{d.removeEventListener("click",l)}),t&&(t.destroy(),t=null)}try{console.log("Рендерим карточки..."),n(),console.log("Устанавливаем обработчики событий..."),c(),console.log("Инициализация About завершена успешно")}catch(u){console.error("Ошибка при инициализации About:",u)}return{cleanup:s}}document.addEventListener("DOMContentLoaded",()=>{D()});function D(){const e=document.getElementById("features"),o=document.getElementById("featuresVideo"),t=document.getElementById("soundToggleButton"),i=document.getElementById("volumeOffIcon"),n=document.getElementById("volumeOnIcon"),a=document.getElementById("buyButton"),l=document.getElementById("moreInfoButton");o&&(o.volume=.5,o.play().catch(c=>{console.log("Автовоспроизведение не удалось:",c)})),a&&a.addEventListener("click",ne),l&&l.addEventListener("click",re),t&&t.addEventListener("click",()=>oe(o,i,n)),window.addEventListener("scroll",()=>{ie(e,o,i,n)})}function oe(e,o,t){if(e)if(e.muted=!e.muted,e.muted){o.style.display="block",t.style.display="none";const i=document.getElementById("soundToggleButton");i&&i.setAttribute("aria-label","Включить звук")}else{e.volume=.5,o.style.display="none",t.style.display="block";const i=document.getElementById("soundToggleButton");i&&i.setAttribute("aria-label","Выключить звук")}}function ie(e,o,t,i){if(!e||!o||o.muted)return;const n=e.getBoundingClientRect();if(!(n.top<window.innerHeight&&n.bottom>0)){o.muted=!0,t.style.display="block",i.style.display="none";const l=document.getElementById("soundToggleButton");l&&l.setAttribute("aria-label","Включить звук")}}function ne(){window.open("https://www.aliexpress.com/item/1005007171465465.html?spm=a2g0o.store_pc_home.0.0.70583a88IDCuNJ&pdp_npi=4%40dis%21UAH%214%C2%A0485%2C21%20%D0%B3%D1%80%D0%BD.%211%C2%A0472%2C53%20%D0%B3%D1%80%D0%BD.%21%21%21767.45%21251.96%21%40211b498b17390151033607761d21d7%2112000039694115852%21sh%21UA%211927913003%21X","_blank","noopener,noreferrer")}function re(){const e=document.getElementById("features-r36s"),o=document.querySelector(".header");if(e&&o){const t=o.offsetHeight,i=e.getBoundingClientRect().top,n=window.scrollY||window.pageYOffset,a=i+n-t;window.scrollTo({top:a,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features-r36s`)}}function se(){console.log("Инициализация секции Categories");const e=document.querySelector(".categories__video"),o=document.querySelector(".categories__video-placeholder"),t=document.getElementById("categories"),i=document.querySelector(".categories__content"),n=document.querySelector(".categories__video-play"),a=document.querySelector(".categories__video-mute"),l=document.querySelector(".categories__video-slider"),c=document.querySelector(".categories__video-container"),s=document.querySelector(".categories__video-time span:first-child"),u=document.querySelector(".categories__video-time span:last-child");if(!t)return console.error("Секция Categories не найдена в DOM"),{};i||console.warn("Элемент categories__content не найден");let d=!1,v=!0,w=!1,y=!1;const S=h=>{if(isNaN(h)||h<0)return"0:00";const b=Math.floor(h/60),_=Math.floor(h%60);return`${b}:${_.toString().padStart(2,"0")}`};function m(){n&&(n.innerHTML=d?`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <rect x="6" y="4" width="4" height="16"></rect>
           <rect x="14" y="4" width="4" height="16"></rect>
         </svg>`:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <polygon points="5 3 19 12 5 21 5 3"></polygon>
         </svg>`)}function p(){a&&(a.innerHTML=v?`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
           <line x1="23" y1="9" x2="17" y2="15"></line>
           <line x1="17" y1="9" x2="23" y2="15"></line>
         </svg>`:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
           <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
           <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
         </svg>`)}function x(){if(!(!e||y)){if(d)e.pause(),d=!1;else{const h=e.play();if(h!==void 0){h.then(()=>{console.log("Воспроизведение видео успешно"),d=!0}).catch(b=>{console.warn("Не удалось воспроизвести видео:",b),d=!1}).finally(()=>{m()});return}else d=!0}m()}}function r(h){if(!e)return;for(;e.firstChild;)e.removeChild(e.firstChild);const b=document.createElement("source");b.src=h,b.type="video/mp4";const _=document.createTextNode("Your browser does not support the video tag.");e.appendChild(b),e.appendChild(_),e.load()}function g(){c&&(y=!0,e&&(e.style.display="none"),c.innerHTML=`
      <div class="categories__video-fallback" style="height: 300px; display: flex; align-items: center; justify-content: center; background: rgba(15, 23, 42, 0.8); border-radius: 24px;">
        <div style="text-align: center; padding: 20px;">
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin: 0 auto 20px;">
            <path d="M8 16l12-8-12-8v16z"></path>
          </svg>
          <p style="margin: 0; font-size: 16px;">Видео временно недоступно</p>
        </div>
      </div>
    `)}if(window.IntersectionObserver&&i)try{const h=new IntersectionObserver(b=>{b.forEach(_=>{_.isIntersecting?_.target.classList.add("animate-in"):e&&_.target===t&&(e.muted=!0,v=!0,p())})},{threshold:.1});h.observe(i),t&&h.observe(t)}catch(h){console.error("Ошибка при инициализации IntersectionObserver:",h),i&&i.classList.add("animate-in")}else i&&i.classList.add("animate-in");const f=["/video/categories/video_categories_.MP4","/public/video/categories/video_categories_.MP4","../video/categories/video_categories_.MP4","video_categories_.MP4"];function k(h){return new Promise(b=>{const _=setTimeout(()=>{console.log(`Превышено время ожидания для ${h}`),b(!1)},2e3);fetch(h,{method:"HEAD",cache:"no-cache"}).then(A=>{clearTimeout(_),A.ok?(console.log(`Видео доступно по пути: ${h}`),b(!0)):(console.log(`Видео недоступно по пути: ${h}, статус: ${A.status}`),b(!1))}).catch(A=>{clearTimeout(_),console.warn(`Ошибка при проверке пути ${h}:`,A),b(!1)})})}function E(){return C(this,null,function*(){for(const h of f)if(yield k(h))return h;return null})}return e?(console.log("Видео элемент найден:",e),e.muted=!0,e.loop=!0,e.playsInline=!0,e.addEventListener("loadedmetadata",()=>{try{console.log("Метаданные видео загружены"),w=!0,o&&(o.style.display="none"),e.style.display="block",l&&!isNaN(e.duration)&&(l.max=e.duration,u&&(u.textContent=S(e.duration)));const h=e.play();h!==void 0&&h.then(()=>{console.log("Автовоспроизведение видео успешно"),d=!0,m()}).catch(b=>{console.warn("Автовоспроизведение видео не поддерживается, не критично:",b),m()})}catch(h){console.error("Ошибка при обработке метаданных видео:",h)}}),e.addEventListener("timeupdate",()=>{try{l&&!isNaN(e.currentTime)&&(l.value=e.currentTime,s&&(s.textContent=S(e.currentTime)))}catch(h){console.error("Ошибка при обновлении времени видео:",h)}}),e.addEventListener("error",h=>{console.error("Ошибка при загрузке видео:",h),w||E().then(b=>{b?(console.log("Найден работающий путь к видео:",b),r(b)):(console.error("Ни один из путей к видео не работает"),g())})}),setTimeout(()=>{!w&&!y&&(console.log("Видео не загрузилось автоматически, ищем работающий путь"),E().then(h=>{h?(console.log("Найден работающий путь к видео:",h),r(h)):(console.error("Ни один из путей к видео не работает"),g())}))},2e3)):(console.error("Видео элемент не найден в DOM"),g()),n&&n.addEventListener("click",h=>{h.stopPropagation(),x()}),a&&a.addEventListener("click",h=>{h.stopPropagation(),e&&(v=!v,e.muted=v,p())}),l&&l.addEventListener("input",h=>{if(e)try{const b=parseFloat(h.target.value);isNaN(b)||(e.currentTime=b)}catch(b){console.error("Ошибка при изменении времени видео:",b)}}),c&&c.addEventListener("click",h=>{h.target.closest(".categories__video-controls")||x()}),m(),p(),t&&t.classList.add("initialized"),{togglePlay:x,cleanup:()=>{e&&(e.pause(),e.removeAttribute("src"),e.load())}}}function T(){const e=document.querySelectorAll(".accordion__item");if(e.length===0){console.warn("FAQ аккордеон: элементы не найдены");return}console.log(`FAQ аккордеон: найдено ${e.length} вопросов`);const o=(i=null)=>{e.forEach(n=>{n!==i&&n.classList.contains("active")&&n.classList.remove("active")})};e.forEach(i=>{const n=i.querySelector(".accordion__header"),a=i.querySelector(".accordion__toggle"),l=i.querySelector(".accordion__content");if(!n||!a||!l){console.warn("FAQ аккордеон: структура элемента неполная",i);return}i===e[0]&&setTimeout(()=>{a.classList.add("pulse"),setTimeout(()=>{a.classList.remove("pulse")},1500)},1e3);const c=v=>{if(v.preventDefault(),v.stopPropagation(),a.classList.add("clicked"),setTimeout(()=>a.classList.remove("clicked"),300),i.classList.contains("active")){i.classList.remove("active");return}o(i),i.classList.add("active");const w=n.getBoundingClientRect();w.top>=10&&w.bottom<=window.innerHeight-10||setTimeout(()=>{window.scrollTo({top:window.scrollY+w.top-100,behavior:"smooth"})},100)};n.addEventListener("click",c),a.addEventListener("click",v=>{v.stopPropagation(),c(v)});const s=`faq-question-${Math.random().toString(36).substring(2,9)}`,u=`faq-answer-${Math.random().toString(36).substring(2,9)}`;n.setAttribute("id",s),n.setAttribute("aria-expanded","false"),n.setAttribute("aria-controls",u),l.setAttribute("id",u),l.setAttribute("aria-labelledby",s),l.setAttribute("role","region"),l.setAttribute("hidden","true"),new MutationObserver(v=>{v.forEach(w=>{if(w.type==="attributes"&&w.attributeName==="class"){const y=i.classList.contains("active");n.setAttribute("aria-expanded",y?"true":"false"),y?l.removeAttribute("hidden"):setTimeout(()=>{i.classList.contains("active")||l.setAttribute("hidden","true")},500)}})}).observe(i,{attributes:!0})});const t=i=>{if(i.key==="Escape"){o();return}const n=document.activeElement.closest(".accordion__item");if(!n)return;const a=Array.from(e),l=a.indexOf(n);if(l===-1)return;let c;switch(i.key){case"ArrowDown":c=(l+1)%a.length;break;case"ArrowUp":c=(l-1+a.length)%a.length;break;case"Home":c=0;break;case"End":c=a.length-1;break;default:return}const s=a[c].querySelector(".accordion__header");s&&(s.focus(),i.preventDefault())};return document.addEventListener("keydown",t),console.log("FAQ аккордеон успешно инициализирован"),{openItem:i=>{i>=0&&i<e.length&&(o(e[i]),e[i].classList.add("active"))},closeAll:()=>o()}}typeof window!="undefined"&&(document.addEventListener("DOMContentLoaded",()=>{window.faqAccordeon=T()}),window.initFaqAccordion=T);function ae(){const e=document.getElementById("articles");if(!e){console.warn("Секция Articles не найдена в DOM, пробуем найти с другим id");const s=document.querySelector(".articles")||document.querySelector('section[id^="articles"]')||document.querySelector("section.articles");if(!s){console.error("Не удалось найти секцию Articles в DOM никаким способом"),console.debug("Структура DOM:",document.body.innerHTML);return}s.id||(s.id="articles"),console.log("Найден альтернативный элемент для секции Articles:",s)}console.log("Инициализация секции Articles с SEO-оптимизацией");const o=[{id:1,title:"R36S: The Ultimate Handheld Gaming Console for Retro Gaming Enthusiasts",sections:[{subtitle:"R36S: The Ultimate Handheld Gaming Console for Retro Gaming Enthusiasts",content:"Welcome to the official home of the <strong>R36S handheld gaming console</strong>. The R36S has quickly become the go-to device for retro gaming enthusiasts across the <em>United States</em>, <em>United Kingdom</em>, and <em>Australia</em>. This powerful portable gaming system offers an exceptional combination of performance, versatility, and value that puts other retro consoles to shame. Whether you're reliving childhood classics or discovering retro gems for the first time, the <mark>R36S console</mark> delivers an unmatched gaming experience. Many gamers compare the <span>R36S vs Anbernic</span> models and consistently find that the R36S offers superior features at a more competitive price point. Ready to elevate your portable gaming experience? The R36S is now available for purchase online with special promotional pricing for a limited time."},{subtitle:"Comprehensive R36S Review: Performance That Exceeds Expectations",content:'After extensive testing, our <strong>R36S review</strong> confirms what many gamers have discovered – this console punches well above its weight class. The <mark>R36S emulator performance</mark> is particularly impressive, handling everything from 8-bit classics to more demanding 32-bit titles with remarkable smoothness. Games load quickly and run without the lag or frame drops that plague lesser devices. The <strong>R36S specs</strong> include a powerful processor paired with ample RAM that ensures consistent performance across various emulation platforms. What truly sets the R36S console apart in our review is its ability to handle multiple emulation systems without compromising on quality. Unlike competitors in the same price range, the R36S maintains excellent performance even with graphically intensive games. Players across <em>North America</em> and <em>Europe</em> have shared <mark>R36S reviews</mark> praising its reliable performance during extended gaming sessions. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Gaming Console" target="_blank" rel="nofollow">Order your R36S today</a> to experience this exceptional performance firsthand at our special online price.'},{subtitle:"How to Install Games on R36S: Simple Setup for Maximum Fun",content:`Learning <strong>how to install ROMs on R36S</strong> is refreshingly straightforward. The console's user-friendly interface makes the process accessible even for those new to retro gaming handhelds. First, you'll need to format a microSD card (up to 512GB supported) using your computer. Then, download your preferred game files and organize them in folders corresponding to each console type. After inserting the card into your R36S, the built-in menu system automatically detects and categorizes your games for easy access. The <mark>R36S setup guide</mark> included with every purchase walks you through this process with clear, step-by-step instructions. Additionally, the R36S console supports various file formats, eliminating compatibility headaches common with other devices. Customers in <em>Canada</em>, <em>Australia</em>, and throughout <em>Europe</em> appreciate how the R36S simplifies the game installation process. Need more guidance? The complete <strong>R36S setup guide</strong> is available on our website, along with video tutorials. Don't miss our current sale price on the R36S – <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Now" target="_blank" rel="nofollow">order now</a> while supplies last!`},{subtitle:"R36S Specifications: Hardware That Delivers Premium Gaming Experience",content:"The impressive <strong>R36S specifications</strong> explain why this console has garnered such positive attention. At its heart, the R36S boasts a quad-core processor clocked at 1.5GHz, paired with 1GB of DDR3 RAM for smooth multitasking. The <mark>R36S screen resolution</mark> of 640x480 on its 3.5-inch IPS display delivers crisp visuals with excellent color reproduction and wide viewing angles. This display quality significantly enhances the gaming experience, particularly for pixel-art classics. The <strong>R36S battery life</strong> extends to an impressive 6-8 hours of continuous play on a single charge, with charging time of approximately 2-3 hours via the USB-C port. Storage options are flexible, with support for microSD cards up to 512GB, allowing an extensive game library. The <mark>R36S controller layout</mark> features a responsive D-pad, dual analog sticks, four action buttons, and shoulder triggers that provide precise control across different game genres. Available in multiple colors, the R36S is currently offered at a special promotional price in the <em>UK</em>, <em>USA</em>, and throughout <em>Asia</em>. Check our website for the current <strong>R36S price</strong> and available discount offers."},{subtitle:"Best Games for R36S: Thousands of Classics at Your Fingertips",content:`The <strong>R36S console</strong> truly shines when loaded with the best games that showcase its capabilities. The system excels at running 8-bit and 16-bit classics from Nintendo, Sega, and other iconic platforms with perfect emulation. More impressively, the R36S handles PlayStation 1 titles with remarkable fidelity, maintaining smooth framerates even in 3D games. Fighting game enthusiasts praise the <mark>R36S controller layout</mark> and responsive buttons, which make titles like Street Fighter and King of Fighters a joy to play. RPG fans can enjoy lengthy adventures like Final Fantasy and Chrono Trigger with the benefit of the extended <strong>R36S battery life</strong>. The console's excellent <mark>R36S sound quality</mark> and speakers deliver immersive audio, though many users opt for headphones for the full experience. The R36S firmware supports save states across all emulators, allowing you to pause and resume your progress at any time. Gamers in <em>Mexico</em>, <em>Brazil</em>, and across <em>South America</em> have particularly embraced the R36S for its extensive game compatibility. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Gaming Console" target="_blank" rel="nofollow">Order your R36S today</a> from our official online store to receive exclusive bonus content and take advantage of our current sale price.`},{subtitle:"A Unique Gaming Experience with R36S",content:`The <strong>R36S</strong> has garnered attention for its impressive gaming library, housing over 15,000 titles in the 64GB model and expanding to approximately 20,000 games in the 128GB version. This comprehensive collection spans across several iconic gaming platforms, including: <ul><li><strong>Nintendo Entertainment System (NES)</strong></li><li><strong>Super Nintendo Entertainment System (SNES)</strong></li><li><strong>Sega Genesis</strong></li><li><strong>PlayStation 1</strong></li><li><strong>Nintendo 64</strong></li><li><strong>Game Boy Advance</strong></li><li><strong>Nintendo DS</strong></li><li><strong>PlayStation Portable (PSP)</strong></li></ul><p>This extraordinary compilation allows enthusiasts to journey through the golden era of gaming across multiple legendary platforms, all within a single portable device.</p><p class="article__highlight"><strong>R36S Standout Gaming Experiences</strong><br>While the device offers thousands of nostalgic adventures, certain masterpieces particularly shine through:<ul><li><strong>Super Mario Bros.</strong> (NES): The revolutionary platformer that defined an entire genre and laid the groundwork for countless games to follow.</li><li><strong>The Legend of Zelda: A Link to the Past</strong> (SNES): A timeless adventure that masterfully combines puzzle-solving, exploration, and combat into an unforgettable experience.</li><li><strong>Sonic the Hedgehog</strong> (Sega Genesis): Sega's signature blue speedster that challenged Nintendo's dominance with its distinctive fast-paced gameplay.</li><li><strong>Final Fantasy VII</strong> (PlayStation 1): The groundbreaking RPG that transformed video game storytelling with its complex characters and emotional narrative.</li><li><strong>Super Mario 64</strong> (Nintendo 64): The trailblazing 3D platformer that revolutionized how players interact with virtual worlds.</li><li><strong>Pokémon FireRed</strong> (Game Boy Advance): The beloved reimagining of the original Pokémon Red, enhanced with additional features and improved graphics.</li><li><strong>Mario Kart DS</strong> (Nintendo DS): An exhilarating racing experience offering endless entertainment through its inventive tracks and competitive multiplayer.</li><li><strong>God of War: Chains of Olympus</strong> (PSP): An action-packed epic showcasing the impressive capabilities of Sony's handheld console.</li></ul>These highlighted gems represent merely a glimpse into the vast array of quality titles available on the <mark>R36S</mark>, catering to diverse gaming preferences from casual play to hardcore challenges.</p>`},{subtitle:"R36S Firmware Update Guide: Keeping Your Console at Peak Performance",content:`Maintaining the latest <strong>R36S firmware</strong> ensures you'll enjoy optimal performance and access to the newest features. The <mark>R36S firmware update</mark> process is straightforward and user-friendly. Begin by downloading the latest firmware package from our official website. Then, place the file in the root directory of your microSD card. After inserting the card into your powered-off R36S, hold the select button while powering on the device to enter update mode. The console will automatically detect and install the new firmware, typically completing in 2-3 minutes. Each <strong>R36S firmware update</strong> brings performance optimizations, new emulators, and interface improvements. Following the update, the <mark>R36S user manual</mark> recommends recalibrating your controls for the best gaming experience. Our technical support team, available to customers worldwide including <em>Japan</em>, <em>South Korea</em>, and across <em>Europe</em>, can assist with any firmware update questions. Subscribe to our newsletter for notifications about new R36S firmware releases and special offers on accessories. Don't miss our <a href="https://www.aliexpress.com/item/1005007171465465.html" title="R36S Limited Time Promotion" target="_blank" rel="nofollow">limited-time promotion</a> with discounted pricing on the R36S console and accessory bundles.`}]},{id:2,title:"R36S Official Website - The Ultimate Gaming Experience at Your Fingertips",sections:[{subtitle:"R36S Official Website - The Ultimate Gaming Experience at Your Fingertips",content:"Welcome to the <strong>R36S Official Website</strong>, your premier destination for cutting-edge handheld gaming technology. Our revolutionary gaming console has transformed the portable gaming landscape, offering unprecedented performance in a sleek, ergonomic design. The <mark>R36S</mark> combines powerful hardware with intuitive controls to deliver an immersive gaming experience wherever you go. Whether you're a casual gamer or a dedicated enthusiast, the <strong>R36S game console</strong> provides the perfect balance of power, portability, and playability. Discover why gamers across <em>North America</em>, <em>Europe</em>, and <em>Asia</em> are choosing the R36S as their preferred handheld gaming device. Continue reading to learn about our exclusive features, technical specifications, and why the R36S stands apart from other gaming consoles on the market today."},{subtitle:"Discover the Revolutionary R36S Handheld Gaming Experience",content:'The <strong>R36S handheld</strong> represents the next generation of portable gaming technology. Unlike conventional gaming devices, the R36S handheld features an advanced cooling system that prevents overheating during extended gaming sessions. Additionally, the vibrant high-resolution display ensures crystal-clear visuals even in bright outdoor conditions. Moreover, the <mark>R36S game console</mark> includes customizable controls that adapt to your unique gaming style. Furthermore, the lightweight yet durable construction makes the R36S perfect for gaming on the go. Meanwhile, the extended battery life keeps you playing for hours without interruption. Subsequently, the intuitive user interface makes navigating between games and settings effortless. In contrast to other portable systems, the <strong>R36S handheld</strong> offers exceptional value without compromising on quality. Consequently, gamers in the <em>United Kingdom</em>, <em>Australia</em>, and <em>Canada</em> can <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Online" target="_blank" rel="nofollow">order online</a> and experience the difference today. However, limited-time promotional pricing makes this the ideal time to purchase your R36S game console.'},{subtitle:"Unmatched Performance in the R36S Game Console",content:"The heart of the <strong>R36S game console</strong> lies in its powerful processing capabilities. Specifically, the custom-designed CPU and GPU combination delivers desktop-quality graphics in a handheld format. In particular, the advanced thermal management system prevents throttling during intensive gaming sessions. Similarly, the high-speed RAM ensures smooth multitasking between games and applications. Likewise, the expandable storage options allow you to carry your entire game library wherever you go. Certainly, the <mark>R36S handheld's</mark> performance metrics exceed industry standards in its price range. Nevertheless, the energy-efficient design maintains battery life without sacrificing processing power. Above all, the <strong>R36S game console's</strong> architecture supports both retro classics and modern gaming experiences. Therefore, gamers looking for performance and versatility consistently choose the R36S. Indeed, retailers across <em>Germany</em>, <em>France</em>, and <em>Japan</em> report steadily increasing demand for this innovative gaming device. Finally, manufacturer specifications confirm that the R36S outperforms competing handhelds costing significantly more."},{subtitle:"Enhanced Gaming Experience with the R36S Handheld's Exclusive Features",content:"The <strong>R36S handheld</strong> comes equipped with numerous exclusive features designed to enhance your gaming experience. First, the haptic feedback system provides immersive tactile responses that correspond with in-game actions. Second, the adjustable performance modes allow you to prioritize either graphical fidelity or battery conservation. Third, the integrated voice chat functionality eliminates the need for external communication devices. Fourth, the customizable RGB lighting adds a personal touch to your gaming setup. Fifth, the quick-resume feature lets you instantly return to your game after a break. Sixth, the dedicated streaming mode optimizes performance for content creators. Meanwhile, the brand's commitment to quality ensures each <mark>R36S game console</mark> meets rigorous standards before shipping. As a result, customers in <em>Spain</em>, <em>Italy</em>, and <em>South Korea</em> can shop confidently knowing they're receiving a premium product. Consequently, the history of the brand demonstrates consistent innovation in the gaming sector. Therefore, the manufacturer continues to support the R36S with regular firmware updates and expanded compatibility."},{subtitle:"Why Gamers Worldwide Choose the R36S Official Website for Their Gaming Needs",content:"The <strong>R36S Official Website</strong> offers distinct advantages for discerning gamers seeking the ultimate handheld experience. Primarily, exclusive online-only configurations provide enhanced specifications unavailable through retail channels. Additionally, direct purchases from the <mark>R36S Official Website</mark> include extended warranty coverage at no additional cost. Furthermore, members of the official online community gain early access to firmware updates and beta features. Moreover, the official online store frequently offers promotional pricing unavailable elsewhere. Consequently, the <strong>R36S game console</strong> purchased directly from the manufacturer includes premium accessories in standard packages. Subsequently, customers in <em>Brazil</em>, <em>Mexico</em>, and <em>India</em> benefit from regionalized payment options and shipping methods. Meanwhile, the brand's commitment to customer satisfaction has established a loyal following in competitive gaming circles. In essence, the <mark>R36S handheld</mark> represents not just a product but an entire ecosystem of gaming innovation. Therefore, visiting the <span>R36S Official Website</span> remains the optimal way to experience everything this revolutionary console offers. Indeed, the manufacturer's direct sales model ensures authenticity and full support for every purchased device."},{subtitle:"The Future of Gaming with the R36S Official Website and Upcoming Innovations",content:"The <strong>R36S Official Website</strong> stands as the definitive source for information about upcoming innovations in the R36S ecosystem. Primarily, the <mark>R36S game console's</mark> modular design allows for future hardware expansions without requiring a completely new device. Additionally, the development team is actively working on cloud gaming integration to further expand the available game library. Furthermore, the <strong>R36S handheld</strong> will soon support cross-platform multiplayer with major gaming systems. Moreover, announced accessories will enhance the versatility of the base R36S game console for specialized gaming genres. Consequently, early adopters of the R36S platform will benefit from a continuously evolving gaming experience. Subsequently, the price point remains competitive despite these substantial additions to functionality. Meanwhile, the brand continues to expand its presence in emerging markets including <em>Southeast Asia</em> and <em>Eastern Europe</em>. Therefore, the <mark>R36S handheld</mark> represents not just current gaming technology but a future-proof investment. In conclusion, whether you're looking to purchase your first R36S or upgrade from a previous model, the <span>R36S Official Website</span> offers the most comprehensive information and purchase options. Indeed, as the gaming landscape evolves, the <strong>R36S game console</strong> evolves with it, maintaining its position at the forefront of handheld gaming innovation."},{subtitle:"Why Choose the R36S: Value, Performance, and Community Support",content:`The <strong>R36S</strong> has established itself as the preferred choice for discerning retro gamers for several compelling reasons. When conducting an <span>R36S vs Anbernic comparison</span>, the R36S consistently offers better specifications at a more competitive price point. The <mark>R36S price</mark> and value for money is unmatched in the portable retro gaming market, delivering premium features without the premium cost. The <strong>R36S portable gaming console</strong> features extend beyond mere hardware specifications – the active community of users continues to develop custom firmware, game ports, and utilities that expand the system's capabilities. The <mark>R36S emulator performance</mark> receives regular optimizations through community contributions, ensuring that even the most demanding games run smoothly. The <strong>R36S handheld gaming console review</strong> scores consistently highlight the device's exceptional build quality, with a solid feel that withstands the rigors of portable gaming. Customers across <em>North America</em>, <em>Europe</em>, <em>Australia</em>, and <em>Asia</em> have made the R36S their go-to retro gaming solution. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Order R36S Official" target="_blank" rel="nofollow">Order your R36S today</a> from our official website to join this passionate community and take advantage of our current promotional pricing, exclusive bundles, and free worldwide shipping on orders over $100.`},{subtitle:"Welcome to the R36S Official Store",content:`Discover premium products at the <strong>R36S official store</strong>, your ultimate destination for authentic R36S merchandise. Our official store offers an extensive selection of cutting-edge devices designed to enhance your daily experience. Looking to buy <strong>R36S products</strong> at the best price? The <strong>R36S official store</strong> delivers exceptional value with regular promotions and sales events. <mark>Order online today</mark> and experience the convenience of worldwide shipping from the R36S official store. Our team is dedicated to providing superior customer service, ensuring your shopping experience exceeds expectations. Whether you're searching for the latest releases or popular bestsellers, the <strong>R36S official store</strong> has everything you need. Check out our current <span>special offers</span> and take advantage of exclusive deals available only at the R36S official store. With secure payment options and fast delivery, shopping at the <strong>R36S official store</strong> is both safe and convenient. Join thousands of satisfied customers who trust the R36S official store for authentic products and unmatched quality. Visit our website now or contact our support team to learn more about where to buy R36S products. The <strong>R36S official store</strong> ships to major regions including <em>North America</em>, <em>Europe</em>, <em>Asia</em>, and <em>Australia</em>, making our premium products accessible to customers worldwide. <a href="https://www.aliexpress.com/item/1005007171465465.html" title="Visit R36S Official Store" target="_blank" rel="nofollow">Shop at the R36S official store today</a> and experience the difference that quality products and exceptional service can make.`}]}],t=e.querySelector(".articles__grid");if(!t){console.error("Элемент .articles__grid не найден в секции Articles");return}(()=>{if(!document.querySelector('meta[name="description"]')){const s=document.createElement("meta");s.name="description",s.content="R36S - The Ultimate Handheld Gaming Console for Retro Gaming. Official website with specifications, reviews, and purchase options.",document.head.appendChild(s)}if(!document.querySelector('meta[name="keywords"]')){const s=document.createElement("meta");s.name="keywords",s.content="R36S, retro gaming, handheld console, portable gaming, R36S specs, R36S review, retro games, emulator, gaming device",document.head.appendChild(s)}})();const n=[];o.forEach(s=>{const u=document.createElement("article");u.className="article",u.id=`article-${s.id}`,u.dataset.articleId=s.id,u.style.opacity="0",u.style.transform="translateY(20px)",u.style.transition="all 0.6s ease-out",u.setAttribute("itemscope",""),u.setAttribute("itemtype","http://schema.org/Article");const d=document.createElement("h2");d.className="article__title",d.setAttribute("itemprop","headline"),d.innerHTML=s.title,u.appendChild(d);const v=document.createElement("div");v.className="article__content-wrapper",v.setAttribute("itemprop","articleBody"),s.sections.forEach((p,x)=>{const r=document.createElement("section");if(r.className="article__section",r.id=`section-${s.id}-${x}`,x!==0||p.subtitle!==s.title){const f=document.createElement("h3");f.className="article__subtitle",f.innerHTML=p.subtitle,r.appendChild(f)}const g=document.createElement("div");g.className="article__content",g.innerHTML=p.content,r.appendChild(g),v.appendChild(r)}),u.appendChild(v);const w=document.createElement("script");w.type="application/ld+json";const y={"@context":"https://schema.org","@type":"Article",headline:s.title,description:s.sections[0].content.substring(0,150)+"...",keywords:"R36S, retro gaming, handheld console, portable gaming",author:{"@type":"Organization",name:"R36S Official"},publisher:{"@type":"Organization",name:"R36S",logo:{"@type":"ImageObject",url:"/assets/images/r36s-logo.png"}},datePublished:new Date().toISOString(),dateModified:new Date().toISOString()};w.textContent=JSON.stringify(y),u.appendChild(w);const S=document.createElement("footer");S.className="article__footer";const m=document.createElement("a");m.href="https://www.aliexpress.com/item/1005007171465465.html",m.className="article__cta",m.textContent="Order R36S Now",m.setAttribute("itemprop","url"),m.setAttribute("title","Order R36S Gaming Console"),m.setAttribute("rel","nofollow"),m.setAttribute("target","_blank"),S.appendChild(m),u.appendChild(S),t.appendChild(u),n.push(u)});const a=()=>{if("IntersectionObserver"in window){const s=new IntersectionObserver(u=>{u.forEach(d=>{d.isIntersecting&&(d.target.style.opacity=1,d.target.style.transform="translateY(0)",s.unobserve(d.target))})},{threshold:.1});n.forEach(u=>{s.observe(u)})}else n.forEach(s=>{s.style.opacity=1,s.style.transform="translateY(0)"}),console.warn("IntersectionObserver не поддерживается. Анимация появления отключена.")};(()=>{const s=document.createElement("nav");s.className="articles__breadcrumbs",s.setAttribute("aria-label","Breadcrumbs"),s.setAttribute("itemscope",""),s.setAttribute("itemtype","https://schema.org/BreadcrumbList");const u=document.createElement("ol");u.className="breadcrumbs__list";const d=document.createElement("li");d.className="breadcrumbs__item",d.setAttribute("itemprop","itemListElement"),d.setAttribute("itemscope",""),d.setAttribute("itemtype","https://schema.org/ListItem");const v=document.createElement("span");v.className="breadcrumbs__link",v.setAttribute("itemprop","item"),v.innerHTML='<span itemprop="name">Home</span>',d.appendChild(v);const w=document.createElement("meta");w.setAttribute("itemprop","position"),w.content="1",d.appendChild(w);const y=document.createElement("li");y.className="breadcrumbs__item",y.setAttribute("itemprop","itemListElement"),y.setAttribute("itemscope",""),y.setAttribute("itemtype","https://schema.org/ListItem");const S=document.createElement("span");S.className="breadcrumbs__current",S.setAttribute("itemprop","name"),S.textContent="R36S Gaming Console",y.appendChild(S);const m=document.createElement("meta");m.setAttribute("itemprop","position"),m.content="2",y.appendChild(m),u.appendChild(d),u.appendChild(y),s.appendChild(u),e.querySelector(".articles__container").insertBefore(s,t)})(),(()=>{const s=document.createElement("h1");s.className="articles__heading",s.textContent="R36S Gaming Console - Official Information",e.querySelector(".articles__container").insertBefore(s,e.querySelector(".articles__breadcrumbs"))})(),setTimeout(()=>{T()},500),setTimeout(a,100),console.log("Инициализация секции Articles завершена успешно")}function le(){const e="/R36S_STORE_JS/",t={review1:{webp:`${e}img/reviews/imm_1_1x.webp`,jpg:`${e}img/reviews/imm_1_1x.jpg`},review2:{webp:`${e}img/reviews/imm_2_1x.webp`,jpg:`${e}img/reviews/imm_2_1x.jpg`},review3:{webp:`${e}img/reviews/imm_3_1x.webp`,jpg:`${e}img/reviews/imm_3_1x.jpg`},review4:{webp:`${e}img/reviews/imm_4_1x.webp`,jpg:`${e}img/reviews/imm_4_1x.jpg`}},i=[{id:1,rating:5,color:"Purple 64GB",author:"AliExpress Shopper",date:"21 Aug 2024",text:"I just got my hands on the R36S retro console and it's seriously amazing for old-school gaming. The screen is super clear, it runs games smoothly, and battery life is solid. I love how I can load up my favorite classics and play...",images:{webp:t.review1.webp,jpeg:t.review1.jpg},helpful:12,verified:!0},{id:2,rating:5,color:"Yellow 128G",author:"V***h",date:"26 Aug 2024",text:"After playing with the R36S for a week, I'm really impressed and absolutely delighted. The build quality feels great, and switching between different retro games is super easy. The controls are comfortable for long gaming sessions.",images:{webp:t.review4.webp,jpeg:t.review4.jpg},helpful:8,verified:!0},{id:3,rating:5,color:"White 64GB",author:"M***z",date:"22 Aug 2024",text:"The R36S has become my go-to gaming device. I wasn't sure about buying another retro console, but this one surprised me. The screen is bright and sharp, games run without issues, and it's small enough to fit in my pocket.",images:{webp:t.review3.webp,jpeg:t.review3.jpg},helpful:15,verified:!0},{id:4,rating:5,color:"Black 128GB",author:"K***r",date:"28 Aug 2024",text:"I've been using the R36S for a few weeks now, and I'm genuinely impressed. The 3.5-inch IPS screen delivers crisp visuals, and the build quality feels solid. The dual analog sticks are responsive, making retro gaming a joy.",images:{webp:t.review2.webp,jpeg:t.review2.jpg},helpful:10,verified:!0,mobileOnly:!0}],n=new Set;let a=null,l=window.innerWidth<=1200;function c(r=!1){const g=document.createElementNS("http://www.w3.org/2000/svg","svg");g.classList.add("review-card__star"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill",r?"currentColor":"none"),g.setAttribute("stroke","currentColor"),g.setAttribute("stroke-width","2");const f=document.createElementNS("http://www.w3.org/2000/svg","polygon");return f.setAttribute("points","12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"),g.appendChild(f),g}function s(){const r=document.createElementNS("http://www.w3.org/2000/svg","svg");r.classList.add("review-card__verified"),r.setAttribute("width","16"),r.setAttribute("height","16"),r.setAttribute("viewBox","0 0 24 24"),r.setAttribute("fill","none"),r.setAttribute("stroke","currentColor"),r.setAttribute("stroke-width","2");const g=document.createElementNS("http://www.w3.org/2000/svg","path");return g.setAttribute("d","M20 6L9 17l-5-5"),r.appendChild(g),r}function u(r){const g=document.getElementById("reviewCardTemplate");if(!g)return console.error("Шаблон карточки отзыва не найден"),null;const f=g.content.cloneNode(!0).querySelector(".review-card");f.dataset.id=r.id,r.mobileOnly&&(f.classList.add("mobile-only"),l||(f.style.display="none"));const k=f.querySelector(".review-card__rating");for(let A=0;A<5;A++)k.appendChild(c(A<r.rating));f.querySelector(".review-card__variant").textContent=r.color,f.querySelector(".review-card__text").textContent=r.text;const E=f.querySelector("picture");E.querySelector("source").setAttribute("srcset",r.images.webp);const h=E.querySelector("img");h.setAttribute("src",r.images.jpeg),h.setAttribute("alt",`Review ${r.id}`);const b=f.querySelector(".review-card__name");r.verified&&b.prepend(s()),b.appendChild(document.createTextNode(r.author)),f.querySelector(".review-card__date").textContent=r.date,f.querySelector(".review-card__helpful-count").textContent=`Helpful (${r.helpful})`,f.addEventListener("click",d),f.addEventListener("mouseenter",()=>v(r.id)),f.addEventListener("mouseleave",w);const _=f.querySelector(".review-card__helpful");return _.addEventListener("mouseenter",()=>{_.querySelector("svg").setAttribute("fill","currentColor"),_.querySelector("svg").classList.add("scale-125"),_.querySelector("svg").classList.remove("scale-100")}),_.addEventListener("mouseleave",()=>{_.querySelector("svg").setAttribute("fill","none"),_.querySelector("svg").classList.remove("scale-125"),_.querySelector("svg").classList.add("scale-100")}),f}function d(){window.open("https://www.aliexpress.com/item/1005007226123844.html#feedback","_blank","noopener,noreferrer")}function v(r){a=r;const g=document.querySelector(`.review-card[data-id="${r}"]`);if(g){const f=g.querySelector(".review-card__arrow-wrapper");f&&(f.style.display="flex")}}function w(){const r=document.querySelector(`.review-card[data-id="${a}"]`);if(r){const g=r.querySelector(".review-card__arrow-wrapper");g&&(g.style.display="none")}a=null}function y(){const r=document.getElementById("reviewsGrid");if(!r){console.error("Контейнер для отзывов не найден");return}const g=document.getElementById("reviewCardTemplate"),f={};r.querySelectorAll(".review-card").forEach(h=>{h.dataset.id&&(f[h.dataset.id]=h)});const k=i.filter(h=>!h.mobileOnly||h.mobileOnly&&l),E=[];k.forEach(h=>{if(f[h.id]){const b=f[h.id];b.style.display="block",E.push(b),delete f[h.id]}else{const b=u(h);b&&E.push(b)}}),Object.values(f).forEach(h=>{h!==g&&(h.style.display="none")}),r.innerHTML="",r.appendChild(g),E.forEach(h=>{r.appendChild(h)}),S()}function S(){if(!("IntersectionObserver"in window)){console.warn("IntersectionObserver не поддерживается в этом браузере"),document.querySelectorAll(".review-card").forEach(g=>{g.classList.add("animate-in")});return}const r=new IntersectionObserver(g=>{g.forEach(f=>{if(f.isIntersecting){const k=f.target.dataset.id;n.has(k)||(f.target.classList.add("animate-in"),n.add(k))}})},{threshold:.1});document.querySelectorAll(".review-card").forEach(g=>{r.observe(g)})}function m(){l=window.innerWidth<=1200,y(),document.querySelectorAll(".review-card").forEach(g=>{g.classList.contains("mobile-only")&&(g.style.display=l?"block":"none")})}function p(){y();let r;const g=()=>{clearTimeout(r),r=setTimeout(m,250)};window.addEventListener("resize",g);const f=document.createElement("style");f.textContent=`
      .review-card {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.6s ease, transform 0.6s ease;
      }
      .review-card.animate-in {
        opacity: 1;
        transform: translateY(0);
      }
    `,document.head.appendChild(f),setTimeout(m,100);const k=document.getElementById("reviews");if(k&&!k.hasAttribute("itemscope")){k.setAttribute("itemscope",""),k.setAttribute("itemtype","http://schema.org/Product");const E=document.createElement("meta");E.setAttribute("itemprop","name"),E.setAttribute("content","R36S Handheld Game Console"),k.prepend(E);const h=document.createElement("meta");h.setAttribute("itemprop","description"),h.setAttribute("content","R36S Handheld Game Console with 3.5-inch IPS screen and retro games"),k.prepend(h)}}p();function x(){if(window.removeEventListener("resize",m),window.removeEventListener("resize",()=>{}),"IntersectionObserver"in window){const r=[];new IntersectionObserver(()=>{}).disconnect(),r.forEach(f=>f.disconnect())}document.querySelectorAll(".review-card").forEach(r=>{r.removeEventListener("click",d),r.removeEventListener("mouseenter",()=>{}),r.removeEventListener("mouseleave",w),Object.keys(i).forEach(f=>{r.removeEventListener("mouseenter",()=>v(f))});const g=r.querySelector(".review-card__helpful");g&&(g.removeEventListener("mouseenter",()=>{}),g.removeEventListener("mouseleave",()=>{}))}),console.log("Reviews section cleanup completed")}return{cleanup:x,renderReviewCards:y}}const P={"phone-call":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>',mail:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>',"map-pin":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>',"message-circle":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"></path></svg>',send:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-send"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>',"alert-circle":'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-alert-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>',loader:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-loader animate-spin"><line x1="12" x2="12" y1="2" y2="6"></line><line x1="12" x2="12" y1="18" y2="22"></line><line x1="4.93" x2="7.76" y1="4.93" y2="7.76"></line><line x1="16.24" x2="19.07" y1="16.24" y2="19.07"></line><line x1="2" x2="6" y1="12" y2="12"></line><line x1="18" x2="22" y1="12" y2="12"></line><line x1="4.93" x2="7.76" y1="19.07" y2="16.24"></line><line x1="16.24" x2="19.07" y1="7.76" y2="4.93"></line></svg>'};function L(e,o=24){return P[e]?P[e].replace(/width="24"/,`width="${o}"`).replace(/height="24"/,`height="${o}"`):(console.error(`Icon "${e}" not found`),"")}function ce(){console.log("Инициализация секции Contact");const e=document.querySelector(".contact__form"),o=document.getElementById("name"),t=document.getElementById("email"),i=document.getElementById("phone"),n=document.getElementById("message"),a=document.querySelector(".form__button"),l=document.createElement("div");l.className="form__error",l.style.display="none",l.innerHTML=`
    <div class="form__error-icon">${L("alert-circle",16)}</div>
    <span></span>
  `,e.insertBefore(l,e.firstChild);const c={name:"",email:"",phone:"",message:""};function s(y){l.querySelector("span").textContent=y,l.style.display="flex"}function u(){l.style.display="none"}function d(y){const{name:S,value:m}=y.target;c[S]=m,u()}o.addEventListener("input",d),t.addEventListener("input",d),i.addEventListener("input",d),n.addEventListener("input",d);function v(y){return C(this,null,function*(){y.preventDefault(),w(!0);try{if(!c.name||!c.email||!c.phone||!c.message)throw new Error("Please fill in all fields");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.email))throw new Error("Please enter a valid email");if(!/^\+?[0-9]{10,14}$/.test(c.phone.replace(/\D/g,"")))throw new Error("Please enter a valid phone number.");yield new Promise(x=>setTimeout(x,1e3)),o.value="",t.value="",i.value="",n.value="",Object.keys(c).forEach(x=>{c[x]=""}),alert("Message sent successfully! We will contact you shortly.")}catch(m){s(m.message||"There was an error sending your message. Please try again later."),console.error("Form submission error:",m)}finally{w(!1)}})}function w(y){[o,t,i,n].forEach(m=>{m.disabled=y}),a.disabled=y,a.innerHTML=y?`<span class="button__icon">${L("loader",20)}</span> Sending...`:`<span class="button__icon">${L("send",20)}</span> Send message`}return e.addEventListener("submit",v),function(){o.removeEventListener("input",d),t.removeEventListener("input",d),i.removeEventListener("input",d),n.removeEventListener("input",d),e.removeEventListener("submit",v)}}const de={BASE_URL:"/R36S_STORE_JS/",DEV:!1,MODE:"production",PROD:!0,SSR:!1};function ue(){console.log("Products секция инициализирована");const o=!de?"/":"/R36S_STORE_JS/",t={i0_0:{jpg:`${o}img/products/i_0_0x.jpg`,webp:`${o}img/products/i_0_0x.webp`},i1:{jpg:`${o}img/products/i_1_1x.jpg`,webp:`${o}img/products/i_1_1x.webp`},i2:{jpg:`${o}img/products/i_2_1x.jpg`,webp:`${o}img/products/i_2_1x.webp`},i3:{jpg:`${o}img/products/i_3_1x.jpg`,webp:`${o}img/products/i_3_1x.webp`},i4:{jpg:`${o}img/products/i_4_1x.jpg`,webp:`${o}img/products/i_4_1x.webp`},i5:{jpg:`${o}img/products/i_5_1x.jpg`,webp:`${o}img/products/i_5_1x.webp`},i6:{jpg:`${o}img/products/i_6_1x.jpg`,webp:`${o}img/products/i_6_1x.webp`},i7:{jpg:`${o}img/products/i_7_1x.jpg`,webp:`${o}img/products/i_7_1x.webp`},i8:{jpg:`${o}img/products/i_8_1x.jpg`,webp:`${o}img/products/i_8_1x.webp`},i9:{jpg:`${o}img/products/i_9_1x.jpg`,webp:`${o}img/products/i_9_1x.webp`},i10:{jpg:`${o}img/products/i_10_1x.jpg`,webp:`${o}img/products/i_10_1x.webp`}},i=[{id:"getting-started",title:"Getting Started",content:{text:`Please be aware that this tutorial does not apply to K36 devices or clones marketed as R36S. For additional information about your hardware, please refer to the comprehensive R36S Wiki Page.

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

• A quick press of the power button will put the device into standby mode.`,images:{jpg:t.i9.jpg,webp:t.i9.webp}}},{id:"downloads",title:"Available Downloads",content:{downloads:[{file:"Firmware v1.0.4 2024.04.13",link:"https://drive.google.com/file/d/10z7j7IZ7WX3y10ZJBW_a2-agcIe1Dx9m/edit",date:"2024.04.13",version:"v1.0.4"},{file:"ArkOS_K36_v2.0_03112025.img.xz",link:"https://drive.google.com/file/d/1F93Q1jXYaTCftOlzAt0BaM43rmVexXsn/view",date:"2023.12.22",version:"v1.0.3"},{file:"ArkOS_R35S-R36S_v2.0_02092025_P3.img.xz",link:"https://drive.google.com/file/d/18VL7uLNdyFKDH4_V8YM5zhHSjLiJdkUc/view",date:"2023.11.16",version:"v1.0.2"},{file:"ArkOS_R35S-R36S_v2.0_02092025_P4.img.xz",link:"https://drive.google.com/file/d/1MT1AGGch6Ou4RAfxDvVCxUI4aXX6Qa5v/view",date:"2023.11.05",version:"v1.0.0"}]}}];let n="downloads",a=!1;const l=document.getElementById("products-nav-list"),c=document.getElementById("products-sections"),s=document.getElementById("products-nav");function u(){a=window.innerWidth<=1024,s&&(a?s.classList.add("nav-mobile"):s.classList.remove("nav-mobile"))}function d(m){n=m,document.querySelectorAll(".nav-item").forEach(r=>{r.dataset.sectionId===m?r.classList.add("nav-item-active"):r.classList.remove("nav-item-active")}),document.querySelectorAll(".section").forEach(r=>{r.id===m?r.classList.add("section-active"):r.classList.remove("section-active")}),setTimeout(()=>{const r=document.getElementById(m);if(r){const g=a?80:20,k=r.getBoundingClientRect().top+window.pageYOffset-g;window.scrollTo({top:k,behavior:"smooth"})}},100)}function v(){l.innerHTML="",i.forEach(m=>{const p=document.createElement("button");p.className=`nav-item ${n===m.id?"nav-item-active":""}`,p.dataset.sectionId=m.id,p.innerHTML=`
        <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <span>${m.title}</span>
      `,p.addEventListener("click",()=>d(m.id)),l.appendChild(p)})}function w(m){if(m.id==="downloads"){let r='<div class="download-list">';return m.content.downloads.forEach(g=>{r+=`
          <div class="download-card">
            <div class="download-info">
              <svg class="download-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <path d="M9 13h6"></path>
                <path d="M9 17h3"></path>
              </svg>
              <div>
                <div class="download-filename">${g.file}</div>
                <div class="download-meta">Update: ${g.date} • ${g.version}</div>
              </div>
            </div>
            <a href="${g.link}" class="download-button" target="_blank">
              <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </a>
          </div>
        `}),r+="</div>",r}let p='<div class="section-content"><div class="text-content">';return m.content.text.split(`
`).forEach(r=>{p+=`<p>${r.trim()}</p>`}),p+="</div>",m.content.images&&(p+=`
        <div class="image-container">
          <picture>
            <source srcset="${m.content.images.webp}" type="image/webp">
            <img src="${m.content.images.jpg}" alt="${m.title}" class="section-image" loading="lazy">
          </picture>
        </div>
      `),m.content.subsections&&(p+='<div class="subsections">',m.content.subsections.forEach(r=>{p+=`
          <div class="subsection">
            <h3 class="subsection-title">${r.title}</h3>
            <div class="subsection-content">
              <div class="text-content">
        `,r.content.text.split(`
`).forEach(f=>{p+=`<p>${f.trim()}</p>`}),p+="</div>",r.content.images&&(p+=`
            <div class="image-container">
              <picture>
                <source srcset="${r.content.images.webp}" type="image/webp">
                <img src="${r.content.images.jpg}" alt="${r.title}" class="subsection-image" loading="lazy">
              </picture>
            </div>
          `),p+="</div></div>"}),p+="</div>"),p+="</div>",p}function y(){c.innerHTML="",i.forEach(m=>{const p=document.createElement("section");p.id=m.id,p.className=`section ${n===m.id?"section-active":""}`,p.innerHTML=`
        <h2 class="section-title">${m.title}</h2>
        ${w(m)}
      `,c.appendChild(p)})}function S(){u(),v(),y(),window.addEventListener("resize",u),console.log("Products: Инициализация завершена. Используются пути к изображениям без /public/")}return l&&c&&s?S():console.error("Не найдены необходимые DOM элементы для секции Products"),{handleSectionClick:d,checkMobile:u}}function j(){console.log("Инициализация Footer");const e=document.querySelector(".footer");if(!e){console.error("Элемент footer не найден");return}const o=e.querySelector(".partnership-button");o&&o.addEventListener("click",()=>{const t=document.querySelector(".partnership-modal-overlay");if(t){t.classList.add("active");const i=t.querySelector(".partnership-modal-content");i&&i.classList.add("active"),document.body.style.overflow="hidden"}}),me()}function me(){const e=document.querySelector(".partnership-modal-overlay");if(!e){console.warn("Модальное окно не найдено");return}const o=e.querySelector(".partnership-modal-close");o&&o.addEventListener("click",t),e.addEventListener("click",i=>{i.target===e&&t()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&e.classList.contains("active")&&t()});function t(){const i=e.querySelector(".partnership-modal-content");e.classList.remove("active"),i&&i.classList.remove("active"),document.body.style.overflow=""}}function $(){const e=document.querySelector(".mobile-menu");if(!e){console.error("Мобильное меню не найдено в DOM");return}const o=e.querySelector(".close-button");if(!o){console.error("Кнопка закрытия не найдена в мобильном меню");return}o.addEventListener("click",()=>{t()});function t(){e.classList.remove("open");const l=document.querySelector(".burger-line");l&&l.classList.remove("open"),document.body.style.overflow="unset";const c=document.querySelector(".header");c&&c.classList.remove("menu-open");const s=document.querySelector(".burger-btn");s&&s.setAttribute("aria-expanded","false")}e.querySelectorAll(".mobile-menu__link").forEach(l=>{l.addEventListener("click",()=>{setTimeout(()=>{t()},150)})});const n=e.querySelector(".mobile-menu__background");n&&n.addEventListener("click",()=>{t()});function a(){e.querySelectorAll(".mobile-menu__icon").forEach((c,s)=>{c.style.opacity="0",c.style.transform="translateX(-20px)",new MutationObserver(d=>{d.forEach(v=>{v.attributeName==="class"&&(e.classList.contains("open")?setTimeout(()=>{c.style.transition="all 0.4s ease",c.style.opacity="1",c.style.transform="translateX(0)"},100+s*70):(c.style.opacity="0",c.style.transform="translateX(-20px)"))})}).observe(e,{attributes:!0})})}a(),console.log("Мобильное меню с иконками инициализировано")}let q=()=>console.log("Modal компонент недоступен");(function(){return C(this,null,function*(){try{q=(yield G(()=>import("./ModalPortal.Cv5sWs3j.js"),[])).initModal}catch(o){console.log("Modal.js не загружен:",o)}})})();function H(e){return C(this,null,function*(){try{return(yield fetch(e,{method:"HEAD"})).ok}catch(o){return console.warn(`Ресурс ${e} недоступен:`,o),!1}})}function I(e){return C(this,null,function*(){const t=`/R36S_STORE_JS/sections/${e}/${e}.html`;try{if(!(yield H(t)))return console.warn(`Секция ${e} недоступна, используем заглушку`),`<section id="${e.toLowerCase()}" class="section">
                <div class="container">
                  <h2>Секция ${e}</h2>
                  <p>Контент будет доступен позже</p>
                </div>
              </section>`;const n=yield fetch(t);if(!n.ok)throw new Error(`HTTP ошибка ${n.status}`);return yield n.text()}catch(i){return console.error(`Ошибка загрузки секции ${e}:`,i),`<div class="error-section">Ошибка загрузки секции ${e}</div>`}})}function pe(e){return C(this,null,function*(){const t=`/R36S_STORE_JS/components/${e}/${e}.html`;try{if(!(yield H(t)))return console.warn(`Компонент ${e} недоступен, используем заглушку`),`<div id="${e.toLowerCase()}" class="component">
                <div class="container">
                  <p>Компонент ${e} недоступен</p>
                </div>
              </div>`;const n=yield fetch(t);if(!n.ok)throw new Error(`HTTP ошибка ${n.status}`);return yield n.text()}catch(i){return console.error(`Ошибка загрузки компонента ${e}:`,i),`<div class="error-component">Ошибка загрузки компонента ${e}</div>`}})}function R(e,o){try{o(),console.log(`${e} инициализирован`)}catch(t){console.error(`Ошибка инициализации ${e}:`,t)}}function he(){return C(this,null,function*(){console.log("Инициализация приложения");const e=document.getElementById("root");if(!e)throw console.error("Элемент #root не найден"),new Error("Элемент #root не найден");e.innerHTML=`
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
  `;const o="/R36S_STORE_JS/";console.log("Режим:","production"),console.log("Базовый путь:",o);try{const[t,i]=yield Promise.all([I("Header").catch(()=>'<header class="header">Заголовок сайта</header>'),pe("MobileMenu").catch(()=>'<div class="mobile-menu"></div>')]),n=window.location.pathname.replace(o,"/");if(n==="/"||n==="/index.html"){const a={hero:I("Hero"),about:I("About"),features:I("Features"),categories:I("Categories"),articles:I("Articles"),reviews:I("Reviews"),contact:I("Contact"),products:I("Products"),footer:I("Footer")},l=yield Promise.allSettled(Object.values(a)),c={};Object.keys(a).forEach((s,u)=>{c[s]=l[u].status==="fulfilled"?l[u].value:`<section id="${s}" class="error-section">Ошибка загрузки ${s}</section>`}),e.innerHTML=`
        ${t}
        ${i}
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
      `,R("Header",O),R("MobileMenu",$),R("Hero",W),R("About",te),R("Features",D),R("Categories",se),R("Articles",ae),R("Reviews",le),R("Contact",ce),R("Products",ue),R("Footer",j),R("Modal",q)}else{const a=yield I("Footer").catch(()=>'<footer class="footer"><p>© 2025</p></footer>');e.innerHTML=`
        ${t}
        ${i}
        <div class="not-found">
          <div class="container">
            <h1>404</h1>
            <p>Страница не найдена</p>
            <a href="${o}" class="back-home">Вернуться на главную</a>
          </div>
        </div>
        ${a}
      `,R("Header",O),R("MobileMenu",$),R("Footer",j)}console.log("Приложение инициализировано")}catch(t){throw console.error("Ошибка при инициализации приложения:",t),e.innerHTML=`
      <div class="error">
        <h1>Ошибка</h1>
        <p>Произошла ошибка при загрузке страницы:</p>
        <pre>${t.message}</pre>
        <button onclick="location.reload()">Перезагрузить страницу</button>
      </div>
    `,t}})}function B(){if(window.location.hash){const e=window.location.hash.substring(1),o=document.getElementById(e);o&&setTimeout(()=>{const t=document.querySelector(".header"),i=t?t.offsetHeight:0,n=o.getBoundingClientRect().top+window.scrollY-i;window.scrollTo({top:n,behavior:"smooth"})},300)}}function ge(){document.body.addEventListener("click",e=>{const o=e.target.closest("a");if(o&&o.href&&o.href.startsWith(window.location.origin)&&!o.dataset.external){const t=new URL(o.href);t.pathname===window.location.pathname&&t.hash&&(e.preventDefault(),window.history.pushState(null,"",t.hash),B())}})}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("root");e&&(e.innerHTML=`
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
    `);const o=he(),t=new Promise((i,n)=>{setTimeout(()=>n(new Error("Превышено время ожидания инициализации (15 сек)")),15e3)});Promise.race([o,t]).then(()=>{B(),ge()}).catch(i=>{console.error("Ошибка инициализации:",i),e&&(e.innerHTML=`
          <div style="padding: 20px; text-align: center; font-family: Arial, sans-serif;">
            <h1>Не удалось загрузить приложение</h1>
            <p>${i.message}</p>
            <button onclick="location.reload()" style="padding: 10px 20px; margin-top: 15px; cursor: pointer;">
              Попробовать снова
            </button>
          </div>
        `)})});window.addEventListener("popstate",B);console.log("Main.js инициализирован");function fe(){const e="IntersectionObserver"in window,o=function(){const i=document.createElement("div");return i.style.display="flex",i.style.display==="flex"}(),t=function(){const i=document.createElement("div");return i.style.display="grid",i.style.display==="grid"}();return console.log("Поддержка браузера:"),console.log("- IntersectionObserver:",e),console.log("- Flexbox:",o),console.log("- CSS Grid:",t),e||document.body.classList.add("no-intersection-observer"),o||document.body.classList.add("no-flexbox"),t||document.body.classList.add("no-grid"),{hasIntersectionObserver:e,hasFlexbox:o,hasGrid:t}}document.addEventListener("DOMContentLoaded",()=>{console.log("DOM загружен"),document.getElementById("root"),fe();const e=performance.now();console.log(`Страница загружена за ${e.toFixed(2)}ms`),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").then(o=>{console.log("ServiceWorker зарегистрирован:",o)}).catch(o=>{console.error("Ошибка регистрации ServiceWorker:",o)})}),"performance"in window&&"getEntriesByType"in performance&&window.addEventListener("load",()=>{const o=performance.getEntriesByType("navigation")[0],t=performance.getEntriesByType("resource");console.log(`Общее время загрузки: ${o.loadEventEnd.toFixed(2)}ms`);const i=t.reduce((n,a)=>n+a.transferSize,0);console.log(`Загружено ${t.length} ресурсов (${(i/1024).toFixed(2)} KB)`)})});window.onerror=function(e,o,t,i,n){return console.error("Глобальная ошибка:",{message:e,source:o,lineno:t,colno:i,error:n}),!1};window.appVersion={version:"1.0.0",buildDate:new Date().toISOString(),environment:"production"};console.log("Main.js выполнение завершено");
