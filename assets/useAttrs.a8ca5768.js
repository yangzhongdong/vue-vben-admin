import{c6 as s,b as t,a4 as e,a9 as a}from"./index.94b82568.js";const c=["class","style"],n=/^on[A-Z]/;function r(r={}){const o=a();if(!o)return{};const{excludeListeners:u=!1,excludeKeys:i=[]}=r,l=s({}),d=i.concat(c);return o.attrs=t(o.attrs),e((()=>{const s=(t=o.attrs,Object.keys(t).map((s=>[s,t[s]]))).reduce(((s,[t,e])=>(d.includes(t)||u&&n.test(t)||(s[t]=e),s)),{});var t;l.value=s})),l}export{r as u};