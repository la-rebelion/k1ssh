"use strict";(self.webpackChunkk1s_site_docs=self.webpackChunkk1s_site_docs||[]).push([[4583],{9633:(e,t,r)=>{r.d(t,{A:()=>d});var o=r(6540),i=r(1397),n=r(8126),a=r(2972),s=r(5878),l=r(2370),c=r(4848);function d(e){let{divider:t=!0}=e;return o.useEffect((()=>{const e=document.createElement("script");e.src="https://js.hsforms.net/forms/v2.js",document.body.appendChild(e),e.addEventListener("load",(()=>{window.hbspt&&window.hbspt.forms.create({region:"na1",portalId:"21339207",formId:"d78d0dc1-639c-4281-9fcc-32f3d320d96b",target:"#hubspotForm"})}))}),[]),(0,c.jsxs)(c.Fragment,{children:[t&&(0,c.jsx)(i.A,{inset:"none",orientation:"horizontal",sx:{my:2}}),(0,c.jsx)(n.A,{sx:{display:"flex",gap:1,my:2,alignSelf:"stretch",flexBasis:"80%",flexDirection:"column"},children:(0,c.jsxs)(a.A,{spacing:1,children:[(0,c.jsx)("div",{id:"hubspotForm",style:{margin:"auto"}}),(0,c.jsxs)(s.Ay,{fontSize:"xs",textColor:"text.secondary",children:["By continuing you agree to our"," ",(0,c.jsx)(l.A,{color:"neutral",children:(0,c.jsx)("b",{children:"Privacy Policy"})})]})]})})]})}},3989:(e,t,r)=>{r.r(t),r.d(t,{default:()=>ue});var o=r(4164),i=r(4586),n=r(781),a=r(1107);const s={features:"features_t9lD",featureSvg:"featureSvg_GfXr"};var l=r(6540),c=r.t(l,2),d=r(4848);const u=[{title:"KX in 1 second",img:r(3622).A,description:(0,d.jsx)(d.Fragment,{children:"Don't spend hours setting up Kubernetes, you want to get started in seconds. For non-sysadmins, K1s is the easiest way to get started with Kubernetes; a developer-centric Kubernetes eXperience (KX)."})},{title:"Focus on What Matters",img:r(2734).A,description:(0,d.jsx)(d.Fragment,{children:"K1s provides a simple and easy-to-use Kubernetes eXperience (KX) that allows you to focus on what you do best: developing your application; or what you need to do: learning Kubernetes. Automation and resources are on us."})},{title:"Built from Scratch",img:r(1005).A,description:(0,d.jsx)(d.Fragment,{children:"K1s is built from scratch, but powered by the best of breed open-source with a focus on simplicity and ease of use. Break free from the complexity of Kubernetes and DevOps."})}];function p(e){let{title:t,Svg:r,img:i,description:n}=e;return(0,d.jsxs)("div",{className:(0,o.A)("col col--4"),children:[(0,d.jsxs)("div",{className:"text--center",children:[r&&(0,d.jsx)(r,{className:s.featureSvg,role:"img"}),i&&(0,d.jsx)("img",{src:i,alt:t})]}),(0,d.jsxs)("div",{className:"text--center padding-horiz--md",children:[(0,d.jsx)(a.A,{as:"h3",children:t}),(0,d.jsx)("p",{children:n})]})]})}function h(){return(0,d.jsx)("section",{className:s.features,children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row",children:u.map(((e,t)=>(0,d.jsx)(p,{...e},t)))})})})}var m=r(5648),v=r(8587),g=r(8168),x=r(5659),b=r(8992),f=r(3910),A=r(4718);function C(e={}){const{disabled:t=!1,focusableWhenDisabled:r,href:o,rootRef:i,tabIndex:n,to:a,type:s,rootElementName:c}=e,d=l.useRef(),[u,p]=l.useState(!1),{isFocusVisibleRef:h,onFocus:m,onBlur:v,ref:x}=(0,b.A)(),[C,y]=l.useState(!1);t&&!r&&C&&y(!1),l.useEffect((()=>{h.current=C}),[C,h]);const[j,w]=function(e){const{rootElementName:t="",componentName:r}=e,[o,i]=l.useState(t.toUpperCase());return[o,l.useCallback((e=>{var t;i(null!=(t=null==e?void 0:e.tagName)?t:"")}),[])]}({rootElementName:null!=c?c:o||a?"a":void 0,componentName:"Button"}),S=e=>t=>{var r;C&&t.preventDefault(),null==(r=e.onMouseLeave)||r.call(e,t)},k=e=>t=>{var r,o;(d.current||(d.current=t.currentTarget),m(t),!0===h.current)&&(y(!0),null==(o=e.onFocusVisible)||o.call(e,t));null==(r=e.onFocus)||r.call(e,t)},R=()=>{const e=d.current;return"BUTTON"===j||"INPUT"===j&&["button","submit","reset"].includes(null==e?void 0:e.type)||"A"===j&&(null==e?void 0:e.href)},D=e=>r=>{var o;t||(null==(o=e.onClick)||o.call(e,r))},H=e=>r=>{var o;t||(p(!0),document.addEventListener("mouseup",(()=>{p(!1)}),{once:!0})),null==(o=e.onMouseDown)||o.call(e,r)},I=e=>r=>{var o,i;(null==(o=e.onKeyDown)||o.call(e,r),r.defaultMuiPrevented)||(r.target!==r.currentTarget||R()||" "!==r.key||r.preventDefault(),r.target!==r.currentTarget||" "!==r.key||t||p(!0),r.target!==r.currentTarget||R()||"Enter"!==r.key||t||(null==(i=e.onClick)||i.call(e,r),r.preventDefault()))},W=e=>r=>{var o,i;(r.target===r.currentTarget&&p(!1),null==(o=e.onKeyUp)||o.call(e,r),r.target!==r.currentTarget||R()||t||" "!==r.key||r.defaultMuiPrevented)||(null==(i=e.onClick)||i.call(e,r))},N=(0,f.A)(w,i,x,d),z={};void 0!==n&&(z.tabIndex=n),"BUTTON"===j?(z.type=null!=s?s:"button",r?z["aria-disabled"]=t:z.disabled=t):"INPUT"===j?s&&["button","submit","reset"].includes(s)&&(r?z["aria-disabled"]=t:z.disabled=t):""!==j&&(o||a||(z.role="button",z.tabIndex=null!=n?n:0),t&&(z["aria-disabled"]=t,z.tabIndex=r?null!=n?n:0:-1));return{getRootProps:(t={})=>{const r=(0,g.A)({},(0,A.h)(e),(0,A.h)(t)),o=(0,g.A)({type:s},r,z,t,{onBlur:(i=r,e=>{var t;v(e),!1===h.current&&y(!1),null==(t=i.onBlur)||t.call(i,e)}),onClick:D(r),onFocus:k(r),onKeyDown:I(r),onKeyUp:W(r),onMouseDown:H(r),onMouseLeave:S(r),ref:N});var i;return delete o.onFocusVisible,o},focusVisible:C,setFocusVisible:y,active:u,rootRef:N}}var y=r(3967);let j=0;const w=c["useId".toString()];function S(e){if(void 0!==w){const t=w();return null!=e?e:t}return function(e){const[t,r]=l.useState(e),o=e||t;return l.useEffect((()=>{null==t&&(j+=1,r(`mui-${j}`))}),[t]),o}(e)}var k=r(9750),R=r(1785);const D=l.createContext(void 0);function H({children:e,color:t,variant:r}){return(0,d.jsx)(D.Provider,{value:`${r||""}:${t||""}`,children:e})}var I=r(8941);function W(e){return(0,I.SX)("MuiChip",e)}const N=(0,I.WN)("MuiChip",["root","clickable","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","disabled","endDecorator","focusVisible","label","labelSm","labelMd","labelLg","sizeSm","sizeMd","sizeLg","startDecorator","variantPlain","variantSolid","variantSoft","variantOutlined"]);const z=l.createContext({disabled:void 0,variant:void 0,color:void 0});var F=r(8728);const P=["children","className","color","onClick","disabled","size","variant","startDecorator","endDecorator","component","slots","slotProps"],_=(0,R.A)("div",{name:"JoyChip",slot:"Root",overridesResolver:(e,t)=>t.root})((({theme:e,ownerState:t})=>{var r,o,i;const n=null==(r=e.variants[t.variant])?void 0:r[t.color],{borderRadius:a}=(({theme:e,ownerState:t},r)=>{let o={};return t.sx&&(function t(r){"function"==typeof r?t(r(e)):Array.isArray(r)?r.forEach((e=>{"boolean"!=typeof e&&t(e)})):"object"==typeof r&&(o=(0,g.A)({},o,r))}(t.sx),r.forEach((t=>{const r=o[t];var i;"string"==typeof r||"number"==typeof r?"borderRadius"===t?o[t]="number"==typeof r?`${r}px`:(null==(i=e.vars)?void 0:i.radius[r])||r:-1!==["p","padding","m","margin"].indexOf(t)&&"number"==typeof r?o[t]=e.spacing(r):o[t]=r:o[t]="function"==typeof r?r(e):void 0}))),o})({theme:e,ownerState:t},["borderRadius"]);return[(0,g.A)({"--Chip-decoratorChildOffset":"min(calc(var(--Chip-paddingInline) - (var(--_Chip-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Chip-decoratorChildHeight)) / 2), var(--Chip-paddingInline))","--Chip-decoratorChildRadius":"max(var(--_Chip-radius) - var(--variant-borderWidth, 0px) - var(--_Chip-paddingBlock), min(var(--_Chip-paddingBlock) + var(--variant-borderWidth, 0px), var(--_Chip-radius) / 2))","--Chip-deleteRadius":"var(--Chip-decoratorChildRadius)","--Chip-deleteSize":"var(--Chip-decoratorChildHeight)","--Avatar-radius":"var(--Chip-decoratorChildRadius)","--Avatar-size":"var(--Chip-decoratorChildHeight)","--Icon-margin":"initial","--Icon-color":"currentColor","--unstable_actionRadius":"var(--_Chip-radius)"},"sm"===t.size&&{"--Chip-paddingInline":"0.375rem","--Chip-decoratorChildHeight":"calc(var(--_Chip-minHeight) - 2 * var(--variant-borderWidth))","--Icon-fontSize":e.vars.fontSize.sm,"--_Chip-minHeight":"var(--Chip-minHeight, 1.25rem)",gap:"3px"},"md"===t.size&&{"--Chip-paddingInline":"0.5rem","--Chip-decoratorChildHeight":"calc(var(--_Chip-minHeight) - 0.25rem - 2 * var(--variant-borderWidth))","--Icon-fontSize":e.vars.fontSize.md,"--_Chip-minHeight":"var(--Chip-minHeight, 1.5rem)",gap:"0.25rem"},"lg"===t.size&&{"--Chip-paddingInline":"0.75rem","--Chip-decoratorChildHeight":"calc(var(--_Chip-minHeight) - 0.375rem - 2 * var(--variant-borderWidth))","--Icon-fontSize":e.vars.fontSize.lg,"--_Chip-minHeight":"var(--Chip-minHeight, 1.75rem)",gap:"0.375rem"},{"--_Chip-radius":"var(--Chip-radius, 1.5rem)","--_Chip-paddingBlock":"max((var(--_Chip-minHeight) - 2 * var(--variant-borderWidth, 0px) - var(--Chip-decoratorChildHeight)) / 2, 0px)",minHeight:"var(--_Chip-minHeight)",maxWidth:"max-content",paddingInline:"var(--Chip-paddingInline)",borderRadius:"var(--_Chip-radius)",position:"relative",display:"inline-flex",alignItems:"center",justifyContent:"center",whiteSpace:"nowrap",textDecoration:"none",verticalAlign:"middle",boxSizing:"border-box"},e.typography[`body-${{sm:"xs",md:"sm",lg:"md"}[t.size]}`],{fontWeight:e.vars.fontWeight.md,[`&.${N.disabled}`]:{color:null==(o=e.variants[`${t.variant}Disabled`])||null==(o=o[t.color])?void 0:o.color}}),...t.clickable?[{"--variant-borderWidth":"0px",color:null==n?void 0:n.color}]:[(0,g.A)({backgroundColor:e.vars.palette.background.surface},n,{[`&.${N.disabled}`]:null==(i=e.variants[`${t.variant}Disabled`])?void 0:i[t.color]})],void 0!==a&&{"--_Chip-radius":a}]})),$=(0,R.A)("span",{name:"JoyChip",slot:"Label",overridesResolver:(e,t)=>t.label})((({ownerState:e})=>(0,g.A)({display:"inline-block",overflow:"hidden",textOverflow:"ellipsis",order:1,minInlineSize:0,flexGrow:1},e.clickable&&{zIndex:1,pointerEvents:"none"}))),K=(0,R.A)("button",{name:"JoyChip",slot:"Action",overridesResolver:(e,t)=>t.action})((({theme:e,ownerState:t})=>{var r,o,i,n;return[{"--Icon-color":"neutral"!==t.color||"solid"===t.variant?"currentColor":e.vars.palette.text.icon,position:"absolute",zIndex:0,top:0,left:0,bottom:0,right:0,width:"100%",border:"none",cursor:"pointer",padding:"initial",margin:"initial",backgroundColor:"initial",textDecoration:"none",borderRadius:"inherit",[e.focus.selector]:e.focus.default},(0,g.A)({backgroundColor:e.vars.palette.background.surface},null==(r=e.variants[t.variant])?void 0:r[t.color]),{"&:hover":{"@media (hover: hover)":null==(o=e.variants[`${t.variant}Hover`])?void 0:o[t.color]}},{"&:active":null==(i=e.variants[`${t.variant}Active`])?void 0:i[t.color]},{[`&.${N.disabled}`]:null==(n=e.variants[`${t.variant}Disabled`])?void 0:n[t.color]}]})),B=(0,R.A)("span",{name:"JoyChip",slot:"StartDecorator",overridesResolver:(e,t)=>t.startDecorator})({"--Avatar-marginInlineStart":"calc(var(--Chip-decoratorChildOffset) * -1)","--IconButton-margin":"0 calc(-1 * var(--Chip-paddingInline) / 3) 0 calc(var(--Chip-decoratorChildOffset) * -1)","--Icon-margin":"0 0 0 calc(var(--Chip-paddingInline) / -4)",display:"inherit",order:0,zIndex:1,pointerEvents:"none"}),T=(0,R.A)("span",{name:"JoyChip",slot:"EndDecorator",overridesResolver:(e,t)=>t.endDecorator})({"--IconButton-margin":"0 calc(var(--Chip-decoratorChildOffset) * -1) 0 calc(-1 * var(--Chip-paddingInline) / 3)","--Icon-margin":"0 calc(var(--Chip-paddingInline) / -4) 0 0",display:"inherit",order:2,zIndex:1,pointerEvents:"none"}),E=l.forwardRef((function(e,t){const r=(0,k.A)({props:e,name:"JoyChip"}),{children:i,className:n,color:a="neutral",onClick:s,disabled:c=!1,size:u="md",variant:p="soft",startDecorator:h,endDecorator:m,component:b,slots:f={},slotProps:A={}}=r,j=(0,v.A)(r,P),w=!!s||!!A.action,R=(0,g.A)({},r,{disabled:c,size:u,color:a,variant:p,clickable:w,focusVisible:!1}),D="function"==typeof A.action?A.action(R):A.action,I=l.useRef(null),{focusVisible:N,getRootProps:E}=C((0,g.A)({},D,{disabled:c,rootRef:I}));R.focusVisible=N;const M=(e=>{const{disabled:t,size:r,color:o,clickable:i,variant:n,focusVisible:a}=e,s={root:["root",t&&"disabled",o&&`color${(0,y.A)(o)}`,r&&`size${(0,y.A)(r)}`,n&&`variant${(0,y.A)(n)}`,i&&"clickable"],action:["action",t&&"disabled",a&&"focusVisible"],label:["label",r&&`label${(0,y.A)(r)}`],startDecorator:["startDecorator"],endDecorator:["endDecorator"]};return(0,x.A)(s,W,{})})(R),O=(0,g.A)({},j,{component:b,slots:f,slotProps:A}),[V,G]=(0,F.A)("root",{ref:t,className:(0,o.A)(M.root,n),elementType:_,externalForwardedProps:O,ownerState:R}),[J,L]=(0,F.A)("label",{className:M.label,elementType:$,externalForwardedProps:O,ownerState:R}),X=S(L.id),[U,q]=(0,F.A)("action",{className:M.action,elementType:K,externalForwardedProps:O,ownerState:R,getSlotProps:E,additionalProps:{"aria-labelledby":X,as:null==D?void 0:D.component,onClick:s}}),[Q,Y]=(0,F.A)("startDecorator",{className:M.startDecorator,elementType:B,externalForwardedProps:O,ownerState:R}),[Z,ee]=(0,F.A)("endDecorator",{className:M.endDecorator,elementType:T,externalForwardedProps:O,ownerState:R}),te=l.useMemo((()=>({disabled:c})),[c]);return(0,d.jsx)(z.Provider,{value:te,children:(0,d.jsx)(H,{variant:p,color:a,children:(0,d.jsxs)(V,(0,g.A)({},G,{children:[w&&(0,d.jsx)(U,(0,g.A)({},q)),(0,d.jsx)(J,(0,g.A)({},L,{id:X,children:i})),h&&(0,d.jsx)(Q,(0,g.A)({},Y,{children:h})),m&&(0,d.jsx)(Z,(0,g.A)({},ee,{children:m}))]}))})})})),M=E;var O=r(5878);function V(e){return(0,I.SX)("MuiAspectRatio",e)}(0,I.WN)("MuiAspectRatio",["root","content","colorPrimary","colorNeutral","colorDanger","colorSuccess","colorWarning","colorContext","variantPlain","variantOutlined","variantSoft","variantSolid"]);const G=["children","ratio","minHeight","maxHeight","objectFit","color","variant","component","flex","slots","slotProps"],J=(0,R.A)("div",{name:"JoyAspectRatio",slot:"Root",overridesResolver:(e,t)=>t.root})((({ownerState:e,theme:t})=>{const r="number"==typeof e.minHeight?`${e.minHeight}px`:e.minHeight,o="number"==typeof e.maxHeight?`${e.maxHeight}px`:e.maxHeight;return{"--AspectRatio-paddingBottom":`clamp(var(--AspectRatio-minHeight), calc(100% / (${e.ratio})), var(--AspectRatio-maxHeight))`,"--AspectRatio-maxHeight":o||"9999px","--AspectRatio-minHeight":r||"0px","--Icon-color":"neutral"!==e.color||"solid"===e.variant?"currentColor":t.vars.palette.text.icon,borderRadius:"var(--AspectRatio-radius)",display:e.flex?"flex":"block",flex:e.flex?1:"initial",flexDirection:"column",margin:"var(--AspectRatio-margin)"}})),L=(0,R.A)("div",{name:"JoyAspectRatio",slot:"Content",overridesResolver:(e,t)=>t.content})((({theme:e,ownerState:t})=>{var r;return(0,g.A)({flex:1,position:"relative",borderRadius:"inherit",height:0,paddingBottom:"calc(var(--AspectRatio-paddingBottom) - 2 * var(--variant-borderWidth, 0px))",overflow:"hidden",transition:"inherit","& [data-first-child]":{display:"flex",justifyContent:"center",alignItems:"center",boxSizing:"border-box",position:"absolute",width:"100%",height:"100%",objectFit:t.objectFit,margin:0,padding:0,"& > img":{width:"100%",height:"100%",objectFit:t.objectFit}}},e.typography["body-md"],null==(r=e.variants[t.variant])?void 0:r[t.color])})),X=l.forwardRef((function(e,t){const r=(0,k.A)({props:e,name:"JoyAspectRatio"}),{children:o,ratio:i="16 / 9",minHeight:n,maxHeight:a,objectFit:s="cover",color:c="neutral",variant:u="soft",component:p,flex:h=!1,slots:m={},slotProps:b={}}=r,f=(0,v.A)(r,G),A=(0,g.A)({},r,{flex:h,minHeight:n,maxHeight:a,objectFit:s,ratio:i,color:c,variant:u}),C=(e=>{const{variant:t,color:r}=e,o={root:["root"],content:["content",t&&`variant${(0,y.A)(t)}`,r&&`color${(0,y.A)(r)}`]};return(0,x.A)(o,V,{})})(A),j=(0,g.A)({},f,{component:p,slots:m,slotProps:b}),[w,S]=(0,F.A)("root",{ref:t,className:C.root,elementType:J,externalForwardedProps:j,ownerState:A}),[R,D]=(0,F.A)("content",{className:C.content,elementType:L,externalForwardedProps:j,ownerState:A});return(0,d.jsx)(w,(0,g.A)({},S,{children:(0,d.jsx)(R,(0,g.A)({},D,{children:l.Children.map(o,((e,t)=>0===t&&l.isValidElement(e)?l.cloneElement(e,{"data-first-child":""}):e))}))}))}));var U=r(8126),q=r(1609),Q=r(1988),Y=r(1825),Z=r(4814);const ee=["className","component","disableGutters","fixed","maxWidth","classes"],te=(0,Z.A)(),re=(0,Y.A)("div",{name:"MuiContainer",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`maxWidth${(0,y.A)(String(r.maxWidth))}`],r.fixed&&t.fixed,r.disableGutters&&t.disableGutters]}}),oe=e=>(0,Q.A)({props:e,name:"MuiContainer",defaultTheme:te});const ie=function(e={}){const{createStyledComponent:t=re,useThemeProps:r=oe,componentName:i="MuiContainer"}=e,n=t((({theme:e,ownerState:t})=>(0,g.A)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!t.disableGutters&&{paddingLeft:e.spacing(2),paddingRight:e.spacing(2),[e.breakpoints.up("sm")]:{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}})),(({theme:e,ownerState:t})=>t.fixed&&Object.keys(e.breakpoints.values).reduce(((t,r)=>{const o=r,i=e.breakpoints.values[o];return 0!==i&&(t[e.breakpoints.up(o)]={maxWidth:`${i}${e.breakpoints.unit}`}),t}),{})),(({theme:e,ownerState:t})=>(0,g.A)({},"xs"===t.maxWidth&&{[e.breakpoints.up("xs")]:{maxWidth:Math.max(e.breakpoints.values.xs,444)}},t.maxWidth&&"xs"!==t.maxWidth&&{[e.breakpoints.up(t.maxWidth)]:{maxWidth:`${e.breakpoints.values[t.maxWidth]}${e.breakpoints.unit}`}}))),a=l.forwardRef((function(e,t){const a=r(e),{className:s,component:l="div",disableGutters:c=!1,fixed:u=!1,maxWidth:p="lg"}=a,h=(0,v.A)(a,ee),m=(0,g.A)({},a,{component:l,disableGutters:c,fixed:u,maxWidth:p}),b=((e,t)=>{const{classes:r,fixed:o,disableGutters:i,maxWidth:n}=e,a={root:["root",n&&`maxWidth${(0,y.A)(String(n))}`,o&&"fixed",i&&"disableGutters"]};return(0,x.A)(a,(e=>(0,q.Ay)(t,e)),r)})(m,i);return(0,d.jsx)(n,(0,g.A)({as:l,ownerState:m,className:(0,o.A)(b.root,s),ref:t},h))}));return a}({createStyledComponent:(0,R.A)("div",{name:"JoyContainer",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,k.A)({props:e,name:"JoyContainer"})}),ne=ie;var ae=r(4812);function se(e){let{children:t,reversed:r,image:o="img/k1s-logo-new.png"}=e;return(0,d.jsxs)(ne,{sx:e=>({position:"relative",minHeight:"auto",display:"flex",flexDirection:r?"column-reverse":"column",alignItems:"center",py:10,gap:4,[e.breakpoints.up(834)]:{flexDirection:"row",gap:6},[e.breakpoints.up(1199)]:{gap:12}}),children:[(0,d.jsx)(U.A,{sx:e=>({display:"flex",flexDirection:"column",alignItems:"center",gap:"1rem",maxWidth:"50ch",textAlign:"center",flexShrink:999,[e.breakpoints.up(834)]:{minWidth:420,alignItems:"flex-start",textAlign:"initial"},[`& .${ae.A.root}`]:{textWrap:"balance"}}),children:t}),(0,d.jsx)(X,{ratio:1,variant:"outlined",maxHeight:300,sx:e=>({minWidth:300,alignSelf:"stretch",[e.breakpoints.up(834)]:{alignSelf:"initial",flexGrow:1,"--AspectRatio-maxHeight":"600px","--AspectRatio-minHeight":"600px"},borderRadius:"sm",bgcolor:"background.level2",flexBasis:"50%"}),children:(0,d.jsx)("img",{src:o,alt:"",style:{objectFit:"cover",width:"100%",height:"100%"}})})]})}var le=r(9633);function ce(){return(0,d.jsxs)(se,{reversed:!0,children:[(0,d.jsx)(M,{size:"lg",variant:"outlined",color:"neutral",children:"Kubernetes and DevOps the easy way"}),(0,d.jsx)(O.Ay,{level:"h1",fontWeight:"xl",fontSize:"clamp(1.875rem, 1.3636rem + 2.1818vw, 2rem)",textColor:"neutral.mainChannel",children:"Easy-to-navigate space for Kubernetes and DevOps"}),(0,d.jsx)(O.Ay,{fontSize:"lg",textColor:"neutral.mainChannel",lineHeight:"lg",children:"In K1s, we believe that Kubernetes and DevOps should be easy. K1s is in a mission to make them easy for everyone. We provide a set of tools and services that help you navigate the Kubernetes and DevOps landscape. We help you to learn, build, and optimize your Kubernetes and DevOps journey."}),(0,d.jsx)(le.A,{divider:!1})]})}function de(){const{siteConfig:e}=(0,i.A)();return(0,d.jsx)("header",{className:(0,o.A)("hero",m.A.heroBanner),children:(0,d.jsxs)("div",{className:"container",children:[(0,d.jsx)(a.A,{as:"h1",className:"hero__title",children:e.title}),(0,d.jsx)("p",{className:"hero__subtitle",children:e.tagline}),(0,d.jsx)(ce,{})]})})}function ue(){const{siteConfig:e}=(0,i.A)();return(0,d.jsxs)(n.A,{title:`${e.title} - Home`,description:e.tagline,children:[(0,d.jsx)(de,{}),(0,d.jsx)("main",{children:(0,d.jsx)(U.A,{id:"text-content",sx:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",gap:"20px",p:"20px",width:"100%",maxWidth:"1200px",margin:"0 auto",color:"inherit"},children:(0,d.jsx)(h,{})},"text-content")})]})}},5648:(e,t,r)=>{r.d(t,{A:()=>o});const o={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN"}},1005:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/DevOps-Hero-banner-9388284ec5c669e0fededf385bbef850.png"},2734:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/air-gap-sphere-banner-66519d45bcb18764778b442017e510d4.jpg"},3622:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/k1s-kubernetes-in-one-second-d0cb04851ec4946ea66904501273d3d9.jpg"}}]);