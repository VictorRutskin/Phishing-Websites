"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_updatable-content_ts"],{54679(e,t,n){n.d(t,{H:()=>i,v:()=>r});var o=n(59753);function r(){let e=document.getElementById("ajax-error-message");e&&(e.hidden=!1)}function i(){let e=document.getElementById("ajax-error-message");e&&(e.hidden=!0)}(0,o.on)("deprecatedAjaxError","[data-remote]",(function(e){let t=e.detail,{error:n,text:o}=t;e.currentTarget===e.target&&"abort"!==n&&"canceled"!==n&&(/<html/.test(o)?(r(),e.stopImmediatePropagation()):setTimeout((function(){!e.defaultPrevented&&r()}),0))})),(0,o.on)("deprecatedAjaxSend","[data-remote]",(function(){i()})),(0,o.on)("click",".js-ajax-error-dismiss",(function(){i()}))},54650(e,t,n){n.d(t,{Bt:()=>l,DN:()=>c,KL:()=>d,Se:()=>u,qC:()=>m,sw:()=>s});var o=n(59753),r=n(76177),i=n(54679);function a(e,t,n){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:n}))}function l(e,t){t&&(function(e,t){if(!(e instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(t instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==t.type)throw TypeError("The specified element is not a submit button.");if(!e||e!==t.form)throw Error("The specified element is not owned by the form element.")}(e,t),(0,r.j)(t)),a(e,"submit",!0)&&e.submit()}function u(e,t){if("boolean"==typeof t){if(!(e instanceof HTMLInputElement))throw TypeError("only checkboxes can be set to boolean value");e.checked=t}else{if("checkbox"===e.type)throw TypeError("checkbox can't be set to string value");e.value=t}a(e,"change",!1)}function c(e,t){for(let n in t){let o=t[n],r=e.elements.namedItem(n);(r instanceof HTMLInputElement||r instanceof HTMLTextAreaElement)&&(r.value=o)}}function s(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),n=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==n&&"reset"!==n||e.isContentEditable}function f(e){return new URLSearchParams(e)}function d(e,t){let n=new URLSearchParams(e.search),o=f(t);for(let[e,t]of o)n.append(e,t);return n.toString()}function m(e){return f(new FormData(e)).toString()}(0,o.on)("click",".js-remote-submit-button",(async function(e){let t,n=e.currentTarget.form;e.preventDefault();try{t=await fetch(n.action,{method:n.method,body:new FormData(n),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}})}catch{}t&&!t.ok&&(0,i.v)()}))},64611(e,t,n){n.d(t,{M:()=>i,T:()=>a});var o=n(14840),r=n(54650);function i(e,t=!1){return a(e)||function(e,t){var n;let o=(n=e,u instanceof Element?u:n&&n.ownerDocument&&n.ownerDocument.activeElement?n.ownerDocument.activeElement:null);return!(null===o||t&&o===e)&&(!(o!==e||!(0,r.sw)(o))||(!(!e.contains(o)||f(o))||c instanceof Element&&e.contains(c)&&!!c.closest("details[open] > summary")))}(e,t)||function(e){return e.matches(":active:enabled")}(e)||function(e){return!(!e.closest(".is-dirty")&&!e.querySelector(".is-dirty"))}(e)}function a(e){for(let t of e.querySelectorAll("input, textarea"))if((t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement)&&l(t))return!0;return!1}function l(e){if(e instanceof HTMLInputElement&&("checkbox"===e.type||"radio"===e.type)){if(e.checked!==e.defaultChecked)return!0}else if(e.value!==e.defaultValue)return!0;return!1}let u,c;document.addEventListener("mouseup",(function(e){c=e.target}));let s="a[href], button";function f(e){if(e instanceof o.Z)return!0;let t=e instanceof HTMLAnchorElement||e instanceof HTMLButtonElement,n=e.parentElement?.classList.contains("task-list-item");if(t&&n)return!0;if(!(c instanceof Element))return!1;let r=e.closest(s);return!!r&&r===c.closest(s)}},9302(e,t,n){n.d(t,{IW:()=>s,Mw:()=>h,_C:()=>p,lO:()=>m,qA:()=>d,y0:()=>l});let o,r,i=[],a=0;function l(){return o}function u(){try{return Math.min(Math.max(0,history.length)||0,9007199254740991)}catch(e){return 0}}function c(){return u()-1+a}function s(e){o=e;let t=location.href;i[c()]={url:t,state:o},i.length=u(),window.dispatchEvent(new CustomEvent("statechange",{bubbles:!1,cancelable:!1}))}function f(){return(new Date).getTime()}function d(e,t,n){a=0;let o={_id:f(),...e};history.pushState(o,t,n),s(o)}function m(e,t,n){let r={...o,...e};history.replaceState(r,t,n),s(r)}function p(){let e=i[c()-1];if(e)return e.url}function h(){let e=i[c()+1];if(e)return e.url}o=function(){let e={_id:(new Date).getTime(),...history.state};return s(e),e}(),window.addEventListener("popstate",(function(e){let t=e.state;if(!t||!t._id&&!t.turbo?.restorationIdentifier)return;let n=t.turbo?.restorationIdentifier;i[c()-1]?.state?.turbo?.restorationIdentifier===n?a--:a++,s(t)}),!0),window.addEventListener("turbo:visit",(e=>{e instanceof CustomEvent&&(r=e.detail.action)})),window.addEventListener("turbo:load",(()=>{"restore"!==r&&(a=0,m(history.state,"",""))})),window.addEventListener("hashchange",(function(){if(u()>i.length){let e={_id:f()};history.replaceState(e,"",location.href),s(e)}}),!0),window.addEventListener("pageshow",(()=>{i=[],a=0}))},75662(e,t,n){function o(e,t){let n=e.createElement("template");return n.innerHTML=t,e.importNode(n.content,!0)}n.d(t,{r:()=>o})},76177(e,t,n){function o(e){let t=e.closest("form");if(!(t instanceof HTMLFormElement))return;let n=r(t);if(e.name){let o=e.matches("input[type=submit]")?"Submit":"",r=e.value||o;n||((n=document.createElement("input")).type="hidden",n.classList.add("js-submit-button-value"),t.prepend(n)),n.name=e.name,n.value=r}else n&&n.remove()}function r(e){let t=e.querySelector("input.js-submit-button-value");return t instanceof HTMLInputElement?t:null}n.d(t,{j:()=>o,u:()=>r})},22971(e,t,n){n.d(t,{H5:()=>s,Of:()=>m,x0:()=>d,z8:()=>f});var o=n(64611),r=n(36071),i=n(75662),a=n(96776),l=n(9302);let u=new WeakMap,c={};function s(){for(let e of Object.keys(c))delete c[e];let e=history.state||{};e.staleRecords=c,(0,l.lO)(e,"",location.href),window.location.reload()}function f(){if(Object.keys(c).length>0){let e=history.state||{};e.staleRecords=c,(0,l.lO)(e,"",location.href)}}async function d(e){if(u.get(e))return;let t=e.hasAttribute("data-retain-focus"),n=e.getAttribute("data-url");if(!n)throw Error("could not get url");let r=new AbortController;u.set(e,r);try{let i=await fetch(n,{signal:r.signal,headers:{Accept:"text/html","X-Requested-With":"XMLHttpRequest"}});if(!i.ok)return;let a=await i.text();return(0,o.M)(e,t)?void console.warn("Failed to update content with interactions",e):(c[n]=a,p(e,a,t))}catch{}finally{u.delete(e)}}async function m(e,t,n=!1){u.get(e)?.abort();let o=e.closest(".js-updatable-content[data-url], .js-updatable-content [data-url]");return!n&&o&&o===e&&(c[o.getAttribute("data-url")||""]=t),p(e,t)}function p(e,t,n=!1){return(0,a._8)(document,(()=>{let o=(0,i.r)(document,t.trim()),r=n&&e.ownerDocument&&e===e.ownerDocument.activeElement?o.querySelector("*"):null,a=Array.from(e.querySelectorAll("details[open][id]")).map((e=>e.id));for(let t of("DETAILS"===e.tagName&&e.id&&e.hasAttribute("open")&&a.push(e.id),e.querySelectorAll(".js-updatable-content-preserve-scroll-position"))){let e=t.getAttribute("data-updatable-content-scroll-position-id")||"";h.set(e,t.scrollTop)}for(let e of a){let t=o.querySelector(`#${e}`);t&&t.setAttribute("open","")}e.replaceWith(o),r instanceof HTMLElement&&r.focus()}))}let h=new Map;(0,r.N7)(".js-updatable-content-preserve-scroll-position",{constructor:HTMLElement,add(e){let t=e.getAttribute("data-updatable-content-scroll-position-id");if(!t)return;let n=h.get(t);null!=n&&(e.scrollTop=n)}})}}]);