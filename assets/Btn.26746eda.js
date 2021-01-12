import{d as e,cp as s,bQ as a,an as o,aY as r,d1 as t,d2 as d,bD as i,bE as c,h as l,aP as n,o as m,i as u,aL as p,j as f,l as _,k as P,az as y,m as h}from"./index.c87ef19b.js";import{_ as x}from"./index.67171b6d.js";import"./usePageContext.3ea03ee4.js";import C from"./CurrentPermissionMode.d42afa9a.js";import{_ as g}from"./index.9a7af100.js";var b=e({components:{Alert:s,PageWrapper:x,CurrentPermissionMode:C,Divider:a,Authority:g},setup(){const{hasPermission:e}=t();async function s(e){const s=await d({userId:e});o.commitPermCodeListState(s)}return s("1"),{hasPermission:e,permissionStore:o,changePermissionCode:s,PermissionModeEnum:r}}});const v=p("data-v-beeadad6");i("data-v-beeadad6");const k=h(" 当前拥有的code列表: "),j=h(" 点击切换按钮权限(用户id为2) "),A=h(" 点击切换按钮权限(用户id为1,默认) "),M=h("组件方式判断权限"),S=h("拥有code ['1000']权限可见"),w=h("拥有code ['2000']权限可见"),D=h("拥有code ['1000','2000']角色权限可见"),L=h("函数方式方式判断权限"),E=h(" 拥有code ['1000']权限可见 "),I=h(" 拥有code ['2000']权限可见 "),W=h(" 拥有code ['1000','2000']角色权限可见 "),z=h("指令方式方式判断权限(该方式不能动态修改权限.)"),B=h(" 拥有code ['1000']权限可见 "),Q=h(" 拥有code ['2000']权限可见 "),Y=h(" 拥有code ['1000','2000']角色权限可见 ");c();const q=v(((e,s,a,o,r,t)=>{const d=l("Alert"),i=l("CurrentPermissionMode"),c=l("Divider"),p=l("a-button"),h=l("Authority"),x=l("PageWrapper"),C=n("auth");return m(),u(x,{contentBackground:"",title:"按钮权限控制",contentClass:"p-4"},{default:v((()=>[f(d,{message:"刷新后会还原","show-icon":""}),f(i),f("p",null,[k,f("a",null,_(e.permissionStore.getPermCodeListState),1)]),f(c),f(d,{class:"mt-4",type:"info",message:"点击后请查看按钮变化","show-icon":""}),f(c),f(p,{type:"primary",class:"mr-2",onClick:s[1]||(s[1]=s=>e.changePermissionCode("2"))},{default:v((()=>[j])),_:1}),f(p,{type:"primary",onClick:s[2]||(s[2]=s=>e.changePermissionCode("1"))},{default:v((()=>[A])),_:1}),f(c,null,{default:v((()=>[M])),_:1}),f(h,{value:"1000"},{default:v((()=>[f(p,{type:"primary",class:"mx-4"},{default:v((()=>[S])),_:1})])),_:1}),f(h,{value:"2000"},{default:v((()=>[f(p,{color:"success",class:"mx-4"},{default:v((()=>[w])),_:1})])),_:1}),f(h,{value:["1000","2000"]},{default:v((()=>[f(p,{color:"error",class:"mx-4"},{default:v((()=>[D])),_:1})])),_:1}),f(c,null,{default:v((()=>[L])),_:1}),e.hasPermission("1000")?(m(),u(p,{key:0,type:"primary",class:"mx-4"},{default:v((()=>[E])),_:1})):P("",!0),e.hasPermission("2000")?(m(),u(p,{key:1,color:"success",class:"mx-4"},{default:v((()=>[I])),_:1})):P("",!0),e.hasPermission(["1000","2000"])?(m(),u(p,{key:2,color:"error",class:"mx-4"},{default:v((()=>[W])),_:1})):P("",!0),f(c,null,{default:v((()=>[z])),_:1}),y(f(p,{type:"primary",class:"mx-4"},{default:v((()=>[B])),_:1},512),[[C,"1000"]]),y(f(p,{color:"success",class:"mx-4"},{default:v((()=>[Q])),_:1},512),[[C,"2000"]]),y(f(p,{color:"error",class:"mx-4"},{default:v((()=>[Y])),_:1},512),[[C,["1000","2000"]]])])),_:1})}));b.render=q,b.__scopeId="data-v-beeadad6";export default b;