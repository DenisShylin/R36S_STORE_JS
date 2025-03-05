import{C as c,D as m,I as _,E as g,a as r}from"./core-4iGfENdb.js";import{i as f,a as b}from"./utils-B94m8ECU.js";import{L as w}from"./i18n-CMhHESMe.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function e(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=e(i);fetch(i.href,o)}})();class y extends c{constructor(t,e){super(t,e),this._handleEscape=this._handleEscape.bind(this),this._handleOverlayClick=this._handleOverlayClick.bind(this)}updateProps(t){const e=this.props.isOpen;this.props={...this.props,...t},e!==this.props.isOpen&&this.update()}_handleEscape(t){t.key==="Escape"&&this.props.isOpen&&this.props.onClose()}_handleOverlayClick(t){t.target.classList.contains("mobile-menu")&&this.props.onClose()}render(){const{isOpen:t}=this.props;return t?`
      <div class="mobile-menu ${t?"open":""}" role="dialog" aria-modal="true" aria-label="Mobile navigation menu">
        <div class="mobile-menu__background"></div>
        <div class="mobile-menu__container">
          <button class="mobile-menu__close-btn" aria-label="Close menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
          
          <nav class="mobile-menu__nav">
            <ul class="mobile-menu__list">
              <li class="mobile-menu__item">
                <a href="#features-r36s" class="mobile-menu__link" data-nav-link>
                  <span class="mobile-menu__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="6" width="20" height="12" rx="2"></rect>
                      <line x1="6" y1="12" x2="10" y2="12"></line>
                      <line x1="8" y1="10" x2="8" y2="14"></line>
                      <line x1="15" y1="13" x2="15.01" y2="13"></line>
                      <line x1="18" y1="11" x2="18.01" y2="11"></line>
                    </svg>
                  </span>
                  <span class="mobile-menu__text" data-i18n="header.functionality">Functionality</span>
                </a>
              </li>
              <li class="mobile-menu__item">
                <a href="#features" class="mobile-menu__link" data-nav-link>
                  <span class="mobile-menu__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                      <line x1="8" y1="21" x2="16" y2="21"></line>
                      <line x1="12" y1="17" x2="12" y2="21"></line>
                    </svg>
                  </span>
                  <span class="mobile-menu__text" data-i18n="header.about">About R36S</span>
                </a>
              </li>
              <li class="mobile-menu__item">
                <a href="#categories" class="mobile-menu__link" data-nav-link>
                  <span class="mobile-menu__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polygon points="10 8 16 12 10 16 10 8"></polygon>
                    </svg>
                  </span>
                  <span class="mobile-menu__text" data-i18n="header.video">Video</span>
                </a>
              </li>
              <li class="mobile-menu__item">
                <a href="#reviews" class="mobile-menu__link" data-nav-link>
                  <span class="mobile-menu__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </span>
                  <span class="mobile-menu__text" data-i18n="header.reviews">Reviews</span>
                </a>
              </li>
              <li class="mobile-menu__item">
                <a href="#contact" class="mobile-menu__link" data-nav-link>
                  <span class="mobile-menu__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </span>
                  <span class="mobile-menu__text" data-i18n="header.contacts">Contacts</span>
                </a>
              </li>
            </ul>
          </nav>
          
          <div class="mobile-menu__footer" data-i18n="footer.copyright">© 2025 R36S. Official website</div>
        </div>
      </div>
    `:""}afterRender(){if(!this.props.isOpen){document.removeEventListener("keydown",this._handleEscape);return}document.addEventListener("keydown",this._handleEscape);const t=this.container.querySelector(".mobile-menu");t&&this.addEventListeners(t,"click",this._handleOverlayClick);const e=this.container.querySelector(".mobile-menu__close-btn");e&&this.addEventListeners(e,"click",this.props.onClose),this.container.querySelectorAll("[data-nav-link]").forEach(i=>{this.addEventListeners(i,"click",o=>{this.props.handleNavClick&&this.props.handleNavClick(o)})}),this.props.i18n&&this.props.i18n.translatePage()}destroy(){document.removeEventListener("keydown",this._handleEscape),super.destroy()}}class x extends c{constructor(t,e){super(t,e),this.state={isScrolled:!1,isMenuOpen:!1,isVisible:!0,prevScrollPos:window.scrollY},this.children.mobileMenu=null,this.children.languageSwitcher=null,this._setupEventListeners()}_setupEventListeners(){this._handleScroll=this._handleScroll.bind(this),window.addEventListener("scroll",this._handleScroll,{passive:!0}),this._handleResize=this._handleResize.bind(this),window.addEventListener("resize",this._handleResize)}_handleScroll(){const t=window.scrollY,{prevScrollPos:e}=this.state,s=e<t;this.setState({isScrolled:t>0,isVisible:t<=100||!s,prevScrollPos:t})}_handleResize(){!(window.innerWidth<=768)&&this.state.isMenuOpen&&(this.setState({isMenuOpen:!1}),document.body.style.overflow="unset")}_handleNavClick(t){t.preventDefault();const e=t.currentTarget.getAttribute("href");if(e.startsWith("#")){const s=e.replace("#",""),i=document.getElementById(s);i&&(this.setState({isVisible:!0}),setTimeout(()=>{const o=this.container.offsetHeight,a=i.getBoundingClientRect().top+window.scrollY-o;window.scrollTo({top:a,behavior:"smooth"}),this.state.isMenuOpen&&(this.setState({isMenuOpen:!1}),document.body.style.overflow="unset"),window.history.replaceState(null,"",e)},50))}else window.location.href=e}_toggleMenu(){const t=!this.state.isMenuOpen;this.setState({isMenuOpen:t}),document.body.style.overflow=t?"hidden":"unset"}render(){const{isScrolled:t,isMenuOpen:e,isVisible:s}=this.state;return`
      <header class="${["header",t?"scrolled":"",e?"menu-open":"",s?"visible":"hidden"].filter(Boolean).join(" ")}">
        <nav class="nav">
          <a href="/" class="logo">R36S</a>
          
          <ul class="desktop-menu">
            <li><a class="our-menu-link" href="#features-r36s" data-nav-link data-i18n="header.functionality">Functionality</a></li>
            <li><a class="our-menu-link" href="#features" data-nav-link data-i18n="header.about">About R36S</a></li>
            <li><a class="our-menu-link" href="#categories" data-nav-link data-i18n="header.video">Video</a></li>
            <li><a class="our-menu-link" href="#reviews" data-nav-link data-i18n="header.reviews">Reviews</a></li>
            <li><a class="our-menu-link" href="#contact" data-nav-link data-i18n="header.contacts">Contacts</a></li>
          </ul>
          
          <div class="header__controls">
            <div class="language-switcher-container"></div>
            
            <button class="burger-btn" aria-expanded="${e}" aria-label="Toggle menu">
              <span class="burger-line ${e?"open":""}"></span>
            </button>
          </div>
        </nav>
      </header>
    `}afterRender(){this.container.querySelectorAll("[data-nav-link]").forEach(s=>{this.addEventListeners(s,"click",this._handleNavClick.bind(this))});const e=this.container.querySelector(".burger-btn");if(e&&this.addEventListeners(e,"click",this._toggleMenu.bind(this)),!this.children.mobileMenu){const s=document.createElement("div");s.id="mobile-menu-container",document.body.appendChild(s),this.children.mobileMenu=new y(s,{isOpen:this.state.isMenuOpen,onClose:this._toggleMenu.bind(this),handleNavClick:this._handleNavClick.bind(this),i18n:this.props.i18n})}if(!this.children.languageSwitcher){const s=this.container.querySelector(".language-switcher-container");s&&(this.children.languageSwitcher=new w(s,{i18n:this.props.i18n}),this.children.languageSwitcher.mount())}this.children.mobileMenu&&this.children.mobileMenu.updateProps({isOpen:this.state.isMenuOpen})}update(){super.update(),this.children.mobileMenu&&this.children.mobileMenu.updateProps({isOpen:this.state.isMenuOpen})}destroy(){window.removeEventListener("scroll",this._handleScroll),window.removeEventListener("resize",this._handleResize),super.destroy()}}class k extends c{constructor(t,e){super(t,e),this.state={isAnimated:!1},this._handleBuyClick=this._handleBuyClick.bind(this),this._handleDetailsClick=this._handleDetailsClick.bind(this)}render(){const{i18n:t}=this.props,e=s=>(t==null?void 0:t.translate(s))||s;return`
      <section class="hero">
        <div class="hero__background"></div>
        <div class="hero__overlay"></div>
        
        <div class="hero__container">
          <div class="hero__content-wrapper">
            <div class="hero__image">
              <div class="hero__image-wrapper">
                <div class="hero__image-glow"></div>
                <img 
                  src="/img/r36s-console.png" 
                  alt="R36S Retro Game Console" 
                  class="hero__console-img" 
                  width="600" 
                  height="400"
                >
              </div>
            </div>
            
            <h1 class="hero__title">
              <span class="hero__title-line" data-i18n="hero.title.line1">${e("hero.title.line1")}</span>
              <span class="hero__title-line" data-i18n="hero.title.line2">${e("hero.title.line2")}</span>
              <span class="hero__title-line hero__title-line--brand" data-i18n="hero.title.brand">${e("hero.title.brand")}</span>
            </h1>
            
            <div class="hero__content">
              <p class="hero__description hero__description--desktop" data-i18n="hero.description">
                ${e("hero.description")}
              </p>
              
              <div class="hero__pricing">
                <div class="hero__price-wrapper">
                  <span class="hero__original-price" data-i18n="hero.original_price">${e("hero.original_price")}</span>
                  <span class="hero__current-price" data-i18n="hero.current_price">${e("hero.current_price")}</span>
                </div>
                <span class="hero__discount-badge" data-i18n="hero.discount">${e("hero.discount")}</span>
              </div>
              
              <div class="hero__buttons">
                <button class="hero__button hero__button--primary" id="hero-buy-button">
                  <span class="hero__button-pulse"></span>
                  <span class="hero__button-text" data-i18n="hero.buttons.buy_now">${e("hero.buttons.buy_now")}</span>
                  <span class="hero__button-shine"></span>
                </button>
                
                <button class="hero__button hero__button--secondary" id="hero-details-button">
                  <span class="hero__button-text" data-i18n="hero.buttons.show_details">${e("hero.buttons.show_details")}</span>
                </button>
              </div>
            </div>
            
            <p class="hero__description hero__description--mobile" data-i18n="hero.description">
              ${e("hero.description")}
            </p>
          </div>
        </div>
      </section>
    `}afterRender(){const t=this.container.querySelector("#hero-buy-button");t&&this.addEventListeners(t,"click",this._handleBuyClick);const e=this.container.querySelector("#hero-details-button");e&&this.addEventListeners(e,"click",this._handleDetailsClick),this._animateContent(),this._setupTitleAnimations()}_handleBuyClick(){window.open("https://www.aliexpress.com/item/1005007171465465.html","_blank","noopener,noreferrer")}_handleDetailsClick(){const t=document.getElementById("features-r36s");if(t){const e=document.querySelector(".header"),s=e?e.offsetHeight:0,o=t.getBoundingClientRect().top+window.scrollY-s;window.scrollTo({top:o,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features-r36s`)}}_animateContent(){if(this.state.isAnimated)return;const t=this.container.querySelector(".hero__content");t&&setTimeout(()=>{t.classList.add("animate-in"),this.setState({isAnimated:!0})},100)}_setupTitleAnimations(){const t=this.container.querySelector(".hero__title-line--brand"),e=this.container;if(!t||!e)return;const s=o=>{if(window.innerWidth<=992)return;const n=e.getBoundingClientRect(),a=o.clientX-n.left,d=o.clientY-n.top,h=n.width/2,p=n.height/2,u=-1*((d-p)/p)*5,v=(a-h)/h*5;t.style.transform=`perspective(500px) rotateX(${u}deg) rotateY(${v}deg)`},i=()=>{t.style.transform="perspective(500px) rotateX(10deg)"};if(this.addEventListeners(e,"mousemove",s),this.addEventListeners(e,"mouseleave",i),"DeviceMotionEvent"in window){const o=n=>{if(window.innerWidth<=992)return;const a=n.accelerationIncludingGravity.x,d=n.accelerationIncludingGravity.y,h=Math.min(Math.max(d*.5,-3),3),p=Math.min(Math.max(a*.5,-3),3);t.style.transform=`perspective(500px) rotateX(${h}deg) rotateY(${p}deg)`};window.addEventListener("devicemotion",o),this.eventListeners.push({element:window,event:"devicemotion",handler:o})}}destroy(){super.destroy()}}class S extends c{constructor(t,e){super(t,e),this.state={isVideo:!1,currentImageIndex:0,isMuted:!0},this._handleOverlayClick=this._handleOverlayClick.bind(this),this._handleEscapePress=this._handleEscapePress.bind(this),this._handleToggleSound=this._handleToggleSound.bind(this)}updateProps(t){var i;const e=this.props.isOpen,s=this.props.feature;this.props={...this.props,...t},(e!==this.props.isOpen||s!==this.props.feature)&&((i=this.props.feature)!=null&&i.videoUrl?this.setState({isVideo:!0}):this.setState({isVideo:!1}),this.update())}render(){const{feature:t,isOpen:e}=this.props;return this.state,!e||!t?"":`
      <div class="modal-about-overlay">
        <div class="modal-about-content">
          <button class="modal-about-close" aria-label="Close modal">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div class="modal-about-header">
            <div class="modal-about-icon-wrapper">${t.icon||""}</div>
            <h3 class="modal-about-title">${t.title||""}</h3>
          </div>

          <div class="modal-about-body">
            ${this._renderMedia(t)}

            <div class="modal-about-stats">
              <div class="modal-about-price-wrapper">
                <span class="modal-about-original-price">US $108.06</span>
                <span class="modal-about-current-price">
                  $35.48
                  <span style="font-size: 24px;">US</span>
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
              ${t.fullDescription||""}
            </div>
          </div>
        </div>
      </div>
    `}_renderMedia(t){if(!t)return"";const{isVideo:e,currentImageIndex:s,isMuted:i}=this.state;return t.title==="Extensive color selection"&&t.colorImages?`
        <img
          src="${t.colorImages[s]}"
          alt="${t.imageAlt||`R36S Color Variant ${s+1}`}"
          class="modal-about-image"
        />
      `:e&&t.videoUrl?`
        <div class="video-wrapper">
          <video
            class="modal-about-image"
            autoplay
            ${i?"muted":""}
            loop
            playsinline
            preload="auto"
          >
            <source src="${t.videoUrl}" type="video/mp4">
            Your browser does not support the video tag.
          </video>
          <button class="sound-control" id="sound-toggle">
            ${i?`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>`:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>`}
          </button>
        </div>
      `:t.imageUrl?`<img
           src="${t.imageUrl}"
           alt="${t.imageAlt||"Feature image"}"
           class="modal-about-image"
         />`:""}afterRender(){var s;if(!this.props.isOpen||!this.props.feature){document.removeEventListener("keydown",this._handleEscapePress);return}document.body.style.overflow="hidden",document.addEventListener("keydown",this._handleEscapePress);const t=this.container.querySelector(".modal-about-overlay");t&&this.addEventListeners(t,"click",this._handleOverlayClick);const e=this.container.querySelector(".modal-about-close");if(e&&this.addEventListeners(e,"click",this.props.onClose),this.state.isVideo){const i=this.container.querySelector("#sound-toggle");i&&this.addEventListeners(i,"click",this._handleToggleSound)}((s=this.props.feature)==null?void 0:s.title)==="Extensive color selection"&&this.props.feature.colorImages&&this._setupColorSlider()}_setupColorSlider(){const{feature:t}=this.props;this._colorInterval&&clearInterval(this._colorInterval),this._colorInterval=setInterval(()=>{const e=(this.state.currentImageIndex+1)%t.colorImages.length;this.setState({currentImageIndex:e})},1e3)}_handleOverlayClick(t){t.target.classList.contains("modal-about-overlay")&&this.props.onClose()}_handleEscapePress(t){t.key==="Escape"&&this.props.isOpen&&this.props.onClose()}_handleToggleSound(){const t=this.container.querySelector("video");if(!t)return;const e=!this.state.isMuted;t.muted=e,this.setState({isMuted:e})}destroy(){document.body.style.overflow="",document.removeEventListener("keydown",this._handleEscapePress),this._colorInterval&&(clearInterval(this._colorInterval),this._colorInterval=null),super.destroy()}}class C extends c{constructor(t,e){super(t,e),this.state={activeCard:null,mousePosition:{x:0,y:0},isModalOpen:!1,selectedFeature:null},this._handleMouseMove=this._handleMouseMove.bind(this),this._handleOpenModal=this._handleOpenModal.bind(this),this._handleCloseModal=this._handleCloseModal.bind(this)}_initFeatures(){const{i18n:t}=this.props,e=s=>(t==null?void 0:t.translate(s))||s;return[{id:1,icon:`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="about-card__icon"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="6" y1="12" x2="10" y2="12"></line>
            <line x1="8" y1="10" x2="8" y2="14"></line>
            <line x1="15" y1="13" x2="15.01" y2="13"></line>
            <line x1="18" y1="11" x2="18.01" y2="11"></line>
            <rect x="2" y="6" width="20" height="12" rx="2"></rect>
          </svg>
        `,title:e("about.features.retro_games.title"),description:e("about.features.retro_games.description"),number:e("about.features.retro_games.number"),detail:e("about.features.retro_games.detail"),fullDescription:e("about.features.retro_games.full_description"),imageUrl:"/img/modal/video_1_.gif",imageAlt:"Коллекция ретро-игр"},{id:2,icon:`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="about-card__icon"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
            <line x1="8" y1="21" x2="16" y2="21"></line>
            <line x1="12" y1="17" x2="12" y2="21"></line>
          </svg>
        `,title:e("about.features.display.title"),description:e("about.features.display.description"),number:e("about.features.display.number"),detail:e("about.features.display.detail"),fullDescription:e("about.features.display.full_description"),imageUrl:"/img/modal/video_2_.gif",imageAlt:"Display Technologies"},{id:3,icon:`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="about-card__icon"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="2" y="7" width="16" height="10" rx="2" ry="2"></rect>
            <line x1="22" y1="11" x2="22" y2="13"></line>
          </svg>
        `,title:e("about.features.battery.title"),description:e("about.features.battery.description"),number:e("about.features.battery.number"),detail:e("about.features.battery.detail"),fullDescription:e("about.features.battery.full_description"),videoUrl:"/video/video_3_batrey_.MP4",imageAlt:"Battery Life"},{id:4,icon:`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="about-card__icon"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="6"></circle>
            <circle cx="12" cy="12" r="2"></circle>
          </svg>
        `,title:e("about.features.colors.title"),description:e("about.features.colors.description"),number:e("about.features.colors.number"),detail:e("about.features.colors.detail"),fullDescription:e("about.features.colors.full_description"),colorImages:["/img/modal/Untitled_1_1x.jpg","/img/modal/Untitled_2_1x.jpg","/img/modal/Untitled_3_1x.jpg","/img/modal/Untitled_4_1x.jpg"],imageAlt:"R36S Color Variants"},{id:5,icon:`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="about-card__icon"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="3"></circle>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
          </svg>
        `,title:e("about.features.settings.title"),description:e("about.features.settings.description"),number:e("about.features.settings.number"),detail:e("about.features.settings.detail"),fullDescription:e("about.features.settings.full_description"),videoUrl:"/video/video_5_option_.MP4",imageAlt:"R36S Settings"},{id:6,icon:`
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="about-card__icon"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
            <circle cx="9" cy="7" r="4"></circle>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
          </svg>
        `,title:e("about.features.portability.title"),description:e("about.features.portability.description"),number:e("about.features.portability.number"),detail:e("about.features.portability.detail"),fullDescription:e("about.features.portability.full_description"),videoUrl:"/video/video_6_.MP4",imageAlt:"R36S Portability"}]}render(){const{i18n:t}=this.props,e=i=>(t==null?void 0:t.translate(i))||i,s=this._initFeatures();return`
      <section class="about" id="features-r36s">
        <div class="about__container">
          <div class="about__header">
            <div class="about__labels">
              <span class="about__label" data-i18n="about.label">${e("about.label")}</span>
              <span class="about__label about__label--outline" data-i18n="about.label_outline">${e("about.label_outline")}</span>
            </div>
            <h2 class="about__title" data-i18n="about.title">${e("about.title")}</h2>
            <p class="about__subtitle" data-i18n="about.subtitle">${e("about.subtitle")}</p>
          </div>

          <div class="about__cards">
            ${s.map(i=>`
              <div 
                class="about-card ${this.state.activeCard===i.id?"active":""}" 
                data-id="${i.id}"
                style="--mouse-x: ${this.state.mousePosition.x}px; --mouse-y: ${this.state.mousePosition.y}px;"
              >
                <div class="card-blur"></div>
                <div class="card-glow"></div>
                <div class="about-card__content">
                  <div class="about-card__icon-wrapper">${i.icon}</div>
                  <h3 class="about-card__title">${i.title}</h3>
                  <p class="about-card__description">${i.description}</p>
                  <div class="about-card__stats">
                    <span class="about-card__number">${i.number}</span>
                    <span class="about-card__detail">${i.detail}</span>
                  </div>
                  <button class="about-card__button" data-feature-id="${i.id}">
                    <span class="button-text">${e("about.more_details")||"More details"}</span>
                    <span class="button-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </button>
                </div>
                <div class="card-indicator"></div>
              </div>
            `).join("")}
          </div>
        </div>
        
        <!-- Контейнер для модального окна -->
        <div id="modal-about-container"></div>
      </section>
    `}afterRender(){this.container.querySelectorAll(".about-card").forEach(e=>{this.addEventListeners(e,"mouseenter",()=>{const i=parseInt(e.dataset.id);this.setState({activeCard:i})}),this.addEventListeners(e,"mouseleave",()=>{this.setState({activeCard:null})}),this.addEventListeners(e,"mousemove",this._handleMouseMove);const s=e.querySelector(".about-card__button");s&&this.addEventListeners(s,"click",i=>{i.preventDefault(),i.stopPropagation();const o=parseInt(s.dataset.featureId),n=this._initFeatures().find(a=>a.id===o);this._handleOpenModal(n,i)})}),this.state.isModalOpen&&this.state.selectedFeature&&this._renderModal()}_handleMouseMove(t){const s=t.currentTarget.getBoundingClientRect();this.setState({mousePosition:{x:t.clientX-s.left,y:t.clientY-s.top}})}_handleOpenModal(t,e){e.preventDefault(),e.stopPropagation(),this.setState({selectedFeature:t,isModalOpen:!0},()=>{this._renderModal()})}_handleCloseModal(){this.setState({isModalOpen:!1}),setTimeout(()=>{this.setState({selectedFeature:null})},100)}_renderModal(){const t=this.container.querySelector("#modal-about-container");t&&(this.children.modalAbout=new S(t,{feature:this.state.selectedFeature,onClose:this._handleCloseModal.bind(this),isOpen:this.state.isModalOpen,i18n:this.props.i18n}),this.children.modalAbout.mount())}update(){super.update(),this.children.modalAbout&&this.children.modalAbout.updateProps({feature:this.state.selectedFeature,isOpen:this.state.isModalOpen})}destroy(){this.children.modalAbout&&this.children.modalAbout.destroy(),super.destroy()}}class $ extends c{constructor(t,e){super(t,e),this.state={isMuted:!0},this._handleBuyClick=this._handleBuyClick.bind(this),this._handleDetailsClick=this._handleDetailsClick.bind(this),this._toggleSound=this._toggleSound.bind(this),this._handleVideoClick=this._handleVideoClick.bind(this)}render(){const{i18n:t}=this.props,e=i=>(t==null?void 0:t.translate(i))||i,{isMuted:s}=this.state;return`
      <section class="features" id="features">
        <div class="features__container">
          <div class="features__content">
            <h2 class="features__title" data-i18n="features.title">${e("features.title")}</h2>

            <div class="features__description" data-i18n="features.description">
              <p>${e("features.description")}</p>
            </div>

            <div class="features__buttons">
              <button class="features__button" id="features-buy-button" aria-label="Buy now">
                <span data-i18n="features.buttons.buy_now">${e("features.buttons.buy_now")}</span>
              </button>

              <button class="features__button-secondary" id="features-details-button" aria-label="Show Details">
                <span data-i18n="features.buttons.show_details">${e("features.buttons.show_details")}</span>
              </button>
            </div>
          </div>

          <div class="features__image">
            <div class="features__image-wrapper">
              <video
                id="features-video"
                class="features__console-img"
                loop
                muted
                playsinline
                autoplay
                src="/video/video_features_.MP4">
                Your browser does not support the video tag.
              </video>
              <button class="features__sound-toggle" aria-label="${s?"Unmute video":"Mute video"}">
                ${s?`<svg xmlns="http://www.w3.org/2000/svg" class="features__sound-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                      <line x1="23" y1="9" x2="17" y2="15"></line>
                      <line x1="17" y1="9" x2="23" y2="15"></line>
                     </svg>`:`<svg xmlns="http://www.w3.org/2000/svg" class="features__sound-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                      <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                     </svg>`}
              </button>
            </div>
          </div>
        </div>
      </section>
    `}afterRender(){const t=this.container.querySelector("#features-buy-button");t&&this.addEventListeners(t,"click",this._handleBuyClick);const e=this.container.querySelector("#features-details-button");e&&this.addEventListeners(e,"click",this._handleDetailsClick);const s=this.container.querySelector("#features-video");s&&(s.volume=.5,s.play().catch(o=>{console.log("Автовоспроизведение не удалось:",o)}),this.addEventListeners(s.parentElement,"click",this._handleVideoClick));const i=this.container.querySelector(".features__sound-toggle");i&&this.addEventListeners(i,"click",o=>{o.stopPropagation(),this._toggleSound()}),this._setupScrollHandler()}_setupScrollHandler(){const t=()=>{const e=this.container.querySelector("#features-video");if(!e||this.state.isMuted)return;const s=this.container.getBoundingClientRect();s.top<window.innerHeight&&s.bottom>0||(e.muted=!0,this.setState({isMuted:!0}))};window.addEventListener("scroll",t),this.eventListeners.push({element:window,event:"scroll",handler:t})}_handleBuyClick(){window.open("https://www.aliexpress.com/item/1005007171465465.html","_blank","noopener,noreferrer")}_handleDetailsClick(){const t=document.getElementById("features-r36s");if(!t)return;const e=document.querySelector(".header"),s=e?e.offsetHeight:0,o=t.getBoundingClientRect().top+window.scrollY-s;window.scrollTo({top:o,behavior:"smooth"}),window.history.replaceState(null,"",`${window.location.pathname}#features-r36s`)}_handleVideoClick(t){if(t.target.closest(".features__sound-toggle"))return;const e=this.container.querySelector("#features-video");e&&(e.paused?e.play():e.pause())}_toggleSound(){const t=this.container.querySelector("#features-video");if(!t)return;const e=!this.state.isMuted;t.muted=e,e||(t.volume=.5),this.setState({isMuted:e})}destroy(){super.destroy()}}class M extends c{constructor(t,e){super(t,e),this.state={isPlaying:!0,isMuted:!0,currentTime:0,duration:0,isAnimated:!1},this._togglePlay=this._togglePlay.bind(this),this._toggleMute=this._toggleMute.bind(this),this._handleTimeUpdate=this._handleTimeUpdate.bind(this),this._handleVideoClick=this._handleVideoClick.bind(this)}_formatTime(t){const e=Math.floor(t/60),s=Math.floor(t%60);return`${e}:${s.toString().padStart(2,"0")}`}render(){const{i18n:t}=this.props,e=a=>(t==null?void 0:t.translate(a))||a,{isPlaying:s,isMuted:i,currentTime:o,duration:n}=this.state;return`
      <section class="categories" id="categories">
        <div class="categories__container">
          <div class="categories__content ${this.state.isAnimated?"animate-in":""}">
            <div class="categories__info">
              <div class="categories__labels">
                <span class="categories__label" data-i18n="categories.label">${e("categories.label")}</span>
                <span class="categories__label categories__label--outline" data-i18n="categories.label_outline">${e("categories.label_outline")}</span>
              </div>
              <h2 class="categories__title" data-i18n="categories.title">${e("categories.title")}</h2>
              <p class="categories__description" data-i18n="categories.description">${e("categories.description")}</p>
            </div>

            <div class="categories__video-wrapper">
              <div class="categories__video-container">
                <video
                  id="categories-video"
                  class="categories__video"
                  autoplay
                  muted
                  loop
                  playsinline
                  src="/video/video_categories_.MP4"
                >
                  Your browser does not support the video tag.
                </video>
                <div class="categories__video-overlay"></div>

                <div class="categories__video-controls">
                  <button
                    class="categories__video-play"
                    aria-label="${s?"Pause":"Play"}"
                  >
                    ${s?`<svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <rect x="6" y="4" width="4" height="16"></rect>
                          <rect x="14" y="4" width="4" height="16"></rect>
                        </svg>`:`<svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>`}
                  </button>

                  <button
                    class="categories__video-mute"
                    aria-label="${i?"Unmute":"Mute"}"
                  >
                    ${i?`<svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                          <line x1="23" y1="9" x2="17" y2="15"></line>
                          <line x1="17" y1="9" x2="23" y2="15"></line>
                        </svg>`:`<svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                        >
                          <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                          <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                        </svg>`}
                  </button>

                  <div class="categories__video-progress">
                    <input
                      type="range"
                      min="0"
                      max="${n}"
                      value="${o}"
                      class="categories__video-slider"
                      id="video-progress-slider"
                    />
                    <div class="categories__video-time">
                      <span>${this._formatTime(o)}</span>
                      <span>${this._formatTime(n)}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="categories__video-info">
                <div class="categories__video-stats">
                  <div class="categories__stat">
                    <span class="categories__stat-number">60</span>
                    <span class="categories__stat-label">FPS</span>
                  </div>
                  <div class="categories__stat">
                    <span class="categories__stat-number">HD</span>
                    <span class="categories__stat-label">Quality</span>
                  </div>
                  <div class="categories__stat">
                    <span class="categories__stat-number">3.5*</span>
                    <span class="categories__stat-label">IPS Screen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    `}afterRender(){const t=this.container.querySelector("#categories-video");if(t){this.addEventListeners(t,"loadedmetadata",()=>{this.setState({duration:t.duration})}),this.addEventListeners(t,"timeupdate",()=>{this.setState({currentTime:t.currentTime})});const o=this.container.querySelector(".categories__video-container");o&&this.addEventListeners(o,"click",this._handleVideoClick)}const e=this.container.querySelector(".categories__video-play");e&&this.addEventListeners(e,"click",o=>{o.stopPropagation(),this._togglePlay()});const s=this.container.querySelector(".categories__video-mute");s&&this.addEventListeners(s,"click",o=>{o.stopPropagation(),this._toggleMute()});const i=this.container.querySelector("#video-progress-slider");i&&(this.addEventListeners(i,"input",this._handleTimeUpdate),this.addEventListeners(i,"click",o=>{o.stopPropagation()})),this._setupIntersectionObserver()}_setupIntersectionObserver(){const t=new IntersectionObserver(([e])=>{if(e.isIntersecting){this.setState({isAnimated:!0});const s=this.container.querySelector("#categories-video");s&&(s.muted=this.state.isMuted)}else{const s=this.container.querySelector("#categories-video");s&&!this.state.isMuted&&(s.muted=!0,this.setState({isMuted:!0}))}},{threshold:.1});t.observe(this.container),this._observer=t}_handleVideoClick(t){t.target.closest(".categories__video-controls")||this._togglePlay()}_togglePlay(){const t=this.container.querySelector("#categories-video");t&&(this.state.isPlaying?t.pause():t.play(),this.setState({isPlaying:!this.state.isPlaying}))}_toggleMute(){const t=this.container.querySelector("#categories-video");if(!t)return;const e=!this.state.isMuted;t.muted=e,this.setState({isMuted:e})}_handleTimeUpdate(t){const e=this.container.querySelector("#categories-video");if(!e)return;const s=parseFloat(t.target.value);e.currentTime=s,this.setState({currentTime:s})}destroy(){const t=this.container.querySelector("#categories-video");t&&t.pause(),this._observer&&this._observer.disconnect(),super.destroy()}}class E extends c{constructor(t,e){super(t,e),this.state={animatedCards:[],hoveredCard:null,isMobile:window.innerWidth<=1200},this._handleReviewClick=this._handleReviewClick.bind(this),this._handleResize=this._handleResize.bind(this)}_initReviews(){return[{id:1,rating:5,color:"Purple 64GB",author:"AliExpress Shopper",date:"21 Aug 2024",text:"I just got my hands on the R36S retro console and it's seriously amazing for old-school gaming. The screen is super clear, it runs games smoothly, and battery life is solid. I love how I can load up my favorite classics and play anywhere.",images:{webp:"/img/reviews/review1.webp",jpeg:"/img/reviews/review1.jpg"},helpful:12,verified:!0},{id:2,rating:5,color:"Yellow 128G",author:"V***h",date:"26 Aug 2024",text:"After playing with the R36S for a week, I'm really impressed and absolutely delighted. The build quality feels great, and switching between different retro games is super easy. The controls are comfortable for long gaming sessions.",images:{webp:"/img/reviews/review4.webp",jpeg:"/img/reviews/review4.jpg"},helpful:8,verified:!0},{id:3,rating:5,color:"White 64GB",author:"M***z",date:"22 Aug 2024",text:"The R36S has become my go-to gaming device. I wasn't sure about buying another retro console, but this one surprised me. The screen is bright and sharp, games run without issues, and it's small enough to fit in my pocket.",images:{webp:"/img/reviews/review3.webp",jpeg:"/img/reviews/review3.jpg"},helpful:15,verified:!0},{id:4,rating:5,color:"Black 128GB",author:"K***r",date:"28 Aug 2024",text:"I've been using the R36S for a few weeks now, and I'm genuinely impressed. The 3.5-inch IPS screen delivers crisp visuals, and the build quality feels solid. The dual analog sticks are responsive, making retro gaming a joy.",images:{webp:"/img/reviews/review2.webp",jpeg:"/img/reviews/review2.jpg"},helpful:10,verified:!0,mobileOnly:!0}]}render(){const{i18n:t}=this.props,e=a=>(t==null?void 0:t.translate(a))||a,{isMobile:s,hoveredCard:i}=this.state,n=this._initReviews().filter(a=>!a.mobileOnly||a.mobileOnly&&s);return`
      <section class="reviews" id="reviews">
        <div class="reviews__container">
          <div class="reviews__header">
            <span class="reviews__label" data-i18n="reviews.label">${e("reviews.label")}</span>
            <h2 class="reviews__title" data-i18n="reviews.title">${e("reviews.title")}</h2>
          </div>

          <div class="reviews__grid">
            ${n.map(a=>`
              <div
                class="review-card ${this.state.animatedCards.includes(a.id)?"animate-in":""} ${a.mobileOnly?"mobile-only":""}"
                data-id="${a.id}"
              >
                <div class="review-card__content">
                  <div class="review-card__header">
                    <div class="review-card__rating">
                      ${this._renderStars(a.rating)}
                    </div>
                    <span class="review-card__variant">${a.color}</span>
                  </div>

                  <p class="review-card__text">${a.text}</p>

                  <div class="review-card__image-wrapper">
                    <picture>
                      <source srcSet="${a.images.webp}" type="image/webp" />
                      <img
                        src="${a.images.jpeg}"
                        alt="Review ${a.id}"
                        class="review-card__image"
                        loading="lazy"
                      />
                    </picture>
                    ${i===a.id?this._renderAnimatedArrow():""}
                  </div>

                  <div class="review-card__footer">
                    <div class="review-card__author">
                      <span class="review-card__name">
                        ${a.verified?`
                          <svg
                            class="review-card__verified"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          >
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                        `:""}
                        ${a.author}
                      </span>
                      <span class="review-card__date">${a.date}</span>
                    </div>
                    <div class="review-card__helpful">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M14 9V5a3 3 0 0 0-3-3L7 11v10h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                      </svg>
                      <span>Helpful (${a.helpful})</span>
                    </div>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>
        </div>
      </section>
    `}_renderStars(t){let e="";for(let s=0;s<5;s++)e+=`
        <svg
          class="review-card__star"
          viewBox="0 0 24 24"
          fill="${s<t?"currentColor":"none"}"
          stroke="currentColor"
          strokeWidth="2"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      `;return e}_renderAnimatedArrow(){return`
      <div class="review-card__arrow-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          class="review-card__arrow"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>
    `}afterRender(){this._setupIntersectionObserver(),this.container.querySelectorAll(".review-card").forEach(e=>{this.addEventListeners(e,"mouseenter",()=>{const s=parseInt(e.dataset.id);this.setState({hoveredCard:s})}),this.addEventListeners(e,"mouseleave",()=>{this.setState({hoveredCard:null})}),this.addEventListeners(e,"click",this._handleReviewClick)}),window.addEventListener("resize",this._handleResize)}_setupIntersectionObserver(){const t=new IntersectionObserver(s=>{s.forEach(i=>{if(i.isIntersecting){const o=parseInt(i.target.dataset.id);this.setState(n=>({animatedCards:[...n.animatedCards,o]})),t.unobserve(i.target)}})},{threshold:.1});this.container.querySelectorAll(".review-card").forEach(s=>{t.observe(s)}),this._observer=t}_handleReviewClick(){window.open("https://www.aliexpress.com/item/1005007226123844.html#feedback","_blank","noopener,noreferrer")}_handleResize(){const t=window.innerWidth<=1200;t!==this.state.isMobile&&this.setState({isMobile:t})}destroy(){window.removeEventListener("resize",this._handleResize),this._observer&&this._observer.disconnect(),super.destroy()}}class L extends c{constructor(t,e){super(t,e),this.state={animatedArticles:[]},this.articlesRef=[]}_initArticles(){const{i18n:t}=this.props,e=s=>(t==null?void 0:t.translate(s))||s;return[{id:1,title:e("articles.global_expansion.title"),sections:[{subtitle:e("articles.global_expansion.sections.global_market.subtitle"),content:e("articles.global_expansion.sections.global_market.content")}]},{id:2,title:e("articles.revolutionizing_retro_gaming.title")||"Revolutionizing Retro Gaming: The R36S Story",sections:[{subtitle:e("articles.revolutionizing_retro_gaming.sections.new_era.subtitle")||"A New Era in Handheld Gaming",content:e("articles.revolutionizing_retro_gaming.sections.new_era.content")||"Welcome to the world of R36S, where nostalgia meets innovation. The R36S handheld has quickly become a dominant force in English-speaking markets, captivating gamers from the United States to Australia."}]}]}render(){return`
      <section class="articles" id="articles">
        <div class="articles__container">
          <div class="articles__grid">
            ${this._initArticles().map((e,s)=>`
              <article class="article" data-article-id="${e.id}">
                <h2 class="article__title">${e.title}</h2>
                ${e.sections.map((i,o)=>`
                  <div>
                    <h3 class="article__subtitle">${i.subtitle}</h3>
                    <div class="article__content">
                      <p>${i.content}</p>
                    </div>
                  </div>
                `).join("")}
              </article>
            `).join("")}
          </div>
        </div>
      </section>
    `}afterRender(){this.articlesRef=Array.from(this.container.querySelectorAll(".article")),this._setupIntersectionObserver()}_setupIntersectionObserver(){const t=new IntersectionObserver(e=>{e.forEach(s=>{if(s.isIntersecting){const i=parseInt(s.target.dataset.articleId);s.target.style.opacity=1,s.target.style.transform="translateY(0)",this.setState(o=>({animatedArticles:[...o.animatedArticles,i]})),t.unobserve(s.target)}})},{threshold:.1});this.articlesRef.forEach(e=>{e.style.opacity=0,e.style.transform="translateY(20px)",e.style.transition="all 0.6s ease-out",t.observe(e)}),this._observer=t}destroy(){this._observer&&this._observer.disconnect(),super.destroy()}}class P extends c{constructor(t,e){super(t,e),this.state={formData:{name:"",email:"",phone:"",message:""},isSubmitting:!1,error:""},this._handleChange=this._handleChange.bind(this),this._handleSubmit=this._handleSubmit.bind(this)}render(){const{i18n:t}=this.props,e=n=>(t==null?void 0:t.translate(n))||n,{formData:s,isSubmitting:i,error:o}=this.state;return`
      <section class="contact" id="contact">
        <div class="contact__noise"></div>
        <div class="contact__container">
          <div class="contact__header">
            <span class="contact__label" data-i18n="contact.label">${e("contact.label")}</span>
            <h2 class="contact__title" data-i18n="contact.title">${e("contact.title")}</h2>
            <p class="contact__description" data-i18n="contact.description">${e("contact.description")}</p>
          </div>

          <div class="contact__content">
            <form class="contact__form" id="contact-form">
              ${o?`
                <div class="form__error">
                  <svg class="form__error-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                  </svg>
                  <span>${o}</span>
                </div>
              `:""}

              <div class="form__group">
                <label class="form__label" for="name">
                  <svg class="form__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                  <span data-i18n="contact.form.name">${e("contact.form.name")}</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="form__input"
                  value="${s.name}"
                  placeholder="John Smith"
                  ${i?"disabled":""}
                  required
                />
              </div>

              <div class="form__group">
                <label class="form__label" for="email">
                  <svg class="form__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span data-i18n="contact.form.email">${e("contact.form.email")}</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form__input"
                  value="${s.email}"
                  placeholder="example@email.com"
                  ${i?"disabled":""}
                  required
                />
              </div>

              <div class="form__group">
                <label class="form__label" for="phone">
                  <svg class="form__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span data-i18n="contact.form.phone">${e("contact.form.phone")}</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  class="form__input"
                  value="${s.phone}"
                  placeholder="+7 (___) ___-__-__"
                  ${i?"disabled":""}
                  required
                />
              </div>

              <div class="form__group">
                <label class="form__label" for="message">
                  <svg class="form__icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                  <span data-i18n="contact.form.message">${e("contact.form.message")}</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  class="form__textarea"
                  placeholder="Write your message..."
                  ${i?"disabled":""}
                  required
                >${s.message}</textarea>
              </div>

              <button
                type="submit"
                class="form__button"
                ${i?"disabled":""}
              >
                <svg class="button__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13"></line>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                </svg>
                <span data-i18n="contact.form.${i?"sending":"send"}">${e(i?"contact.form.sending":"contact.form.send")}</span>
              </button>
            </form>

            <div class="contact__info">
              <div class="info__card">
                <svg class="info__icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <h3 class="info__title" data-i18n="contact.info.phone">${e("contact.info.phone")}</h3>
                <p class="info__text">+7 (800) 555-35-35</p>
                <p class="info__text" data-i18n="contact.info.phone_hours">${e("contact.info.phone_hours")}</p>
              </div>

              <div class="info__card">
                <svg class="info__icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <h3 class="info__title" data-i18n="contact.info.email">${e("contact.info.email")}</h3>
                <p class="info__text">support@R36S.com</p>
                <p class="info__text">sales@R36S.com</p>
              </div>

              <div class="info__card">
                <svg class="info__icon" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <h3 class="info__title" data-i18n="contact.info.address">${e("contact.info.address")}</h3>
                <p class="info__text">Zhejiang, China.</p>
                <p class="info__text" data-i18n="contact.info.address_info">${e("contact.info.address_info")}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    `}afterRender(){const t=this.container.querySelector("#contact-form");t&&(t.addEventListener("submit",this._handleSubmit),t.querySelectorAll("input, textarea").forEach(s=>{this.addEventListeners(s,"input",this._handleChange)}))}_handleChange(t){const{name:e,value:s}=t.target;this.setState({formData:{...this.state.formData,[e]:s},error:""})}async _handleSubmit(t){var s;t.preventDefault();const{formData:e}=this.state;this.setState({isSubmitting:!0,error:""});try{if(!e.name||!e.email||!e.phone||!e.message)throw new Error(((s=this.props.i18n)==null?void 0:s.translate("contact.form.error"))||"Please fill in all fields");if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email))throw new Error("Please enter a valid email");if(!/^\+?[0-9]{10,14}$/.test(e.phone.replace(/\D/g,"")))throw new Error("Please enter a valid phone number.");await new Promise(n=>setTimeout(n,1e3)),this.setState({formData:{name:"",email:"",phone:"",message:""},isSubmitting:!1}),alert("Message sent successfully! We will contact you shortly.")}catch(i){this.setState({isSubmitting:!1,error:i.message||"There was an error sending your message. Please try again later."}),console.error("Form submission error:",i)}}destroy(){const t=this.container.querySelector("#contact-form");t&&t.removeEventListener("submit",this._handleSubmit),super.destroy()}}class O extends c{constructor(t,e){super(t,e),this.state={activeSection:"downloads",isMobile:window.innerWidth<=1024},this._handleSectionClick=this._handleSectionClick.bind(this),this._handleResize=this._handleResize.bind(this)}_initSections(){const{i18n:t}=this.props,e=s=>(t==null?void 0:t.translate(s))||s;return[{id:"preparation",title:e("products.sections.preparation.title"),content:{text:e("products.sections.preparation.text"),images:{jpg:"/img/products/i1.jpg",webp:"/img/products/i1.webp"}}},{id:"backup",title:e("products.sections.backup.title"),content:{text:e("products.sections.backup.text"),subsections:[{id:"win32diskimager",title:e("products.sections.backup.subsections.win32diskimager.title"),content:{text:e("products.sections.backup.subsections.win32diskimager.text"),images:{jpg:"/img/products/i2.jpg",webp:"/img/products/i2.webp"}}}]}},{id:"flashing",title:e("products.sections.flashing.title"),content:{text:e("products.sections.flashing.text"),subsections:[{id:"balena",title:e("products.sections.flashing.subsections.balena.title"),content:{text:e("products.sections.flashing.subsections.balena.text"),images:{jpg:"/img/products/i3.jpg",webp:"/img/products/i3.webp"}}},{id:"win32",title:e("products.sections.flashing.subsections.win32.title"),content:{text:e("products.sections.flashing.subsections.win32.text"),images:{jpg:"/img/products/i4.jpg",webp:"/img/products/i4.webp"}}},{id:"raspberry",title:e("products.sections.flashing.subsections.raspberry.title"),content:{text:e("products.sections.flashing.subsections.raspberry.text"),images:{jpg:"/img/products/i5.jpg",webp:"/img/products/i5.webp"}}}]}},{id:"firmware",title:e("products.sections.firmware.title"),content:{text:e("products.sections.firmware.text"),subsections:[{id:"arkos",title:e("products.sections.firmware.subsections.arkos.title"),content:{text:e("products.sections.firmware.subsections.arkos.text"),images:{jpg:"/img/products/i6.jpg",webp:"/img/products/i6.webp"}}},{id:"rocknix",title:e("products.sections.firmware.subsections.rocknix.title"),content:{text:e("products.sections.firmware.subsections.rocknix.text"),images:{jpg:"/img/products/i7.jpg",webp:"/img/products/i7.webp"}}},{id:"amberelec",title:e("products.sections.firmware.subsections.amberelec.title"),content:{text:e("products.sections.firmware.subsections.amberelec.text"),images:{jpg:"/img/products/i8.jpg",webp:"/img/products/i8.webp"}}}]}},{id:"roms",title:e("products.sections.roms.title"),content:{text:e("products.sections.roms.text"),images:{jpg:"/img/products/i9.jpg",webp:"/img/products/i9.webp"}}},{id:"tips",title:e("products.sections.tips.title"),content:{text:e("products.sections.tips.text"),images:{jpg:"/img/products/i10.jpg",webp:"/img/products/i10.webp"}}},{id:"downloads",title:e("products.sections.downloads.title"),content:{downloads:[{file:"R36S_tg5040_20231116_1539_v1.0.2.7z",date:"2023.11.16",version:"v1.0.2"},{file:"R36S_tg5040_20231105_v1.0.0.7z",date:"2023.11.05",version:"v1.0.0"}]}}]}render(){const{i18n:t}=this.props,e=n=>(t==null?void 0:t.translate(n))||n,{activeSection:s,isMobile:i}=this.state,o=this._initSections();return`
      <section class="guide" id="products">
        <div class="guide-background"></div>
        <div class="container">
          <div class="content">
            <nav class="${i?"nav nav-mobile":"nav"}">
              <h2 class="nav-title" data-i18n="products.title">${e("products.title")}</h2>
              <div class="nav-list">
                ${o.map(({id:n,title:a})=>`
                  <button
                    class="nav-item ${s===n?"nav-item-active":""}"
                    data-section-id="${n}"
                  >
                    <svg class="nav-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                    <span>${a}</span>
                  </button>
                `).join("")}
              </div>
            </nav>

            <main class="main">
              <h1 class="title" data-i18n="products.title">${e("products.title")}</h1>
              <div class="dynamic-sections">
                ${o.map(n=>`
                  <section
                    id="${n.id}"
                    class="section ${s===n.id?"section-active":""}"
                  >
                    <h2 class="section-title">${n.title}</h2>
                    ${this._renderSectionContent(n)}
                  </section>
                `).join("")}
              </div>
            </main>
          </div>
        </div>
      </section>
    `}_renderSectionContent(t){return t.id==="downloads"?`
        <div class="download-list">
          ${t.content.downloads.map(e=>`
            <div class="download-card">
              <div class="download-info">
                <svg class="download-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
                <div>
                  <div class="download-filename">${e.file}</div>
                  <div class="download-meta">
                    Update: ${e.date} • ${e.version}
                  </div>
                </div>
              </div>
              <button class="download-button" data-file="${e.file}">
                <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
              </button>
            </div>
          `).join("")}
        </div>
      `:`
      <div class="section-content">
        <div class="text-content">
          ${t.content.text.split(`
`).map(e=>`
            <p class="mb-4">${e.trim()}</p>
          `).join("")}
        </div>

        ${t.content.images?`
          <div class="image-container">
            <picture>
              <source srcSet="${t.content.images.webp}" type="image/webp" />
              <img
                src="${t.content.images.jpg}"
                alt="${t.title}"
                class="section-image"
                loading="lazy"
              />
            </picture>
          </div>
        `:""}

        ${t.content.subsections?`
          <div class="subsections">
            ${t.content.subsections.map(e=>`
              <div class="subsection">
                <h3 class="subsection-title">${e.title}</h3>
                <div class="subsection-content">
                  <div class="text-content">
                    ${e.content.text.split(`
`).map(s=>`
                      <p class="mb-4">${s.trim()}</p>
                    `).join("")}
                  </div>
                  ${e.content.images?`
                    <div class="image-container">
                      <picture>
                        <source srcSet="${e.content.images.webp}" type="image/webp" />
                        <img
                          src="${e.content.images.jpg}"
                          alt="${e.title}"
                          class="subsection-image"
                          loading="lazy"
                        />
                      </picture>
                    </div>
                  `:""}
                </div>
              </div>
            `).join("")}
          </div>
        `:""}
      </div>
    `}afterRender(){this.container.querySelectorAll(".nav-item").forEach(s=>{this.addEventListeners(s,"click",()=>{const i=s.dataset.sectionId;this._handleSectionClick(i)})}),this.container.querySelectorAll(".download-button").forEach(s=>{this.addEventListeners(s,"click",()=>{const i=s.dataset.file;this._handleDownload(i)})}),window.addEventListener("resize",this._handleResize)}_handleSectionClick(t){this.setState({activeSection:t}),setTimeout(()=>{const e=document.getElementById(t);if(e){const s=this.state.isMobile?80:20,o=e.getBoundingClientRect().top+window.scrollY-s;window.scrollTo({top:o,behavior:"smooth"})}},100)}_handleDownload(t){alert(`Downloading file: ${t}`)}_handleResize(){const t=window.innerWidth<=1024;t!==this.state.isMobile&&this.setState({isMobile:t})}destroy(){window.removeEventListener("resize",this._handleResize),super.destroy()}}class B extends c{constructor(t,e){super(t,e),this._handleOverlayClick=this._handleOverlayClick.bind(this),this._handleEscapePress=this._handleEscapePress.bind(this)}updateProps(t){const e=this.props.isOpen;this.props={...this.props,...t},e!==this.props.isOpen&&this.update()}render(){const{isOpen:t,i18n:e}=this.props;if(!t)return"";const s=i=>(e==null?void 0:e.translate(i))||i;return`
      <div class="partnership-modal-overlay ${t?"active":""}">
        <div class="partnership-modal-content ${t?"active":""}">
          <button
            class="partnership-modal-close"
            aria-label="Close modal"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <h2 class="partnership-modal-title" data-i18n="partnership.title">${s("partnership.title")}</h2>
          <h2 class="partnership-modal-title" data-i18n="partnership.company">${s("partnership.company")}</h2>

          <div class="partnership-section">
            <p class="partnership-text" data-i18n="partnership.founded">${s("partnership.founded")}</p>
            <p class="partnership-text" data-i18n="partnership.employees">${s("partnership.employees")}</p>
            <p class="partnership-text" data-i18n="partnership.products">${s("partnership.products")}</p>
            <p class="partnership-text" data-i18n="partnership.revenue">${s("partnership.revenue")}</p>
            <p class="partnership-text" data-i18n="partnership.markets">${s("partnership.markets")}</p>
          </div>

          <div class="partnership-section">
            <h3 class="partnership-section-title-2" data-i18n="partnership.wholesale.title">${s("partnership.wholesale.title")}</h3>
            <p class="partnership-text">
              <span data-i18n="partnership.wholesale.text">${s("partnership.wholesale.text")}</span>
              <a
                href="https://www.alibaba.com/product-detail/R36S-Retro-3-5-Inch-IPS_1600984248000.html"
                class="partnership-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.R36S.ali.com
              </a>
            </p>
          </div>

          <div class="partnership-section">
            <h3 class="partnership-section-title" data-i18n="partnership.introduction.title">${s("partnership.introduction.title")}</h3>
            <p class="partnership-text" data-i18n="partnership.introduction.text">${s("partnership.introduction.text")}</p>
          </div>

          <div class="footer__copyright">
            <a href="/" data-i18n="footer.copyright">${s("footer.copyright")}</a>
          </div>
        </div>
      </div>
    `}afterRender(){if(!this.props.isOpen){document.removeEventListener("keydown",this._handleEscapePress);return}document.body.style.overflow="hidden",document.addEventListener("keydown",this._handleEscapePress);const t=this.container.querySelector(".partnership-modal-overlay");t&&this.addEventListeners(t,"click",this._handleOverlayClick);const e=this.container.querySelector(".partnership-modal-close");e&&this.addEventListeners(e,"click",this.props.onClose),this.props.i18n&&this.props.i18n.translatePage()}_handleOverlayClick(t){t.target.classList.contains("partnership-modal-overlay")&&this.props.onClose()}_handleEscapePress(t){t.key==="Escape"&&this.props.isOpen&&this.props.onClose()}destroy(){document.body.style.overflow="",document.removeEventListener("keydown",this._handleEscapePress),super.destroy()}}class R extends c{constructor(t,e){super(t,e),this.state={isPartnershipModalOpen:!1},this._handlePartnershipClick=this._handlePartnershipClick.bind(this),this._handlePartnershipModalClose=this._handlePartnershipModalClose.bind(this)}render(){const{i18n:t}=this.props,e=i=>(t==null?void 0:t.translate(i))||i,s=new Date().getFullYear();return`
      <footer class="footer">
        <div class="footer__container">
          <div class="footer__content">
            <div class="footer__brand">
              <a href="/" class="footer__logo">R36S</a>
              <p class="footer__description" data-i18n="footer.description">
                ${e("footer.description")}
              </p>
              <div class="footer__social">
                
                  href="https://www.aliexpress.com/item/1005007171465465.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="social__link"
                >
                  <img
                    src="/img/icons/aliexpress.svg"
                    alt="AliExpress Store"
                    class="social__icon"
                  />
                </a>
              </div>
            </div>
            <div class="footer__column">
              <h3 class="footer__title" data-i18n="footer.links.products">${e("footer.links.products")}</h3>
              <ul class="footer__list">
                <li class="footer__item">
                  <a href="#reviews" class="footer__link" data-i18n="footer.links.reviews">${e("footer.links.reviews")}</a>
                </li>
              </ul>
            </div>
            <div class="footer__column">
              <h3 class="footer__title" data-i18n="footer.links.support">${e("footer.links.support")}</h3>
              <ul class="footer__list">
                <li class="footer__item">
                  <a href="#contact" class="footer__link" data-i18n="footer.links.contacts">${e("footer.links.contacts")}</a>
                </li>
              </ul>
            </div>
            <div class="footer__column">
              <h3 class="footer__title" data-i18n="footer.links.company">${e("footer.links.company")}</h3>
              <ul class="footer__list">
                <li class="footer__item">
                  <button
                    id="partnership-btn"
                    class="footer__link"
                    data-i18n="footer.links.partnership"
                  >
                    ${e("footer.links.partnership")}
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer__divider"></div>
          <div class="footer__bottom">
            <div class="footer__copyright">
              <a href="/">
                <span data-i18n="footer.copyright">© ${s} R36S. All rights reserved.</span>
              </a>
            </div>
          </div>
        </div>
        <div id="partnership-modal-container"></div>
      </footer>
    `}afterRender(){const t=this.container.querySelector("#partnership-btn");t&&this.addEventListeners(t,"click",this._handlePartnershipClick),this.state.isPartnershipModalOpen&&this._renderPartnershipModal(),this._setupLinkHandlers()}_setupLinkHandlers(){this.container.querySelectorAll('.footer__link[href^="#"]').forEach(e=>{this.addEventListeners(e,"click",s=>{var o;s.preventDefault();const i=document.querySelector(e.getAttribute("href"));if(i){const n=((o=document.querySelector(".header"))==null?void 0:o.offsetHeight)||0,d=i.getBoundingClientRect().top+window.scrollY-n;window.scrollTo({top:d,behavior:"smooth"}),history.pushState(null,"",e.getAttribute("href"))}})})}_handlePartnershipClick(){this.setState({isPartnershipModalOpen:!0},()=>{this._renderPartnershipModal()})}_handlePartnershipModalClose(){this.setState({isPartnershipModalOpen:!1})}_renderPartnershipModal(){const t=this.container.querySelector("#partnership-modal-container");t&&(m.removeAllChildren(t),this.children.partnershipModal=new B(t,{isOpen:this.state.isPartnershipModalOpen,onClose:this._handlePartnershipModalClose,i18n:this.props.i18n}),this.children.partnershipModal.mount())}update(){super.update(),this.children.partnershipModal&&this.children.partnershipModal.updateProps({isOpen:this.state.isPartnershipModalOpen})}destroy(){this.children.partnershipModal&&this.children.partnershipModal.destroy(),super.destroy()}}class A{constructor(){this.i18n=new _,this.eventBus=new g,this.components={},this.initialized=!1,this.scrollHandler=null,this.scrollAnimations=null}async init(){if(console.log("Initializing R36S Store application..."),this.initialized)return console.warn("Application already initialized"),this;try{return await this.i18n.init(),console.log(`Application initialized with language: ${this.i18n.getCurrentLocale()}`),this._registerComponents(),await this._initComponents(),this._initScrollHandlers(),this.initialized=!0,this.eventBus.emit("app:initialized"),console.log("Application fully initialized"),this}catch(t){throw console.error("Error initializing application:",t),t}}_registerComponents(){r.registerComponent("Header",x),r.registerComponent("Hero",k),r.registerComponent("About",C),r.registerComponent("Features",$),r.registerComponent("Categories",M),r.registerComponent("Reviews",E),r.registerComponent("Articles",L),r.registerComponent("Contact",P),r.registerComponent("Products",O),r.registerComponent("Footer",R),console.log("Components registered")}async _initComponents(){try{this.components.header=r.createComponent("Header","#header-container",{i18n:this.i18n}),this.components.header.mount(),this.components.hero=r.createComponent("Hero","#hero-container",{i18n:this.i18n}),this.components.hero.mount(),this.components.about=r.createComponent("About","#about-container",{i18n:this.i18n}),this.components.about.mount(),this.components.features=r.createComponent("Features","#features-container",{i18n:this.i18n}),this.components.features.mount(),this.components.categories=r.createComponent("Categories","#categories-container",{i18n:this.i18n}),this.components.categories.mount(),this.components.reviews=r.createComponent("Reviews","#reviews-container",{i18n:this.i18n}),this.components.reviews.mount(),this.components.articles=r.createComponent("Articles","#articles-container",{i18n:this.i18n}),this.components.articles.mount(),this.components.contact=r.createComponent("Contact","#contact-container",{i18n:this.i18n}),this.components.contact.mount(),this.components.products=r.createComponent("Products","#products-container",{i18n:this.i18n}),this.components.products.mount(),this.components.footer=r.createComponent("Footer","#footer-container",{i18n:this.i18n}),this.components.footer.mount(),console.log("Components initialized"),this.i18n.onLocaleChanged(()=>this._handleLanguageChange())}catch(t){throw console.error("Error initializing components:",t),t}}_initScrollHandlers(){this.scrollHandler=f(),this.scrollAnimations=b(),console.log("Scroll handlers initialized")}_handleLanguageChange(){console.log(`Language changed to: ${this.i18n.getCurrentLocale()}`),Object.values(this.components).forEach(t=>{t&&typeof t.update=="function"&&t.update()})}destroy(){console.log("Destroying application..."),Object.values(this.components).forEach(t=>{t&&typeof t.destroy=="function"&&t.destroy()}),this.scrollHandler&&this.scrollHandler.destroy(),this.scrollAnimations&&this.scrollAnimations.destroy(),this.components={},this.initialized=!1,console.log("Application destroyed")}}const I=new A;document.addEventListener("DOMContentLoaded",()=>{I.init().catch(l=>{console.error("Failed to initialize application:",l)})});
//# sourceMappingURL=main-CmNQnzKX.js.map
