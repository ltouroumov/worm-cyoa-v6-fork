import{am as D,as as F,av as V,au as k,aw as B,aq as v,aK as y,ap as w,ac as o,aZ as R,az as H,y as l,X as c,z as a,A as O,a9 as N,a2 as h,Y as U,a3 as x,B as E,g as P,D as M,C as Z,aB as W,ab as I,$ as f,a0 as S,E as Y}from"./CRyIMHD9.js";import{x as L}from"./CLs7nh7g.js";import{C as j}from"./CJb-wsJH.js";import{O as q}from"./DMxPzpgf.js";import{s as X}from"./DkiAaU-x.js";import{s as K}from"./DtRQ--so.js";import{R as G}from"./Yj_2VITT.js";import{f as T}from"./ZhWAdK_X.js";import"./-v8K-QF4.js";import"./jc0MLXVe.js";var J=`
    .p-menu {
        background: dt('menu.background');
        color: dt('menu.color');
        border: 1px solid dt('menu.border.color');
        border-radius: dt('menu.border.radius');
        min-width: 12.5rem;
    }

    .p-menu-list {
        margin: 0;
        padding: dt('menu.list.padding');
        outline: 0 none;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: dt('menu.list.gap');
    }

    .p-menu-item-content {
        transition:
            background dt('menu.transition.duration'),
            color dt('menu.transition.duration');
        border-radius: dt('menu.item.border.radius');
        color: dt('menu.item.color');
        overflow: hidden;
    }

    .p-menu-item-link {
        cursor: pointer;
        display: flex;
        align-items: center;
        text-decoration: none;
        overflow: hidden;
        position: relative;
        color: inherit;
        padding: dt('menu.item.padding');
        gap: dt('menu.item.gap');
        user-select: none;
        outline: 0 none;
    }

    .p-menu-item-label {
        line-height: 1;
    }

    .p-menu-item-icon {
        color: dt('menu.item.icon.color');
    }

    .p-menu-item.p-focus .p-menu-item-content {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item.p-focus .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover {
        color: dt('menu.item.focus.color');
        background: dt('menu.item.focus.background');
    }

    .p-menu-item:not(.p-disabled) .p-menu-item-content:hover .p-menu-item-icon {
        color: dt('menu.item.icon.focus.color');
    }

    .p-menu-overlay {
        box-shadow: dt('menu.shadow');
    }

    .p-menu-submenu-label {
        background: dt('menu.submenu.label.background');
        padding: dt('menu.submenu.label.padding');
        color: dt('menu.submenu.label.color');
        font-weight: dt('menu.submenu.label.font.weight');
    }

    .p-menu-separator {
        border-block-start: 1px solid dt('menu.separator.border.color');
    }
`,Q={root:function(e){var n=e.props;return["p-menu p-component",{"p-menu-overlay":n.popup}]},start:"p-menu-start",list:"p-menu-list",submenuLabel:"p-menu-submenu-label",separator:"p-menu-separator",end:"p-menu-end",item:function(e){var n=e.instance;return["p-menu-item",{"p-focus":n.id===n.focusedOptionId,"p-disabled":n.disabled()}]},itemContent:"p-menu-item-content",itemLink:"p-menu-item-link",itemIcon:"p-menu-item-icon",itemLabel:"p-menu-item-label"},_=D.extend({name:"menu",style:J,classes:Q}),$={name:"BaseMenu",extends:K,props:{popup:{type:Boolean,default:!1},model:{type:Array,default:null},appendTo:{type:[String,Object],default:"body"},autoZIndex:{type:Boolean,default:!0},baseZIndex:{type:Number,default:0},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:_,provide:function(){return{$pcMenu:this,$parentInstance:this}}},z={name:"Menuitem",hostName:"Menu",extends:K,inheritAttrs:!1,emits:["item-click","item-mousemove"],props:{item:null,templates:null,id:null,focusedOptionId:null,index:null},methods:{getItemProp:function(e,n){return e&&e.item?R(e.item[n]):void 0},getPTOptions:function(e){return this.ptm(e,{context:{item:this.item,index:this.index,focused:this.isItemFocused(),disabled:this.disabled()}})},isItemFocused:function(){return this.focusedOptionId===this.id},onItemClick:function(e){var n=this.getItemProp(this.item,"command");n&&n({originalEvent:e,item:this.item.item}),this.$emit("item-click",{originalEvent:e,item:this.item,id:this.id})},onItemMouseMove:function(e){this.$emit("item-mousemove",{originalEvent:e,item:this.item,id:this.id})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},getMenuItemProps:function(e){return{action:o({class:this.cx("itemLink"),tabindex:"-1"},this.getPTOptions("itemLink")),icon:o({class:[this.cx("itemIcon"),e.icon]},this.getPTOptions("itemIcon")),label:o({class:this.cx("itemLabel")},this.getPTOptions("itemLabel"))}}},computed:{dataP:function(){return T({focus:this.isItemFocused(),disabled:this.disabled()})}},directives:{ripple:G}},ee=["id","aria-label","aria-disabled","data-p-focused","data-p-disabled","data-p"],te=["data-p"],ne=["href","target"],ie=["data-p"],se=["data-p"];function ae(t,e,n,s,d,i){var b=H("ripple");return i.visible()?(a(),l("li",o({key:0,id:n.id,class:[t.cx("item"),n.item.class],role:"menuitem",style:n.item.style,"aria-label":i.label(),"aria-disabled":i.disabled(),"data-p-focused":i.isItemFocused(),"data-p-disabled":i.disabled()||!1,"data-p":i.dataP},i.getPTOptions("item")),[O("div",o({class:t.cx("itemContent"),onClick:e[0]||(e[0]=function(p){return i.onItemClick(p)}),onMousemove:e[1]||(e[1]=function(p){return i.onItemMouseMove(p)}),"data-p":i.dataP},i.getPTOptions("itemContent")),[n.templates.item?n.templates.item?(a(),h(x(n.templates.item),{key:1,item:n.item,label:i.label(),props:i.getMenuItemProps(n.item)},null,8,["item","label","props"])):c("",!0):N((a(),l("a",o({key:0,href:n.item.url,class:t.cx("itemLink"),target:n.item.target,tabindex:"-1"},i.getPTOptions("itemLink")),[n.templates.itemicon?(a(),h(x(n.templates.itemicon),{key:0,item:n.item,class:U(t.cx("itemIcon"))},null,8,["item","class"])):n.item.icon?(a(),l("span",o({key:1,class:[t.cx("itemIcon"),n.item.icon],"data-p":i.dataP},i.getPTOptions("itemIcon")),null,16,ie)):c("",!0),O("span",o({class:t.cx("itemLabel"),"data-p":i.dataP},i.getPTOptions("itemLabel")),E(i.label()),17,se)],16,ne)),[[b]])],16,te)],16,ee)):c("",!0)}z.render=ae;function A(t){return de(t)||le(t)||oe(t)||re()}function re(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function oe(t,e){if(t){if(typeof t=="string")return C(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?C(t,e):void 0}}function le(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function de(t){if(Array.isArray(t))return C(t)}function C(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,s=Array(e);n<e;n++)s[n]=t[n];return s}var ue={name:"Menu",extends:$,inheritAttrs:!1,emits:["show","hide","focus","blur"],data:function(){return{overlayVisible:!1,focused:!1,focusedOptionIndex:-1,selectedOptionIndex:-1}},target:null,outsideClickListener:null,scrollHandler:null,resizeListener:null,container:null,list:null,mounted:function(){this.popup||(this.bindResizeListener(),this.bindOutsideClickListener())},beforeUnmount:function(){this.unbindResizeListener(),this.unbindOutsideClickListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.target=null,this.container&&this.autoZIndex&&L.clear(this.container),this.container=null},methods:{itemClick:function(e){var n=e.item;this.disabled(n)||(n.command&&n.command(e),this.overlayVisible&&this.hide(),!this.popup&&this.focusedOptionIndex!==e.id&&(this.focusedOptionIndex=e.id))},itemMouseMove:function(e){this.focused&&(this.focusedOptionIndex=e.id)},onListFocus:function(e){this.focused=!0,!this.popup&&this.changeFocusedOptionIndex(0),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onListKeyDown:function(e){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"NumpadEnter":this.onEnterKey(e);break;case"Space":this.onSpaceKey(e);break;case"Escape":this.popup&&(v(this.target),this.hide());case"Tab":this.overlayVisible&&this.hide();break}},onArrowDownKey:function(e){var n=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),e.preventDefault()},onArrowUpKey:function(e){if(e.altKey&&this.popup)v(this.target),this.hide(),e.preventDefault();else{var n=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(n),e.preventDefault()}},onHomeKey:function(e){this.changeFocusedOptionIndex(0),e.preventDefault()},onEndKey:function(e){this.changeFocusedOptionIndex(y(this.container,'li[data-pc-section="item"][data-p-disabled="false"]').length-1),e.preventDefault()},onEnterKey:function(e){var n=w(this.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),s=n&&w(n,'a[data-pc-section="itemlink"]');this.popup&&v(this.target),s?s.click():n&&n.click(),e.preventDefault()},onSpaceKey:function(e){this.onEnterKey(e)},findNextOptionIndex:function(e){var n=y(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=A(n).findIndex(function(d){return d.id===e});return s>-1?s+1:0},findPrevOptionIndex:function(e){var n=y(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=A(n).findIndex(function(d){return d.id===e});return s>-1?s-1:0},changeFocusedOptionIndex:function(e){var n=y(this.container,'li[data-pc-section="item"][data-p-disabled="false"]'),s=e>=n.length?n.length-1:e<0?0:e;s>-1&&(this.focusedOptionIndex=n[s].getAttribute("id"))},toggle:function(e,n){this.overlayVisible?this.hide():this.show(e,n)},show:function(e,n){this.overlayVisible=!0,this.target=n??e.currentTarget},hide:function(){this.overlayVisible=!1,this.target=null},onEnter:function(e){B(e,{position:"absolute",top:"0"}),this.alignOverlay(),this.bindOutsideClickListener(),this.bindResizeListener(),this.bindScrollListener(),this.autoZIndex&&L.set("menu",e,this.baseZIndex+this.$primevue.config.zIndex.menu),this.popup&&v(this.list),this.$emit("show")},onLeave:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindScrollListener(),this.$emit("hide")},onAfterLeave:function(e){this.autoZIndex&&L.clear(e)},alignOverlay:function(){V(this.container,this.target);var e=k(this.target);e>k(this.container)&&(this.container.style.minWidth=k(this.target)+"px")},bindOutsideClickListener:function(){var e=this;this.outsideClickListener||(this.outsideClickListener=function(n){var s=e.container&&!e.container.contains(n.target),d=!(e.target&&(e.target===n.target||e.target.contains(n.target)));e.overlayVisible&&s&&d?e.hide():!e.popup&&s&&d&&(e.focusedOptionIndex=-1)},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var e=this;this.scrollHandler||(this.scrollHandler=new j(this.target,function(){e.overlayVisible&&e.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var e=this;this.resizeListener||(this.resizeListener=function(){e.overlayVisible&&!F()&&e.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label:function(e){return typeof e.label=="function"?e.label():e.label},onOverlayClick:function(e){q.emit("overlay-click",{originalEvent:e,target:this.target})},containerRef:function(e){this.container=e},listRef:function(e){this.list=e}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null},dataP:function(){return T({popup:this.popup})}},components:{PVMenuitem:z,Portal:X}},ce=["id","data-p"],me=["id","tabindex","aria-activedescendant","aria-label","aria-labelledby"],pe=["id"];function fe(t,e,n,s,d,i){var b=P("PVMenuitem"),p=P("Portal");return a(),h(p,{appendTo:t.appendTo,disabled:!t.popup},{default:M(function(){return[Z(W,o({name:"p-connected-overlay",onEnter:i.onEnter,onLeave:i.onLeave,onAfterLeave:i.onAfterLeave},t.ptm("transition")),{default:M(function(){return[!t.popup||d.overlayVisible?(a(),l("div",o({key:0,ref:i.containerRef,id:t.$id,class:t.cx("root"),onClick:e[3]||(e[3]=function(){return i.onOverlayClick&&i.onOverlayClick.apply(i,arguments)}),"data-p":i.dataP},t.ptmi("root")),[t.$slots.start?(a(),l("div",o({key:0,class:t.cx("start")},t.ptm("start")),[I(t.$slots,"start")],16)):c("",!0),O("ul",o({ref:i.listRef,id:t.$id+"_list",class:t.cx("list"),role:"menu",tabindex:t.tabindex,"aria-activedescendant":d.focused?i.focusedOptionId:void 0,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,onFocus:e[0]||(e[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)})},t.ptm("list")),[(a(!0),l(f,null,S(t.model,function(r,u){return a(),l(f,{key:i.label(r)+u.toString()},[r.items&&i.visible(r)&&!r.separator?(a(),l(f,{key:0},[r.items?(a(),l("li",o({key:0,id:t.$id+"_"+u,class:[t.cx("submenuLabel"),r.class],role:"none"},{ref_for:!0},t.ptm("submenuLabel")),[I(t.$slots,t.$slots.submenulabel?"submenulabel":"submenuheader",{item:r},function(){return[Y(E(i.label(r)),1)]})],16,pe)):c("",!0),(a(!0),l(f,null,S(r.items,function(m,g){return a(),l(f,{key:m.label+u+"_"+g},[i.visible(m)&&!m.separator?(a(),h(b,{key:0,id:t.$id+"_"+u+"_"+g,item:m,templates:t.$slots,focusedOptionId:i.focusedOptionId,unstyled:t.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:t.pt},null,8,["id","item","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"])):i.visible(m)&&m.separator?(a(),l("li",o({key:"separator"+u+g,class:[t.cx("separator"),r.class],style:m.style,role:"separator"},{ref_for:!0},t.ptm("separator")),null,16)):c("",!0)],64)}),128))],64)):i.visible(r)&&r.separator?(a(),l("li",o({key:"separator"+u.toString(),class:[t.cx("separator"),r.class],style:r.style,role:"separator"},{ref_for:!0},t.ptm("separator")),null,16)):(a(),h(b,{key:i.label(r)+u.toString(),id:t.$id+"_"+u,item:r,index:u,templates:t.$slots,focusedOptionId:i.focusedOptionId,unstyled:t.unstyled,onItemClick:i.itemClick,onItemMousemove:i.itemMouseMove,pt:t.pt},null,8,["id","item","index","templates","focusedOptionId","unstyled","onItemClick","onItemMousemove","pt"]))],64)}),128))],16,me),t.$slots.end?(a(),l("div",o({key:1,class:t.cx("end")},t.ptm("end")),[I(t.$slots,"end")],16)):c("",!0)],16,ce)):c("",!0)]}),_:3},16,["onEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo","disabled"])}ue.render=fe;export{ue as default};
