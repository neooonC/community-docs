(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5642],{8450:function(e,t,n){"use strict";n.r(t),n.d(t,{__extends:function(){return o},__assign:function(){return i},__rest:function(){return u},__decorate:function(){return a},__param:function(){return c},__esDecorate:function(){return s},__runInitializers:function(){return f},__propKey:function(){return l},__setFunctionName:function(){return d},__metadata:function(){return v},__awaiter:function(){return p},__generator:function(){return g},__createBinding:function(){return h},__exportStar:function(){return y},__values:function(){return m},__read:function(){return b},__spread:function(){return _},__spreadArrays:function(){return w},__spreadArray:function(){return P},__await:function(){return D},__asyncGenerator:function(){return E},__asyncDelegator:function(){return A},__asyncValues:function(){return O},__makeTemplateObject:function(){return S},__importStar:function(){return x},__importDefault:function(){return V},__classPrivateFieldGet:function(){return C},__classPrivateFieldSet:function(){return k},__classPrivateFieldIn:function(){return L},__addDisposableResource:function(){return T},__disposeResources:function(){return R}});var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}var i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function u(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n}function a(e,t,n,r){var o,i=arguments.length,u=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)u=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(u=(i<3?o(u):i>3?o(t,n,u):o(t,n))||u);return i>3&&u&&Object.defineProperty(t,n,u),u}function c(e,t){return function(n,r){t(n,r,e)}}function s(e,t,n,r,o,i){function u(e){if(void 0!==e&&"function"!=typeof e)throw new TypeError("Function expected");return e}for(var a,c=r.kind,s="getter"===c?"get":"setter"===c?"set":"value",f=!t&&e?r.static?e:e.prototype:null,l=t||(f?Object.getOwnPropertyDescriptor(f,r.name):{}),d=!1,v=n.length-1;v>=0;v--){var p={};for(var g in r)p[g]="access"===g?{}:r[g];for(var g in r.access)p.access[g]=r.access[g];p.addInitializer=function(e){if(d)throw new TypeError("Cannot add initializers after decoration has completed");i.push(u(e||null))};var h=(0,n[v])("accessor"===c?{get:l.get,set:l.set}:l[s],p);if("accessor"===c){if(void 0===h)continue;if(null===h||"object"!=typeof h)throw new TypeError("Object expected");(a=u(h.get))&&(l.get=a),(a=u(h.set))&&(l.set=a),(a=u(h.init))&&o.unshift(a)}else(a=u(h))&&("field"===c?o.unshift(a):l[s]=a)}f&&Object.defineProperty(f,r.name,l),d=!0}function f(e,t,n){for(var r=arguments.length>2,o=0;o<t.length;o++)n=r?t[o].call(e,n):t[o].call(e);return r?n:void 0}function l(e){return"symbol"==typeof e?e:"".concat(e)}function d(e,t,n){return"symbol"==typeof t&&(t=t.description?"[".concat(t.description,"]"):""),Object.defineProperty(e,"name",{configurable:!0,value:n?"".concat(n," ",t):t})}function v(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function p(e,t,n,r){return new(n||(n=Promise))((function(o,i){function u(e){try{c(r.next(e))}catch(t){i(t)}}function a(e){try{c(r.throw(e))}catch(t){i(t)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))}function g(e,t){var n,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(a){return function(c){return function(a){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,a[0]&&(u=0)),u;)try{if(n=1,r&&(o=2&a[0]?r.return:a[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,a[1])).done)return o;switch(r=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return u.label++,{value:a[1],done:!1};case 5:u.label++,r=a[1],a=[0];continue;case 7:a=u.ops.pop(),u.trys.pop();continue;default:if(!(o=u.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){u=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){u.label=a[1];break}if(6===a[0]&&u.label<o[1]){u.label=o[1],o=a;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(a);break}o[2]&&u.ops.pop(),u.trys.pop();continue}a=t.call(e,u)}catch(c){a=[6,c],r=0}finally{n=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,c])}}}var h=Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]};function y(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||h(t,e,n)}function m(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function b(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,i=n.call(e),u=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)u.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(o)throw o.error}}return u}function _(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(b(arguments[t]));return e}function w(){for(var e=0,t=0,n=arguments.length;t<n;t++)e+=arguments[t].length;var r=Array(e),o=0;for(t=0;t<n;t++)for(var i=arguments[t],u=0,a=i.length;u<a;u++,o++)r[o]=i[u];return r}function P(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}function D(e){return this instanceof D?(this.v=e,this):new D(e)}function E(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r,o=n.apply(e,t||[]),i=[];return r={},u("next"),u("throw"),u("return"),r[Symbol.asyncIterator]=function(){return this},r;function u(e){o[e]&&(r[e]=function(t){return new Promise((function(n,r){i.push([e,t,n,r])>1||a(e,t)}))})}function a(e,t){try{(n=o[e](t)).value instanceof D?Promise.resolve(n.value.v).then(c,s):f(i[0][2],n)}catch(r){f(i[0][3],r)}var n}function c(e){a("next",e)}function s(e){a("throw",e)}function f(e,t){e(t),i.shift(),i.length&&a(i[0][0],i[0][1])}}function A(e){var t,n;return t={},r("next"),r("throw",(function(e){throw e})),r("return"),t[Symbol.iterator]=function(){return this},t;function r(r,o){t[r]=e[r]?function(t){return(n=!n)?{value:D(e[r](t)),done:!1}:o?o(t):t}:o}}function O(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,n=e[Symbol.asyncIterator];return n?n.call(e):(e=m(e),t={},r("next"),r("throw"),r("return"),t[Symbol.asyncIterator]=function(){return this},t);function r(n){t[n]=e[n]&&function(t){return new Promise((function(r,o){(function(e,t,n,r){Promise.resolve(r).then((function(t){e({value:t,done:n})}),t)})(r,o,(t=e[n](t)).done,t.value)}))}}}function S(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}var j=Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t};function x(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&h(t,e,n);return j(t,e),t}function V(e){return e&&e.__esModule?e:{default:e}}function C(e,t,n,r){if("a"===n&&!r)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?r:"a"===n?r.call(e):r?r.value:t.get(e)}function k(e,t,n,r,o){if("m"===r)throw new TypeError("Private method is not writable");if("a"===r&&!o)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!o:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===r?o.call(e,n):o?o.value=n:t.set(e,n),n}function L(e,t){if(null===t||"object"!=typeof t&&"function"!=typeof t)throw new TypeError("Cannot use 'in' operator on non-object");return"function"==typeof e?t===e:e.has(t)}function T(e,t,n){if(null!=t){if("object"!=typeof t)throw new TypeError("Object expected.");var r;if(n){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");r=t[Symbol.asyncDispose]}if(void 0===r){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");r=t[Symbol.dispose]}if("function"!=typeof r)throw new TypeError("Object not disposable.");e.stack.push({value:t,dispose:r,async:n})}else n&&e.stack.push({async:!0});return t}var I="function"==typeof SuppressedError?SuppressedError:function(e,t,n){var r=new Error(n);return r.name="SuppressedError",r.error=e,r.suppressed=t,r};function R(e){function t(t){e.error=e.hasError?new I(t,e.error,"An error was suppressed during disposal."):t,e.hasError=!0}return function n(){for(;e.stack.length;){var r=e.stack.pop();try{var o=r.dispose&&r.dispose.call(r.value);if(r.async)return Promise.resolve(o).then(n,(function(e){return t(e),n()}))}catch(i){t(i)}}if(e.hasError)throw e.error}()}t.default={__extends:o,__assign:i,__rest:u,__decorate:a,__param:c,__metadata:v,__awaiter:p,__generator:g,__createBinding:h,__exportStar:y,__values:m,__read:b,__spread:_,__spreadArrays:w,__spreadArray:P,__await:D,__asyncGenerator:E,__asyncDelegator:A,__asyncValues:O,__makeTemplateObject:S,__importStar:x,__importDefault:V,__classPrivateFieldGet:C,__classPrivateFieldSet:k,__classPrivateFieldIn:L,__addDisposableResource:T,__disposeResources:R}},3649:function(e,t,n){"use strict";n.d(t,{s:function(){return u},Z:function(){return a}});var r=n(7294),o=/{\w+}/g,i="{}";function u(e,t){var n=[],u=e.replace(o,(function(e){var o=e.substr(1,e.length-2),u=null==t?void 0:t[o];if(void 0!==u){var a=r.isValidElement(u)?u:String(u);return n.push(a),i}return e}));return 0===n.length?e:n.every((function(e){return"string"==typeof e}))?u.split(i).reduce((function(e,t,r){var o;return e.concat(t).concat(null!==(o=n[r])&&void 0!==o?o:"")}),""):u.split(i).reduce((function(e,t,o){return[].concat(e,[r.createElement(r.Fragment,{key:o},t,n[o])])}),[])}function a(e){return u(e.children,e.values)}},6742:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var r=n(9756),o=n(7294),i=n(3727),u=n(2263),a=n(3919),c=n(412),s=(0,o.createContext)({collectLink:function(){}}),f=n(4996),l=n(8780),d=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var v=function(e){var t,n,v=e.isNavLink,p=e.to,g=e.href,h=e.activeClassName,y=e.isActive,m=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,_=void 0===b||b,w=(0,r.Z)(e,d),P=(0,u.Z)().siteConfig,D=P.trailingSlash,E=P.baseUrl,A=(0,f.C)().withBaseUrl,O=(0,o.useContext)(s),S=p||g,j=(0,a.Z)(S),x=null==S?void 0:S.replace("pathname://",""),V=void 0!==x?(n=x,_&&function(e){return e.startsWith("/")}(n)?A(n):n):void 0;V&&j&&(V=(0,l.applyTrailingSlash)(V,{trailingSlash:D,baseUrl:E}));var C,k=(0,o.useRef)(!1),L=v?i.OL:i.rU,T=c.Z.canUseIntersectionObserver;(0,o.useEffect)((function(){return!T&&j&&null!=V&&window.docusaurus.prefetch(V),function(){T&&C&&C.disconnect()}}),[V,T,j]);var I=null!==(t=null==V?void 0:V.startsWith("#"))&&void 0!==t&&t,R=!V||!j||I;return V&&j&&!I&&!m&&O.collectLink(V),R?o.createElement("a",Object.assign({href:V},S&&!j&&{target:"_blank",rel:"noopener noreferrer"},w)):o.createElement(L,Object.assign({},w,{onMouseEnter:function(){k.current||null==V||(window.docusaurus.preload(V),k.current=!0)},innerRef:function(e){var t,n;T&&e&&j&&(t=e,n=function(){null!=V&&window.docusaurus.prefetch(V)},(C=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(C.unobserve(t),C.disconnect(),n())}))}))).observe(t))},to:V||""},v&&{isActive:y,activeClassName:h}))}},9052:function(e,t,n){"use strict";n.d(t,{I:function(){return a},Z:function(){return c}});var r=n(7294),o=n(3649),i=n(4644);function u(e){var t,n=e.id,r=e.message;return null!==(t=i[null!=n?n:r])&&void 0!==t?t:r}function a(e,t){var n,r=e.message,i=null!==(n=u({message:r,id:e.id}))&&void 0!==n?n:r;return(0,o.s)(i,t)}function c(e){var t,n=e.children,i=e.id,a=e.values,c=null!==(t=u({message:n,id:i}))&&void 0!==t?t:n;return r.createElement(o.Z,{values:a},c)}},3919:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function o(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return o}})},8143:function(e,t,n){"use strict";n.r(t),n.d(t,{BrowserRouter:function(){return r.VK},HashRouter:function(){return r.UT},Link:function(){return r.rU},MemoryRouter:function(){return r.VA},NavLink:function(){return r.OL},Prompt:function(){return r.NL},Redirect:function(){return r.l_},Route:function(){return r.AW},Router:function(){return r.F0},StaticRouter:function(){return r.gx},Switch:function(){return r.rs},generatePath:function(){return r.Gn},matchPath:function(){return r.LX},useHistory:function(){return r.k6},useLocation:function(){return r.TH},useParams:function(){return r.UO},useRouteMatch:function(){return r.$B},withRouter:function(){return r.EN}});var r=n(3727)},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return u}});var r=n(2263),o=n(3919);function i(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var i=void 0===r?{}:r,u=i.forcePrependBaseUrl,a=void 0!==u&&u,c=i.absolute,s=void 0!==c&&c;if(!n)return n;if(n.startsWith("#"))return n;if((0,o.b)(n))return n;if(a)return t+n;var f=n.startsWith(t)?n:t+n.replace(/^\//,"");return s?e+f:f}(i,n,e,t)}}}function u(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},8084:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o},useAllPluginInstancesData:function(){return i},usePluginData:function(){return u}});var r=n(2263);function o(){var e=(0,r.Z)().globalData;if(!e)throw new Error("Docusaurus global data not found.");return e}function i(e){var t=o()[e];if(!t)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin.');return t}function u(e,t){void 0===t&&(t="default");var n=i(e)[t];if(!n)throw new Error('Docusaurus plugin global data not found for "'+e+'" plugin with id "'+t+'".');return n}},8408:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;var r=n(8143);t.getActivePlugin=function(e,t,n){void 0===n&&(n={});var o=Object.entries(e).find((function(e){e[0];var n=e[1];return!!r.matchPath(t,{path:n.path,exact:!1,strict:!1})})),i=o?{pluginId:o[0],pluginData:o[1]}:void 0;if(!i&&n.failfast)throw new Error("Can't find active docs plugin for \""+t+'" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: '+Object.values(e).map((function(e){return e.path})).join(", "));return i};t.getLatestVersion=function(e){return e.versions.find((function(e){return e.isLast}))};t.getActiveVersion=function(e,n){var o=t.getLatestVersion(e);return[].concat(e.versions.filter((function(e){return e!==o})),[o]).find((function(e){return!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})}))};t.getActiveDocContext=function(e,n){var o,i,u=t.getActiveVersion(e,n),a=null==u?void 0:u.docs.find((function(e){return!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})}));return{activeVersion:u,activeDoc:a,alternateDocVersions:a?(o=a.id,i={},e.versions.forEach((function(e){e.docs.forEach((function(t){t.id===o&&(i[e.name]=t)}))})),i):{}}};t.getDocVersionSuggestions=function(e,n){var r=t.getLatestVersion(e),o=t.getActiveDocContext(e,n);return{latestDocSuggestion:null==o?void 0:o.alternateDocVersions[r.name],latestVersionSuggestion:r}}},6730:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;var r=n(8450),o=n(8143),i=r.__importStar(n(8084)),u=n(8408),a={};t.useAllDocsData=function(){var e;return null!==(e=i.default()["docusaurus-plugin-content-docs"])&&void 0!==e?e:a};t.useDocsData=function(e){return i.usePluginData("docusaurus-plugin-content-docs",e)};t.useActivePlugin=function(e){void 0===e&&(e={});var n=t.useAllDocsData(),r=o.useLocation().pathname;return u.getActivePlugin(n,r,e)};t.useActivePluginAndVersion=function(e){void 0===e&&(e={});var n=t.useActivePlugin(e),r=o.useLocation().pathname;if(n)return{activePlugin:n,activeVersion:u.getActiveVersion(n.pluginData,r)}};t.useVersions=function(e){return t.useDocsData(e).versions};t.useLatestVersion=function(e){var n=t.useDocsData(e);return u.getLatestVersion(n)};t.useActiveVersion=function(e){var n=t.useDocsData(e),r=o.useLocation().pathname;return u.getActiveVersion(n,r)};t.useActiveDocContext=function(e){var n=t.useDocsData(e),r=o.useLocation().pathname;return u.getActiveDocContext(n,r)};t.useDocVersionSuggestions=function(e){var n=t.useDocsData(e),r=o.useLocation().pathname;return u.getDocVersionSuggestions(n,r)}},1217:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(7294),o=n(9105),i=n(9306),u=n(4996);function a(e){var t=e.title,n=e.description,a=e.keywords,c=e.image,s=(0,i.LU)().image,f=(0,i.pe)(t),l=(0,u.Z)(c||s,{absolute:!0});return r.createElement(o.Z,null,t&&r.createElement("title",null,f),t&&r.createElement("meta",{property:"og:title",content:f}),n&&r.createElement("meta",{name:"description",content:n}),n&&r.createElement("meta",{property:"og:description",content:n}),a&&r.createElement("meta",{name:"keywords",content:Array.isArray(a)?a.join(","):a}),l&&r.createElement("meta",{property:"og:image",content:l}),l&&r.createElement("meta",{name:"twitter:image",content:l}))}},907:function(e,t,n){"use strict";n.d(t,{Iw:function(){return r.useActiveDocContext},gA:function(){return r.useActivePlugin},zu:function(){return r.useActiveVersion},_r:function(){return r.useAllDocsData},Jo:function(){return r.useDocVersionSuggestions},zh:function(){return r.useDocsData},yW:function(){return r.useLatestVersion},gB:function(){return r.useVersions}});var r=n(6730)},9306:function(e,t,n){"use strict";n.d(t,{pl:function(){return M},HX:function(){return g},L5:function(){return C},kM:function(){return T},WA:function(){return s},os:function(){return h},Mg:function(){return b},_f:function(){return f},bc:function(){return p},l5:function(){return d},nT:function(){return N},J:function(){return L},SL:function(){return A},D9:function(){return E},LU:function(){return o},pe:function(){return _}});var r=n(2263);function o(){return(0,r.Z)().siteConfig.themeConfig}var i="localStorage";function u(e){if(void 0===e&&(e=i),"undefined"==typeof window)throw new Error("Browser storage is not available on Node.js/Docusaurus SSR process.");if("none"===e)return null;try{return window[e]}catch(n){return t=n,a||(console.warn("Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",t),a=!0),null}var t}var a=!1;var c={get:function(){return null},set:function(){},del:function(){}};var s=function(e,t){if("undefined"==typeof window)return function(e){function t(){throw new Error('Illegal storage API usage for storage key "'+e+'".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.')}return{get:t,set:t,del:t}}(e);var n=u(null==t?void 0:t.persistence);return null===n?c:{get:function(){return n.getItem(e)},set:function(t){return n.setItem(e,t)},del:function(){return n.removeItem(e)}}};function f(e){void 0===e&&(e=i);var t=u(e);if(!t)return[];for(var n=[],r=0;r<t.length;r+=1){var o=t.key(r);null!==o&&n.push(o)}return n}var l=n(5977);function d(){var e=(0,r.Z)(),t=e.siteConfig,n=t.baseUrl,o=t.url,i=e.i18n,u=i.defaultLocale,a=i.currentLocale,c=(0,l.TH)().pathname,s=a===u?n:n.replace("/"+a+"/","/"),f=c.replace(n,"");return{createUrl:function(e){var t=e.locale;return""+(e.fullyQualified?o:"")+function(e){return e===u?""+s:""+s+e+"/"}(t)+f}}}var v=/title=(["'])(.*?)\1/;function p(e){var t,n;return null!==(n=null===(t=null==e?void 0:e.match(v))||void 0===t?void 0:t[2])&&void 0!==n?n:""}var g="default";function h(e,t){return"docs-"+e+"-"+t}var y=n(907),m=!!y._r,b=function(e,t){var n=function(e){return!e||(null==e?void 0:e.endsWith("/"))?e:e+"/"};return n(e)===n(t)},_=function(e){var t=(0,r.Z)().siteConfig,n=void 0===t?{}:t,o=n.title,i=n.titleDelimiter,u=void 0===i?"|":i;return e&&e.trim().length?e.trim()+" "+u+" "+o:o},w=n(7294),P=["zero","one","two","few","many","other"];function D(e){return P.filter((function(t){return e.includes(t)}))}D(["one","other"]);function E(e){var t=(0,w.useRef)();return(0,w.useEffect)((function(){t.current=e})),t.current}function A(e){var t=(0,l.TH)(),n=E(t),r=(0,w.useRef)(!0);(0,w.useEffect)((function(){r.current?r.current=!1:e({location:t,previousLocation:n})}),[t])}var O=function(e){return"docs-preferred-version-"+e},S={save:function(e,t,n){s(O(e),{persistence:t}).set(n)},read:function(e,t){return s(O(e),{persistence:t}).get()},clear:function(e,t){s(O(e),{persistence:t}).del()}};function j(e){var t=e.pluginIds,n=e.versionPersistence,r=e.allDocsData;var o={};return t.forEach((function(e){o[e]=function(e){var t=S.read(e,n);return r[e].versions.some((function(e){return e.name===t}))?{preferredVersionName:t}:(S.clear(e,n),{preferredVersionName:null})}(e)})),o}function x(){var e=(0,y._r)(),t=o().docs.versionPersistence,n=(0,w.useMemo)((function(){return Object.keys(e)}),[e]),r=(0,w.useState)((function(){return function(e){var t={};return e.forEach((function(e){t[e]={preferredVersionName:null}})),t}(n)})),i=r[0],u=r[1];return(0,w.useEffect)((function(){u(j({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]),[i,(0,w.useMemo)((function(){return{savePreferredVersion:function(e,n){S.save(e,t,n),u((function(t){var r;return Object.assign({},t,((r={})[e]={preferredVersionName:n},r))}))}}}),[u])]}var V=(0,w.createContext)(null);function C(e){var t=e.children;return m?w.createElement(k,null,t):w.createElement(w.Fragment,null,t)}function k(e){var t=e.children,n=x();return w.createElement(V.Provider,{value:n},t)}function L(e){void 0===e&&(e="default");var t=(0,y.zh)(e),n=function(){var e=(0,w.useContext)(V);if(!e)throw new Error('Can\'t find docs preferred context, maybe you forgot to use the "DocsPreferredVersionContextProvider"?');return e}(),r=n[0],o=n[1],i=r[e].preferredVersionName;return{preferredVersion:i?t.versions.find((function(e){return e.name===i})):null,savePreferredVersionName:(0,w.useCallback)((function(t){o.savePreferredVersion(e,t)}),[o])}}var T={page:{blogListPage:"blog-list-page",blogPostPage:"blog-post-page",blogTagsListPage:"blog-tags-list-page",blogTagsPostPage:"blog-tags-post-page",docPage:"doc-page",mdxPage:"mdx-page"},wrapper:{main:"main-wrapper",blogPages:"blog-wrapper",docPages:"docs-wrapper",mdxPages:"mdx-wrapper"}},I=s("docusaurus.announcement.dismiss"),R=s("docusaurus.announcement.id"),Z=function(){return"true"===I.get()},U=function(e){return I.set(String(e))},B=(0,w.createContext)(null),M=function(e){var t=e.children,n=function(){var e=o().announcementBar,t=(0,r.Z)().isClient,n=(0,w.useState)((function(){return!!t&&Z()})),i=n[0],u=n[1];(0,w.useEffect)((function(){u(Z())}),[]);var a=(0,w.useCallback)((function(){U(!0),u(!0)}),[]);return(0,w.useEffect)((function(){if(e){var t=e.id,n=R.get();"annoucement-bar"===n&&(n="announcement-bar");var r=t!==n;R.set(t),r&&U(!1),!r&&Z()||u(!1)}}),[]),(0,w.useMemo)((function(){return{isClosed:i,close:a}}),[i])}();return w.createElement(B.Provider,{value:n},t)},N=function(){var e=(0,w.useContext)(B);if(!e)throw new Error("useAnnouncementBar(): AnnouncementBar not found in React context: make sure to use the AnnouncementBarProvider on top of the tree");return e}},8802:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var o,i=e.split(/[#?]/)[0],u="/"===i||i===r?i:(o=i,n?function(e){return e.endsWith("/")?e:e+"/"}(o):function(e){return e.endsWith("/")?e.slice(0,-1):e}(o));return e.replace(i,u)}},8780:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var o=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(o).default}});var i=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(i).default}})},9964:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},6010:function(e,t,n){"use strict";function r(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);