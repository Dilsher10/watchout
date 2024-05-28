"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[558],{73899:function(e,s,a){var l=a(57437),c=a(2265),r=a(38472),n=a(95956),i=a(87138),d=a(20357);s.default=()=>{let[e,s]=(0,c.useState)({fname:"",lname:"",gender:"",dob:"",city:"",state:"",country:"",phone:"",email:"",ethnicity:"",password:""}),a=a=>{s({...e,[a.target.name]:a.target.value})},t=async s=>{s.preventDefault();try{await r.Z.post(d.env.NEXT_PUBLIC_API_URL+"/api/auth/user/register",e)?(n.Am.warning("Verify your account"),window.location.href="/user_dashboard/verify-account"):n.Am.error("Something went wrong")}catch(e){console.error("Error:",e),n.Am.error("Something went wrong")}};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("footer",{children:(0,l.jsxs)("div",{className:"container",children:[(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:"col-sm-12 col-md-4 col-lg-4",children:[(0,l.jsx)("img",{src:"/logo.png",alt:""}),(0,l.jsx)("div",{className:"card mb-4 mt-4",children:(0,l.jsxs)("div",{className:"row g-0",children:[(0,l.jsx)("div",{className:"col-md-1",children:(0,l.jsx)("img",{src:"/footer_icon.png",className:"img-fluid rounded-start",alt:"..."})}),(0,l.jsx)("div",{className:"col-md-11",children:(0,l.jsx)("div",{className:"card-body",children:(0,l.jsx)("p",{className:"card-text",children:"Journeys of Heartbreak: Stories Shared on Watch Out"})})})]})}),(0,l.jsx)("div",{className:"card mb-4",children:(0,l.jsxs)("div",{className:"row g-0",children:[(0,l.jsx)("div",{className:"col-md-1",children:(0,l.jsx)("img",{src:"/footer_icon.png",className:"img-fluid rounded-start",alt:"..."})}),(0,l.jsx)("div",{className:"col-md-11",children:(0,l.jsx)("div",{className:"card-body",children:(0,l.jsx)("p",{className:"card-text",children:"Peeling Back the Layers: Exploring Watch Out's Alert Narratives"})})})]})}),(0,l.jsx)("div",{className:"card mb-3",children:(0,l.jsxs)("div",{className:"row g-0",children:[(0,l.jsx)("div",{className:"col-md-1",children:(0,l.jsx)("img",{src:"/footer_icon.png",className:"img-fluid rounded-start",alt:"..."})}),(0,l.jsx)("div",{className:"col-md-11",children:(0,l.jsx)("div",{className:"card-body",children:(0,l.jsx)("p",{className:"card-text",children:"From Deceit to Strength: Genuine Tales on Watch Out"})})})]})})]}),(0,l.jsxs)("div",{className:"col-sm-12 col-md-4 col-lg-4",children:[(0,l.jsx)("img",{src:"/blog-2.png",className:"img-fluid",id:"footerImg",alt:""}),(0,l.jsx)("div",{className:"card mb-4",children:(0,l.jsxs)("div",{className:"row g-0",children:[(0,l.jsx)("div",{className:"col-md-1",children:(0,l.jsx)("img",{src:"/footer_icon.png",className:"img-fluid rounded-start",alt:"..."})}),(0,l.jsx)("div",{className:"col-md-11",children:(0,l.jsx)("div",{className:"card-body",children:(0,l.jsx)("p",{className:"card-text",children:"Lessons in Love and Loss: Echoes from Watch Out"})})})]})}),(0,l.jsx)("div",{className:"card mb-3",children:(0,l.jsxs)("div",{className:"row g-0",children:[(0,l.jsx)("div",{className:"col-md-1",children:(0,l.jsx)("img",{src:"/footer_icon.png",className:"img-fluid rounded-start",alt:"..."})}),(0,l.jsx)("div",{className:"col-md-11",children:(0,l.jsx)("div",{className:"card-body",children:(0,l.jsx)("p",{className:"card-text",children:"Revealing Fraud: Insider Stories from Watch Out's Community"})})})]})})]}),(0,l.jsxs)("div",{className:"col-sm-12 col-md-4 col-lg-4",children:[(0,l.jsx)("h1",{children:"Our Newsletter"}),(0,l.jsx)("p",{className:"footerText",children:"Subscribe to our newsletter and stay updated."}),(0,l.jsxs)("form",{action:"",children:[(0,l.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter Email"}),(0,l.jsx)("button",{className:"btn",children:"Send"}),(0,l.jsx)("h4",{children:"Follow Us"}),(0,l.jsx)("img",{src:"/facebook.png",alt:""}),(0,l.jsx)("img",{src:"/insta.png",className:"mx-3",alt:""}),(0,l.jsx)("img",{src:"/x.png",alt:""})]})]})]}),(0,l.jsx)("hr",{}),(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col",children:(0,l.jsx)("p",{className:"bottomText-1",children:"@Copyright 2024 By WatchOutAlerts"})}),(0,l.jsx)("div",{className:"col",children:(0,l.jsxs)("p",{className:"bottomText-2",children:["Design by Arthur James ",(0,l.jsx)(i.default,{href:"https://elitewebsters.com/",className:"link",target:"_blank",children:"(Elite Websters)"})]})})]})]})}),(0,l.jsx)("div",{className:"modal fade",id:"signupModal",tabIndex:"-1","aria-labelledby":"signupModalLabel","aria-hidden":"true",children:(0,l.jsx)("div",{className:"modal-dialog modal-lg",children:(0,l.jsxs)("div",{className:"modal-content",children:[(0,l.jsxs)("div",{className:"modal-header",children:[(0,l.jsx)("h1",{className:"modal-title fs-5",id:"signupModalLabel",children:"User Signup"}),(0,l.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),(0,l.jsx)("div",{className:"modal-body",children:(0,l.jsx)("form",{onSubmit:t,children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:"col-6",children:[(0,l.jsx)("label",{htmlFor:"",children:"First Name"}),(0,l.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter first name",name:"fname",onChange:a,required:!0})]}),(0,l.jsxs)("div",{className:"col-6",children:[(0,l.jsx)("label",{htmlFor:"",children:"Last Name"}),(0,l.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter last name",name:"lname",onChange:a,required:!0})]}),(0,l.jsxs)("div",{className:"col-6",children:[(0,l.jsx)("label",{htmlFor:"",children:"Gender"}),(0,l.jsxs)("select",{className:"form-select",name:"gender",onChange:a,children:[(0,l.jsx)("option",{selected:!0,children:"Select gender"}),(0,l.jsx)("option",{value:"Male",children:"Male"}),(0,l.jsx)("option",{value:"Female",children:"Female"}),(0,l.jsx)("option",{value:"Other",children:"Other"})]})]}),(0,l.jsxs)("div",{className:"col-6",children:[(0,l.jsx)("label",{htmlFor:"",children:"Date of Birth"}),(0,l.jsx)("input",{type:"date",className:"form-control",name:"dob",onChange:a,required:!0})]}),(0,l.jsxs)("div",{className:"col-6",children:[(0,l.jsx)("label",{htmlFor:"",children:"City"}),(0,l.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter city",name:"city",onChange:a,required:!0})]}),(0,l.jsxs)("div",{className:"col-6",children:[(0,l.jsx)("label",{htmlFor:"",children:"State"}),(0,l.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter state",name:"state",onChange:a,required:!0})]}),(0,l.jsxs)("div",{className:"col-6",children:[(0,l.jsx)("label",{htmlFor:"",children:"Country"}),(0,l.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter country",name:"country",onChange:a,required:!0})]}),(0,l.jsxs)("div",{className:"col-6",children:[(0,l.jsx)("label",{htmlFor:"",children:"Phone Number"}),(0,l.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter phone number",name:"phone",onChange:a,required:!0})]}),(0,l.jsxs)("div",{className:"col-6",children:[(0,l.jsx)("label",{htmlFor:"",children:"Email"}),(0,l.jsx)("input",{type:"email",className:"form-control",placeholder:"Enter email",name:"email",onChange:a,required:!0})]}),(0,l.jsxs)("div",{className:"col-6",children:[(0,l.jsx)("label",{htmlFor:"",children:"Ethnicity"}),(0,l.jsx)("input",{type:"text",className:"form-control",placeholder:"Enter ethnicity",name:"ethnicity",onChange:a,required:!0})]}),(0,l.jsxs)("div",{className:"col-6",children:[(0,l.jsx)("label",{htmlFor:"",children:"Password"}),(0,l.jsx)("input",{type:"password",className:"form-control",placeholder:"Enter password",name:"password",onChange:a,required:!0})]}),(0,l.jsx)("div",{className:"col-6",children:(0,l.jsx)("button",{type:"submit",className:"btn",children:"Submit"})})]})})})]})})})]})}},79143:function(e,s,a){var l=a(57437),c=a(2265),r=a(87138);s.default=()=>((0,c.useEffect)(()=>{document.querySelectorAll(".nav-link").forEach(e=>{e.href===window.location.href&&e.setAttribute("aria-current","page")})},[]),(0,l.jsx)("section",{className:"navBar sticky-top",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsx)("nav",{className:"navbar navbar-expand-lg",children:(0,l.jsxs)("div",{className:"container-fluid",children:[(0,l.jsx)(r.default,{className:"navbar-brand",href:"/",children:(0,l.jsx)("img",{src:"/logo.png",alt:"",className:"logo"})}),(0,l.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:(0,l.jsx)("span",{className:"navbar-toggler-icon"})}),(0,l.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[(0,l.jsxs)("ul",{className:"navbar-nav mx-auto mb-2 mb-lg-0",id:"navbar-nav",children:[(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(r.default,{className:"nav-link",href:"/",children:"Home"})}),(0,l.jsxs)("li",{className:"nav-item dropdown",children:[(0,l.jsx)(r.default,{className:"nav-link dropdown-toggle",href:"#",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Categories"}),(0,l.jsxs)("ul",{className:"dropdown-menu",children:[(0,l.jsx)("li",{children:(0,l.jsx)(r.default,{className:"dropdown-item",href:"#",children:"Cheating"})}),(0,l.jsx)("li",{children:(0,l.jsx)(r.default,{className:"dropdown-item",href:"#",children:"Harassment"})}),(0,l.jsx)("li",{children:(0,l.jsx)(r.default,{className:"dropdown-item",href:"#",children:"Physical Abuse"})}),(0,l.jsx)("li",{children:(0,l.jsx)(r.default,{className:"dropdown-item",href:"#",children:"Play Boy/Girl"})}),(0,l.jsx)("li",{children:(0,l.jsx)(r.default,{className:"dropdown-item",href:"#",children:"Gold Digger"})}),(0,l.jsx)("li",{children:(0,l.jsx)(r.default,{className:"dropdown-item",href:"#",children:"Toxic"})})]})]}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(r.default,{className:"nav-link",href:"/search",children:"Search"})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(r.default,{className:"nav-link",href:"/blog",children:"Blog"})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(r.default,{className:"nav-link",href:"/about",children:"About us"})}),(0,l.jsx)("li",{className:"nav-item",children:(0,l.jsx)(r.default,{className:"nav-link",href:"/contact",children:"Contact"})})]}),(0,l.jsxs)("form",{className:"d-flex",children:[(0,l.jsx)(r.default,{href:"/user_dashboard/login",className:"btn btn-outline-success",id:"btn-1",children:"Login"}),(0,l.jsx)("button",{type:"button",className:"btn btn-outline-success",id:"btn-2","data-bs-toggle":"modal","data-bs-target":"#signupModal",children:"Signup"})]})]})]})})})}))},24769:function(e,s,a){var l=a(57437);a(2265),s.default=()=>(0,l.jsx)("section",{className:"topBar",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-6",children:(0,l.jsx)("div",{className:"card",children:(0,l.jsxs)("div",{className:"row g-0",children:[(0,l.jsx)("div",{className:"col-md-1",children:(0,l.jsx)("img",{src:"/phone.png",className:"img-fluid",alt:"..."})}),(0,l.jsx)("div",{className:"col-md-8",children:(0,l.jsx)("div",{className:"card-body",children:(0,l.jsx)("p",{className:"card-text",children:"+1234567890"})})})]})})}),(0,l.jsx)("div",{className:"col-sm-12 col-md-6 col-lg-6",children:(0,l.jsx)("div",{className:"card",id:"card-2",children:(0,l.jsxs)("div",{className:"row g-0",children:[(0,l.jsx)("div",{className:"col-1",children:(0,l.jsx)("img",{src:"/news.png",className:"img-fluid",alt:"..."})}),(0,l.jsx)("div",{className:"col-6",children:(0,l.jsx)("div",{className:"card-body",id:"newsText",children:(0,l.jsx)("p",{className:"card-text",children:"News & Alert"})})}),(0,l.jsx)("div",{className:"col-5",children:(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:(0,l.jsx)("img",{src:"/x.png",alt:""})}),(0,l.jsx)("li",{children:(0,l.jsx)("img",{src:"/insta.png",alt:""})}),(0,l.jsx)("li",{children:(0,l.jsx)("img",{src:"/facebook.png",alt:""})})]})})]})})})]})})})}}]);