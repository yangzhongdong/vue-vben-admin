import{ap as n,ak as r,aq as t,p as a,ar as u,as as e,at as i,au as o,am as f,av as l,aw as s,ax as v,ay as c}from"./index.038a8ed4.js";import{t as b}from"./toInteger.555223b8.js";import{b as m}from"./isEqual.d82ae6f0.js";import{b as p}from"./_baseProperty.74f89655.js";function d(r,t,a){var u=null==r?void 0:n(r,t);return void 0===u?a:u}function g(n){return n==n&&!t(n)}function j(n,r){return function(t){return null!=t&&(t[n]===r&&(void 0!==r||n in Object(t)))}}function h(n){var t=function(n){for(var r=a(n),t=r.length;t--;){var u=r[t],e=n[u];r[t]=[u,e,g(e)]}return r}(n);return 1==t.length&&t[0][2]?j(t[0][0],t[0][1]):function(a){return a===n||function(n,t,a,u){var e=a.length,i=e,o=!u;if(null==n)return!i;for(n=Object(n);e--;){var f=a[e];if(o&&f[2]?f[1]!==n[f[0]]:!(f[0]in n))return!1}for(;++e<i;){var l=(f=a[e])[0],s=n[l],v=f[1];if(o&&f[2]){if(void 0===s&&!(l in n))return!1}else{var c=new r;if(u)var b=u(s,v,l,n,t,c);if(!(void 0===b?m(v,s,3,u,c):b))return!1}}return!0}(a,n,t)}}function x(n,r){return null!=n&&r in Object(n)}function y(n,r){return null!=n&&function(n,r,t){for(var a=-1,s=(r=u(r,n)).length,v=!1;++a<s;){var c=e(r[a]);if(!(v=null!=n&&t(n,c)))break;n=n[c]}return v||++a!=s?v:!!(s=null==n?0:n.length)&&i(s)&&o(c,s)&&(f(n)||l(n))}(n,r,x)}function O(r){return s(r)?p(e(r)):function(r){return function(t){return n(t,r)}}(r)}function k(n){return"function"==typeof n?n:null==n?v:"object"==typeof n?f(n)?(r=n[0],t=n[1],s(r)&&g(t)?j(e(r),t):function(n){var a=d(n,r);return void 0===a&&a===t?y(n,r):m(t,a,3)}):h(n):O(n);var r,t}var q=Math.max;function w(n,r,t){var a=null==n?0:n.length;if(!a)return-1;var u=null==t?0:b(t);return u<0&&(u=q(a+u,0)),c(n,k(r),u)}export{k as b,w as f,d as g};