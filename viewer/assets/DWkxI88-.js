import{am as B,an as g,ap as L,ao as S,as as T,ax as k,aq as p,aD as R,aZ as D,ac as l,g as M,az as j,y as b,z as c,$ as w,a0 as G,X as h,A as C,a2 as v,a9 as N,Y as A,a3 as P,B as q,aA as U,ab as x,C as F,ad as H,ae as W}from"./DKPM-x0c.js";import{x as K}from"./CLs7nh7g.js";import{s as Y}from"./CmKukep1.js";import{s as z}from"./DOKo9Z5P.js";import{s as J}from"./wbxXi1EW.js";import{s as X}from"./2essDdzJ.js";import{R as Z}from"./DsMfNAGv.js";import"./CLpHadom.js";import"./CIcfw3sJ.js";import"./jc0MLXVe.js";var Q=`
    .p-menubar {
        display: flex;
        align-items: center;
        background: dt('menubar.background');
        border: 1px solid dt('menubar.border.color');
        border-radius: dt('menubar.border.radius');
        color: dt('menubar.color');
        padding: dt('menubar.padding');
        gap: dt('menubar.gap');
    }

    .p-menubar-start,
    .p-megamenu-end {
        display: flex;
        align-items: center;
    }

    .p-menubar-root-list,
    .p-menubar-submenu {
        display: flex;
        margin: 0;
        padding: 0;
        list-style: none;
        outline: 0 none;
    }

    .p-menubar-root-list {
        align-items: center;
        flex-wrap: wrap;
        gap: dt('menubar.gap');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content {
        border-radius: dt('menubar.base.item.border.radius');
    }

    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.base.item.padding');
    }

    .p-menubar-item-content {
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration');
        border-radius: dt('menubar.item.border.radius');
        color: dt('menubar.item.color');
    }

    .p-menubar-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menubar.item.padding');
        gap: dt('menubar.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menubar-item-label {
        line-height: 1;
    }

    .p-menubar-item-icon {
        color: dt('menubar.item.icon.color');
    }

    .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.color');
        margin-left: auto;
        font-size: dt('menubar.submenu.icon.size');
        width: dt('menubar.submenu.icon.size');
        height: dt('menubar.submenu.icon.size');
    }

    .p-menubar-submenu .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-item.p-focus > .p-menubar-item-content {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item.p-focus > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover {
        color: dt('menubar.item.focus.color');
        background: dt('menubar.item.focus.background');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-item-icon {
        color: dt('menubar.item.icon.focus.color');
    }

    .p-menubar-item:not(.p-disabled) > .p-menubar-item-content:hover .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.focus.color');
    }

    .p-menubar-item-active > .p-menubar-item-content {
        color: dt('menubar.item.active.color');
        background: dt('menubar.item.active.background');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-item-icon {
        color: dt('menubar.item.icon.active.color');
    }

    .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        color: dt('menubar.submenu.icon.active.color');
    }

    .p-menubar-submenu {
        display: none;
        position: absolute;
        min-width: 12.5rem;
        z-index: 1;
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        border-radius: dt('menubar.submenu.border.radius');
        box-shadow: dt('menubar.submenu.shadow');
        color: dt('menubar.submenu.color');
        flex-direction: column;
        padding: dt('menubar.submenu.padding');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-submenu .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-submenu .p-menubar-item {
        position: relative;
    }

    .p-menubar-submenu > .p-menubar-item-active > .p-menubar-submenu {
        display: block;
        left: 100%;
        top: 0;
    }

    .p-menubar-end {
        margin-left: auto;
        align-self: center;
    }

    .p-menubar-end:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-button {
        display: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        width: dt('menubar.mobile.button.size');
        height: dt('menubar.mobile.button.size');
        position: relative;
        color: dt('menubar.mobile.button.color');
        border: 0 none;
        background: transparent;
        border-radius: dt('menubar.mobile.button.border.radius');
        transition:
            background dt('menubar.transition.duration'),
            color dt('menubar.transition.duration'),
            outline-color dt('menubar.transition.duration');
        outline-color: transparent;
    }

    .p-menubar-button:hover {
        color: dt('menubar.mobile.button.hover.color');
        background: dt('menubar.mobile.button.hover.background');
    }

    .p-menubar-button:focus-visible {
        box-shadow: dt('menubar.mobile.button.focus.ring.shadow');
        outline: dt('menubar.mobile.button.focus.ring.width') dt('menubar.mobile.button.focus.ring.style') dt('menubar.mobile.button.focus.ring.color');
        outline-offset: dt('menubar.mobile.button.focus.ring.offset');
    }

    .p-menubar-mobile {
        position: relative;
    }

    .p-menubar-mobile .p-menubar-button {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list {
        position: absolute;
        display: none;
        width: 100%;
        flex-direction: column;
        top: 100%;
        left: 0;
        z-index: 1;
        padding: dt('menubar.submenu.padding');
        background: dt('menubar.submenu.background');
        border: 1px solid dt('menubar.submenu.border.color');
        box-shadow: dt('menubar.submenu.shadow');
        border-radius: dt('menubar.submenu.border.radius');
        gap: dt('menubar.submenu.gap');
    }

    .p-menubar-mobile .p-menubar-root-list:dir(rtl) {
        left: auto;
        right: 0;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link {
        padding: dt('menubar.item.padding');
    }

    .p-menubar-mobile-active .p-menubar-root-list {
        display: flex;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-item {
        width: 100%;
        position: static;
    }

    .p-menubar-mobile .p-menubar-root-list .p-menubar-separator {
        border-block-start: 1px solid dt('menubar.separator.border.color');
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon {
        margin-left: auto;
        transition: transform 0.2s;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content .p-menubar-submenu-icon:dir(rtl),
    .p-menubar-mobile .p-menubar-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-menubar-mobile .p-menubar-root-list > .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-180deg);
    }

    .p-menubar-mobile .p-menubar-submenu .p-menubar-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-menubar-mobile .p-menubar-item-active > .p-menubar-item-content .p-menubar-submenu-icon {
        transform: rotate(-90deg);
    }

    .p-menubar-mobile .p-menubar-submenu {
        width: 100%;
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('menubar.submenu.mobile.indent');
        padding-inline-end: 0;
    }
`,_={submenu:function(e){var n=e.instance,i=e.processedItem;return{display:n.isItemActive(i)?"flex":"none"}}},$={root:function(e){var n=e.instance;return["p-menubar p-component",{"p-menubar-mobile":n.queryMatches,"p-menubar-mobile-active":n.mobileActive}]},start:"p-menubar-start",button:"p-menubar-button",rootList:"p-menubar-root-list",item:function(e){var n=e.instance,i=e.processedItem;return["p-menubar-item",{"p-menubar-item-active":n.isItemActive(i),"p-focus":n.isItemFocused(i),"p-disabled":n.isItemDisabled(i)}]},itemContent:"p-menubar-item-content",itemLink:"p-menubar-item-link",itemIcon:"p-menubar-item-icon",itemLabel:"p-menubar-item-label",submenuIcon:"p-menubar-submenu-icon",submenu:"p-menubar-submenu",separator:"p-menubar-separator",end:"p-menubar-end"},ee=B.extend({name:"menubar",style:Q,classes:$,inlineStyles:_}),te={name:"BaseMenubar",extends:z,props:{model:{type:Array,default:null},buttonProps:{type:null,default:null},breakpoint:{type:String,default:"960px"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ee,provide:function(){return{$pcMenubar:this,$parentInstance:this}}},V={name:"MenubarSub",hostName:"Menubar",extends:z,emits:["item-mouseenter","item-click","item-mousemove"],props:{items:{type:Array,default:null},root:{type:Boolean,default:!1},popup:{type:Boolean,default:!1},mobileActive:{type:Boolean,default:!1},templates:{type:Object,default:null},level:{type:Number,default:0},menuId:{type:String,default:null},focusedItemId:{type:String,default:null},activeItemPath:{type:Object,default:null}},list:null,methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,n,i){return e&&e.item?D(e.item[n],i):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,n,i){return this.ptm(i,{context:{item:e.item,index:n,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e),level:this.level}})},isItemActive:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return g(e.items)},onItemClick:function(e,n){this.getItemProp(n,"command",{originalEvent:e,item:n.item}),this.$emit("item-click",{originalEvent:e,processedItem:n,isFocus:!0})},onItemMouseEnter:function(e,n){this.$emit("item-mouseenter",{originalEvent:e,processedItem:n})},onItemMouseMove:function(e,n){this.$emit("item-mousemove",{originalEvent:e,processedItem:n})},getAriaPosInset:function(e){return e-this.calculateAriaSetSize.slice(0,e).length+1},getMenuItemProps:function(e,n){return{action:l({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions(e,n,"itemLink")),icon:l({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,n,"itemIcon")),label:l({class:this.cx("itemLabel")},this.getPTOptions(e,n,"itemLabel")),submenuicon:l({class:this.cx("submenuIcon")},this.getPTOptions(e,n,"submenuIcon"))}}},computed:{calculateAriaSetSize:function(){var e=this;return this.items.filter(function(n){return e.isItemVisible(n)&&e.getItemProp(n,"separator")})},getAriaSetSize:function(){var e=this;return this.items.filter(function(n){return e.isItemVisible(n)&&!e.getItemProp(n,"separator")}).length}},components:{AngleRightIcon:X,AngleDownIcon:J},directives:{ripple:Z}},ne=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],ie=["onClick","onMouseenter","onMousemove"],re=["href","target"],ae=["id"],se=["id"];function oe(t,e,n,i,s,r){var u=M("MenubarSub",!0),d=j("ripple");return c(),b("ul",l({class:n.level===0?t.cx("rootList"):t.cx("submenu")},n.level===0?t.ptm("rootList"):t.ptm("submenu")),[(c(!0),b(w,null,G(n.items,function(a,o){return c(),b(w,{key:r.getItemKey(a)},[r.isItemVisible(a)&&!r.getItemProp(a,"separator")?(c(),b("li",l({key:0,id:r.getItemId(a),style:r.getItemProp(a,"style"),class:[t.cx("item",{processedItem:a}),r.getItemProp(a,"class")],role:"menuitem","aria-label":r.getItemLabel(a),"aria-disabled":r.isItemDisabled(a)||void 0,"aria-expanded":r.isItemGroup(a)?r.isItemActive(a):void 0,"aria-haspopup":r.isItemGroup(a)&&!r.getItemProp(a,"to")?"menu":void 0,"aria-setsize":r.getAriaSetSize,"aria-posinset":r.getAriaPosInset(o)},{ref_for:!0},r.getPTOptions(a,o,"item"),{"data-p-active":r.isItemActive(a),"data-p-focused":r.isItemFocused(a),"data-p-disabled":r.isItemDisabled(a)}),[C("div",l({class:t.cx("itemContent"),onClick:function(f){return r.onItemClick(f,a)},onMouseenter:function(f){return r.onItemMouseEnter(f,a)},onMousemove:function(f){return r.onItemMouseMove(f,a)}},{ref_for:!0},r.getPTOptions(a,o,"itemContent")),[n.templates.item?(c(),v(P(n.templates.item),{key:1,item:a.item,root:n.root,hasSubmenu:r.getItemProp(a,"items"),label:r.getItemLabel(a),props:r.getMenuItemProps(a,o)},null,8,["item","root","hasSubmenu","label","props"])):N((c(),b("a",l({key:0,href:r.getItemProp(a,"url"),class:t.cx("itemLink"),target:r.getItemProp(a,"target"),tabindex:"-1"},{ref_for:!0},r.getPTOptions(a,o,"itemLink")),[n.templates.itemicon?(c(),v(P(n.templates.itemicon),{key:0,item:a.item,class:A(t.cx("itemIcon"))},null,8,["item","class"])):r.getItemProp(a,"icon")?(c(),b("span",l({key:1,class:[t.cx("itemIcon"),r.getItemProp(a,"icon")]},{ref_for:!0},r.getPTOptions(a,o,"itemIcon")),null,16)):h("",!0),C("span",l({id:r.getItemLabelId(a),class:t.cx("itemLabel")},{ref_for:!0},r.getPTOptions(a,o,"itemLabel")),q(r.getItemLabel(a)),17,ae),r.getItemProp(a,"items")?(c(),b(w,{key:2},[n.templates.submenuicon?(c(),v(P(n.templates.submenuicon),{key:0,root:n.root,active:r.isItemActive(a),class:A(t.cx("submenuIcon"))},null,8,["root","active","class"])):(c(),v(P(n.root?"AngleDownIcon":"AngleRightIcon"),l({key:1,class:t.cx("submenuIcon")},{ref_for:!0},r.getPTOptions(a,o,"submenuIcon")),null,16,["class"]))],64)):h("",!0)],16,re)),[[d]])],16,ie),r.isItemVisible(a)&&r.isItemGroup(a)?(c(),v(u,{key:0,id:r.getItemId(a)+"_list",menuId:n.menuId,role:"menu",style:U(t.sx("submenu",!0,{processedItem:a})),focusedItemId:n.focusedItemId,items:a.items,mobileActive:n.mobileActive,activeItemPath:n.activeItemPath,templates:n.templates,level:n.level+1,"aria-labelledby":r.getItemLabelId(a),pt:t.pt,unstyled:t.unstyled,onItemClick:e[0]||(e[0]=function(m){return t.$emit("item-click",m)}),onItemMouseenter:e[1]||(e[1]=function(m){return t.$emit("item-mouseenter",m)}),onItemMousemove:e[2]||(e[2]=function(m){return t.$emit("item-mousemove",m)})},null,8,["id","menuId","style","focusedItemId","items","mobileActive","activeItemPath","templates","level","aria-labelledby","pt","unstyled"])):h("",!0)],16,ne)):h("",!0),r.isItemVisible(a)&&r.getItemProp(a,"separator")?(c(),b("li",l({key:1,id:r.getItemId(a),class:[t.cx("separator"),r.getItemProp(a,"class")],style:r.getItemProp(a,"style"),role:"separator"},{ref_for:!0},t.ptm("separator")),null,16,se)):h("",!0)],64)}),128))],16)}V.render=oe;var ue={name:"Menubar",extends:te,inheritAttrs:!1,emits:["focus","blur"],matchMediaListener:null,data:function(){return{mobileActive:!1,focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],dirty:!1,query:null,queryMatches:!1}},watch:{activeItemPath:function(e){g(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener())}},outsideClickListener:null,container:null,menubar:null,mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.mobileActive=!1,this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.container&&K.clear(this.container),this.container=null},methods:{getItemProp:function(e,n){return e?D(e[n]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return g(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&g(e.items)},toggle:function(e){var n=this;this.mobileActive?(this.mobileActive=!1,K.clear(this.menubar),this.hide()):(this.mobileActive=!0,K.set("menu",this.menubar,this.$primevue.config.zIndex.menu),setTimeout(function(){n.show()},1)),this.bindOutsideClickListener(),e.preventDefault()},show:function(){p(this.menubar)},hide:function(e,n){var i=this;this.mobileActive&&(this.mobileActive=!1,setTimeout(function(){p(i.$refs.menubutton)},0)),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},n&&p(this.menubar),this.dirty=!1},onFocus:function(e){this.focused=!0,this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""},this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){var n=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!n&&R(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e,n){var i=e.processedItem,s=e.isFocus;if(!k(i)){var r=i.index,u=i.key,d=i.level,a=i.parentKey,o=i.items,m=g(o),f=this.activeItemPath.filter(function(I){return I.parentKey!==a&&I.parentKey!==u});m&&f.push(i),this.focusedItemInfo={index:r,level:d,parentKey:a},m&&(this.dirty=!0),s&&p(this.menubar),!(n==="hover"&&this.queryMatches)&&(this.activeItemPath=f)}},onItemClick:function(e){var n=e.originalEvent,i=e.processedItem,s=this.isProccessedItemGroup(i),r=k(i.parent),u=this.isSelected(i);if(u){var d=i.index,a=i.key,o=i.level,m=i.parentKey;this.activeItemPath=this.activeItemPath.filter(function(I){return a!==I.key&&a.startsWith(I.key)}),this.focusedItemInfo={index:d,level:o,parentKey:m},this.dirty=!r,p(this.menubar)}else if(s)this.onItemChange(e);else{var f=r?i:this.activeItemPath.find(function(I){return I.parentKey===""});this.hide(n),this.changeFocusedItemIndex(n,f?f.index:-1),this.mobileActive=!1,p(this.menubar)}},onItemMouseEnter:function(e){this.dirty&&this.onItemChange(e,"hover")},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},menuButtonClick:function(e){this.toggle(e)},menuButtonKeydown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&this.menuButtonClick(e)},onArrowDownKey:function(e){var n=this.visibleItems[this.focusedItemInfo.index],i=n?k(n.parent):null;if(i){var s=this.isProccessedItemGroup(n);s&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo={index:-1,parentKey:n.key},this.onArrowRightKey(e))}else{var r=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,r)}e.preventDefault()},onArrowUpKey:function(e){var n=this,i=this.visibleItems[this.focusedItemInfo.index],s=k(i.parent);if(s){var r=this.isProccessedItemGroup(i);if(r){this.onItemChange({originalEvent:e,processedItem:i}),this.focusedItemInfo={index:-1,parentKey:i.key};var u=this.findLastItemIndex();this.changeFocusedItemIndex(e,u)}}else{var d=this.activeItemPath.find(function(o){return o.key===i.parentKey});if(this.focusedItemInfo.index===0)this.focusedItemInfo={index:-1,parentKey:d?d.parentKey:""},this.searchValue="",this.onArrowLeftKey(e),this.activeItemPath=this.activeItemPath.filter(function(o){return o.parentKey!==n.focusedItemInfo.parentKey});else{var a=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,a)}}e.preventDefault()},onArrowLeftKey:function(e){var n=this,i=this.visibleItems[this.focusedItemInfo.index],s=i?this.activeItemPath.find(function(u){return u.key===i.parentKey}):null;if(s)this.onItemChange({originalEvent:e,processedItem:s}),this.activeItemPath=this.activeItemPath.filter(function(u){return u.parentKey!==n.focusedItemInfo.parentKey}),e.preventDefault();else{var r=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,r),e.preventDefault()}},onArrowRightKey:function(e){var n=this.visibleItems[this.focusedItemInfo.index],i=n?this.activeItemPath.find(function(u){return u.key===n.parentKey}):null;if(i){var s=this.isProccessedItemGroup(n);s&&(this.onItemChange({originalEvent:e,processedItem:n}),this.focusedItemInfo={index:-1,parentKey:n.key},this.onArrowDownKey(e))}else{var r=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,r),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var n=L(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),i=n&&L(n,'a[data-pc-section="itemlink"]');i?i.click():n&&n.click();var s=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(s);!r&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){if(this.focusedItemInfo.level!==0){var n=this.focusedItemInfo;this.hide(e,!1),this.focusedItemInfo={index:Number(n.parentKey.split("_")[0]),level:0,parentKey:""}}e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var n=this.visibleItems[this.focusedItemInfo.index],i=this.isProccessedItemGroup(n);!i&&this.onItemChange({originalEvent:e,processedItem:n})}this.hide()},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){var i=e.container&&!e.container.contains(n.target),s=!(e.target&&(e.target===n.target||e.target.contains(n.target)));i&&s&&e.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(n){T()||e.hide(n,!0),e.mobileActive=!1},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){e.queryMatches=n.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var n;return this.isValidItem(e)&&((n=this.getProccessedItemLabel(e))===null||n===void 0?void 0:n.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(n){return n.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidItem(n)})},findLastItemIndex:function(){var e=this;return S(this.visibleItems,function(n){return e.isValidItem(n)})},findNextItemIndex:function(e){var n=this,i=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(s){return n.isValidItem(s)}):-1;return i>-1?i+e+1:e},findPrevItemIndex:function(e){var n=this,i=e>0?S(this.visibleItems.slice(0,e),function(s){return n.isValidItem(s)}):-1;return i>-1?i:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(n){return e.isValidSelectedItem(n)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,n){var i=this;this.searchValue=(this.searchValue||"")+n;var s=-1,r=!1;return this.focusedItemInfo.index!==-1?(s=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(u){return i.isItemMatched(u)}),s=s===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(u){return i.isItemMatched(u)}):s+this.focusedItemInfo.index):s=this.visibleItems.findIndex(function(u){return i.isItemMatched(u)}),s!==-1&&(r=!0),s===-1&&this.focusedItemInfo.index===-1&&(s=this.findFirstFocusedItemIndex()),s!==-1&&this.changeFocusedItemIndex(e,s),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){i.searchValue="",i.searchTimeout=null},500),r},changeFocusedItemIndex:function(e,n){this.focusedItemInfo.index!==n&&(this.focusedItemInfo.index=n,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,n=e!==-1?"".concat(this.$id,"_").concat(e):this.focusedItemId,i=L(this.menubar,'li[id="'.concat(n,'"]'));i&&i.scrollIntoView&&i.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var n=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",u=[];return e&&e.forEach(function(d,a){var o=(r!==""?r+"_":"")+a,m={item:d,index:a,level:i,key:o,parent:s,parentKey:r};m.items=n.createProcessedItems(d.items,i+1,m,o),u.push(m)}),u},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,n=this.activeItemPath.find(function(i){return i.key===e.focusedItemInfo.parentKey});return n?n.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.$id).concat(g(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{MenubarSub:V,BarsIcon:Y}};function y(t){"@babel/helpers - typeof";return y=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(t)}function E(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable})),n.push.apply(n,i)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?E(Object(n),!0).forEach(function(i){me(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function me(t,e,n){return(e=ce(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ce(t){var e=le(t,"string");return y(e)=="symbol"?e:e+""}function le(t,e){if(y(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e);if(y(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var de=["aria-haspopup","aria-expanded","aria-controls","aria-label"];function be(t,e,n,i,s,r){var u=M("BarsIcon"),d=M("MenubarSub");return c(),b("div",l({ref:r.containerRef,class:t.cx("root")},t.ptmi("root")),[t.$slots.start?(c(),b("div",l({key:0,class:t.cx("start")},t.ptm("start")),[x(t.$slots,"start")],16)):h("",!0),x(t.$slots,t.$slots.button?"button":"menubutton",{id:t.$id,class:A(t.cx("button")),toggleCallback:function(o){return r.menuButtonClick(o)}},function(){var a;return[t.model&&t.model.length>0?(c(),b("a",l({key:0,ref:"menubutton",role:"button",tabindex:"0",class:t.cx("button"),"aria-haspopup":!!(t.model.length&&t.model.length>0),"aria-expanded":s.mobileActive,"aria-controls":t.$id,"aria-label":(a=t.$primevue.config.locale.aria)===null||a===void 0?void 0:a.navigation,onClick:e[0]||(e[0]=function(o){return r.menuButtonClick(o)}),onKeydown:e[1]||(e[1]=function(o){return r.menuButtonKeydown(o)})},O(O({},t.buttonProps),t.ptm("button"))),[x(t.$slots,t.$slots.buttonicon?"buttonicon":"menubuttonicon",{},function(){return[F(u,H(W(t.ptm("buttonicon"))),null,16)]})],16,de)):h("",!0)]}),F(d,{ref:r.menubarRef,id:t.$id+"_list",role:"menubar",items:r.processedItems,templates:t.$slots,root:!0,mobileActive:s.mobileActive,tabindex:"0","aria-activedescendant":s.focused?r.focusedItemId:void 0,menuId:t.$id,focusedItemId:s.focused?r.focusedItemId:void 0,activeItemPath:s.activeItemPath,level:0,"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel,pt:t.pt,unstyled:t.unstyled,onFocus:r.onFocus,onBlur:r.onBlur,onKeydown:r.onKeyDown,onItemClick:r.onItemClick,onItemMouseenter:r.onItemMouseEnter,onItemMousemove:r.onItemMouseMove},null,8,["id","items","templates","mobileActive","aria-activedescendant","menuId","focusedItemId","activeItemPath","aria-labelledby","aria-label","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"]),t.$slots.end?(c(),b("div",l({key:1,class:t.cx("end")},t.ptm("end")),[x(t.$slots,"end")],16)):h("",!0)],16)}ue.render=be;export{ue as default};
