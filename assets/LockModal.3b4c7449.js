import{d as e,u as s,a9 as a,q as r,d4 as o,f as t,h as i,o as l,i as d,w as n,j as c,l as m,m as p,a0 as u}from"./index.899e68b1.js";import{_ as f}from"./index.d0b91344.js";import"./_stringToArray.45d16e42.js";import"./domUtils.511e170d.js";import"./index.73bca1d9.js";import"./index.55180915.js";import"./index.1156589c.js";import{_ as j,a as g}from"./index.6e6fb497.js";import"./FullscreenOutlined.37abc2dd.js";import"./RightOutlined.7a52ca15.js";import"./useTimeout.1aa049d6.js";import"./index.8a587a60.js";import"./animation.ce68d404.js";import"./useScrollTo.14ce33f8.js";import{h}from"./header.3041aac3.js";import"./useAttrs.65aacca0.js";import"./useWindowSizeFn.43b90dac.js";import"./index.01e45a9d.js";import"./uuid.a6cec785.js";import"./download.8d0bafa5.js";import{u as x}from"./useForm.77949dc2.js";var _=e({name:"LockModal",components:{BasicModal:j,BasicForm:f},setup(){const{t:e}=s(),{prefixCls:i}=a("header-lock-modal"),l=r((()=>{var e;return null==(e=t.getUserInfoState)?void 0:e.realName})),[d,{closeModal:n}]=g(),[c,{validateFields:m,resetFields:p}]=x({showActionButtonGroup:!1,schemas:[{field:"password",label:e("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});return{t:e,prefixCls:i,getRealName:l,register:d,registerForm:c,handleLock:async function(){const e=(await m()).password;n(),o.commitLockInfoState({isLock:!0,pwd:e}),await p()},headerImg:h}}});_.render=function(e,s,a,r,o,t){const f=i("BasicForm"),j=i("a-button"),g=i("BasicModal");return l(),d(g,u({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:n((()=>[c("div",{class:`${e.prefixCls}__entry`},[c("div",{class:`${e.prefixCls}__header`},[c("img",{src:e.headerImg,class:`${e.prefixCls}__header-img`},null,10,["src"]),c("p",{class:`${e.prefixCls}__header-name`},m(e.getRealName),3)],2),c(f,{onRegister:e.registerForm},null,8,["onRegister"]),c("div",{class:`${e.prefixCls}__footer`},[c(j,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:n((()=>[p(m(e.t("layout.header.lockScreenBtn")),1)])),_:1},8,["onClick"])],2)],2)])),_:1},16,["title","class","onRegister"])};export default _;