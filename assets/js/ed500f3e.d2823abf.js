"use strict";(self.webpackChunkk1s_site_docs=self.webpackChunkk1s_site_docs||[]).push([[5161],{2674:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"qbot/developers/index","title":"QBot SDK","description":"The QBot SDK is a set of libraries that provide seamless interaction with Kubernetes, Helm, Kustomize, and other cloud-native tools. It acts as the core engine powering K1s QBot, much like Kubernetes\' kubelet, enabling both CLI-based and programmatic control over Kubernetes resources.","source":"@site/docs/qbot/developers/index.md","sourceDirName":"qbot/developers","slug":"/qbot/developers/","permalink":"/docs/qbot/developers/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_label":"For Developers","sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"QBot, smart Kubepilot","permalink":"/docs/qbot/"},"next":{"title":"For DevOps","permalink":"/docs/qbot/devops/"}}');var r=o(4848),s=o(8453),a=o(1470),i=o(9365);const l={sidebar_label:"For Developers",sidebar_position:2},c="QBot SDK",d={},u=[{value:"Create an AI Tool and Components Overview",id:"create-an-ai-tool-and-components-overview",level:2},{value:"Components Model Description",id:"components-model-description",level:2},{value:"How QBot SDK Works",id:"how-qbot-sdk-works",level:2},{value:"QBot AI Agent Extensions (a.k.a. AI Tools)",id:"qbot-ai-agent-extensions-aka-ai-tools",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"qbot-sdk",children:"QBot SDK"})}),"\n",(0,r.jsx)(t.p,{children:"The QBot SDK is a set of libraries that provide seamless interaction with Kubernetes, Helm, Kustomize, and other cloud-native tools. It acts as the core engine powering K1s QBot, much like Kubernetes' kubelet, enabling both CLI-based and programmatic control over Kubernetes resources."}),"\n",(0,r.jsx)(t.h2,{id:"create-an-ai-tool-and-components-overview",children:"Create an AI Tool and Components Overview"}),"\n",(0,r.jsx)(t.p,{children:"Click on the tabs below to learn more about the QBot SDK components: \ud83d\udc47\ud83c\udffb"}),"\n",(0,r.jsxs)(a.A,{children:[(0,r.jsxs)(i.A,{value:"video",label:"Create a Tool",children:[(0,r.jsxs)(t.p,{children:["Below is a video that shows how to create a tool for the QBot AI Agent. The video demonstrates how to create a MCP tool that can be used to interact with the QBot Engine and perform actions on the Kubernetes cluster. You can learn more about creating tools for the QBot AI Agent by visiting the ",(0,r.jsx)(t.a,{href:"https://agentico.dev/docs/quickstart/create-a-server",children:"Agentico documentation"}),"."]}),(0,r.jsx)("iframe",{width:"100%",style:{"aspect-ratio":"16 / 9"},src:"https://www.youtube.com/embed/DIl3gVmvf0o",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope",referrerpolicy:"strict-origin-when-cross-origin",allowfullscreen:!0})]}),(0,r.jsx)(i.A,{value:"components-overview",label:"QBot Components Overview",children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://cdn.statically.io/img/cdn.rebelion.la/img/qbot/qbot-components-overview.png",alt:"QBot Components"})})}),(0,r.jsx)(i.A,{value:"components-details",label:"QBot Components details",children:(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{src:"https://cdn.statically.io/img/cdn.rebelion.la/img/qbot/qbot-components.png",alt:"QBot Components Diagram"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"components-model-description",children:"Components Model Description"}),"\n",(0,r.jsx)(t.p,{children:"The QBot is composed of the following components:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The ",(0,r.jsxs)(t.strong,{children:["QBot ",(0,r.jsx)(t.code,{children:"Engine"})]}),": The main engine that processes the requests and executes the ",(0,r.jsx)(t.code,{children:"tasks"})," through one or more ",(0,r.jsx)(t.code,{children:"tools"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["The QBot ",(0,r.jsx)(t.code,{children:"Tools"}),": ",(0,r.jsx)(t.a,{href:"https://agentico.dev/tools",children:"AI Tools"})," allow LLMs to interact with the QBot Engine, see tools as the APIs for LLMs. The QBot can use multiple ",(0,r.jsx)(t.code,{children:"tools"})," to process a single ",(0,r.jsx)(t.code,{children:"task"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"Tasks"}),': The tasks are acions implemented by tools that the QBot can perform. For example, the QBot can detect the "drift configuration" of an ',(0,r.jsx)(t.code,{children:"application"}),', or can perform a "root cause analysis" of a problem. By executing the ',(0,r.jsx)(t.code,{children:"drift_detection"})," tool that will perform the actions needed. A ",(0,r.jsx)(t.code,{children:"task"})," can be composed of multiple ",(0,r.jsx)(t.code,{children:"tools"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Both, the CLI and the QBot Engine, interact with the QBot SDK to perform the actions. The QBot SDK is a set of libraries that encapsulate the logic to interact with the Kubernetes API, Helm, Kustomize, etc."}),"\n",(0,r.jsxs)(t.p,{children:["In an analogy with Kubernetes applications, the QBot Engine is the ",(0,r.jsx)(t.code,{children:"kubelet"}),", the QBot Tools are the ",(0,r.jsx)(t.code,{children:"pods"}),", the QBot tasks are the ",(0,r.jsx)(t.code,{children:"deployments"}),", and the QBot CLI is the ",(0,r.jsx)(t.code,{children:"kubectl"}),", leveraging MCP (Model Context Protocol) to interact with LLMs, MCP would be the ",(0,r.jsx)(t.code,{children:"kube-api-server"})," API. QBot is a ",(0,r.jsx)(t.code,{children:"kubelet"})," for LLMs."]}),"\n",(0,r.jsxs)(t.p,{children:['At "',(0,r.jsx)(t.a,{href:"https://rebelion.la/",children:"La Rebelion"}),'" we consider that MCP (Model Context Protocol) is the best way to interact with LLMs, so the QBot API is a group of ',(0,r.jsx)(t.a,{href:"https://agentico.com/tools",children:"MCP Tools"})," that can be used by LLMs to interact with the QBot Engine. The MCP server can expose the MCP API over HTTP, or ",(0,r.jsx)(t.code,{children:"stdin"})," - for CLI, ",(0,r.jsx)(t.strong,{children:"important in airgapped environments"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"how-qbot-sdk-works",children:"How QBot SDK Works"}),"\n",(0,r.jsx)(t.p,{children:"K1s has implemented two main components to interact with the QBot SDK:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"../devops/qbclt-cli/",children:"QBot CLI"})})," \u2013 A command-line interface that allows DevOps practitioners to interact with Kubernetes applications using the QBot SDK."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"../devops/agentic-ai/",children:"QBot AI Agent"})})," \u2013 A service that leverages Large Language Models (LLMs) to perform actions on the Kubernetes cluster intelligently."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Both components communicate with the QBot SDK to execute tasks efficiently, helping you streamline Kubernetes management with AI-driven automation."}),"\n",(0,r.jsx)(t.h2,{id:"qbot-ai-agent-extensions-aka-ai-tools",children:"QBot AI Agent Extensions (a.k.a. AI Tools)"}),"\n",(0,r.jsxs)(t.p,{children:["The QBot AI Agent Extensions, also known as AI Tools, are a set of tools that Large Language Models (LLMs) can leverage to perform actions on the Kubernetes cluster intelligently. These tools are designed to help developers and DevOps practitioners quickly scaffold new microservices, tools, and utilities. Even though the K1s has a set of tools, the QBot AI Agent Extensions can be extended to include more tools and utilities. Use the ",(0,r.jsxs)(t.a,{href:"https://agentico.dev/docs/quickstart/create-a-server",children:["Agentico ",(0,r.jsx)(t.code,{children:"mcp-create-tool"})]})," command to create your own AI Tool and extend the QBot AI Agent. Check the video below to learn more about how to create an AI Tool for the QBot AI Agent."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},9365:(e,t,o)=>{o.d(t,{A:()=>a});o(6540);var n=o(4164);const r={tabItem:"tabItem_Ymn6"};var s=o(4848);function a(e){let{children:t,hidden:o,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.A)(r.tabItem,a),hidden:o,children:t})}},1470:(e,t,o)=>{o.d(t,{A:()=>A});var n=o(6540),r=o(4164),s=o(3104),a=o(6347),i=o(205),l=o(7485),c=o(1682),d=o(679);function u(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:o}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:o,attributes:n,default:r}}=e;return{value:t,label:o,attributes:n,default:r}}))}(o);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,o])}function p(e){let{value:t,tabValues:o}=e;return o.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:o}=e;const r=(0,a.W6)(),s=function(e){let{queryString:t=!1,groupId:o}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!o)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return o??null}({queryString:t,groupId:o});return[(0,l.aZ)(s),(0,n.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(r.location.search);t.set(s,e),r.replace({...r.location,search:t.toString()})}),[s,r])]}function b(e){const{defaultValue:t,queryString:o=!1,groupId:r}=e,s=h(e),[a,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:o}=e;if(0===o.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:o}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${o.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=o.find((e=>e.default))??o[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[c,u]=m({queryString:o,groupId:r}),[b,f]=function(e){let{groupId:t}=e;const o=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,s]=(0,d.Dv)(o);return[r,(0,n.useCallback)((e=>{o&&s.set(e)}),[o,s])]}({groupId:r}),v=(()=>{const e=c??b;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:a,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,s]),tabValues:s}}var f=o(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=o(4848);function x(e){let{className:t,block:o,selectedValue:n,selectValue:a,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),d=e=>{const t=e.currentTarget,o=l.indexOf(t),r=i[o].value;r!==n&&(c(t),a(r))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const o=l.indexOf(e.currentTarget)+1;t=l[o]??l[0];break}case"ArrowLeft":{const o=l.indexOf(e.currentTarget)-1;t=l[o]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":o},t),children:i.map((e=>{let{value:t,label:o,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,r.A)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":n===t}),children:o??t},t)}))})}function w(e){let{lazy:t,children:o,selectedValue:s}=e;const a=(Array.isArray(o)?o:[o]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:(0,r.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,r.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...t,...e}),(0,g.jsx)(w,{...t,...e})]})}function A(e){const t=(0,f.A)();return(0,g.jsx)(j,{...e,children:u(e.children)},String(t))}},8453:(e,t,o)=>{o.d(t,{R:()=>a,x:()=>i});var n=o(6540);const r={},s=n.createContext(r);function a(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);