(this["webpackJsonp@uniswap/interface"]=this["webpackJsonp@uniswap/interface"]||[]).push([[7],{2037:function(e,t,n){},2038:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/welcomeModal-dark.0f21fb6b.jpg"},2039:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/welcomeModal-dark@2x.45349aad.jpg"},2040:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/welcomeModal-dark@3x.8ea4669c.jpg"},2041:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/welcomeModal-light.9edc986b.jpg"},2042:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/welcomeModal-light@2x.a465cde5.jpg"},2043:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/welcomeModal-light@3x.c6262e4c.jpg"},2104:function(e,t,n){"use strict";n.r(t);var i,r,c=n(7),o=n(2),a=n(42),l=n(33),s=n(774),d=n(394),u=n(41),p=n(116),h=n(1),j=n(360),f=n(98),b=n(102),m=n(3),g=n.n(m),x=n(14),O=n(74),v=n(150),w=n(0),y=o.default.div.withConfig({componentId:"sc-oqttp6-0"})(["display:flex;width:100%;justify-content:flex-end;"]),C=o.default.div.withConfig({componentId:"sc-oqttp6-1"})(["position:relative;width:100%;overflow-x:hidden;max-width:100%;height:390px;@media only screen and (min-width:","){max-width:600px;}"],(function(e){var t=e.theme;return"".concat(t.breakpoint.md,"px")})),k=Object(o.default)(v.a.div).withConfig({componentId:"sc-oqttp6-2"})(["display:flex;justify-content:center;padding:4px 12px 32px;position:absolute;will-change:transform;width:calc(100%);height:calc(100%);@media screen and (min-width:","px){padding:4px 32px 32px;}"],(function(e){return e.theme.breakpoint.md})),I=o.default.div.withConfig({componentId:"sc-oqttp6-3"})(["align-items:center;color:",";cursor:pointer;display:none;user-select:none;height:calc(100%);padding:4px 0 32px;@media only screen and (min-width:","){display:flex;}:hover{opacity:",";}"],(function(e){return e.theme.textPrimary}),(function(e){var t=e.theme;return"".concat(t.breakpoint.sm,"px")}),(function(e){return e.theme.opacity.hover})),z=800,S=function(e){var t=e.children,n=e.activeIndex,i=e.toggleNextSlide,r=Object(h.useCallback)((function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:t.length;return Object(p.f)(e,n)}),[t]),o=Object(h.useCallback)((function(e,t,n){return Object(p.g)(e,t,n,r)}),[r]),a=Object(v.useSprings)(t.length,(function(e){return{x:(e<t.length-1?e:-1)*z}})),l=Object(c.a)(a,2),s=l[0],d=l[1],u=Object(h.useRef)([0,1]),j=Object(h.useCallback)((function(e,n){var i=r(Math.floor(e/z)%t.length),c=n<0?t.length-2:1;d((function(r){var a=o(r,i,c),l=o(r,u.current[0],u.current[1]),s=Object(p.h)(i,c,a,t.length,e);return{x:-e%(z*t.length)+z*s,immediate:n<0?l>a:l<a,config:{tension:250,friction:30}}})),u.current=[i,c]}),[r,o,d,t.length]),f=Object(h.useRef)(0);Object(h.useEffect)((function(){j(n*z,f.current)}),[n,j]);var b=Object(h.useCallback)((function(e){f.current=e,i(e)}),[i]);return Object(h.useEffect)((function(){var e=setInterval(Object(x.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:b(1);case 1:case"end":return e.stop()}}),e)}))),7e3);return function(){clearInterval(e)}}),[b,n]),Object(w.jsxs)(y,{children:[Object(w.jsx)(I,{onClick:function(){return b(-1)},children:Object(w.jsx)(O.o,{width:"16px",height:"16px"})}),Object(w.jsx)(C,{children:s.map((function(e,n){var i=e.x;return Object(w.jsx)(k,{style:{x:i},children:t[n]},n)}))}),Object(w.jsx)(I,{onClick:function(){return b(1)},children:Object(w.jsx)(O.p,{width:"16px",height:"16px"})})]})},T=function(e){var t=e.children;return Object(w.jsx)(S,{activeIndex:0,toggleNextSlide:function(){},children:[t]})},H=n(23),P=n(10),F=n(297),E=n(186),N=n(189),M=n(809),B=o.default.div.withConfig({componentId:"sc-1j367rv-0"})(["width:100%;position:relative;border-radius:21px;cursor:pointer;border:1px solid transparent;transition-property:border-color;transition-duration:",";transition-timing-function:",";:hover{border:1px solid ",";}::after{content:'';opacity:0;position:absolute;top:0;left:0;right:0;bottom:0;border-radius:21px;z-index:-1;box-shadow:",";transition-property:opacity;transition-duration:",";transition-timing-function:",";}:hover::after{opacity:1;}"],(function(e){return e.theme.transition.duration.fast}),(function(e){return e.theme.transition.timing.inOut}),(function(e){return e.theme.backgroundOutline}),(function(e){return e.theme.deepShadow}),(function(e){return e.theme.transition.duration.fast}),(function(e){return e.theme.transition.timing.inOut})),D=o.default.div.withConfig({componentId:"sc-1j367rv-1"})(["position:relative;background-image:",";background-size:cover;background-position:center;"],(function(e){var t=e.src;return"url(".concat(t,")")})),L=o.default.div.withConfig({componentId:"sc-1j367rv-2"})(["position:relative;animation:"," 1.5s infinite;animation-fill-mode:both;background:linear-gradient( to left,"," 25%,"," 50%,"," 75% );will-change:background-position;background-size:400%;"],E.c,(function(e){return e.theme.backgroundInteractive}),(function(e){return e.theme.backgroundOutline}),(function(e){return e.theme.backgroundInteractive})),A=o.default.div.withConfig({componentId:"sc-1j367rv-3"})(["position:relative;display:flex;flex:1;align-items:center;flex-direction:column;gap:8px;height:202px;justify-content:center;padding:0 40px;z-index:1;"]),R=o.default.div.withConfig({componentId:"sc-1j367rv-4"})(["display:inline;vertical-align:text-bottom;margin-left:2px;"]),U=o.default.div.withConfig({componentId:"sc-1j367rv-5"})(["display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-line-clamp:2;-webkit-box-orient:vertical;text-align:center;max-height:56px;"]),V=Object(o.default)(N.a).withConfig({componentId:"sc-1j367rv-6"})(["width:50%;"]),q=o.default.div.withConfig({componentId:"sc-1j367rv-7"})(["background:linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,0.6) 100%,rgba(0,0,0,0.08));bottom:0px;left:0px;position:absolute;right:0px;top:0px;z-index:0;@supports (-moz-appearance:none){bottom:-1px;}"]),_=o.default.img.withConfig({componentId:"sc-1j367rv-8"})(["width:86px;height:86px;background:",";border:2px solid ",";border-radius:100px;"],(function(e){return e.theme.accentTextLightPrimary}),(function(e){return e.theme.accentTextLightPrimary})),G=o.default.div.withConfig({componentId:"sc-1j367rv-9"})(["width:86px;height:86px;border-radius:100px;animation:"," 1.5s infinite;animation-fill-mode:both;background:linear-gradient( to left,"," 25%,"," 50%,"," 75% );will-change:background-position;background-size:400%;"],E.c,(function(e){return e.theme.backgroundInteractive}),(function(e){return e.theme.backgroundOutline}),(function(e){return e.theme.backgroundInteractive})),W=Object(o.default)(N.a).withConfig({componentId:"sc-1j367rv-10"})(["width:50px;"]),Y=o.default.div.withConfig({componentId:"sc-1j367rv-11"})(["display:flex;align-items:center;gap:6px;"]),X=o.default.div.withConfig({componentId:"sc-1j367rv-12"})([""]),Q=o.default.div.withConfig({componentId:"sc-1j367rv-13"})(["display:grid;flex:1;gap:8px;grid-template-columns:auto auto auto;padding:16px 16px 20px;"]),Z=o.default.img.withConfig({componentId:"sc-1j367rv-14"})(["width:20px;height:20px;"]),J=o.default.div.withConfig({componentId:"sc-1j367rv-15"})(["display:flex;flex-direction:column;background-color:",";border:1px solid ",";border-radius:20px;overflow:hidden;height:100%;",":nth-child(3n-1),",":nth-child(3n-1){justify-self:center;}",":nth-child(3n),",":nth-child(3n){justify-self:right;}@media (max-width:","px) or ((min-width:","px) and (max-width:880px)){","{display:none;}","{justify-self:left !important;}","{padding:0 20px;}}"],(function(e){return e.theme.backgroundSurface}),(function(e){return e.theme.backgroundOutline}),Y,W,Y,W,(function(e){return e.theme.breakpoint.xs}),(function(e){return e.theme.breakpoint.sm}),X,Y,A),K=function(e){var t=e.marketplace,n=e.floorInEth,i=e.listings;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(Y,{children:[Object(w.jsx)(Z,{src:"/nft/svgs/marketplaces/".concat(t.toLowerCase(),"-grey.svg"),alt:"".concat(t," icon")}),Object(w.jsx)(X,{children:Object(w.jsx)(M.a.BodySmall,{color:"textSecondary",children:t})})]}),Object(w.jsx)(Y,{children:Object(w.jsx)(M.a.BodySmall,{color:"textSecondary",children:Number(n)>0?"".concat(Object(F.d)(n,F.a.NFTTokenFloorPriceTrailingZeros)," ETH"):"-"})}),Object(w.jsx)(Y,{children:Object(w.jsx)(M.a.BodySmall,{color:"textSecondary",children:Number(i)>0?i:"None"})})]})},$=[u.g.Opensea,u.g.X2Y2,u.g.LooksRare],ee=(i={},Object(P.a)(i,u.g.Opensea,"OpenSea"),Object(P.a)(i,u.g.X2Y2,"X2Y2"),Object(P.a)(i,u.g.LooksRare,"LooksRare"),i),te=function(e){var t,n=e.collection,i=e.onClick,r=Object(s.a)(n.address);return Object(w.jsx)(B,{children:Object(w.jsxs)(J,{onClick:i,children:[Object(w.jsx)(re,{collection:n}),Object(w.jsx)(Q,{children:Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(Y,{children:[Object(w.jsx)(Z,{src:"/nft/svgs/marketplaces/uniswap-magenta.svg",alt:"Uniswap icon"}),Object(w.jsx)(X,{children:Object(w.jsx)(M.a.SubHeaderSmall,{color:"userThemeColor",children:"Uniswap"})})]}),Object(w.jsx)(Y,{children:Object(w.jsxs)(M.a.SubHeaderSmall,{color:"userThemeColor",children:[Object(p.p)(n.floor.toString())," ETH Floor"]})}),Object(w.jsx)(Y,{children:Object(w.jsxs)(M.a.SubHeaderSmall,{color:"userThemeColor",children:[null===(t=r.marketplaceCount)||void 0===t?void 0:t.reduce((function(e,t){return e+t.count}),0)," Listings"]})}),$.map((function(e){var t,i=null===(t=r.marketplaceCount)||void 0===t?void 0:t.find((function(t){return t.marketplace===e}));return i?Object(w.jsx)(K,{marketplace:ee[e],listings:i.count,floorInEth:i.floorPrice},"CarouselCard-key-".concat(n.address,"-").concat(i.marketplace)):null}))]})})]})})},ne=function(){return Object(w.jsx)(w.Fragment,{children:Object(H.a)(Array(12)).map((function(e){return Object(w.jsx)(W,{},e)}))})},ie=Object(o.default)(M.a.MediumHeader).withConfig({componentId:"sc-1j367rv-16"})(["display:inline;vertical-align:text-bottom;line-height:28px;"]),re=function(e){var t=e.collection;return Object(w.jsxs)(D,{src:t.bannerImageUrl,children:[Object(w.jsxs)(A,{children:[Object(w.jsx)(_,{src:t.imageUrl}),Object(w.jsxs)(U,{children:[Object(w.jsx)(ie,{color:"accentTextLightPrimary",fontWeight:"500",children:t.name}),t.isVerified&&Object(w.jsx)(R,{children:Object(w.jsx)(O.Z,{width:"24px",height:"24px"})})]})]}),Object(w.jsx)(q,{})]})},ce=function(e){var t=e.collection;return Object(w.jsx)(B,{children:Object(w.jsxs)(J,{children:[t?Object(w.jsx)(re,{collection:t}):Object(w.jsxs)(L,{children:[Object(w.jsxs)(A,{children:[Object(w.jsx)(G,{}),Object(w.jsx)(V,{})]}),Object(w.jsx)(q,{})]}),Object(w.jsx)(Q,{children:Object(w.jsx)(ne,{})})]})})},oe=o.default.div.withConfig({componentId:"sc-1cwmkpz-0"})(["display:flex;justify-content:center;width:100%;padding-top:22px;position:relative;@media only screen and (min-width:","){padding:32px 16px;}"],(function(e){var t=e.theme;return"".concat(t.breakpoint.sm,"px")})),ae=o.default.div.withConfig({componentId:"sc-1cwmkpz-1"})(["position:absolute;top:-96px;left:0;right:0;bottom:0;"]),le=Object(o.default)(ae).withConfig({componentId:"sc-1cwmkpz-2"})(["transform:translate3d(0,0,0) scaleY(1.1);background-image:",";filter:blur(62px);opacity:",";"],(function(e){return"url(".concat(e.backgroundImage,")")}),(function(e){return e.theme.darkMode?.3:.2})),se=Object(o.default)(ae).withConfig({componentId:"sc-1cwmkpz-3"})(["background:",";"],(function(e){var t=e.theme;return"linear-gradient(".concat(Object(b.a)(10,t.userThemeColor),", transparent)")})),de=o.default.div.withConfig({componentId:"sc-1cwmkpz-4"})(["display:flex;flex-direction:row;width:100%;height:100%;gap:36px;max-width:1200px;justify-content:space-between;z-index:2;@media only screen and (max-width:","){flex-direction:column;height:100%;gap:14px;margin-top:4px;margin-bottom:6px;}"],(function(e){var t=e.theme;return"".concat(t.breakpoint.sm,"px")})),ue=o.default.div.withConfig({componentId:"sc-1cwmkpz-5"})(["display:flex;max-width:500px;font-weight:500;font-size:72px;line-height:88px;align-self:center;flex-shrink:0;padding-bottom:32px;color:",";@media only screen and (max-width:","){font-size:48px;line-height:67px;}@media only screen and (max-width:","){font-size:36px;line-height:50px;}@media only screen and (max-width:","){line-height:43px;text-align:center;padding-bottom:16px;br{display:none;}}@media only screen and (max-width:550px){font-size:28px;line-height:34px;padding-bottom:0;br{display:unset;}}"],(function(e){return e.theme.textPrimary}),(function(e){var t=e.theme;return"".concat(t.breakpoint.lg,"px")}),(function(e){var t=e.theme;return"".concat(t.breakpoint.md,"px")}),(function(e){var t=e.theme;return"".concat(t.breakpoint.sm,"px")})),pe=["0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb"],he=function(){var e=Object(f.g)(),t=Object(j.useQuery)(["trendingCollections"],(function(){return Object(d.g)({volumeType:"eth",timePeriod:u.j.OneDay,size:5+pe.length})}),{refetchOnReconnect:!1,refetchOnWindowFocus:!1,refetchOnMount:!1}).data,n=Object(h.useMemo)((function(){return null===t||void 0===t?void 0:t.filter((function(e){return!pe.includes(e.address)})).slice(0,5)}),[t]),i=Object(h.useMemo)((function(){return null===n||void 0===n?void 0:n.map((function(e){return e.address}))}),[n]);Object(s.b)(i);var r=Object(h.useState)(0),o=Object(c.a)(r,2),a=o[0],l=o[1],b=Object(h.useCallback)((function(e){n&&l((function(t){return Object(p.f)(t+e,n.length)}))}),[n]),m=null===n||void 0===n?void 0:n[a];return Object(w.jsxs)(oe,{children:[m?m.bannerImageUrl?Object(w.jsx)(le,{backgroundImage:m.bannerImageUrl}):Object(w.jsx)(se,{}):null,Object(w.jsxs)(de,{children:[Object(w.jsxs)(ue,{children:["Better prices. ",Object(w.jsx)("br",{}),"More listings."]}),n?Object(w.jsx)(S,{activeIndex:a,toggleNextSlide:b,children:n.map((function(t){return Object(w.jsx)(h.Suspense,{fallback:Object(w.jsx)(ce,{collection:t}),children:Object(w.jsx)(te,{collection:t,onClick:function(){return e("/nfts/collection/".concat(t.address))}},t.address)},t.address)}))}):Object(w.jsx)(T,{children:Object(w.jsx)(ce,{})})]})]})},je=n(5),fe=n(291),be=n(9),me=n(63),ge=n(395),xe=n(123),Oe=n(35),ve=n(522),we=(n(169),n(331),o.default.div.withConfig({componentId:"sc-1qdt28z-0"})(["overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"])),ye=Object(o.default)(we).withConfig({componentId:"sc-1qdt28z-1"})(["display:flex;padding:14px 0px 14px 8px;align-items:center;"]),Ce=Object(o.default)(we).withConfig({componentId:"sc-1qdt28z-2"})(["margin-left:8px;"]),ke=Object(o.default)(be.u.SubHeader).withConfig({componentId:"sc-1qdt28z-3"})(["overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"]),Ie=Object(o.default)(be.u.SubHeaderSmall).withConfig({componentId:"sc-1qdt28z-4"})(["color:",";overflow:hidden;white-space:nowrap;text-overflow:ellipsis;"],(function(e){var t=e.theme;return"".concat(t.textPrimary)})),ze=o.default.div.withConfig({componentId:"sc-1qdt28z-5"})(["height:36px;width:36px;border-radius:36px;background:",";background-size:cover;background-position:center;flex-shrink:0;"],(function(e){var t=e.src,n=e.theme;return t?"url(".concat(t,")"):n.backgroundModule})),Se=o.default.div.withConfig({componentId:"sc-1qdt28z-6"})(["display:flex;color:",";justify-content:end;align-items:center;gap:2px;"],(function(e){var t=e.theme;return e.change>=0?t.accentSuccess:t.accentFailure})),Te=o.default.div.withConfig({componentId:"sc-1qdt28z-7"})(["display:flex;justify-content:end;"]),He=function(e){var t=e.value,n=Object(Oe.j)();return Object(w.jsxs)(ye,{children:[Object(w.jsx)(ze,{src:t.logo}),Object(w.jsx)(Ce,{children:n?Object(w.jsx)(Ie,{children:t.name}):Object(w.jsx)(ke,{children:t.name})}),t.isVerified&&Object(w.jsx)("span",{className:"rgw6ezjj rgw6ez41j rgw6ez2kj rgw6ez17v rgw6ez117 rgw6ez42d",children:Object(w.jsx)(O.Z,{})})]})},Pe=function(e){var t=e.value;return Object(w.jsx)("span",{children:t.value?Object(p.K)(t.value):"-"})},Fe=function(e,t,n,i){return e===u.e.ETH?n:i&&n?i*(t?parseFloat(Object(xe.formatEther)(n)):n):void 0},Ee=function(e){var t=e.value,n=e.denomination,i=e.usdPrice,r=Fe(n,!0,t,i),c=r?n===u.e.ETH?Object(ve.f)(r.toString(),!0)+" ETH":Object(ve.a)(r,!0,!1,!0):"-",o=Object(Oe.j)()?be.u.BodySmall:be.u.BodyPrimary;return Object(w.jsx)(Te,{children:Object(w.jsx)(o,{children:t?c:"-"})})},Ne=function(e){var t=e.value;return Object(w.jsx)(be.u.BodyPrimary,{children:t})},Me=function(e){var t=e.value,n=e.denomination,i=e.usdPrice,r=Fe(n,!1,t,i),c=r?n===u.e.ETH?Object(ve.a)(r.toString(),!1,!1,!0)+" ETH":Object(ve.a)(r,!0,!1,!0):"-";return Object(w.jsx)(Te,{children:Object(w.jsx)(be.u.BodyPrimary,{children:t?c:"-"})})},Be=function(e){var t=e.change,n=e.children,i=Object(Oe.j)()?be.u.Caption:be.u.BodyPrimary;return Object(w.jsxs)(Se,{change:null!==t&&void 0!==t?t:0,children:[!t||t>0?Object(w.jsx)(O.S,{width:"20px",height:"20px"}):Object(w.jsx)(O.R,{width:"20px",height:"20px"}),Object(w.jsx)(i,{color:"currentColor",children:n||"".concat(t?Math.abs(Math.round(t)):0,"%")})]})},De=n(80),Le=n(16),Ae=n(1041),Re=n(2035),Ue=n(26),Ve=(n(2037),"_1mor7vea rgw6ez4lp rgw6ez151 rgw6ez77v rgw6ez76j"),qe="rgw6ezpp rgw6ez4x1 rgw6ez7g3 rgw6ez773",_e="_1mor7ved rgw6ezcp rgw6ezav rgw6ez7lb rgw6ez4b1 rgw6ez2l7 rgw6ez24p",Ge=["columns","data","smallHiddenColumns","mediumHiddenColumns","largeHiddenColumns"],We=["headerGroups","visibleColumns"],Ye=o.default.div.withConfig({componentId:"sc-iwpsza-0"})(["display:flex;align-items:center;padding-left:24px;gap:12px;@media only screen and (max-width:","){padding-left:8px;}"],(function(e){var t=e.theme;return"".concat(t.breakpoint.sm,"px")})),Xe=o.default.tr.withConfig({componentId:"sc-iwpsza-1"})(["cursor:pointer;:hover{background:",";}:active{background:",";}"],(function(e){return e.theme.stateOverlayHover}),(function(e){return e.theme.stateOverlayPressed})),Qe=o.default.tr.withConfig({componentId:"sc-iwpsza-2"})(["height:80px;"]),Ze=o.default.th.withConfig({componentId:"sc-iwpsza-3"})(["",":hover{","}:active{","}"],(function(e){return!e.disabled&&"cursor: pointer;"}),(function(e){var t=e.theme;return!e.disabled&&"opacity: ".concat(t.opacity.hover,";")}),(function(e){var t=e.theme;return!e.disabled&&"opacity: ".concat(t.opacity.click,";")})),Je=o.default.div.withConfig({componentId:"sc-iwpsza-4"})(["display:flex;width:100%;justify-content:end;align-items:center;"]),Ke=o.default.div.withConfig({componentId:"sc-iwpsza-5"})(["display:flex;margin-left:24px;gap:8px;align-items:center;"]),$e=Object(o.default)(N.a).withConfig({componentId:"sc-iwpsza-6"})(["width:36px;height:36px;border-radius:36px;"]),et=Object(o.default)(N.a).withConfig({componentId:"sc-iwpsza-7"})(["width:8px;height:16px;margin-right:12px;"]);function tt(e){var t=e.columns,n=e.data,i=e.smallHiddenColumns,c=e.mediumHiddenColumns,s=e.largeHiddenColumns,d=Object(De.a)(e,Ge),u=Object(o.useTheme)(),p=Object(Le.useWeb3React)().chainId,j=Object(Ae.a)().width,b=Object(Oe.j)(),m=Object(Re.useTable)(Object(je.a)({columns:t,data:n,initialState:{sortBy:[{desc:!0,id:r.Volume}]}},d),Re.useSortBy),g=m.getTableProps,x=m.getTableBodyProps,v=m.headerGroups,y=m.rows,C=m.prepareRow,k=m.setHiddenColumns,I=m.visibleColumns,z=Object(f.g)();return Object(h.useEffect)((function(){j&&(j<=u.breakpoint.sm?k(i):j<=u.breakpoint.md?k(c):j<=u.breakpoint.lg?k(s):k([]))}),[j,k,t,i,c,s,u.breakpoint]),0===n.length?Object(w.jsx)(nt,Object(je.a)({headerGroups:v,visibleColumns:I},g())):Object(w.jsx)(be.l,{children:Object(w.jsxs)("table",Object(je.a)(Object(je.a)({},g()),{},{className:Ve,children:[Object(w.jsx)("thead",{className:qe,children:v.map((function(e){return Object(h.createElement)("tr",Object(je.a)(Object(je.a)({},e.getHeaderGroupProps()),{},{key:e.id}),e.headers.map((function(e,t){return Object(h.createElement)(Ze,Object(je.a)(Object(je.a)({className:_e},e.getHeaderProps(e.getSortByToggleProps())),{},{style:{textAlign:0===t?"left":"right",paddingLeft:0===t?b?"16px":"52px":0},disabled:e.disableSortBy,key:t}),Object(w.jsx)(Ue.b,{as:"span",color:"accentAction",position:"relative",children:e.isSorted?e.isSortedDesc?Object(w.jsx)(O.f,{style:{transform:"rotate(90deg)",position:"absolute"}}):Object(w.jsx)(O.f,{style:{transform:"rotate(-90deg)",position:"absolute"}}):""}),Object(w.jsx)(Ue.b,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")}))})))}))}),Object(w.jsx)("tbody",Object(je.a)(Object(je.a)({},x()),{},{children:y.map((function(e,t){return C(e),Object(w.jsx)(a.TraceEvent,{events:[l.BrowserEvent.onClick],name:l.EventName.NFT_TRENDING_ROW_SELECTED,properties:{collection_address:e.original.collection.address,chain_id:p},element:l.ElementName.NFT_TRENDING_ROW,children:Object(h.createElement)(Xe,Object(je.a)(Object(je.a)({},e.getRowProps()),{},{key:e.id,onClick:function(){return z("/nfts/collection/".concat(e.original.collection.address))},"data-testid":"nft-trending-collection"}),e.cells.map((function(e,n){return Object(h.createElement)("td",Object(je.a)(Object(je.a)({className:"_1mor7vef rgw6ezcp rgw6ezb1 rgw6ez7lf rgw6ez2kj rgw6ez241 rgw6ez1h7 rgw6ez42j rgw6ez45d"},e.getCellProps()),{},{key:n,style:{maxWidth:0===n?b?"240px":"360px":"160px"}}),0===n?Object(w.jsxs)(Ye,{children:[!b&&Object(w.jsx)(be.u.BodySecondary,{fontSize:"14px",lineHeight:"20px",children:t+1}),e.render("Cell")]}):e.render("Cell"))})))},t)}))}))]}))})}function nt(e){var t=e.headerGroups,n=e.visibleColumns,i=Object(De.a)(e,We);return Object(w.jsx)(be.l,{children:Object(w.jsxs)("table",Object(je.a)(Object(je.a)({},i),{},{className:Ve,children:[Object(w.jsx)("thead",{className:qe,children:t.map((function(e){return Object(h.createElement)("tr",Object(je.a)(Object(je.a)({},e.getHeaderGroupProps()),{},{key:e.id}),e.headers.map((function(e,t){return Object(h.createElement)(Ze,Object(je.a)(Object(je.a)({className:_e},e.getHeaderProps(e.getSortByToggleProps())),{},{style:{textAlign:0===t?"left":"right",paddingLeft:0===t?"52px":0},disabled:0===t,key:t}),Object(w.jsx)(Ue.b,{as:"span",color:"accentAction",position:"relative",children:e.isSorted?e.isSortedDesc?Object(w.jsx)(O.f,{style:{transform:"rotate(90deg)",position:"absolute"}}):Object(w.jsx)(O.f,{style:{transform:"rotate(-90deg)",position:"absolute"}}):""}),Object(w.jsx)(Ue.b,{as:"span",paddingLeft:e.isSorted?"18":"0",children:e.render("Header")}))})))}))}),Object(w.jsx)("tbody",Object(je.a)(Object(je.a)({},i),{},{children:Object(H.a)(Array(10)).map((function(e,t){return Object(w.jsx)(Qe,{children:Object(H.a)(Array(n.length)).map((function(e,t){return Object(w.jsx)("td",{className:"_1mor7veh rgw6ezcp rgw6ezb1 rgw6ez7lf rgw6ez2kv rgw6ez24d rgw6ez1h7 rgw6ez42j rgw6ez45d",children:0===t?Object(w.jsxs)(Ke,{children:[Object(w.jsx)(et,{}),Object(w.jsx)($e,{}),Object(w.jsx)(N.a,{})]}):Object(w.jsx)(Je,{children:Object(w.jsx)(N.a,{})})},t)}))},t)}))}))]}))})}!function(e){e.Volume="Volume",e.VolumeChange="Volume change",e.Floor="Floor",e.FloorChange="Floor change",e.Sales="Sales",e.Items="Items",e.Owners="Owners"}(r||(r={}));var it=function(e,t){return Math.round(1e5*e)>=Math.round(1e5*t)?1:-1},rt=function(e){var t=e.data,n=e.timePeriod,i=Object(h.useMemo)((function(){return function(e,t){var n,i,r=me.a.from(null!==(n=e.original.floor.value)&&void 0!==n?n:0),c=me.a.from(null!==(i=t.original.floor.value)&&void 0!==i?i:0);return r.gte(c)?1:-1}}),[]),c=Object(h.useMemo)((function(){return function(e,t){return it(e.original.floor.change,t.original.floor.change)}}),[]),o=Object(h.useMemo)((function(){return function(e,t){return it(e.original.volume.value,t.original.volume.value)}}),[]),a=Object(h.useMemo)((function(){return function(e,t){return it(e.original.volume.change,t.original.volume.change)}}),[]),l=Object(h.useMemo)((function(){return[{Header:"Collection name",accessor:"collection",Cell:He,disableSortBy:!0},{id:r.Floor,Header:r.Floor,accessor:function(e){return e.floor.value},sortType:i,Cell:function(e){return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(Ee,{value:e.row.original.floor.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice}),n!==u.j.AllTime&&Object(w.jsx)(ge.o,{children:Object(w.jsx)(Be,{change:e.row.original.floor.change})})]})}},{id:r.FloorChange,Header:r.FloorChange,accessor:function(e){return e.floor.value},sortDescFirst:!0,disableSortBy:n===u.j.AllTime,sortType:c,Cell:function(e){return n===u.j.AllTime?Object(w.jsx)(Ne,{value:"-"}):Object(w.jsx)(Be,{change:e.row.original.floor.change})}},{id:r.Volume,Header:r.Volume,accessor:function(e){return e.volume.value},sortDescFirst:!0,sortType:o,Cell:function(e){return Object(w.jsx)(Me,{value:e.row.original.volume.value,denomination:e.row.original.denomination,usdPrice:e.row.original.usdPrice})}},{id:r.VolumeChange,Header:r.VolumeChange,accessor:function(e){return e.volume.value},sortDescFirst:!0,disableSortBy:n===u.j.AllTime,sortType:a,Cell:function(e){var t=e.row.original.volume.change;return n===u.j.AllTime?Object(w.jsx)(Ne,{value:"-"}):t>=9999?Object(w.jsxs)(Be,{change:t,children:[">".concat(9999),"%"]}):Object(w.jsx)(Be,{change:t})}},{id:r.Items,Header:r.Items,accessor:"totalSupply",sortDescFirst:!0,Cell:function(e){return Object(w.jsx)(Pe,{value:{value:e.row.original.totalSupply}})}},{Header:r.Owners,accessor:function(e){return e.owners.value},sortDescFirst:!0,Cell:function(e){return Object(w.jsx)(Pe,{value:e.row.original.owners})}}]}),[c,i,a,o,n]);return Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(tt,{smallHiddenColumns:[r.Items,r.FloorChange,r.Volume,r.VolumeChange,r.Owners],mediumHiddenColumns:[r.Items,r.FloorChange,r.VolumeChange,r.Owners],largeHiddenColumns:[r.Items,r.Owners],data:t,columns:l})})},ct=[{label:"1D",value:u.j.OneDay},{label:"1W",value:u.j.SevenDays},{label:"1M",value:u.j.ThirtyDays},{label:"All",value:u.j.AllTime}],ot=o.default.div.withConfig({componentId:"sc-1dnk851-0"})(["display:flex;flex-direction:column;width:100%;max-width:1200px;padding:0 16px;"]),at=o.default.div.withConfig({componentId:"sc-1dnk851-1"})(["color:",";font-size:36px;line-height:44px;weight:500;@media only screen and (max-width:","){font-size:20px;line-height:28px;}"],(function(e){return e.theme.textPrimary}),(function(e){var t=e.theme;return"".concat(t.breakpoint.sm,"px")})),lt=o.default.div.withConfig({componentId:"sc-1dnk851-2"})(["display:flex;justify-content:space-between;margin-top:36px;margin-bottom:20px;@media only screen and (max-width:","){margin-bottom:16px;margin-top:16px;}"],(function(e){var t=e.theme;return"".concat(t.breakpoint.sm,"px")})),st=o.default.div.withConfig({componentId:"sc-1dnk851-3"})(["display:flex;border:1px solid ",";border-radius:16px;padding:4px;"],(function(e){return e.theme.backgroundOutline})),dt=o.default.div.withConfig({componentId:"sc-1dnk851-4"})(["padding:8px 12px;border-radius:12px;background:",";cursor:pointer;",""],(function(e){var t=e.active,n=e.theme;return t?n.backgroundInteractive:"none"}),fe.a),ut=Object(o.default)(be.u.SubHeader).withConfig({componentId:"sc-1dnk851-5"})(["color:",";"],(function(e){var t=e.theme;return e.active?t.textPrimary:t.textSecondary})),pt=function(){var e=Object(h.useState)(u.j.OneDay),t=Object(c.a)(e,2),n=t[0],i=t[1],r=Object(h.useState)(!0),o=Object(c.a)(r,2),a=o[0],l=o[1],s=Object(j.useQuery)(["trendingCollections",n],(function(){return Object(d.g)({volumeType:"eth",timePeriod:n,size:100})}),{refetchOnReconnect:!1,refetchOnWindowFocus:!1,refetchOnMount:!1,refetchInterval:5e3}),f=s.isSuccess,b=s.data,m=Object(j.useQuery)(["fetchPrice",{}],(function(){return Object(p.k)()}),{refetchOnReconnect:!1,refetchOnWindowFocus:!1,refetchOnMount:!1,refetchInterval:6e4}).data,g=Object(h.useMemo)((function(){return f&&b?b.map((function(e){return Object(je.a)(Object(je.a)({},e),{},{collection:{name:e.name,logo:e.imageUrl,address:e.address,isVerified:e.isVerified},volume:{value:e.volume,change:e.volumeChange,type:"eth"},floor:{value:e.floor,change:e.floorChange},owners:{value:e.owners,change:e.ownersChange},sales:e.sales,totalSupply:e.totalSupply,denomination:a?u.e.ETH:u.e.USD,usdPrice:m})})):[]}),[b,f,a,m]);return Object(w.jsxs)(ot,{children:[Object(w.jsx)(at,{children:"Trending NFT collections"}),Object(w.jsxs)(lt,{children:[Object(w.jsx)(st,{children:ct.map((function(e){return Object(w.jsx)(dt,{active:e.value===n,onClick:function(){return i(e.value)},children:Object(w.jsx)(ut,{lineHeight:"20px",active:e.value===n,children:e.label})},e.value)}))}),Object(w.jsxs)(st,{onClick:function(){return l(!a)},children:[Object(w.jsx)(dt,{active:a,children:Object(w.jsx)(ut,{lineHeight:"20px",active:a,children:"ETH"})}),Object(w.jsx)(dt,{active:!a,children:Object(w.jsx)(ut,{lineHeight:"20px",active:!a,children:"USD"})})]})]}),Object(w.jsx)(rt,{data:g,timePeriod:n})]})},ht=n(178),jt=n(1864),ft=o.default.div.withConfig({componentId:"sc-1z08hc2-0"})(["position:relative;display:flex;padding:30% 24px 24px;overflow:hidden;height:fit-content;user-select:none;"]),bt=Object(o.default)(jt.a).withConfig({componentId:"sc-1z08hc2-1"})(["position:absolute;top:20px;right:24px;cursor:pointer;"]),mt=o.default.img.withConfig({componentId:"sc-1z08hc2-2"})(["position:absolute;top:0;left:0;width:100%;object-fit:contain;"]),gt=o.default.div.withConfig({componentId:"sc-1z08hc2-3"})(["display:flex;flex-direction:column;z-index:1;gap:16px;"]),xt=Object(o.default)(ge.j).withConfig({componentId:"sc-1z08hc2-4"})(["color:",";stroke:",";"],(function(e){return e.theme.accentActive}),(function(e){return e.theme.accentActive})),Ot=Object(o.default)(M.a.LargeHeader).withConfig({componentId:"sc-1z08hc2-5"})(["@media (max-width:","px){font-size:20px !important;}"],(function(e){return e.theme.breakpoint.xl})),vt=Object(o.default)(M.a.BodySecondary).withConfig({componentId:"sc-1z08hc2-6"})(["line-height:24px;@media (max-width:","px){font-size:14px !important;line-height:20px;}"],(function(e){return e.theme.breakpoint.xl})),wt={dark:{src:n(2038).default,srcSet:"\n      ".concat(n(2039).default," 2x,\n      ").concat(n(2040).default," 3x,\n    ")},light:{src:n(2041).default,srcSet:"\n      ".concat(n(2042).default," 2x,\n      ").concat(n(2043).default," 3x,\n    ")}};function yt(e){var t=e.onDismissed,n=Object(h.useState)(!0),i=Object(c.a)(n,2),r=i[0],a=i[1],l=function(){a(!1),setTimeout((function(){return t()}))},s=Object(o.useTheme)();return Object(w.jsx)(ht.a,{isOpen:r,onSwipe:l,maxWidth:720,isBottomSheet:!1,children:Object(w.jsxs)(ft,{children:[Object(w.jsx)(mt,Object(je.a)(Object(je.a)({},s.darkMode?wt.dark:wt.light),{},{alt:"Welcome modal background",draggable:!1})),Object(w.jsxs)(gt,{children:[Object(w.jsx)(Ot,{children:"Introducing NFTs on Uniswap"}),Object(w.jsxs)(vt,{children:["You can now buy and sell NFTs on Uniswap across marketplaces. Trade here to find more listings and better prices. ",Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),"NFTs on Uniswap replaces Genie, which was"," ",Object(w.jsxs)(xt,{href:"https://uniswap.org/blog/genie",title:"Uniswap Labs has acquired Genie",children:["acquired"," "]})," ","by Uniswap Labs earlier this year. If you have used Genie in the past, you may be eligible for a USDC airdrop."," ",Object(w.jsx)(xt,{href:"https://uniswap.org/blog/uniswap-nft-aggregator-announcement",title:"Uniswap NFT aggregator announcement",children:"Learn more."})]}),Object(w.jsx)(bt,{"data-testid":"nft-intro-modal",size:24,onClick:l})]})]})})}var Ct=n(65),kt=o.default.div.withConfig({componentId:"sc-j2zxi9-0"})(["display:flex;flex-direction:column;align-items:center;width:100%;@media only screen and (max-width:","){gap:16px;}@media only screen and (max-width:","){gap:0px;}"],(function(e){var t=e.theme;return"".concat(t.breakpoint.md,"px")}),(function(e){var t=e.theme;return"".concat(t.breakpoint.sm,"px")}));t.default=function(){var e=Object(Oe.f)((function(e){return e.setBagExpanded})),t=Object(Ct.f)(),n=Object(c.a)(t,2),i=n[0],r=n[1];return Object(h.useEffect)((function(){e({bagExpanded:!1,manualClose:!1})}),[]),Object(w.jsx)(w.Fragment,{children:Object(w.jsxs)(a.Trace,{page:l.PageName.NFT_EXPLORE_PAGE,shouldLogImpression:!0,children:[Object(w.jsxs)(kt,{children:[Object(w.jsx)(he,{}),Object(w.jsx)(pt,{})]}),!i&&Object(w.jsx)(yt,{onDismissed:r})]})})}}}]);
//# sourceMappingURL=7.47255a87.chunk.js.map