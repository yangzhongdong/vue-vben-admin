import{a7 as e,a8 as a,d as t,bT as s,bG as i,bH as l,h as r,o as d,i as o,j as c,l as m,aY as n,m as u}from"./index.899e68b1.js";import{_}from"./index.dc7cfeca.js";import"./usePageContext.914e04cb.js";const p=e((()=>a((()=>__import__("./index.1b7775be.js")),["/assets/index.1b7775be.js","/assets/index.5ddcb78c.css","/assets/index.899e68b1.js","/assets/index.f21ab055.css"]))),v=(()=>{const e=[];for(let a=1;a<2e4;a++)e.push({title:"列表项"+a});return e})();var h=t({components:{VScroll:p,Divider:s,PageWrapper:_},setup:()=>({data:v})});const f=n("data-v-ee54a078");i("data-v-ee54a078");const b=u("基础滚动示例"),g={class:"virtual-scroll-demo-wrap"},j={class:"virtual-scroll-demo__item"},x=u("即使不可见，也预先加载50条数据，防止空白"),w={class:"virtual-scroll-demo-wrap"},P={class:"virtual-scroll-demo__item"};l();const D=f(((e,a,t,s,i,l)=>{const n=r("Divider"),u=r("VScroll"),_=r("PageWrapper");return d(),o(_,{class:"virtual-scroll-demo"},{default:f((()=>[c(n,null,{default:f((()=>[b])),_:1}),c("div",g,[c(u,{itemHeight:41,items:e.data,height:300,width:300},{default:f((({item:e})=>[c("div",j,m(e.title),1)])),_:1},8,["items"])]),c(n,null,{default:f((()=>[x])),_:1}),c("div",w,[c(u,{itemHeight:41,items:e.data,height:300,width:300,bench:50},{default:f((({item:e})=>[c("div",P,m(e.title),1)])),_:1},8,["items"])])])),_:1})}));h.render=D,h.__scopeId="data-v-ee54a078";export default h;