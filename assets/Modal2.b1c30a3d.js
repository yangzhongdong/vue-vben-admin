import{d as e,h as s,o as t,i as o,w as i,j as a,a0 as r,m as l}from"./index.c87ef19b.js";import"./_stringToArray.c34e650e.js";import"./domUtils.f3b3d188.js";import"./index.1cf93748.js";import{_ as n,a as d}from"./index.4ac4bb42.js";import"./FullscreenOutlined.27e35813.js";import"./RightOutlined.74dbef9c.js";import"./useTimeout.04cd7f25.js";import"./index.953003a9.js";import"./animation.c5c54528.js";import"./useScrollTo.a963268e.js";import"./useAttrs.c62c06aa.js";import"./useWindowSizeFn.2447d2a1.js";var c=e({components:{BasicModal:n},setup(){const[e,{closeModal:s,setModalProps:t}]=d();return{register:e,closeModal:s,setModalProps:()=>{t({title:"Modal New Title"})}}}});const p=l("从内部关闭弹窗"),m=l("从内部修改title");c.render=function(e,l,n,d,c,u){const j=s("a-button"),f=s("BasicModal");return t(),o(f,r(e.$attrs,{onRegister:e.register,title:"Modal Title",helpMessage:["提示1","提示2"]}),{default:i((()=>[a(j,{type:"primary",onClick:e.closeModal,class:"mr-2"},{default:i((()=>[p])),_:1},8,["onClick"]),a(j,{type:"primary",onClick:e.setModalProps},{default:i((()=>[m])),_:1},8,["onClick"])])),_:1},16,["onRegister"])};export default c;