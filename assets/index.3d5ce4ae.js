import{d as r,P as t,C as e,G as n,R as o,j as a,F as i,E as u,v as s,c4 as c,D as f,K as l}from"./index.038a8ed4.js";import{D as p}from"./DownOutlined.d67419d1.js";import{D as d,M as m}from"./index.940e2f2a.js";function h(r){return"function"==typeof r||"[object Object]"===Object.prototype.toString.call(r)&&!i(r)}var b=r({name:"ABreadcrumbItem",__ANT_BREADCRUMB_ITEM:!0,props:{prefixCls:t.string,href:t.string,separator:t.VNodeChild.def("/"),overlay:t.VNodeChild},setup:function(){return{configProvider:e("configProvider",n)}},methods:{renderBreadcrumbNode:function(r,t){var e,n=o(this,"overlay");return n?a(d,{overlay:n,placement:"bottomCenter"},h(e=a("span",{class:"".concat(t,"-overlay-link")},[r,a(p,null,null)]))?e:{default:function(){return[e]}}):r}},render:function(){var r,t=this.prefixCls,e=(0,this.configProvider.getPrefixCls)("breadcrumb",t),n=o(this,"separator"),i=u(this);return r=s(this,"href")?a("a",{class:"".concat(e,"-link")},h(i)?i:{default:function(){return[i]}}):a("span",{class:"".concat(e,"-link")},h(i)?i:{default:function(){return[i]}}),r=this.renderBreadcrumbNode(r,e),i?a("span",null,[r,n&&""!==n&&a("span",{class:"".concat(e,"-separator")},h(n)?n:{default:function(){return[n]}})]):null}});function y(r){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(r){return typeof r}:function(r){return r&&"function"==typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r})(r)}function v(r){return function(r){if(Array.isArray(r))return g(r)}(r)||function(r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}(r)||function(r,t){if(!r)return;if("string"==typeof r)return g(r,t);var e=Object.prototype.toString.call(r).slice(8,-1);"Object"===e&&r.constructor&&(e=r.constructor.name);if("Map"===e||"Set"===e)return Array.from(r);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return g(r,t)}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(r,t){(null==t||t>r.length)&&(t=r.length);for(var e=0,n=new Array(t);e<t;e++)n[e]=r[e];return n}function A(r){return"function"==typeof r||"[object Object]"===Object.prototype.toString.call(r)&&!i(r)}function C(r){var t=r.route,e=r.params,n=r.routes,o=r.paths,i=n.indexOf(t)===n.length-1,u=function(r,t){if(!r.breadcrumbName)return null;var e=Object.keys(t).join("|");return r.breadcrumbName.replace(new RegExp(":(".concat(e,")"),"g"),(function(r,e){return t[e]||r}))}(t,e);return i?a("span",null,A(u)?u:{default:function(){return[u]}}):a("a",{href:"#/".concat(o.join("/"))},A(u)?u:{default:function(){return[u]}})}var R=r({name:"ABreadcrumb",props:{prefixCls:t.string,routes:{type:Array},params:t.any,separator:t.VNodeChild,itemRender:{type:Function}},setup:function(){return{configProvider:e("configProvider",n)}},methods:{getPath:function(r,t){return r=(r||"").replace(/^\//,""),Object.keys(t).forEach((function(e){r=r.replace(":".concat(e),t[e])})),r},addChildPath:function(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",e=arguments.length>2?arguments[2]:void 0,n=v(r),o=this.getPath(t,e);return o&&n.push(o),n},genForRoutes:function(r){var t=this,e=r.routes,n=void 0===e?[]:e,o=r.params,i=void 0===o?{}:o,u=r.separator,s=r.itemRender,c=void 0===s?C:s,f=[];return n.map((function(r){var e,o=t.getPath(r.path,i);o&&f.push(o);var s,l=[].concat(f),p=null;r.children&&r.children.length&&(p=a(m,null,A(s=r.children.map((function(r){var e;return a(m.Item,{key:r.path||r.breadcrumbName},A(e=c({route:r,params:i,routes:n,paths:t.addChildPath(l,r.path,i)}))?e:{default:function(){return[e]}})})))?s:{default:function(){return[s]}}));return a(b,{overlay:p,separator:u,key:o||r.breadcrumbName},A(e=c({route:r,params:i,routes:n,paths:l}))?e:{default:function(){return[e]}})}))}},render:function(){var r,t=this.prefixCls,e=this.routes,n=this.params,i=void 0===n?{}:n,s=this.$slots,p=(0,this.configProvider.getPrefixCls)("breadcrumb",t),d=c(u(this)),m=o(this,"separator"),h=this.itemRender||s.itemRender||C;return e&&e.length>0?r=this.genForRoutes({routes:e,params:i,separator:m,itemRender:h}):d.length&&(r=d.map((function(r,t){return f("object"===y(r.type)&&(r.type.__ANT_BREADCRUMB_ITEM||r.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),l(r,{separator:m,key:t})}))),a("div",{class:p},A(r)?r:{default:function(){return[r]}})}}),P=r({name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,props:{prefixCls:t.string},setup:function(){return{configProvider:e("configProvider",n)}},render:function(){var r=this.prefixCls,t=(0,this.configProvider.getPrefixCls)("breadcrumb",r),e=u(this);return a("span",{class:"".concat(t,"-separator")},[e||"/"])}});R.Item=b,R.Separator=P,R.install=function(r){return r.component(R.name,R),r.component(b.name,b),r.component(P.name,P),r};export{R as B};