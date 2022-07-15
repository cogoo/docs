"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8165],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=r,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?i.createElement(f,a(a({ref:t},l),{},{components:n})):i.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=p;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},63512:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var i=n(83117),r=(n(67294),n(3905));const o={sidebar_label:"Timed Auction"},a="Overview",u={unversionedId:"guides/auction-house/auctioneers/timed-auction/index",id:"guides/auction-house/auctioneers/timed-auction/index",title:"Overview",description:"The Timed Auction Auctioneer is an Auctioneer implementation that adds English-style auction rules built on top of Auction House.",source:"@site/docs/03-guides/00-auction-house/05-auctioneers/00-timed-auction/index.md",sourceDirName:"03-guides/00-auction-house/05-auctioneers/00-timed-auction",slug:"/guides/auction-house/auctioneers/timed-auction/",permalink:"/guides/auction-house/auctioneers/timed-auction/",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/03-guides/00-auction-house/05-auctioneers/00-timed-auction/index.md",tags:[],version:"current",lastUpdatedAt:1657901167,formattedLastUpdatedAt:"Jul 15, 2022",frontMatter:{sidebar_label:"Timed Auction"},sidebar:"sidebar",previous:{title:"Auctioneers",permalink:"/guides/auction-house/auctioneers"},next:{title:"Candy Machine Minting UI",permalink:"/guides/candy-machine-ui"}},c={},s=[],l={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Timed Auction Auctioneer is an Auctioneer implementation that adds English-style auction rules built on top of Auction House."),(0,r.kt)("h1",{id:"listing-config"},"Listing Config"),(0,r.kt)("p",null,"The listing config struct is used to store all feature-related parameters attached to each listing. All features can be configured on a per-listing basis."),(0,r.kt)("h1",{id:"features"},"Features"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"English Auction with start and end dates"),(0,r.kt)("li",{parentName:"ul"},"Highest bid tracking"),(0,r.kt)("li",{parentName:"ul"},"Reserve price (Minimum Bid)"),(0,r.kt)("li",{parentName:"ul"},"Minimum Bid Increment - Require new bidders to bid a certain amount more than the current bid"),(0,r.kt)("li",{parentName:"ul"},"Automatic Time Extension - Bids made close to the end of an auction (this period is customizable) will extend the auction end date a configurable amount"),(0,r.kt)("li",{parentName:"ul"},"Prevent Highest Bidder cancellation - The highest bidder won't be able to cancel their bid and are required to purchase the NFT if they win*")),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"*Due to Auction House's escrowless nature, it is unable to prevent users from transferring listed tokens from their wallets and nullifying their bids at this time.")))}d.isMDXComponent=!0}}]);