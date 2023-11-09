(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2132],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9034:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),l=["components"],i={title:"List all unlocked weapons"},s=void 0,p={unversionedId:"snippets/snippet-list-all-unlocked-weapons",id:"snippets/snippet-list-all-unlocked-weapons",isDocsHomePage:!1,title:"List all unlocked weapons",description:"Gets a list of all unlocked (and enabled) weapon ids from the game.",source:"@site/docs/snippets/snippet-list-all-unlocked-weapons.md",sourceDirName:"snippets",slug:"/snippets/snippet-list-all-unlocked-weapons",permalink:"/community-docs/docs/snippets/snippet-list-all-unlocked-weapons",editUrl:"https://github.com/BattleTalent/community-docs/docs/snippets/snippet-list-all-unlocked-weapons.md",version:"current",frontMatter:{title:"List all unlocked weapons"},sidebar:"docs",previous:{title:"Instantiate Weapon",permalink:"/community-docs/docs/snippets/snippet-instantiate-weapon"},next:{title:"List all weapons",permalink:"/community-docs/docs/snippets/snippet-list-all-weapons"}},c=[{value:"Example",id:"example",children:[]},{value:"User Variables",id:"user-variables",children:[]}],u={toc:c};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Gets a list of all unlocked (and enabled) weapon ids from the game."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"function listToTable(clrlist)\n    local t = {}\n    local it = clrlist:GetEnumerator()\n    while it:MoveNext() do\n      t[#t+1] = it.Current\n    end\n    return t\nend\n\nlocal weapons = CL.WeaponDataMgr.GetUnlockWeaponList();\nlocal list = listToTable(weapons);\n\nfor key, val in pairs(list) do\n    print(key,val)\nend\n")),(0,a.kt)("h2",{id:"user-variables"},"User Variables"),(0,a.kt)("p",null,"No user variables."))}d.isMDXComponent=!0}}]);