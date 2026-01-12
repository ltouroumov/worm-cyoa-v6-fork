import{am as O,an as c,ap as L,ao as M,as as R,ax as A,aq as p,aD as G,aZ as F,ac as l,g as K,az as N,y as d,z as u,X as h,B as S,$ as v,a0 as w,A as P,a9 as q,a2 as y,Y as V,a3 as k,aA as E,ab as x,C as z,ad as U,ae as H}from"./DKPM-x0c.js";import{x as C}from"./CLs7nh7g.js";import{s as j}from"./CmKukep1.js";import{s as D}from"./DOKo9Z5P.js";import{s as Y}from"./wbxXi1EW.js";import{s as J}from"./2essDdzJ.js";import{R as W}from"./DsMfNAGv.js";import"./CLpHadom.js";import"./CIcfw3sJ.js";import"./jc0MLXVe.js";var X=`
    .p-megamenu {
        position: relative;
        display: flex;
        align-items: center;
        background: dt('megamenu.background');
        border: 1px solid dt('megamenu.border.color');
        border-radius: dt('megamenu.border.radius');
        color: dt('megamenu.color');
        gap: dt('megamenu.gap');
    }

    .p-megamenu-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-megamenu-root-list {
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        gap: dt('megamenu.gap');
    }

    .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content {
        border-radius: dt('megamenu.base.item.border.radius');
    }

    .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content > .p-megamenu-item-link {
        padding: dt('megamenu.base.item.padding');
    }

    .p-megamenu-item-content {
        transition:
            background dt('megamenu.transition.duration'),
            color dt('megamenu.transition.duration');
        border-radius: dt('megamenu.item.border.radius');
        color: dt('megamenu.item.color');
    }

    .p-megamenu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('megamenu.item.padding');
        gap: dt('megamenu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-megamenu-item-label {
        line-height: 1;
    }

    .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.color');
    }

    .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.color');
        font-size: dt('megamenu.submenu.icon.size');
        width: dt('megamenu.submenu.icon.size');
        height: dt('megamenu.submenu.icon.size');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content {
        color: dt('megamenu.item.focus.color');
        background: dt('megamenu.item.focus.background');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.focus.color');
    }

    .p-megamenu-item.p-focus > .p-megamenu-item-content .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.focus.color');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover {
        color: dt('megamenu.item.focus.color');
        background: dt('megamenu.item.focus.background');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.focus.color');
    }

    .p-megamenu-item:not(.p-disabled) > .p-megamenu-item-content:hover .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.focus.color');
    }

    .p-megamenu-item-active > .p-megamenu-item-content {
        color: dt('megamenu.item.active.color');
        background: dt('megamenu.item.active.background');
    }

    .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-item-icon {
        color: dt('megamenu.item.icon.active.color');
    }

    .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
        color: dt('megamenu.submenu.icon.active.color');
    }

    .p-megamenu-overlay {
        display: none;
        position: absolute;
        width: auto;
        z-index: 1;
        left: 0;
        min-width: 100%;
        padding: dt('megamenu.overlay.padding');
        background: dt('megamenu.overlay.background');
        color: dt('megamenu.overlay.color');
        border: 1px solid dt('megamenu.overlay.border.color');
        border-radius: dt('megamenu.overlay.border.radius');
        box-shadow: dt('megamenu.overlay.shadow');
    }

    .p-megamenu-overlay:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
        display: block;
    }

    .p-megamenu-submenu {
        margin: 0;
        list-style: none;
        padding: dt('megamenu.submenu.padding');
        min-width: 12.5rem;
        display: flex;
        flex-direction: column;
        gap: dt('megamenu.submenu.gap');
    }

    .p-megamenu-submenu-label {
        padding: dt('megamenu.submenu.label.padding');
        color: dt('megamenu.submenu.label.color');
        font-weight: dt('megamenu.submenu.label.font.weight');
        background: dt('megamenu.submenu.label.background');
    }

    .p-megamenu-separator {
        border-block-start: 1px solid dt('megamenu.separator.border.color');
    }

    .p-megamenu-horizontal {
        align-items: center;
        padding: dt('megamenu.horizontal.orientation.padding');
    }

    .p-megamenu-horizontal .p-megamenu-root-list {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        gap: dt('megamenu.horizontal.orientation.gap');
    }

    .p-megamenu-horizontal .p-megamenu-end {
        margin-left: auto;
        align-self: center;
    }

    .p-megamenu-horizontal .p-megamenu-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-megamenu-vertical {
        display: inline-flex;
        min-width: 12.5rem;
        flex-direction: column;
        align-items: stretch;
        padding: dt('megamenu.vertical.orientation.padding');
    }

    .p-megamenu-vertical .p-megamenu-root-list {
        align-items: stretch;
        flex-direction: column;
        gap: dt('megamenu.vertical.orientation.gap');
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay {
        left: 100%;
        top: 0;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-overlay:dir(rtl) {
        left: auto;
        right: 100%;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
        margin-left: auto;
    }

    .p-megamenu-vertical .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
        transform: rotate(180deg);
    }

    .p-megamenu-grid {
        display: flex;
    }

    .p-megamenu-col-2,
    .p-megamenu-col-3,
    .p-megamenu-col-4,
    .p-megamenu-col-6,
    .p-megamenu-col-12 {
        flex: 0 0 auto;
        padding: dt('megamenu.overlay.gap');
    }

    .p-megamenu-col-2 {
        width: 16.6667%;
    }

    .p-megamenu-col-3 {
        width: 25%;
    }

    .p-megamenu-col-4 {
        width: 33.3333%;
    }

    .p-megamenu-col-6 {
        width: 50%;
    }

    .p-megamenu-col-12 {
        width: 100%;
    }

    .p-megamenu-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('megamenu.mobile.button.size');
        height: dt('megamenu.mobile.button.size');
        position: relative;
        color: dt('megamenu.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('megamenu.mobile.button.border.radius');
        transition:
            background dt('megamenu.transition.duration'),
            color dt('megamenu.transition.duration'),
            outline-color dt('megamenu.transition.duration'),
            box-shadow dt('megamenu.transition.duration');
        outline-color: transparent;
    }

    .p-megamenu-button:hover {
        color: dt('megamenu.mobile.button.hover.color');
        background: dt('megamenu.mobile.button.hover.background');
    }

    .p-megamenu-button:focus-visible {
        box-shadow: dt('megamenu.mobile.button.focus.ring.shadow');
        outline: dt('megamenu.mobile.button.focus.ring.width') dt('megamenu.mobile.button.focus.ring.style') dt('megamenu.mobile.button.focus.ring.color');
        outline-offset: dt('megamenu.mobile.button.focus.ring.offset');
    }

    .p-megamenu-mobile {
        display: flex;
    }

    .p-megamenu-mobile .p-megamenu-button {
        display: flex;
    }

    .p-megamenu-mobile .p-megamenu-root-list {
        position: absolute;
        display: none;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        width: 100%;
        padding: dt('megamenu.submenu.padding');
        gap: dt('megamenu.submenu.gap');
        background: dt('megamenu.overlay.background');
        border: 1px solid dt('megamenu.overlay.border.color');
        box-shadow: dt('megamenu.overlay.shadow');
    }

    .p-megamenu-mobile .p-megamenu-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-megamenu-mobile-active .p-megamenu-root-list {
        display: block;
    }

    .p-megamenu-mobile .p-megamenu-root-list .p-megamenu-item {
        width: 100%;
        position: static;
    }

    .p-megamenu-mobile .p-megamenu-overlay {
        position: static;
        border: 0 none;
        border-radius: 0;
        box-shadow: none;
    }

    .p-megamenu-mobile .p-megamenu-grid {
        flex-wrap: wrap;
        overflow: auto;
        max-height: 90%;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item > .p-megamenu-item-content .p-megamenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-megamenu-mobile .p-megamenu-root-list > .p-megamenu-item-active > .p-megamenu-item-content .p-megamenu-submenu-icon {
        transform: rotate(-180deg);
    }
`,Z={rootList:function(e){var n=e.props;return{"max-height":n.scrollHeight,overflow:"auto"}}},Q={root:function(e){var n=e.instance;return["p-megamenu p-component",{"p-megamenu-mobile":n.queryMatches,"p-megamenu-mobile-active":n.mobileActive,"p-megamenu-horizontal":n.horizontal,"p-megamenu-vertical":n.vertical}]},start:"p-megamenu-start",button:"p-megamenu-button",rootList:"p-megamenu-root-list",submenuLabel:function(e){var n=e.instance,a=e.processedItem;return["p-megamenu-submenu-label",{"p-disabled":n.isItemDisabled(a)}]},item:function(e){var n=e.instance,a=e.processedItem;return["p-megamenu-item",{"p-megamenu-item-active":n.isItemActive(a),"p-focus":n.isItemFocused(a),"p-disabled":n.isItemDisabled(a)}]},itemContent:"p-megamenu-item-content",itemLink:"p-megamenu-item-link",itemIcon:"p-megamenu-item-icon",itemLabel:"p-megamenu-item-label",submenuIcon:"p-megamenu-submenu-icon",overlay:"p-megamenu-overlay",grid:"p-megamenu-grid",column:function(e){var n=e.instance,a=e.processedItem,m=n.isItemGroup(a)?a.items.length:0,i;if(n.$parentInstance.queryMatches)i="p-megamenu-col-12";else switch(m){case 2:i="p-megamenu-col-6";break;case 3:i="p-megamenu-col-4";break;case 4:i="p-megamenu-col-3";break;case 6:i="p-megamenu-col-2";break;default:i="p-megamenu-col-12";break}return i},submenu:"p-megamenu-submenu",separator:"p-megamenu-separator",end:"p-megamenu-end"},_=O.extend({name:"megamenu",style:X,classes:Q,inlineStyles:Z}),$={name:"BaseMegaMenu",extends:D,props:{model:{type:Array,default:null},orientation:{type:String,default:"horizontal"},breakpoint:{type:String,default:"960px"},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},scrollHeight:{type:String,default:"20rem"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:_,provide:function(){return{$pcMegaMenu:this,$parentInstance:this}}},B={name:"MegaMenuSub",hostName:"MegaMenu",extends:D,emits:["item-click","item-mouseenter"],props:{menuId:{type:String,default:null},focusedItemId:{type:String,default:null},horizontal:{type:Boolean,default:!1},submenu:{type:Object,default:null},mobileActive:{type:Boolean,default:!1},items:{type:Array,default:null},level:{type:Number,default:0},templates:{type:Object,default:null},activeItem:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getSubListId:function(e){return"".concat(this.getItemId(e),"_list")},getSubListKey:function(e){return this.getSubListId(e)},getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,n,a){return e&&e.item?F(e.item[n],a):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getPTOptions:function(e,n,a){return this.ptm(a,{context:{item:e.item,index:n,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e)}})},isItemActive:function(e){return c(this.activeItem)?this.activeItem.key===e.key:!1},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return c(e.items)},onItemClick:function(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.$emit("item-click",{originalEvent:e,processedItem:n,isFocus:!0})},onItemMouseEnter:function(e,n){this.$emit("item-mouseenter",{originalEvent:e,processedItem:n})},getAriaSetSize:function(){var e=this;return this.items.filter(function(n){return e.isItemVisible(n)&&!e.getItemProp(n,"separator")}).length},getAriaPosInset:function(e){var n=this;return e-this.items.slice(0,e).filter(function(a){return n.isItemVisible(a)&&n.getItemProp(a,"separator")}).length+1},getMenuItemProps:function(e,n){return{action:l({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions(e,n,"itemLink")),icon:l({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,n,"itemIcon")),label:l({class:this.cx("label")},this.getPTOptions(e,n,"label")),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions(e,n,"submenuIcon"))}}},components:{AngleRightIcon:J,AngleDownIcon:Y},directives:{ripple:W}},ee=["tabindex"],te=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],ne=["onClick","onMouseenter"],ie=["href","target"],ae=["id"];function se(t,e,n,a,m,i){var o=K("MegaMenuSub",!0),f=N("ripple");return u(),d("ul",l({class:n.level===0?t.cx("rootList"):t.cx("submenu"),tabindex:n.tabindex},n.level===0?t.ptm("rootList"):t.ptm("submenu")),[n.submenu?(u(),d("li",l({key:0,class:[t.cx("submenuLabel",{submenu:n.submenu}),i.getItemProp(n.submenu,"class")],style:i.getItemProp(n.submenu,"style"),role:"presentation"},t.ptm("submenuLabel")),S(i.getItemLabel(n.submenu)),17)):h("",!0),(u(!0),d(v,null,w(n.items,function(s,r){return u(),d(v,{key:i.getItemKey(s)},[i.isItemVisible(s)&&!i.getItemProp(s,"separator")?(u(),d("li",l({key:0,id:i.getItemId(s),style:i.getItemProp(s,"style"),class:[t.cx("item",{processedItem:s}),i.getItemProp(s,"class")],role:"menuitem","aria-label":i.getItemLabel(s),"aria-disabled":i.isItemDisabled(s)||void 0,"aria-expanded":i.isItemGroup(s)?i.isItemActive(s):void 0,"aria-haspopup":i.isItemGroup(s)&&!i.getItemProp(s,"to")?"menu":void 0,"aria-level":n.level+1,"aria-setsize":i.getAriaSetSize(),"aria-posinset":i.getAriaPosInset(r)},{ref_for:!0},i.getPTOptions(s,r,"item"),{"data-p-active":i.isItemActive(s),"data-p-focused":i.isItemFocused(s),"data-p-disabled":i.isItemDisabled(s)}),[P("div",l({class:t.cx("itemContent"),onClick:function(g){return i.onItemClick(g,s)},onMouseenter:function(g){return i.onItemMouseEnter(g,s)}},{ref_for:!0},i.getPTOptions(s,r,"itemContent")),[n.templates.item?(u(),y(k(n.templates.item),{key:1,item:s.item,hasSubmenu:i.isItemGroup(s),label:i.getItemLabel(s),props:i.getMenuItemProps(s,r)},null,8,["item","hasSubmenu","label","props"])):q((u(),d("a",l({key:0,href:i.getItemProp(s,"url"),class:t.cx("itemLink"),target:i.getItemProp(s,"target"),tabindex:"-1"},{ref_for:!0},i.getPTOptions(s,r,"itemLink")),[n.templates.itemicon?(u(),y(k(n.templates.itemicon),{key:0,item:s.item,class:V(t.cx("itemIcon"))},null,8,["item","class"])):i.getItemProp(s,"icon")?(u(),d("span",l({key:1,class:[t.cx("itemIcon"),i.getItemProp(s,"icon")]},{ref_for:!0},i.getPTOptions(s,r,"itemIcon")),null,16)):h("",!0),P("span",l({class:t.cx("itemLabel")},{ref_for:!0},i.getPTOptions(s,r,"itemLabel")),S(i.getItemLabel(s)),17),i.isItemGroup(s)?(u(),d(v,{key:2},[n.templates.submenuicon?(u(),y(k(n.templates.submenuicon),l({key:0,active:i.isItemActive(s),class:t.cx("submenuIcon")},{ref_for:!0},i.getPTOptions(s,r,"submenuIcon")),null,16,["active","class"])):(u(),y(k(n.horizontal||n.mobileActive?"AngleDownIcon":"AngleRightIcon"),l({key:1,class:t.cx("submenuIcon")},{ref_for:!0},i.getPTOptions(s,r,"submenuIcon")),null,16,["class"]))],64)):h("",!0)],16,ie)),[[f]])],16,ne),i.isItemVisible(s)&&i.isItemGroup(s)?(u(),d("div",l({key:0,class:t.cx("overlay")},{ref_for:!0},t.ptm("overlay")),[P("div",l({class:t.cx("grid")},{ref_for:!0},t.ptm("grid")),[(u(!0),d(v,null,w(s.items,function(I){return u(),d("div",l({key:i.getItemKey(I),class:t.cx("column",{processedItem:s})},{ref_for:!0},t.ptm("column")),[(u(!0),d(v,null,w(I,function(g){return u(),y(o,{key:i.getSubListKey(g),id:i.getSubListId(g),style:E(t.sx("submenu",!0,{processedItem:s})),role:"menu",menuId:n.menuId,focusedItemId:n.focusedItemId,submenu:g,items:g.items,templates:n.templates,level:n.level+1,mobileActive:n.mobileActive,pt:t.pt,unstyled:t.unstyled,onItemClick:e[0]||(e[0]=function(b){return t.$emit("item-click",b)}),onItemMouseenter:e[1]||(e[1]=function(b){return t.$emit("item-mouseenter",b)})},null,8,["id","style","menuId","focusedItemId","submenu","items","templates","level","mobileActive","pt","unstyled"])}),128))],16)}),128))],16)],16)):h("",!0)],16,te)):h("",!0),i.isItemVisible(s)&&i.getItemProp(s,"separator")?(u(),d("li",l({key:1,id:i.getItemId(s),class:[t.cx("separator"),i.getItemProp(s,"class")],style:i.getItemProp(s,"style"),role:"separator"},{ref_for:!0},t.ptm("separator")),null,16,ae)):h("",!0)],64)}),128))],16,ee)}B.render=se;var me={name:"MegaMenu",extends:$,inheritAttrs:!1,emits:["focus","blur"],outsideClickListener:null,resizeListener:null,matchMediaListener:null,container:null,menubar:null,searchTimeout:null,searchValue:null,data:function(){return{mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,key:"",parentKey:""},activeItem:null,dirty:!1,query:null,queryMatches:!1}},watch:{activeItem:function(e){c(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener()},methods:{getItemProp:function(e,n){return e?F(e[n]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return c(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&c(e.items)},toggle:function(e){var n=this;this.mobileActive?(this.mobileActive=!1,C.clear(this.menubar),this.hide()):(this.mobileActive=!0,C.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){n.show()},1)),this.bindOutsideClickListener(),e.preventDefault()},show:function(){this.focusedItemInfo={index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},p(this.menubar)},hide:function(e,n){var a=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){p(a.$refs.menubutton,{preventScroll:!0})},1)),this.activeItem=null,this.focusedItemInfo={index:-1,key:"",parentKey:""},n&&p(this.menubar),this.dirty=!1},onFocus:function(e){if(this.focused=!0,this.focusedItemInfo.index===-1){var n=this.findFirstFocusedItemIndex(),a=this.findVisibleItem(n);this.focusedItemInfo={index:n,key:a.key,parentKey:a.parentKey}}this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,key:"",parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&G(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e){var n=e.processedItem,a=e.isFocus;if(!A(n)){var m=n.index,i=n.key,o=n.parentKey,f=n.items,s=c(f);s&&(this.activeItem=n),this.focusedItemInfo={index:m,key:i,parentKey:o},s&&(this.dirty=!0),a&&p(this.menubar)}},onItemClick:function(e){var n=e.originalEvent,a=e.processedItem,m=this.isProccessedItemGroup(a),i=A(a.parent),o=this.isSelected(a);if(o){var f=a.index,s=a.key,r=a.parentKey;this.activeItem=null,this.focusedItemInfo={index:f,key:s,parentKey:r},this.dirty=!i,this.mobileActive||p(this.menubar,{preventScroll:!0})}else m?this.onItemChange(e):this.hide(n)},onItemMouseEnter:function(e){!this.mobileActive&&this.dirty&&this.onItemChange(e)},menuButtonClick:function(e){this.toggle(e)},menuButtonKeydown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey:function(e){if(this.horizontal)if(c(this.activeItem)&&this.activeItem.key===this.focusedItemInfo.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{var n=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(n);a&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo={index:-1,key:n.key,parentKey:n.parentKey},this.searchValue="")}var m=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,m),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.horizontal){if(this.focusedItemInfo.index!==-1){var n=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(n);!a&&c(this.activeItem)&&(this.focusedItemInfo.index===0?(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null):this.changeFocusedItemInfo(e,this.findFirstItemIndex()))}e.preventDefault()}else{var m=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,m),e.preventDefault()}},onArrowLeftKey:function(e){var n=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(n);if(a){if(this.horizontal){var m=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemInfo(e,m)}}else{this.vertical&&c(this.activeItem)&&n.columnIndex===0&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key,parentKey:this.activeItem.parentKey},this.activeItem=null);var i=n.columnIndex-1,o=this.visibleItems.findIndex(function(f){return f.columnIndex===i});o!==-1&&this.changeFocusedItemInfo(e,o)}e.preventDefault()},onArrowRightKey:function(e){var n=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(n);if(a){if(this.vertical)if(c(this.activeItem)&&this.activeItem.key===n.key)this.focusedItemInfo={index:-1,key:"",parentKey:this.activeItem.key};else{var m=this.findVisibleItem(this.focusedItemInfo.index),i=this.isProccessedItemGroup(m);i&&(this.onItemChange({originalEvent:e,processedItem:m}),this.focusedItemInfo={index:-1,key:m.key,parentKey:m.parentKey},this.searchValue="")}var o=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemInfo(e,o)}else{var f=n.columnIndex+1,s=this.visibleItems.findIndex(function(r){return r.columnIndex===f});s!==-1&&this.changeFocusedItemInfo(e,s)}e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemInfo(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemInfo(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var n=L(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),a=n&&L(n,'a[data-pc-section="itemlink"]');a?a.click():n&&n.click();var m=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(m);!i&&this.changeFocusedItemInfo(e,this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){c(this.activeItem)&&(this.focusedItemInfo={index:this.activeItem.index,key:this.activeItem.key},this.activeItem=null),e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var n=this.findVisibleItem(this.focusedItemInfo.index),a=this.isProccessedItemGroup(n);!a&&this.onItemChange({originalEvent:e,processedItem:n})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){var a=e.container&&!e.container.contains(n.target),m=!(e.target&&(e.target===n.target||e.target.contains(n.target)));a&&m&&e.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(n){R()||e.hide(n,!0),e.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){e.queryMatches=n.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var n;return this.isValidItem(e)&&((n=this.getProccessedItemLabel(e))===null||n===void 0?void 0:n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return c(this.activeItem)?this.activeItem.key===e.key:!1},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidItem(n)})},findLastItemIndex:function(){var e=this;return M(this.visibleItems,function(n){return e.isValidItem(n)})},findNextItemIndex:function(e){var n=this,a=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(m){return n.isValidItem(m)}):-1;return a>-1?a+e+1:e},findPrevItemIndex:function(e){var n=this,a=e>0?M(this.visibleItems.slice(0,e),function(m){return n.isValidItem(m)}):-1;return a>-1?a:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidSelectedItem(n)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},findVisibleItem:function(e){return c(this.visibleItems)?this.visibleItems[e]:null},searchItems:function(e,n){var a=this;this.searchValue=(this.searchValue||"")+n;var m=-1,i=!1;return this.focusedItemInfo.index!==-1?(m=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(o){return a.isItemMatched(o)}),m=m===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(o){return a.isItemMatched(o)}):m+this.focusedItemInfo.index):m=this.visibleItems.findIndex(function(o){return a.isItemMatched(o)}),m!==-1&&(i=!0),m===-1&&this.focusedItemInfo.index===-1&&(m=this.findFirstFocusedItemIndex()),m!==-1&&this.changeFocusedItemInfo(e,m),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){a.searchValue="",a.searchTimeout=null},500),i},changeFocusedItemInfo:function(e,n){var a=this.findVisibleItem(n);this.focusedItemInfo.index=n,this.focusedItemInfo.key=c(a)?a.key:"",this.scrollInView()},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,n=e!==-1?"".concat(this.$id,"_").concat(e):this.focusedItemId,a;n===null&&this.queryMatches?a=this.$refs.menubutton:a=L(this.menubar,'li[id="'.concat(n,'"]')),a&&a.scrollIntoView&&a.scrollIntoView({block:"nearest",inline:"nearest",behavior:"smooth"})},createProcessedItems:function(e){var n=this,a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",o=arguments.length>4?arguments[4]:void 0,f=[];return e&&e.forEach(function(s,r){var I=(i!==""?i+"_":"")+(o!==void 0?o+"_":"")+r,g={item:s,index:r,level:a,key:I,parent:m,parentKey:i,columnIndex:o!==void 0?o:m.columnIndex!==void 0?m.columnIndex:r};g.items=a===0&&s.items&&s.items.length>0?s.items.map(function(b,T){return n.createProcessedItems(b,a+1,g,I,T)}):n.createProcessedItems(s.items,a+1,g,I),f.push(g)}),f},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=c(this.activeItem)?this.activeItem:null;return e&&e.key===this.focusedItemInfo.parentKey?e.items.reduce(function(n,a){return a.forEach(function(m){m.items.forEach(function(i){n.push(i)})}),n},[]):this.processedItems},horizontal:function(){return this.orientation==="horizontal"},vertical:function(){return this.orientation==="vertical"},focusedItemId:function(){return c(this.focusedItemInfo.key)?"".concat(this.$id,"_").concat(this.focusedItemInfo.key):null}},components:{MegaMenuSub:B,BarsIcon:j}},oe=["id"],re=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function ue(t,e,n,a,m,i){var o=K("BarsIcon"),f=K("MegaMenuSub");return u(),d("div",l({ref:i.containerRef,id:t.$id,class:t.cx("root")},t.ptmi("root")),[t.$slots.start?(u(),d("div",l({key:0,class:t.cx("start")},t.ptm("start")),[x(t.$slots,"start")],16)):h("",!0),x(t.$slots,t.$slots.button?"button":"menubutton",{id:t.$id,class:V(t.cx("button")),toggleCallback:function(r){return i.menuButtonClick(r)}},function(){var s;return[t.model&&t.model.length>0?(u(),d("a",l({key:0,ref:"menubutton",role:"button",tabindex:"0",class:t.cx("button"),"aria-haspopup":!!(t.model.length&&t.model.length>0),"aria-expanded":m.mobileActive,"aria-controls":t.$id,"aria-label":(s=t.$primevue.config.locale.aria)===null||s===void 0?void 0:s.navigation,onClick:e[0]||(e[0]=function(r){return i.menuButtonClick(r)}),onKeydown:e[1]||(e[1]=function(r){return i.menuButtonKeydown(r)})},t.ptm("button")),[x(t.$slots,t.$slots.buttonicon?"buttonicon":"menubuttonicon",{},function(){return[z(o,U(H(t.ptm("buttonIcon"))),null,16)]})],16,re)):h("",!0)]}),z(f,{ref:i.menubarRef,id:t.$id+"_list",tabindex:t.disabled?-1:t.tabindex,role:"menubar","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-disabled":t.disabled||void 0,"aria-orientation":t.orientation,"aria-activedescendant":m.focused?i.focusedItemId:void 0,menuId:t.$id,focusedItemId:m.focused?i.focusedItemId:void 0,items:i.processedItems,horizontal:i.horizontal,templates:t.$slots,activeItem:m.activeItem,mobileActive:m.mobileActive,level:0,style:E(t.sx("rootList")),pt:t.pt,unstyled:t.unstyled,onFocus:i.onFocus,onBlur:i.onBlur,onKeydown:i.onKeyDown,onItemClick:i.onItemClick,onItemMouseenter:i.onItemMouseEnter},null,8,["id","tabindex","aria-label","aria-labelledby","aria-disabled","aria-orientation","aria-activedescendant","menuId","focusedItemId","items","horizontal","templates","activeItem","mobileActive","style","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter"]),t.$slots.end?(u(),d("div",l({key:1,class:t.cx("end")},t.ptm("end")),[x(t.$slots,"end")],16)):h("",!0)],16,oe)}me.render=ue;export{me as default};
