import{a as o}from"./index.b5f656c2.js";import{u as r}from"./useApexCharts.e410dd1d.js";import{d as n,r as i,q as d,h as c,o as p,i as l,w as f,j as m}from"./index.de7a3c72.js";import"./index.cf88fb23.js";import"./domUtils.aa6aef94.js";import"./_stringToArray.9f34c09e.js";import"./RightOutlined.dcad5eff.js";import"./index.95c10fda.js";import"./useTimeout.5494657f.js";import"./useScrollTo.3c6228cf.js";import"./animation.29409132.js";var a=n({components:{CollapseContainer:o},setup(){const e=i(null),{setOptions:t}=r(e);return d(()=>{t({series:[{name:"Visits",data:[90,50,86,40,100,20]},{name:"Sales",data:[70,75,70,76,20,85]}],dataLabels:{style:{colors:["#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd"]}},chart:{height:350,type:"radar",dropShadow:{enabled:!0,blur:1,left:1,top:1}},yaxis:{show:!1},grid:{show:!1},legend:{show:!1},title:{show:!1},tooltip:{x:{show:!1}},markers:{size:0},xaxis:{categories:["2011","2012","2013","2014","2015","2016"]},stroke:{width:0},colors:["#9f8ed7","#1edec5"],plotOptions:{radar:{polygons:{strokeColors:["#e8e8e8","transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#8e9ad6","#1fcadb"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}}})}),{chartRef:e}}});const h={ref:"chartRef",style:{width:"100%"}};function u(e,t,x,C,_,b){const s=c("CollapseContainer");return p(),l(s,{title:"\u9500\u552E\u7EDF\u8BA1",canExpan:!1},{default:f(()=>[m("div",h,null,512)]),_:1})}a.render=u;export default a;