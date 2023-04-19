import{m as ie,r as g,c as _,d as U,o as b,a as w,b as n,t as q,u as l,g as K,w as Q,i as me,n as ge,s as fe,p as pe,q as be,x as ve,y as ye,z as he,e as _e,A as ne,B as xe,C as Ce,l as j,h as ae,F as N,f as J,_ as se,j as B,D as le,E as O,G as re,H as we}from"./index-64045075.js";import{u as Se,b as ke,c as Ie,d as Te,a as Re,_ as Ve}from"./useDataProvider-03a214e4.js";const H=ie("settings",()=>{const m=g(!1);function t(f){typeof f>"u"?m.value=!m.value:m.value=f}const r=g("page"),o=g(1),e=g(1),c=_(()=>e.value*1e3);function u(f){r.value=f}const y=g(!0),x=g([]),T=g([]);return{areSettingsDisplayed:m,setSettingsDisplayed:t,scrollType:r,scrollColumnsCount:o,readLineTimeSeconds:e,readLineTimeMS:c,setScrollType:u,showUnfinishedAthletes:y,availableCategories:x,selectedCategories:T,setAvailableCategories:f=>{x.value=f,T.value=f}}},{persist:!0}),Be={class:"tabular-nums"},Ae=n("span",null,null,-1),De={class:"absolute right-3 z-2 bg-header"},Me=U({__name:"CompetitionHeader",props:{competition:null},setup(m){const t=m,r=H(),{nowFormatted:o}=Se(),e=g(!1);return(c,u)=>{const y=ge("RouterLink");return b(),w("h1",{class:"flex justify-between gap-2.5 bg-header font-mrb font-bold text-4xl text-white p-3",onMouseenter:u[1]||(u[1]=x=>e.value=!0),onMouseleave:u[2]||(u[2]=x=>e.value=!1)},[n("span",Be,q(l(o)),1),n("span",null,q(t.competition.name),1),Ae,n("div",De,[K(y,{"data-testid":"home-button",to:"/"},{default:Q(()=>[me("Home")]),_:1}),n("button",{onClick:u[0]||(u[0]=()=>l(r).setSettingsDisplayed()),class:"ml-3 i-mdi-cog"})])],32)}}}),ue=Symbol();function Fe(m){const t=g(null),r=_(()=>t.value?t.value.getBoundingClientRect():{top:0,height:100,bottom:100}),o=[];let e=[];const c=fe({}),u=_(()=>m.value==="none"||m.value==="continues"?250:1e3),y=ke(()=>{T()},100,{maxWait:u});Ie(t,"scroll",y),pe(ue,i=>{o.push(i),y()});function T(){e=[];for(const i of o){const s=R(i.elementRef.value);s!==i.isActive.value&&(i.isActive.value=s),s&&e.push(i)}V()}function R(i){const s=i.getBoundingClientRect();return s.top<r.value.bottom+r.value.height&&s.bottom>r.value.top}function f(i,{top:s=r.value.top,bottom:d=r.value.bottom}={}){const v=i.getBoundingClientRect();return Math.round(v.bottom)<=Math.round(d)&&Math.round(v.top)>=Math.round(s)}function A(i){const s=i.getBoundingClientRect();return s.top<r.value.bottom&&s.bottom>r.value.top}const h=i=>{var d;const s=i.contentRef.value;return s?((d=s.children[0])==null?void 0:d.children)??[]:[]};function V(){c.value={};let i=!0;for(const s of e){const d=A(s.elementRef.value),v={item:s,isFirstItem:i,isVisible:d};i=!1;const I=h(s);if(d&&I.length>0){const W=[],F=s.stickyRef.value,Y=F==null?void 0:F.getBoundingClientRect().bottom;for(let P=1;P<I.length;P++){const G=I[P];f(G,{top:Y})&&W.push(P)}v.subItemsVisible=W,v.subItemsLength=I.length}c.value[s.id]=v}}function S(){var i;for(const s of e){const d=c.value[s.id];if(!d)continue;const v=((i=d.subItemsVisible)==null?void 0:i.length)||0;if(!d.isFirstItem)return{item:s,isFirstItem:!1};if(v>=2){const I=h(s);return{item:s,currentSubItem:I[d.subItemsVisible[0]],nextSubItem:I[d.subItemsVisible[1]],isFirstItem:!0}}}return null}function k(){var i;for(const s of e){const d=c.value[s.id];if(!d)continue;if(!d.isVisible)return{item:s,isFirstItem:d.isFirstItem};const v=(i=d.subItemsVisible)==null?void 0:i.slice(-1)[0];if(!v&&!d.isFirstItem)return{item:s,isFirstItem:d.isFirstItem};if(v&&v<d.subItemsLength-1)return{item:s,nextSubItem:h(s)[v+1],isFirstItem:d.isFirstItem}}return null}return{columnWrapper:t,columnWrapperRect:r,columnItems:o,getNextItemOnPage:S,getNextItemBelowPage:k,checkItemsVisibility:V}}function ht(m){const t=be(ue);if(!t)throw new Error("registerScrollColumnItem not provided");const r=g(null),o=g(null),e=g(null),c=g(!1);return ve(()=>{r.value&&t({id:m,elementRef:g(r.value),stickyRef:o,contentRef:e,isActive:c})}),{scrollItemRef:r,stickyRef:o,contentRef:e,isActive:c}}const Pe=ie("tableSizing",()=>({lineHeight:g(50)})),Le=U({__name:"ScrollColumn",setup(m){const t=H(),r=Pe(),o=g(null),{columnWrapper:e,columnWrapperRect:c,getNextItemOnPage:u,getNextItemBelowPage:y,checkItemsVisibility:x}=Fe(ye(t,"scrollType")),T=_(()=>c.value?Math.floor(c.value.height/r.lineHeight):0),R=_(()=>T.value*t.readLineTimeMS);let f=null,A={};const h={page:Y,row:P,continues:G};he(()=>t.scrollType,a=>{f&&(f(),f=null),a!=="none"&&(f=h[a]())},{immediate:!0});function V(){return o.value?i(o.value):!0}function S(){return o.value?c.value.top>=0:!0}function k(){var a;(a=e.value)==null||a.scrollTo({top:0,behavior:"smooth"})}function i(a){const C=l(a).getBoundingClientRect(),D=16,M=C.bottom-c.value.bottom;return Math.floor(M)<=D}function s(a){var C,D,M;const p=a();if(!p){x();return}if(p.nextSubItem){const z=p.nextSubItem.getBoundingClientRect(),$=((C=p.item.stickyRef.value)==null?void 0:C.offsetHeight)||0,E=z.top-c.value.top-$;(D=e.value)==null||D.scrollBy({top:E,behavior:"smooth"})}else{const $=p.item.elementRef.value.getBoundingClientRect().top-c.value.top;(M=e.value)==null||M.scrollBy({top:$,behavior:"smooth"})}}const I={page:()=>s(y),row:()=>s(u)};function W(a){S()&&x(),V()?k():a()}function F(a,p){const C=A[a]??Te(()=>W(I[a]),p);return A[a]||(A[a]=C),C.isActive.value||C.resume(),C.pause}function Y(){return F("page",R)}function P(){return F("row",()=>t.readLineTimeMS)}function G(){const a=g(!1),p=()=>a.value=!0;return X(a),p}function X(a){window.setTimeout(()=>{a.value||ce(a)},R.value/2)}function ce(a){if(e.value===null||o.value===null)return;const p=e.value.getBoundingClientRect(),C=o.value.getBoundingClientRect(),D=C.bottom-(p.height+p.top),M=Math.floor(D/r.lineHeight)*t.readLineTimeMS,z=p.top-C.top,$=D;let E=null,L;const Z=function(ee){var oe;if(a.value){L&&window.cancelAnimationFrame(L);return}E||(E=ee);const te=ee-E,de=Math.min(te/M,1);(oe=e.value)==null||oe.scrollTo(0,z+$*de),te<M?L=window.requestAnimationFrame(Z):L&&(window.cancelAnimationFrame(L),window.setTimeout(()=>{a.value||(k(),X(a))},R.value))};L=window.requestAnimationFrame(Z)}return(a,p)=>(b(),w("div",{class:"flex-1 overflow-y-scroll columnWrapper",ref_key:"columnWrapper",ref:e},[n("div",{ref_key:"columnContent",ref:o},[_e(a.$slots,"default")],512)],512))}});function $e(m){const{getCompetitionLoader:t}=Re(),{competition:r,status:o}=t(m),e=_(()=>r.value?[...r.value.categories].sort((y,x)=>y.name.localeCompare(x.name)):[]);return{competition:_(()=>{if(r.value)return{...r.value,categories:e.value}}),status:o}}const Ee={class:"font-mrb grow flex overflow-hidden pt-3"},Ue={key:1},He={key:2},We=U({__name:"CompetitionTable",props:{competitionId:null},setup(m){const t=m,r=ne(()=>se(()=>import("./CategoryTable-c4603d1a.js"),["assets/CategoryTable-c4603d1a.js","assets/dateTime-e20df54b.js","assets/useDataProvider-03a214e4.js","assets/index-64045075.js","assets/index-d956bccf.css","assets/CategoryTable-6d55fd53.css"])),o=ne(()=>se(()=>import("./CategoryRelayTable-b6f775e6.js"),["assets/CategoryRelayTable-b6f775e6.js","assets/dateTime-e20df54b.js","assets/useDataProvider-03a214e4.js","assets/index-64045075.js","assets/index-d956bccf.css","assets/CategoryRelayTable-47d3e90d.css"])),e=H(),{competitionId:c}=xe(t),{competition:u,status:y}=$e(c),x=_(()=>u.value?u.value.isRelay?o:r:null),T=_(()=>u.value?u.value.categories.map(h=>h.name):[]);Ce(()=>e.setAvailableCategories(T.value));const R=_(()=>u.value?u.value.categories.filter(h=>e.selectedCategories.includes(h.name)):[]);function f(h,V){const S=[],k=[...h],i=Math.round(h.length/V);for(let s=V;s>1;s--)S.push(k.splice(0,i));return S.push(k),S}const A=_(()=>f(R.value,e.scrollColumnsCount));return(h,V)=>(b(),w(N,null,[l(u)?(b(),j(Me,{key:0,competition:l(u)},null,8,["competition"])):ae("",!0),n("div",Ee,[l(y)==="success"&&l(u)?(b(!0),w(N,{key:0},J(l(A),(S,k)=>(b(),j(Le,{key:"result-col-"+k,class:"px-1.5"},{default:Q(()=>[(b(!0),w(N,null,J(S,i=>(b(),j(l(x),{key:i.id,competition:l(u),category:i,class:"mb-4"},null,8,["competition","category"]))),128))]),_:2},1024))),128)):l(y)==="loading"?(b(),w("div",Ue,"Loading data")):(b(),w("div",He,"Error occured while loading data, try again later"))])],64))}}),ze={class:"overflow-auto shadow-lg border-t-4 bg-white mb-4 rounded-l-lg rounded-t border-header w-full md:w-1/4"},Oe={class:"px-6 py-4 mt-4 mb-8"},je=n("h3",null,"Result table settings",-1),Ne={class:"mb-6"},qe=n("h4",null,"Column number",-1),Ye={class:"flex flex-col items-start mb-2"},Ge=n("label",{for:"scroll-columns-count",class:"hidden block mb-1 mr-2 text-sm font-medium text-gray-900 dark:text-white"},"Column number",-1),Ke=n("h4",null,"(Auto) Scrolling",-1),Je={class:"flex items-center mb-2"},Qe=n("label",{for:"scroll-page",class:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Scroll by page",-1),Xe={class:"flex items-center mb-2"},Ze=n("label",{for:"scroll-row",class:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Scroll by row",-1),et={class:"flex items-center mb-2"},tt=n("label",{for:"scroll-continues",class:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Continues scroll",-1),ot={class:"flex items-center mb-2"},nt=n("label",{for:"scroll-none",class:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Manual scroll",-1),st=n("h4",null,"Scroll speed (time per result line)",-1),lt={class:"flex items-center mb-2"},rt={for:"scroll-speed",class:"block mb-1 mr-2 text-sm font-medium text-gray-900 dark:text-white"},it=n("h4",null,"Table content",-1),at={class:"flex items-center mb-2"},ut=n("label",{for:"unfinished-checkbox",class:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"},"Show unfinished (startlist, running)",-1),ct=n("h5",null,"Displayed classes",-1),dt={class:"flex flex-wrap gap-x-4"},mt=["id","value"],gt=["for"],ft=U({__name:"CompetitionSettings",setup(m){const t=H();return(r,o)=>(b(),w("div",ze,[n("div",Oe,[je,n("form",null,[n("div",Ne,[qe,n("div",Ye,[Ge,B(n("input",{"onUpdate:modelValue":o[0]||(o[0]=e=>l(t).scrollColumnsCount=e),id:"scroll-columns-count",type:"number",min:"1",max:"10",step:"1",class:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"},null,512),[[le,l(t).scrollColumnsCount]])]),Ke,n("div",Je,[B(n("input",{"onUpdate:modelValue":o[1]||(o[1]=e=>l(t).scrollType=e),id:"scroll-page",type:"radio",value:"page",name:"scroll by page",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,512),[[O,l(t).scrollType]]),Qe]),n("div",Xe,[B(n("input",{"onUpdate:modelValue":o[2]||(o[2]=e=>l(t).scrollType=e),id:"scroll-row",type:"radio",value:"row",name:"scroll by row",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,512),[[O,l(t).scrollType]]),Ze]),n("div",et,[B(n("input",{"onUpdate:modelValue":o[3]||(o[3]=e=>l(t).scrollType=e),id:"scroll-continues",type:"radio",value:"continues",name:"scroll continuesly",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,512),[[O,l(t).scrollType]]),tt]),n("div",ot,[B(n("input",{"onUpdate:modelValue":o[4]||(o[4]=e=>l(t).scrollType=e),id:"scroll-none",type:"radio",value:"none",name:"scroll manually",class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,512),[[O,l(t).scrollType]]),nt]),st,n("div",lt,[n("label",rt,q(l(t).readLineTimeSeconds)+"s",1),B(n("input",{"onUpdate:modelValue":o[5]||(o[5]=e=>l(t).readLineTimeSeconds=e),id:"scroll-speed",type:"range",min:"0.1",max:"2",step:"0.1",class:"w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"},null,512),[[le,l(t).readLineTimeSeconds]])]),it,n("div",at,[B(n("input",{id:"unfinished-checkbox",type:"checkbox","onUpdate:modelValue":o[6]||(o[6]=e=>l(t).showUnfinishedAthletes=e),class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,512),[[re,l(t).showUnfinishedAthletes]]),ut]),ct,n("div",dt,[(b(!0),w(N,null,J(l(t).availableCategories,e=>(b(),w("div",{key:e},[B(n("input",{id:`show-category-${e}`,type:"checkbox",value:e,"onUpdate:modelValue":o[7]||(o[7]=c=>l(t).selectedCategories=c),class:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"},null,8,mt),[[re,l(t).selectedCategories]]),n("label",{for:`show-category-${e}`,class:"ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"},q(e),9,gt)]))),128))])])])])]))}}),pt={class:"w-screen h-screen overflow-hidden flex flex-col"},bt=U({__name:"CompetitionView",setup(m){const t=we(),r=_(()=>t.params.competitionId??"1"),o=_(()=>t.params.providerId),e=H();return(c,u)=>(b(),w("div",pt,[K(Ve,{provider:l(o)},{default:Q(()=>[K(We,{"competition-id":l(r)},null,8,["competition-id"])]),_:1},8,["provider"]),l(e).areSettingsDisplayed?(b(),j(ft,{key:0,class:"fixed inset-y-24 right-0 z-3"})):ae("",!0)]))}}),_t=Object.freeze(Object.defineProperty({__proto__:null,default:bt},Symbol.toStringTag,{value:"Module"}));export{_t as C,ht as a,H as u};