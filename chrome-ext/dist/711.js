/*! For license information please see 711.js.LICENSE.txt */
"use strict";(self.webpackChunkaid_vertize=self.webpackChunkaid_vertize||[]).push([[711],{682:(e,t,n)=>{function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},a.apply(this,arguments)}var r;n.d(t,{aU:()=>r,q_:()=>c,Ep:()=>p,cP:()=>f}),function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"}(r||(r={}));var i=function(e){return e},l="beforeunload",o="hashchange",u="popstate";function c(e){void 0===e&&(e={});var t=e.window,n=void 0===t?document.defaultView:t,c=n.history;function d(){var e=f(n.location.hash.substr(1)),t=e.pathname,a=void 0===t?"/":t,r=e.search,l=void 0===r?"":r,o=e.hash,u=void 0===o?"":o,s=c.state||{};return[s.idx,i({pathname:a,search:l,hash:u,state:s.usr||null,key:s.key||"default"})]}var v=null;function m(){if(v)E.call(v),v=null;else{var e=r.Pop,t=d(),n=t[0],a=t[1];if(E.length){if(null!=n){var i=b-n;i&&(v={action:e,location:a,retry:function(){W(-1*i)}},W(i))}}else S(e)}}n.addEventListener(u,m),n.addEventListener(o,(function(){p(d()[1])!==p(P)&&m()}));var g=r.Pop,y=d(),b=y[0],P=y[1],x=h(),E=h();function C(e){return function(){var e=document.querySelector("base"),t="";if(e&&e.getAttribute("href")){var a=n.location.href,r=a.indexOf("#");t=-1===r?a:a.slice(0,r)}return t}()+"#"+("string"==typeof e?e:p(e))}function w(e,t){return void 0===t&&(t=null),i(a({pathname:P.pathname,hash:"",search:""},"string"==typeof e?f(e):e,{state:t,key:Math.random().toString(36).substr(2,8)}))}function O(e,t){return[{usr:e.state,key:e.key,idx:t},C(e)]}function k(e,t,n){return!E.length||(E.call({action:e,location:t,retry:n}),!1)}function S(e){g=e;var t=d();b=t[0],P=t[1],x.call({action:g,location:P})}function W(e){c.go(e)}return null==b&&(b=0,c.replaceState(a({},c.state,{idx:b}),"")),{get action(){return g},get location(){return P},createHref:C,push:function e(t,a){var i=r.Push,l=w(t,a);if(k(i,l,(function(){e(t,a)}))){var o=O(l,b+1),u=o[0],s=o[1];try{c.pushState(u,"",s)}catch(e){n.location.assign(s)}S(i)}},replace:function e(t,n){var a=r.Replace,i=w(t,n);if(k(a,i,(function(){e(t,n)}))){var l=O(i,b),o=l[0],u=l[1];c.replaceState(o,"",u),S(a)}},go:W,back:function(){W(-1)},forward:function(){W(1)},listen:function(e){return x.push(e)},block:function(e){var t=E.push(e);return 1===E.length&&n.addEventListener(l,s),function(){t(),E.length||n.removeEventListener(l,s)}}}}function s(e){e.preventDefault(),e.returnValue=""}function h(){var e=[];return{get length(){return e.length},push:function(t){return e.push(t),function(){e=e.filter((function(e){return e!==t}))}},call:function(t){e.forEach((function(e){return e&&e(t)}))}}}function p(e){var t=e.pathname,n=void 0===t?"/":t,a=e.search,r=void 0===a?"":a,i=e.hash,l=void 0===i?"":i;return r&&"?"!==r&&(n+="?"===r.charAt(0)?r:"?"+r),l&&"#"!==l&&(n+="#"===l.charAt(0)?l:"#"+l),n}function f(e){var t={};if(e){var n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));var a=e.indexOf("?");a>=0&&(t.search=e.substr(a),e=e.substr(0,a)),e&&(t.pathname=e)}return t}},711:(e,t,n)=>{n.d(t,{UT:()=>u,rU:()=>c});var a=n(294),r=n(682),i=n(974);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},l.apply(this,arguments)}const o=["onClick","reloadDocument","replace","state","target","to"];function u(e){let{basename:t,children:n,window:l}=e,o=(0,a.useRef)();null==o.current&&(o.current=(0,r.q_)({window:l}));let u=o.current,[c,s]=(0,a.useState)({action:u.action,location:u.location});return(0,a.useLayoutEffect)((()=>u.listen(s)),[u]),(0,a.createElement)(i.F0,{basename:t,children:n,location:c.location,navigationType:c.action,navigator:u})}const c=(0,a.forwardRef)((function(e,t){let{onClick:n,reloadDocument:u,replace:c=!1,state:s,target:h,to:p}=e,f=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o),d=(0,i.oQ)(p),v=function(e,t){let{target:n,replace:l,state:o}=void 0===t?{}:t,u=(0,i.s0)(),c=(0,i.TH)(),s=(0,i.WU)(e);return(0,a.useCallback)((t=>{if(!(0!==t.button||n&&"_self"!==n||function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(t))){t.preventDefault();let n=!!l||(0,r.Ep)(c)===(0,r.Ep)(s);u(e,{replace:n,state:o})}}),[c,u,s,l,o,n,e])}(p,{replace:c,state:s,target:h});return(0,a.createElement)("a",l({},f,{href:d,onClick:function(e){n&&n(e),e.defaultPrevented||u||v(e)},ref:t,target:h}))}))},974:(e,t,n)=>{n.d(t,{AW:()=>c,F0:()=>s,TH:()=>d,WU:()=>m,Z5:()=>h,oQ:()=>p,s0:()=>v});var a=n(294),r=n(682);function i(e,t){if(!e)throw new Error(t)}const l=(0,a.createContext)(null),o=(0,a.createContext)(null),u=(0,a.createContext)({outlet:null,matches:[]});function c(e){i(!1)}function s(e){let{basename:t="/",children:n=null,location:u,navigationType:c=r.aU.Pop,navigator:s,static:h=!1}=e;f()&&i(!1);let p=R(t),d=(0,a.useMemo)((()=>({basename:p,navigator:s,static:h})),[p,s,h]);"string"==typeof u&&(u=(0,r.cP)(u));let{pathname:v="/",search:m="",hash:g="",state:y=null,key:b="default"}=u,P=(0,a.useMemo)((()=>{let e=j(v,p);return null==e?null:{pathname:e,search:m,hash:g,state:y,key:b}}),[p,v,m,g,y,b]);return null==P?null:(0,a.createElement)(l.Provider,{value:d},(0,a.createElement)(o.Provider,{children:n,value:{location:P,navigationType:c}}))}function h(e){let{children:t,location:n}=e;return function(e,t){f()||i(!1);let{matches:n}=(0,a.useContext)(u),l=n[n.length-1],o=l?l.params:{},c=(l&&l.pathname,l?l.pathnameBase:"/");l&&l.route;let s,h=d();if(t){var p;let e="string"==typeof t?(0,r.cP)(t):t;"/"===c||(null==(p=e.pathname)?void 0:p.startsWith(c))||i(!1),s=e}else s=h;let v=s.pathname||"/",m=function(e,t,n){void 0===n&&(n="/");let a=j(("string"==typeof t?(0,r.cP)(t):t).pathname||"/",n);if(null==a)return null;let i=y(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){return e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]))?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let l=null;for(let e=0;null==l&&e<i.length;++e)l=S(i[e],a);return l}(e,{pathname:"/"===c?v:v.slice(c.length)||"/"});return function(e,t){return void 0===t&&(t=[]),null==e?null:e.reduceRight(((n,r,i)=>(0,a.createElement)(u.Provider,{children:void 0!==r.route.element?r.route.element:n,value:{outlet:n,matches:t.concat(e.slice(0,i+1))}})),null)}(m&&m.map((e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:B([c,e.pathname]),pathnameBase:"/"===e.pathnameBase?c:B([c,e.pathnameBase])}))),n)}(g(t),n)}function p(e){f()||i(!1);let{basename:t,navigator:n}=(0,a.useContext)(l),{hash:o,pathname:u,search:c}=m(e),s=u;if("/"!==t){let n=function(e){return""===e||""===e.pathname?"/":"string"==typeof e?(0,r.cP)(e).pathname:e.pathname}(e),a=null!=n&&n.endsWith("/");s="/"===u?t+(a?"/":""):B([t,u])}return n.createHref({pathname:s,search:c,hash:o})}function f(){return null!=(0,a.useContext)(o)}function d(){return f()||i(!1),(0,a.useContext)(o).location}function v(){f()||i(!1);let{basename:e,navigator:t}=(0,a.useContext)(l),{matches:n}=(0,a.useContext)(u),{pathname:r}=d(),o=JSON.stringify(n.map((e=>e.pathnameBase))),c=(0,a.useRef)(!1);return(0,a.useEffect)((()=>{c.current=!0})),(0,a.useCallback)((function(n,a){if(void 0===a&&(a={}),!c.current)return;if("number"==typeof n)return void t.go(n);let i=$(n,JSON.parse(o),r);"/"!==e&&(i.pathname=B([e,i.pathname])),(a.replace?t.replace:t.push)(i,a.state)}),[e,t,o,r])}function m(e){let{matches:t}=(0,a.useContext)(u),{pathname:n}=d(),r=JSON.stringify(t.map((e=>e.pathnameBase)));return(0,a.useMemo)((()=>$(e,JSON.parse(r),n)),[e,r,n])}function g(e){let t=[];return a.Children.forEach(e,(e=>{if(!(0,a.isValidElement)(e))return;if(e.type===a.Fragment)return void t.push.apply(t,g(e.props.children));e.type!==c&&i(!1);let n={caseSensitive:e.props.caseSensitive,element:e.props.element,index:e.props.index,path:e.props.path};e.props.children&&(n.children=g(e.props.children)),t.push(n)})),t}function y(e,t,n,a){return void 0===t&&(t=[]),void 0===n&&(n=[]),void 0===a&&(a=""),e.forEach(((e,r)=>{let l={relativePath:e.path||"",caseSensitive:!0===e.caseSensitive,childrenIndex:r,route:e};l.relativePath.startsWith("/")&&(l.relativePath.startsWith(a)||i(!1),l.relativePath=l.relativePath.slice(a.length));let o=B([a,l.relativePath]),u=n.concat(l);e.children&&e.children.length>0&&(!0===e.index&&i(!1),y(e.children,t,u,o)),(null!=e.path||e.index)&&t.push({path:o,score:k(o,e.index),routesMeta:u})})),t}const b=/^:\w+$/,P=3,x=2,E=1,C=10,w=-2,O=e=>"*"===e;function k(e,t){let n=e.split("/"),a=n.length;return n.some(O)&&(a+=w),t&&(a+=x),n.filter((e=>!O(e))).reduce(((e,t)=>e+(b.test(t)?P:""===t?E:C)),a)}function S(e,t){let{routesMeta:n}=e,a={},r="/",i=[];for(let e=0;e<n.length;++e){let l=n[e],o=e===n.length-1,u="/"===r?t:t.slice(r.length)||"/",c=W({path:l.relativePath,caseSensitive:l.caseSensitive,end:o},u);if(!c)return null;Object.assign(a,c.params);let s=l.route;i.push({params:a,pathname:B([r,c.pathname]),pathnameBase:R(B([r,c.pathnameBase])),route:s}),"/"!==c.pathnameBase&&(r=B([r,c.pathnameBase]))}return i}function W(e,t){"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,a]=function(e,t,n){void 0===t&&(t=!1),void 0===n&&(n=!0);let a=[],r="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,((e,t)=>(a.push(t),"([^\\/]+)")));return e.endsWith("*")?(a.push("*"),r+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):r+=n?"\\/*$":"(?:(?=[.~-]|%[0-9A-F]{2})|\\b|\\/|$)",[new RegExp(r,t?void 0:"i"),a]}(e.path,e.caseSensitive,e.end),r=t.match(n);if(!r)return null;let i=r[0],l=i.replace(/(.)\/+$/,"$1"),o=r.slice(1);return{params:a.reduce(((e,t,n)=>{if("*"===t){let e=o[n]||"";l=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}return e[t]=function(e,t){try{return decodeURIComponent(e)}catch(t){return e}}(o[n]||""),e}),{}),pathname:i,pathnameBase:l,pattern:e}}function $(e,t,n){let a,i="string"==typeof e?(0,r.cP)(e):e,l=""===e||""===i.pathname?"/":i.pathname;if(null==l)a=n;else{let e=t.length-1;if(l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;i.pathname=t.join("/")}a=e>=0?t[e]:"/"}let o=function(e,t){void 0===t&&(t="/");let{pathname:n,search:a="",hash:i=""}="string"==typeof e?(0,r.cP)(e):e,l=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:l,search:L(a),hash:M(i)}}(i,a);return l&&"/"!==l&&l.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function j(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=e.charAt(t.length);return n&&"/"!==n?null:e.slice(t.length)||"/"}const B=e=>e.join("/").replace(/\/\/+/g,"/"),R=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),L=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",M=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:""},294:(e,t,n)=>{e.exports=n(408)}}]);