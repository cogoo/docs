"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9826],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return n?i.createElement(h,r(r({ref:t},p),{},{components:n})):i.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var d=2;d<o;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},29607:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return d}});var i=n(83117),a=(n(67294),n(3905));const o={sidebar_label:"Candy Machine Minting UI"},r="A Front End Minting Experience",s={unversionedId:"guides/candy-machine-ui",id:"guides/candy-machine-ui",title:"A Front End Minting Experience",description:"This guide assumes you have already uploaded and deployed your Candy Machine.",source:"@site/docs/03-guides/01-candy-machine-ui.md",sourceDirName:"03-guides",slug:"/guides/candy-machine-ui",permalink:"/guides/candy-machine-ui",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/03-guides/01-candy-machine-ui.md",tags:[],version:"current",lastUpdatedAt:1657901167,formattedLastUpdatedAt:"Jul 15, 2022",sidebarPosition:1,frontMatter:{sidebar_label:"Candy Machine Minting UI"},sidebar:"sidebar",previous:{title:"Timed Auction",permalink:"/guides/auction-house/auctioneers/timed-auction/"},next:{title:"Setting up a CLI Wallet",permalink:"/guides/cli-wallet"}},l={},d=[{value:"Setting up",id:"setting-up",level:2},{value:"User Interface",id:"user-interface",level:2},{value:"Default Mint",id:"default-mint",level:3},{value:"Whitelist Mint",id:"whitelist-mint",level:3},{value:"End Settings Mint",id:"end-settings-mint",level:3}],p={toc:d};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"a-front-end-minting-experience"},"A Front End Minting Experience"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This guide assumes you have already uploaded and deployed your Candy Machine.\nIf you haven't yet done this, check out ",(0,a.kt)("a",{parentName:"p",href:"/tools/sugar/"},"Sugar CLI")," to get started!")),(0,a.kt)("p",null,"While the Candy Machine is ready to mint after being deployed, in most cases you will want to provide a front end experience to allow your\ncommunity the chance to mint, too."),(0,a.kt)("p",null,"You can use the Candy Machine UI, which is in\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/candy-machine-ui"},"metaplex-foundation/candy-machine-ui")," repository."),(0,a.kt)("p",null,"To download, run"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/metaplex-foundation/candy-machine-ui ~/candy-machine-ui/\n")),(0,a.kt)("h2",{id:"setting-up"},"Setting up"),(0,a.kt)("p",null,"Open the file ",(0,a.kt)("inlineCode",{parentName:"p"},".env.example")," located at the root of the new folder ",(0,a.kt)("inlineCode",{parentName:"p"},"~/candy-machine-ui")," and modify the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Set the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"REACT_APP_CANDY_MACHINE_ID")," to match the ",(0,a.kt)("inlineCode",{parentName:"p"},"ID")," of your Candy Machine. The ",(0,a.kt)("inlineCode",{parentName:"p"},"ID")," was in the output of\nthe ",(0,a.kt)("inlineCode",{parentName:"p"},"sugar deploy")," command and can also be found by running ",(0,a.kt)("inlineCode",{parentName:"p"},"sugar show")," in the same directory that you made your Candy Machine in.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Specify the intended network you wish to use. In this example we are using the ",(0,a.kt)("inlineCode",{parentName:"p"},"devnet"),":"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"REACT_APP_CANDY_MACHINE_ID=<YOUR CANDY MACHINE PROGRAM ID>\n\nREACT_APP_SOLANA_NETWORK=devnet\nREACT_APP_SOLANA_RPC_HOST=https://metaplex.devnet.rpcpool.com/\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Once your ",(0,a.kt)("inlineCode",{parentName:"p"},"REACT_APP_CANDY_MACHINE_ID")," has been updated. Rename ",(0,a.kt)("inlineCode",{parentName:"p"},".env.example")," to ",(0,a.kt)("inlineCode",{parentName:"p"},".env")))),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"The public RPC endpoints (",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.mainnet-beta.solana.com")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"https://api.devnet.solana.com"),") are not suitable\nfor Candy Machine mints and may cause significant issues to your minting site. We ",(0,a.kt)("strong",{parentName:"p"},"strongly")," recommend that you use a\ncustom RPC endpoint for your mint. You can find more information about the custom RPC solutions in the RPC section of\nour ",(0,a.kt)("a",{parentName:"p",href:"/guides/community#rpc"},"community docs"),".")),(0,a.kt)("p",null,"After these changes are made, run the command ",(0,a.kt)("inlineCode",{parentName:"p"},"yarn install && yarn start")," inside the\nfolder ",(0,a.kt)("inlineCode",{parentName:"p"},"~/metaplex/js/packages/candy-machine-ui"),". This will start a local server with a front end experience. From here,\nyou should customize the mint page and deploy it in your host service."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"We ",(0,a.kt)("strong",{parentName:"p"},"strongly")," recommend that you keep the standard implementation for the mint button functionality when using\ncaptcha (",(0,a.kt)("inlineCode",{parentName:"p"},"gatekeeper"),") settings. This will guarantee that the captcha tokens are issued at the correct time (e.g., after\nthe mint begins). The ",(0,a.kt)("inlineCode",{parentName:"p"},"CMv2")," is designed to reject captcha tokens that are created before the mint is live to avoid bots\npre-solving captchas - your transaction will fail if the token is created at the wrong time.")),(0,a.kt)("h2",{id:"user-interface"},"User Interface"),(0,a.kt)("p",null,"The UI supports all different configurations of your Candy Machine v2, including whitelist (presale + discount) and end\nsettings","\u2014","e.g., it automatically adapts the UI components depending on whether the whitelist token is detected or\nnot, discount for whitelist users is set and displays a countdown to the end of mint when end settings ",(0,a.kt)("inlineCode",{parentName:"p"},'"date"=true')," is\nused."),(0,a.kt)("h3",{id:"default-mint"},"Default Mint"),(0,a.kt)("p",null,"Before ",(0,a.kt)("inlineCode",{parentName:"p"},"goLiveDate")," is reached:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Mint Countdown",src:n(75479).Z+"#radius#shadow",width:"500",height:"261"})),(0,a.kt)("p",null,"When mint is live:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Mint Live",src:n(24973).Z+"#radius#shadow",width:"500",height:"261"})),(0,a.kt)("h3",{id:"whitelist-mint"},"Whitelist Mint"),(0,a.kt)("p",null,"Whitelist token not detected, mint is not active before ",(0,a.kt)("inlineCode",{parentName:"p"},"goLiveDate"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Whitelist + No Token",src:n(34262).Z+"#radius#shadow",width:"500",height:"284"})),(0,a.kt)("p",null,"Whitelist token detected and whitelist settings set to presale and discount price:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Whitelist Presale + Discount",src:n(97176).Z+"#radius#shadow",width:"500",height:"284"})),(0,a.kt)("p",null,"Whitelist only mint:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Whitelist Only",src:n(28605).Z+"#radius#shadow",width:"500",height:"261"})),(0,a.kt)("p",null,"Whitelist + presale and ",(0,a.kt)("inlineCode",{parentName:"p"},"goLiveDate")," set to ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),":"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Whitelist + No Token",src:n(87724).Z+"#radius#shadow",width:"500",height:"261"})),(0,a.kt)("h3",{id:"end-settings-mint"},"End Settings Mint"),(0,a.kt)("p",null,"Countdown to the end of the mint:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"End Settings",src:n(37796).Z+"#radius#shadow",width:"500",height:"284"})),(0,a.kt)("p",null,"End settings ",(0,a.kt)("inlineCode",{parentName:"p"},"date")," reached, mint stopped:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"End Settings Complete",src:n(49863).Z+"#radius#shadow",width:"500",height:"261"})))}u.isMDXComponent=!0},37796:function(e,t,n){t.Z=n.p+"assets/images/EndSettings-1-a30fb4d205d08a828d0258fa5a67cd8c.png"},49863:function(e,t,n){t.Z=n.p+"assets/images/EndSettings-2-a0cc26863ff1efa26e3211915d4b9a4a.png"},75479:function(e,t,n){t.Z=n.p+"assets/images/Mint-1-20fc223521cb4f1544a8b5c74c15b33c.png"},24973:function(e,t,n){t.Z=n.p+"assets/images/Mint-2-c466fd221b90c55ec705339f003fb464.png"},34262:function(e,t,n){t.Z=n.p+"assets/images/Whitelist-1-8be580595a13b6e0cd506666f81a2169.png"},97176:function(e,t,n){t.Z=n.p+"assets/images/Whitelist-2-55a3bec84d541b7426b909a29a41fdd0.png"},28605:function(e,t,n){t.Z=n.p+"assets/images/Whitelist-3-26eb5efaad6f5a28868115013ab58fdd.png"},87724:function(e,t,n){t.Z=n.p+"assets/images/Whitelist-4-6ef1e637541184122e8fac0f774ee03f.png"}}]);