import{am as z,an as v,ap as y,ao as C,as as T,bC as O,bD as R,aX as _,aq as x,aw as B,ax as K,aD as G,aZ as S,ae as c,bA as N,g,az as q,a2 as b,z as u,D as M,y as f,Y as p,$ as L,a0 as U,A as E,a9 as X,a3 as k,X as w,B as Y,aB as D,C as A}from"./DdzSJcTg.js";import{x as P}from"./CLs7nh7g.js";import{s as Z}from"./BzRqn72E.js";import{s as F}from"./vCC6k1YF.js";import{s as H}from"./MmA3I2Zj.js";import{R as j}from"./DBYfWbxS.js";import"./CYCsxq4j.js";import"./B82uFDcP.js";import"./jc0MLXVe.js";var W=`
    .p-contextmenu {
        background: dt('contextmenu.background');
        color: dt('contextmenu.color');
        border: 1px solid dt('contextmenu.border.color');
        border-radius: dt('contextmenu.border.radius');
        box-shadow: dt('contextmenu.shadow');
        min-width: 12.5rem;
    }

    .p-contextmenu-root-list,
    .p-contextmenu-submenu {
        margin: 0;
        padding: dt('contextmenu.list.padding');
        list-style: none;
        outline: 0 none;
        display: flex;
        flex-direction: column;
        gap: dt('contextmenu.list.gap');
    }

    .p-contextmenu-submenu {
        position: absolute;
        display: flex;
        flex-direction: column;
        min-width: 100%;
        z-index: 1;
        background: dt('contextmenu.background');
        color: dt('contextmenu.color');
        border: 1px solid dt('contextmenu.border.color');
        border-radius: dt('contextmenu.border.radius');
        box-shadow: dt('contextmenu.shadow');
    }

    .p-contextmenu-item {
        position: relative;
    }

    .p-contextmenu-item-content {
        transition:
            background dt('contextmenu.transition.duration'),
            color dt('contextmenu.transition.duration');
        border-radius: dt('contextmenu.item.border.radius');
        color: dt('contextmenu.item.color');
    }

    .p-contextmenu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('contextmenu.item.padding');
        gap: dt('contextmenu.item.gap');
        user-select: none;
    }

    .p-contextmenu-item-label {
        line-height: 1;
    }

    .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.color');
    }

    .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.color');
        margin-left: auto;
        font-size: dt('contextmenu.submenu.icon.size');
        width: dt('contextmenu.submenu.icon.size');
        height: dt('contextmenu.submenu.icon.size');
    }

    .p-contextmenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-contextmenu-item.p-focus > .p-contextmenu-item-content {
        color: dt('contextmenu.item.focus.color');
        background: dt('contextmenu.item.focus.background');
    }

    .p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.focus.color');
    }

    .p-contextmenu-item.p-focus > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.focus.color');
    }

    .p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover {
        color: dt('contextmenu.item.focus.color');
        background: dt('contextmenu.item.focus.background');
    }

    .p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.focus.color');
    }

    .p-contextmenu-item:not(.p-disabled) > .p-contextmenu-item-content:hover .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.focus.color');
    }

    .p-contextmenu-item-active > .p-contextmenu-item-content {
        color: dt('contextmenu.item.active.color');
        background: dt('contextmenu.item.active.background');
    }

    .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-item-icon {
        color: dt('contextmenu.item.icon.active.color');
    }

    .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
        color: dt('contextmenu.submenu.icon.active.color');
    }

    .p-contextmenu-separator {
        border-block-start: 1px solid dt('contextmenu.separator.border.color');
    }

    .p-contextmenu-enter-from,
    .p-contextmenu-leave-active {
        opacity: 0;
    }

    .p-contextmenu-enter-active {
        transition: opacity 250ms;
    }

    .p-contextmenu-mobile .p-contextmenu-submenu {
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('tieredmenu.submenu.mobile.indent');
        padding-inline-end: 0;
    }

    .p-contextmenu-mobile .p-contextmenu-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-contextmenu-mobile .p-contextmenu-item-active > .p-contextmenu-item-content .p-contextmenu-submenu-icon {
        transform: rotate(-90deg);
    }
`,J={root:function(e){var t=e.instance;return["p-contextmenu p-component",{"p-contextmenu-mobile":t.queryMatches}]},rootList:"p-contextmenu-root-list",item:function(e){var t=e.instance,s=e.processedItem;return["p-contextmenu-item",{"p-contextmenu-item-active":t.isItemActive(s),"p-focus":t.isItemFocused(s),"p-disabled":t.isItemDisabled(s)}]},itemContent:"p-contextmenu-item-content",itemLink:"p-contextmenu-item-link",itemIcon:"p-contextmenu-item-icon",itemLabel:"p-contextmenu-item-label",submenuIcon:"p-contextmenu-submenu-icon",submenu:"p-contextmenu-submenu",separator:"p-contextmenu-separator"},Q=z.extend({name:"contextmenu",style:W,classes:J}),$={name:"BaseContextMenu",extends:F,props:{model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},global:{type:Boolean,default:!1},breakpoint:{type:String,default:"960px"},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:Q,provide:function(){return{$pcContextMenu:this,$parentInstance:this}}},V={name:"ContextMenuSub",hostName:"ContextMenu",extends:F,emits:["item-click","item-mouseenter","item-mousemove"],props:{items:{type:Array,default:null},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},root:{type:Boolean,default:!1},visible:{type:Boolean,default:!1},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,t,s){return e&&e.item?S(e.item[t],s):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,t,s){return this.ptm(e,{context:{item:t.item,active:this.isItemActive(t),focused:this.isItemFocused(t),disabled:this.isItemDisabled(t),index:s}})},isItemActive:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return v(e.items)},onItemClick:function(e,t){this.getItemProp(t,"command",{originalEvent:e,item:t.item}),this.$emit("item-click",{originalEvent:e,processedItem:t,isFocus:!0})},onItemMouseEnter:function(e,t){this.$emit("item-mouseenter",{originalEvent:e,processedItem:t})},onItemMouseMove:function(e,t){this.$emit("item-mousemove",{originalEvent:e,processedItem:t,isFocus:!0})},getAriaSetSize:function(){var e=this;return this.items.filter(function(t){return e.isItemVisible(t)&&!e.getItemProp(t,"separator")}).length},getAriaPosInset:function(e){var t=this;return e-this.items.slice(0,e).filter(function(s){return t.isItemVisible(s)&&t.getItemProp(s,"separator")}).length+1},onEnter:function(){N(this.$refs.container,this.level)},getMenuItemProps:function(e,t){return{action:c({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions("itemLink",e,t)),icon:c({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions("itemIcon",e,t)),label:c({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",e,t)),submenuicon:c({class:this.cx("submenuIcon")},this.getPTOptions("submenuicon",e,t))}}},components:{AngleRightIcon:H},directives:{ripple:j}},ee=["tabindex"],te=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],ne=["onClick","onMouseenter","onMousemove"],ie=["href","target"],se=["id"],oe=["id"];function re(n,e,t,s,r,i){var a=g("AngleRightIcon"),m=g("ContextMenuSub",!0),h=q("ripple");return u(),b(D,c({name:"p-contextmenusub",onEnter:i.onEnter},n.ptm("menu.transition")),{default:M(function(){return[t.root||t.visible?(u(),f("ul",c({key:0,ref:"container",tabindex:t.tabindex},n.ptm("rootList")),[(u(!0),f(L,null,U(t.items,function(o,d){return u(),f(L,{key:i.getItemKey(o)},[i.isItemVisible(o)&&!i.getItemProp(o,"separator")?(u(),f("li",c({key:0,id:i.getItemId(o),style:i.getItemProp(o,"style"),class:[n.cx("item",{processedItem:o}),i.getItemProp(o,"class")],role:"menuitem","aria-label":i.getItemLabel(o),"aria-disabled":i.isItemDisabled(o)||void 0,"aria-expanded":i.isItemGroup(o)?i.isItemActive(o):void 0,"aria-haspopup":i.isItemGroup(o)&&!i.getItemProp(o,"to")?"menu":void 0,"aria-level":t.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(d)},{ref_for:!0},i.getPTOptions("item",o,d),{"data-p-active":i.isItemActive(o),"data-p-focused":i.isItemFocused(o),"data-p-disabled":i.isItemDisabled(o)}),[E("div",c({class:n.cx("itemContent"),onClick:function(I){return i.onItemClick(I,o)},onMouseenter:function(I){return i.onItemMouseEnter(I,o)},onMousemove:function(I){return i.onItemMouseMove(I,o)}},{ref_for:!0},i.getPTOptions("itemContent",o,d)),[t.templates.item?(u(),b(k(t.templates.item),{key:1,item:o.item,hasSubmenu:i.getItemProp(o,"items"),label:i.getItemLabel(o),props:i.getMenuItemProps(o,d)},null,8,["item","hasSubmenu","label","props"])):X((u(),f("a",c({key:0,href:i.getItemProp(o,"url"),class:n.cx("itemLink"),target:i.getItemProp(o,"target"),tabindex:"-1"},{ref_for:!0},i.getPTOptions("itemLink",o,d)),[t.templates.itemicon?(u(),b(k(t.templates.itemicon),{key:0,item:o.item,class:w(n.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(o,"icon")?(u(),f("span",c({key:1,class:[n.cx("itemIcon"),i.getItemProp(o,"icon")]},{ref_for:!0},i.getPTOptions("itemIcon",o,d)),null,16)):p("",!0),E("span",c({id:i.getItemLabelId(o),class:n.cx("itemLabel")},{ref_for:!0},i.getPTOptions("itemLabel",o,d)),Y(i.getItemLabel(o)),17,se),i.getItemProp(o,"items")?(u(),f(L,{key:2},[t.templates.submenuicon?(u(),b(k(t.templates.submenuicon),{key:0,active:i.isItemActive(o),class:w(n.cx("submenuIcon"))},null,8,["active","class"])):(u(),b(a,c({key:1,class:n.cx("submenuIcon")},{ref_for:!0},i.getPTOptions("submenuicon",o,d)),null,16,["class"]))],64)):p("",!0)],16,ie)),[[h]])],16,ne),i.isItemVisible(o)&&i.isItemGroup(o)?(u(),b(m,c({key:0,id:i.getItemId(o)+"_list",role:"menu",class:n.cx("submenu"),menuId:t.menuId,focusedItemId:t.focusedItemId,items:o.items,templates:t.templates,activeItemPath:t.activeItemPath,level:t.level+1,visible:i.isItemActive(o)&&i.isItemGroup(o),pt:n.pt,unstyled:n.unstyled,onItemClick:e[0]||(e[0]=function(l){return n.$emit("item-click",l)}),onItemMouseenter:e[1]||(e[1]=function(l){return n.$emit("item-mouseenter",l)}),onItemMousemove:e[2]||(e[2]=function(l){return n.$emit("item-mousemove",l)}),"aria-labelledby":i.getItemLabelId(o)},{ref_for:!0},n.ptm("submenu")),null,16,["id","class","menuId","focusedItemId","items","templates","activeItemPath","level","visible","pt","unstyled","aria-labelledby"])):p("",!0)],16,te)):p("",!0),i.isItemVisible(o)&&i.getItemProp(o,"separator")?(u(),f("li",c({key:1,id:i.getItemId(o),style:i.getItemProp(o,"style"),class:[n.cx("separator"),i.getItemProp(o,"class")],role:"separator"},{ref_for:!0},n.ptm("separator")),null,16,oe)):p("",!0)],64)}),128))],16,ee)):p("",!0)]}),_:1},16,["onEnter"])}V.render=re;var ae={name:"ContextMenu",extends:$,inheritAttrs:!1,emits:["focus","blur","show","hide","before-show","before-hide"],target:null,outsideClickListener:null,resizeListener:null,documentContextMenuListener:null,matchMediaListener:null,pageX:null,pageY:null,container:null,list:null,data:function(){return{focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],visible:!1,submenuVisible:!1,query:null,queryMatches:!1}},watch:{activeItemPath:function(e){v(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):this.visible||(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.bindMatchMediaListener(),this.global&&this.bindDocumentContextMenuListener()},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.unbindDocumentContextMenuListener(),this.unbindMatchMediaListener(),this.container&&this.autoZIndex&&P.clear(this.container),this.target=null,this.container=null},methods:{getItemProp:function(e,t){return e?S(e[t]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return v(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&v(e.items)},toggle:function(e){this.visible?this.hide():this.show(e)},show:function(e){this.$emit("before-show"),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},x(this.list),this.pageX=e.pageX,this.pageY=e.pageY,this.visible?this.position():this.visible=!0,e.stopPropagation(),e.preventDefault()},hide:function(){this.$emit("before-hide"),this.visible=!1,this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""}},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:-1,level:0,parentKey:""},this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.$emit("blur",e)},onKeyDown:function(e){var t=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&G(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e,t){var s=e.processedItem,r=e.isFocus;if(!K(s)){var i=s.index,a=s.key,m=s.level,h=s.parentKey,o=s.items,d=v(o),l=this.activeItemPath.filter(function(I){return I.parentKey!==h&&I.parentKey!==a});d&&(l.push(s),this.submenuVisible=!0),this.focusedItemInfo={index:i,level:m,parentKey:h},r&&x(this.list),!(t==="hover"&&this.queryMatches)&&(this.activeItemPath=l)}},onItemClick:function(e){var t=e.processedItem,s=this.isProccessedItemGroup(t),r=this.isSelected(t);if(r){var i=t.index,a=t.key,m=t.level,h=t.parentKey;this.activeItemPath=this.activeItemPath.filter(function(o){return a!==o.key&&a.startsWith(o.key)}),this.focusedItemInfo={index:i,level:m,parentKey:h},x(this.list)}else s?this.onItemChange(e):this.hide()},onItemMouseEnter:function(e){this.onItemChange(e,"hover")},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},onArrowDownKey:function(e){var t=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,t),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index],s=this.isProccessedItemGroup(t);!s&&this.onItemChange({originalEvent:e,processedItem:t})}this.popup&&this.hide(),e.preventDefault()}else{var r=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,r),e.preventDefault()}},onArrowLeftKey:function(e){var t=this,s=this.visibleItems[this.focusedItemInfo.index],r=this.activeItemPath.find(function(a){return a.key===s.parentKey}),i=K(s.parent);i||(this.focusedItemInfo={index:-1,parentKey:r?r.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),this.activeItemPath=this.activeItemPath.filter(function(a){return a.parentKey!==t.focusedItemInfo.parentKey}),e.preventDefault()},onArrowRightKey:function(e){var t=this.visibleItems[this.focusedItemInfo.index],s=this.isProccessedItemGroup(t);s&&(this.onItemChange({originalEvent:e,processedItem:t}),this.focusedItemInfo={index:-1,parentKey:t.key},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var t=y(this.list,'li[id="'.concat("".concat(this.focusedItemIdx),'"]')),s=t&&y(t,'[data-pc-section="itemlink"]');s?s.click():t&&t.click();var r=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(r);!i&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){this.hide(),!this.popup&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex()),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var t=this.visibleItems[this.focusedItemInfo.index],s=this.isProccessedItemGroup(t);!s&&this.onItemChange({originalEvent:e,processedItem:t})}this.hide()},onEnter:function(e){B(e,{position:"absolute"}),this.position(),this.autoZIndex&&P.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu)},onAfterEnter:function(){this.bindOutsideClickListener(),this.bindResizeListener(),this.$emit("show"),x(this.list)},onLeave:function(){this.$emit("hide"),this.container=null},onAfterLeave:function(e){this.autoZIndex&&P.clear(e),this.unbindOutsideClickListener(),this.unbindResizeListener()},position:function(){var e=this.pageX+1,t=this.pageY+1,s=this.container.offsetParent?this.container.offsetWidth:O(this.container),r=this.container.offsetParent?this.container.offsetHeight:R(this.container),i=_(),a=window.scrollY||document.documentElement.scrollTop||document.body.scrollTop||0,m=window.scrollX||document.documentElement.scrollLeft||document.body.scrollLeft||0;e+s-m>i.width&&(e-=s),t+r-a>i.height&&(t-=r),e<m&&(e=m),t<a&&(t=a),this.container.style.left=e+"px",this.container.style.top=t+"px"},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(t){var s=e.container&&!e.container.contains(t.target),r=e.visible?!(e.target&&(e.target===t.target||e.target.contains(t.target))):!0;s&&r&&e.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.visible&&!T()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindDocumentContextMenuListener:function(){var e=this;this.documentContextMenuListener||(this.documentContextMenuListener=function(t){t.button===2&&e.show(t)},document.addEventListener("contextmenu",this.documentContextMenuListener))},unbindDocumentContextMenuListener:function(){this.documentContextMenuListener&&(document.removeEventListener("contextmenu",this.documentContextMenuListener),this.documentContextMenuListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var t=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=t,this.queryMatches=t.matches,this.matchMediaListener=function(){e.queryMatches=t.matches},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var t;return this.isValidItem(e)&&((t=this.getProccessedItemLabel(e))===null||t===void 0?void 0:t.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(t){return t.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidItem(t)})},findLastItemIndex:function(){var e=this;return C(this.visibleItems,function(t){return e.isValidItem(t)})},findNextItemIndex:function(e){var t=this,s=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(r){return t.isValidItem(r)}):-1;return s>-1?s+e+1:e},findPrevItemIndex:function(e){var t=this,s=e>0?C(this.visibleItems.slice(0,e),function(r){return t.isValidItem(r)}):-1;return s>-1?s:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(t){return e.isValidSelectedItem(t)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,t){var s=this;this.searchValue=(this.searchValue||"")+t;var r=-1,i=!1;return this.focusedItemInfo.index!==-1?(r=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(a){return s.isItemMatched(a)}),r=r===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(a){return s.isItemMatched(a)}):r+this.focusedItemInfo.index):r=this.visibleItems.findIndex(function(a){return s.isItemMatched(a)}),r!==-1&&(i=!0),r===-1&&this.focusedItemInfo.index===-1&&(r=this.findFirstFocusedItemIndex()),r!==-1&&this.changeFocusedItemIndex(e,r),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){s.searchValue="",s.searchTimeout=null},500),i},changeFocusedItemIndex:function(e,t){this.focusedItemInfo.index!==t&&(this.focusedItemInfo.index=t,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,t=e!==-1?"".concat(this.$id,"_").concat(e):this.focusedItemIdx,s=y(this.list,'li[id="'.concat(t,'"]'));s&&s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var t=this,s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",a=[];return e&&e.forEach(function(m,h){var o=(i!==""?i+"_":"")+h,d={item:m,index:h,level:s,key:o,parent:r,parentKey:i};d.items=t.createProcessedItems(m.items,s+1,d,o),a.push(d)}),a},containerRef:function(e){this.container=e},listRef:function(e){this.list=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,t=this.activeItemPath.find(function(s){return s.key===e.focusedItemInfo.parentKey});return t?t.items:this.processedItems},focusedItemIdx:function(){return this.focusedItemInfo.index!==-1?"".concat(this.$id).concat(v(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{ContextMenuSub:V,Portal:Z}};function ue(n,e,t,s,r,i){var a=g("ContextMenuSub"),m=g("Portal");return u(),b(m,{appendTo:n.appendTo},{default:M(function(){return[A(D,c({name:"p-contextmenu",onEnter:i.onEnter,onAfterEnter:i.onAfterEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},n.ptm("transition")),{default:M(function(){return[r.visible?(u(),f("div",c({key:0,ref:i.containerRef,class:n.cx("root")},n.ptmi("root")),[A(a,{ref:i.listRef,id:n.$id+"_list",class:w(n.cx("rootList")),role:"menubar",root:!0,tabindex:n.tabindex,"aria-orientation":"vertical","aria-activedescendant":r.focused?i.focusedItemIdx:void 0,menuId:n.$id,focusedItemId:r.focused?i.focusedItemIdx:void 0,items:i.processedItems,templates:n.$slots,activeItemPath:r.activeItemPath,"aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel,level:0,visible:r.submenuVisible,pt:n.pt,unstyled:n.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter,onItemMousemove:i.onItemMouseMove},null,8,["id","class","tabindex","aria-activedescendant","menuId","focusedItemId","items","templates","activeItemPath","aria-labelledby","aria-label","visible","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"])],16)):p("",!0)]}),_:1},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:1},8,["appendTo"])}ae.render=ue;export{ae as default};
