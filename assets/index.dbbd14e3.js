import{d as e,r as o,bD as t,bE as r,h as s,o as i,i as n,aL as l,j as a,m as p}from"./index.c87ef19b.js";import{_ as c}from"./index.e4b2ff9a.js";import"./_stringToArray.c34e650e.js";import"./domUtils.f3b3d188.js";import"./index.5018152e.js";import"./index.ca2b52a0.js";import"./index.1cf93748.js";import"./CheckOutlined.f2efb4c6.js";import"./index.4ac4bb42.js";import"./index.ec8352c8.js";import"./FullscreenOutlined.27e35813.js";import"./RightOutlined.74dbef9c.js";import"./SettingOutlined.1d975297.js";import"./useTimeout.04cd7f25.js";import"./index.953003a9.js";import"./animation.c5c54528.js";import"./useScrollTo.a963268e.js";import"./useAttrs.c62c06aa.js";import"./useWindowSizeFn.2447d2a1.js";import"./index.ef3095a4.js";import"./uuid.a6cec785.js";import"./download.f5de5a15.js";import{u as d}from"./useForm.1ecf8423.js";import"./useSortable.12a7edb9.js";import"./useExpose.964f9e60.js";import"./useTable.c40daa9c.js";import{_ as m}from"./index.67171b6d.js";import"./usePageContext.3ea03ee4.js";import f from"./PersonTable.996be600.js";const u=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],b=[{label:"私密",value:"1"},{label:"公开",value:"2"}],j=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:u},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:u},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:b},required:!0,colProps:{offset:2}}],P=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:u},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:u},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:b},required:!0,colProps:{offset:2}}];var g=e({components:{BasicForm:c,PersonTable:f,PageWrapper:m},setup(){const e=o(null),[t,{validate:r}]=d({baseColProps:{span:6},schemas:j,showActionButtonGroup:!1}),[s,{validate:i}]=d({baseColProps:{span:6},schemas:P,showActionButtonGroup:!1});return{register:t,registerTask:s,submitAll:async function(){try{e.value;const[o,t]=await Promise.all([r(),i()])}catch(o){}},tableRef:e}}});const h=l("data-v-50d13e9a");t("data-v-50d13e9a");const x=p("提交");r();const q=h(((e,o,t,r,l,p)=>{const c=s("BasicForm"),d=s("a-card"),m=s("PersonTable"),f=s("a-button"),u=s("PageWrapper");return i(),n(u,{class:"high-form",title:"高级表单",contentBackground:"",content:" 高级表单常见于一次性输入和提交大批量数据的场景。"},{rightFooter:h((()=>[a(f,{type:"primary",onClick:e.submitAll},{default:h((()=>[x])),_:1},8,["onClick"])])),default:h((()=>[a(d,{title:"仓库管理",bordered:!1},{default:h((()=>[a(c,{onRegister:e.register},null,8,["onRegister"])])),_:1}),a(d,{title:"任务管理",bordered:!1,class:"mt-5"},{default:h((()=>[a(c,{onRegister:e.registerTask},null,8,["onRegister"])])),_:1}),a(d,{title:"成员管理",bordered:!1,class:"mt-5"},{default:h((()=>[a(m,{ref:"tableRef"},null,512)])),_:1})])),_:1})}));g.render=q,g.__scopeId="data-v-50d13e9a";export default g;