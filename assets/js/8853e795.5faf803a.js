(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3137],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9681:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),s=["components"],i={},l="Create hand pose mod",p={unversionedId:"tutorials-basic/create-hand-pose-mod",id:"tutorials-basic/create-hand-pose-mod",isDocsHomePage:!1,title:"Create hand pose mod",description:'Note: The prefixes used in the tutorial are "WMD\\", which can be replaced with your own prefix, and you will need to change the prefix in the AddressableConfig(Assets/Resources/AddressableConfig) file. Once you have changed the prefix, you will need to fill in your new prefix instead of "WMD\\" in the tutorial.',source:"@site/docs/tutorials-basic/8.create-hand-pose-mod.md",sourceDirName:"tutorials-basic",slug:"/tutorials-basic/create-hand-pose-mod",permalink:"/community-docs/docs/tutorials-basic/create-hand-pose-mod",editUrl:"https://github.com/BattleTalent/community-docs/docs/tutorials-basic/8.create-hand-pose-mod.md",version:"current",sidebarPosition:8,frontMatter:{},sidebar:"docs",previous:{title:"Create a song mod",permalink:"/community-docs/docs/tutorials-basic/create-a-song-mod"},next:{title:"Create near perfect convex colliders",permalink:"/community-docs/docs/tutorials-advanced/create-near-perfect-convex-colliders"}},c=[],d={toc:c};function u(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-hand-pose-mod"},"Create hand pose mod"),(0,o.kt)("p",null,'Note: The prefixes used in the tutorial are "WMD',"_",'", which can be replaced with your own prefix, and you will need to change the prefix in the AddressableConfig(Assets/Resources/AddressableConfig) file. Once you have changed the prefix, you will need to fill in your new prefix instead of "WMD',"_",'" in the tutorial.'),(0,o.kt)("h4",{id:"1open-the-modproj-by-unity2019412f1"},"1.Open the Modproj by Unity2019.4.12f1"),(0,o.kt)("p",null,"Please check the  ",(0,o.kt)("a",{parentName:"p",href:"/community-docs/docs/getting-started/modtoolkit-overview"},"Mod Toolkit Overview")," "),(0,o.kt)("h4",{id:"2create-folder"},"2.Create Folder"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Create Folder")," under Build folder. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CreateFolder",src:n(9992).Z})),(0,o.kt)("h4",{id:"3copy-a-preset"},"3.Copy A Preset"),(0,o.kt)("p",null,'Select a preset from path "Asset/Toolkit/HandPoseHelper/HandPose" , both left and right handed, and drag it into the scene.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CreateFolder",src:n(6314).Z})),(0,o.kt)("h4",{id:"4modify-values"},"4.Modify Values"),(0,o.kt)("p",null,"Modify the hand ",(0,o.kt)("strong",{parentName:"p"},"position")," and ",(0,o.kt)("strong",{parentName:"p"},"rotation")," of this pose as required."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CreateFolder",src:n(2647).Z})),(0,o.kt)("h4",{id:"5-modify-finger-pose"},"5. Modify Finger Pose"),(0,o.kt)("p",null,"Click on the Preset of the ",(0,o.kt)("strong",{parentName:"p"},"HandPoseSetup"),' and jump to the path "Asset/Toolkit/HandPoseHelper/support/FingerPose".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CreateFolder",src:n(3204).Z})),(0,o.kt)("p",null,"Copy and ",(0,o.kt)("strong",{parentName:"p"},"rename"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CreateFolder",src:n(7257).Z})),(0,o.kt)("p",null,"Adjust ",(0,o.kt)("strong",{parentName:"p"},"finger posture"),". "),(0,o.kt)("p",null,"The fingers are, in order, ",(0,o.kt)("strong",{parentName:"p"},"thumb"),", ",(0,o.kt)("strong",{parentName:"p"},"index"),", ",(0,o.kt)("strong",{parentName:"p"},"middle"),", ",(0,o.kt)("strong",{parentName:"p"},"ring")," and ",(0,o.kt)("strong",{parentName:"p"},"pinky"),"(pinkie)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CreateFolder",src:n(3644).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Assign")," it to the Preset in the scene."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CreateFolder",src:n(2623).Z})),(0,o.kt)("h4",{id:"6save-preset"},"6.Save Preset"),(0,o.kt)("p",null,"Drag the Preset in the scene under your HandPose path and click on ",(0,o.kt)("strong",{parentName:"p"},"OriginalPrefab"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CreateFolder",src:n(1949).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Rename")," the Preset"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CreateFolder",src:n(4100).Z})),(0,o.kt)("p",null,"Generate ",(0,o.kt)("strong",{parentName:"p"},"ItemInfoConfig")," in the Config folder and ",(0,o.kt)("strong",{parentName:"p"},"rename")," it."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CreateFolder",src:n(8394).Z})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Fill")," in the ",(0,o.kt)("strong",{parentName:"p"},"Hand Pose name")," and the ",(0,o.kt)("strong",{parentName:"p"},"Preset name")," "),(0,o.kt)("p",null,"Note the need to add your own ",(0,o.kt)("strong",{parentName:"p"},"prefix"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CreateFolder",src:n(7831).Z})),(0,o.kt)("h4",{id:"7-update-addressable-path"},"7. Update addressable path"),(0,o.kt)("p",null,"Select the file ",(0,o.kt)("strong",{parentName:"p"},"AddressableConfig"),"(Assets/Resources/AddressableConfig or ",(0,o.kt)("strong",{parentName:"p"},"shortcut: ctrl-shift-e"),")"),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"Clear Addressables")," to remove all unrelated items from the Toolkit."),(0,o.kt)("p",null,"Enter your ",(0,o.kt)("strong",{parentName:"p"},"Prefix")," and ",(0,o.kt)("strong",{parentName:"p"},"File path"),", then click ",(0,o.kt)("strong",{parentName:"p"},"Create And Refresh Addressable Name"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CreateFolder",src:n(3534).Z})),(0,o.kt)("p",null,"Then you will see this tool has already setup addressable path for you in the ",(0,o.kt)("strong",{parentName:"p"},"Addressables Groups")," window. (",(0,o.kt)("strong",{parentName:"p"},"Window/Asset Management/Addressables/Groups")," to open this window)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CreateFolder",src:n(7404).Z})),(0,o.kt)("h4",{id:"8-build-and-export"},"8. Build and export"),(0,o.kt)("p",null,"Now it's time to name your mod, click ",(0,o.kt)("strong",{parentName:"p"},"File/Build Settings/PlayerSettings/Player")," to fill in your ",(0,o.kt)("strong",{parentName:"p"},"ProductName"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CreateFolder",src:n(394).Z})),(0,o.kt)("p",null,"Click ",(0,o.kt)("strong",{parentName:"p"},"BuildTools/BuildAllBundles")," to Build your mod. (tips: first time will take a bit longer)"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Build",src:n(3286).Z})),(0,o.kt)("p",null,"Once you build it successfully,  then you will find your mod in the Assets/Mods. If something errors, please checkout the Console information, unity will tell you what's going wrong. And feel free to ask questions on our discord server."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CreateFolder",src:n(6497).Z})),(0,o.kt)("p",null,"Done\uff01"),(0,o.kt)("h4",{id:"how-do-i-use-this-handpose-inside-my-weapon"},"How do I use this HandPose inside my weapon?"),(0,o.kt)("p",null,"\u200b\tNote: To ensure that weapons that use a custom HandPose work properly, it is best to ",(0,o.kt)("strong",{parentName:"p"},"package the HandPose with the weapon.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"CreateFolder",src:n(787).Z})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Find the ",(0,o.kt)("strong",{parentName:"p"},"AttachLine")," or ",(0,o.kt)("strong",{parentName:"p"},"AttachPoint")," of your weapon.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change the ",(0,o.kt)("strong",{parentName:"p"},"HandPose")," property inside to the name of your HandPose."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"CreateFolder",src:n(4713).Z})),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"CreateFolder",src:n(2342).Z}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Done!"))))}u.isMDXComponent=!0},3534:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Addressable-c877076684869340f64846f26f2766c8.png"},7404:function(e,t,n){"use strict";t.Z=n.p+"assets/images/AddressableView-4a379062664c05911814fe9f6b69bb67.png"},2623:function(e,t,n){"use strict";t.Z=n.p+"assets/images/AssignToPreset-8c837481b7cb0d8bda4df17254de4750.png"},3286:function(e,t,n){"use strict";t.Z=n.p+"assets/images/Build-03a73c751ef9f6c64785fcb516656b9a.png"},7257:function(e,t,n){"use strict";t.Z=n.p+"assets/images/CopyFingerPose-89fb1320ce4e4693a39f91e4063af6ae.png"},9992:function(e,t,n){"use strict";t.Z=n.p+"assets/images/CreateFolder-3aec13a64481bcae58e5e5d64bafa669.png"},7831:function(e,t,n){"use strict";t.Z=n.p+"assets/images/FillInfo-c43ed4a3beecf4b21f85d59b1cfc9a0c.png"},3644:function(e,t,n){"use strict";t.Z=n.p+"assets/images/FingerData-67cb97bf90056c7f6a82869dfc7c60f7.png"},3204:function(e,t,n){"use strict";t.Z=n.p+"assets/images/FingerPose-2973edc515b0e8603750f1630a497453.png"},8394:function(e,t,n){"use strict";t.Z=n.p+"assets/images/ItemInfoConfig-02c0c42da980d82b109db1602fa3680e.png"},6497:function(e,t,n){"use strict";t.Z=n.p+"assets/images/ModFile-ec929cb38d0f67f79722ff27752b779b.png"},787:function(e,t,n){"use strict";t.Z=n.p+"assets/images/PackTogether-9257c7ded6a141c03fd2a0b3146f0978.png"},394:function(e,t,n){"use strict";t.Z=n.p+"assets/images/ProjectName-49ca0947e3ab74ff83d705623e296ed9.png"},4100:function(e,t,n){"use strict";t.Z=n.p+"assets/images/RenamePreset-c921cdfa439aa0d072f6a742382e61fb.png"},1949:function(e,t,n){"use strict";t.Z=n.p+"assets/images/SavePreset-20ca5c2abc54fb44773ca445475c5468.png"},2647:function(e,t,n){"use strict";t.Z=n.p+"assets/images/SetValue-9a5d5736a229aaa1d886df6ff688c7e7.png"},4713:function(e,t,n){"use strict";t.Z=n.p+"assets/images/UseInAttachLine-8d65224bb9243a1faa6d09dea6189353.png"},2342:function(e,t,n){"use strict";t.Z=n.p+"assets/images/UseInAttachPoint-ff4f214c7930ed9d9741df619df194d5.png"},6314:function(e,t,n){"use strict";t.Z=n.p+"assets/images/preset-d9e4d66b1a7d9d57e4a4cd24d432691f.png"}}]);