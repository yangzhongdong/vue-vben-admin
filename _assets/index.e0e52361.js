let t=document.createElement("style");t.innerHTML=".step-form-content[data-v-234603f7]{padding:24px;background:#fff}.step-form-form[data-v-234603f7]{width:750px;margin:0 auto}",document.head.appendChild(t);import{a as e,r as i,b as n,aH as a,d0 as r,d1 as o,i as s,o as p,j as d,k as m,ap as c,aq as f,m as l,bi as u,p as j}from"./index.9ddc54c2.js";import"./xlsx.a48e520c.js";import"./index.1e7ca35a.js";import"./Trigger.20ed9977.js";import"./omit.e94ccb8d.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.71c323b3.js";import"./CheckOutlined.04ceadd9.js";import"./index.01e110a1.js";import"./colors.fc272af0.js";import"./RightOutlined.5a1d395b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.d989a75d.js";import"./index.6db5d59d.js";import"./index.a172b251.js";import"./index.90fcf243.js";import"./index.f24bb7a6.js";import"./UpOutlined.10a785f5.js";import"./index.6107397a.js";import"./index.6e7c95c1.js";import"./index.01150fe0.js";import"./index.3c805844.js";import"./index.083f42a9.js";import"./LoadingOutlined.201072ff.js";import"./RightOutlined.b735e334.js";import"./tsxHelper.877239e6.js";import"./index.0f525ba4.js";import"./useAttrs.ffe3ac1b.js";import"./index.ab1925fd.js";import"./useForm.71a6a5ef.js";import"./data.8ce15ba8.js";import x from"./Step1.2e77287d.js";import S from"./Step2.aa1e8e87.js";import v from"./Step3.105e55fd.js";var b=e({components:{Step1:x,Step2:S,Step3:v},setup(){const t=i(0),e=n({initSetp2:!1,initSetp3:!1});return{current:t,handleStep1Next:function(i){t.value++,e.initSetp2=!0},handleStep2Next:function(i){t.value++,e.initSetp3=!0},handleRedo:function(){t.value=0,e.initSetp2=!1,e.initSetp3=!1},handleStepPrev:function(){t.value--},...a(e)}}});const h=u("data-v-234603f7");r("data-v-234603f7");const g=j(" 将一个冗长或用户不熟悉的表单任务分成多个步骤，指导用户完成。 "),N={class:"m-5 step-form-content"},O={class:"step-form-form"},R={class:"mt-5"};o();const _=h(((t,e,i,n,a,r)=>{const o=s("a-page-header"),u=s("a-step"),j=s("a-steps"),x=s("Step1"),S=s("Step2"),v=s("Step3");return p(),d("div",null,[m(o,{title:"分步表单",ghost:!1},{default:h((()=>[g])),_:1}),m("div",N,[m("div",O,[m(j,{current:t.current},{default:h((()=>[m(u,{title:"填写转账信息"}),m(u,{title:"确认转账信息"}),m(u,{title:"完成"})])),_:1},8,["current"])]),m("div",R,[c(m(x,{onNext:t.handleStep1Next},null,8,["onNext"]),[[f,0===t.current]]),t.initSetp2?c((p(),d(S,{key:0,onPrev:t.handleStepPrev,onNext:t.handleStep2Next},null,8,["onPrev","onNext"])),[[f,1===t.current]]):l("v-if",!0),t.initSetp3?c((p(),d(v,{key:1,onRedo:t.handleRedo},null,8,["onRedo"])),[[f,2===t.current]]):l("v-if",!0)])])])}));b.render=_,b.__scopeId="data-v-234603f7";export default b;