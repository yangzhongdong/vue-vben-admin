import{Z as t,aU as e,r as a,cP as n}from"./index.5a06cc5a.js";function o(o,r){if(!t(o))throw new Error("handle is not Function!");const{readyRef:s,stop:i,start:u}=function(t){const e=a(!1);let o;function r(){e.value=!1,o&&window.clearTimeout(o)}function s(){r(),o=setTimeout((()=>{e.value=!0}),t)}return s(),n(r),{readyRef:e,stop:r,start:s}}(r);return e(s,(t=>{t&&o()}),{immediate:!1}),{readyRef:s,stop:i,start:u}}export{o as u};