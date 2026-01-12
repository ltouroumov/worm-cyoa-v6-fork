import{s as L}from"./BnCTUWIY.js";import{am as w,ac as s,aK as u,ap as h,aZ as A,az as b,y as c,z as l,A as k,$ as S,a0 as D,a9 as y,a2 as g,Y as K,a3 as v,g as C,C as P}from"./pMy00rFG.js";import{R as T}from"./KEmsYfFr.js";import{T as E}from"./BI7s4gsp.js";import"./BS0lvZD9.js";import"./jc0MLXVe.js";import"./CLs7nh7g.js";import"./BF1X4UgF.js";var F=`
    .p-dock {
        position: absolute;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        pointer-events: none;
    }

    .p-dock-list-container {
        display: flex;
        pointer-events: auto;
        background: dt('dock.background');
        border: 1px solid dt('dock.border.color');
        padding: dt('dock.padding');
        border-radius: dt('dock.border.radius');
    }

    .p-dock-list {
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        align-items: center;
        justify-content: center;
        outline: 0 none;
    }

    .p-dock-item {
        transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        will-change: transform;
        padding: dt('dock.item.padding');
        border-radius: dt('dock.item.border.radius');
    }

    .p-dock-item.p-focus {
        box-shadow: dt('dock.item.focus.ring.shadow');
        outline: dt('dock.item.focus.ring.width') dt('dock.item.focus.ring.style') dt('dock.item.focus.ring.color');
        outline-offset: dt('dock.item.focus.ring.offset');
    }

    .p-dock-item-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        overflow: hidden;
        cursor: default;
        width: dt('dock.item.size');
        height: dt('dock.item.size');
    }

    .p-dock-top {
        left: 0;
        top: 0;
        width: 100%;
    }

    .p-dock-bottom {
        left: 0;
        bottom: 0;
        width: 100%;
    }

    .p-dock-right {
        right: 0;
        top: 0;
        height: 100%;
    }

    .p-dock-right .p-dock-list {
        flex-direction: column;
    }

    .p-dock-left {
        left: 0;
        top: 0;
        height: 100%;
    }

    .p-dock-left .p-dock-list {
        flex-direction: column;
    }

    .p-dock-mobile.p-dock-top .p-dock-list-container,
    .p-dock-mobile.p-dock-bottom .p-dock-list-container {
        overflow-x: auto;
        width: 100%;
    }

    .p-dock-mobile.p-dock-top .p-dock-list-container .p-dock-list,
    .p-dock-mobile.p-dock-bottom .p-dock-list-container .p-dock-list {
        margin: 0 auto;
    }

    .p-dock-mobile.p-dock-left .p-dock-list-container,
    .p-dock-mobile.p-dock-right .p-dock-list-container {
        overflow-y: auto;
        height: 100%;
    }

    .p-dock-mobile.p-dock-left .p-dock-list-container .p-dock-list,
    .p-dock-mobile.p-dock-right .p-dock-list-container .p-dock-list {
        margin: auto 0;
    }

    .p-dock-mobile .p-dock-list .p-dock-item {
        transform: none;
        margin: 0;
    }
`,B={root:function(t){var n=t.instance,o=t.props;return["p-dock p-component","p-dock-".concat(o.position),{"p-dock-mobile":n.queryMatches}]},listContainer:"p-dock-list-container",list:"p-dock-list",item:function(t){var n=t.instance,o=t.processedItem,d=t.id;return["p-dock-item",{"p-focus":n.isItemActive(d),"p-disabled":n.disabled(o)}]},itemContent:"p-dock-item-content",itemLink:"p-dock-item-link",itemIcon:"p-dock-item-icon"},N=w.extend({name:"dock",style:F,classes:B}),z={name:"BaseDock",extends:L,props:{position:{type:String,default:"bottom"},model:null,class:null,style:null,tooltipOptions:null,menuId:{type:String,default:null},tabindex:{type:Number,default:0},breakpoint:{type:String,default:"960px"},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:N,provide:function(){return{$pcDock:this,$parentInstance:this}}};function I(e){return H(e)||j(e)||q(e)||U()}function U(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(e,t){if(e){if(typeof e=="string")return m(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(e,t):void 0}}function j(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function H(e){if(Array.isArray(e))return m(e)}function m(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,o=Array(t);n<t;n++)o[n]=e[n];return o}var x={name:"DockSub",hostName:"Dock",extends:L,emits:["focus","blur"],props:{position:{type:String,default:"bottom"},model:{type:Array,default:null},templates:{type:null,default:null},tooltipOptions:null,menuId:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},data:function(){return{currentIndex:-3,focused:!1,focusedOptionIndex:-1}},methods:{getItemId:function(t){return"".concat(this.idx,"_").concat(t)},getItemProp:function(t,n){return t&&t.item?A(t.item[n]):void 0},getPTOptions:function(t,n,o){return this.ptm(t,{context:{index:o,item:n,active:this.isItemActive(this.getItemId(o))}})},isSameMenuItem:function(t){return t.currentTarget&&(t.currentTarget.isSameNode(t.target)||t.currentTarget.isSameNode(t.target.closest('[data-pc-section="item"]')))},isItemActive:function(t){return t===this.focusedOptionIndex},onListMouseLeave:function(){this.currentIndex=-3},onItemMouseEnter:function(t){this.currentIndex=t},onItemClick:function(t,n){if(this.isSameMenuItem(t)){var o=this.getItemProp(n,"command");o&&o({originalEvent:t,item:n.item})}},onListFocus:function(t){this.focused=!0,this.changeFocusedOptionIndex(0),this.$emit("focus",t)},onListBlur:function(t){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",t)},onListKeyDown:function(t){switch(t.code){case"ArrowDown":{(this.position==="left"||this.position==="right")&&this.onArrowDownKey(),t.preventDefault();break}case"ArrowUp":{(this.position==="left"||this.position==="right")&&this.onArrowUpKey(),t.preventDefault();break}case"ArrowRight":{(this.position==="top"||this.position==="bottom")&&this.onArrowDownKey(),t.preventDefault();break}case"ArrowLeft":{(this.position==="top"||this.position==="bottom")&&this.onArrowUpKey(),t.preventDefault();break}case"Home":{this.onHomeKey(),t.preventDefault();break}case"End":{this.onEndKey(),t.preventDefault();break}case"Enter":case"NumpadEnter":case"Space":{this.onSpaceKey(t),t.preventDefault();break}}},onArrowDownKey:function(){var t=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t)},onArrowUpKey:function(){var t=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(t)},onHomeKey:function(){this.changeFocusedOptionIndex(0)},onEndKey:function(){this.changeFocusedOptionIndex(u(this.$refs.list,'li[data-pc-section="item"][data-p-disabled="false"]').length-1)},onSpaceKey:function(){var t=h(this.$refs.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),n=t&&h(t,'[data-pc-section="itemlink"]');n?n.click():t&&t.click()},findNextOptionIndex:function(t){var n=u(this.$refs.list,'li[data-pc-section="item"][data-p-disabled="false"]'),o=I(n).findIndex(function(d){return d.id===t});return o>-1?o+1:0},findPrevOptionIndex:function(t){var n=u(this.$refs.list,'li[data-pc-section="item"][data-p-disabled="false"]'),o=I(n).findIndex(function(d){return d.id===t});return o>-1?o-1:0},changeFocusedOptionIndex:function(t){var n=u(this.$refs.list,'li[data-pc-section="item"][data-p-disabled="false"]'),o=t>=n.length?n.length-1:t<0?0:t;this.focusedOptionIndex=n[o].getAttribute("id")},disabled:function(t){return typeof t.disabled=="function"?t.disabled():t.disabled},getMenuItemProps:function(t,n){return{action:s({tabindex:-1,class:this.cx("itemLink")},this.getPTOptions("itemLink",t,n)),icon:s({class:[this.cx("itemIcon"),t.icon]},this.getPTOptions("itemIcon",t,n))}}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null},idx:function(){return this.menuId||this.$id}},directives:{ripple:T,tooltip:E}},R=["id","aria-orientation","aria-activedescendant","tabindex","aria-label","aria-labelledby"],V=["id","aria-label","aria-disabled","onClick","onMouseenter","data-p-focused","data-p-disabled"],Y=["href","target"];function W(e,t,n,o,d,i){var p=b("ripple"),O=b("tooltip");return l(),c("div",s({class:e.cx("listContainer")},e.ptm("listContainer")),[k("ul",s({ref:"list",id:i.idx,class:e.cx("list"),role:"menu","aria-orientation":n.position==="bottom"||n.position==="top"?"horizontal":"vertical","aria-activedescendant":d.focused?i.focusedOptionId:void 0,tabindex:n.tabindex,"aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,onFocus:t[0]||(t[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:t[1]||(t[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:t[2]||(t[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)}),onMouseleave:t[3]||(t[3]=function(){return i.onListMouseLeave&&i.onListMouseLeave.apply(i,arguments)})},e.ptm("list")),[(l(!0),c(S,null,D(n.model,function(a,r){return l(),c("li",s({key:r,id:i.getItemId(r),class:e.cx("item",{processedItem:a,id:i.getItemId(r)}),role:"menuitem","aria-label":a.label,"aria-disabled":i.disabled(a),onClick:function(f){return i.onItemClick(f,a)},onMouseenter:function(f){return i.onItemMouseEnter(r)}},{ref_for:!0},i.getPTOptions("item",a,r),{"data-p-focused":i.isItemActive(i.getItemId(r)),"data-p-disabled":i.disabled(a)||!1}),[k("div",s({class:e.cx("itemContent")},{ref_for:!0},i.getPTOptions("itemContent",a,r)),[n.templates.item?(l(),g(v(n.templates.item),{key:1,item:a,index:r,label:a.label,props:i.getMenuItemProps(a,r)},null,8,["item","index","label","props"])):y((l(),c("a",s({key:0,href:a.url,class:e.cx("itemLink"),target:a.target,tabindex:"-1"},{ref_for:!0},i.getPTOptions("itemLink",a,r)),[!n.templates.icon&&!n.templates.itemicon?y((l(),c("span",s({key:0,class:[e.cx("itemIcon"),a.icon]},{ref_for:!0},i.getPTOptions("itemIcon",a,r)),null,16)),[[p]]):(l(),g(v(n.templates.icon||n.templates.itemicon),{key:1,item:a,class:K(e.cx("itemIcon"))},null,8,["item","class"]))],16,Y)),[[O,{value:a.label,disabled:!n.tooltipOptions},n.tooltipOptions]])],16)],16,V)}),128))],16,R)],16)}x.render=W;var Z={name:"Dock",extends:z,inheritAttrs:!1,matchMediaListener:null,data:function(){return{query:null,queryMatches:!1}},mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.unbindMatchMediaListener()},methods:{bindMatchMediaListener:function(){var t=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){t.queryMatches=n.matches,t.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}},computed:{containerClass:function(){return[this.class,this.cx("root")]}},components:{DockSub:x}};function G(e,t,n,o,d,i){var p=C("DockSub");return l(),c("div",s({class:i.containerClass,style:e.style},e.ptmi("root")),[P(p,{model:e.model,templates:e.$slots,tooltipOptions:e.tooltipOptions,position:e.position,menuId:e.menuId,"aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,tabindex:e.tabindex,pt:e.pt,unstyled:e.unstyled},null,8,["model","templates","tooltipOptions","position","menuId","aria-label","aria-labelledby","tabindex","pt","unstyled"])],16)}Z.render=G;export{Z as default};
