import{d as i,h as e,o as t,i as o,j as s}from"./index.038a8ed4.js";import"./SearchOutlined.66d5caaf.js";import"./scrollTo.c9242ea7.js";import"./index.c3615560.js";import"./DownOutlined.d67419d1.js";import"./CheckOutlined.d620339d.js";import"./index.c9d7536d.js";import"./EyeOutlined.b126afd7.js";import"./index.620c0fa0.js";import"./index.a3ff7a6f.js";import"./colors.792317d4.js";import"./index.940e2f2a.js";import"./RightOutlined.101d5456.js";import"./types.749efd5b.js";import"./toInteger.555223b8.js";import"./uuid.db1f33da.js";import{_ as r}from"./index.564de3b4.js";import"./findIndex.754fd039.js";import"./_stringToArray.e17e6377.js";import"./domUtils.f518ba34.js";import"./isEqual.d82ae6f0.js";import"./_baseProperty.74f89655.js";import"./index.bb7f58db.js";import"./index.daf187d0.js";import"./UpOutlined.f46c2aed.js";import"./LeftOutlined.cbfa8e1f.js";import"./index.a445a13b.js";import"./responsiveObserve.c545f1cc.js";import"./index.b5f1be95.js";import"./index.2e8b1daa.js";import"./index.bbf40656.js";import"./index.fa174d44.js";import"./index.578eb220.js";import"./index.6c08f541.js";import"./index.52045922.js";import"./zh_CN.8094f4d6.js";import"./useSortable.db6df861.js";import"./index.d9f5aec7.js";import"./index.a9b0ab62.js";import"./CaretDownFilled.8a1bc645.js";import"./transButton.4a4fa5a4.js";import"./util.0d0e9725.js";import"./index.a3cb0236.js";import"./CheckOutlined.da86faa1.js";import"./index.f5dd0bfd.js";import"./FullscreenOutlined.5a989c67.js";import"./RightOutlined.7c1cd1fe.js";import"./SettingOutlined.b8df148c.js";import"./useTimeout.1b66c22c.js";import"./index.90dff1fd.js";import"./index.8d91dadc.js";import"./animation.36e00bb4.js";import"./useScrollTo.f8476e81.js";import"./useAttrs.fdf628ba.js";import"./useWindowSizeFn.823037b6.js";import"./download.8376fe00.js";import"./useForm.711c001e.js";import"./clickOutside.f50cb2b2.js";import"./useExpose.e928c739.js";import{u as d}from"./useTable.69012368.js";import{getBasicColumns as m}from"./tableData.7aa0192c.js";import{d as n}from"./table.eac7103a.js";var a=i({components:{BasicTable:r},setup(){const[i]=d({title:"表尾行合计示例",api:n,rowSelection:{type:"checkbox"},columns:m(),showSummary:!0,summaryFunc:function(i){const e=i.reduce(((i,e)=>i+=e.no),0);return[{_row:"合计",_index:"平均值",no:e},{_row:"合计",_index:"平均值",no:e}]},scroll:{x:2e3},canResize:!1});return{registerTable:i}}});const p={class:"p-4"};a.render=function(i,r,d,m,n,a){const j=e("BasicTable");return t(),o("div",p,[s(j,{onRegister:i.registerTable},null,8,["onRegister"])])};export default a;