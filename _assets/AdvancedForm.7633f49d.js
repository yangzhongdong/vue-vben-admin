import{a as e,i as o,o as l,j as n,k as s,w as p}from"./index.acbb87a5.js";import"./xlsx.a48e520c.js";import"./index.43cfa9a0.js";import"./Trigger.7e5aa3a2.js";import"./omit.e88f0464.js";import"./_baseSlice.1123a25b.js";import"./DownOutlined.d8f26848.js";import"./CheckOutlined.3360de48.js";import{s as t}from"./index.9799a881.js";import"./colors.4e87fc28.js";import"./RightOutlined.31cb4cc9.js";import"./_stringToArray.943e7f6c.js";import"./upperFirst.67f16270.js";import"./index.1b763d8a.js";import"./index.a172b251.js";import"./index.6bcb6667.js";import"./UpOutlined.58a09ac3.js";import"./index.f39ff197.js";import"./index.687a618a.js";import"./index.6ed5ccd9.js";import"./index.cb9a9fbb.js";import"./useDebounce.c071ec0c.js";import"./useEventListener.e7c114de.js";import"./useBreakpoint.8d335e41.js";import{C as i}from"./index.f486b7fa.js";import"./index.771e6580.js";import"./tsxHelper.0159f1e5.js";import"./index.0c60de8b.js";import"./index.c0cb7618.js";import{u as a}from"./useForm.607168db.js";var r=e({components:{BasicForm:t,CollapseContainer:i},setup(){const[e]=a({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0}),[o]=a({labelWidth:120,schemas:[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:e=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field10",component:"Input",label:"字段10",colProps:{span:8}},{field:"field11",component:"Input",label:"字段11",colProps:{span:8}},{field:"field12",component:"Input",label:"字段12",colProps:{span:8}},{field:"field13",component:"Input",label:"字段13",colProps:{span:8}}],actionColOptions:{span:24},compact:!0,showAdvancedButton:!0});return{register:e,register1:o}}});const c={class:"m-4"};r.render=function(e,t,i,a,r,d){const m=o("BasicForm"),f=o("CollapseContainer");return l(),n("div",c,[s(f,{title:"基础收缩示例"},{default:p((()=>[s(m,{onRegister:e.register},null,8,["onRegister"])])),_:1}),s(f,{title:"超过3行自动收起",class:"mt-4"},{default:p((()=>[s(m,{onRegister:e.register1},null,8,["onRegister"])])),_:1})])};export default r;