var C=Object.defineProperty,D=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var y=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var b=(e,n,r)=>n in e?C(e,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[n]=r,p=(e,n)=>{for(var r in n||(n={}))v.call(n,r)&&b(e,r,n[r]);if(y)for(var r of y(n))E.call(n,r)&&b(e,r,n[r]);return e},f=(e,n)=>D(e,k(n));import{s as a,j as d,o as F,a as i,P,S,b as j,r as h,C as A,v as $,Z as R,D as L,R as O,c as I}from"./vendor.83b462b4.js";const z=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))u(o);new MutationObserver(o=>{for(const t of o)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&u(s)}).observe(document,{childList:!0,subtree:!0});function r(o){const t={};return o.integrity&&(t.integrity=o.integrity),o.referrerpolicy&&(t.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?t.credentials="include":o.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function u(o){if(o.ep)return;o.ep=!0;const t=r(o);fetch(o.href,t)}};z();const w=async e=>{const r=(await window.ymaps.geocode(e)).geoObjects.get(0),u=r.geometry.getCoordinates(),o=r.getAddressLine();return{newCoords:u,address:o}},N=e=>e>=0?`${e} \u0441.\u0448.`:`${e*-1} \u044E.\u0448.`,B=e=>e>=0?`${e} \u0432.\u0434.`:`${e*-1} \u0437.\u0434.`,M=e=>`${N(e[0].toFixed(2))}, ${B(e[1].toFixed(2))}`,q=(e,n)=>e===0?"#f04323":e===n.length-1?"green":"blue",T={center:[57.751574,37.573856],zoom:5,controls:["zoomControl","fullscreenControl"]},H={ns:"use-load-option",load:"package.full",apikey:"836dd02d-02f8-4716-8e5f-c575930dc493"},V=a.div`
    margin-right: 50px;

    @media (max-width: 1024px) {
        margin-right: 0;
    }
`,K=a.div`
    margin-top: 30px;
    padding: 10px;
    font-size: 12px;
    background-color: #fff;
    display: flex;
    justify-content: space-around;
    align-items: center;
`,m=a.div`
    display:flex;
`,x=a.div`
    width: 20px;
    height: 20px;
    margin-right: 5px;
    background-color: ${e=>e.backgroundColor}
`;function W({mapRef:e,placemarks:n,setPlacemarks:r}){const u=async(o,t)=>{const s=o.originalEvent.target.geometry.getCoordinates(),c=[...n],{address:l}=await w(s);c.splice(t,1,f(p({},n[t]),{coords:s,name:l})),r(c)};return d(V,{children:[d(F,{defaultState:T,instanceRef:e,className:"customMap",children:[n.map((o,t,s)=>i(P,{geometry:o.coords,options:{draggable:!0,iconColor:q(t,s)},onDragend:c=>u(c,t),properties:{balloonContent:o.name}},t)),i(S,{geometry:[...n.map(o=>o.coords)],options:{strokeColor:"#000",strokeWidth:4,strokeOpacity:.5},properties:{hintContent:"This is Polyline"}})]}),d(K,{children:[d(m,{children:[i(x,{backgroundColor:"#f04323"}),i("p",{children:"\u041D\u0430\u0447\u0430\u043B\u044C\u043D\u0430\u044F \u0442\u043E\u0447\u043A\u0430"})]}),d(m,{children:[i(x,{backgroundColor:"blue"}),i("p",{children:"\u041F\u0440\u043E\u043C\u0435\u0436\u0443\u0442\u043E\u0447\u043D\u0430\u044F \u0442\u043E\u0447\u043A\u0430"})]}),d(m,{children:[i(x,{backgroundColor:"green"}),i("p",{children:"\u041A\u043E\u043D\u0435\u0447\u043D\u0430\u044F \u0442\u043E\u0447\u043A\u0430"})]})]})]})}const X=a.div`
    padding: 10px 15px;
    margin-bottom: 8px;
    display: flex;
    gap: 5px;
    justify-content: space-between;
    align-items: center;
    background-color: ${e=>e.isDragging?"#bb3219":"#fff"}
`,Y=a.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
    color: #000;
`,Z=a.p`
    font-size: 18px;
    font-weight: 700;
`,G=a.p`
    font-size: 12px;
    font-style: italic;
`,J=a.button`
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
`;function Q({item:e,index:n,handleDelete:r}){return i(j,{draggableId:e.id,index:n,children:(u,o)=>d(X,f(p(p({ref:u.innerRef},u.draggableProps),u.dragHandleProps),{isDragging:o.isDragging,style:p({},u.draggableProps.style),children:[d(Y,{children:[i(Z,{children:e.name}),i(G,{children:M(e.coords)})]}),i(J,{onClick:()=>{r(n)},children:"X"})]}))})}const U=a.div`
    width: 40%;

    @media (max-width: 1024px) {
        width: 80%;
        margin-top: 50px;
    }
`,_=a.form`
    display: flex;
    height: auto;
    gap: 10px;
    
`,ee=a.input`
    flex-grow: 1;
    padding: 10px;
    font-size: 16px;
    border: none;
    box-shadow: 1px 1px 0 0px #3a3838;
    font-family: 'Open Sans', sans-serif;

    &:focus-visible { outline: 2px solid #f04323 }
`;a.button`
    padding: 10px;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid lightgrey;
    border-radius: 3px;
    cursor: pointer;
`;const ne=a.div`
    padding: 8px;
    margin: 20px 0;
    background-color: ${e=>e.isDragging?"lightblue":"#f04323"}
`;function oe({mapRef:e,placemarks:n,setPlacemarks:r}){const u=h.exports.useRef(null),o=s=>{const c=[...n];c.splice(s,1),r(c)},t=async s=>{s.preventDefault();const c=u.current.value;try{if(!c.trim().length)return;const{newCoords:l,address:g}=await w(c);r([...n,{coords:l,id:$(),name:g}]),e.current.setCenter(l)}catch(l){console.log(l.message)}finally{u.current.value=""}};return h.exports.useEffect(()=>{window.ymaps.ready(()=>{new window.ymaps.SuggestView("suggest")})},[]),d(U,{children:[i(_,{onSubmit:t,children:i(ee,{type:"text",id:"suggest",ref:u,autoFocus:!0,placeholder:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435..."})}),i(A,{droppableId:"droppable",children:(s,c)=>d(ne,f(p({},s.droppableProps),{ref:s.innerRef,isDragging:c.isDraggingOver,children:[n.map((l,g)=>i(Q,{item:l,index:g,handleDelete:o},l.id)),s.placeholder]}))})]})}const te=a.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`,re=a.div`
    display: flex;
    margin: 70px 20px ;
    justify-content: center;
    flex: 1 0 auto;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
`,ie=a.div`
    background-color: black;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    color: white;

    a { color: white }
`;function se(){const[e,n]=h.exports.useState([{coords:[55.75,37.62],id:"111",name:"\u041C\u043E\u0441\u043A\u0432\u0430, \u0420\u043E\u0441\u0441\u0438\u044F"},{coords:[59.98,30.36],id:"222",name:"\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433, \u0420\u043E\u0441\u0441\u0438\u044F"},{coords:[59.22,39.89],id:"333",name:"\u0412\u043E\u043B\u043E\u0433\u0434\u0430, \u0420\u043E\u0441\u0441\u0438\u044F"}]),r=h.exports.useRef(null),u=(t,s,c)=>{const l=Array.from(t),[g]=l.splice(s,1);return l.splice(c,0,g),l};return i(R,{query:H,children:d(te,{children:[d(re,{children:[i(W,{mapRef:r,placemarks:e,setPlacemarks:n}),i(L,{onDragEnd:t=>{if(!t.destination||t.source.index===t.destination.index)return;const s=u(e,t.source.index,t.destination.index);n(s)},children:i(oe,{mapRef:r,placemarks:e,setPlacemarks:n})})]}),d(ie,{children:[i("a",{href:"https://t.me/keeeparis",className:"telLink",rel:"noopener noreferrer",children:"Vladimir Trotsenko"}),", ",new Date().getFullYear()]})]})})}O.render(i(I.StrictMode,{children:i(se,{})}),document.getElementById("root"));
