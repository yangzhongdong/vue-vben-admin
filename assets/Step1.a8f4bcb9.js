import{d as e,cr as t,cs as i,h as s,o as a,i as o,j as d,bz as r,m as n}from"./index.038a8ed4.js";import"./SearchOutlined.66d5caaf.js";import{a as p}from"./index.c3615560.js";import"./DownOutlined.d67419d1.js";import"./CheckOutlined.d620339d.js";import{I as m}from"./index.c9d7536d.js";import"./EyeOutlined.b126afd7.js";import{_ as l}from"./index.620c0fa0.js";import"./index.a3ff7a6f.js";import"./colors.792317d4.js";import"./index.940e2f2a.js";import"./RightOutlined.101d5456.js";import"./types.749efd5b.js";import"./toInteger.555223b8.js";import"./uuid.db1f33da.js";import"./findIndex.754fd039.js";import"./_stringToArray.e17e6377.js";import"./domUtils.f518ba34.js";import"./isEqual.d82ae6f0.js";import"./_baseProperty.74f89655.js";import"./index.bb7f58db.js";import"./index.daf187d0.js";import"./UpOutlined.f46c2aed.js";import"./LeftOutlined.cbfa8e1f.js";import"./index.a445a13b.js";import"./responsiveObserve.c545f1cc.js";import"./index.b5f1be95.js";import"./index.2e8b1daa.js";import"./index.bbf40656.js";import{D as c}from"./index.fa174d44.js";import"./index.578eb220.js";import"./index.6c08f541.js";import"./index.d9f5aec7.js";import"./index.a9b0ab62.js";import"./util.0d0e9725.js";import"./index.a3cb0236.js";import"./index.f5dd0bfd.js";import"./FullscreenOutlined.5a989c67.js";import"./RightOutlined.7c1cd1fe.js";import"./useTimeout.1b66c22c.js";import"./index.90dff1fd.js";import"./index.8d91dadc.js";import"./animation.36e00bb4.js";import"./useScrollTo.f8476e81.js";import"./useAttrs.fdf628ba.js";import"./useWindowSizeFn.823037b6.js";import"./download.8376fe00.js";import{u as f}from"./useForm.711c001e.js";import{step1Schemas as u}from"./data.2505cb7f.js";var j=e({components:{BasicForm:l,[p.name]:p,ASelectOption:p.Option,[m.name]:m,[m.Group.name]:m.Group,[c.name]:c},emits:["next"],setup(e,{emit:t}){const[i,{validate:s}]=f({labelWidth:100,schemas:u,actionColOptions:{span:14},showResetButton:!1,submitButtonOptions:{text:"下一步"},submitFunc:async function(){try{const e=await s();t("next",e)}catch(e){}}});return{register:i}}});const b=r("data-v-c22ef27a");t("data-v-c22ef27a");const x={class:"step1"},v={class:"step1-form"},O=n(" 支付宝 "),h=n(" 银联 "),y=d("h3",null,"说明",-1),_=d("h4",null,"转账到支付宝账户",-1),g=d("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1),F=d("h4",null,"转账到银行卡",-1),U=d("p",null," 如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。如果需要，这里可以放一些关于产品的常见问题说明。 ",-1);i();const w=b(((e,t,i,r,n,p)=>{const m=s("a-select-option"),l=s("a-select"),c=s("a-input"),f=s("a-input-group"),u=s("BasicForm"),j=s("a-divider");return a(),o("div",x,[d("div",v,[d(u,{onRegister:e.register},{fac:b((({model:e,field:t})=>[d(f,{compact:""},{default:b((()=>[d(l,{value:e.pay,"onUpdate:value":t=>e.pay=t,class:"pay-select"},{default:b((()=>[d(m,{value:"zfb"},{default:b((()=>[O])),_:1}),d(m,{value:"yl"},{default:b((()=>[h])),_:1})])),_:2},1032,["value","onUpdate:value"]),d(c,{class:"pay-input",value:e[t],"onUpdate:value":i=>e[t]=i},null,8,["value","onUpdate:value"])])),_:2},1024)])),_:1},8,["onRegister"])]),d(j),y,_,g,F,U])}));j.render=w,j.__scopeId="data-v-c22ef27a";export default j;