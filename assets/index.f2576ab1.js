import{aO as e,aP as o,d as t,r as l,L as a,e as r,cr as s,cs as d,h as i,o as n,i as m,j as c,bz as u,m as p}from"./index.038a8ed4.js";import"./DownOutlined.d67419d1.js";import"./index.eb024b31.js";import"./index.940e2f2a.js";import"./RightOutlined.101d5456.js";import"./index.3d5ce4ae.js";import"./types.749efd5b.js";import"./toInteger.555223b8.js";import"./_stringToArray.e17e6377.js";import"./domUtils.f518ba34.js";import"./isEqual.d82ae6f0.js";import"./transButton.4a4fa5a4.js";import{a as g}from"./index.a3cb0236.js";import{_ as b}from"./index.9f92e1b3.js";import"./RightOutlined.7c1cd1fe.js";import"./useTimeout.1b66c22c.js";import"./index.90dff1fd.js";import"./index.8d91dadc.js";import"./animation.36e00bb4.js";import"./useScrollTo.f8476e81.js";import"./usePageContext.d0db1a38.js";const f=e((()=>o((()=>__import__("./index.dee51705.js")),["/assets/index.dee51705.js","/assets/index.038a8ed4.js","/assets/index.94daecd6.css","/assets/download.8376fe00.js"])));var v=t({components:{CollapseContainer:g,QrCode:f,PageWrapper:b},setup(){const e=l(null);return{qrCodeUrl:"https://www.vvbin.cn",LogoImg:a,download:function(){const o=r(e);o&&o.download("文件名")},qrRef:e}}});const j=u("data-v-40460a35");s("data-v-40460a35");const x={class:"flex flex-wrap"},q=p(" 下载 "),C=c("div",{class:"msg"},"(在线logo会导致图片跨域，需要下载图片需要自行解决跨域问题)",-1);d();const _=j(((e,o,t,l,a,r)=>{const s=i("QrCode"),d=i("CollapseContainer"),u=i("a-button"),p=i("PageWrapper");return n(),m(p,{title:"二维码组件使用示例"},{default:j((()=>[c("div",x,[c(d,{title:"基础示例",canExpan:!0,class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl},null,8,["value"])])),_:1}),c(d,{title:"渲染成img标签示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,tag:"img"},null,8,["value"])])),_:1}),c(d,{title:"配置样式示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),c(d,{title:"本地logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,logo:e.LogoImg},null,8,["value","logo"])])),_:1}),c(d,{title:"在线logo示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,logo:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",options:{color:{dark:"#55D187"}}},null,8,["value"])])),_:1}),c(d,{title:"logo配置示例",class:"text-center mb-6 qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,logo:{src:"https://vebn.oss-cn-beijing.aliyuncs.com/vben/logo.png",logoSize:.2,borderSize:.05,borderRadius:50,bgColor:"blue"}},null,8,["value","logo"])])),_:1}),c(d,{title:"下载示例",class:"text-center qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,ref:"qrRef",logo:e.LogoImg},null,8,["value","logo"]),c(u,{class:"mb-2",type:"primary",onClick:e.download},{default:j((()=>[q])),_:1},8,["onClick"]),C])),_:1}),c(d,{title:"配置大小示例",class:"text-center qrcode-demo-item"},{default:j((()=>[c(s,{value:e.qrCodeUrl,width:300},null,8,["value"])])),_:1})])])),_:1})}));v.render=_,v.__scopeId="data-v-40460a35";export default v;