(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[725],{5650:function(e,t,n){Promise.resolve().then(n.bind(n,61189))},39350:function(e,t,n){"use strict";n.d(t,{w_:function(){return c}});var r=n(2265),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},s=r.createContext&&r.createContext(l),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e}).apply(this,arguments)},o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var l=0,r=Object.getOwnPropertySymbols(e);l<r.length;l++)0>t.indexOf(r[l])&&Object.prototype.propertyIsEnumerable.call(e,r[l])&&(n[r[l]]=e[r[l]]);return n};function c(e){return function(t){return r.createElement(i,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,n){return r.createElement(t.tag,a({key:n},t.attr),e(t.child))})}(e.child))}}function i(e){var t=function(t){var n,l=e.attr,s=e.size,c=e.title,i=o(e,["attr","size","title"]),u=s||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,i,{className:n,style:a(a({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),c&&r.createElement("title",null,c),e.children)};return void 0!==s?r.createElement(s.Consumer,null,function(e){return t(e)}):t(l)}},61189:function(e,t,n){"use strict";n.r(t);var r=n(57437),l=n(2265),s=n(95956),a=n(38472),o=n(58177),c=n(20357);t.default=()=>{(0,l.useEffect)(()=>{let e=document.querySelectorAll(".otp-field input");function t(t){let n=t.target,l=n.value,s=l.match(/[0-9a-z]/gi);n.value="",n.value=s?l[0]:"";let a=n.dataset.index;a<e.length-1&&s&&n.nextElementSibling.focus(),"Backspace"===t.key&&a>0&&n.previousElementSibling.focus(),a==e.length-1&&s&&r()}function n(t){let n=t.clipboardData.getData("text").split("");n.length===e.length&&(e.forEach((e,t)=>e.value=n[t]),r())}function r(){let t="";e.forEach(e=>{t+=e.value})}e.forEach((e,r)=>{e.dataset.index=r,e.addEventListener("keyup",t),e.addEventListener("paste",n)})},[]);let[e,t]=(0,l.useState)(""),[n,i]=(0,l.useState)(""),u=(e,t)=>{t.length>1&&(t=t.slice(-1)),i(n=>n.substring(0,e)+t+n.substring(e+1))},[d,m]=(0,l.useState)(!1);return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:"container-fluid loginSec",children:(0,r.jsx)("div",{className:"row h-100 align-items-center justify-content-center",children:(0,r.jsx)("div",{className:"col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4",children:(0,r.jsx)("form",{onSubmit:t=>{t.preventDefault();try{console.log(n),a.Z.post(c.env.NEXT_PUBLIC_API_URL+"/api/auth/user/reset-password",{password:e,otp:n}).then(e=>{200==e.data.code&&(s.Am.success("Password Updated Successfully"),window.location.href="/user_dashboard/login")}).catch(e=>{s.Am.error("Invalid OTP")})}catch(e){s.Am.error("Something went wrong")}},children:(0,r.jsxs)("div",{className:"bg-light rounded p-4 p-sm-5 my-4 mx-3",children:[(0,r.jsx)("div",{className:"mb-3",children:(0,r.jsx)("h3",{children:"Reset Password"})}),(0,r.jsxs)("div",{className:"mb-3",children:[(0,r.jsx)("label",{htmlFor:"",className:"mb-2",children:"Enter OTP"}),(0,r.jsx)("div",{className:"otp-field",children:[void 0,void 0,void 0,void 0].map((e,t)=>(0,r.jsx)("input",{type:"text",maxLength:"1",value:n[t]||"",onChange:e=>u(t,e.target.value)},t))})]}),(0,r.jsxs)("div",{className:"form-floating mb-3",children:[(0,r.jsx)("input",{type:d?"text":"password",className:"form-control",id:"floatingInput",placeholder:"name@example.com",onChange:e=>{t(e.target.value)}}),(0,r.jsx)("label",{htmlFor:"floatingInput",children:"Enter New Password"}),(0,r.jsx)("i",{className:"toggleIcon",onClick:()=>{m(!d)},children:d?(0,r.jsx)(o.hKY,{}):(0,r.jsx)(o.rWO,{})})]}),(0,r.jsx)("button",{type:"submit",className:"btn login-btn mt-4",children:"Reset"})]})})})})})})}}},function(e){e.O(0,[190,956,943,971,23,744],function(){return e(e.s=5650)}),_N_E=e.O()}]);