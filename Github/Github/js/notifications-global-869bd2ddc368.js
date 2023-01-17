"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["notifications-global"],{54679(e,t,o){o.d(t,{H:()=>l,v:()=>s});var i=o(59753);function s(){let e=document.getElementById("ajax-error-message");e&&(e.hidden=!1)}function l(){let e=document.getElementById("ajax-error-message");e&&(e.hidden=!0)}(0,i.on)("deprecatedAjaxError","[data-remote]",(function(e){let t=e.detail,{error:o,text:i}=t;e.currentTarget===e.target&&"abort"!==o&&"canceled"!==o&&(/<html/.test(i)?(s(),e.stopImmediatePropagation()):setTimeout((function(){!e.defaultPrevented&&s()}),0))})),(0,i.on)("deprecatedAjaxSend","[data-remote]",(function(){l()})),(0,i.on)("click",".js-ajax-error-dismiss",(function(){l()}))},54650(e,t,o){o.d(t,{Bt:()=>a,DN:()=>u,KL:()=>p,Se:()=>r,qC:()=>h,sw:()=>c});var i=o(59753),s=o(76177),l=o(54679);function n(e,t,o){return e.dispatchEvent(new CustomEvent(t,{bubbles:!0,cancelable:o}))}function a(e,t){t&&(function(e,t){if(!(e instanceof HTMLFormElement))throw TypeError("The specified element is not of type HTMLFormElement.");if(!(t instanceof HTMLElement))throw TypeError("The specified element is not of type HTMLElement.");if("submit"!==t.type)throw TypeError("The specified element is not a submit button.");if(!e||e!==t.form)throw Error("The specified element is not owned by the form element.")}(e,t),(0,s.j)(t)),n(e,"submit",!0)&&e.submit()}function r(e,t){if("boolean"==typeof t){if(!(e instanceof HTMLInputElement))throw TypeError("only checkboxes can be set to boolean value");e.checked=t}else{if("checkbox"===e.type)throw TypeError("checkbox can't be set to string value");e.value=t}n(e,"change",!1)}function u(e,t){for(let o in t){let i=t[o],s=e.elements.namedItem(o);(s instanceof HTMLInputElement||s instanceof HTMLTextAreaElement)&&(s.value=i)}}function c(e){if(!(e instanceof HTMLElement))return!1;let t=e.nodeName.toLowerCase(),o=(e.getAttribute("type")||"").toLowerCase();return"select"===t||"textarea"===t||"input"===t&&"submit"!==o&&"reset"!==o||e.isContentEditable}function d(e){return new URLSearchParams(e)}function p(e,t){let o=new URLSearchParams(e.search),i=d(t);for(let[e,t]of i)o.append(e,t);return o.toString()}function h(e){return d(new FormData(e)).toString()}(0,i.on)("click",".js-remote-submit-button",(async function(e){let t,o=e.currentTarget.form;e.preventDefault();try{t=await fetch(o.action,{method:o.method,body:new FormData(o),headers:{Accept:"application/json","X-Requested-With":"XMLHttpRequest"}})}catch{}t&&!t.ok&&(0,l.v)()}))},76177(e,t,o){function i(e){let t=e.closest("form");if(!(t instanceof HTMLFormElement))return;let o=s(t);if(e.name){let i=e.matches("input[type=submit]")?"Submit":"",s=e.value||i;o||((o=document.createElement("input")).type="hidden",o.classList.add("js-submit-button-value"),t.prepend(o)),o.name=e.name,o.value=s}else o&&o.remove()}function s(e){let t=e.querySelector("input.js-submit-button-value");return t instanceof HTMLInputElement?t:null}o.d(t,{j:()=>i,u:()=>s})},47862(e,t,o){var i,s=o(76006),l=o(54679),n=o(54650),a=function(e,t,o,i){var s,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(l<3?s(n):l>3?s(t,o,n):s(t,o))||n);return l>3&&n&&Object.defineProperty(t,o,n),n};let r=class extends HTMLElement{connectedCallback(){this.querySelector(".js-label-subscriptions-load")?.addEventListener("loadend",(()=>{this.subscriptionsLabels.length>0&&(this.updateCheckedState("custom"),this.updateMenuButtonCopy("custom"))}))}async submitCustomForm(e){await this.submitForm(e),this.closeMenu()}async submitForm(e){e.preventDefault(),(0,l.H)();let t=e.currentTarget,o=new FormData(t),i=await self.fetch(t.action,{method:t.method,body:o,headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json"}});if(!i.ok)return void(0,l.v)();let s=await i.json(),n=o.get("do");"string"==typeof n&&this.updateCheckedState(n),"string"==typeof n&&this.updateMenuButtonCopy(n),this.updateSocialCount(s.count),this.applyInputsCheckedPropertiesToAttributesForNextFormReset(),this.closeMenu()}updateMenuButtonCopy(e){this.unwatchButtonCopy.hidden=!("subscribed"===e||"custom"===e),this.stopIgnoringButtonCopy.hidden="ignore"!==e,this.watchButtonCopy.hidden=!("subscribed"!==e&&"custom"!==e&&"ignore"!==e)}applyInputsCheckedPropertiesToAttributesForNextFormReset(){for(let e of[...this.threadTypeCheckboxes])e.toggleAttribute("checked",e.checked)}updateCheckedState(e){for(let t of this.subscriptionButtons)t.setAttribute("aria-checked",t.value===e?"true":"false");if("custom"===e)this.customButton.setAttribute("aria-checked","true");else{for(let e of(this.customButton.setAttribute("aria-checked","false"),[...this.threadTypeCheckboxes]))(0,n.Se)(e,!1);if(void 0!==this.subscriptionsContainer){for(let e=0;e<this.subscriptionsLabels.length;e++)this.subscriptionsLabels[e].remove();void 0!==this.subscriptionsSubtitle&&this.subscriptionsSubtitle.toggleAttribute("hidden",!1),this.subscriptionsContainer.textContent=""}}}updateSocialCount(e){this.socialCount&&(this.socialCount.textContent=e,this.socialCount.setAttribute("aria-label",`${this.pluralizeUsers(e)} watching this repository`))}pluralizeUsers(e){return 1===parseInt(e)?"1 user is":`${e} users are`}handleDialogLabelToggle(e){let t=e.detail.wasChecked,o=e.detail.toggledLabelId,i=e.detail.templateLabelElementClone;if(t){for(let e=0;e<this.subscriptionsLabels.length;e++)if(this.subscriptionsLabels[e].getAttribute("data-label-id")===o){this.subscriptionsLabels[e].remove();break}}else i.removeAttribute("hidden"),i.setAttribute("data-targets","notifications-list-subscription-form.subscriptionsLabels"),this.subscriptionsContainer.appendChild(i)}openCustomDialog(e){e.preventDefault(),e.stopPropagation(),this.menu.toggleAttribute("hidden",!0),this.enableApplyButtonAndCheckbox(),this.saveCurrentLabelsState(),this.customDialog.toggleAttribute("hidden",!1),setTimeout((()=>{this.customDialog.querySelector("input[type=checkbox][autofocus]")?.focus()}),0)}enableApplyButtonAndCheckbox(){this.customDialog.querySelectorAll('[data-type="label"]:not([hidden])').length>0&&(this.customSubmit.removeAttribute("disabled"),this.threadTypeCheckboxes[0].checked=!0)}closeCustomDialog(e){e.preventDefault(),e.stopPropagation(),this.menu.toggleAttribute("hidden",!1),this.customDialog.toggleAttribute("hidden",!0),setTimeout((()=>{this.customButton.focus()}),0)}resetFilterLabelsDialog(e){e.preventDefault(),e.stopPropagation();for(let e=0;e<this.subscriptionsLabels.length;e++){let t=this.subscriptionsLabels[e].getAttribute("data-label-id");for(let e=0;e<this.dialogLabelItems.length;e++)if(this.dialogLabelItems[e].labelId===t){this.dialogLabelItems[e].setCheckedForDropdownLabel(!1);break}}for(let e=0;e<Object.keys(this.lastAppliedLabels).length;e++){let t=Object.keys(this.lastAppliedLabels)[e];for(let e=0;e<this.dialogLabelItems.length;e++)if(this.dialogLabelItems[e].labelId===t){this.dialogLabelItems[e].setCheckedForDropdownLabel(!0);break}}this.subscriptionsContainer.replaceChildren(...Object.values(this.lastAppliedLabels)),this.closeFilterLabelsDialog(e)}openFilterLabelsDialog(e){e.preventDefault(),e.stopPropagation(),this.saveCurrentLabelsState(),this.customDialog.toggleAttribute("hidden",!0),this.filterLabelsDialog.toggleAttribute("hidden",!1),setTimeout((()=>{this.filterLabelsDialog.querySelector("input[type=checkbox][autofocus]")?.focus()}),0)}closeFilterLabelsDialog(e){e.preventDefault(),e.stopPropagation(),this.menu.toggleAttribute("hidden",!0),this.customDialog.toggleAttribute("hidden",!1),this.filterLabelsDialog.toggleAttribute("hidden",!0)}applyFilterLabelsDialog(e){e.preventDefault(),e.stopPropagation(),this.saveCurrentLabelsState(),this.hideFilterSubtitle(),this.enableIssuesCheckbox(),this.closeFilterLabelsDialog(e)}enableIssuesCheckbox(){let e=Object.keys(this.lastAppliedLabels).length>0;e&&this.threadTypeCheckboxes.length>0&&(this.threadTypeCheckboxes[0].checked=e),this.threadTypeCheckboxesUpdated()}hideFilterSubtitle(){let e=Object.keys(this.lastAppliedLabels).length>0;this.subscriptionsSubtitle.toggleAttribute("hidden",e)}saveCurrentLabelsState(){this.lastAppliedLabels={},this.labelInputs.textContent="";for(let e=0;e<this.subscriptionsLabels.length;e++){let t=this.subscriptionsLabels[e].getAttribute("data-label-id");t&&(this.lastAppliedLabels[t]=this.subscriptionsLabels[e].cloneNode(!0),this.appendLabelToFormInput(t))}}appendLabelToFormInput(e){let t=document.createElement("input");t.setAttribute("type","hidden"),t.setAttribute("name","labels[]"),t.setAttribute("value",e),this.labelInputs.appendChild(t)}detailsToggled(){this.menu.toggleAttribute("hidden",!1),this.customDialog.toggleAttribute("hidden",!0)}submitCustom(e){e.preventDefault(),this.details.toggleAttribute("open",!1)}threadTypeCheckboxesUpdated(){let e=!this.threadTypeCheckboxes.some((e=>e.checked));this.customSubmit.disabled=e}closeMenu(){this.details.toggleAttribute("open",!1)}constructor(...e){super(...e),this.lastAppliedLabels={}}};a([s.fA],r.prototype,"details",void 0),a([s.fA],r.prototype,"menu",void 0),a([s.fA],r.prototype,"customButton",void 0),a([s.fA],r.prototype,"customDialog",void 0),a([s.fA],r.prototype,"filterLabelsDialog",void 0),a([s.GO],r.prototype,"subscriptionButtons",void 0),a([s.GO],r.prototype,"subscriptionsLabels",void 0),a([s.fA],r.prototype,"labelInputs",void 0),a([s.fA],r.prototype,"subscriptionsSubtitle",void 0),a([s.fA],r.prototype,"socialCount",void 0),a([s.fA],r.prototype,"unwatchButtonCopy",void 0),a([s.fA],r.prototype,"stopIgnoringButtonCopy",void 0),a([s.fA],r.prototype,"watchButtonCopy",void 0),a([s.GO],r.prototype,"threadTypeCheckboxes",void 0),a([s.fA],r.prototype,"customSubmit",void 0),a([s.fA],r.prototype,"subscriptionsContainer",void 0),a([s.GO],r.prototype,"dialogLabelItems",void 0),r=a([s.Ih],r);var u=function(e,t,o,i){var s,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(l<3?s(n):l>3?s(t,o,n):s(t,o))||n);return l>3&&n&&Object.defineProperty(t,o,n),n};let c=class extends HTMLElement{closeMenu(){this.details.toggleAttribute("open",!1)}};u([s.fA],c.prototype,"details",void 0),c=u([s.Ih],c);var d=function(e,t,o,i){var s,l=arguments.length,n=l<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)n=Reflect.decorate(e,t,o,i);else for(var a=e.length-1;a>=0;a--)(s=e[a])&&(n=(l<3?s(n):l>3?s(t,o,n):s(t,o))||n);return l>3&&n&&Object.defineProperty(t,o,n),n};let p=((i=class extends HTMLElement{toggleDropdownLabel(e){if(e.preventDefault(),e.stopPropagation(),this.label){let e="true"===this.label.getAttribute("aria-checked");this.setCheckedForDropdownLabel(!e),this.dispatchEvent(new CustomEvent("notifications-dialog-label-toggled",{detail:{wasChecked:e,toggledLabelId:this.labelId,templateLabelElementClone:this.hiddenLabelTemplate.cloneNode(!0)},bubbles:!0}))}}setCheckedForDropdownLabel(e){this.label.setAttribute("aria-checked",e.toString())}}).attrPrefix="",i);d([s.fA],p.prototype,"label",void 0),d([s.fA],p.prototype,"hiddenLabelTemplate",void 0),d([s.fA],p.prototype,"hiddenCheckboxInput",void 0),d([s.Lj],p.prototype,"labelId",void 0),p=d([s.Ih],p)}},e=>{e.O(0,["vendors-node_modules_delegated-events_dist_index_js-node_modules_github_catalyst_lib_index_js-06ff531"],(()=>(t=>e(e.s=t))(47862)));e.O()}]);