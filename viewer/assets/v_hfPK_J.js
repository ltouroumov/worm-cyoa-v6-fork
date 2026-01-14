import{am as D,an as g,ap as L,ao as S,as as z,av as R,au as k,aw as B,aq as p,ax as P,aD as G,aZ as T,ac as u,bA as H,g as y,az as N,a2 as v,z as m,D as w,y as h,X as b,$ as x,a0 as _,A as C,a9 as q,a3 as M,Y as U,B as Z,aB as F,C as E,ab as A}from"./CatXm4QS.js";import{x as K}from"./CLs7nh7g.js";import{C as W}from"./Bx90go0B.js";import{O as j}from"./BzLPc_86.js";import{s as Y}from"./DQl_d7jh.js";import{s as V}from"./EUShYJ0M.js";import{s as J}from"./Da-54s6M.js";import{R as X}from"./Cu8HBrMI.js";import"./D3dOpJCP.js";import"./Dgx0yGI0.js";import"./jc0MLXVe.js";var Q=`
    .p-tieredmenu {
        background: dt('tieredmenu.background');
        color: dt('tieredmenu.color');
        border: 1px solid dt('tieredmenu.border.color');
        border-radius: dt('tieredmenu.border.radius');
        min-width: 12.5rem;
    }

    .p-tieredmenu-root-list,
    .p-tieredmenu-submenu {
        margin: 0;
        padding: dt('tieredmenu.list.padding');
        list-style: none;
        outline: 0 none;
        display: flex;
        flex-direction: column;
        gap: dt('tieredmenu.list.gap');
    }

    .p-tieredmenu-submenu {
        position: absolute;
        min-width: 100%;
        z-index: 1;
        background: dt('tieredmenu.background');
        color: dt('tieredmenu.color');
        border: 1px solid dt('tieredmenu.border.color');
        border-radius: dt('tieredmenu.border.radius');
        box-shadow: dt('tieredmenu.shadow');
    }

    .p-tieredmenu-item {
        position: relative;
    }

    .p-tieredmenu-item-content {
        transition:
            background dt('tieredmenu.transition.duration'),
            color dt('tieredmenu.transition.duration');
        border-radius: dt('tieredmenu.item.border.radius');
        color: dt('tieredmenu.item.color');
    }

    .p-tieredmenu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('tieredmenu.item.padding');
        gap: dt('tieredmenu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-tieredmenu-item-label {
        line-height: 1;
    }

    .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.color');
    }

    .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.color');
        margin-left: auto;
        font-size: dt('tieredmenu.submenu.icon.size');
        width: dt('tieredmenu.submenu.icon.size');
        height: dt('tieredmenu.submenu.icon.size');
    }

    .p-tieredmenu-submenu-icon:dir(rtl) {
        margin-left: 0;
        margin-right: auto;
    }

    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content {
        color: dt('tieredmenu.item.focus.color');
        background: dt('tieredmenu.item.focus.background');
    }

    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.focus.color');
    }

    .p-tieredmenu-item.p-focus > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.focus.color');
    }

    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover {
        color: dt('tieredmenu.item.focus.color');
        background: dt('tieredmenu.item.focus.background');
    }

    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.focus.color');
    }

    .p-tieredmenu-item:not(.p-disabled) > .p-tieredmenu-item-content:hover .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.focus.color');
    }

    .p-tieredmenu-item-active > .p-tieredmenu-item-content {
        color: dt('tieredmenu.item.active.color');
        background: dt('tieredmenu.item.active.background');
    }

    .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-item-icon {
        color: dt('tieredmenu.item.icon.active.color');
    }

    .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
        color: dt('tieredmenu.submenu.icon.active.color');
    }

    .p-tieredmenu-separator {
        border-block-start: 1px solid dt('tieredmenu.separator.border.color');
    }

    .p-tieredmenu-overlay {
        box-shadow: dt('tieredmenu.shadow');
    }

    .p-tieredmenu-enter-from,
    .p-tieredmenu-leave-active {
        opacity: 0;
    }

    .p-tieredmenu-enter-active {
        transition: opacity 250ms;
    }

    .p-tieredmenu-mobile .p-tieredmenu-submenu {
        position: static;
        box-shadow: none;
        border: 0 none;
        padding-inline-start: dt('tieredmenu.submenu.mobile.indent');
        padding-inline-end: 0;
    }

    .p-tieredmenu-mobile .p-tieredmenu-submenu:dir(rtl) {
        padding-inline-start: 0;
        padding-inline-end: dt('tieredmenu.submenu.mobile.indent');
    }

    .p-tieredmenu-mobile .p-tieredmenu-submenu-icon {
        transition: transform 0.2s;
        transform: rotate(90deg);
    }

    .p-tieredmenu-mobile .p-tieredmenu-item-active > .p-tieredmenu-item-content .p-tieredmenu-submenu-icon {
        transform: rotate(-90deg);
    }
`,$={submenu:function(e){var i=e.instance,r=e.processedItem;return{display:i.isItemActive(r)?"flex":"none"}}},ee={root:function(e){var i=e.props,r=e.instance;return["p-tieredmenu p-component",{"p-tieredmenu-overlay":i.popup,"p-tieredmenu-mobile":r.queryMatches}]},start:"p-tieredmenu-start",rootList:"p-tieredmenu-root-list",item:function(e){var i=e.instance,r=e.processedItem;return["p-tieredmenu-item",{"p-tieredmenu-item-active":i.isItemActive(r),"p-focus":i.isItemFocused(r),"p-disabled":i.isItemDisabled(r)}]},itemContent:"p-tieredmenu-item-content",itemLink:"p-tieredmenu-item-link",itemIcon:"p-tieredmenu-item-icon",itemLabel:"p-tieredmenu-item-label",submenuIcon:"p-tieredmenu-submenu-icon",submenu:"p-tieredmenu-submenu",separator:"p-tieredmenu-separator",end:"p-tieredmenu-end"},te=D.extend({name:"tieredmenu",style:Q,classes:ee,inlineStyles:$}),ie={name:"BaseTieredMenu",extends:V,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},breakpoint:{type:String,default:"960px"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},disabled:{type:Boolean,default:!1},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:te,provide:function(){return{$pcTieredMenu:this,$parentInstance:this}}},O={name:"TieredMenuSub",hostName:"TieredMenu",extends:V,emits:["item-click","item-mouseenter","item-mousemove"],container:null,props:{menuId:{type:String,default:null},focusedItemId:{type:String,default:null},items:{type:Array,default:null},visible:{type:Boolean,default:!1},level:{type:Number,default:0},templates:{type:Object,default:null},activeItemPath:{type:Object,default:null},tabindex:{type:Number,default:0}},methods:{getItemId:function(e){return"".concat(this.menuId,"_").concat(e.key)},getItemKey:function(e){return this.getItemId(e)},getItemProp:function(e,i,r){return e&&e.item?T(e.item[i],r):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},getItemLabelId:function(e){return"".concat(this.menuId,"_").concat(e.key,"_label")},getPTOptions:function(e,i,r){return this.ptm(r,{context:{item:e.item,index:i,active:this.isItemActive(e),focused:this.isItemFocused(e),disabled:this.isItemDisabled(e)}})},isItemActive:function(e){return this.activeItemPath.some(function(i){return i.key===e.key})},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemFocused:function(e){return this.focusedItemId===this.getItemId(e)},isItemGroup:function(e){return g(e.items)},onEnter:function(){H(this.container,this.level)},onItemClick:function(e,i){this.getItemProp(i,"command",{originalEvent:e,item:i.item}),this.$emit("item-click",{originalEvent:e,processedItem:i,isFocus:!0})},onItemMouseEnter:function(e,i){this.$emit("item-mouseenter",{originalEvent:e,processedItem:i})},onItemMouseMove:function(e,i){this.$emit("item-mousemove",{originalEvent:e,processedItem:i})},getAriaSetSize:function(){var e=this;return this.items.filter(function(i){return e.isItemVisible(i)&&!e.getItemProp(i,"separator")}).length},getAriaPosInset:function(e){var i=this;return e-this.items.slice(0,e).filter(function(r){return i.isItemVisible(r)&&i.getItemProp(r,"separator")}).length+1},getMenuItemProps:function(e,i){return{action:u({class:this.cx("itemLink"),tabindex:-1},this.getPTOptions(e,i,"itemLink")),icon:u({class:[this.cx("itemIcon"),this.getItemProp(e,"icon")]},this.getPTOptions(e,i,"itemIcon")),label:u({class:this.cx("itemLabel")},this.getPTOptions(e,i,"itemLabel")),submenuicon:u({class:this.cx("submenuIcon")},this.getPTOptions(e,i,"submenuIcon"))}},containerRef:function(e){this.container=e}},components:{AngleRightIcon:J},directives:{ripple:X}},ne=["tabindex"],re=["id","aria-label","aria-disabled","aria-expanded","aria-haspopup","aria-level","aria-setsize","aria-posinset","data-p-active","data-p-focused","data-p-disabled"],se=["onClick","onMouseenter","onMousemove"],ae=["href","target"],oe=["id"],ue=["id"];function de(t,e,i,r,a,n){var o=y("AngleRightIcon"),f=y("TieredMenuSub",!0),I=N("ripple");return m(),v(F,u({name:"p-tieredmenu",onEnter:n.onEnter},t.ptm("menu.transition")),{default:w(function(){return[i.level===0||i.visible?(m(),h("ul",{key:0,ref:n.containerRef,tabindex:i.tabindex},[(m(!0),h(x,null,_(i.items,function(s,d){return m(),h(x,{key:n.getItemKey(s)},[n.isItemVisible(s)&&!n.getItemProp(s,"separator")?(m(),h("li",u({key:0,id:n.getItemId(s),style:n.getItemProp(s,"style"),class:[t.cx("item",{processedItem:s}),n.getItemProp(s,"class")],role:"menuitem","aria-label":n.getItemLabel(s),"aria-disabled":n.isItemDisabled(s)||void 0,"aria-expanded":n.isItemGroup(s)?n.isItemActive(s):void 0,"aria-haspopup":n.isItemGroup(s)&&!n.getItemProp(s,"to")?"menu":void 0,"aria-level":i.level+1,"aria-setsize":n.getAriaSetSize(),"aria-posinset":n.getAriaPosInset(d)},{ref_for:!0},n.getPTOptions(s,d,"item"),{"data-p-active":n.isItemActive(s),"data-p-focused":n.isItemFocused(s),"data-p-disabled":n.isItemDisabled(s)}),[C("div",u({class:t.cx("itemContent"),onClick:function(c){return n.onItemClick(c,s)},onMouseenter:function(c){return n.onItemMouseEnter(c,s)},onMousemove:function(c){return n.onItemMouseMove(c,s)}},{ref_for:!0},n.getPTOptions(s,d,"itemContent")),[i.templates.item?(m(),v(M(i.templates.item),{key:1,item:s.item,hasSubmenu:n.getItemProp(s,"items"),label:n.getItemLabel(s),props:n.getMenuItemProps(s,d)},null,8,["item","hasSubmenu","label","props"])):q((m(),h("a",u({key:0,href:n.getItemProp(s,"url"),class:t.cx("itemLink"),target:n.getItemProp(s,"target"),tabindex:"-1"},{ref_for:!0},n.getPTOptions(s,d,"itemLink")),[i.templates.itemicon?(m(),v(M(i.templates.itemicon),{key:0,item:s.item,class:U(t.cx("itemIcon"))},null,8,["item","class"])):n.getItemProp(s,"icon")?(m(),h("span",u({key:1,class:[t.cx("itemIcon"),n.getItemProp(s,"icon")]},{ref_for:!0},n.getPTOptions(s,d,"itemIcon")),null,16)):b("",!0),C("span",u({id:n.getItemLabelId(s),class:t.cx("itemLabel")},{ref_for:!0},n.getPTOptions(s,d,"itemLabel")),Z(n.getItemLabel(s)),17,oe),n.getItemProp(s,"items")?(m(),h(x,{key:2},[i.templates.submenuicon?(m(),v(M(i.templates.submenuicon),u({key:0,class:t.cx("submenuIcon"),active:n.isItemActive(s)},{ref_for:!0},n.getPTOptions(s,d,"submenuIcon")),null,16,["class","active"])):(m(),v(o,u({key:1,class:t.cx("submenuIcon")},{ref_for:!0},n.getPTOptions(s,d,"submenuIcon")),null,16,["class"]))],64)):b("",!0)],16,ae)),[[I]])],16,se),n.isItemVisible(s)&&n.isItemGroup(s)?(m(),v(f,u({key:0,id:n.getItemId(s)+"_list",class:t.cx("submenu"),style:t.sx("submenu",!0,{processedItem:s}),"aria-labelledby":n.getItemLabelId(s),role:"menu",menuId:i.menuId,focusedItemId:i.focusedItemId,items:s.items,templates:i.templates,activeItemPath:i.activeItemPath,level:i.level+1,visible:n.isItemActive(s)&&n.isItemGroup(s),pt:t.pt,unstyled:t.unstyled,onItemClick:e[0]||(e[0]=function(l){return t.$emit("item-click",l)}),onItemMouseenter:e[1]||(e[1]=function(l){return t.$emit("item-mouseenter",l)}),onItemMousemove:e[2]||(e[2]=function(l){return t.$emit("item-mousemove",l)})},{ref_for:!0},t.ptm("submenu")),null,16,["id","class","style","aria-labelledby","menuId","focusedItemId","items","templates","activeItemPath","level","visible","pt","unstyled"])):b("",!0)],16,re)):b("",!0),n.isItemVisible(s)&&n.getItemProp(s,"separator")?(m(),h("li",u({key:1,id:n.getItemId(s),style:n.getItemProp(s,"style"),class:[t.cx("separator"),n.getItemProp(s,"class")],role:"separator"},{ref_for:!0},t.ptm("separator")),null,16,ue)):b("",!0)],64)}),128))],8,ne)):b("",!0)]}),_:1},16,["onEnter"])}O.render=de;var me={name:"TieredMenu",extends:ie,inheritAttrs:!1,emits:["focus","blur","before-show","before-hide","hide","show"],outsideClickListener:null,matchMediaListener:null,scrollHandler:null,resizeListener:null,target:null,container:null,menubar:null,searchTimeout:null,searchValue:null,data:function(){return{focused:!1,focusedItemInfo:{index:-1,level:0,parentKey:""},activeItemPath:[],visible:!this.popup,submenuVisible:!1,dirty:!1,query:null,queryMatches:!1}},watch:{activeItemPath:function(e){this.popup||(g(e)?(this.bindOutsideClickListener(),this.bindResizeListener()):(this.unbindOutsideClickListener(),this.unbindResizeListener()))}},mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.container&&this.autoZIndex&&K.clear(this.container),this.target=null,this.container=null},methods:{getItemProp:function(e,i){return e?T(e[i]):void 0},getItemLabel:function(e){return this.getItemProp(e,"label")},isItemDisabled:function(e){return this.getItemProp(e,"disabled")},isItemVisible:function(e){return this.getItemProp(e,"visible")!==!1},isItemGroup:function(e){return g(this.getItemProp(e,"items"))},isItemSeparator:function(e){return this.getItemProp(e,"separator")},getProccessedItemLabel:function(e){return e?this.getItemLabel(e.item):void 0},isProccessedItemGroup:function(e){return e&&g(e.items)},toggle:function(e){this.visible?this.hide(e,!0):this.show(e)},show:function(e,i){this.popup&&(this.$emit("before-show"),this.visible=!0,this.target=this.target||e.currentTarget,this.relatedTarget=e.relatedTarget||null),i&&p(this.menubar)},hide:function(e,i){this.popup&&(this.$emit("before-hide"),this.visible=!1),this.activeItemPath=[],this.focusedItemInfo={index:-1,level:0,parentKey:""},i&&p(this.relatedTarget||this.target||this.menubar),this.dirty=!1},onFocus:function(e){this.focused=!0,this.popup||(this.focusedItemInfo=this.focusedItemInfo.index!==-1?this.focusedItemInfo:{index:this.findFirstFocusedItemIndex(),level:0,parentKey:""}),this.$emit("focus",e)},onBlur:function(e){this.focused=!1,this.focusedItemInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.dirty=!1,this.$emit("blur",e)},onKeyDown:function(e){if(this.disabled){e.preventDefault();return}var i=e.metaKey||e.ctrlKey;switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Space":this.onSpaceKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Escape":this.onEscapeKey(e);break;case"Tab":this.onTabKey(e);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!i&&G(e.key)&&this.searchItems(e,e.key);break}},onItemChange:function(e,i){var r=e.processedItem,a=e.isFocus;if(!P(r)){var n=r.index,o=r.key,f=r.level,I=r.parentKey,s=r.items,d=g(s),l=this.activeItemPath.filter(function(c){return c.parentKey!==I&&c.parentKey!==o});d&&(l.push(r),this.submenuVisible=!0),this.focusedItemInfo={index:n,level:f,parentKey:I},d&&(this.dirty=!0),a&&p(this.menubar),!(i==="hover"&&this.queryMatches)&&(this.activeItemPath=l)}},onOverlayClick:function(e){j.emit("overlay-click",{originalEvent:e,target:this.target})},onItemClick:function(e){var i=e.originalEvent,r=e.processedItem,a=this.isProccessedItemGroup(r),n=P(r.parent),o=this.isSelected(r);if(o){var f=r.index,I=r.key,s=r.level,d=r.parentKey;this.activeItemPath=this.activeItemPath.filter(function(c){return I!==c.key&&I.startsWith(c.key)}),this.focusedItemInfo={index:f,level:s,parentKey:d},this.dirty=!n,p(this.menubar)}else if(a)this.onItemChange(e);else{var l=n?r:this.activeItemPath.find(function(c){return c.parentKey===""});this.hide(i),this.changeFocusedItemIndex(i,l?l.index:-1),p(this.menubar)}},onItemMouseEnter:function(e){this.dirty&&this.onItemChange(e,"hover")},onItemMouseMove:function(e){this.focused&&this.changeFocusedItemIndex(e,e.processedItem.index)},onArrowDownKey:function(e){var i=this.focusedItemInfo.index!==-1?this.findNextItemIndex(this.focusedItemInfo.index):this.findFirstFocusedItemIndex();this.changeFocusedItemIndex(e,i),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey){if(this.focusedItemInfo.index!==-1){var i=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(i);!r&&this.onItemChange({originalEvent:e,processedItem:i})}this.popup&&this.hide(e,!0),e.preventDefault()}else{var a=this.focusedItemInfo.index!==-1?this.findPrevItemIndex(this.focusedItemInfo.index):this.findLastFocusedItemIndex();this.changeFocusedItemIndex(e,a),e.preventDefault()}},onArrowLeftKey:function(e){var i=this,r=this.visibleItems[this.focusedItemInfo.index],a=this.activeItemPath.find(function(o){return o.key===r.parentKey}),n=P(r.parent);n||(this.focusedItemInfo={index:-1,parentKey:a?a.parentKey:""},this.searchValue="",this.onArrowDownKey(e)),this.activeItemPath=this.activeItemPath.filter(function(o){return o.parentKey!==i.focusedItemInfo.parentKey}),e.preventDefault()},onArrowRightKey:function(e){var i=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(i);r&&(this.onItemChange({originalEvent:e,processedItem:i}),this.focusedItemInfo={index:-1,parentKey:i.key},this.searchValue="",this.onArrowDownKey(e)),e.preventDefault()},onHomeKey:function(e){this.changeFocusedItemIndex(e,this.findFirstItemIndex()),e.preventDefault()},onEndKey:function(e){this.changeFocusedItemIndex(e,this.findLastItemIndex()),e.preventDefault()},onEnterKey:function(e){if(this.focusedItemInfo.index!==-1){var i=L(this.menubar,'li[id="'.concat("".concat(this.focusedItemId),'"]')),r=i&&L(i,'[data-pc-section="itemlink"]');if(r?r.click():i&&i.click(),!this.popup){var a=this.visibleItems[this.focusedItemInfo.index],n=this.isProccessedItemGroup(a);!n&&(this.focusedItemInfo.index=this.findFirstFocusedItemIndex())}}e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},onEscapeKey:function(e){if(this.popup||this.focusedItemInfo.level!==0){var i=this.focusedItemInfo;this.hide(e,!1),this.focusedItemInfo={index:Number(i.parentKey.split("_")[0]),level:0,parentKey:""},this.popup&&p(this.target)}e.preventDefault()},onTabKey:function(e){if(this.focusedItemInfo.index!==-1){var i=this.visibleItems[this.focusedItemInfo.index],r=this.isProccessedItemGroup(i);!r&&this.onItemChange({originalEvent:e,processedItem:i})}this.hide()},onEnter:function(e){this.autoZIndex&&K.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),B(e,{position:"absolute",top:"0"}),this.alignOverlay(),p(this.menubar),this.scrollInView()},onAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.container=null,this.dirty=!1},onAfterLeave:function(e){this.autoZIndex&&K.clear(e)},alignOverlay:function(){R(this.container,this.target);var e=k(this.target);e>k(this.container)&&(this.container.style.minWidth=k(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(i){var r=e.container&&!e.container.contains(i.target),a=e.popup?!(e.target&&(e.target===i.target||e.target.contains(i.target))):!0;r&&a&&e.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new W(this.target,function(i){e.hide(i,!0)})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(i){z()||e.hide(i,!0)},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var i=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=i,this.queryMatches=i.matches,this.matchMediaListener=function(){e.queryMatches=i.matches},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isItemMatched:function(e){var i;return this.isValidItem(e)&&((i=this.getProccessedItemLabel(e))===null||i===void 0?void 0:i.toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase()))},isValidItem:function(e){return!!e&&!this.isItemDisabled(e.item)&&!this.isItemSeparator(e.item)&&this.isItemVisible(e.item)},isValidSelectedItem:function(e){return this.isValidItem(e)&&this.isSelected(e)},isSelected:function(e){return this.activeItemPath.some(function(i){return i.key===e.key})},findFirstItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(i){return e.isValidItem(i)})},findLastItemIndex:function(){var e=this;return S(this.visibleItems,function(i){return e.isValidItem(i)})},findNextItemIndex:function(e){var i=this,r=e<this.visibleItems.length-1?this.visibleItems.slice(e+1).findIndex(function(a){return i.isValidItem(a)}):-1;return r>-1?r+e+1:e},findPrevItemIndex:function(e){var i=this,r=e>0?S(this.visibleItems.slice(0,e),function(a){return i.isValidItem(a)}):-1;return r>-1?r:e},findSelectedItemIndex:function(){var e=this;return this.visibleItems.findIndex(function(i){return e.isValidSelectedItem(i)})},findFirstFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findFirstItemIndex():e},findLastFocusedItemIndex:function(){var e=this.findSelectedItemIndex();return e<0?this.findLastItemIndex():e},searchItems:function(e,i){var r=this;this.searchValue=(this.searchValue||"")+i;var a=-1,n=!1;return this.focusedItemInfo.index!==-1?(a=this.visibleItems.slice(this.focusedItemInfo.index).findIndex(function(o){return r.isItemMatched(o)}),a=a===-1?this.visibleItems.slice(0,this.focusedItemInfo.index).findIndex(function(o){return r.isItemMatched(o)}):a+this.focusedItemInfo.index):a=this.visibleItems.findIndex(function(o){return r.isItemMatched(o)}),a!==-1&&(n=!0),a===-1&&this.focusedItemInfo.index===-1&&(a=this.findFirstFocusedItemIndex()),a!==-1&&this.changeFocusedItemIndex(e,a),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){r.searchValue="",r.searchTimeout=null},500),n},changeFocusedItemIndex:function(e,i){this.focusedItemInfo.index!==i&&(this.focusedItemInfo.index=i,this.scrollInView())},scrollInView:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1,i=e!==-1?"".concat(this.$id,"_").concat(e):this.focusedItemId,r=L(this.menubar,'li[id="'.concat(i,'"]'));r&&r.scrollIntoView&&r.scrollIntoView({block:"nearest",inline:"start"})},createProcessedItems:function(e){var i=this,r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",o=[];return e&&e.forEach(function(f,I){var s=(n!==""?n+"_":"")+I,d={item:f,index:I,level:r,key:s,parent:a,parentKey:n};d.items=i.createProcessedItems(f.items,r+1,d,s),o.push(d)}),o},containerRef:function(e){this.container=e},menubarRef:function(e){this.menubar=e?e.$el:void 0}},computed:{processedItems:function(){return this.createProcessedItems(this.model||[])},visibleItems:function(){var e=this,i=this.activeItemPath.find(function(r){return r.key===e.focusedItemInfo.parentKey});return i?i.items:this.processedItems},focusedItemId:function(){return this.focusedItemInfo.index!==-1?"".concat(this.$id).concat(g(this.focusedItemInfo.parentKey)?"_"+this.focusedItemInfo.parentKey:"","_").concat(this.focusedItemInfo.index):null}},components:{TieredMenuSub:O,Portal:Y}},le=["id"];function ce(t,e,i,r,a,n){var o=y("TieredMenuSub"),f=y("Portal");return m(),v(f,{appendTo:t.appendTo,disabled:!t.popup},{default:w(function(){return[E(F,u({name:"p-connected-overlay",onEnter:n.onEnter,onAfterEnter:n.onAfterEnter,onLeave:n.onLeave,onAfterLeave:n.onAfterLeave},t.ptm("transition")),{default:w(function(){return[a.visible?(m(),h("div",u({key:0,ref:n.containerRef,id:t.$id,class:t.cx("root"),onClick:e[0]||(e[0]=function(){return n.onOverlayClick&&n.onOverlayClick.apply(n,arguments)})},t.ptmi("root")),[t.$slots.start?(m(),h("div",u({key:0,class:t.cx("start")},t.ptm("start")),[A(t.$slots,"start")],16)):b("",!0),E(o,u({ref:n.menubarRef,id:t.$id+"_list",class:t.cx("rootList"),tabindex:t.disabled?-1:t.tabindex,role:"menubar","aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,"aria-disabled":t.disabled||void 0,"aria-orientation":"vertical","aria-activedescendant":a.focused?n.focusedItemId:void 0,menuId:t.$id,focusedItemId:a.focused?n.focusedItemId:void 0,items:n.processedItems,templates:t.$slots,activeItemPath:a.activeItemPath,level:0,visible:a.submenuVisible,pt:t.pt,unstyled:t.unstyled,onFocus:n.onFocus,onBlur:n.onBlur,onKeydown:n.onKeyDown,onItemClick:n.onItemClick,onItemMouseenter:n.onItemMouseEnter,onItemMousemove:n.onItemMouseMove},t.ptm("rootList")),null,16,["id","class","tabindex","aria-label","aria-labelledby","aria-disabled","aria-activedescendant","menuId","focusedItemId","items","templates","activeItemPath","visible","pt","unstyled","onFocus","onBlur","onKeydown","onItemClick","onItemMouseenter","onItemMousemove"]),t.$slots.end?(m(),h("div",u({key:1,class:t.cx("end")},t.ptm("end")),[A(t.$slots,"end")],16)):b("",!0)],16,le)):b("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}me.render=ce;export{me as default};
