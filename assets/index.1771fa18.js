import{d as e,cr as t,cs as o,h as i,bD as n,o as s,i as r,a2 as a,j as d,bz as l}from"./index.038a8ed4.js";import"./DownOutlined.d67419d1.js";import"./index.eb024b31.js";import"./index.940e2f2a.js";import"./RightOutlined.101d5456.js";import"./index.3d5ce4ae.js";import"./types.749efd5b.js";import"./toInteger.555223b8.js";import"./isEqual.d82ae6f0.js";import"./transButton.4a4fa5a4.js";import{_ as p}from"./index.9f92e1b3.js";import"./index.8d91dadc.js";import"./usePageContext.d0db1a38.js";const u={event:"mousedown",transition:400},c={beforeMount:(e,t)=>{if(!1===t.value)return;const o=e.getAttribute("ripple-background");var i,n;i=Object.keys(t.modifiers),n=u,i.forEach((e=>{isNaN(Number(e))?n.event=e:n.transition=e}));const s=o||c.background,r=c.zIndex;e.addEventListener(u.event,(t=>{!function({event:e,el:t,zIndex:o,background:i}){var n,s;const r=parseInt(getComputedStyle(t).borderWidth.replace("px","")),a=e.clientX||e.touches[0].clientX,d=e.clientY||e.touches[0].clientY,l=t.getBoundingClientRect(),{left:p,top:c}=l,{offsetWidth:m,offsetHeight:g}=t,{transition:v}=u,b=a-p,h=d-c,f=Math.max(b,m-b),x=Math.max(h,g-h),j=window.getComputedStyle(t),R=Math.sqrt(f*f+x*x),y=r>0?r:0,L=document.createElement("div"),E=document.createElement("div");Object.assign(null!=(n=L.style)?n:{},{className:"ripple",marginTop:"0px",marginLeft:"0px",width:"1px",height:"1px",transition:`all ${v}ms cubic-bezier(0.4, 0, 0.2, 1)`,borderRadius:"50%",pointerEvents:"none",position:"relative",zIndex:null!=o?o:"9999",backgroundColor:null!=i?i:"rgba(0, 0, 0, 0.12)"}),Object.assign(null!=(s=E.style)?s:{},{className:"ripple-container",position:"absolute",left:0-y+"px",top:0-y+"px",height:"0",width:"0",pointerEvents:"none",overflow:"hidden"});const k=t.style.position.length>0?t.style.position:getComputedStyle(t).position;"relative"!==k&&(t.style.position="relative");E.appendChild(L),t.appendChild(E),Object.assign(L.style,{marginTop:`${h}px`,marginLeft:`${b}px`});const{borderTopLeftRadius:C,borderTopRightRadius:T,borderBottomLeftRadius:w,borderBottomRightRadius:N}=j;function B(){setTimeout((()=>{L.style.backgroundColor="rgba(0, 0, 0, 0)"}),250),setTimeout((()=>{var e;null==(e=null==E?void 0:E.parentNode)||e.removeChild(E)}),850),t.removeEventListener("mouseup",B,!1),t.removeEventListener("mouseleave",B,!1),t.removeEventListener("dragstart",B,!1),setTimeout((()=>{let e=!0;for(let o=0;o<t.childNodes.length;o++)"ripple-container"===t.childNodes[o].className&&(e=!1);e&&(t.style.position="static"!==k?k:"")}),u.transition+260)}Object.assign(E.style,{width:`${m}px`,height:`${g}px`,direction:"ltr",borderTopLeftRadius:C,borderTopRightRadius:T,borderBottomLeftRadius:w,borderBottomRightRadius:N}),setTimeout((()=>{var e;const t=2*R+"px";Object.assign(null!=(e=L.style)?e:{},{width:t,height:t,marginLeft:b-R+"px",marginTop:h-R+"px"})}),0),"mousedown"===e.type?(t.addEventListener("mouseup",B,!1),t.addEventListener("mouseleave",B,!1),t.addEventListener("dragstart",B,!1)):B();t.setBackground=e=>{e&&(L.style.backgroundColor=e)}}({event:t,el:e,background:s,zIndex:r})}))},updated(e,t){var o,i;if(!t.value)return void(null==(o=null==e?void 0:e.clearRipple)||o.call(e));const n=e.getAttribute("ripple-background");null==(i=null==e?void 0:e.setBackground)||i.call(e,n)}};var m=e({components:{PageWrapper:p},directives:{Ripple:c}});const g=l("data-v-d699c812");t("data-v-d699c812");const v={class:"demo-box"};o();const b=g(((e,t,o,l,p,u)=>{const c=i("PageWrapper"),m=n("ripple");return s(),r(c,{title:"Ripple示例"},{default:g((()=>[a(d("div",v,"content",512),[[m]])])),_:1})}));m.render=b,m.__scopeId="data-v-d699c812";export default m;