(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,18566,(e,t,r)=>{t.exports=e.r(76562)},95057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={formatUrl:function(){return s},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var a in i)Object.defineProperty(r,a,{enumerable:!0,get:i[a]});let n=e.r(90809)._(e.r(98183)),o=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,i=e.protocol||"",a=e.pathname||"",s=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let d=e.search||l&&`?${l}`||"";return i&&!i.endsWith(":")&&(i+=":"),e.slashes||(!i||o.test(i))&&!1!==c?(c="//"+(c||""),a&&"/"!==a[0]&&(a="/"+a)):c||(c=""),s&&"#"!==s[0]&&(s="#"+s),d&&"?"!==d[0]&&(d="?"+d),a=a.replace(/[?#]/g,encodeURIComponent),d=d.replace("#","%23"),`${i}${c}${a}${d}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return s(e)}},18581,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return a}});let i=e.r(71645);function a(e,t){let r=(0,i.useRef)(null),a=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=r.current;e&&(r.current=null,e());let t=a.current;t&&(a.current=null,t())}else e&&(r.current=n(e,i)),t&&(a.current=n(t,i))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},73668,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return n}});let i=e.r(18967),a=e.r(52817);function n(e){if(!(0,i.isAbsoluteUrl)(e))return!0;try{let t=(0,i.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,a.hasBasePath)(r.pathname)}catch(e){return!1}}},84508,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return i}});let i=e=>{}},22016,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return y},useLinkStatus:function(){return v}};for(var a in i)Object.defineProperty(r,a,{enumerable:!0,get:i[a]});let n=e.r(90809),o=e.r(43476),s=n._(e.r(71645)),l=e.r(95057),c=e.r(8372),d=e.r(18581),u=e.r(18967),m=e.r(5550);e.r(33525);let h=e.r(88540),p=e.r(91949),f=e.r(73668),g=e.r(9396);function y(t){var r,i;let a,n,y,[v,x]=(0,s.useOptimistic)(p.IDLE_LINK_STATUS),w=(0,s.useRef)(null),{href:k,as:S,children:j,prefetch:C=null,passHref:T,replace:A,shallow:N,scroll:_,onClick:R,onMouseEnter:P,onTouchStart:O,legacyBehavior:D=!1,onNavigate:L,transitionTypes:$,ref:E,unstable_dynamicOnHover:M,...I}=t;a=j,D&&("string"==typeof a||"number"==typeof a)&&(a=(0,o.jsx)("a",{children:a}));let z=s.default.useContext(c.AppRouterContext),B=!1!==C,H=!1!==C?null===(i=C)||"auto"===i?g.FetchStrategy.PPR:g.FetchStrategy.Full:g.FetchStrategy.PPR,G="string"==typeof(r=S||k)?r:(0,l.formatUrl)(r);if(D){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=s.default.Children.only(a)}let W=D?n&&"object"==typeof n&&n.ref:E,F=s.default.useCallback(e=>(null!==z&&(w.current=(0,p.mountLinkInstance)(e,G,z,H,B,x)),()=>{w.current&&((0,p.unmountLinkForCurrentNavigation)(w.current),w.current=null),(0,p.unmountPrefetchableInstance)(e)}),[B,G,z,H,x]),U={ref:(0,d.useMergedRef)(F,W),onClick(t){D||"function"!=typeof R||R(t),D&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!z||t.defaultPrevented||function(t,r,i,a,n,o,l){if("u">typeof window){let c,{nodeName:d}=t.currentTarget;if("A"===d.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,f.isLocalURL)(r)){a&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),o){let e=!1;if(o({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(99781);s.default.startTransition(()=>{u(r,a?"replace":"push",!1===n?h.ScrollBehavior.NoScroll:h.ScrollBehavior.Default,i.current,l)})}}(t,G,w,A,_,L,$)},onMouseEnter(e){D||"function"!=typeof P||P(e),D&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),z&&B&&(0,p.onNavigationIntent)(e.currentTarget,!0===M)},onTouchStart:function(e){D||"function"!=typeof O||O(e),D&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),z&&B&&(0,p.onNavigationIntent)(e.currentTarget,!0===M)}};return(0,u.isAbsoluteUrl)(G)?U.href=G:D&&!T&&("a"!==n.type||"href"in n.props)||(U.href=(0,m.addBasePath)(G)),y=D?s.default.cloneElement(n,U):(0,o.jsx)("a",{...I,...U,children:a}),(0,o.jsx)(b.Provider,{value:v,children:y})}e.r(84508);let b=(0,s.createContext)(p.IDLE_LINK_STATUS),v=()=>(0,s.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},75254,e=>{"use strict";var t=e.i(71645);let r=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim(),i=e=>{let t=e.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,t,r)=>r?r.toUpperCase():t.toLowerCase());return t.charAt(0).toUpperCase()+t.slice(1)};var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,t.forwardRef)(({color:e="currentColor",size:i=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:s="",children:l,iconNode:c,...d},u)=>(0,t.createElement)("svg",{ref:u,...a,width:i,height:i,stroke:e,strokeWidth:o?24*Number(n)/Number(i):n,className:r("lucide",s),...!l&&!(e=>{for(let t in e)if(t.startsWith("aria-")||"role"===t||"title"===t)return!0;return!1})(d)&&{"aria-hidden":"true"},...d},[...c.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(l)?l:[l]]));e.s(["default",0,(e,a)=>{let o=(0,t.forwardRef)(({className:o,...s},l)=>(0,t.createElement)(n,{ref:l,iconNode:a,className:r(`lucide-${i(e).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${e}`,o),...s}));return o.displayName=i(e),o}],75254)},50682,51348,e=>{"use strict";var t=e.i(75254);let r=(0,t.default)("github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);e.s(["Github",0,r],50682);let i=(0,t.default)("linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);e.s(["Linkedin",0,i],51348)},37727,e=>{"use strict";let t=(0,e.i(75254).default)("x",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);e.s(["X",0,t],37727)},5353,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(22016),a=e.i(18566),n=e.i(50682),o=e.i(51348);let s=(0,e.i(75254).default)("menu",[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]]);var l=e.i(37727);function c({href:e,children:r,active:a,onClick:n}){return(0,t.jsx)(i.default,{href:e,onClick:n,className:`nav-link mono ${a?"is-active":""}`,children:r})}e.s(["SiteNavbar",0,function(){let[e,d]=(0,r.useState)(!1),u=function(){let[e,t]=(0,r.useState)("about");return(0,r.useEffect)(()=>{let e=["about","experience","skills","projects","contact"],r=()=>{let r=window.scrollY,i=window.innerHeight;if(i+r>=document.documentElement.scrollHeight-90)return void t("contact");let a=.35*i,n="about";for(let t of e){let e=document.getElementById(t);e&&e.getBoundingClientRect().top<=a&&(n=t)}t(n)};return r(),window.addEventListener("scroll",r,{passive:!0}),()=>window.removeEventListener("scroll",r)},[]),e}(),m=(0,a.usePathname)(),h=()=>d(!1);return(0,t.jsxs)("header",{id:"top",className:"site-header",children:[(0,t.jsxs)("div",{className:"page-wrap nav-shell flex items-center justify-between",children:[(0,t.jsx)(i.default,{href:"/",onClick:e=>{("/"===m||""===m)&&(e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))},className:"brand-lockup group inline-flex items-center text-[hsl(var(--foreground))] cursor-pointer","aria-label":"Home page - Back to top",children:(0,t.jsxs)("span",{className:"serif text-2xl md:text-3xl font-normal italic tracking-tight transition-transform duration-300 group-hover:scale-105",children:["h",(0,t.jsx)("span",{className:"text-primary not-italic font-mono transition-opacity group-hover:opacity-80",children:"_"})]})}),(0,t.jsxs)("nav",{"aria-label":"Primary navigation",className:"hidden items-center gap-8 md:flex",children:[(0,t.jsx)(c,{href:"/#about",active:"/"===m&&"about"===u,children:"About"}),(0,t.jsx)(c,{href:"/#experience",active:"/"===m&&"experience"===u,children:"Experience"}),(0,t.jsx)(c,{href:"/#skills",active:"/"===m&&"skills"===u,children:"Skills"}),(0,t.jsx)(c,{href:"/#projects",active:"/"===m&&"projects"===u,children:"Projects"}),(0,t.jsx)(c,{href:"/#contact",active:"/"===m&&"contact"===u,children:"Contact"}),(0,t.jsx)(c,{href:"/blog",active:m?.startsWith("/blog"),children:"Blog"})]}),(0,t.jsxs)("div",{className:"hidden items-center gap-4 md:flex",children:[(0,t.jsx)("a",{href:"https://www.linkedin.com/in/harmanp01",target:"_blank",rel:"noreferrer","aria-label":"LinkedIn",className:"social-link",children:(0,t.jsx)(o.Linkedin,{size:16,strokeWidth:1.7})}),(0,t.jsx)("a",{href:"https://github.com/harmanD-MAX",target:"_blank",rel:"noreferrer","aria-label":"GitHub",className:"social-link",children:(0,t.jsx)(n.Github,{size:17,strokeWidth:1.7})}),(0,t.jsx)("a",{href:"mailto:harmanbofficial@gmail.com",className:"mono say-hello",children:"Say hello"})]}),(0,t.jsx)("button",{type:"button","aria-label":e?"Close menu":"Open menu","aria-expanded":e,onClick:()=>d(e=>!e),className:"mobile-menu-button md:hidden cursor-pointer",children:e?(0,t.jsx)(l.X,{size:17}):(0,t.jsx)(s,{size:17})})]}),e&&(0,t.jsx)("div",{className:"page-wrap mobile-menu md:hidden",children:(0,t.jsxs)("nav",{"aria-label":"Mobile navigation",className:"flex flex-col gap-5",children:[(0,t.jsx)(c,{href:"/#about",active:"/"===m&&"about"===u,onClick:h,children:"About"}),(0,t.jsx)(c,{href:"/#experience",active:"/"===m&&"experience"===u,onClick:h,children:"Experience"}),(0,t.jsx)(c,{href:"/#skills",active:"/"===m&&"skills"===u,onClick:h,children:"Skills"}),(0,t.jsx)(c,{href:"/#projects",active:"/"===m&&"projects"===u,onClick:h,children:"Projects"}),(0,t.jsx)(c,{href:"/#contact",active:"/"===m&&"contact"===u,onClick:h,children:"Contact"}),(0,t.jsx)(c,{href:"/blog",active:m?.startsWith("/blog"),onClick:h,children:"Blog"}),(0,t.jsxs)("div",{className:"flex items-center gap-5 border-t border-[hsl(var(--border))] pt-5",children:[(0,t.jsx)("a",{href:"https://www.linkedin.com/in/harmanp01",target:"_blank",rel:"noreferrer",className:"mono",children:"LinkedIn"}),(0,t.jsx)("a",{href:"https://github.com/harmanD-MAX",target:"_blank",rel:"noreferrer",className:"mono",children:"GitHub"}),(0,t.jsx)("a",{href:"mailto:harmanbofficial@gmail.com",className:"mono",children:"Email"})]})]})})]})}],5353)},70756,e=>{"use strict";let t=(0,e.i(75254).default)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);e.s(["Lock",0,t],70756)},43531,e=>{"use strict";let t=(0,e.i(75254).default)("check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);e.s(["Check",0,t],43531)},65261,e=>{"use strict";let t=(0,e.i(75254).default)("key-round",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);e.s(["KeyRound",0,t],65261)},90634,e=>{"use strict";var t=e.i(43476),r=e.i(71645),i=e.i(70756),a=e.i(65261),n=e.i(43531),o=e.i(37727);let s=(0,e.i(75254).default)("shield-alert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);e.s(["AuthorAuthModal",0,function({isOpen:e,onClose:l,onSuccess:c,actionTitle:d="Author Verification Required"}){let[u,m]=(0,r.useState)(""),[h,p]=(0,r.useState)(""),[f,g]=(0,r.useState)(!1);if(!e)return null;let y=async e=>{if(e.preventDefault(),!u.trim())return void p("Please enter Harman's author passkey.");g(!0),p("");try{let e=await fetch("/api/auth/verify",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({passkey:u.trim()})}),t=await e.json();t.success&&t.authenticated?(sessionStorage.setItem("harman_author_key",t.token||u.trim()),c(t.token||u.trim()),l()):p(t.error||"Incorrect passkey. Only Harman can publish or edit articles.")}catch(e){console.error(e),p("Failed to verify credentials with server.")}finally{g(!1)}};return(0,t.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md animate-in fade-in duration-200",children:(0,t.jsxs)("div",{className:"relative w-full max-w-md rounded-2xl border border-border/70 bg-[hsl(var(--card))] p-6 sm:p-8 shadow-2xl",children:[(0,t.jsx)("button",{type:"button",onClick:l,className:"absolute right-4 top-4 p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/40 transition-colors cursor-pointer",children:(0,t.jsx)(o.X,{size:16})}),(0,t.jsxs)("div",{className:"flex items-center gap-3 mb-4",children:[(0,t.jsx)("div",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 border border-primary/25 text-primary",children:(0,t.jsx)(i.Lock,{size:18})}),(0,t.jsxs)("div",{children:[(0,t.jsxs)("h3",{className:"serif text-2xl font-normal text-foreground",children:["Harman",(0,t.jsx)("span",{className:"text-primary italic font-mono",children:"_"})," Writer Gate"]}),(0,t.jsx)("p",{className:"mono text-[0.65rem] text-muted-foreground",children:d})]})]}),(0,t.jsxs)("p",{className:"text-xs text-foreground/75 font-sans leading-relaxed mb-5",children:["This journal is written and curated solely by ",(0,t.jsx)("strong",{className:"font-semibold text-foreground",children:"Harman"}),". Readers have read-only access. To write, publish, or edit an article, please enter Harman's author passkey."]}),(0,t.jsxs)("form",{onSubmit:y,className:"flex flex-col gap-4",children:[(0,t.jsxs)("div",{className:"flex flex-col gap-1.5",children:[(0,t.jsx)("label",{className:"mono text-[0.62rem] uppercase tracking-wider text-muted-foreground",children:"Author Passkey"}),(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsx)(a.KeyRound,{size:14,className:"absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground"}),(0,t.jsx)("input",{type:"password",value:u,onChange:e=>{m(e.target.value),p("")},placeholder:"Enter author passkey...",autoFocus:!0,className:"w-full rounded-xl border border-border/80 bg-background/80 pl-9 pr-4 py-2.5 font-mono text-xs text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"})]})]}),h&&(0,t.jsxs)("div",{className:"flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-2.5 text-[0.72rem] text-red-400",children:[(0,t.jsx)(s,{size:14,className:"shrink-0"}),(0,t.jsx)("span",{children:h})]}),(0,t.jsxs)("div",{className:"flex items-center justify-end gap-3 mt-2",children:[(0,t.jsx)("button",{type:"button",onClick:l,className:"mono text-xs px-4 py-2 rounded-full border border-border/60 text-muted-foreground hover:text-foreground transition-colors cursor-pointer",children:"Cancel"}),(0,t.jsx)("button",{type:"submit",disabled:f,className:"mono text-xs px-5 py-2 rounded-full bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-all shadow-md hover:shadow-primary/20 cursor-pointer inline-flex items-center gap-1.5 disabled:opacity-50",children:f?(0,t.jsx)("span",{children:"Verifying..."}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.Check,{size:13}),(0,t.jsx)("span",{children:"Unlock Access"})]})})]})]})]})})}],90634)},91689,e=>{"use strict";var t=e.i(43476);e.s(["BlogBackground",0,function(){return(0,t.jsxs)("div",{className:"pointer-events-none fixed inset-0 overflow-hidden -z-10","aria-hidden":!0,children:[(0,t.jsx)("div",{className:"absolute inset-0 bg-background"}),(0,t.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,var(--accent-glow),transparent)] opacity-45"}),(0,t.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/85"})]})}])},27877,e=>{"use strict";let t=[{id:"leetcode-patterns-dp-distributed",slug:"pattern-recognition-leetcode-dp-distributed-systems",title:"Pattern Recognition in LeetCode: From Dynamic Programming to Distributed Systems",excerpt:"A deep dive into decomposing algorithmic problems using recurring templates—and why subproblem memoization is the exact same mental model behind distributed caching and idempotent request routing.",category:"Algorithms",tags:["LeetCode","Dynamic Programming","System Design","Caching","C++"],readTime:"8 min read",publishedAt:"Sep 04, 2026",isDraft:!1,author:{name:"Harman",signature:"Harmanpreet Singh",role:"Backend & Distributed Systems Engineer"},content:`## The Core Shift: Stop Solving Problems, Start Classifying State Transitions

When solving algorithmic challenges—whether preparing for technical interviews or architecting high-throughput distributed microservices—the biggest leap in engineering intuition occurs when you stop treating every problem as a unique riddle.

Instead, **90% of complex algorithmic challenges map directly to fewer than 7 fundamental templates**.

\`\`\`text
[ Problem Space ]
        │
        ├── Sequential Decision? ──────► Dynamic Programming (State DAG)
        ├── Window / Subarray Range? ──► Sliding Window / Two Pointers
        ├── Shortest Path / Level? ────► BFS / Dijkstra / Topological Sort
        ├── Connectivity / Cycles? ────► Union-Find (Disjoint Set Union)
        └── Partition / Monotonic? ────► Monotonic Stack / Binary Search
\`\`\`

---

## 1. Dynamic Programming as State Space Graphs

Consider the classic **0/1 Knapsack** vs **Unbounded Knapsack** vs **Interval Scheduling**. Many developers memorize tables. But in reality, every DP problem is simply finding the shortest/longest path in a **Directed Acyclic Graph (DAG)** of states:

### The Universal DP Recurrence Form:
\`\`\`text
State: DP[i][w] = Maximum value achievable considering items up to index i with capacity w
Base Case: DP[0][w] = 0 for all w
Transition: DP[i][w] = max(DP[i-1][w], DP[i-1][w - weight[i]] + value[i])
\`\`\`

Here is how you express this cleanly in modern C++20 with cache locality optimizations:

\`\`\`cpp
#include <vector>
#include <algorithm>
#include <iostream>

// Space-optimized 1D Rolling Array Pattern
int solveKnapsack(int capacity, const std::vector<int>& weights, const std::vector<int>& values) {
    std::vector<int> dp(capacity + 1, 0);

    for (size_t i = 0; i < weights.size(); ++i) {
        // Traverse backwards to prevent using the same item multiple times in 0/1
        for (int w = capacity; w >= weights[i]; --w) {
            dp[w] = std::max(dp[w], dp[w - weights[i]] + values[i]);
        }
    }
    return dp[capacity];
}
\`\`\`

---

## 2. Why This Matters in Distributed Systems

Think about how a **Distributed Cache (e.g. Redis Cluster)** or an **API Gateway with Idempotency Keys** works:

> [!NOTE]
> **Memoization in Code** $\\equiv$ **Distributed Caching in Production**
> - In DP: We cache intermediate subproblem results to avoid redundant $O(2^N)$ subtree recomputations.
> - In Distributed Systems: We cache query results (with TTL & LRU eviction) to protect underlying databases from $O(QPS)$ cascading thundering herds.

### The Parallel Architecture:
1. **Overlapping Subproblems**: In an e-commerce checkout service, multiple concurrent requests calculate the same shipping rate matrix $\\rightarrow$ solved via Redis memoization.
2. **Optimal Substructure**: The optimal global latency of a federated RPC pipeline is composed of the optimal latencies of its DAG dependencies $\\rightarrow$ solved via async pipeline fan-out.

---

## 3. The 5-Step Pattern Recognition Framework

Whenever you encounter a new problem:

1. **Identify the Constraints**: Look at $N$. If $N \\le 20$, think Bitmask/Backtracking. If $N \\le 10^5$, think $O(N \\log N)$ Sorting/Binary Search. If $N \\le 10^7$, think $O(N)$ Hash Map/Sliding Window.
2. **Define State Variables**: What is the minimum set of parameters needed to uniquely represent a snapshot of progress?
3. **Formulate the Boundary**: What happens at index 0, negative capacities, or empty trees?
4. **Determine the Direction of Computation**: Bottom-up (iterative with rolling variables) vs Top-Down (memoized recursion).
5. **Optimize Space Complexity**: Can a $2\\text{D}$ table $O(N \\times M)$ be compressed to $O(M)$ using two rolling rows or a single backward array?

Mastering this mental model turns algorithmic problem solving from stressful memorization into systematic engineering decomposition.`},{id:"raft-consensus-log-replication-go",slug:"raft-consensus-distributed-log-replication-go",title:"Raft Consensus & Distributed Log Replication in Go: Building a Fault-Tolerant State Machine",excerpt:"A deep breakdown of leader election, randomized split-vote timers, heartbeat replication quorums, and log compaction—building a deterministic distributed state machine from scratch in Go.",category:"Distributed Systems",tags:["Go","Raft","Distributed Systems","Consensus","Fault Tolerance"],readTime:"9 min read",publishedAt:"Sep 03, 2026",isDraft:!1,author:{name:"Harman",signature:"Harmanpreet Singh",role:"Backend & Distributed Systems Engineer"},content:`## The Consensus Challenge: Maintaining Consistency Across Unreliable Nodes

In distributed computing, how do multiple independently failing nodes agree on a sequence of state updates over an asynchronous, lossy network?

**Raft** was designed by Diego Ongaro and John Ousterhout (Stanford) as an understandable alternative to Multi-Paxos. It breaks the consensus problem into three strictly decoupled subproblems:
1. **Leader Election**
2. **Log Replication**
3. **Safety & State Machine Commit Invariants**

\`\`\`text
   [ Follower ] ──(Election Timeout)──► [ Candidate ]
        ▲                                    │
        │                               (Wins Quorum)
        │                                    ▼
        └────────(Discovers Higher Term)──── [ Leader ]
\`\`\`

---

## 1. Structuring the Raft Peer in Go

Here is the clean core definition of a Raft node utilizing Go channels and non-blocking timers:

\`\`\`go
package raft

import (
	"sync"
	"time"
)

type NodeRole int

const (
	Follower NodeRole = iota
	Candidate
	Leader
)

type LogEntry struct {
	Index   int
	Term    int
	Command interface{}
}

type RaftNode struct {
	mu        sync.Mutex
	peers     []string
	nodeID    string
	role      NodeRole
	currentTerm int
	votedFor    string
	log         []LogEntry

	// Volatile state on all servers
	commitIndex int
	lastApplied int

	// Volatile state on leaders
	nextIndex  map[string]int
	matchIndex map[string]int

	heartbeatTimer *time.Timer
	electionTimer  *time.Timer
}
\`\`\`

---

## 2. Preventing Split-Brain via Randomized Election Timers

When nodes lose contact with a leader, they transition to the \`Candidate\` state and increment \`currentTerm\`. To prevent split-vote scenarios where two candidates continually divide the vote:

> [!NOTE]
> **Randomized Election Windows**:
> Each follower sets its election timeout randomly between **$150\\text{ms}$ and $300\\text{ms}$**. This ensures one node times out first, broadcasts \`RequestVote\` RPCs, and collects a majority quorum before competitors wake up.

\`\`\`go
func (rn *RaftNode) resetElectionTimer() {
	if rn.electionTimer != nil {
		rn.electionTimer.Stop()
	}
	// Randomized jitter: [150ms, 300ms)
	d := time.Duration(150+rand.Intn(150)) * time.Millisecond
	rn.electionTimer = time.AfterFunc(d, func() {
		rn.mu.Lock()
		defer rn.mu.Unlock()
		if rn.role != Leader {
			rn.startElection()
		}
	})
}
\`\`\`

---

## 3. Log Invariant & Majority Commit

A log entry is **committed** once it is securely stored on a strict majority ($N/2 + 1$) of nodes. The leader tracks \`matchIndex\` for every follower, and once the median index exceeds the current commit index in the active term, it advances the state machine.

This deterministic invariant guarantees that no committed command will ever be lost or overwritten by future term leaders.`},{id:"zero-copy-networking-cpp-asio",slug:"zero-copy-networking-tcp-game-servers-cpp-asio",title:"Zero-Copy Networking: Designing 100K+ QPS TCP Game Servers with C++20 and Asio",excerpt:"Architectural insights into sub-5ms latency event loops, circular ring buffers, binary packet framing, and zero-allocation memory arenas in modern C++20.",category:"Distributed Systems",tags:["C++20","Asio","TCP/IP","Networking","Low Latency"],readTime:"7 min read",publishedAt:"Aug 29, 2026",isDraft:!1,author:{name:"Harman",signature:"Harmanpreet Singh",role:"Backend & Distributed Systems Engineer"},content:`## Real-Time Backend Latency: Why the Thread-Per-Client Model Fails

When serving real-time multiplayer worlds or financial order-matching engines with $60\\text{ Hz}$ tick rates ($16.6\\text{ms}$ total window per frame), standard blocking I/O models collapse due to CPU kernel context switches and heap allocator lock contention.

To handle $100\\text{K}+$ concurrent TCP connections, high-performance backends adopt the **Single-Threaded Event Loop with Non-Blocking epoll / kqueue** and **C++20 Coroutines**.

\`\`\`text
   [ TCP Ingress Stream ] ──► [ Circular Ring Buffer ]
                                    │
                              (Zero Copy Cast)
                                    ▼
                             [ Packet Dispatch ] ──► [ Tick Arena Pool ]
\`\`\`

---

## 1. C++20 Asynchronous Coroutines with Asio

Using \`asio::awaitable<void>\` allows developers to write clean, linear logic while executing completely asynchronously:

\`\`\`cpp
#include <asio.hpp>
#include <iostream>
#include <memory>

asio::awaitable<void> handleSession(asio::ip::tcp::socket socket) {
    std::array<uint8_t, 1024> buffer{};
    
    for (;;) {
        // Asynchronously read 4-byte packet header without blocking
        std::size_t n = co_await asio::async_read(
            socket,
            asio::buffer(buffer.data(), 4),
            asio::use_awaitable
        );

        uint16_t packetId = *reinterpret_cast<const uint16_t*>(&buffer[0]);
        uint16_t payloadSize = *reinterpret_cast<const uint16_t*>(&buffer[2]);

        // Zero-copy async payload read
        co_await asio::async_read(
            socket,
            asio::buffer(buffer.data() + 4, payloadSize),
            asio::use_awaitable
        );

        // Process message in local arena
    }
}
\`\`\`

---

## 2. Pre-Allocated Ring Buffers & Zero Allocations

Heap allocations (\`new\` / \`malloc\`) acquire global lock mutexes in multi-threaded runtimes. By pre-allocating contiguous memory arenas per connection:

> [!NOTE]
> **Sub-5ms Tick Turnaround Guarantee**:
> Ingestion buffers write into a contiguous circular ring buffer. Packet headers point to memory offsets directly within the buffer without deserializing or re-allocating new objects.`},{id:"high-throughput-request-routing-redis",slug:"high-throughput-request-routing-idempotency-redis",title:"High-Throughput Request Routing & Idempotency Key Architecture with Redis Cluster",excerpt:"How to design at-least-once distributed request pipelines without duplicate mutations using atomic Redis Lua scripts, distributed locks, and sliding-window rate limiters.",category:"Backend Architecture",tags:["Redis","System Design","Idempotency","Distributed Systems","Backend Architecture"],readTime:"8 min read",publishedAt:"Aug 24, 2026",isDraft:!1,author:{name:"Harman",signature:"Harmanpreet Singh",role:"Backend & Distributed Systems Engineer"},content:`## The Core Challenge: Retries & Duplicate Executions

In distributed architectures, network timeouts are inevitable. When a client sends a payment checkout or inventory reservation and experiences a TCP reset before receiving the response:
- Did the request fail before reaching the database?
- Or did the mutation succeed, but the response was dropped on the wire?

Without **Idempotency Keys**, naive client retries result in duplicate charges or duplicate inventory reservations.

\`\`\`text
   [ Client ] ──(Request + Idempotency-Key)──► [ API Gateway ]
                                                      │
                                             (Atomic Lua Check)
                                                      ▼
                                              [ Redis Cluster ]
                                                ├── IN_PROGRESS ──► Block Duplicates
                                                └── COMPLETED   ──► Return Cached Result
\`\`\`

---

## 1. Atomic State Machine in Redis with Lua

To avoid race conditions between concurrent requests bearing the same idempotency key, we execute an atomic Lua script:

\`\`\`lua
-- KEYS[1]: idempotency:key
-- ARGV[1]: request_hash
-- ARGV[2]: ttl_seconds (e.g. 86400)

local current = redis.call('GET', KEYS[1])

if current then
    return current -- Return existing state (IN_PROGRESS or response JSON)
else
    -- Set IN_PROGRESS with TTL
    redis.call('SET', KEYS[1], '{"status":"PROCESSING"}', 'EX', ARGV[2])
    return nil -- Proceed to execute mutation
end
\`\`\`

---

## 2. Distributed Locking & Deadlock Prevention

> [!NOTE]
> **Lease Expiration & Heartbeats**:
> Never set infinite locks. Always attach a reasonable TTL ($30\\text{s}$) to allow automatic recovery if a worker node crashes mid-flight. Once the backend completes the transaction, it updates the Redis key from \`PROCESSING\` to \`COMPLETED\` alongside the cached serialized payload.`},{id:"vector-search-hnsw-rag-production",slug:"vector-search-hnsw-indexing-production-rag",title:"Vector Search & HNSW Indexing: Scaling Production Retrieval-Augmented Generation (RAG)",excerpt:"Deconstructing Hierarchical Navigable Small World (HNSW) graphs, cosine similarity quantization, and hybrid sparse/dense retrieval to minimize hallucination in LLM pipelines.",category:"Generative AI",tags:["Generative AI","RAG","Vector Search","HNSW","Embeddings"],readTime:"10 min read",publishedAt:"Aug 18, 2026",isDraft:!1,author:{name:"Harman",signature:"Harmanpreet Singh",role:"Backend & Distributed Systems Engineer"},content:`## Beyond Naive RAG: The Latency & Accuracy Trade-Off

Retrieval-Augmented Generation (RAG) is the bridge that connects non-deterministic Large Language Models to private, deterministic knowledge bases.

However, naive vector search ($O(N)$ brute-force Cosine / Euclidean distance calculation) becomes completely unfeasible as corpus sizes grow into millions of chunks.

\`\`\`text
   Top Layer (Sparse Graph, Long Jumps)
   Layer 2    ──────► [ O ] ────────────────► [ O ]
                          │                       │
   Layer 1    ──► [ O ] ──┼──► [ O ] ────────────► [ O ]
                          │      │                 │
   Layer 0    [O]──[O]──[O]──[O]──[O]──[O]──[O]──[O] (Dense Ground Layer)
\`\`\`

---

## 1. How Hierarchical Navigable Small World (HNSW) Works

HNSW operates like **Skip Lists applied to multi-dimensional geometric graphs**:
1. **Multi-layer Hierarchy**: The top layer has few nodes with long-distance edges across the vector space.
2. **Greedy Traversal**: The search starts at the entry node in the top layer, greedily finding the closest neighbor, then drops to the lower layer to refine resolution.
3. **Logarithmic Complexity**: Search complexity is reduced from $O(N)$ down to $O(\\log N)$.

---

## 2. Hybrid Retrieval: Combining Dense Embeddings with BM25 Sparse Search

Dense embeddings (e.g. OpenAI \`text-embedding-3\`, Cohere) capture semantic meaning, but struggle with exact matches (SKUs, IDs, method names).

> [!NOTE]
> **Reciprocal Rank Fusion (RRF)**:
> In production, we combine BM25 keyword matching with HNSW dense vector search using reciprocal rank fusion:
> $$RRF(d) = \\sum_{m \\in M} \\frac{1}{k + r_m(d)}$$
> This achieves over **$94\\%$ retrieval accuracy** while preventing hallucinations on domain-specific acronyms and entity IDs.`},{id:"demystifying-memory-allocators-systems",slug:"demystifying-memory-allocators-arena-slab-freelist",title:"Demystifying Memory Allocators: Arena vs Slab vs Free-List in Low-Latency Systems",excerpt:"Why standard malloc/free causes cache thrashing and fragmentation in high-throughput engines, and how custom arena, slab, and thread-local allocators achieve O(1) memory operations.",category:"System Design",tags:["C++","Memory Management","System Design","Performance","Low Latency"],readTime:"7 min read",publishedAt:"Aug 10, 2026",isDraft:!1,author:{name:"Harman",signature:"Harmanpreet Singh",role:"Backend & Distributed Systems Engineer"},content:`## The Hidden Cost of General-Purpose Heap Allocators

General-purpose allocators (like \`glibc malloc\`, \`jemalloc\`, or \`mimalloc\`) must handle arbitrary object sizes, multi-threaded contention, and memory compaction.

In low-latency applications (game engines, distributed packet routers, financial order books), standard allocation patterns cause:
1. **Cache Locality Destruction**: Objects are scattered randomly across physical RAM pages.
2. **Heap Fragmentation**: Small gaps between allocated memory blocks waste address space.
3. **Lock Contention**: Threads compete on global arena mutexes.

\`\`\`text
[ Arena Bump Allocator ]
┌────────────────────────────────────────────────────────┐
│ [Allocated Object 1] [Allocated Object 2] [Free Space] │
└────────────────────────────────────────────────────────┘
                                            ▲
                                            └── Bump Pointer (O(1) Advance)
\`\`\`

---

## 1. The Arena (Bump) Allocator: $O(1)$ Allocation & Instant Teardown

An Arena allocates a huge contiguous block of memory upfront. Allocating memory simply advances an integer pointer by the requested size + alignment padding:

\`\`\`cpp
#include <cstddef>
#include <cstdint>
#include <new>

class ArenaAllocator {
public:
    explicit ArenaAllocator(std::size_t capacity)
        : capacity_(capacity), offset_(0) {
        buffer_ = static_cast<uint8_t*>(::operator new(capacity));
    }

    ~ArenaAllocator() {
        ::operator delete(buffer_);
    }

    void* allocate(std::size_t size, std::size_t alignment = alignof(std::max_align_t)) {
        std::size_t current = reinterpret_cast<std::uintptr_t>(buffer_ + offset_);
        std::size_t aligned = (current + alignment - 1) & ~(alignment - 1);
        std::size_t newOffset = (aligned - reinterpret_cast<std::uintptr_t>(buffer_)) + size;

        if (newOffset > capacity_) {
            throw std::bad_alloc();
        }

        offset_ = newOffset;
        return reinterpret_cast<void*>(aligned);
    }

    void reset() noexcept {
        offset_ = 0; // O(1) instantaneous memory reclamation!
    }

private:
    uint8_t* buffer_;
    std::size_t capacity_;
    std::size_t offset_;
};
\`\`\`

---

## 2. When to Use Which Allocator

| Allocator | Time Complexity | Fragmentation | Best Use Case |
| :--- | :--- | :--- | :--- |
| **Arena Allocator** | $O(1)$ | Zero (until reset) | Per-request / per-frame lifecycles |
| **Slab Allocator** | $O(1)$ | Zero | Fixed-size pools (TCP sockets, order nodes) |
| **Free-List Allocator** | $O(N)$ / $O(1)$ | Variable | Heterogeneous sizes with unpredictable lifespans |`}];e.s(["SEED_BLOGS",0,t])}]);