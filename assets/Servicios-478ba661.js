import{r as a,j as e,C as m,L as d,_ as p}from"./index-3b398248.js";const r=[{id:"barberia",name:"Barberia",type:"s"},{id:"colores",name:"Colores",type:"s"},{id:"corte",name:"Cortes",type:"s"},{id:"manicura",name:"Manicura",type:"s"},{id:"pedicura",name:"Pedicura",type:"s"},{id:"tratamientoCapilar",name:"Tratamiento Capilar",type:"s"}],u=Object.freeze(Object.defineProperty({__proto__:null,servicios:r},Symbol.toStringTag,{value:"Module"})),g=()=>{const[t,o]=a.useState([]);a.useEffect(()=>{(async()=>{const n=(await p(()=>Promise.resolve().then(()=>u),void 0)).servicios.filter(l=>l.type==="s");o(n)})()},[]),console.log(t);const c=r.filter(s=>s.type==="s");return e.jsx(m,{fluid:!0,className:"p-0 my-5",children:e.jsx(a.Suspense,{fallback:e.jsx("div",{children:"Loading..."}),children:e.jsx("div",{className:"imagen-grid",children:c.map((s,i)=>e.jsxs("div",{className:"imagen-container",children:[e.jsx("img",{className:"imagen-servicio custom-image",src:`https://victorbriavi.github.io/WebTime/assets/Servicios/${s.type}-${s.id}.jpeg`,alt:`Imagen ${i}`}),e.jsx("div",{className:"texto-superpuesto custom-image",children:e.jsx(d,{to:"/WebTime/barberia",children:e.jsx("button",{className:"css-button-sliding-to-top--black ",children:`${s.name.toUpperCase()}`})})})]},i))})})})};export{g as default};
