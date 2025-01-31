"use strict";(self.webpackChunkk1s_site_docs=self.webpackChunkk1s_site_docs||[]).push([[2577],{3471:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>u,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"k1s-serverless/your-kubernetes-cluster/api-requests/cluster-resources/namespaces","title":"Namespaces","description":"Namespaces play a crucial role in organizing and managing resources within a Kubernetes cluster.","source":"@site/docs/k1s-serverless/your-kubernetes-cluster/api-requests/cluster-resources/namespaces.mdx","sourceDirName":"k1s-serverless/your-kubernetes-cluster/api-requests/cluster-resources","slug":"/k1s-serverless/your-kubernetes-cluster/api-requests/cluster-resources/namespaces","permalink":"/docs/k1s-serverless/your-kubernetes-cluster/api-requests/cluster-resources/namespaces","draft":false,"unlisted":false,"tags":[{"inline":true,"label":"apiVersion: v1","permalink":"/docs/tags/api-version-v-1"},{"inline":true,"label":"group: core","permalink":"/docs/tags/group-core"}],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"sidebar_label":"Namespaces","description":"Namespaces play a crucial role in organizing and managing resources within a Kubernetes cluster.","title":"Namespaces","tags":["apiVersion: v1","group: core"],"categories":["Cluster Resources"],"preview":"/img/k8s-resources/namespaces.png","keywords":["Namespaces","Kubernetes"]},"sidebar":"tutorialSidebar","previous":{"title":"Cluster Resources","permalink":"/docs/category/cluster-resources"},"next":{"title":"Kubernetes Best Practices","permalink":"/docs/category/kubernetes-best-practices"}}');var a=r(4848),t=r(8453),o=r(1470),i=r(9365);const l={sidebar_position:1,sidebar_label:"Namespaces",description:"Namespaces play a crucial role in organizing and managing resources within a Kubernetes cluster.",title:"Namespaces",tags:["apiVersion: v1","group: core"],categories:["Cluster Resources"],preview:"/img/k8s-resources/namespaces.png",keywords:["Namespaces","Kubernetes"]},c=void 0,u={},d=[];function p(e){const s={a:"a",code:"code",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:n}=s;return n||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n,{children:[(0,a.jsxs)("summary",{children:[(0,a.jsx)("b",{children:"Namespaces"})," are a fundamental feature of Kubernetes that provide a way to logically partition and isolate resources within a cluster."]}),(0,a.jsx)(s.p,{children:"Namespaces serve as a virtual cluster within a physical Kubernetes cluster, allowing different teams, projects, or applications to coexist and operate independently."}),(0,a.jsxs)(s.p,{children:["In the context of Kubernetes deployments, namespaces play a crucial role in organizing and managing resources. They provide a scope for naming resources, such as ",(0,a.jsx)(s.a,{href:"../workload-resources/pods",children:"pods"}),", services, replica sets, and more. By using namespaces, you can avoid naming conflicts and ensure that resources are uniquely identified within their respective namespace."]}),(0,a.jsx)(s.p,{children:"Namespaces offer several benefits. Firstly, they enable better resource management by providing resource quotas and limits at the namespace level. This allows you to allocate specific amounts of CPU, memory, and storage to different namespaces based on their requirements, ensuring fair sharing of resources across different teams or applications."}),(0,a.jsx)(s.p,{children:"Secondly, namespaces facilitate logical isolation and access control. You can assign different levels of access and permissions to different namespaces, ensuring that teams or individuals can only interact with resources within their assigned namespace. This helps maintain security and separation of concerns within a multi-tenant cluster environment."}),(0,a.jsx)(s.p,{children:"Furthermore, namespaces provide a way to organize and categorize resources, making it easier to understand and navigate the overall cluster state. By grouping related resources into namespaces, you can easily identify and manage components that belong to a particular project, environment, or application."}),(0,a.jsx)(s.p,{children:"Overall, namespaces are an essential component of Kubernetes deployments. They provide a powerful mechanism for resource organization, isolation, and access control within a cluster. By leveraging namespaces effectively, you can achieve better resource management, enhance security, and simplify the management of complex deployments in a Kubernetes environment."}),(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"namespaces",src:r(1276).A+"",width:"1007",height:"1028"})}),(0,a.jsx)(s.p,{children:"In the diagram it is represented a Kubernetes cluster with one namespace, within the namespace, it is depicted some of the different types of resources as components."}),(0,a.jsxs)(s.p,{children:["In the example, we have one package/namespace called ",(0,a.jsx)(s.code,{children:"backend"})," representing a namespace where deployments and StatefulSets. Within the components, we illustrate ",(0,a.jsx)(s.a,{href:"../workload-resources/pods",children:"pods"})," representing the individual instances of running processes within a namespace. We are connecting the ",(0,a.jsx)(s.a,{href:"../workload-resources/pods",children:"pods"})," to their respective services using appropriate arrows or lines and the ingress connectiong these services."]}),(0,a.jsx)(s.p,{children:"To represent quotas, we include it as a JSON annotations attached to the namespace to indicate the quotas assigned to each namespace."})]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(i.A,{value:"k1s",label:"kubectl",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-k1s",children:"kubectl get namespaces --server=https://api.k1s.me/kubernetes\n"})})}),(0,a.jsx)(i.A,{value:"cr",label:"curl",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-cr",children:"curl https://api.k1s.me/kubernetes/api/v1/namespaces\n"})})}),(0,a.jsx)(i.A,{value:"ht",label:"Httpie",children:(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-ht",children:"https api.k1s.me/kubernetes/api/v1/namespaces\n"})})})]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsxs)(i.A,{value:"js",label:"JavaScript",children:[(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-js",children:"// index.js\r\nconst https = require('https');\r\n\r\nconst options = {\r\n  hostname: 'api.k1s.me',\r\n  port: 443,\r\n  path: '/kubernetes/api/v1/namespaces',\r\n  method: 'GET'\r\n};\r\n\r\nconst req = https.request(options, res => {\r\n  console.log(`statusCode: ${res.statusCode}`);\r\n\r\n  res.on('data', d => {\r\n    process.stdout.write(d);\r\n  });\r\n});\r\n\r\nreq.on('error', error => {\r\n  console.error(error);\r\n});\r\n\r\nreq.end();\n"})}),(0,a.jsx)(s.p,{children:(0,a.jsxs)(s.strong,{children:["Execute code above assuming the file is named ",(0,a.jsx)(s.code,{children:"index.js"}),"?"]})}),(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["Install Node.js from ",(0,a.jsx)(s.a,{href:"https://nodejs.org/en/download/",children:"https://nodejs.org/en/download/"})]}),"\n",(0,a.jsxs)(s.li,{children:["Open a terminal and run ",(0,a.jsx)(s.code,{children:"node index.js"})]}),"\n",(0,a.jsxs)(s.li,{children:["The output should be similar to the following:\r\n",(0,a.jsx)(s.code,{children:"statusCode: 200"})]}),"\n"]})]}),(0,a.jsxs)(i.A,{value:"py",label:"Python",children:[(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-py",children:'# k1s-namespaces.py\r\nimport requests\r\n\r\nurl = "https://api.k1s.me/kubernetes/api/v1/namespaces"\r\npayload={}\r\nheaders = {}\r\nresponse = requests.request("GET", url, headers=headers, data=payload)\r\n\r\nprint(response.text)\n'})}),(0,a.jsx)(s.p,{children:(0,a.jsxs)(s.strong,{children:["Execute code above assuming the file is named ",(0,a.jsx)(s.code,{children:"k1s-namespaces.py"}),"?"]})}),(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["Install Python from ",(0,a.jsx)(s.a,{href:"https://www.python.org/downloads/",children:"https://www.python.org/downloads/"})]}),"\n",(0,a.jsxs)(s.li,{children:["Open a terminal and run ",(0,a.jsx)(s.code,{children:"python k1s-namespaces.py"})]}),"\n",(0,a.jsxs)(s.li,{children:["The output should be similar to the following:\r\n",(0,a.jsx)(s.code,{children:"statusCode: 200"})]}),"\n"]})]}),(0,a.jsxs)(i.A,{value:"java",label:"Java",children:[(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-java",children:'// K1sNamespaces.java\r\nimport okhttp3.OkHttpClient;\r\nimport okhttp3.Request;\r\nimport okhttp3.Response;\r\n\r\nimport java.io.IOException;\r\n\r\npublic class K1sNamespaces {\r\n    public static void main(String[] args) throws IOException {\r\n        OkHttpClient client = new OkHttpClient().newBuilder()\r\n                .build();\r\n        Request request = new Request.Builder()\r\n                .url("https://api.k1s.me/kubernetes/api/v1/namespaces")\r\n                .method("GET", null)\r\n                .build();\r\n        Response response = client.newCall(request).execute();\r\n    }\r\n}\n'})}),(0,a.jsx)(s.p,{children:(0,a.jsxs)(s.strong,{children:["Execute this code above assuming the file is named ",(0,a.jsx)(s.code,{children:"K1sNamespaces.java"}),"?"]})}),(0,a.jsxs)(s.ol,{children:["\n",(0,a.jsxs)(s.li,{children:["Install Java from ",(0,a.jsx)(s.a,{href:"https://www.oracle.com/java/technologies/javase-downloads.html",children:"https://www.oracle.com/java/technologies/javase-downloads.html"})]}),"\n",(0,a.jsxs)(s.li,{children:["Download the OkHttp library from ",(0,a.jsx)(s.a,{href:"https://square.github.io/okhttp/",children:"https://square.github.io/okhttp/"})," or mavencentral"]}),"\n",(0,a.jsxs)(s.li,{children:["Open a terminal and run ",(0,a.jsx)(s.code,{children:"javac K1sNamespaces.java"})]}),"\n",(0,a.jsxs)(s.li,{children:["Run ",(0,a.jsx)(s.code,{children:"java K1sNamespaces"})]}),"\n",(0,a.jsxs)(s.li,{children:["The output should be similar to the following:\r\n",(0,a.jsx)(s.code,{children:"statusCode: 200"})]}),"\n"]}),(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-sh",children:"$ curl -k https://repo1.maven.org/maven2/com/squareup/okhttp3/okhttp/4.11.0/okhttp-4.11.0.jar -o okhttp-4.11.0.jar\r\n$ javac -cp okhttp-4.11.0.jar:. K1sNamespaces.java\r\n$ java -cp okhttp-4.11.0.jar:. K1sNamespaces\n"})})]})]}),"\n",(0,a.jsx)(s.hr,{}),"\n",(0,a.jsx)(s.p,{children:"References:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"https://httpie.io/docs/cli",children:"httpie"})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},9365:(e,s,r)=>{r.d(s,{A:()=>o});r(6540);var n=r(4164);const a={tabItem:"tabItem_Ymn6"};var t=r(4848);function o(e){let{children:s,hidden:r,className:o}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,n.A)(a.tabItem,o),hidden:r,children:s})}},1470:(e,s,r)=>{r.d(s,{A:()=>w});var n=r(6540),a=r(4164),t=r(3104),o=r(6347),i=r(205),l=r(7485),c=r(1682),u=r(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:s,children:r}=e;return(0,n.useMemo)((()=>{const e=s??function(e){return d(e).map((e=>{let{props:{value:s,label:r,attributes:n,default:a}}=e;return{value:s,label:r,attributes:n,default:a}}))}(r);return function(e){const s=(0,c.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,r])}function h(e){let{value:s,tabValues:r}=e;return r.some((e=>e.value===s))}function m(e){let{queryString:s=!1,groupId:r}=e;const a=(0,o.W6)(),t=function(e){let{queryString:s=!1,groupId:r}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:s,groupId:r});return[(0,l.aZ)(t),(0,n.useCallback)((e=>{if(!t)return;const s=new URLSearchParams(a.location.search);s.set(t,e),a.replace({...a.location,search:s.toString()})}),[t,a])]}function g(e){const{defaultValue:s,queryString:r=!1,groupId:a}=e,t=p(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:s,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!h({value:s,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:s,tabValues:t}))),[c,d]=m({queryString:r,groupId:a}),[g,f]=function(e){let{groupId:s}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(s),[a,t]=(0,u.Dv)(r);return[a,(0,n.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:a}),b=(()=>{const e=c??g;return h({value:e,tabValues:t})?e:null})();(0,i.A)((()=>{b&&l(b)}),[b]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,t]),tabValues:t}}var f=r(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(4848);function j(e){let{className:s,block:r,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,t.a_)(),u=e=>{const s=e.currentTarget,r=l.indexOf(s),a=i[r].value;a!==n&&(c(s),o(a))},d=e=>{let s=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;s=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;s=l[r]??l[l.length-1];break}}s?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},s),children:i.map((e=>{let{value:s,label:r,attributes:t}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===s?0:-1,"aria-selected":n===s,ref:e=>l.push(e),onKeyDown:d,onClick:u,...t,className:(0,a.A)("tabs__item",b.tabItem,t?.className,{"tabs__item--active":n===s}),children:r??s},s)}))})}function x(e){let{lazy:s,children:r,selectedValue:t}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(s){const e=o.find((e=>e.props.value===t));return e?(0,n.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:o.map(((e,s)=>(0,n.cloneElement)(e,{key:s,hidden:e.props.value!==t})))})}function y(e){const s=g(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,v.jsx)(j,{...s,...e}),(0,v.jsx)(x,{...s,...e})]})}function w(e){const s=(0,f.A)();return(0,v.jsx)(y,{...e,children:d(e.children)},String(s))}},1276:(e,s,r)=>{r.d(s,{A:()=>n});const n=r.p+"assets/images/namespaces-ee7403d1e9bd6c57e852f8dc603c9760.png"},8453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>i});var n=r(6540);const a={},t=n.createContext(a);function o(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);