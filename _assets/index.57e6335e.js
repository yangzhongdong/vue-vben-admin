let e=document.createElement("style");e.innerHTML=".desc-wrap[data-v-e07fa688]{padding:16px;background:#fff}",document.head.appendChild(e);import{a as i,d0 as t,d1 as s,i as r,o as a,j as o,k as d,bi as n}from"./index.5a06cc5a.js";import"./xlsx.a48e520c.js";import"./useSortable.daa299b8.js";import"./index.285e765e.js";import"./Trigger.99f55fa6.js";import"./omit.dc68979e.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.43ac9423.js";import"./CheckOutlined.a9c880f1.js";import"./index.27a16a8f.js";import"./index.39e2192c.js";import"./colors.fef6a1d3.js";import"./index.c61a7dc8.js";import"./RightOutlined.177f594b.js";import"./index.a77047a8.js";import"./types.0e8929fe.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.3c41385f.js";import"./_baseFor.f4e5f03f.js";import"./index.2d99723f.js";import"./index.a172b251.js";import"./index.39112e54.js";import"./index.d758c27b.js";import"./UpOutlined.93565ff1.js";import"./LeftOutlined.87d99e02.js";import"./index.4befb70e.js";import"./index.78155a1f.js";import"./index.cd6c8c97.js";import"./index.5d3cdfa6.js";import"./index.aa5d2aff.js";import"./zh_CN.0242bd16.js";import"./index.f07c31d6.js";import"./index.6da2e83a.js";import"./CaretDownFilled.1bd696db.js";import"./index.813fa6f2.js";import"./CheckOutlined.bbf42930.js";import"./CloseOutlined.56ba74fc.js";import{s as m}from"./index.52e67173.js";import"./FullscreenOutlined.d1c71cb2.js";import"./LeftOutlined.9cd85d98.js";import"./LoadingOutlined.91523ad2.js";import"./TableAction.359b5d7f.js";import"./RightOutlined.18857b33.js";import"./SettingOutlined.1c8ea48f.js";import"./useTimeout.f9167c02.js";import"./tsxHelper.7d018852.js";import"./index.1b9ab3b5.js";import"./domUtils.a8aece5c.js";import"./index.2d373899.js";import"./animation.91509674.js";import"./useScrollTo.06e85a9e.js";import{D as p}from"./index.dab6baae.js";import"./useAttrs.00256126.js";import"./index.f0b16be7.js";import"./useForm.5208afd5.js";import"./index.de6754de.js";import"./useWindowSizeFn.a6dea72f.js";import"./uuid.40269c00.js";import"./useExpose.42b399ac.js";import"./index.1cdf9edd.js";import{u as c}from"./useTable.a651c42f.js";import{refundSchema as l,refundData as j,personSchema as f,personData as u,refundTableData as b,refundTableSchema as x,refundTimeTableSchema as g,refundTimeTableData as h}from"./data.f0100671.js";var T=i({components:{Description:p,BasicTable:m},setup(){const[e]=c({title:"退货商品",dataSource:b,columns:x,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let i=0,t=0;return e.forEach((e=>{i+=e.t5,t+=e.t6})),[{t1:"总计",t5:i,t6:t}]}}),[i]=c({title:"退货进度",columns:g,pagination:!1,dataSource:h,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:i,refundSchema:l,refundData:j,personSchema:f,personData:u}}});const O=n("data-v-e07fa688");t("data-v-e07fa688");const S={class:"m-5 desc-wrap"};s();const D=O(((e,i,t,s,n,m)=>{const p=r("a-page-header"),c=r("Description"),l=r("a-divider"),j=r("BasicTable");return a(),o("div",null,[d(p,{title:"基础详情页",ghost:!1}),d("div",S,[d(c,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),d(l),d(c,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),d(l),d(j,{onRegister:e.registerRefundTable},null,8,["onRegister"]),d(l),d(j,{onRegister:e.registerTimeTable},null,8,["onRegister"])])])}));T.render=D,T.__scopeId="data-v-e07fa688";export default T;