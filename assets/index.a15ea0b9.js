import{d as C,r as b,e as u,g as x,h as t,o as y,i as g,w as n,j as a,m as v}from"./index.de7a3c72.js";import{I as d}from"./index.2e0fefa1.js";import{a as h}from"./index.b5f656c2.js";import{u as w}from"./useCopyToClipboard.719dd0c8.js";import{_ as F}from"./index.46623d23.js";import"./SearchOutlined.5cd4b61b.js";import"./EyeOutlined.e4d8b81b.js";import"./index.cf88fb23.js";import"./domUtils.aa6aef94.js";import"./_stringToArray.9f34c09e.js";import"./RightOutlined.dcad5eff.js";import"./index.95c10fda.js";import"./useTimeout.5494657f.js";import"./useScrollTo.3c6228cf.js";import"./animation.29409132.js";import"./index.492a2c9c.js";import"./index.55f43c00.js";import"./EllipsisOutlined.ba16b190.js";import"./types.ead79a33.js";import"./isEqual.42834150.js";import"./toInteger.e48028d2.js";import"./DownOutlined.2e949c36.js";import"./index.22fd658f.js";import"./usePageContext.05da5891.js";import"./transButton.da8a2266.js";import"./ArrowLeftOutlined.ddcf4a87.js";var l=C({name:"Copy",components:{CollapseContainer:h,PageWrapper:F,[d.name]:d},setup(){const e=b(""),{createMessage:o}=x(),{clipboardRef:i,copiedRef:r}=w();function p(){const s=u(e);if(!s){o.warning("\u8BF7\u8F93\u5165\u8981\u62F7\u8D1D\u7684\u5185\u5BB9\uFF01");return}i.value=s,u(r)&&o.warning("copy success\uFF01")}return{handleCopy:p,value:e}}});const B={class:"flex justify-center"},O=v("Copy");function T(e,o,i,r,p,s){const c=t("a-input"),m=t("a-button"),f=t("CollapseContainer"),j=t("PageWrapper");return y(),g(j,{title:"\u6587\u672C\u590D\u5236\u793A\u4F8B"},{default:n(()=>[a(f,{class:"px-20 bg-white w-full h-32 rounded-md",title:"Copy Example"},{default:n(()=>[a("div",B,[a(c,{placeholder:"\u8BF7\u8F93\u5165",value:e.value,"onUpdate:value":o[1]||(o[1]=_=>e.value=_)},null,8,["value"]),a(m,{type:"primary",onClick:e.handleCopy},{default:n(()=>[O]),_:1},8,["onClick"])])]),_:1})]),_:1})}l.render=T;export default l;