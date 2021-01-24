import{d as P,r as B,cp as g,cq as h,h as i,o as F,i as E,bw as v,j as o,m as C}from"./index.de7a3c72.js";import{C as m}from"./index.19d232b1.js";import"./index.dad53a49.js";import"./index.2d5b3941.js";import{_ as O}from"./index.8685fc69.js";import D from"./PersonTable.89dc9281.js";import{_ as A}from"./index.46623d23.js";import{u as f}from"./useForm.0d0b0437.js";import"./index.9b1a81a2.js";import"./UpOutlined.b1a0aa74.js";import"./LeftOutlined.6e782dc0.js";import"./DownOutlined.2e949c36.js";import"./RightOutlined.dcad5eff.js";import"./PlusOutlined.20641b62.js";import"./responsiveObserve.c545f1cc.js";import"./index.2073522b.js";import"./findIndex.538683ff.js";import"./isEqual.42834150.js";import"./_baseProperty.74f89655.js";import"./toInteger.e48028d2.js";import"./index.2419be78.js";import"./SearchOutlined.5cd4b61b.js";import"./CheckOutlined.615f0fd5.js";import"./index.6eb3b2f8.js";import"./index.0b88e676.js";import"./index.2e0fefa1.js";import"./EyeOutlined.e4d8b81b.js";import"./index.ba5abcce.js";import"./colors.e241e755.js";import"./RedoOutlined.d4a8b6b6.js";import"./index.55f43c00.js";import"./EllipsisOutlined.ba16b190.js";import"./types.ead79a33.js";import"./Tree.da704165.js";import"./util.0173355c.js";import"./useAttrs.5fb4b160.js";import"./index.95c10fda.js";import"./index.aa7240c2.js";import"./uuid.cdbe37ce.js";import"./index.69b2f2d2.js";import"./DeleteOutlined.e616faa6.js";import"./index.84a30426.js";import"./useTimeout.5494657f.js";import"./useWindowSizeFn.5bd3f00e.js";import"./index.b5f656c2.js";import"./index.cf88fb23.js";import"./domUtils.aa6aef94.js";import"./_stringToArray.9f34c09e.js";import"./useScrollTo.3c6228cf.js";import"./animation.29409132.js";import"./FullscreenOutlined.09f91c42.js";import"./index.b01ba49c.js";import"./index.967c47da.js";import"./index.56f02a82.js";import"./download.2e71cfcc.js";import"./index.2e361397.js";import"./index.1f78b020.js";import"./DoubleLeftOutlined.d752e6dc.js";import"./DoubleRightOutlined.b4ab6685.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c9242ea7.js";import"./transButton.da8a2266.js";import"./CaretDownFilled.186d011f.js";import"./clickOutside.5a8b0ef7.js";import"./useSortable.10178c08.js";import"./SettingOutlined.198ffb5d.js";import"./useExpose.1d889469.js";import"./useTable.aa27e6e7.js";import"./index.492a2c9c.js";import"./index.22fd658f.js";import"./usePageContext.05da5891.js";import"./ArrowLeftOutlined.ddcf4a87.js";const n=[{label:"\u4ED8\u6653\u6653",value:"1"},{label:"\u5468\u6BDB\u6BDB",value:"2"}],b=[{label:"\u79C1\u5BC6",value:"1"},{label:"\u516C\u5F00",value:"2"}],S=[{field:"f1",component:"Input",label:"\u4ED3\u5E93\u540D",required:!0},{field:"f2",component:"Input",label:"\u4ED3\u5E93\u57DF\u540D",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"\u4ED3\u5E93\u7BA1\u7406\u5458",componentProps:{options:n},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"\u5BA1\u6279\u4EBA",componentProps:{options:n},required:!0},{field:"f5",component:"RangePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"\u4ED3\u5E93\u7C7B\u578B",componentProps:{options:b},required:!0,colProps:{offset:2}}],T=[{field:"t1",component:"Input",label:"\u4EFB\u52A1\u540D",required:!0},{field:"t2",component:"Input",label:"\u4EFB\u52A1\u63CF\u8FF0",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"\u6267\u884C\u4EBA",componentProps:{options:n},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"\u8D23\u4EFB\u4EBA",componentProps:{options:n},required:!0},{field:"t5",component:"TimePicker",label:"\u751F\u6548\u65E5\u671F",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"\u4EFB\u52A1\u7C7B\u578B",componentProps:{options:b},required:!0,colProps:{offset:2}}];var a=P({components:{BasicForm:O,PersonTable:D,PageWrapper:A,[m.name]:m},setup(){const e=B(null),[p,{validate:l}]=f({baseColProps:{span:6},schemas:S,showActionButtonGroup:!1}),[d,{validate:u}]=f({baseColProps:{span:6},schemas:T,showActionButtonGroup:!1});async function c(){try{e.value&&console.log("table data:",e.value.getDataSource());const[s,r]=await Promise.all([l(),u()]);console.log("form data:",s,r)}catch(s){}}return{register:p,registerTask:d,submitAll:c,tableRef:e}}}),Ye=`.high-form[data-v-85ff7730] {
  padding-bottom: 48px;
}
`;const t=v("data-v-85ff7730");g("data-v-85ff7730");const k=C("\u63D0\u4EA4");h();const q=t((e,p,l,d,u,c)=>{const s=i("BasicForm"),r=i("a-card"),j=i("PersonTable"),_=i("a-button"),x=i("PageWrapper");return F(),E(x,{class:"high-form",title:"\u9AD8\u7EA7\u8868\u5355",contentBackground:"",content:" \u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002",contentClass:"p-4"},{rightFooter:t(()=>[o(_,{type:"primary",onClick:e.submitAll},{default:t(()=>[k]),_:1},8,["onClick"])]),default:t(()=>[o(r,{title:"\u4ED3\u5E93\u7BA1\u7406",bordered:!1},{default:t(()=>[o(s,{onRegister:e.register},null,8,["onRegister"])]),_:1}),o(r,{title:"\u4EFB\u52A1\u7BA1\u7406",bordered:!1,class:"mt-5"},{default:t(()=>[o(s,{onRegister:e.registerTask},null,8,["onRegister"])]),_:1}),o(r,{title:"\u6210\u5458\u7BA1\u7406",bordered:!1,class:"mt-5"},{default:t(()=>[o(j,{ref:"tableRef"},null,512)]),_:1})]),_:1})});a.render=q,a.__scopeId="data-v-85ff7730";export default a;