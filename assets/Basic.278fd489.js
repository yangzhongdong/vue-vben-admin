import{d as e,r as i,h as o,o as t,i as a,j as r,w as s,m as n,l as d}from"./index.c87ef19b.js";import"./index.e4b2ff9a.js";import"./_stringToArray.c34e650e.js";import"./domUtils.f3b3d188.js";import"./index.5018152e.js";import"./index.ca2b52a0.js";import"./index.1cf93748.js";import"./CheckOutlined.f2efb4c6.js";import"./index.4ac4bb42.js";import{_ as l}from"./index.ec8352c8.js";import"./FullscreenOutlined.27e35813.js";import"./RightOutlined.74dbef9c.js";import"./SettingOutlined.1d975297.js";import"./useTimeout.04cd7f25.js";import"./index.953003a9.js";import"./animation.c5c54528.js";import"./useScrollTo.a963268e.js";import"./useAttrs.c62c06aa.js";import"./useWindowSizeFn.2447d2a1.js";import"./index.ef3095a4.js";import"./uuid.a6cec785.js";import"./download.f5de5a15.js";import"./useForm.1ecf8423.js";import"./useSortable.12a7edb9.js";import"./useExpose.964f9e60.js";import{_ as p}from"./index.67171b6d.js";import"./usePageContext.3ea03ee4.js";import{getBasicColumns as c,getBasicData as m}from"./tableData.7aa0192c.js";var u=e({components:{BasicTable:l,PageWrapper:p},setup(){const e=i(!1),o=i(!1),t=i(!0),a=i(!0),r=i(!1);return{columns:c(),data:m(),canResize:e,loading:o,striped:t,border:a,toggleStriped:function(){t.value=!t.value},toggleCanResize:function(){e.value=!e.value},toggleLoading:function(){o.value=!0,setTimeout((()=>{o.value=!1,r.value={pageSize:20}}),3e3)},toggleBorder:function(){a.value=!a.value},pagination:r}}});const g={class:"p-4"},j=n(" 开启loading ");u.render=function(e,i,l,p,c,m){const u=o("a-button"),f=o("BasicTable");return t(),a("div",g,[r(f,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,showTableSetting:"",pagination:e.pagination},{toolbar:s((()=>[r(u,{type:"primary",onClick:e.toggleCanResize},{default:s((()=>[n(d(e.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),r(u,{type:"primary",onClick:e.toggleBorder},{default:s((()=>[n(d(e.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),r(u,{type:"primary",onClick:e.toggleLoading},{default:s((()=>[j])),_:1},8,["onClick"]),r(u,{type:"primary",onClick:e.toggleStriped},{default:s((()=>[n(d(e.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination"])])};export default u;