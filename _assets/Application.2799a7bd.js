let a=document.createElement("style");a.innerHTML=".account-center-application__card{width:100%;margin-bottom:-12px}.account-center-application__card .ant-card-body{padding:16px}.account-center-application__card-title{margin-bottom:5px;font-size:16px;font-weight:500;color:rgba(0,0,0,.85)}.account-center-application__card-title .icon{margin-top:-5px;font-size:22px}.account-center-application__card-num{margin-left:24px;line-height:36px;color:#7d7a7a}.account-center-application__card-num span{margin-left:5px;font-size:18px;color:#000}.account-center-application__card-download{float:right;font-size:20px!important;color:#1890ff}",document.head.appendChild(a);import{a as t,i,o,j as c,w as e,k as n,aM as r,b9 as s,m as l,p as d,n as p}from"./index.9ddc54c2.js";import"./xlsx.a48e520c.js";import"./index.1e7ca35a.js";import"./Trigger.20ed9977.js";import"./omit.e94ccb8d.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.71c323b3.js";import"./CheckOutlined.04ceadd9.js";import"./RightOutlined.5a1d395b.js";import"./index.eff90745.js";import"./UpOutlined.10a785f5.js";import"./LeftOutlined.3c8aea2a.js";import{C as m}from"./index.cfc7be47.js";import"./index.2eda427c.js";import"./zh_CN.0242bd16.js";import{L as f}from"./index.b5da176f.js";import{s as u}from"./index.ab1925fd.js";import{applicationList as _}from"./data.2c3340a5.js";var x=t({components:{List:f,ListItem:f.Item,Card:m,Icon:u},setup:()=>({prefixCls:"account-center-application",list:_})});const j=d(" 活跃用户："),b=d(" 万 "),g=d(" 新增用户：");x.render=function(a,t,m,f,u,_){const x=i("Icon"),C=i("Card"),h=i("ListItem"),w=i("a-col"),v=i("a-row"),L=i("List");return o(),c(L,{class:a.prefixCls},{default:e((()=>[n(v,{gutter:16},{default:e((()=>[(o(!0),c(r,null,s(a.list,((t,i)=>(o(),c(w,{key:i,span:6},{default:e((()=>[n(h,null,{default:e((()=>[n(C,{hoverable:!0,class:`${a.prefixCls}__card`},{default:e((()=>[n("div",{class:`${a.prefixCls}__card-title`},[t.icon?(o(),c(x,{key:0,class:"icon",icon:t.icon,color:t.color},null,8,["icon","color"])):l("v-if",!0),d(" "+p(t.title),1)],2),n("div",{class:`${a.prefixCls}__card-num`},[j,n("span",null,p(t.active),1),b],2),n("div",{class:`${a.prefixCls}__card-num`},[g,n("span",null,p(t.new),1)],2),t.download?(o(),c(x,{key:0,class:`${a.prefixCls}__card-download`,icon:t.download},null,8,["class","icon"])):l("v-if",!0)])),_:2},1032,["class"])])),_:2},1024)])),_:2},1024)))),128))])),_:1})])),_:1},8,["class"])};export default x;