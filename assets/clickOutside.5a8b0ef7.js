import{b as u}from"./domUtils.aa6aef94.js";import{b_ as y}from"./index.de7a3c72.js";const a=new Map;let d;y||(u(document,"mousedown",e=>d=e),u(document,"mouseup",e=>{for(const{documentHandler:t}of a.values())t(e,d)}));function l(e,t){let o=[];return Array.isArray(t.arg)?o=t.arg:o.push(t.arg),function(i,p){const r=t.instance.popperRef,s=i.target,n=p.target,f=!t||!t.instance,m=!s||!n,g=e.contains(s)||e.contains(n),v=e===s,x=o.length&&o.some(c=>c==null?void 0:c.contains(s))||o.length&&o.includes(n),C=r&&(r.contains(s)||r.contains(n));f||m||g||v||x||C||t.value()}}const H={beforeMount(e,t){a.set(e,{documentHandler:l(e,t),bindingFn:t.value})},updated(e,t){a.set(e,{documentHandler:l(e,t),bindingFn:t.value})},unmounted(e){a.delete(e)}};export{H as C};