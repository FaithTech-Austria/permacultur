import{l as c,G as g,I as m,h as _,v as i,w as b,$ as n,c as o,x as f,_ as a,p as h}from"./q-e9d9a766.js";import{DocumentContext as I}from"./q-e049f104.js";import{M as O}from"./q-740dc337.js";const E=l=>{const[e]=c(),t=new Date(l.target.value);e.value.setFullYear(t.getFullYear()),e.value.setMonth(t.getMonth()),e.value.setDate(t.getDate()),e.value.setHours(t.getHours()),e.value.setMinutes(t.getMinutes())},y=()=>{const l=g(I),e=new Date;e.setHours(12);const t=m(e),s=["areaOfInterest","draw","shadow"],d=l.value.area_of_interest,p=o(()=>a(()=>Promise.resolve().then(()=>r),void 0),"s_6UIH2jRN1ck",[l]),u=new Date(t.value);return u.setMinutes(u.getMinutes()-u.getTimezoneOffset()),_(f,{children:[_(O,{get date(){return t.value},areaOfInterest:d,features:s,onLoad$:p,onShape$:o(()=>a(()=>Promise.resolve().then(()=>r),void 0),"s_tod0B40ggWc",[l]),[i]:{date:b(v=>v.value,[t]),onLoad$:i,onShape$:i}},3,"lx_0"),n("div",null,{class:"area-of-interest-map map-buttons btn-group"},[n("div",null,{class:"date-picker"},n("input",{value:u.toISOString().slice(0,16)},{class:"date-picker-input form-control",onChange$:o(()=>a(()=>Promise.resolve().then(()=>r),void 0),"s_oKeIOaci7jQ",[t]),type:"datetime-local"},null,3,null),1,null),n("button",null,{class:"btn btn-secondary",onClick$:o(()=>a(()=>import("./q-f1fec9f2.js"),[]),"s_Obz1C6EkHGM")},[n("iconify-icon",null,{icon:"la:hand-pointer-solid"},null,3,null)," ",n("span",null,null,"Select",3,null)],3,null),n("button",null,{class:"btn btn-secondary",onClick$:o(()=>a(()=>import("./q-1a73c0a4.js"),[]),"s_v0phyyugjLc")},[n("iconify-icon",null,{icon:"gis:polygon-pt"},null,3,null)," ",n("span",null,null,"Polygon",3,null)],3,null),n("button",null,{class:"btn btn-secondary",onClick$:o(()=>a(()=>import("./q-ec1e3bb4.js"),[]),"s_F3YKMQobwtE")},[n("iconify-icon",null,{icon:"gis:circle-o"},null,3,null)," ",n("span",null,null,"Circle",3,null)],3,null),n("button",null,{class:"btn btn-secondary",onClick$:o(()=>a(()=>import("./q-3a06b308.js"),[]),"s_Cd8e4xeB2Xc")},[n("iconify-icon",null,{icon:"bi:trash"},null,3,null)," ",n("span",null,null,"Clear",3,null)],3,null)],1,null)]},1,"lx_1")},D=l=>{const[e]=c();e.value=Object.assign({},e.value,{sun:l})},P=(l,e)=>{const[t]=c(),s=t.value.sun;s&&e.addFeatures(s),l.setPitch(90)},r=Object.freeze(Object.defineProperty({__proto__:null,_hW:h,s_6UIH2jRN1ck:P,s_PDxxdmq5L2I:y,s_oKeIOaci7jQ:E,s_tod0B40ggWc:D},Symbol.toStringTag,{value:"Module"}));export{h as _hW,P as s_6UIH2jRN1ck,y as s_PDxxdmq5L2I,E as s_oKeIOaci7jQ,D as s_tod0B40ggWc};
