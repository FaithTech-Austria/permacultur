import{l as c,d as i,$ as a,O as u,c as o,_ as r,a as h,G as m,I as _,E as p,h as t,v as l,p as v}from"./q-e9d9a766.js";import{o as d}from"./q-fe88588a.js";import{DocumentContext as g}from"./q-371e3d1b.js";import{L as w}from"./q-426e8aaf.js";import{s as f}from"./q-5462d93b.js";function b(e){return String(e).normalize("NFKD").replace(/[\u0300-\u036f]/g,"").trim().toLowerCase().replace(/[^a-z0-9 -]/g,"").replace(/\s+/g,"-").replace(/-+/g,"-")}const E=async()=>{const[e]=c(),s=new Blob([JSON.stringify(e.value,null,2)],{type:"plain/text"});await d(s,{fileName:`${b(e.value.name??"permacultre-project")}.pcp`},window.handle)},O=()=>{const[e]=c();localStorage["permacultr:project"]&&localStorage["permacultr:project"]!=="{}"&&(e.value=!0)},V=e=>i("svg",{...e,children:[a("path",null,{d:"M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"},null,3,null),a("path",null,{d:"M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"},null,3,null)]},{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-file-earmark-plus",viewBox:"0 0 16 16",width:"1em",height:"1em","data-qwikest-icon":!0},0,"RT_0"),k=e=>i("svg",{...e,children:a("path",null,{d:"M1 3.5A1.5 1.5 0 0 1 2.5 2h2.764c.958 0 1.76.56 2.311 1.184C7.985 3.648 8.48 4 9 4h4.5A1.5 1.5 0 0 1 15 5.5v.64c.57.265.94.876.856 1.546l-.64 5.124A2.5 2.5 0 0 1 12.733 15H3.266a2.5 2.5 0 0 1-2.481-2.19l-.64-5.124A1.5 1.5 0 0 1 1 6.14V3.5zM2 6h12v-.5a.5.5 0 0 0-.5-.5H9c-.964 0-1.71-.629-2.174-1.154C6.374 3.334 5.82 3 5.264 3H2.5a.5.5 0 0 0-.5.5V6zm-.367 1a.5.5 0 0 0-.496.562l.64 5.124A1.5 1.5 0 0 0 3.266 14h9.468a1.5 1.5 0 0 0 1.489-1.314l.64-5.124A.5.5 0 0 0 14.367 7H1.633z"},null,3,null)},{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-folder2-open",viewBox:"0 0 16 16",width:"1em",height:"1em","data-qwikest-icon":!0},0,"M3_0"),C=e=>i("svg",{...e,children:a("path",null,{d:"M2 1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v7.293l2.646-2.647a.5.5 0 0 1 .708.708l-3.5 3.5a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L7.5 9.293V2a2 2 0 0 1 2-2H14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h2.5a.5.5 0 0 1 0 1H2z"},null,3,null)},{xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",class:"bi bi-save",viewBox:"0 0 16 16",width:"1em",height:"1em","data-qwikest-icon":!0},0,"mr_0"),S=u(o(()=>r(()=>import("./q-0915a348.js"),["build/q-0915a348.js","build/q-e9d9a766.js","build/q-371e3d1b.js","build/q-426e8aaf.js","build/q-fe88588a.js","build/q-5462d93b.js"]),"s_nqOvKcEg224")),H=()=>{h();const e=m(g),s=_(!1);return p(o(()=>r(()=>Promise.resolve().then(()=>n),void 0),"s_nCjd5Nz3MEw",[s])),a("div",null,{class:"btn-group"},[t(S,{children:[t(k,{class:"me-2",[l]:{class:l}},3,"7h_0")," Open"],class:"btn btn-secondary",[l]:{class:l}},1,"7h_1"),s.value?a("button",null,{class:"btn-secondary btn",onClick$:o(()=>r(()=>Promise.resolve().then(()=>n),void 0),"s_KxElkC9YkkU",[e])},[t(C,{class:"me-2",[l]:{class:l}},3,"7h_2")," Save"],1,"7h_3"):null,t(w,{class:"btn-primary btn",onClick$:o(()=>r(()=>Promise.resolve().then(()=>n),void 0),"s_TSeOnavOGIg",[e]),get href(){return f.project.slug},children:[t(V,{class:"me-2",[l]:{class:l}},3,"7h_4")," New"],[l]:{class:l,href:l,onClick$:l}},1,"7h_5")],1,"7h_6")},P=()=>{const[e]=c();localStorage.removeItem("permacultr:project"),e.value={}},n=Object.freeze(Object.defineProperty({__proto__:null,_hW:v,s_1oQr3mGFPF4:H,s_KxElkC9YkkU:E,s_TSeOnavOGIg:P,s_nCjd5Nz3MEw:O},Symbol.toStringTag,{value:"Module"}));export{v as _hW,H as s_1oQr3mGFPF4,E as s_KxElkC9YkkU,P as s_TSeOnavOGIg,O as s_nCjd5Nz3MEw};
