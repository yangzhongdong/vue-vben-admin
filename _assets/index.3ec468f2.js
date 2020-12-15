let e=document.createElement("style");e.innerHTML=".vben-header-user-dropdown{display:flex;height:48px;min-width:100px;padding:0 10px;overflow:hidden;font-size:12px;cursor:pointer;align-items:center}.vben-header-user-dropdown:hover{background:#f6f6f6}.vben-header-user-dropdown img{width:26px;height:26px;margin-right:12px}.vben-header-user-dropdown__header{border-radius:50%}.vben-header-user-dropdown__name{font-size:14px}.vben-header-user-dropdown--dark:hover{background:var(--header-bg-hover-color)}.vben-header-user-dropdown--light .vben-header-user-dropdown__name{color:rgba(0,0,0,.85)}.vben-header-user-dropdown--light .vben-header-user-dropdown__desc{color:#7c8087}.vben-header-user-dropdown-dropdown-overlay .ant-dropdown-menu-item{min-width:160px}",document.head.appendChild(e);import{a as r,ao as o,q as n,au as a,u as d,s,g as t,ax as i,i as p,o as l,j as c,w as m,k as u,m as h,n as f}from"./index.acbb87a5.js";import"./xlsx.a48e520c.js";import"./Trigger.7e5aa3a2.js";import{D as g}from"./index.e51afa00.js";import"./RightOutlined.31cb4cc9.js";import{M as x}from"./index.4bc096ce.js";import"./types.1d435903.js";import"./index.a172b251.js";import"./index.428f9fc4.js";import{_ as w}from"./header.0299ae16.js";import{I as b}from"./index.0c60de8b.js";import{d as v}from"./useHeaderSetting.11e470c0.js";import{D as _}from"./siteSetting.99cfbd47.js";var j=r({name:"UserDropdown",components:{Dropdown:g,Menu:x,MenuItem:o((()=>import("./DropMenuItem.5dfc1fef.js"))),MenuDivider:x.Divider,Icon:b},props:{theme:n.oneOf(["dark","light"])},setup(){const{prefixCls:e}=a("header-user-dropdown"),{t:r}=d(),{getShowDoc:o}=v();return{prefixCls:e,t:r,getUserInfo:s((()=>{const{realName:e="",desc:r}=t.getUserInfoState||{};return{realName:e,desc:r}})),handleMenuClick:function(e){switch(e.key){case"loginOut":t.confirmLoginOut();break;case"doc":i(_)}},getShowDoc:o}}});j.render=function(e,r,o,n,a,d){const s=p("MenuItem"),t=p("MenuDivider"),i=p("Menu"),g=p("Dropdown");return l(),c(g,{placement:"bottomLeft",overlayClassName:`${e.prefixCls}-dropdown-overlay`},{overlay:m((()=>[u(i,{onClick:e.handleMenuClick},{default:m((()=>[u(s,{key:"doc",text:e.t("layout.header.dropdownItemDoc"),icon:"gg:loadbar-doc"},null,8,["text"]),e.getShowDoc?(l(),c(t,{key:0})):h("",!0),u(s,{key:"loginOut",text:e.t("layout.header.dropdownItemLoginOut"),icon:"carbon:power"},null,8,["text"])])),_:1},8,["onClick"])])),default:m((()=>[u("span",{class:[e.prefixCls,`${e.prefixCls}--${e.theme}`]},[u("img",{class:`${e.prefixCls}__header`,src:w},null,2),u("span",{class:`${e.prefixCls}__info`},[u("span",{class:`${e.prefixCls}__name anticon`},f(e.getUserInfo.realName),3)],2)],2)])),_:1},8,["overlayClassName"])};export default j;