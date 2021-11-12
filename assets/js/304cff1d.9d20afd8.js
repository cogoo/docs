"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8272],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70935:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],s={sidebar_label:"3. Upload NFT Assets"},c="Upload NFT Assets",l={unversionedId:"create-candy/upload-assets",id:"create-candy/upload-assets",isDocsHomePage:!1,title:"Upload NFT Assets",description:"This section assumes you have completed the prerequisites identified in the introduction. It also works with the example collection defined in the previous section, downloadable as simple-collection.zip.",source:"@site/docs/create-candy/04-upload-assets.md",sourceDirName:"create-candy",slug:"/create-candy/upload-assets",permalink:"/create-candy/upload-assets",editUrl:"https://github.com/metaplex/docs/tree/main/docs/create-candy/04-upload-assets.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"3. Upload NFT Assets"},sidebar:"sidebar",previous:{title:"2. Validate NFT Assets",permalink:"/create-candy/validate-assets"},next:{title:"4. Verify Upload",permalink:"/create-candy/verify-upload"}},p=[],u={toc:p};function d(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upload-nft-assets"},"Upload NFT Assets"),(0,a.kt)("p",null,"This section assumes you have completed the ",(0,a.kt)("a",{parentName:"p",href:"introduction#prerequisites"},"prerequisites identified in the introduction"),". It also works with the ",(0,a.kt)("a",{parentName:"p",href:"prepare-assets#example-two-item-collection"},"example collection")," defined in the previous section, downloadable as ",(0,a.kt)("a",{target:"_blank",href:n(98755).Z},"simple-collection.zip"),"."),(0,a.kt)("p",null,"The commands in this section are long and use lots of arguments and flags. To avoid challenges this creates, it's helpful to keep the help documentation for this step handy. To view the help documentation, run:"),(0,a.kt)("p",null,"command: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts help upload\n")),(0,a.kt)("p",null,"expected output:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"")))}d.isMDXComponent=!0},98755:function(e,t,n){t.Z=n.p+"assets/files/simple-collection-947394233e6255e38bede8ec713a434c.zip"}}]);