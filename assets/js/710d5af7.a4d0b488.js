"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3172],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return t?a.createElement(h,l(l({ref:n},d),{},{components:t})):a.createElement(h,l({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},91303:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),l=["components"],i={sidebar_label:"1. Getting Started"},s="Getting Started",c={unversionedId:"candy-machine-v2/getting-started",id:"candy-machine-v2/getting-started",title:"Getting Started",description:"Before we can create a Candy Machine, you will need to install and operate a handful of developer tools.",source:"@site/docs/candy-machine-v2/01-getting-started.md",sourceDirName:"candy-machine-v2",slug:"/candy-machine-v2/getting-started",permalink:"/candy-machine-v2/getting-started",editUrl:"https://github.com/metaplex/docs/tree/main/docs/candy-machine-v2/01-getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"1. Getting Started"},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/candy-machine-v2/introduction"},next:{title:"2. Configuration",permalink:"/candy-machine-v2/configuration"}},d=[{value:"Tooling required",id:"tooling-required",children:[],level:2},{value:"Clone and Install Metaplex",id:"clone-and-install-metaplex",children:[],level:2},{value:"Solana Wallet",id:"solana-wallet",children:[{value:"Setting up a <code>devnet</code> wallet (for testing)",id:"setting-up-a-devnet-wallet-for-testing",children:[],level:3},{value:"Funding your <code>devnet</code> wallet",id:"funding-your-devnet-wallet",children:[],level:3}],level:2}],p={toc:d};function u(e){var n=e.components,t=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Before we can create a Candy Machine, you will need to install and operate a handful of developer tools."),(0,o.kt)("h2",{id:"tooling-required"},"Tooling required"),(0,o.kt)("p",null,"You will need recent version of the following tools:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/book/en/v2/Getting-Started-Installing-Git"},"git"),": to clone the repository"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"node"),": JavaScript runtime"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable"},"yarn"),": package manager to install the required dependencies"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.npmjs.com/package/ts-node#installation"},"ts-node"),": TypeScript execution environament")),(0,o.kt)("p",null,"Make sure you have recent versions of these tools:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ git version\ngit version 2.32.0\n\n# The latest LTS version of node is recommended\n$ node --version\nv16.13.0 \n\n$ yarn --version\n1.22.17\n\n$ ts-node --version\nv10.4.0\n")),(0,o.kt)("h2",{id:"clone-and-install-metaplex"},"Clone and Install Metaplex"),(0,o.kt)("p",null,"Creating and controlling a Candy Machine is done through the Metaplex command line tool, currently distributed in the Metaplex GitHub repository:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/metaplex-foundation/metaplex.git ~/metaplex\n")),(0,o.kt)("p",null,"This will create a directory ",(0,o.kt)("inlineCode",{parentName:"p"},"metaplex")," in your home directory with the lastest code from the repository. If you decide to clone the repository to a different location, you will need to change the path in subsequent instructions."),(0,o.kt)("p",null,"You will then need to install the dependencies:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ yarn install --cwd ~/metaplex/js/\n")),(0,o.kt)("p",null,"You can check that everything is working by running the Candy Machine CLI command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts --version\n0.0.2\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Make sure you are using the ",(0,o.kt)("inlineCode",{parentName:"p"},"candy-machine-v2-cli.ts")," script.")),(0,o.kt)("h2",{id:"solana-wallet"},"Solana Wallet"),(0,o.kt)("p",null,"The Candy Machine operates on the Solana blockchain. You will need a wallet with funds to create and deploy a Candy Machine. You can create and use a wallet using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/cli/install-solana-cli-tools"},"Solana Tool Suite"),". This guide will assume that you are using the Solana CLI commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ solana --version\nsolana-cli 1.9.1 \n")),(0,o.kt)("p",null,"You can check your wallet address:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ solana address\n6j4nNrozTJkk1zatiXHezSLZArnRUq3WkGKHACThXGpZ\n")),(0,o.kt)("p",null,"and your balance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ solana balance\n4 SOL\n")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We highly recommend trying to first deploy a Candy Machine on Solana ",(0,o.kt)("inlineCode",{parentName:"p"},"devnet"),", before moving to the ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet-beta")," environment. This way you can freely test different settings without having to move SOL to your wallet."),(0,o.kt)("p",{parentName:"div"},"In this guide we will use ",(0,o.kt)("inlineCode",{parentName:"p"},"devnet"),", although all commands presented will work in a similar fashion once you are in ",(0,o.kt)("inlineCode",{parentName:"p"},"mainnet-beta"),"."))),(0,o.kt)("h3",{id:"setting-up-a-devnet-wallet-for-testing"},"Setting up a ",(0,o.kt)("inlineCode",{parentName:"h3"},"devnet")," wallet (for testing)"),(0,o.kt)("p",null,"The steps described here will create a wallet to be used in the Solana ",(0,o.kt)("inlineCode",{parentName:"p"},"devnet")," environment. In normal circumstances you would redact your mnemonic, store it somewhere safe and take advantage of the ",(0,o.kt)("inlineCode",{parentName:"p"},"--outfile")," flag."),(0,o.kt)("p",null,"To create a new wallet, we will use the ",(0,o.kt)("inlineCode",{parentName:"p"},"solana-keygen")," commnand:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ solana-keygen new --outfile ~/.config/solana/devnet.json  \nGenerating a new keypair\n\nFor added security, enter a BIP39 passphrase\n\nNOTE! This passphrase improves security of the recovery seed phrase NOT the\nkeypair file itself, which is stored as insecure plain text\n\nBIP39 Passphrase (empty for none): \n\nWrote new keypair to /Users/febo/.config/solana/devnet.json\n=======================================================================\npubkey: 6j4nNrozTJkk1zatiXHezSLZArnRUq3WkGKHACThXGpZ\n=======================================================================\nSave this seed phrase and your BIP39 passphrase to recover your new keypair:\n## REDACTED ##\n=======================================================================\n")),(0,o.kt)("p",null,"The next step is to make this our default keypair:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ solana config set --keypair ~/.config/solana/devnet.json\n")),(0,o.kt)("p",null,"and make sure we are on the ",(0,o.kt)("inlineCode",{parentName:"p"},"devnet"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ solana config set --url https://api.devnet.solana.com\n")),(0,o.kt)("p",null,"If all the above steps are successfull, your configuration be similar to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ solana config get\nConfig File: ~/.config/solana/cli/config.yml\nRPC URL: https://api.devnet.solana.com \nWebSocket URL: wss://api.devnet.solana.com/ (computed)\nKeypair Path: ~/.config/solana/devnet.json \nCommitment: confirmed \n")),(0,o.kt)("h3",{id:"funding-your-devnet-wallet"},"Funding your ",(0,o.kt)("inlineCode",{parentName:"h3"},"devnet")," wallet"),(0,o.kt)("p",null,"In order to add SOL to your ",(0,o.kt)("inlineCode",{parentName:"p"},"devnet")," wallet, you can request funds from a faucet:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ solana airdrop 2\nRequesting airdrop of 2 SOL\n\nSignature: 41ZEZqpyNMLUy3kQahWSy349PeDz3Q82dNDHKiA7QcsrAzHs3f7YiDEZWjnFi434DoiiDiDkazkBRycRnctx1m6e\n\n6 SOL\n")),(0,o.kt)("p",null,"If the command is successful, you will see the updated balance at the end."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Do not send ",(0,o.kt)("strong",{parentName:"p"},"real")," SOL to a ",(0,o.kt)("inlineCode",{parentName:"p"},"devnet")," wallet.")))}u.isMDXComponent=!0}}]);