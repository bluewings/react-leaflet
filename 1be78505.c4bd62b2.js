(window.webpackJsonp=window.webpackJsonp||[]).push([[7,34],{102:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(104),c=t(22),u=t(27),i=t(123),l=t(3),s=t(107),f=t(106),d=t(117),p=t(139),m=t(140),b=t(138),v=t(111),y=t(112),O=t(152);var h=e=>a.a.createElement("svg",Object(l.a)({width:"20",height:"20",role:"img"},e),a.a.createElement("g",{fill:"#7a7a7a"},a.a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"}))),j=t(141),C=t(70),E=t.n(C);const g=(e,n)=>"link"===e.type?Object(f.isSamePath)(e.href,n):"category"===e.type&&e.items.some((e=>g(e,n)));function w({item:e,onItemClick:n,collapsible:t,activePath:o,...c}){const{items:u,label:i}=e,f=g(e,o),d=function(e){const n=Object(r.useRef)(e);return Object(r.useEffect)((()=>{n.current=e}),[e]),n.current}(f),[p,m]=Object(r.useState)((()=>!!t&&(!f&&e.collapsed))),b=Object(r.useRef)(null),[v,y]=Object(r.useState)(void 0),O=(e=!0)=>{var n;y(e?`${null===(n=b.current)||void 0===n?void 0:n.scrollHeight}px`:void 0)};Object(r.useEffect)((()=>{f&&!d&&p&&m(!1)}),[f,d,p]);const h=Object(r.useCallback)((e=>{e.preventDefault(),v||O(),setTimeout((()=>m((e=>!e))),100)}),[v]);return 0===u.length?null:a.a.createElement("li",{className:Object(s.a)("menu__list-item",{"menu__list-item--collapsed":p}),key:i},a.a.createElement("a",Object(l.a)({className:Object(s.a)("menu__link",{"menu__link--sublist":t,"menu__link--active":t&&f,[E.a.menuLinkText]:!t}),onClick:t?h:void 0,href:t?"#!":void 0},c),i),a.a.createElement("ul",{className:"menu__list",ref:b,style:{height:v},onTransitionEnd:()=>{p||O(!1)}},u.map((e=>a.a.createElement(x,{tabIndex:p?"-1":"0",key:e.label,item:e,onItemClick:n,collapsible:t,activePath:o})))))}function k({item:e,onItemClick:n,activePath:t,collapsible:r,...o}){const{href:c,label:u}=e,i=g(e,t);return a.a.createElement("li",{className:"menu__list-item",key:u},a.a.createElement(v.a,Object(l.a)({className:Object(s.a)("menu__link",{"menu__link--active":i}),to:c},Object(y.a)(c)?{isNavLink:!0,exact:!0,onClick:n}:{target:"_blank",rel:"noreferrer noopener"},o),u))}function x(e){switch(e.item.type){case"category":return a.a.createElement(w,e);case"link":default:return a.a.createElement(k,e)}}var P=function({path:e,sidebar:n,sidebarCollapsible:t=!0,onCollapse:o,isHidden:c}){const[u,i]=Object(r.useState)(!1),{navbar:{hideOnScroll:l},hideableSidebar:v}=Object(f.useThemeConfig)(),{isAnnouncementBarClosed:y}=Object(d.a)(),{scrollY:C}=Object(b.a)();Object(p.a)(u);const g=Object(m.a)();return Object(r.useEffect)((()=>{g===m.b.desktop&&i(!1)}),[g]),a.a.createElement("div",{className:Object(s.a)(E.a.sidebar,{[E.a.sidebarWithHideableNavbar]:l,[E.a.sidebarHidden]:c})},l&&a.a.createElement(O.a,{tabIndex:-1,className:E.a.sidebarLogo}),a.a.createElement("div",{className:Object(s.a)("menu","menu--responsive","thin-scrollbar",E.a.menu,{"menu--show":u,[E.a.menuWithAnnouncementBar]:!y&&0===C})},a.a.createElement("button",{"aria-label":u?"Close Menu":"Open Menu","aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:()=>{i(!u)}},u?a.a.createElement("span",{className:Object(s.a)(E.a.sidebarMenuIcon,E.a.sidebarMenuCloseIcon)},"\xd7"):a.a.createElement(j.a,{className:E.a.sidebarMenuIcon,height:24,width:24})),a.a.createElement("ul",{className:"menu__list"},n.map((n=>a.a.createElement(x,{key:n.label,item:n,onItemClick:e=>{e.target.blur(),i(!1)},collapsible:t,activePath:e}))))),v&&a.a.createElement("button",{type:"button",title:"Collapse sidebar","aria-label":"Collapse sidebar",className:Object(s.a)("button button--secondary button--outline",E.a.collapseSidebarButton),onClick:o},a.a.createElement(h,{className:E.a.collapseSidebarButtonIcon})))},L=t(151),N=(t(73),t(74)),S=t.n(N);var I=e=>function({id:n,...t}){const{navbar:{hideOnScroll:r}}=Object(f.useThemeConfig)();return n?a.a.createElement(e,t,a.a.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:Object(s.a)("anchor",{[S.a.enhancedAnchor]:!r}),id:n}),t.children,a.a.createElement("a",{className:"hash-link",href:`#${n}`,title:"Direct link to heading"},"#")):a.a.createElement(e,t)},_=t(75),R=t.n(_);var M={code:e=>{const{children:n}=e;return"string"==typeof n?n.includes("\n")?a.a.createElement(L.a,e):a.a.createElement("code",e):n},a:e=>a.a.createElement(v.a,e),pre:e=>a.a.createElement("div",Object(l.a)({className:R.a.mdxCodeBlock},e)),h1:I("h1"),h2:I("h2"),h3:I("h3"),h4:I("h4"),h5:I("h5"),h6:I("h6")},T=t(135),H=t(109),D=t(76),z=t.n(D);function A({currentDocRoute:e,versionMetadata:n,children:t}){var u,l;const{siteConfig:d,isClient:p}=Object(c.default)(),{pluginId:m,permalinkToSidebar:b,docsSidebars:v,version:y}=n,O=b[e.path],j=v[O],[C,E]=Object(r.useState)(!1),[g,w]=Object(r.useState)(!1),k=Object(r.useCallback)((()=>{g&&w(!1),E(!C)}),[g]);return a.a.createElement(i.a,{key:p,searchMetadatas:{version:y,tag:Object(f.docVersionSearchTag)(m,y)}},a.a.createElement("div",{className:z.a.docPage},j&&a.a.createElement("div",{className:Object(s.a)(z.a.docSidebarContainer,{[z.a.docSidebarContainerHidden]:C}),onTransitionEnd:e=>{e.currentTarget.classList.contains(z.a.docSidebarContainer)&&C&&w(!0)},role:"complementary"},a.a.createElement(P,{key:O,sidebar:j,path:e.path,sidebarCollapsible:null===(u=null===(l=d.themeConfig)||void 0===l?void 0:l.sidebarCollapsible)||void 0===u||u,onCollapse:k,isHidden:g}),g&&a.a.createElement("div",{className:z.a.collapsedDocSidebar,title:"Expand sidebar","aria-label":"Expand sidebar",tabIndex:0,role:"button",onKeyDown:k,onClick:k},a.a.createElement(h,null))),a.a.createElement("main",{className:z.a.docMainContainer},a.a.createElement("div",{className:Object(s.a)("container padding-vert--lg",z.a.docItemWrapper,{[z.a.docItemWrapperEnhanced]:C})},a.a.createElement(o.a,{components:M},t)))))}n.default=function(e){const{route:{routes:n},versionMetadata:t,location:r}=e,o=n.find((e=>Object(H.matchPath)(r.pathname,e)));return o?a.a.createElement(A,{currentDocRoute:o,versionMetadata:t},Object(u.a)(n)):a.a.createElement(T.default,e)}},104:function(e,n,t){"use strict";t.d(n,"a",(function(){return f})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),s=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},f=function(e){var n=s(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},p=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=s(t),p=r,m=f["".concat(c,".").concat(p)]||f[p]||d[p]||o;return t?a.a.createElement(m,u(u({ref:n},l),{},{components:t})):a.a.createElement(m,u({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=p;var u={};for(var i in n)hasOwnProperty.call(n,i)&&(u[i]=n[i]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var l=2;l<o;l++)c[l]=t[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},135:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(123);n.default=function(){return a.a.createElement(o.a,{title:"Page Not Found"},a.a.createElement("main",{className:"container margin-vert--xl"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col col--6 col--offset-3"},a.a.createElement("h1",{className:"hero__title"},"Page Not Found"),a.a.createElement("p",null,"We could not find what you were looking for."),a.a.createElement("p",null,"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))}},150:function(e,n,t){"use strict";var r={};t.r(r),t.d(r,"useAttribution",(function(){return u})),t.d(r,"updateCircle",(function(){return i})),t.d(r,"createContainerComponent",(function(){return m})),t.d(r,"createDivOverlayComponent",(function(){return b})),t.d(r,"createLeafComponent",(function(){return v})),t.d(r,"CONTEXT_VERSION",(function(){return s})),t.d(r,"LeafletContext",(function(){return f})),t.d(r,"LeafletProvider",(function(){return d})),t.d(r,"useLeafletContext",(function(){return p})),t.d(r,"createControlHook",(function(){return y})),t.d(r,"createDivOverlayHook",(function(){return j})),t.d(r,"addClassName",(function(){return g})),t.d(r,"removeClassName",(function(){return w})),t.d(r,"updateClassName",(function(){return k})),t.d(r,"createElementHook",(function(){return x})),t.d(r,"useEventHandlers",(function(){return O})),t.d(r,"createControlComponent",(function(){return I})),t.d(r,"createLayerComponent",(function(){return _})),t.d(r,"createOverlayComponent",(function(){return R})),t.d(r,"createPathComponent",(function(){return M})),t.d(r,"createTileLayerComponent",(function(){return T})),t.d(r,"updateGridLayer",(function(){return H})),t.d(r,"createLayerHook",(function(){return L})),t.d(r,"useLayerLifecycle",(function(){return P})),t.d(r,"updateMediaOverlay",(function(){return D})),t.d(r,"withPane",(function(){return h})),t.d(r,"createPathHook",(function(){return S})),t.d(r,"usePathOptions",(function(){return N}));var a={};t.r(a),t.d(a,"useMap",(function(){return z})),t.d(a,"useMapEvent",(function(){return A})),t.d(a,"useMapEvents",(function(){return B})),t.d(a,"AttributionControl",(function(){return G})),t.d(a,"Circle",(function(){return V})),t.d(a,"CircleMarker",(function(){return W})),t.d(a,"FeatureGroup",(function(){return F})),t.d(a,"GeoJSON",(function(){return U})),t.d(a,"ImageOverlay",(function(){return Z})),t.d(a,"LayerGroup",(function(){return J})),t.d(a,"LayersControl",(function(){return $})),t.d(a,"MapConsumer",(function(){return Y})),t.d(a,"MapContainer",(function(){return K})),t.d(a,"Marker",(function(){return Q})),t.d(a,"Pane",(function(){return te})),t.d(a,"Polygon",(function(){return re})),t.d(a,"Polyline",(function(){return ae})),t.d(a,"Popup",(function(){return oe})),t.d(a,"Rectangle",(function(){return ce})),t.d(a,"ScaleControl",(function(){return ue})),t.d(a,"SVGOverlay",(function(){return se})),t.d(a,"TileLayer",(function(){return fe})),t.d(a,"Tooltip",(function(){return de})),t.d(a,"VideoOverlay",(function(){return pe})),t.d(a,"WMSTileLayer",(function(){return me})),t.d(a,"ZoomControl",(function(){return be}));var o=t(0),c=t.n(o);function u(e,n){var t=Object(o.useRef)(n);Object(o.useEffect)((function(){n!==t.current&&null!=e.attributionControl&&(null!=t.current&&e.attributionControl.removeAttribution(t.current),null!=n&&e.attributionControl.addAttribution(n)),t.current=n}),[e,n])}function i(e,n,t){console.log("update circle",e,n,t),n.center!==t.center&&e.setLatLng(n.center),null!=n.radius&&n.radius!==t.radius&&e.setRadius(n.radius)}var l=t(23),s=1,f=Object(o.createContext)(null),d=f.Provider;function p(){var e=Object(o.useContext)(f);if(null==e)throw new Error("No context provided: useLeafletContext() can only be used in a descendant of <MapContainer>");return e}function m(e){function n(n,t){var r=e(n).current,a=r.instance,u=r.context;return Object(o.useImperativeHandle)(t,(function(){return a})),null==n.children?null:c.a.createElement(d,{value:u},n.children)}return Object(o.forwardRef)(n)}function b(e){function n(n,t){var r=Object(o.useState)(!1),a=r[0],c=r[1],u=e(n,c).current.instance;Object(o.useImperativeHandle)(t,(function(){return u})),Object(o.useEffect)((function(){a&&u.update()}),[u,a,n.children]);var i=u._contentNode;return i?Object(l.createPortal)(n.children,i):null}return Object(o.forwardRef)(n)}function v(e){function n(n,t){var r=e(n).current.instance;return Object(o.useImperativeHandle)(t,(function(){return r})),null}return Object(o.forwardRef)(n)}function y(e){return function(n){var t=p(),r=e(n,t),a=r.current.instance,c=Object(o.useRef)(n.position),u=n.position;return Object(o.useEffect)((function(){return a.addTo(t.map),function(){a.remove()}}),[t.map,a]),Object(o.useEffect)((function(){null!=u&&u!==c.current&&(a.setPosition(u),c.current=u)}),[a,u]),r}}function O(e,n){var t=Object(o.useRef)();Object(o.useEffect)((function(){return null!=n&&e.instance.on(n),t.current=n,function(){null!=t.current&&e.instance.off(t.current),t.current=null}}),[e,n])}function h(e,n){var t,r=null!=(t=e.pane)?t:n.pane;return r?Object.assign({},e,{pane:r}):e}function j(e,n){return function(t,r){var a=p(),o=e(h(t,a),a);return u(a.map,t.attribution),O(o.current,t.eventHandlers),n(o.current,a,t,r),o}}var C=t(105);function E(e){return e.split(" ").filter(Boolean)}function g(e,n){E(n).forEach((function(n){C.DomUtil.addClass(e,n)}))}function w(e,n){E(n).forEach((function(n){C.DomUtil.removeClass(e,n)}))}function k(e,n,t){null!=e&&t!==n&&(null!=n&&n.length>0&&w(e,n),null!=t&&t.length>0&&g(e,t))}function x(e,n){return null==n?function(n,t){return Object(o.useRef)(e(n,t))}:function(t,r){var a=Object(o.useRef)(e(t,r)),c=Object(o.useRef)(t),u=a.current.instance;return Object(o.useEffect)((function(){c.current!==t&&(n(u,t,c.current),c.current=t)}),[u,t,r]),a}}function P(e,n){Object(o.useEffect)((function(){var t,r=null!=(t=n.layerContainer)?t:n.map;return r.addLayer(e.instance),function(){r.removeLayer(e.instance)}}),[n,e])}function L(e){return function(n){var t=p(),r=e(h(n,t),t);return u(t.map,n.attribution),O(r.current,n.eventHandlers),P(r.current,t),r}}function N(e,n){var t=Object(o.useRef)();Object(o.useEffect)((function(){if(n.pathOptions!==t.current){var r,a=null!=(r=n.pathOptions)?r:{};e.instance.setStyle(a),t.current=a}}),[e,n])}function S(e){return function(n){var t=p(),r=e(h(n,t),t);return O(r.current,n.eventHandlers),P(r.current,t),N(r.current,n),r}}function I(e){return v(y(x((function(n,t){return{instance:e(n),context:t}}))))}function _(e,n){return m(L(x(e,n)))}function R(e,n){return b(j(x(e),n))}function M(e,n){return m(S(x(e,n)))}function T(e,n){return v(L(x(e,n)))}function H(e,n,t){var r=n.opacity,a=n.zIndex;null!=r&&r!==t.opacity&&e.setOpacity(r),null!=a&&a!==t.zIndex&&e.setZIndex(a)}function D(e,n,t){n.bounds instanceof C.LatLngBounds&&n.bounds!==t.bounds&&e.setBounds(n.bounds),null!=n.opacity&&n.opacity!==t.opacity&&e.setOpacity(n.opacity),null!=n.zIndex&&n.zIndex!==t.zIndex&&e.setZIndex(n.zIndex)}function z(){return p().map}function A(e,n){const t=z();return Object(o.useEffect)((function(){return t.on(e,n),function(){t.off(e,n)}}),[t,e,n]),t}function B(e){const n=z();return Object(o.useEffect)((function(){return n.on(e),function(){n.off(e)}}),[n,e]),n}const G=I((function(e){return new C.Control.Attribution(e)})),V=M((function({center:e,children:n,...t},r){const a=new C.Circle(e,t);return console.log("created circle",a),{instance:a,context:{...r,overlayContainer:a}}}),i),W=M((function({center:e,children:n,...t},r){const a=new C.CircleMarker(e,t);return{instance:a,context:{...r,overlayContainer:a}}}),i),F=M((function({children:e,...n},t){const r=new C.FeatureGroup([],n);return{instance:r,context:{...t,layerContainer:r,overlayContainer:r}}})),U=M((function({data:e,...n},t){const r=new C.GeoJSON(e,n);return{instance:r,context:{...t,overlayContainer:r}}})),Z=_((function({bounds:e,url:n,...t},r){const a=new C.ImageOverlay(n,e,t);return{instance:a,context:{...r,overlayContainer:a}}}),(function(e,n,t){D(e,n,t),n.url!==t.url&&e.setUrl(n.url)})),J=_((function({children:e,...n},t){const r=new C.LayerGroup([],n);return{instance:r,context:{...t,layerContainer:r}}})),$=m(y(x((function({children:e,...n},t){const r=new C.Control.Layers(void 0,void 0,n);return{instance:r,context:{...t,layersControl:r}}}),(function(e,n,t){n.collapsed!==t.collapsed&&(!0===n.collapsed?e.collapse():e.expand())}))));function X(e){return function(n){const t=p(),r=Object(o.useRef)(n),[a,u]=Object(o.useState)(null),{layersControl:i,map:l}=t,s=Object(o.useCallback)((n=>{null!=i&&(r.current.checked&&l.addLayer(n),e(i,n,r.current.name),u(n))}),[i,l]),f=Object(o.useCallback)((e=>{null==i||i.removeLayer(e),u(null)}),[i]),m=Object(o.useMemo)((()=>({...t,layerContainer:{addLayer:s,removeLayer:f}})),[t,s,f]);return Object(o.useEffect)((()=>{null!==a&&r.current!==n&&(!0!==n.checked||null!=r.current.checked&&!1!==r.current.checked?!0!==r.current.checked||null!=n.checked&&!1!==n.checked||l.removeLayer(a):l.addLayer(a),r.current=n)})),n.children?c.a.createElement(d,{value:m},n.children):null}}function Y({children:e}){return e(z())}function q(){return(q=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function K({children:e,className:n,id:t,placeholder:r,style:a,whenCreated:u,...i}){const l=Object(o.useRef)(null),f=function(e,n){const[t,r]=Object(o.useState)(null);return Object(o.useEffect)((()=>{if(null!==e.current&&null===t){const t=new C.Map(e.current,n);null!=n.center&&null!=n.zoom?t.setView(n.center,n.zoom):null!=n.bounds&&t.fitBounds(n.bounds,n.boundsOptions),null!=n.whenReady&&t.whenReady(n.whenReady),r(t)}}),[e,t,n]),t}(l,i),p=Object(o.useRef)(!1);Object(o.useEffect)((()=>{null!=f&&!1===p.current&&null!=u&&(p.current=!0,u(f))}),[f,u]);const[m]=Object(o.useState)({className:n,id:t,style:a}),b=Object(o.useMemo)((()=>f?{__version:s,map:f}:null),[f]),v=b?c.a.createElement(d,{value:b},e):null!=r?r:null;return c.a.createElement("div",q({},m,{ref:l}),v)}$.BaseLayer=X((function(e,n,t){e.addBaseLayer(n,t)})),$.Overlay=X((function(e,n,t){e.addOverlay(n,t)}));const Q=_((function({position:e,...n},t){const r=new C.Marker(e,n);return{instance:r,context:{...t,overlayContainer:r}}}),(function(e,n,t){n.position!==t.position&&e.setLatLng(n.position),null!=n.icon&&n.icon!==t.icon&&e.setIcon(n.icon),null!=n.zIndexOffset&&n.zIndexOffset!==t.zIndexOffset&&e.setZIndexOffset(n.zIndexOffset),null!=n.opacity&&n.opacity!==t.opacity&&e.setOpacity(n.opacity),null!=e.dragging&&n.draggable!==t.draggable&&(!0===n.draggable?e.dragging.enable():e.dragging.disable())})),ee=["mapPane","markerPane","overlayPane","popupPane","shadowPane","tilePane","tooltipPane"];function ne(e,n){const{[n]:t,...r}=e;return r}function te(e){const n=p(),[t]=Object(o.useState)((()=>function(e,n){var t;const r=e.name;if(-1!==ee.indexOf(r))throw new Error(`You must use a unique name for a pane that is not a default Leaflet pane: ${r}`);if(null!=n.map.getPane(r))throw new Error(`A pane with this name already exists: ${r}`);const a=null!=(t=e.pane)?t:n.pane,o=a?n.map.getPane(a):void 0,c=n.map.createPane(r,o);return null!=e.className&&g(c,e.className),null!=e.style&&Object.keys(e.style).forEach((n=>{c.style[n]=e.style[n]})),c}(e,n))),[r]=Object(o.useState)((()=>({...n,pane:e.name})));return Object(o.useEffect)((()=>function(){const t=n.map.getPane(e.name);null==t||null==t.remove||t.remove(),null!=n.map._panes&&(n.map._panes=ne(n.map._panes,e.name),n.map._paneRenderers=ne(n.map._paneRenderers,e.name))}),[]),null!=e.children?Object(l.createPortal)(c.a.createElement(d,{value:r},e.children),t):null}const re=M((function({positions:e,...n},t){const r=new C.Polygon(e,n);return{instance:r,context:{...t,overlayContainer:r}}}),(function(e,n,t){n.positions!==t.positions&&e.setLatLngs(n.positions)})),ae=M((function({positions:e,...n},t){const r=new C.Polyline(e,n);return{instance:r,context:{...t,overlayContainer:r}}}),(function(e,n,t){n.positions!==t.positions&&e.setLatLngs(n.positions)})),oe=R((function(e,n){return{instance:new C.Popup(e,n.overlayContainer),context:n}}),(function(e,n,t,r){const{onClose:a,onOpen:c,position:u}=t;Object(o.useEffect)((function(){const{instance:t}=e;function o(e){e.popup===t&&(t.update(),r(!0),null==c||c())}function i(e){e.popup===t&&(r(!1),null==a||a())}return n.map.on({popupopen:o,popupclose:i}),null==n.overlayContainer?(null!=u&&t.setLatLng(u),t.openOn(n.map)):n.overlayContainer.bindPopup(t),function(){n.map.off({popupopen:o,popupclose:i}),null==n.overlayContainer?n.map.removeLayer(t):n.overlayContainer.unbindPopup()}}),[e,n,r,a,c,u])})),ce=M((function({bounds:e,...n},t){const r=new C.Rectangle(e,n);return{instance:r,context:{...t,overlayContainer:r}}}),(function(e,n,t){n.bounds!==t.bounds&&e.setBounds(n.bounds)})),ue=I((function(e){return new C.Control.Scale(e)})),ie=L(x((function(e,n){const{attributes:t,bounds:r,...a}=e,o=document.createElementNS("http://www.w3.org/2000/svg","svg");return o.setAttribute("xmlns","http://www.w3.org/2000/svg"),null!=t&&Object.keys(t).forEach((e=>{o.setAttribute(e,t[e])})),{instance:new C.SVGOverlay(o,r,a),container:o,context:n}}),D));function le({children:e,...n},t){const{instance:r,container:a}=ie(n).current;return Object(o.useImperativeHandle)(t,(()=>r)),null==a||null==e?null:Object(l.createPortal)(e,a)}const se=Object(o.forwardRef)(le),fe=T((function({url:e,...n},t){return{instance:new C.TileLayer(e,h(n,t)),context:t}}),H),de=R((function(e,n){return{instance:new C.Tooltip(e,n.overlayContainer),context:n}}),(function(e,n,t,r){const{onClose:a,onOpen:c}=t;Object(o.useEffect)((function(){const t=n.overlayContainer;if(null==t)return;const{instance:o}=e,u=e=>{e.tooltip===o&&(o.update(),r(!0),null==c||c())},i=e=>{e.tooltip===o&&(r(!1),null==a||a())};return t.on({tooltipopen:u,tooltipclose:i}),t.bindTooltip(o),function(){t.off({tooltipopen:u,tooltipclose:i}),t.unbindTooltip()}}),[e,n,r,a,c])})),pe=_((function({bounds:e,url:n,...t},r){const a=new C.VideoOverlay(n,e,t);var o;!0===t.play&&(null==(o=a.getElement())||o.play());return{instance:a,context:{...r,overlayContainer:a}}}),(function(e,n,t){D(e,n,t),"string"==typeof n.url&&n.url!==t.url&&e.setUrl(n.url);const r=e.getElement();null!=r&&(!0!==n.play||t.play?n.play||!0!==t.play||r.pause():r.play())})),me=T((function({params:e={},url:n,...t},r){return{instance:new C.TileLayer.WMS(n,{...e,...h(t,r)}),context:r}}),(function(e,n,t){H(e,n,t),null!=n.params&&n.params!==t.params&&e.setParams(n.params)})),be=I((function(e){return new C.Control.Zoom(e)})),ve={L:C,React:c.a,...r,...c.a,...a};n.a=ve}}]);