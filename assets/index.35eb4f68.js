import{d as e,h as t,o as a,i as r,w as s,j as i}from"./index.899e68b1.js";import"./_stringToArray.45d16e42.js";import"./domUtils.511e170d.js";import{a as o}from"./index.1156589c.js";import"./RightOutlined.7a52ca15.js";import"./useTimeout.1aa049d6.js";import"./index.8a587a60.js";import"./animation.ce68d404.js";import"./useScrollTo.14ce33f8.js";import{_ as l}from"./index.dc7cfeca.js";import"./usePageContext.914e04cb.js";import{B as d,t as c}from"./data.5fece61d.js";var n=e({components:{BasicTree:d,CollapseContainer:o,PageWrapper:l},setup:()=>({treeData:c})});const m={class:"flex"};n.render=function(e,o,l,d,c,n){const p=t("BasicTree"),u=t("CollapseContainer"),f=t("PageWrapper");return a(),r(f,{title:"Tree基础示例"},{default:s((()=>[i("div",m,[i(u,{title:"基础示例",style:{width:"33%"},class:"mr-4"},{default:s((()=>[i(p,{treeData:e.treeData},null,8,["treeData"])])),_:1}),i(u,{title:"可勾选",class:"mr-4",style:{width:"33%"}},{default:s((()=>[i(p,{treeData:e.treeData,checkable:!0},null,8,["treeData"])])),_:1}),i(u,{title:"默认展开/勾选示例",style:{width:"33%"}},{default:s((()=>[i(p,{treeData:e.treeData,checkable:!0,expandedKeys:["0-0"],checkedKeys:["0-0"]},null,8,["treeData"])])),_:1})])])),_:1})};export default n;