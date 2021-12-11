var D=Object.defineProperty,k=Object.defineProperties;var v=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var E=Object.prototype.hasOwnProperty,F=Object.prototype.propertyIsEnumerable;var C=(e,n,t)=>n in e?D(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,g=(e,n)=>{for(var t in n||(n={}))E.call(n,t)&&C(e,t,n[t]);if(y)for(var t of y(n))F.call(n,t)&&C(e,t,n[t]);return e},m=(e,n)=>k(e,v(n));import{s as c,j as p,o as P,a as r,P as S,S as j,b as A,r as h,C as $,v as R,D as L,N as O,Z as I,R as M,c as N}from"./vendor.4033e165.js";const z=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&u(s)}).observe(document,{childList:!0,subtree:!0});function t(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function u(o){if(o.ep)return;o.ep=!0;const i=t(o);fetch(o.href,i)}};z();const B={center:[57.751574,37.573856],zoom:5,controls:["zoomControl","fullscreenControl"]},q={ns:"use-load-option",load:"package.full",apikey:"836dd02d-02f8-4716-8e5f-c575930dc493"},w=async(e,n)=>{const u=(await n.geocode(e)).geoObjects.get(0),o=u.geometry.getCoordinates(),i=u.getAddressLine();return{newCoords:o,address:i}},T=e=>e>=0?`${e} \u0441.\u0448.`:`${e*-1} \u044E.\u0448.`,V=e=>e>=0?`${e} \u0432.\u0434.`:`${e*-1} \u0437.\u0434.`,W=e=>`${T(e[0].toFixed(2))}, ${V(e[1].toFixed(2))}`,H=(e,n)=>e===0?"#f04323":e===n.length-1?"green":"blue",Y=c.div`
    margin-right: 50px;

    @media (max-width: 1024px) {
        margin-right: 0;
    }
`,K=c.div`
    margin-top: 30px;
    padding: 10px;
    font-size: 12px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
`,x=c.div`
    display:flex;
`,b=c.div`
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background-color: ${e=>e.backgroundColor}
`;function X({mapRef:e,placemarks:n,setPlacemarks:t,ymaps:u}){const o=async(i,s)=>{const a=i.get("target").geometry.getCoordinates(),l=[...n],{address:d}=await w(a,u);l.splice(s,1,m(g({},n[s]),{coords:a,name:d})),t(l)};return p(Y,{children:[p(P,{defaultState:B,instanceRef:e,className:"customMap",children:[n.map((i,s,a)=>r(S,{geometry:i.coords,options:{draggable:!0,iconColor:H(s,a)},onDragend:l=>o(l,s),properties:{balloonContent:i.name}},s)),r(j,{geometry:[...n.map(i=>i.coords)],options:{strokeColor:"#000",strokeWidth:4,strokeOpacity:.5},properties:{hintContent:"This is Polyline"}})]}),p(K,{children:[p(x,{children:[r(b,{backgroundColor:"#f04323"}),r("p",{children:"\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0442\u043E\u0447\u043A\u0430"})]}),p(x,{children:[r(b,{backgroundColor:"blue"}),r("p",{children:"\u041F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043E\u0447\u043D\u0430\u044F \u0442\u043E\u0447\u043A\u0430"})]}),p(x,{children:[r(b,{backgroundColor:"green"}),r("p",{children:"\u041A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0442\u043E\u0447\u043A\u0430"})]})]})]})}const Z=c.div`
    padding: 10px 15px;
    margin-bottom: 8px;
    display: flex;
    gap: 5px;
    justify-content: space-between;
    align-items: center;
    background-color: ${e=>e.isDragging?"#bb3219":"#fff"}
`,G=c.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
    color: #000;
`,J=c.p`
    font-size: 18px;
    font-weight: 700;
`,Q=c.p`
    font-size: 12px;
    font-style: italic;
`,U=c.button`
    width: 30px;
    height: 30px;
    flex-shrink: 0;
    border: none;
    border-radius: 3px;
    box-shadow: 1px 1px 0 0px lightgrey;
    cursor: pointer;
    color: white;
    background-color: #f04323;

    &:active { background-color: #bb3219; }
`;function _({item:e,index:n,handleDelete:t}){return r(A,{draggableId:e.id,index:n,children:(u,o)=>p(Z,m(g(g({ref:u.innerRef},u.draggableProps),u.dragHandleProps),{isDragging:o.isDragging,style:g({},u.draggableProps.style),children:[p(G,{children:[r(J,{children:e.name}),r(Q,{children:W(e.coords)})]}),r(U,{onClick:()=>{t(n)},children:"X"})]}))})}const ee=c.div`
    width: 40%;

    @media (max-width: 1024px) {
        width: 80%;
        margin-top: 50px;
    }
`,ne=c.form`
    display: flex;
    height: auto;
    gap: 10px;
    
`,oe=c.input`
    flex-grow: 1;
    padding: 10px;
    font-size: 16px;
    border: none;
    box-shadow: 1px 1px 0 0px #3a3838;
    font-family: 'Open Sans', sans-serif;

    &:focus-visible { outline: 2px solid #f04323 }
`;c.button`
    padding: 10px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid lightgrey;
    border-radius: 3px;
    cursor: pointer;
`;const te=c.div`
    padding: 8px;
    margin: 20px 0;
    background-color: ${e=>e.isDragging?"lightblue":"#f04323"}
`;function re({mapRef:e,placemarks:n,setPlacemarks:t,ymaps:u}){const o=h.exports.useRef(null),i=a=>{const l=[...n];l.splice(a,1),t(l)},s=async a=>{a.preventDefault();const l=o.current.value;try{if(!l.trim().length)return;const{newCoords:d,address:f}=await w(l,u);t([...n,{coords:d,id:R(),name:f}]),e.current.setCenter(d)}catch(d){console.log(d.message)}finally{o.current.value=""}};return h.exports.useEffect(()=>{new u.SuggestView(o.current)},[]),p(ee,{children:[r(ne,{onSubmit:s,children:r(oe,{type:"text",id:"suggest",ref:o,autoFocus:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435..."})}),r($,{droppableId:"droppable",children:(a,l)=>p(te,m(g({},a.droppableProps),{ref:a.innerRef,isDragging:l.isDraggingOver,children:[n.map((d,f)=>r(_,{item:d,index:f,handleDelete:i},d.id)),a.placeholder]}))})]})}const ie=c.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`,se=c.div`
    display: flex;
    margin: 70px 20px ;
    justify-content: center;
    flex: 1 0 auto;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
`,ue=c.div`
    background-color: black;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    color: white;

    a { color: white }
`;function ce({ymaps:e}){const[n,t]=h.exports.useState([{coords:[55.75,37.62],id:"111",name:"\u041C\u043E\u0441\u043A\u0432\u0430, \u0420\u043E\u0441\u0441\u0438\u044F"},{coords:[59.98,30.36],id:"222",name:"\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0420\u043E\u0441\u0441\u0438\u044F"},{coords:[59.22,39.89],id:"333",name:"\u0412\u043E\u043B\u043E\u0433\u0434\u0430, \u0420\u043E\u0441\u0441\u0438\u044F"}]),u=h.exports.useRef(null),o=(s,a,l)=>{const d=Array.from(s),[f]=d.splice(a,1);return d.splice(l,0,f),d};return p(ie,{children:[p(se,{children:[r(X,{mapRef:u,placemarks:n,setPlacemarks:t,ymaps:e}),r(L,{onDragEnd:s=>{if(!s.destination||s.source.index===s.destination.index)return;const a=o(n,s.source.index,s.destination.index);t(a)},children:r(re,{mapRef:u,placemarks:n,setPlacemarks:t,ymaps:e})})]}),p(ue,{children:[r("a",{href:"https://t.me/keeeparis",className:"telLink",rel:"noopener noreferrer",children:"Vladimir Trotsenko"}),", ",new Date().getFullYear()]})]})}function ae(){const e=h.exports.useMemo(()=>O(ce,!0,["SuggestView","geocode"]),[]);return r(I,{query:q,children:r(e,{})})}M.render(r(N.StrictMode,{children:r(ae,{})}),document.getElementById("root"));
