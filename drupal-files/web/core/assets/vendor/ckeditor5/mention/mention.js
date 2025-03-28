/*!
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(()=>{var e={387:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var i=n(758),o=n.n(i),r=n(935),s=n.n(r)()(o());s.push([e.id,":root{--ck-color-mention-background:rgba(153,0,48,.1);--ck-color-mention-text:#990030}.ck-content .mention{background:var(--ck-color-mention-background);color:var(--ck-color-mention-text)}",""]);const a=s},89:(e,t,n)=>{"use strict";n.d(t,{A:()=>a});var i=n(758),o=n.n(i),r=n(935),s=n.n(r)()(o());s.push([e.id,":root{--ck-mention-list-max-height:300px}.ck.ck-mentions{max-height:var(--ck-mention-list-max-height);overflow-x:hidden;overflow-y:auto;overscroll-behavior:contain}.ck.ck-mentions>.ck-list__item{flex-shrink:0;overflow:hidden}",""]);const a=s},935:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,o,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(i)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);i&&s[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},758:e=>{"use strict";e.exports=function(e){return e[1]}},591:e=>{"use strict";var t=[];function n(e){for(var n=-1,i=0;i<t.length;i++)if(t[i].identifier===e){n=i;break}return n}function i(e,i){for(var r={},s=[],a=0;a<e.length;a++){var c=e[a],d=i.base?c[0]+i.base:c[0],l=r[d]||0,u="".concat(d," ").concat(l);r[d]=l+1;var m=n(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(f);else{var h=o(f,i);i.byIndex=a,t.splice(a,0,{identifier:u,updater:h,references:1})}s.push(u)}return s}function o(e,t){var n=t.domAPI(t);n.update(e);return function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var r=i(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var a=n(r[s]);t[a].references--}for(var c=i(e,o),d=0;d<r.length;d++){var l=n(r[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}r=c}}},128:e=>{"use strict";var t={};e.exports=function(e,n){var i=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}},51:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},21:e=>{"use strict";e.exports=function(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}},639:e=>{"use strict";var t,n=(t=[],function(e,n){return t[e]=n,t.filter(Boolean).join("\n")});function i(e,t,i,o){var r;if(i)r="";else{r="",o.supports&&(r+="@supports (".concat(o.supports,") {")),o.media&&(r+="@media ".concat(o.media," {"));var s=void 0!==o.layer;s&&(r+="@layer".concat(o.layer.length>0?" ".concat(o.layer):""," {")),r+=o.css,s&&(r+="}"),o.media&&(r+="}"),o.supports&&(r+="}")}if(e.styleSheet)e.styleSheet.cssText=n(t,r);else{var a=document.createTextNode(r),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(a,c[t]):e.appendChild(a)}}var o={singleton:null,singletonCounter:0};e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=o.singletonCounter++,n=o.singleton||(o.singleton=e.insertStyleElement(e));return{update:function(e){i(n,t,!1,e)},remove:function(e){i(n,t,!0,e)}}}},782:(e,t,n)=>{e.exports=n(237)("./src/core.js")},834:(e,t,n)=>{e.exports=n(237)("./src/typing.js")},311:(e,t,n)=>{e.exports=n(237)("./src/ui.js")},584:(e,t,n)=>{e.exports=n(237)("./src/utils.js")},237:e=>{"use strict";e.exports=CKEditor5.dll}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var r=t[i]={id:i,exports:{}};return e[i](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};(()=>{"use strict";n.r(i),n.d(i,{DomWrapperView:()=>ie,Mention:()=>pe,MentionEditing:()=>s,MentionListItemView:()=>oe,MentionUI:()=>ae,MentionsView:()=>ne});var e=n(782),t=n(584);const o={"(":")","[":"]","{":"}"};class r extends e.Command{constructor(e){super(e),this._isEnabledBasedOnSelection=!1}refresh(){const e=this.editor.model,t=e.document;this.isEnabled=e.schema.checkAttributeInSelection(t.selection,"mention")}execute(e){const n=this.editor.model,i=n.document.selection,r="string"==typeof e.mention?{id:e.mention}:e.mention,s=r.id,c=e.range||i.getFirstRange();if(!n.canEditAt(c))return;const d=e.text||s,l=a({_text:d,id:s},r);if(1!=e.marker.length)throw new t.CKEditorError("mentioncommand-incorrect-marker",this);if(s.charAt(0)!=e.marker)throw new t.CKEditorError("mentioncommand-incorrect-id",this);n.change((e=>{const r=(0,t.toMap)(i.getAttributes()),s=new Map(r.entries());s.set("mention",l);const a=n.insertContent(e.createText(d,s),c),u=a.start.nodeBefore,m=a.end.nodeAfter,f=m&&m.is("$text")&&m.data.startsWith(" ");let h=!1;if(u&&m&&u.is("$text")&&m.is("$text")){const e=u.data.slice(-1),t=e in o,n=t&&m.data.startsWith(o[e]);h=t&&n}h||f||n.insertContent(e.createText(" ",r),c.start.getShiftedBy(d.length))}))}}class s extends e.Plugin{static get pluginName(){return"MentionEditing"}static get isOfficialPlugin(){return!0}init(){const e=this.editor,t=e.model,n=t.document;t.schema.extend("$text",{allowAttributes:"mention"}),e.conversion.for("upcast").elementToAttribute({view:{name:"span",key:"data-mention",classes:"mention"},model:{key:"mention",value:e=>c(e)}}),e.conversion.for("downcast").attributeToElement({model:"mention",view:l}),e.conversion.for("downcast").add(d),n.registerPostFixer((e=>function(e,t,n){const i=t.differ.getChanges();let o=!1;for(const t of i){if("attribute"==t.type)continue;const i=t.position;if("$text"==t.name){const t=i.textNode&&i.textNode.nextSibling;o=m(i.textNode,e)||o,o=m(t,e)||o,o=m(i.nodeBefore,e)||o,o=m(i.nodeAfter,e)||o}if("$text"!=t.name&&"insert"==t.type){const t=i.nodeAfter;for(const n of e.createRangeIn(t).getItems())o=m(n,e)||o}if("insert"==t.type&&n.isInline(t.name)){const t=i.nodeAfter&&i.nodeAfter.nextSibling;o=m(i.nodeBefore,e)||o,o=m(t,e)||o}}return o}(e,n,t.schema))),n.registerPostFixer((e=>function(e,t){const n=t.differ.getChanges();let i=!1;for(const t of n)if("attribute"===t.type&&"mention"!=t.attributeKey){const n=t.range.start.nodeBefore,o=t.range.end.nodeAfter;for(const r of[n,o])u(r)&&r.getAttribute(t.attributeKey)!=t.attributeNewValue&&(e.setAttribute(t.attributeKey,t.attributeNewValue,r),i=!0)}return i}(e,n))),n.registerPostFixer((e=>function(e,t){const n=t.selection,i=n.focus;if(n.isCollapsed&&n.hasAttribute("mention")&&function(e){const t=e.isAtStart;return e.nodeBefore&&e.nodeBefore.is("$text")||t}(i))return e.removeSelectionAttribute("mention"),!0;return!1}(e,n))),e.commands.add("mention",new r(e))}}function a(e,n){return Object.assign({uid:(0,t.uid)()},e,n||{})}function c(e,t){const n=e.getAttribute("data-mention"),i=e.getChild(0);if(!i)return;return a({id:n,_text:i.data},t)}function d(e){e.on("attribute:mention",((e,t,n)=>{const i=t.attributeNewValue;if(!t.item.is("$textProxy")||!i)return;const o=t.range.start;(o.textNode||o.nodeAfter).data!=i._text&&n.consumable.consume(t.item,e.name)}),{priority:"highest"})}function l(e,{writer:t}){if(!e)return;const n={class:"mention","data-mention":e.id},i={id:e.uid,priority:20};return t.createAttributeElement("span",n,i)}function u(e){if(!e||!e.is("$text")&&!e.is("$textProxy")||!e.hasAttribute("mention"))return!1;return e.data!=e.getAttribute("mention")._text}function m(e,t){return!!u(e)&&(t.removeAttribute("mention",e),!0)}var f=n(311),h=n(834);const g=function(e){var t=typeof e;return null!=e&&("object"==t||"function"==t)};const p="object"==typeof global&&global&&global.Object===Object&&global;var v="object"==typeof self&&self&&self.Object===Object&&self;const b=p||v||Function("return this")();const w=function(){return b.Date.now()};var x=/\s/;const y=function(e){for(var t=e.length;t--&&x.test(e.charAt(t)););return t};var _=/^\s+/;const k=function(e){return e?e.slice(0,y(e)+1).replace(_,""):e};const A=b.Symbol;var C=Object.prototype,I=C.hasOwnProperty,E=C.toString,V=A?A.toStringTag:void 0;const M=function(e){var t=I.call(e,V),n=e[V];try{e[V]=void 0;var i=!0}catch(e){}var o=E.call(e);return i&&(t?e[V]=n:delete e[V]),o};var P=Object.prototype.toString;const T=function(e){return P.call(e)};var R=A?A.toStringTag:void 0;const S=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":R&&R in Object(e)?M(e):T(e)};const O=function(e){return null!=e&&"object"==typeof e};const j=function(e){return"symbol"==typeof e||O(e)&&"[object Symbol]"==S(e)};var $=/^[-+]0x[0-9a-f]+$/i,F=/^0b[01]+$/i,N=/^0o[0-7]+$/i,U=parseInt;const B=function(e){if("number"==typeof e)return e;if(j(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=k(e);var n=F.test(e);return n||N.test(e)?U(e.slice(2),n?2:8):$.test(e)?NaN:+e};var L=Math.max,q=Math.min;const D=function(e,t,n){var i,o,r,s,a,c,d=0,l=!1,u=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function f(t){var n=i,r=o;return i=o=void 0,d=t,s=e.apply(r,n)}function h(e){var n=e-c;return void 0===c||n>=t||n<0||u&&e-d>=r}function p(){var e=w();if(h(e))return v(e);a=setTimeout(p,function(e){var n=t-(e-c);return u?q(n,r-(e-d)):n}(e))}function v(e){return a=void 0,m&&i?f(e):(i=o=void 0,s)}function b(){var e=w(),n=h(e);if(i=arguments,o=this,c=e,n){if(void 0===a)return function(e){return d=e,a=setTimeout(p,t),l?f(e):s}(c);if(u)return clearTimeout(a),a=setTimeout(p,t),f(c)}return void 0===a&&(a=setTimeout(p,t)),s}return t=B(t)||0,g(n)&&(l=!!n.leading,r=(u="maxWait"in n)?L(B(n.maxWait)||0,t):r,m="trailing"in n?!!n.trailing:m),b.cancel=function(){void 0!==a&&clearTimeout(a),d=0,i=c=o=a=void 0},b.flush=function(){return void 0===a?s:v(w())},b};var K=n(591),W=n.n(K),H=n(639),z=n.n(H),G=n(128),J=n.n(G),Q=n(21),X=n.n(Q),Y=n(51),Z=n.n(Y),ee=n(89),te={attributes:{"data-cke":!0}};te.setAttributes=X(),te.insert=J().bind(null,"head"),te.domAPI=z(),te.insertStyleElement=Z();W()(ee.A,te);ee.A&&ee.A.locals&&ee.A.locals;class ne extends f.ListView{constructor(e){super(e),this.extendTemplate({attributes:{class:["ck-mentions"],tabindex:"-1"}})}selectFirst(){this.select(0)}selectNext(){const e=this.selected,t=this.items.getIndex(e);this.select(t+1)}selectPrevious(){const e=this.selected,t=this.items.getIndex(e);this.select(t-1)}select(e){let t=0;e>0&&e<this.items.length?t=e:e<0&&(t=this.items.length-1);const n=this.items.get(t);this.selected!==n&&(this.selected&&this.selected.removeHighlight(),n.highlight(),this.selected=n,this._isItemVisibleInScrolledArea(n)||(this.element.scrollTop=n.element.offsetTop))}executeSelected(){this.selected.fire("execute")}_isItemVisibleInScrolledArea(e){return new t.Rect(this.element).contains(new t.Rect(e.element))}}class ie extends f.View{constructor(e,t){super(e),this.template=void 0,this.domElement=t,this.domElement.classList.add("ck-button"),this.set("isOn",!1),this.on("change:isOn",((e,t,n)=>{n?(this.domElement.classList.add("ck-on"),this.domElement.classList.remove("ck-off")):(this.domElement.classList.add("ck-off"),this.domElement.classList.remove("ck-on"))})),this.listenTo(this.domElement,"click",(()=>{this.fire("execute")}))}render(){super.render(),this.element=this.domElement}focus(){this.domElement.focus()}}class oe extends f.ListItemView{highlight(){this.children.first.isOn=!0}removeHighlight(){this.children.first.isOn=!1}}const re=[t.keyCodes.arrowup,t.keyCodes.arrowdown,t.keyCodes.esc],se=[t.keyCodes.enter,t.keyCodes.tab];class ae extends e.Plugin{static get pluginName(){return"MentionUI"}static get isOfficialPlugin(){return!0}static get requires(){return[f.ContextualBalloon]}constructor(e){super(e),this._items=new t.Collection,this._mentionsView=this._createMentionView(),this._mentionsConfigurations=new Map,this._requestFeedDebounced=D(this._requestFeed,100),e.config.define("mention",{feeds:[]})}init(){const e=this.editor,n=e.config.get("mention.commitKeys")||se,i=re.concat(n);this._balloon=e.plugins.get(f.ContextualBalloon),e.editing.view.document.on("keydown",((e,o)=>{var r;r=o.keyCode,i.includes(r)&&this._isUIVisible&&(o.preventDefault(),e.stop(),o.keyCode==t.keyCodes.arrowdown&&this._mentionsView.selectNext(),o.keyCode==t.keyCodes.arrowup&&this._mentionsView.selectPrevious(),n.includes(o.keyCode)&&this._mentionsView.executeSelected(),o.keyCode==t.keyCodes.esc&&this._hideUIAndRemoveMarker())}),{priority:"highest"}),(0,f.clickOutsideHandler)({emitter:this._mentionsView,activator:()=>this._isUIVisible,contextElements:()=>[this._balloon.view.element],callback:()=>this._hideUIAndRemoveMarker()});const o=e.config.get("mention.feeds");for(const e of o){const{feed:n,marker:i,dropdownLimit:o}=e;if(!me(i))throw new t.CKEditorError("mentionconfig-incorrect-marker",null,{marker:i});const r={marker:i,feedCallback:"function"==typeof n?n.bind(this.editor):ue(n),itemRenderer:e.itemRenderer,dropdownLimit:o};this._mentionsConfigurations.set(i,r)}this._setupTextWatcher(o),this.listenTo(e,"change:isReadOnly",(()=>{this._hideUIAndRemoveMarker()})),this.on("requestFeed:response",((e,t)=>this._handleFeedResponse(t))),this.on("requestFeed:error",(()=>this._hideUIAndRemoveMarker()))}destroy(){super.destroy(),this._mentionsView.destroy()}get _isUIVisible(){return this._balloon.visibleView===this._mentionsView}_createMentionView(){const e=this.editor.locale,t=new ne(e);return t.items.bindTo(this._items).using((n=>{const{item:i,marker:o}=n,{dropdownLimit:r}=this._mentionsConfigurations.get(o),s=r||this.editor.config.get("mention.dropdownLimit")||10;if(t.items.length>=s)return null;const a=new oe(e),c=this._renderItem(i,o);return c.delegate("execute").to(a),a.children.add(c),a.item=i,a.marker=o,a.on("execute",(()=>{t.fire("execute",{item:i,marker:o})})),a})),t.on("execute",((e,t)=>{const n=this.editor,i=n.model,o=t.item,r=t.marker,s=n.model.markers.get("mention"),a=i.createPositionAt(i.document.selection.focus),c=i.createPositionAt(s.getStart()),d=i.createRange(c,a);this._hideUIAndRemoveMarker(),n.execute("mention",{mention:o,text:o.text,marker:r,range:d}),n.editing.view.focus()})),t}_getItemRenderer(e){const{itemRenderer:t}=this._mentionsConfigurations.get(e);return t}_requestFeed(e,n){this._lastRequested=n;const{feedCallback:i}=this._mentionsConfigurations.get(e),o=i(n);o instanceof Promise?o.then((t=>{this._lastRequested==n?this.fire("requestFeed:response",{feed:t,marker:e,feedText:n}):this.fire("requestFeed:discarded",{feed:t,marker:e,feedText:n})})).catch((n=>{this.fire("requestFeed:error",{error:n}),(0,t.logWarning)("mention-feed-callback-error",{marker:e})})):this.fire("requestFeed:response",{feed:o,marker:e,feedText:n})}_setupTextWatcher(e){const t=this.editor,n=e.map((e=>({...e,pattern:le(e.marker,e.minimumCharacters||0)}))),i=new h.TextWatcher(t.model,function(e){const t=t=>{const n=de(e,t);if(!n)return!1;let i=0;0!==n.position&&(i=n.position-1);const o=t.substring(i);return n.pattern.test(o)};return t}(n));i.on("matched",((e,i)=>{const o=de(n,i.text),r=t.model.document.selection.focus,s=t.model.createPositionAt(r.parent,o.position);if(function(e){const t=e.textNode&&e.textNode.hasAttribute("mention"),n=e.nodeBefore;return t||n&&n.is("$text")&&n.hasAttribute("mention")}(r)||function(e){const t=e.nodeAfter;return t&&t.is("$text")&&t.hasAttribute("mention")}(s))return void this._hideUIAndRemoveMarker();const a=function(e,t){let n=0;0!==e.position&&(n=e.position-1);const i=le(e.marker,0),o=t.substring(n);return o.match(i)[2]}(o,i.text),c=o.marker.length+a.length,d=r.getShiftedBy(-c),l=r.getShiftedBy(-a.length),u=t.model.createRange(d,l);if(fe(t)){const e=t.model.markers.get("mention");t.model.change((t=>{t.updateMarker(e,{range:u})}))}else t.model.change((e=>{e.addMarker("mention",{range:u,usingOperation:!1,affectsData:!1})}));this._requestFeedDebounced(o.marker,a)})),i.on("unmatched",(()=>{this._hideUIAndRemoveMarker()}));const o=t.commands.get("mention");return i.bind("isEnabled").to(o),i}_handleFeedResponse(e){const{feed:t,marker:n}=e;if(!fe(this.editor))return;this._items.clear();for(const e of t){const t="object"!=typeof e?{id:e,text:e}:e;this._items.add({item:t,marker:n})}const i=this.editor.model.markers.get("mention");this._items.length?this._showOrUpdateUI(i):this._hideUIAndRemoveMarker()}_showOrUpdateUI(e){this._isUIVisible?this._balloon.updatePosition(this._getBalloonPanelPositionData(e,this._mentionsView.position)):this._balloon.add({view:this._mentionsView,position:this._getBalloonPanelPositionData(e,this._mentionsView.position),singleViewMode:!0}),this._mentionsView.position=this._balloon.view.position,this._mentionsView.selectFirst()}_hideUIAndRemoveMarker(){this._balloon.hasView(this._mentionsView)&&this._balloon.remove(this._mentionsView),fe(this.editor)&&this.editor.model.change((e=>e.removeMarker("mention"))),this._mentionsView.position=void 0}_renderItem(e,t){const n=this.editor;let i,o=e.id;const r=this._getItemRenderer(t);if(r){const t=r(e);"string"!=typeof t?i=new ie(n.locale,t):o=t}if(!i){const e=new f.ButtonView(n.locale);e.label=o,e.withText=!0,i=e}return i}_getBalloonPanelPositionData(e,n){const i=this.editor,o=i.editing,r=o.view.domConverter,s=o.mapper;return{target:()=>{let n=e.getRange();"$graveyard"==n.start.root.rootName&&(n=i.model.document.selection.getFirstRange());const o=s.toViewRange(n);return t.Rect.getDomRangeRects(r.viewRangeToDom(o)).pop()},limiter:()=>{const e=this.editor.editing.view,t=e.document.selection.editableElement;return t?e.domConverter.mapViewToDom(t.root):null},positions:ce(n,i.locale.uiLanguageDirection)}}}function ce(e,t){const n={caret_se:e=>({top:e.bottom+3,left:e.right,name:"caret_se",config:{withArrow:!1}}),caret_ne:(e,t)=>({top:e.top-t.height-3,left:e.right,name:"caret_ne",config:{withArrow:!1}}),caret_sw:(e,t)=>({top:e.bottom+3,left:e.right-t.width,name:"caret_sw",config:{withArrow:!1}}),caret_nw:(e,t)=>({top:e.top-t.height-3,left:e.right-t.width,name:"caret_nw",config:{withArrow:!1}})};return Object.prototype.hasOwnProperty.call(n,e)?[n[e]]:"rtl"!==t?[n.caret_se,n.caret_sw,n.caret_ne,n.caret_nw]:[n.caret_sw,n.caret_se,n.caret_nw,n.caret_ne]}function de(e,t){let n;for(const i of e){const e=t.lastIndexOf(i.marker);e>0&&!t.substring(e-1).match(i.pattern)||(!n||e>=n.position)&&(n={marker:i.marker,position:e,minimumCharacters:i.minimumCharacters,pattern:i.pattern})}return n}function le(e,n){const i=0==n?"*":`{${n},}`,o=t.env.features.isRegExpUnicodePropertySupported?"\\p{Ps}\\p{Pi}\"'":"\\(\\[{\"'";e=e.replace(/[.*+?^${}()\-|[\]\\]/g,"\\$&");return new RegExp(`(?:^|[ ${o}])([${e}])(.${i})$`,"u")}function ue(e){return t=>e.filter((e=>("string"==typeof e?e:String(e.id)).toLowerCase().includes(t.toLowerCase())))}function me(e){return e&&1==e.length}function fe(e){return e.model.markers.has("mention")}var he=n(387),ge={attributes:{"data-cke":!0}};ge.setAttributes=X(),ge.insert=J().bind(null,"head"),ge.domAPI=z(),ge.insertStyleElement=Z();W()(he.A,ge);he.A&&he.A.locals&&he.A.locals;class pe extends e.Plugin{toMentionAttribute(e,t){return c(e,t)}static get pluginName(){return"Mention"}static get isOfficialPlugin(){return!0}static get requires(){return[s,ae]}}})(),(window.CKEditor5=window.CKEditor5||{}).mention=i})();