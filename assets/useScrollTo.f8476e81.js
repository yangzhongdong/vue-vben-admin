import{r as o,c5 as a,e as t,a_ as r}from"./index.038a8ed4.js";import{r as s}from"./animation.36e00bb4.js";function n({el:n,to:e,duration:c=500,callback:l}){const i=o(!1),u=(o=>o.scrollTop)(n),p=e-u;let f=0;c=a(c)?500:c;const m=function(){if(!t(i))return;f+=20;const o=(a=f,e=u,b=p,(a/=c/2)<1?b/2*a*a+e:-b/2*(--a*(a-2)-1)+e);var a,e,b;((o,a)=>{o.scrollTop=a})(n,o),f<c&&t(i)?s(m):l&&r(l)&&l()};return{start:()=>{i.value=!0,m()},stop:()=>{i.value=!1}}}export{n as u};