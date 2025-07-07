import{af as z,av as l,aj as P,ak as y,ai as p,aH as w,ag as f,aZ as O,aq as H,bL as S,ay as W,g as T,as as q,t as d,v as c,Z as k,$ as M,X as I,x as b,z as L,a9 as E,a1 as g,a2 as v,W as D,y as V,A as _,aa as N,aw as j,at as Z}from"./BZwby5eq.js";import{s as B}from"./C0XwZ0WI.js";import{s as U}from"./CrX3woDL.js";import{s as C}from"./CcoDSO_5.js";import{R as X}from"./Bo6d7Niz.js";import"./4MKSu4WY.js";import"./DRVuadwS.js";import"./DmfvTtO6.js";var J=({dt:t})=>`
.p-panelmenu {
    display: flex;
    flex-direction: column;
    gap: ${t("panelmenu.gap")};
}

.p-panelmenu-panel {
    background: ${t("panelmenu.panel.background")};
    border-width: ${t("panelmenu.panel.border.width")};
    border-style: solid;
    border-color: ${t("panelmenu.panel.border.color")};
    color: ${t("panelmenu.panel.color")};
    border-radius: ${t("panelmenu.panel.border.radius")};
    padding: ${t("panelmenu.panel.padding")};
}

.p-panelmenu-panel:first-child {
    border-width: ${t("panelmenu.panel.first.border.width")};
    border-start-start-radius: ${t("panelmenu.panel.first.top.border.radius")};
    border-start-end-radius: ${t("panelmenu.panel.first.top.border.radius")};
}

.p-panelmenu-panel:last-child {
    border-width: ${t("panelmenu.panel.last.border.width")};
    border-end-start-radius: ${t("panelmenu.panel.last.bottom.border.radius")};
    border-end-end-radius: ${t("panelmenu.panel.last.bottom.border.radius")};
}

.p-panelmenu-header {
    outline: 0 none;
}

.p-panelmenu-header-content {
    border-radius: ${t("panelmenu.item.border.radius")};
    transition: background ${t("panelmenu.transition.duration")}, color ${t("panelmenu.transition.duration")}, outline-color ${t("panelmenu.transition.duration")}, box-shadow ${t("panelmenu.transition.duration")};
    outline-color: transparent;
    color: ${t("panelmenu.item.color")};
}

.p-panelmenu-header-link {
    display: flex;
    gap: ${t("panelmenu.item.gap")};
    padding: ${t("panelmenu.item.padding")};
    align-items: center;
    user-select: none;
    cursor: pointer;
    position: relative;
    text-decoration: none;
    color: inherit;
}

.p-panelmenu-header-icon,
.p-panelmenu-item-icon {
    color: ${t("panelmenu.item.icon.color")};
}

.p-panelmenu-submenu-icon {
    color: ${t("panelmenu.submenu.icon.color")};
}

.p-panelmenu-submenu-icon:dir(rtl) {
    transform: rotate(180deg);
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content {
    background: ${t("panelmenu.item.focus.background")};
    color: ${t("panelmenu.item.focus.color")};
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-header-icon {
    color: ${t("panelmenu.item.icon.focus.color")};
}

.p-panelmenu-header:not(.p-disabled):focus-visible .p-panelmenu-header-content .p-panelmenu-submenu-icon {
    color: ${t("panelmenu.submenu.icon.focus.color")};
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover {
    background: ${t("panelmenu.item.focus.background")};
    color: ${t("panelmenu.item.focus.color")};
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-header-icon {
    color: ${t("panelmenu.item.icon.focus.color")};
}

.p-panelmenu-header:not(.p-disabled) .p-panelmenu-header-content:hover .p-panelmenu-submenu-icon {
    color: ${t("panelmenu.submenu.icon.focus.color")};
}

.p-panelmenu-submenu {
    margin: 0;
    padding: 0 0 0 ${t("panelmenu.submenu.indent")};
    outline: 0;
    list-style: none;
}

.p-panelmenu-submenu:dir(rtl) {
    padding: 0 ${t("panelmenu.submenu.indent")} 0 0;
}

.p-panelmenu-item-link {
    display: flex;
    gap: ${t("panelmenu.item.gap")};
    padding: ${t("panelmenu.item.padding")};
    align-items: center;
    user-select: none;
    cursor: pointer;
    text-decoration: none;
    color: inherit;
    position: relative;
    overflow: hidden;
}

.p-panelmenu-item-label {
    line-height: 1;
}

.p-panelmenu-item-content {
    border-radius: ${t("panelmenu.item.border.radius")};
    transition: background ${t("panelmenu.transition.duration")}, color ${t("panelmenu.transition.duration")}, outline-color ${t("panelmenu.transition.duration")}, box-shadow ${t("panelmenu.transition.duration")};
    color: ${t("panelmenu.item.color")};
    outline-color: transparent;
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content {
    background: ${t("panelmenu.item.focus.background")};
    color: ${t("panelmenu.item.focus.color")};
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-item-icon {
    color: ${t("panelmenu.item.focus.color")};
}

.p-panelmenu-item.p-focus > .p-panelmenu-item-content .p-panelmenu-submenu-icon {
    color: ${t("panelmenu.submenu.icon.focus.color")};
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover {
    background: ${t("panelmenu.item.focus.background")};
    color: ${t("panelmenu.item.focus.color")};
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-item-icon {
    color: ${t("panelmenu.item.icon.focus.color")};
}

.p-panelmenu-item:not(.p-disabled) > .p-panelmenu-item-content:hover .p-panelmenu-submenu-icon {
    color: ${t("panelmenu.submenu.icon.focus.color")};
}
`,Q={root:"p-panelmenu p-component",panel:"p-panelmenu-panel",header:function(e){var n=e.instance,i=e.item;return["p-panelmenu-header",{"p-panelmenu-header-active":n.isItemActive(i)&&!!i.items,"p-disabled":n.isItemDisabled(i)}]},headerContent:"p-panelmenu-header-content",headerLink:"p-panelmenu-header-link",headerIcon:"p-panelmenu-header-icon",headerLabel:"p-panelmenu-header-label",contentContainer:"p-panelmenu-content-container",content:"p-panelmenu-content",rootList:"p-panelmenu-root-list",item:function(e){var n=e.instance,i=e.processedItem;return["p-panelmenu-item",{"p-focus":n.isItemFocused(i),"p-disabled":n.isItemDisabled(i)}]},itemContent:"p-panelmenu-item-content",itemLink:"p-panelmenu-item-link",itemIcon:"p-panelmenu-item-icon",itemLabel:"p-panelmenu-item-label",submenuIcon:"p-panelmenu-submenu-icon",submenu:"p-panelmenu-submenu",separator:"p-menuitem-separator"},Y=z.extend({name:"panelmenu",style:J,classes:Q}),$={name:"BasePanelMenu",extends:C,props:{model:{type:Array,default:null},expandedKeys:{type:Object,default:null},multiple:{type:Boolean,default:!1},tabindex:{type:Number,default:0}},style:Y,provide:function(){return{$pcPanelMenu:this,$parentInstance:this}}},G={name:"PanelMenuSub",hostName:"PanelMenu",extends:C,emits:["item-toggle","item-mousemove"],props:{panelId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:-1}},methods:{getItemId:function(e){return"".concat(this.panelId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,n,i){return e&&e.item?O(e.item[n],i):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,n,i){return this.ptm(e,{context:{item:n.item,index:i,active:this.isItemActive(n),focused:this.isItemFocused(n),disabled:this.isItemDisabled(n)}})},isItemActive:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return f(e.items)},onItemClick:function(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.$emit("item-toggle",{processedItem:n,expanded:!this.isItemActive(n)})},onItemToggle:function(e){this.$emit("item-toggle",e)},onItemMouseMove:function(e,n){this.$emit("item-mousemove",{originalEvent:e,processedItem:n})},getAriaSetSize:function(){var e=this;return this.items.filter(function(n){return e.isItemVisible(n)&&!e.getItemProp(n,"separator")}).length},getAriaPosInset:function(e){var n=this;return e-this.items.slice(0,e).filter(function(i){return n.isItemVisible(i)&&n.getItemProp(i,"separator")}).length+1},getMenuItemProps:function(e,n){return{action:l({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions("itemLink",e,n)),icon:l({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("itemIcon",e,n)),label:l({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",e,n)),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions("submenuicon",e,n))}}},components:{ChevronRightIcon:U,ChevronDownIcon:B},directives:{ripple:X}},ee=["tabindex"],te=["id","aria-label","aria-expanded","aria-level","aria-setsize","aria-posinset","data-p-focused","data-p-disabled"],ne=["onClick","onMousemove"],ae=["href","target"];function ie(t,e,n,i,s,a){var u=T("PanelMenuSub",!0),o=q("ripple");return c(),d("ul",{class:D(t.cx("submenu")),tabindex:n.tabindex},[(c(!0),d(k,null,M(n.items,function(r,m){return c(),d(k,{key:a.getItemKey(r)},[a.isItemVisible(r)&&!a.getItemProp(r,"separator")?(c(),d("li",l({key:0,id:a.getItemId(r),class:[t.cx("item",{processedItem:r}),a.getItemProp(r,"class")],style:a.getItemProp(r,"style"),role:"treeitem","aria-label":a.getItemLabel(r),"aria-expanded":a.isItemGroup(r)?a.isItemActive(r):void 0,"aria-level":n.level+1,"aria-setsize":a.getAriaSetSize(),"aria-posinset":a.getAriaPosInset(m),ref_for:!0},a.getPTOptions("item",r,m),{"data-p-focused":a.isItemFocused(r),"data-p-disabled":a.isItemDisabled(r)}),[b("div",l({class:t.cx("itemContent"),onClick:function(A){return a.onItemClick(A,r)},onMousemove:function(A){return a.onItemMouseMove(A,r)},ref_for:!0},a.getPTOptions("itemContent",r,m)),[n.templates.item?(c(),g(v(n.templates.item),{key:1,item:r.item,root:!1,active:a.isItemActive(r),hasSubmenu:a.isItemGroup(r),label:a.getItemLabel(r),props:a.getMenuItemProps(r,m)},null,8,["item","active","hasSubmenu","label","props"])):E((c(),d("a",l({key:0,href:a.getItemProp(r,"url"),class:t.cx("itemLink"),target:a.getItemProp(r,"target"),tabindex:"-1",ref_for:!0},a.getPTOptions("itemLink",r,m)),[a.isItemGroup(r)?(c(),d(k,{key:0},[n.templates.submenuicon?(c(),g(v(n.templates.submenuicon),l({key:0,class:t.cx("submenuIcon"),active:a.isItemActive(r),ref_for:!0},a.getPTOptions("submenuIcon",r,m)),null,16,["class","active"])):(c(),g(v(a.isItemActive(r)?"ChevronDownIcon":"ChevronRightIcon"),l({key:1,class:t.cx("submenuIcon"),ref_for:!0},a.getPTOptions("submenuIcon",r,m)),null,16,["class"]))],64)):I("",!0),n.templates.itemicon?(c(),g(v(n.templates.itemicon),{key:1,item:r.item,class:D(t.cx("itemIcon"))},null,8,["item","class"])):a.getItemProp(r,"icon")?(c(),d("span",l({key:2,class:[t.cx("itemIcon"),a.getItemProp(r,"icon")],ref_for:!0},a.getPTOptions("itemIcon",r,m)),null,16)):I("",!0),b("span",l({class:t.cx("itemLabel"),ref_for:!0},a.getPTOptions("itemLabel",r,m)),V(a.getItemLabel(r)),17)],16,ae)),[[o]])],16,ne),L(j,l({name:"p-toggleable-content",ref_for:!0},t.ptm("transition")),{default:_(function(){return[E(b("div",l({class:t.cx("contentContainer"),ref_for:!0},t.ptm("contentContainer")),[a.isItemVisible(r)&&a.isItemGroup(r)?(c(),g(u,l({key:0,id:a.getItemId(r)+"_list",role:"group",panelId:n.panelId,focusedItemId:n.focusedItemId,items:r.items,level:n.level+1,templates:n.templates,activeItemPath:n.activeItemPath,onItemToggle:a.onItemToggle,onItemMousemove:e[0]||(e[0]=function(h){return t.$emit("item-mousemove",h)}),pt:t.pt,unstyled:t.unstyled,ref_for:!0},t.ptm("submenu")),null,16,["id","panelId","focusedItemId","items","level","templates","activeItemPath","onItemToggle","pt","unstyled"])):I("",!0)],16),[[N,a.isItemActive(r)]])]}),_:2},1040)],16,te)):I("",!0),a.isItemVisible(r)&&a.getItemProp(r,"separator")?(c(),d("li",l({key:1,style:a.getItemProp(r,"style"),class:[t.cx("separator"),a.getItemProp(r,"class")],role:"separator",ref_for:!0},t.ptm("separator")),null,16)):I("",!0)],64)}),128))],10,ee)}G.render=ie;function re(t,e){return le(t)||ue(t,e)||oe(t,e)||se()}function se(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(t,e){if(t){if(typeof t=="string")return F(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?F(t,e):void 0}}function F(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=Array(e);n<e;n++)i[n]=t[n];return i}function ue(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,s,a,u,o=[],r=!0,m=!1;try{if(a=(n=n.call(t)).next,e!==0)for(;!(r=(i=a.call(n)).done)&&(o.push(i.value),o.length!==e);r=!0);}catch(h){m=!0,s=h}finally{try{if(!r&&n.return!=null&&(u=n.return(),Object(u)!==u))return}finally{if(m)throw s}}return o}}function le(t){if(Array.isArray(t))return t}var R={name:"PanelMenuList",hostName:"PanelMenu",extends:C,emits:["item-toggle","header-focus"],props:{panelId:{type:String,default:null},items:{type:Array,default:null},templates:{type:Object,default:null},expandedKeys:{type:Object,default:null}},searchTimeout:null,searchValue:null,data:function(){return{focused:!1,focusedItem:null,activeItemPath:[]}},watch:{expandedKeys:function(e){this.autoUpdateActiveItemPath(e)}},created:function(){this.autoUpdateActiveItemPath(this.expandedKeys)},methods:{getItemProp:function(e,n){return e&&e.item?O(e.item[n]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemActive:function(e){return this.activeItemPath.some(function(n){return n.key===e.parentKey})},isItemGroup:function(e){return f(e.items)},onFocus:function(e){this.focused=!0,this.focusedItem=this.focusedItem||(this.isElementInPanel(e,e.relatedTarget)?this.findFirstItem():this.findLastItem())},onBlur:function(){this.focused=!1,this.focusedItem=null,this.searchValue=""},onKeyDown:function(e){var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":case"Tab":case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&W(e.key)&&this.searchItems(e,e.key);break}},onArrowDownKey:function(e){var n=f(this.focusedItem)?this.findNextItem(this.focusedItem):this.findFirstItem();this.changeFocusedItem({originalEvent:e,processedItem:n,focusOnNext:!0}),e.preventDefault()},onArrowUpKey:function(e){var n=f(this.focusedItem)?this.findPrevItem(this.focusedItem):this.findLastItem();this.changeFocusedItem({originalEvent:e,processedItem:n,selfCheck:!0}),e.preventDefault()},onArrowLeftKey:function(e){var n=this;if(f(this.focusedItem)){var i=this.activeItemPath.some(function(s){return s.key===n.focusedItem.key});i?this.activeItemPath=this.activeItemPath.filter(function(s){return s.key!==n.focusedItem.key}):this.focusedItem=f(this.focusedItem.parent)?this.focusedItem.parent:this.focusedItem,e.preventDefault()}},onArrowRightKey:function(e){var n=this;if(f(this.focusedItem)){var i=this.isItemGroup(this.focusedItem);if(i){var s=this.activeItemPath.some(function(a){return a.key===n.focusedItem.key});s?this.onArrowDownKey(e):(this.activeItemPath=this.activeItemPath.filter(function(a){return a.parentKey!==n.focusedItem.parentKey}),this.activeItemPath.push(this.focusedItem))}e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findFirstItem(),allowHeaderFocus:!1}),e.preventDefault()},onEndKey:function(e){this.changeFocusedItem({originalEvent:e,processedItem:this.findLastItem(),focusOnNext:!0,allowHeaderFocus:!1}),e.preventDefault()},onEnterKey:function(e){if(f(this.focusedItem)){var n=p(this.$el,'li[id="'.concat("".concat(this.focusedItemId),'"]')),i=n&&(p(n,'[data-pc-section="itemlink"]')||p(n,"a,button"));i?i.click():n&&n.click()}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onItemToggle:function(e){var n=e.processedItem,i=e.expanded;this.expandedKeys?this.$emit("item-toggle",{item:n.item,expanded:i}):(this.activeItemPath=this.activeItemPath.filter(function(s){return s.parentKey!==n.parentKey}),i&&this.activeItemPath.push(n)),this.focusedItem=n,P(this.$el)},onItemMouseMove:function(e){this.focused&&(this.focusedItem=e.processedItem)},isElementInPanel:function(e,n){var i=e.currentTarget.closest('[data-pc-section="panel"]');return i&&i.contains(n)},isItemMatched:function(e){var n;return this.isValidItem(e)&&((n=this.getItemLabel(e))===null||n===void 0?void 0:n.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale)))},isVisibleItem:function(e){return!!e&&(e.level===0||this.isItemActive(e))&&this.isItemVisible(e)},isValidItem:function(e){return!!e&&!this.isItemDisabled(e)&&!this.getItemProp(e,"separator")},findFirstItem:function(){var e=this;return this.visibleItems.find(function(n){return e.isValidItem(n)})},findLastItem:function(){var e=this;return S(this.visibleItems,function(n){return e.isValidItem(n)})},findNextItem:function(e){var n=this,i=this.visibleItems.findIndex(function(a){return a.key===e.key}),s=i<this.visibleItems.length-1?this.visibleItems.slice(i+1).find(function(a){return n.isValidItem(a)}):void 0;return s||e},findPrevItem:function(e){var n=this,i=this.visibleItems.findIndex(function(a){return a.key===e.key}),s=i>0?S(this.visibleItems.slice(0,i),function(a){return n.isValidItem(a)}):void 0;return s||e},searchItems:function(e,n){var i=this;this.searchValue=(this.searchValue||"")+n;var s=null,a=!1;if(f(this.focusedItem)){var u=this.visibleItems.findIndex(function(o){return o.key===i.focusedItem.key});s=this.visibleItems.slice(u).find(function(o){return i.isItemMatched(o)}),s=H(s)?this.visibleItems.slice(0,u).find(function(o){return i.isItemMatched(o)}):s}else s=this.visibleItems.find(function(o){return i.isItemMatched(o)});return f(s)&&(a=!0),H(s)&&H(this.focusedItem)&&(s=this.findFirstItem()),f(s)&&this.changeFocusedItem({originalEvent:e,processedItem:s,allowHeaderFocus:!1}),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){i.searchValue="",i.searchTimeout=null},500),a},changeFocusedItem:function(e){var n=e.originalEvent,i=e.processedItem,s=e.focusOnNext,a=e.selfCheck,u=e.allowHeaderFocus,o=u===void 0?!0:u;f(this.focusedItem)&&this.focusedItem.key!==i.key?(this.focusedItem=i,this.scrollInView()):o&&this.$emit("header-focus",{originalEvent:n,focusOnNext:s,selfCheck:a})},scrollInView:function(){var e=p(this.$el,'li[id="'.concat("".concat(this.focusedItemId),'"]'));e&&e.scrollIntoView&&e.scrollIntoView({block:"nearest",inline:"start"})},autoUpdateActiveItemPath:function(e){var n=this;this.activeItemPath=Object.entries(e||{}).reduce(function(i,s){var a=re(s,2),u=a[0],o=a[1];if(o){var r=n.findProcessedItemByItemKey(u);r&&i.push(r)}return i},[])},findProcessedItemByItemKey:function(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(n=n||i===0&&this.processedItems,!n)return null;for(var s=0;s<n.length;s++){var a=n[s];if(this.getItemProp(a,"key")===e)return a;var u=this.findProcessedItemByItemKey(e,a.items,i+1);if(u)return u}},createProcessedItems:function(e){var n=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",u=[];return e&&e.forEach(function(o,r){var m=(a!==""?a+"_":"")+r,h={item:o,index:r,level:i,key:m,parent:s,parentKey:a};h.items=n.createProcessedItems(o.items,i+1,h,m),u.push(h)}),u},flatItems:function(e){var n=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];return e&&e.forEach(function(s){n.isVisibleItem(s)&&(i.push(s),n.flatItems(s.items,i))}),i}},computed:{processedItems:function(){return this.createProcessedItems(this.items||[])},visibleItems:function(){return this.flatItems(this.processedItems)},focusedItemId:function(){return f(this.focusedItem)?"".concat(this.panelId,"_").concat(this.focusedItem.key):null}},components:{PanelMenuSub:G}};function ce(t,e,n,i,s,a){var u=T("PanelMenuSub");return c(),g(u,l({id:n.panelId+"_list",class:t.cx("rootList"),role:"tree",tabindex:-1,"aria-activedescendant":s.focused?a.focusedItemId:void 0,panelId:n.panelId,focusedItemId:s.focused?a.focusedItemId:void 0,items:a.processedItems,templates:n.templates,activeItemPath:s.activeItemPath,onFocus:a.onFocus,onBlur:a.onBlur,onKeydown:a.onKeyDown,onItemToggle:a.onItemToggle,onItemMousemove:a.onItemMouseMove,pt:t.pt,unstyled:t.unstyled},t.ptm("rootList")),null,16,["id","class","aria-activedescendant","panelId","focusedItemId","items","templates","activeItemPath","onFocus","onBlur","onKeydown","onItemToggle","onItemMousemove","pt","unstyled"])}R.render=ce;function K(t){"@babel/helpers - typeof";return K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K(t)}function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function me(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?x(Object(n),!0).forEach(function(i){de(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function de(t,e,n){return(e=fe(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fe(t){var e=he(t,"string");return K(e)=="symbol"?e:e+""}function he(t,e){if(K(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(K(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var pe={name:"PanelMenu",extends:$,inheritAttrs:!1,emits:["update:expandedKeys","panel-open","panel-close"],data:function(){return{activeItem:null,activeItems:[]}},methods:{getItemProp:function(e,n){return e?O(e[n]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,n,i){return this.ptm(e,{context:{index:i,active:this.isItemActive(n),focused:this.isItemFocused(n),disabled:this.isItemDisabled(n)}})},isItemActive:function(e){return this.expandedKeys?this.expandedKeys[this.getItemProp(e,"key")]:this.multiple?this.activeItems.some(function(n){return y(e,n)}):y(e,this.activeItem)},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return y(e,this.activeItem)},isItemGroup:function(e){return f(e.items)},getPanelId:function(e){return"".concat(this.$id,"_").concat(e)},getPanelKey:function(e){return this.getPanelId(e)},getHeaderId:function(e){return"".concat(this.getPanelId(e),"_header")},getContentId:function(e){return"".concat(this.getPanelId(e),"_content")},onHeaderClick:function(e,n){if(this.isItemDisabled(n)){e.preventDefault();return}n.command&&n.command({originalEvent:e,item:n}),this.changeActiveItem(e,n),P(e.currentTarget)},onHeaderKeyDown:function(e,n){switch(e.code){case"ArrowDown":this.onHeaderArrowDownKey(e);break;case"ArrowUp":this.onHeaderArrowUpKey(e);break;case"Home":this.onHeaderHomeKey(e);break;case"End":this.onHeaderEndKey(e);break;case"Enter":case"NumpadEnter":case"Space":this.onHeaderEnterKey(e,n);break}},onHeaderArrowDownKey:function(e){var n=w(e.currentTarget,"data-p-active")===!0?p(e.currentTarget.nextElementSibling,'[data-pc-section="rootlist"]'):null;n?P(n):this.updateFocusedHeader({originalEvent:e,focusOnNext:!0}),e.preventDefault()},onHeaderArrowUpKey:function(e){var n=this.findPrevHeader(e.currentTarget.parentElement)||this.findLastHeader(),i=w(n,"data-p-active")===!0?p(n.nextElementSibling,'[data-pc-section="rootlist"]'):null;i?P(i):this.updateFocusedHeader({originalEvent:e,focusOnNext:!1}),e.preventDefault()},onHeaderHomeKey:function(e){this.changeFocusedHeader(e,this.findFirstHeader()),e.preventDefault()},onHeaderEndKey:function(e){this.changeFocusedHeader(e,this.findLastHeader()),e.preventDefault()},onHeaderEnterKey:function(e,n){var i=p(e.currentTarget,'[data-pc-section="headerlink"]');i?i.click():this.onHeaderClick(e,n),e.preventDefault()},findNextHeader:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=n?e:e.nextElementSibling,s=p(i,'[data-pc-section="header"]');return s?w(s,"data-p-disabled")?this.findNextHeader(s.parentElement):s:null},findPrevHeader:function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,i=n?e:e.previousElementSibling,s=p(i,'[data-pc-section="header"]');return s?w(s,"data-p-disabled")?this.findPrevHeader(s.parentElement):s:null},findFirstHeader:function(){return this.findNextHeader(this.$el.firstElementChild,!0)},findLastHeader:function(){return this.findPrevHeader(this.$el.lastElementChild,!0)},updateFocusedHeader:function(e){var n=e.originalEvent,i=e.focusOnNext,s=e.selfCheck,a=n.currentTarget.closest('[data-pc-section="panel"]'),u=s?p(a,'[data-pc-section="header"]'):i?this.findNextHeader(a):this.findPrevHeader(a);u?this.changeFocusedHeader(n,u):i?this.onHeaderHomeKey(n):this.onHeaderEndKey(n)},changeActiveItem:function(e,n){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;if(!this.isItemDisabled(n)){var s=this.isItemActive(n),a=s?"panel-close":"panel-open";this.activeItem=i?n:this.activeItem&&y(n,this.activeItem)?null:n,this.multiple&&(this.activeItems.some(function(u){return y(n,u)})?this.activeItems=this.activeItems.filter(function(u){return!y(n,u)}):this.activeItems.push(n)),this.changeExpandedKeys({item:n,expanded:!s}),this.$emit(a,{originalEvent:e,item:n})}},changeExpandedKeys:function(e){var n=e.item,i=e.expanded,s=i===void 0?!1:i;if(this.expandedKeys){var a=me({},this.expandedKeys);s?a[n.key]=!0:delete a[n.key],this.$emit("update:expandedKeys",a)}},changeFocusedHeader:function(e,n){n&&P(n)},getMenuItemProps:function(e,n){return{icon:l({class:[this.cx("headerIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("headerIcon",e,n)),label:l({class:this.cx("headerLabel")},this.getPTOptions("headerLabel",e,n))}}},components:{PanelMenuList:R,ChevronRightIcon:U,ChevronDownIcon:B}},Ie=["id"],ge=["id","tabindex","aria-label","aria-expanded","aria-controls","aria-disabled","onClick","onKeydown","data-p-active","data-p-disabled"],be=["href"],ve=["id","aria-labelledby"];function ye(t,e,n,i,s,a){var u=T("PanelMenuList");return c(),d("div",l({id:t.$id,class:t.cx("root")},t.ptmi("root")),[(c(!0),d(k,null,M(t.model,function(o,r){return c(),d(k,{key:a.getPanelKey(r)},[a.isItemVisible(o)?(c(),d("div",l({key:0,style:a.getItemProp(o,"style"),class:[t.cx("panel"),a.getItemProp(o,"class")],ref_for:!0},t.ptm("panel")),[b("div",l({id:a.getHeaderId(r),class:[t.cx("header",{item:o}),a.getItemProp(o,"headerClass")],tabindex:a.isItemDisabled(o)?-1:t.tabindex,role:"button","aria-label":a.getItemLabel(o),"aria-expanded":a.isItemActive(o),"aria-controls":a.getContentId(r),"aria-disabled":a.isItemDisabled(o),onClick:function(h){return a.onHeaderClick(h,o)},onKeydown:function(h){return a.onHeaderKeyDown(h,o)},ref_for:!0},a.getPTOptions("header",o,r),{"data-p-active":a.isItemActive(o),"data-p-disabled":a.isItemDisabled(o)}),[b("div",l({class:t.cx("headerContent"),ref_for:!0},a.getPTOptions("headerContent",o,r)),[t.$slots.item?(c(),g(v(t.$slots.item),{key:1,item:o,root:!0,active:a.isItemActive(o),hasSubmenu:a.isItemGroup(o),label:a.getItemLabel(o),props:a.getMenuItemProps(o,r)},null,8,["item","active","hasSubmenu","label","props"])):(c(),d("a",l({key:0,href:a.getItemProp(o,"url"),class:t.cx("headerLink"),tabindex:-1,ref_for:!0},a.getPTOptions("headerLink",o,r)),[a.getItemProp(o,"items")?Z(t.$slots,"submenuicon",{key:0,active:a.isItemActive(o)},function(){return[(c(),g(v(a.isItemActive(o)?"ChevronDownIcon":"ChevronRightIcon"),l({class:t.cx("submenuIcon"),ref_for:!0},a.getPTOptions("submenuIcon",o,r)),null,16,["class"]))]}):I("",!0),t.$slots.headericon?(c(),g(v(t.$slots.headericon),{key:1,item:o,class:D([t.cx("headerIcon"),a.getItemProp(o,"icon")])},null,8,["item","class"])):a.getItemProp(o,"icon")?(c(),d("span",l({key:2,class:[t.cx("headerIcon"),a.getItemProp(o,"icon")],ref_for:!0},a.getPTOptions("headerIcon",o,r)),null,16)):I("",!0),b("span",l({class:t.cx("headerLabel"),ref_for:!0},a.getPTOptions("headerLabel",o,r)),V(a.getItemLabel(o)),17)],16,be))],16)],16,ge),L(j,l({name:"p-toggleable-content",ref_for:!0},t.ptm("transition")),{default:_(function(){return[E(b("div",l({id:a.getContentId(r),class:t.cx("contentContainer"),role:"region","aria-labelledby":a.getHeaderId(r),ref_for:!0},t.ptm("contentContainer")),[a.getItemProp(o,"items")?(c(),d("div",l({key:0,class:t.cx("content"),ref_for:!0},t.ptm("content")),[L(u,{panelId:a.getPanelId(r),items:a.getItemProp(o,"items"),templates:t.$slots,expandedKeys:t.expandedKeys,onItemToggle:a.changeExpandedKeys,onHeaderFocus:a.updateFocusedHeader,pt:t.pt,unstyled:t.unstyled},null,8,["panelId","items","templates","expandedKeys","onItemToggle","onHeaderFocus","pt","unstyled"])],16)):I("",!0)],16,ve),[[N,a.isItemActive(o)]])]}),_:2},1040)],16)):I("",!0)],64)}),128))],16,Ie)}pe.render=ye;export{pe as default};
