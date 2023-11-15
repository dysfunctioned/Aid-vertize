(()=>{"use strict";var n,e,t,r={7347:(n,e,t)=>{t.d(e,{Z:()=>h});var r=t(8081),a=t.n(r),o=t(3645),i=t.n(o),s=t(1667),l=t.n(s),c=new URL(t(675),t.b),d=i()(a()),p=l()(c);d.push([n.id,`/*\n! tailwindcss v3.3.5 | MIT License | https://tailwindcss.com\n*//*\n1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)\n2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: #e5e7eb; /* 2 */\n}\n\n::before,\n::after {\n  --tw-content: '';\n}\n\n/*\n1. Use a consistent sensible line-height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n3. Use a more readable tab size.\n4. Use the user's configured \`sans\` font-family by default.\n5. Use the user's configured \`sans\` font-feature-settings by default.\n6. Use the user's configured \`sans\` font-variation-settings by default.\n*/\n\nhtml {\n  line-height: 1.5; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n  -moz-tab-size: 4; /* 3 */\n  -o-tab-size: 4;\n     tab-size: 4; /* 3 */\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */\n  font-feature-settings: normal; /* 5 */\n  font-variation-settings: normal; /* 6 */\n}\n\n/*\n1. Remove the margin in all browsers.\n2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.\n*/\n\nbody {\n  margin: 0; /* 1 */\n  line-height: inherit; /* 2 */\n}\n\n/*\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n3. Ensure horizontal rules are visible by default.\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n  border-top-width: 1px; /* 3 */\n}\n\n/*\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr:where([title]) {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/*\nRemove the default font size and weight for headings.\n*/\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/*\nReset links to optimize for opt-in styling instead of opt-out.\n*/\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/*\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/*\n1. Use the user's configured \`mono\` font family by default.\n2. Correct the odd \`em\` font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/*\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/*\nPrevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n3. Remove gaps between table borders by default.\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n  border-collapse: collapse; /* 3 */\n}\n\n/*\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n3. Remove default padding in all browsers.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-feature-settings: inherit; /* 1 */\n  font-variation-settings: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  font-weight: inherit; /* 1 */\n  line-height: inherit; /* 1 */\n  color: inherit; /* 1 */\n  margin: 0; /* 2 */\n  padding: 0; /* 3 */\n}\n\n/*\nRemove the inheritance of text transform in Edge and Firefox.\n*/\n\nbutton,\nselect {\n  text-transform: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Remove default button styles.\n*/\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button; /* 1 */\n  background-color: transparent; /* 2 */\n  background-image: none; /* 2 */\n}\n\n/*\nUse the modern Firefox focus style for all focusable elements.\n*/\n\n:-moz-focusring {\n  outline: auto;\n}\n\n/*\nRemove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)\n*/\n\n:-moz-ui-invalid {\n  box-shadow: none;\n}\n\n/*\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/*\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/*\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/*\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/*\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to \`inherit\` in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/*\nRemoves the default spacing and border for appropriate elements.\n*/\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nlegend {\n  padding: 0;\n}\n\nol,\nul,\nmenu {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/*\nReset default styling for dialogs.\n*/\ndialog {\n  padding: 0;\n}\n\n/*\nPrevent resizing textareas horizontally by default.\n*/\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)\n2. Set the default placeholder color to the user's configured gray 400 color.\n*/\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1; /* 1 */\n  color: #9ca3af; /* 2 */\n}\n\n/*\nSet the default cursor for buttons.\n*/\n\nbutton,\n[role="button"] {\n  cursor: pointer;\n}\n\n/*\nMake sure disabled buttons don't get the pointer cursor.\n*/\n:disabled {\n  cursor: default;\n}\n\n/*\n1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)\n2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)\n   This can trigger a poorly considered lint error in some tools but is included by design.\n*/\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/*\nConstrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)\n*/\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/* Make elements with the HTML hidden attribute stay hidden by default */\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n\n::backdrop {\n  --tw-border-spacing-x: 0;\n  --tw-border-spacing-y: 0;\n  --tw-translate-x: 0;\n  --tw-translate-y: 0;\n  --tw-rotate: 0;\n  --tw-skew-x: 0;\n  --tw-skew-y: 0;\n  --tw-scale-x: 1;\n  --tw-scale-y: 1;\n  --tw-pan-x:  ;\n  --tw-pan-y:  ;\n  --tw-pinch-zoom:  ;\n  --tw-scroll-snap-strictness: proximity;\n  --tw-gradient-from-position:  ;\n  --tw-gradient-via-position:  ;\n  --tw-gradient-to-position:  ;\n  --tw-ordinal:  ;\n  --tw-slashed-zero:  ;\n  --tw-numeric-figure:  ;\n  --tw-numeric-spacing:  ;\n  --tw-numeric-fraction:  ;\n  --tw-ring-inset:  ;\n  --tw-ring-offset-width: 0px;\n  --tw-ring-offset-color: #fff;\n  --tw-ring-color: rgb(59 130 246 / 0.5);\n  --tw-ring-offset-shadow: 0 0 #0000;\n  --tw-ring-shadow: 0 0 #0000;\n  --tw-shadow: 0 0 #0000;\n  --tw-shadow-colored: 0 0 #0000;\n  --tw-blur:  ;\n  --tw-brightness:  ;\n  --tw-contrast:  ;\n  --tw-grayscale:  ;\n  --tw-hue-rotate:  ;\n  --tw-invert:  ;\n  --tw-saturate:  ;\n  --tw-sepia:  ;\n  --tw-drop-shadow:  ;\n  --tw-backdrop-blur:  ;\n  --tw-backdrop-brightness:  ;\n  --tw-backdrop-contrast:  ;\n  --tw-backdrop-grayscale:  ;\n  --tw-backdrop-hue-rotate:  ;\n  --tw-backdrop-invert:  ;\n  --tw-backdrop-opacity:  ;\n  --tw-backdrop-saturate:  ;\n  --tw-backdrop-sepia:  ;\n}\n.fixed {\n  position: fixed;\n}\n.absolute {\n  position: absolute;\n}\n.right-8 {\n  right: 2rem;\n}\n.top-24 {\n  top: 6rem;\n}\n.flex {\n  display: flex;\n}\n.h-\\[150px\\] {\n  height: 150px;\n}\n.w-\\[300px\\] {\n  width: 300px;\n}\n.transform {\n  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n.flex-col {\n  flex-direction: column;\n}\n.items-center {\n  align-items: center;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-center {\n  justify-content: center;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.gap-y-3 {\n  row-gap: 0.75rem;\n}\n.rounded-lg {\n  border-radius: 0.5rem;\n}\n.bg-gray-400 {\n  --tw-bg-opacity: 1;\n  background-color: rgb(156 163 175 / var(--tw-bg-opacity));\n}\n.p-4 {\n  padding: 1rem;\n}\n.text-3xl {\n  font-size: 1.875rem;\n  line-height: 2.25rem;\n}\n.text-4xl {\n  font-size: 2.25rem;\n  line-height: 2.5rem;\n}\n.text-base {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n.font-bold {\n  font-weight: 700;\n}\n.text-white {\n  --tw-text-opacity: 1;\n  color: rgb(255 255 255 / var(--tw-text-opacity));\n}\n.filter {\n  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);\n}\n\n@font-face {\n    font-family: 'Inter';\n    src: url(${p}) format('woff2');\n}\n\nbody {\n  height: 100%;\n  width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    margin: 0;\n    font-family: 'Inter';\n}`,""]);const h=d},1265:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(8081),a=t.n(r),o=t(3645),i=t.n(o)()(a());i.push([n.id,".backgrounds-p1 {\n    width: 93%;\n    height: 30%;\n    border-radius: 5px;\n    background: #FFF;\n    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.10);\n    margin-top: 33px;\n    margin-left: 34px;\n    padding: 2%;\n}\n\n.backgrounds-p2 {\n    width: 93%;\n    height: 30%;\n    border-radius: 5px;\n    background: #FFF;\n    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.10);\n    margin-top: 60px;\n    margin-left: 34px;\n    padding: 2%;\n}\n\n.backgrounds-header {\n    color: #000;\n    font-family: 'Inter';\n    font-size: 13px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 18px;\n    letter-spacing: 2px;\n}",""]);const s=i},4480:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(8081),a=t.n(r),o=t(3645),i=t.n(o)()(a());i.push([n.id,".impact-header {\n    color: #606367;\n    text-align: center;\n    font-family: 'Inter';\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: normal;\n    letter-spacing: 0.4px;\n    margin-top: 10px;\n}\n\n.impact-header-p2 {\n    color: #606367;\n    text-align: center;\n    font-family: 'Inter';\n    font-size: 12px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    letter-spacing: 0.24px;\n    margin-top: 15px;\n}",""]);const s=i},9469:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(8081),a=t.n(r),o=t(3645),i=t.n(o)()(a());i.push([n.id,".widgets {\n    width: 93%;\n    height: 76%;\n    border-radius: 5px;\n    background: #FFF;\n    box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.10);\n    margin-top: 33px;\n    margin-left: 34px;\n    padding: 2%;\n}\n\n.widgets-header {\n    color: #000;\n    font-family: 'Inter';\n    font-size: 13px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: 18px;\n    letter-spacing: 2px;\n}",""]);const s=i},2081:(n,e,t)=>{t.d(e,{Z:()=>h});var r=t(8081),a=t.n(r),o=t(3645),i=t.n(o),s=t(1667),l=t.n(s),c=new URL(t(675),t.b),d=i()(a()),p=l()(c);d.push([n.id,`@font-face {\n    font-family: 'Inter';\n    src: url(${p}) format('woff2');\n}\n\n.box {\n    width: 65%;\n    height: 75%;\n    min-width: 633px;\n    min-height: 486px;\n    flex-shrink: 0;\n    background-color: #F1F3F4;\n    filter: drop-shadow(0px 4px 15px rgba(0, 0, 0, 0.25));\n    border-radius: 10px;\n    position: fixed;\n\n    justify-content: center;\n    align-items: center;\n}\n\n.nav {\n    padding-top: 15px;\n    padding-left: 30px;\n    padding-bottom: 10px;\n    border-radius: 10px 10px 0px 0px;\n    background: #FFF;\n    box-shadow: 0px 1px 0px 0px rgba(188, 188, 188, 0.25);\n    display: flex;\n}\n\n.dashboard-text {\n    color: rgba(119, 44, 232, 1);\n    font-size: 30px;\n    font-family: 'Inter';\n    font-weight: 600;\n    word-wrap: 'break-word';\n    padding-right: 50px;\n}\n\n.buttons {\n    list-style: none;\n    display: flex;\n}\n\n.button-text {\n    font-size: 15px;\n    font-family: 'Inter';\n    font-weight: 500;\n    word-wrap: 'break-word';\n    margin-right: 30px;\n    color: #BABCBE;\n    padding: 14px;\n}\n\nli.button-text:hover {\n    cursor: pointer;\n    background-color: #f8f8f8;\n}\n\n.close-btn {\n    position: absolute;\n    top: 14px;\n    right: 14px;\n}`,""]);const h=d},6544:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(8081),a=t.n(r),o=t(3645),i=t.n(o)()(a());i.push([n.id,".widgets-box {\n    width: 440px;\n    height: 94%;\n    flex-shrink: 0;\n    background-color: #FFF;\n    border: 1px solid #EDEFEF;\n    border-radius: 10px;\n    position: fixed;\n    flex-direction: row;\n    left: 10px;\n    display: flex;\n}\n\n.widgets-nav {\n    float: left;\n    width: 40px;\n    height: 100%;\n    box-shadow: 0.5px 0px 0px 0px #C4C4C4;\n    text-align: center;\n}\n\n.widgets-bar-content {\n    float: right;\n    flex: 1;\n}\n\n.widgets-bar-header {\n    width: 100%;\n    display: flex;\n    border-bottom: 1px solid #EDEFEF;\n}\n\n.header-text {\n    padding: 20px;\n    padding-bottom: 17px;\n    color: #000;\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 600;\n    line-height: normal;\n    letter-spacing: 0.4px;\n}\n\n.close-btn2 {\n    position: absolute;\n    top: 9px;\n    right: 10px;\n}\n\n.launch-btn {\n    position: absolute;\n    top: 9px;\n    right: 39px;\n}\n\n.refresh-btn {\n    position: absolute;\n    top: 9px;\n    right: 70px;\n}",""]);const s=i},1209:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(8081),a=t.n(r),o=t(3645),i=t.n(o)()(a());i.push([n.id,".new-tab-override {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    margin: 0;\n}",""]);const s=i},4346:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(8081),a=t.n(r),o=t(3645),i=t.n(o)()(a());i.push([n.id,".history {\n    padding: 15px;\n}\n\n.history-list {\n    padding-left: 20px;\n    padding-bottom: 10px;\n}\n\n.history-list-header {\n    padding-bottom: 13px;\n    color: #606367;\n    font-size: 13px;\n    font-style: normal;\n    font-weight: 500;\n    line-height: normal;\n    letter-spacing: 0.26px;\n}\n\n.history-item {\n    display: flex;\n    align-items: center;\n    margin-bottom: 10px;\n}\n\n.website-icon {\n    width: 11px;\n    height: 11px;\n    margin-right: 10px;\n}\n\n.website-domain {\n    flex-grow: 1;\n    overflow: hidden;\n    white-space: nowrap;\n    text-overflow: ellipsis;\n\n    color: #000;\n    font-size: 11px;\n    font-style: normal;\n    font-weight: 400;\n    line-height: normal;\n    letter-spacing: 0.22px;\n}",""]);const s=i},7072:(n,e,t)=>{var r=t(7294),a=t(745),o=t(3379),i=t.n(o),s=t(7795),l=t.n(s),c=t(569),d=t.n(c),p=t(3565),h=t.n(p),m=t(9216),u=t.n(m),g=t(4589),f=t.n(g),b=t(1209),w={};w.styleTagTransform=f(),w.setAttributes=h(),w.insert=d().bind(null,"head"),w.domAPI=l(),w.insertStyleElement=u(),i()(b.Z,w),b.Z&&b.Z.locals&&b.Z.locals;var y=t(2081),x={};x.styleTagTransform=f(),x.setAttributes=h(),x.insert=d().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=u(),i()(y.Z,x),y.Z&&y.Z.locals&&y.Z.locals;const v=function(n){return null!=n.display?r.createElement("div",{className:"box"},n.children):r.createElement(r.Fragment,null)};var E=t(594);function k(n){return r.createElement("nav",{className:"nav"},r.createElement("a",{className:"dashboard-text"},"Dashboard"),r.createElement("ul",{className:"buttons"},r.createElement("li",{className:"button-text",onClick:()=>n.setDisplay("Widgets"),style:"Widgets"===n.display?{color:"#606367"}:{color:"#BABCBE"}},"Widgets"),r.createElement("li",{className:"button-text",onClick:()=>n.setDisplay("Backgrounds"),style:"Backgrounds"===n.display?{color:"#606367"}:{color:"#BABCBE"}},"Backgrounds"),r.createElement("li",{className:"button-text",onClick:()=>n.setDisplay("Impact"),style:"Impact"===n.display?{color:"#606367"}:{color:"#BABCBE"}},"Impact")),r.createElement("button",{className:"close-btn",onClick:()=>{n.setDisplay(null)}},r.createElement(E.Z,{style:{fontSize:"20px",color:"#606367"}})))}var C=t(1265),S={};function z(){return r.createElement(r.Fragment,null,r.createElement("div",{className:"backgrounds-p1"},r.createElement("div",{className:"backgrounds-header"},"YOUR BACKGROUNDS")),r.createElement("div",{className:"backgrounds-p2"},r.createElement("div",{className:"backgrounds-header"},"GALLERY")))}S.styleTagTransform=f(),S.setAttributes=h(),S.insert=d().bind(null,"head"),S.domAPI=l(),S.insertStyleElement=u(),i()(C.Z,S),C.Z&&C.Z.locals&&C.Z.locals;var Z=t(4480),N={};N.styleTagTransform=f(),N.setAttributes=h(),N.insert=d().bind(null,"head"),N.domAPI=l(),N.insertStyleElement=u(),i()(Z.Z,N),Z.Z&&Z.Z.locals&&Z.Z.locals;var F=t(7397);function I(){return r.createElement("div",null,r.createElement(F.Z,{style:{marginTop:"10%",width:"100px",height:"100px",transform:"rotate(-15deg)",color:"#b4b4b4",strokeWidth:"10",marginLeft:"45%"}}),r.createElement("div",{className:"impact-header"},"Under Construction"),r.createElement("div",{className:"impact-header-p2"},"Stay tuned as we hope to bring more ",r.createElement("br",null),"task apps soon!"))}var A=t(9469),T={};function j(){return r.createElement("div",{className:"widgets"},r.createElement("div",{className:"widgets-header"},"WIDGETS"))}T.styleTagTransform=f(),T.setAttributes=h(),T.insert=d().bind(null,"head"),T.domAPI=l(),T.insertStyleElement=u(),i()(A.Z,T),A.Z&&A.Z.locals&&A.Z.locals;var D=t(4172),R=t(6236);const P=t.p+"6136e97e50d91612cc42.svg",O=t.p+"5327be7f8b10a7344ab6.svg",B=t.p+"52e4201be97e68a45f83.svg",_=n=>r.createElement(D.Z,{className:"bottom-nav",value:n.display,onChange:(e,t)=>{n.setDisplay(t)},showLabels:!1,sx:{bgcolor:null==n.display?"rgba(217, 217, 217, 0.40)":"#FFF",width:140,height:41,flexShrink:0,borderRadius:10,justifyContent:"center",alignItems:"center",opacity:.8,position:"fixed",alignSelf:"flex-end",marginBottom:"15px"}},r.createElement(R.Z,{icon:r.createElement("img",{src:P,style:{width:19,height:19,zIndex:999,filter:"Widgets"!=n.display?"brightness(0)":"",opacity:"Widgets"!=n.display?"0.5":"1"}}),sx:{minWidth:10},TouchRippleProps:{style:{width:25,height:25,top:-3,left:11,backgroundColor:"Widgets"==n.display?"#606367":"transparent",borderRadius:5}},onClick:()=>{n.setDisplay("Widgets")}}),r.createElement(R.Z,{icon:r.createElement("img",{src:O,style:{width:19,height:19,zIndex:999,filter:"Backgrounds"!=n.display?"brightness(0)":"",opacity:"Backgrounds"!=n.display?"0.5":"1"}}),sx:{minWidth:10},TouchRippleProps:{style:{width:25,height:25,top:-3,left:11,backgroundColor:"Backgrounds"==n.display?"#606367":"transparent",borderRadius:5}},onClick:()=>{n.setDisplay("Backgrounds")}}),r.createElement(R.Z,{icon:r.createElement("img",{src:B,style:{width:19,height:19,zIndex:999,filter:"Impact"!=n.display?"brightness(0)":"",opacity:"Impact"!=n.display?"0.5":"1"}}),sx:{minWidth:10},TouchRippleProps:{style:{width:25,height:25,top:-3,left:11,backgroundColor:"Impact"==n.display?"#606367":"transparent",borderRadius:5}},onClick:()=>{n.setDisplay("Impact")}}));function M(){return r.createElement("div",{className:"widgets-nav"},"Icons")}var L=t(6544),U={};U.styleTagTransform=f(),U.setAttributes=h(),U.insert=d().bind(null,"head"),U.domAPI=l(),U.insertStyleElement=u(),i()(L.Z,U),L.Z&&L.Z.locals&&L.Z.locals;var W=t(4346),$={};function G(n){const e=new Date,t=new Date(n);return e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}function Y(){return chrome.history.search({text:"",maxResults:20},(n=>{const e=document.getElementById("history-list-recent"),t=document.getElementById("history-list-today");let r=0;for(let a=0;a<n.length;a++){let o=n[a];const i=document.createElement("li");if(i.classList.add("history-item"),!(r<5||G(o.lastVisitTime)))break;{const n=document.createElement("img");n.classList.add("website-icon"),n.src=`https://www.google.com/s2/favicons?domain=${new URL(o.url).hostname}`;const a=document.createElement("a");a.classList.add("website-domain"),a.textContent=new URL(o.url).hostname,a.href=o.url,a.addEventListener("click",(n=>{n.preventDefault(),chrome.tabs.create({url:o.url})})),i.appendChild(n),i.appendChild(a),r<5?(e.appendChild(i),r++):t.appendChild(i)}}})),r.createElement("div",{className:"history"},r.createElement("div",{className:"history-list-header"},"Recently Closed"),r.createElement("div",{className:"history-list"},r.createElement("ul",{id:"history-list-recent"})),r.createElement("div",{className:"history-list-header"},"Today"),r.createElement("div",{className:"history-list"},r.createElement("ul",{id:"history-list-today"})))}$.styleTagTransform=f(),$.setAttributes=h(),$.insert=d().bind(null,"head"),$.domAPI=l(),$.insertStyleElement=u(),i()(W.Z,$),W.Z&&W.Z.locals&&W.Z.locals;var q=t(1849),H=t(7431);function Q(n){return r.createElement("div",{className:"widgets-bar-header"},r.createElement("div",{className:"header-text"},n.display),r.createElement("button",{className:"close-btn2",onClick:()=>{n.setDisplay(null)}},r.createElement(E.Z,{style:{fontSize:"17px",color:"#D8D8D8"}})),r.createElement("button",{className:"launch-btn",onClick:()=>{}},r.createElement(H.Z,{style:{fontSize:"17px",color:"#D8D8D8"}})),r.createElement("button",{className:"refresh-btn",onClick:()=>{}},r.createElement(q.Z,{style:{fontSize:"17px",color:"#D8D8D8"}})))}function V(n){return r.createElement("div",{className:"widgets-box"},r.createElement(M,null),r.createElement("div",{className:"widgets-bar-content"},r.createElement(Q,{display:n.display,setDisplay:n.setDisplay}),"History"==n.display?r.createElement(Y,null):r.createElement(r.Fragment,null)))}function K(n){return r.createElement("button",{onClick:()=>{n.setDisplay("History")}},"Open Widgets")}var X=t(9062),J=t(2116),nn=t(512),en=t(8767);const tn=n=>(0,en.useQuery)({queryKey:[n],queryFn:()=>(n=>{return e=void 0,t=void 0,a=function*(){const e="MISSING_ENV_VAR".REACT_APP_WEATHER_API||"";if(!e)throw new Error("No API key");if(!n.long||!n.lat)throw new Error("No coordinates provided");const t={method:"GET"},r=`http://api.weatherapi.com/v1/current.json?key=${e}&q=${n.lat},${n.long}&aqi=no`;try{const n=yield fetch(r,t);return yield n.json()}catch(n){console.log("Error",n)}},new((r=void 0)||(r=Promise))((function(n,o){function i(n){try{l(a.next(n))}catch(n){o(n)}}function s(n){try{l(a.throw(n))}catch(n){o(n)}}function l(e){var t;e.done?n(e.value):(t=e.value,t instanceof r?t:new r((function(n){n(t)}))).then(i,s)}l((a=a.apply(e,t||[])).next())}));var e,t,r,a})(n),staleTime:144e5,cacheTime:147e5}),rn=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],an=()=>{const[n,e]=(0,r.useState)({long:null,lat:null});(0,r.useEffect)((()=>{"geolocation"in navigator?navigator.geolocation.getCurrentPosition((n=>{const t=Math.round(100*n.coords.latitude)/100,r=Math.round(100*n.coords.longitude)/100;e({long:r,lat:t})}),(n=>{console.error("Error getting location: "+n.message)}),{timeout:36e5,maximumAge:0}):console.error("Geolocation is not supported by this browser")}),[]);const{isLoading:t,error:a,data:o,isFetching:i}=tn(n);return console.log(t,a,o,i),r.createElement("div",{className:(0,nn.Z)("absolute top-24 right-8 p-4 w-[300px] h-[150px] rounded-lg bg-gray-400 text-white flex items-center",t?"justify-center flex-col gap-y-3":"justify-between")},t&&r.createElement(r.Fragment,null,r.createElement(X.Z,null),r.createElement("p",{className:"text-base"},"Fetching the weather for your region")),o&&r.createElement(r.Fragment,null,r.createElement("div",{className:"flex flex-col justify-start"},r.createElement("p",{className:"text-base"},o.current.condition.text),r.createElement("img",{src:`https:${o.current.condition.icon}`,alt:"icon of current weather"})),r.createElement(J.Z,{orientation:"vertical",flexItem:!0,sx:{borderBottomWidth:5}}),r.createElement("div",{className:"flex flex-col justify-start"},r.createElement("p",{className:"text-base font-bold"},o.location.name,", ",o.location.country),r.createElement("p",{className:"text-base"},rn[(new Date).getDay()]),r.createElement("p",{className:"text-3xl"},o.current.temp_c," °"),r.createElement("p",{className:"text-base"},o.current.temp_f," ° F"))),!o&&a&&r.createElement("p",null,"There was an error fetching the data"))},on=function(){const[n,e]=(0,r.useState)(null),[t,a]=(0,r.useState)(null),o=new en.QueryClient;return(0,r.useEffect)((()=>{console.log(t)}),[t]),r.createElement(en.QueryClientProvider,{client:o},r.createElement("div",{className:"new-tab-override"},r.createElement(_,{display:n,setDisplay:e}),r.createElement(v,{display:n,setDisplay:e},r.createElement(k,{display:n,setDisplay:e}),"Widgets"===n&&r.createElement(j,null),"Backgrounds"===n&&r.createElement(z,null),"Impact"===n&&r.createElement(I,null)),r.createElement(an,null),null==t?r.createElement(K,{display:t,setDisplay:a}):r.createElement(V,{display:t,setDisplay:a})))};var sn=t(7347),ln={};ln.styleTagTransform=f(),ln.setAttributes=h(),ln.insert=d().bind(null,"head"),ln.domAPI=l(),ln.insertStyleElement=u(),i()(sn.Z,ln),sn.Z&&sn.Z.locals&&sn.Z.locals,function(){const n=document.createElement("div");if(n.style.width="100%",n.style.height="100%",document.body.appendChild(n),!n)throw new Error("Can not find AppContainer");(0,a.s)(n).render(r.createElement(on,null))}()},675:(n,e,t)=>{n.exports=t.p+"c8ba52b05a9ef10f4758.woff2"}},a={};function o(n){var e=a[n];if(void 0!==e)return e.exports;var t=a[n]={id:n,exports:{}};return r[n](t,t.exports,o),t.exports}o.m=r,n=[],o.O=(e,t,r,a)=>{if(!t){var i=1/0;for(d=0;d<n.length;d++){for(var[t,r,a]=n[d],s=!0,l=0;l<t.length;l++)(!1&a||i>=a)&&Object.keys(o.O).every((n=>o.O[n](t[l])))?t.splice(l--,1):(s=!1,a<i&&(i=a));if(s){n.splice(d--,1);var c=r();void 0!==c&&(e=c)}}return e}a=a||0;for(var d=n.length;d>0&&n[d-1][2]>a;d--)n[d]=n[d-1];n[d]=[t,r,a]},o.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return o.d(e,{a:e}),e},t=Object.getPrototypeOf?n=>Object.getPrototypeOf(n):n=>n.__proto__,o.t=function(n,r){if(1&r&&(n=this(n)),8&r)return n;if("object"==typeof n&&n){if(4&r&&n.__esModule)return n;if(16&r&&"function"==typeof n.then)return n}var a=Object.create(null);o.r(a);var i={};e=e||[null,t({}),t([]),t(t)];for(var s=2&r&&n;"object"==typeof s&&!~e.indexOf(s);s=t(s))Object.getOwnPropertyNames(s).forEach((e=>i[e]=()=>n[e]));return i.default=()=>n,o.d(a,i),a},o.d=(n,e)=>{for(var t in e)o.o(e,t)&&!o.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},o.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),o.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),o.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},(()=>{var n;o.g.importScripts&&(n=o.g.location+"");var e=o.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");if(t.length)for(var r=t.length-1;r>-1&&!n;)n=t[r--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),o.p=n})(),(()=>{o.b=document.baseURI||self.location.href;var n={414:0};o.O.j=e=>0===n[e];var e=(e,t)=>{var r,a,[i,s,l]=t,c=0;if(i.some((e=>0!==n[e]))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(l)var d=l(o)}for(e&&e(t);c<i.length;c++)a=i[c],o.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return o.O(d)},t=self.webpackChunkaid_vertize=self.webpackChunkaid_vertize||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))})(),o.nc=void 0;var i=o.O(void 0,[975,299],(()=>o(7072)));i=o.O(i)})();
