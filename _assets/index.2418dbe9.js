import{a as t,bd as e,cJ as o,ay as a,o as s,j as n,cQ as l,bi as r,K as i,aR as d}from"./index.9ddc54c2.js";import{g as p}from"./tsxHelper.877239e6.js";import{b as y,r as f}from"./domUtils.34789ce4.js";function g(s,n="top center 0",l){return t({name:s,props:{group:{type:Boolean,default:!1},mode:{type:String,default:l},origin:{type:String,default:n}},setup(t,{slots:n,attrs:l}){const r=e=>{e.style.transformOrigin=t.origin};return()=>{const i=t.group?o:e;return a(i,{name:s,mode:t.mode,...l,onBeforeEnter:r},(()=>p(n)))}}})}var c=t({name:"CollapseTransition",setup:()=>({on:{beforeEnter(t){y(t,"collapse-transition"),t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.style.height="0",t.style.paddingTop=0,t.style.paddingBottom=0},enter(t){t.dataset.oldOverflow=t.style.overflow,0!==t.scrollHeight?(t.style.height=t.scrollHeight+"px",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom):(t.style.height="",t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom),t.style.overflow="hidden"},afterEnter(t){f(t,"collapse-transition"),t.style.height="",t.style.overflow=t.dataset.oldOverflow},beforeLeave(t){t.dataset||(t.dataset={}),t.dataset.oldPaddingTop=t.style.paddingTop,t.dataset.oldPaddingBottom=t.style.paddingBottom,t.dataset.oldOverflow=t.style.overflow,t.style.height=t.scrollHeight+"px",t.style.overflow="hidden"},leave(t){0!==t.scrollHeight&&(y(t,"collapse-transition"),t.style.transitionProperty="height",t.style.height=0,t.style.paddingTop=0,t.style.paddingBottom=0)},afterLeave(t){f(t,"collapse-transition"),t.style.height="",t.style.overflow=t.dataset.oldOverflow,t.style.paddingTop=t.dataset.oldPaddingTop,t.style.paddingBottom=t.dataset.oldPaddingBottom}}})});const v=r("data-v-5edc2f91"),m=v(((t,o,a,r,d,p)=>(s(),n(e,l(t.on),{default:v((()=>[i(t.$slots,"default")])),_:3},16))));c.render=m,c.__scopeId="data-v-5edc2f91";var h=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:c}),u=t({name:"CollapseTransition",setup:(t,{slots:e})=>()=>a(c,null,(()=>p(e)))});const w=g("fade-transition"),_=g("scale-transition"),B=g("slide-y-transition"),T=g("scroll-y-transition"),P=g("slide-y-reverse-transition"),x=g("scroll-y-reverse-transition"),S=g("slide-x-transition"),b=g("scroll-x-transition"),L=g("slide-x-reverse-transition"),E=g("scroll-x-reverse-transition"),C=g("scale-rotate-transition"),H=function(o,s,n="in-out"){return t({name:o,props:{mode:{type:String,default:n}},setup:(t,{attrs:n,slots:l})=>()=>a(e,{name:o,mode:t.mode,...n,onBeforeEnter:s.beforeEnter,onEnter:s.enter,onLeave:s.leave,onAfterLeave:s.afterLeave,onLeaveCancelled:s.afterLeave},(()=>p(l)))})}("expand-x-transition",function(t="",e=!1){const o=e?"width":"height",a=`offset${s=o,s.charAt(0).toUpperCase()+s.slice(1)}`;var s;return{beforeEnter(t){t._parent=t.parentNode,t._initialStyle={transition:t.style.transition,overflow:t.style.overflow,[o]:t.style[o]}},enter(e){const o=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden",e.offsetHeight,e.style.transition=o.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((()=>{}))},afterEnter:l,enterCancelled:l,leave(t){t._initialStyle={transition:"",overflow:t.style.overflow,[o]:t.style[o]},t.style.overflow="hidden",t.style[o]=`${t[a]}px`,t.offsetHeight,requestAnimationFrame((()=>t.style[o]="0"))},afterLeave:n,leaveCancelled:n};function n(e){t&&e._parent&&e._parent.classList.remove(t),l(e)}function l(t){const e=t._initialStyle[o];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[o]=e),Reflect.deleteProperty(t,"_initialStyle")}}("",!0)),j=d((()=>Promise.resolve().then((function(){return h}))));export{u as C,H as E,w as F,_ as S,B as a,T as b,P as c,x as d,S as e,b as f,L as g,E as h,C as i,j};