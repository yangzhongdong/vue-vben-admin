import{d as s,r as o,e as a,bG as l,bH as r,h as e,o as t,i as c,j as n,ab as i,ac as d,l as m,aY as p,m as u}from"./index.899e68b1.js";import"./_stringToArray.45d16e42.js";import"./domUtils.511e170d.js";import{a as f,_ as j}from"./index.1156589c.js";import"./RightOutlined.7a52ca15.js";import"./useTimeout.1aa049d6.js";import"./index.8a587a60.js";import"./animation.ce68d404.js";import"./useScrollTo.14ce33f8.js";import{_ as b}from"./index.dc7cfeca.js";import"./usePageContext.914e04cb.js";var _=s({components:{CollapseContainer:f,ScrollContainer:j,PageWrapper:b},setup(){const s=o(null),l=()=>{const o=a(s);if(!o)throw new Error("scroll is Null");return o};return{scrollTo:function(s){l().scrollTo(s)},scrollRef:s,scrollBottom:function(){l().scrollBottom()}}}});const x=p("data-v-6abcde9e");l("data-v-6abcde9e");const C={class:"my-4"},T=u("滚动到100px位置"),v=u("滚动到800px位置"),g=u("滚动到顶部"),k=u("滚动到底部"),y={class:"scroll-wrap"},h={class:"p-3"};r();const w=x(((s,o,a,l,r,p)=>{const u=e("a-button"),f=e("ScrollContainer"),j=e("PageWrapper");return t(),c(j,{title:"滚动组件函数示例",content:"基于el-scrollbar"},{default:x((()=>[n("div",C,[n(u,{onClick:o[1]||(o[1]=o=>s.scrollTo(100)),class:"mr-2"},{default:x((()=>[T])),_:1}),n(u,{onClick:o[2]||(o[2]=o=>s.scrollTo(800)),class:"mr-2"},{default:x((()=>[v])),_:1}),n(u,{onClick:o[3]||(o[3]=o=>s.scrollTo(0)),class:"mr-2"},{default:x((()=>[g])),_:1}),n(u,{onClick:o[4]||(o[4]=o=>s.scrollBottom()),class:"mr-2"},{default:x((()=>[k])),_:1})]),n("div",y,[n(f,{class:"mt-4",ref:"scrollRef"},{default:x((()=>[n("ul",h,[(t(),c(i,null,d(100,(s=>n("li",{key:s,class:"p-2",style:{border:"1px solid #eee"}},m(s),1))),64))])])),_:1},512)])])),_:1})}));_.render=w,_.__scopeId="data-v-6abcde9e";export default _;