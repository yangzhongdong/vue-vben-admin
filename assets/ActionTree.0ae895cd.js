import{B as k,t as j}from"./data.dd5ae647.js";import{a as B}from"./index.b5f656c2.js";import{d as g,r as D,g as K,e as S,h as r,o as N,i as v,w as o,j as s,m as i}from"./index.de7a3c72.js";import{_ as $}from"./index.46623d23.js";import"./index.cf88fb23.js";import"./domUtils.aa6aef94.js";import"./_stringToArray.9f34c09e.js";import"./RightOutlined.dcad5eff.js";import"./index.95c10fda.js";import"./useTimeout.5494657f.js";import"./useScrollTo.3c6228cf.js";import"./animation.29409132.js";import"./index.492a2c9c.js";import"./index.55f43c00.js";import"./EllipsisOutlined.ba16b190.js";import"./types.ead79a33.js";import"./isEqual.42834150.js";import"./toInteger.e48028d2.js";import"./DownOutlined.2e949c36.js";import"./index.22fd658f.js";import"./usePageContext.05da5891.js";import"./transButton.da8a2266.js";import"./ArrowLeftOutlined.ddcf4a87.js";var y=g({components:{BasicTree:k,CollapseContainer:B,PageWrapper:$},setup(){const e=D(null),{createMessage:t}=K();function d(){const n=S(e);if(!n)throw new Error("tree is null!");return n}function f(n){d().filterByLevel(n)}function m(){d().setCheckedKeys(["0-0"])}function _(){const n=d().getCheckedKeys();t.success(JSON.stringify(n))}function a(){d().setSelectedKeys(["0-0"])}function c(){const n=d().getSelectedKeys();t.success(JSON.stringify(n))}function p(){d().setExpandedKeys(["0-0"])}function u(){const n=d().getExpandedKeys();t.success(JSON.stringify(n))}function l(n=null){d().insertNodeByKey({parentKey:n,node:{title:"\u65B0\u589E\u8282\u70B9",key:"2-2-2"},push:"push"})}function C(n){d().deleteNodeByKey(n)}function h(n){d().updateNodeByKey(n,{title:"parent2-new"})}return{treeData:j,treeRef:e,handleLevel:f,handleSetCheckData:m,handleGetCheckData:_,handleSetSelectData:a,handleGetSelectData:c,handleSetExpandData:p,handleGetExpandData:u,appendNodeByKey:l,deleteNodeByKey:C,updateNodeByKey:h}}});const E={class:"mb-4"},b=i("\u663E\u793A\u5230\u7B2C2\u7EA7"),T=i("\u663E\u793A\u5230\u7B2C1\u7EA7"),w=i("\u8BBE\u7F6E\u52FE\u9009\u6570\u636E"),x=i("\u83B7\u53D6\u52FE\u9009\u6570\u636E"),O=i("\u8BBE\u7F6E\u9009\u4E2D\u6570\u636E"),G=i("\u83B7\u53D6\u9009\u4E2D\u6570\u636E"),L=i("\u8BBE\u7F6E\u5C55\u5F00\u6570\u636E"),P=i("\u83B7\u53D6\u5C55\u5F00\u6570\u636E"),J={class:"mb-4"},R=i("\u6DFB\u52A0\u6839\u8282\u70B9"),W=i("\u6DFB\u52A0\u5728parent3\u5185\u6DFB\u52A0\u8282\u70B9"),A=i("\u5220\u9664parent3\u8282\u70B9"),M=i("\u66F4\u65B0parent2\u8282\u70B9");function V(e,t,d,f,m,_){const a=r("a-button"),c=r("BasicTree"),p=r("CollapseContainer"),u=r("PageWrapper");return N(),v(u,{title:"Tree\u51FD\u6570\u64CD\u4F5C\u793A\u4F8B",contentBackground:"",contentClass:"p-4"},{default:o(()=>[s("div",E,[s(a,{onClick:t[1]||(t[1]=l=>e.handleLevel(2)),class:"mr-2"},{default:o(()=>[b]),_:1}),s(a,{onClick:t[2]||(t[2]=l=>e.handleLevel(1)),class:"mr-2"},{default:o(()=>[T]),_:1}),s(a,{onClick:e.handleSetCheckData,class:"mr-2"},{default:o(()=>[w]),_:1},8,["onClick"]),s(a,{onClick:e.handleGetCheckData,class:"mr-2"},{default:o(()=>[x]),_:1},8,["onClick"]),s(a,{onClick:e.handleSetSelectData,class:"mr-2"},{default:o(()=>[O]),_:1},8,["onClick"]),s(a,{onClick:e.handleGetSelectData,class:"mr-2"},{default:o(()=>[G]),_:1},8,["onClick"]),s(a,{onClick:e.handleSetExpandData,class:"mr-2"},{default:o(()=>[L]),_:1},8,["onClick"]),s(a,{onClick:e.handleGetExpandData,class:"mr-2"},{default:o(()=>[P]),_:1},8,["onClick"])]),s("div",J,[s(a,{onClick:t[3]||(t[3]=l=>e.appendNodeByKey(null)),class:"mr-2"},{default:o(()=>[R]),_:1}),s(a,{onClick:t[4]||(t[4]=l=>e.appendNodeByKey("2-2")),class:"mr-2"},{default:o(()=>[W]),_:1}),s(a,{onClick:t[5]||(t[5]=l=>e.deleteNodeByKey("2-2")),class:"mr-2"},{default:o(()=>[A]),_:1}),s(a,{onClick:t[6]||(t[6]=l=>e.updateNodeByKey("1-1")),class:"mr-2"},{default:o(()=>[M]),_:1})]),s(p,{title:"\u51FD\u6570\u64CD\u4F5C",class:"mr-4",canExpan:!1,style:{width:"33%"}},{default:o(()=>[s(c,{treeData:e.treeData,ref:"treeRef",checkable:!0},null,8,["treeData"])]),_:1})]),_:1})}y.render=V;export default y;