import{a as e,i as o,o as l,j as t,k as i,w as n}from"./index.5a06cc5a.js";import"./xlsx.a48e520c.js";import"./index.285e765e.js";import"./Trigger.99f55fa6.js";import"./omit.dc68979e.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.43ac9423.js";import"./CheckOutlined.a9c880f1.js";import{s}from"./index.27a16a8f.js";import"./colors.fef6a1d3.js";import"./RightOutlined.177f594b.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.3c41385f.js";import"./index.2d99723f.js";import"./index.a172b251.js";import"./index.39112e54.js";import"./index.d758c27b.js";import"./UpOutlined.93565ff1.js";import"./index.4befb70e.js";import"./index.78155a1f.js";import"./index.5d3cdfa6.js";import"./index.f07c31d6.js";import"./index.6da2e83a.js";import{a as p}from"./index.813fa6f2.js";import"./LoadingOutlined.91523ad2.js";import"./RightOutlined.18857b33.js";import"./useTimeout.f9167c02.js";import"./tsxHelper.7d018852.js";import"./index.1b9ab3b5.js";import"./domUtils.a8aece5c.js";import"./index.2d373899.js";import"./animation.91509674.js";import"./useScrollTo.06e85a9e.js";import"./useAttrs.00256126.js";import"./index.f0b16be7.js";import{u as a}from"./useForm.5208afd5.js";var r=e({components:{BasicForm:s,CollapseContainer:p},setup(){const[e]=a({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),[o]=a({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0});return{register:e,register1:o}}});const c={class:"m-4"};r.render=function(e,s,p,a,r,d){const m=o("BasicForm"),f=o("CollapseContainer");return l(),t("div",c,[i(f,{title:"基础收缩示例"},{default:n((()=>[i(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),i(f,{title:"超过3行自动收起",class:"mt-4"},{default:n((()=>[i(m,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])};export default r;