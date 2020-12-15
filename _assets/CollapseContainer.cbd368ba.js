let e=document.createElement("style");e.innerHTML=".collapse-container{background:#fff;border-radius:2px;transition:.3s ease-in-out}.collapse-container.no-shadow{box-shadow:none}.collapse-container__header{display:flex;height:32px;margin-bottom:10px;justify-content:space-between;align-items:center}.collapse-container__action{display:flex;align-items:center}",document.head.appendChild(e);import{a,i as t,o as s,j as n,k as o,w as i,ad as l,p as r,n as p,x as c,m as d,q as m,r as f,v as u,aI as x,aJ as y}from"./index.acbb87a5.js";import"./xlsx.a48e520c.js";import"./_baseSlice.1123a25b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.67f16270.js";import{S as h}from"./index.4a518751.js";import{u as g}from"./useTimeout.4044af85.js";import{a as b,b as w}from"./index.771e6580.js";import"./tsxHelper.0159f1e5.js";import{C as _}from"./index.a98f36dd.js";import"./domUtils.f125794f.js";import j from"./LazyContainer.61765622.js";var k=a({inheritAttrs:!1,components:{BasicArrow:b,BasicTitle:w}});const v={class:"collapse-container__header"},$={class:"collapse-container__action"};function C(){const e=document.createEvent("HTMLEvents");e.initEvent("resize",!0,!0),e.eventType="message",window.dispatchEvent(e)}k.render=function(e,a,m,f,u,x){const y=t("BasicTitle"),h=t("BasicArrow");return s(),n("div",v,[o(y,{helpMessage:e.$attrs.helpMessage},{default:i((()=>[e.$attrs.title?(s(),n(l,{key:0},[r(p(e.$attrs.title),1)],64)):c(e.$slots,"title",{key:1})])),_:1},8,["helpMessage"]),o("div",$,[c(e.$slots,"action"),e.$attrs.canExpan?(s(),n(h,{key:0,top:"",expand:e.$attrs.show,onClick:a[1]||(a[1]=a=>e.$emit("expand"))},null,8,["expand"])):d("",!0)])])};var E=a({name:"CollapseContainer",components:{Skeleton:h,LazyContainer:j,CollapseHeader:k,CollapseTransition:_},props:{title:m.string.def(""),canExpan:m.bool.def(!0),helpMessage:{type:[Array,String],default:""},triggerWindowResize:m.bool,loading:m.bool,lazy:m.bool,lazyTime:m.number.def(0)},setup(e){const a=f(!0);return{show:a,handleExpand:function(){a.value=!a.value,e.triggerWindowResize&&g(C,200)}}}});const z={class:"collapse-container p-2"},T={key:1,class:"collapse-container__body"};E.render=function(e,a,l,r,p,d){const m=t("CollapseHeader"),f=t("Skeleton"),h=t("LazyContainer"),g=t("CollapseTransition");return s(),n("div",z,[o(m,u(e.$props,{show:e.show,onExpand:e.handleExpand}),{title:i((()=>[c(e.$slots,"title")])),_:1},16,["show","onExpand"]),o(g,{enable:e.canExpan},{default:i((()=>[e.loading?(s(),n(f,{key:0})):x((s(),n("div",T,[e.lazy?(s(),n(h,{key:0,timeout:e.lazyTime},{skeleton:i((()=>[c(e.$slots,"lazySkeleton")])),default:i((()=>[c(e.$slots,"default")])),_:3},8,["timeout"])):c(e.$slots,"default",{key:1})],512)),[[y,e.show]])])),_:1},8,["enable"])])};export default E;