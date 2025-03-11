let i=document.getElementById("modal-root");i||(i=document.createElement("div"),i.id="modal-root",document.body.appendChild(i));const t={isOpen:!1,activeModal:null,modalContent:null};function c(){const e=document.createElement("div");return e.className="modal-overlay",e.addEventListener("click",o=>{o.target===e&&l()}),e}function m(){const e=document.createElement("div");return e.className="modal-container",e}function s(e,o={}){t.isOpen&&l();const n=c(),a=m();if(typeof e=="string")a.innerHTML=e;else if(e instanceof HTMLElement)a.appendChild(e);else{console.error("Неподдерживаемый тип контента для модального окна");return}if(o.showCloseButton!==!1){const d=document.createElement("button");d.className="modal-close-button",d.innerHTML="&times;",d.addEventListener("click",l),a.appendChild(d)}return o.className&&a.classList.add(o.className),n.appendChild(a),i.appendChild(n),document.body.style.overflow="hidden",t.isOpen=!0,t.activeModal=n,t.modalContent=e,document.addEventListener("keydown",r),setTimeout(()=>{n.classList.add("modal-overlay--visible"),a.classList.add("modal-container--visible")},10),{close:l,updateContent:d=>u(a,d)}}function l(){if(!t.isOpen||!t.activeModal)return;const e=t.activeModal,o=e.querySelector(".modal-container");e.classList.remove("modal-overlay--visible"),o.classList.remove("modal-container--visible"),document.removeEventListener("keydown",r),setTimeout(()=>{e.parentNode&&e.parentNode.removeChild(e),document.body.style.overflow="",t.isOpen=!1,t.activeModal=null,t.modalContent=null},300)}function u(e,o){const n=e.querySelector(".modal-content")||e;for(;n.firstChild;)n.removeChild(n.firstChild);typeof o=="string"?n.innerHTML=o:o instanceof HTMLElement&&n.appendChild(o),t.modalContent=o}function r(e){e.key==="Escape"&&t.isOpen&&l()}function p(){if(console.log("Модуль модальных окон инициализирован"),!document.querySelector("style[data-modal-styles]")){const e=document.createElement("style");e.setAttribute("data-modal-styles","true"),e.textContent=`
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 1000;
        opacity: 0;
        transition: opacity 0.3s ease;
      }
      
      .modal-overlay--visible {
        opacity: 1;
      }
      
      .modal-container {
        background-color: #fff;
        border-radius: 8px;
        padding: 20px;
        max-width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        transform: scale(0.8);
        transition: transform 0.3s ease;
        position: relative;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
      }
      
      .modal-container--visible {
        transform: scale(1);
      }
      
      .modal-close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        background: none;
        border: none;
        font-size: 24px;
        cursor: pointer;
        color: #999;
        transition: color 0.2s;
      }
      
      .modal-close-button:hover {
        color: #333;
      }
    `,document.head.appendChild(e)}window.openModal=s,window.closeModal=l}if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",()=>{if(!document.getElementById("modal-root")){const e=document.createElement("div");e.id="modal-root",document.body.appendChild(e)}});else if(!document.getElementById("modal-root")){const e=document.createElement("div");e.id="modal-root",document.body.appendChild(e)}const f={openModal:s,closeModal:l,initModal:p};export{l as closeModal,f as default,p as initModal,s as openModal};
