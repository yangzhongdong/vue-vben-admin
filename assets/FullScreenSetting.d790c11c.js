import{d as u,b2 as j,u as f,h as t,o as i,i as o,w as p,j as b,l as x}from"./index.de7a3c72.js";import"./index.95c10fda.js";import{u as F}from"./index.8685fc69.js";import{u as O}from"./useFullScreen.1ca0532c.js";import{F as S,a as _}from"./FullscreenOutlined.09f91c42.js";import"./index.2d5b3941.js";import"./responsiveObserve.c545f1cc.js";import"./index.2073522b.js";import"./findIndex.538683ff.js";import"./isEqual.42834150.js";import"./_baseProperty.74f89655.js";import"./toInteger.e48028d2.js";import"./index.9b1a81a2.js";import"./index.2419be78.js";import"./SearchOutlined.5cd4b61b.js";import"./CheckOutlined.615f0fd5.js";import"./DownOutlined.2e949c36.js";import"./index.6eb3b2f8.js";import"./index.0b88e676.js";import"./UpOutlined.b1a0aa74.js";import"./index.2e0fefa1.js";import"./EyeOutlined.e4d8b81b.js";import"./index.ba5abcce.js";import"./colors.e241e755.js";import"./RightOutlined.dcad5eff.js";import"./RedoOutlined.d4a8b6b6.js";import"./index.55f43c00.js";import"./EllipsisOutlined.ba16b190.js";import"./types.ead79a33.js";import"./Tree.da704165.js";import"./util.0173355c.js";import"./useAttrs.5fb4b160.js";import"./index.aa7240c2.js";import"./uuid.cdbe37ce.js";import"./index.69b2f2d2.js";import"./DeleteOutlined.e616faa6.js";import"./index.84a30426.js";import"./useTimeout.5494657f.js";import"./useWindowSizeFn.5bd3f00e.js";import"./index.b5f656c2.js";import"./index.cf88fb23.js";import"./domUtils.aa6aef94.js";import"./_stringToArray.9f34c09e.js";import"./useScrollTo.3c6228cf.js";import"./animation.29409132.js";import"./index.b01ba49c.js";import"./index.967c47da.js";import"./index.56f02a82.js";import"./LeftOutlined.6e782dc0.js";import"./download.2e71cfcc.js";var c=u({name:"FullScreenSetting",components:{FullscreenExitOutlined:S,FullscreenOutlined:_,Tooltip:j},setup(){const e=F(),{t:n}=f(),{toggleFullscreen:s,isFullscreenRef:r}=O(e.wrapRef);function l(){s()}return{handleFullScreen:l,isFullscreenRef:r,t:n}}});function h(e,n,s,r,l,k){const d=t("FullscreenOutlined"),a=t("FullscreenExitOutlined"),m=t("Tooltip");return i(),o(m,{placement:"top"},{title:p(()=>[b("span",null,x(e.t("component.table.settingFullScreen")),1)]),default:p(()=>[e.isFullscreenRef?(i(),o(a,{key:1,onClick:e.handleFullScreen},null,8,["onClick"])):(i(),o(d,{key:0,onClick:e.handleFullScreen},null,8,["onClick"]))]),_:1})}c.render=h;export default c;