import{g as n,G as c,I as u,E as _,$ as i,c as t,_ as a,h as m,v as r,l as s,p}from"./q-7b203fc8.js";import{b as v}from"./q-dd2ebf99.js";import{DocumentContext as f}from"./q-7b9b4aa8.js";import{o as g}from"./q-fe88588a.js";const S=()=>{n();const e=c(f),o=u(!1);return _(t(()=>a(()=>Promise.resolve().then(()=>l),void 0),"s_DOo2JqKLRMs",[o])),o.value?i("button",null,{class:"btn-secondary btn",onClick$:t(()=>a(()=>Promise.resolve().then(()=>l),void 0),"s_lUWRyLyUZf8",[e])},[m(v,{class:"me-2",[r]:{class:r}},3,"vm_0")," Save"],1,"vm_1"):null},y=()=>{const[e]=s();localStorage["permacultr:project"]&&localStorage["permacultr:project"]!=="{}"&&(e.value=!0)};function b(e){return String(e).normalize("NFKD").replace(/[\u0300-\u036f]/g,"").trim().toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}const d=async()=>{const[e]=s(),o=new Blob([JSON.stringify(e.value,null,2)],{type:"plain/text"});await g(o,{fileName:`${b(e.value.name??"permacultre-project")}.pcp`},window.handle)},l=Object.freeze(Object.defineProperty({__proto__:null,_hW:p,s_DOo2JqKLRMs:y,s_SnAcSo5URAk:S,s_lUWRyLyUZf8:d},Symbol.toStringTag,{value:"Module"}));export{p as _hW,y as s_DOo2JqKLRMs,S as s_SnAcSo5URAk,d as s_lUWRyLyUZf8};
