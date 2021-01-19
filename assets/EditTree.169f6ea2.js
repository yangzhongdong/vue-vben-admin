import{B as e,t}from"./data.874bdc7f.js";import{a as r}from"./index.17280903.js";import{_ as a}from"./index.f87270a7.js";import{k as n,y as i,z as o,d as s,aZ as l,i as c,o as u,j as d,w as f}from"./index.94b82568.js";import"./index.0d11251c.js";import"./domUtils.9cb5e741.js";import"./RightOutlined.c9667cba.js";import"./index.8d91dadc.js";import"./useTimeout.b50e2d3d.js";import"./useScrollTo.45eb6f71.js";import"./animation.1d7eea81.js";import"./index.b0611c31.js";import"./index.673364b0.js";import"./index.9fbd6c39.js";import"./usePageContext.9614bf02.js";var p={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"}}]},name:"delete",theme:"outlined"};function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e,t){var r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){b(e,t,r[t])}))}return e}({},e,t.attrs);return n(o,i(r,{icon:p}),null)};m.displayName="DeleteOutlined",m.inheritAttrs=!1;var h={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"};function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var v=function(e,t){var r=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?Object(arguments[t]):{},a=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),a.forEach((function(t){g(e,t,r[t])}))}return e}({},e,t.attrs);return n(o,i(r,{icon:h}),null)};v.displayName="PlusOutlined",v.inheritAttrs=!1;var j=s({components:{BasicTree:e,CollapseContainer:r,PageWrapper:a},setup:()=>({treeData:t,actionList:[{render:e=>l(v,{class:"ml-2",onClick:()=>{}})},{render:()=>l(m)}],getRightMenuList:function(e){return[{label:"新增",handler:()=>{},icon:"bi:plus"},{label:"删除",handler:()=>{},icon:"bx:bxs-folder-open"}]}})});const y={class:"flex"};j.render=function(e,t,r,a,i,o){const s=c("BasicTree"),l=c("CollapseContainer"),p=c("PageWrapper");return u(),d(p,{title:"Tree函数操作示例"},{default:f((()=>[n("div",y,[n(l,{title:"右侧操作按钮",class:"mr-4",style:{width:"33%"}},{default:f((()=>[n(s,{treeData:e.treeData,actionList:e.actionList},null,8,["treeData","actionList"])])),_:1}),n(l,{title:"右键菜单",class:"mr-4",style:{width:"33%"}},{default:f((()=>[n(s,{treeData:e.treeData,beforeRightClick:e.getRightMenuList},null,8,["treeData","beforeRightClick"])])),_:1})])])),_:1})};export default j;