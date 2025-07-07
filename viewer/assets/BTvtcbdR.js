import{s as L}from"./CA5aLBJS.js";import{af as w,av as s,aF as u,ai as h,aZ as A,as as b,t as c,v as d,x as k,Z as S,$ as D,a9 as y,a1 as g,W as K,a2 as v,g as C,z as P}from"./DEES2_7q.js";import{R as T}from"./B84Qp10k.js";import{T as E}from"./BOH-7jSC.js";import"./CRF9Kq3B.js";import"./DmfvTtO6.js";import"./DGEOgZpe.js";import"./0cVxvwXm.js";var F=({dt:t})=>`
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
    background: ${t("dock.background")};
    border: 1px solid ${t("dock.border.color")};
    padding: ${t("dock.padding")};
    border-radius: ${t("dock.border.radius")};
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
    padding: ${t("dock.item.padding")};
    border-radius: ${t("dock.item.border.radius")};
}

.p-dock-item.p-focus {
    box-shadow: ${t("dock.item.focus.ring.shadow")};
    outline: ${t("dock.item.focus.ring.width")} ${t("dock.item.focus.ring.style")} ${t("dock.item.focus.ring.color")};
    outline-offset: ${t("dock.item.focus.ring.offset")};
}

.p-dock-item-link {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    cursor: default;
    width: ${t("dock.item.size")};
    height: ${t("dock.item.size")};
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
`,B={root:function(e){var n=e.instance,o=e.props;return["p-dock p-component","p-dock-".concat(o.position),{"p-dock-mobile":n.queryMatches}]},listContainer:"p-dock-list-container",list:"p-dock-list",item:function(e){var n=e.instance,o=e.processedItem,l=e.id;return["p-dock-item",{"p-focus":n.isItemActive(l),"p-disabled":n.disabled(o)}]},itemContent:"p-dock-item-content",itemLink:"p-dock-item-link",itemIcon:"p-dock-item-icon"},N=w.extend({name:"dock",style:F,classes:B}),U={name:"BaseDock",extends:L,props:{position:{type:String,default:"bottom"},model:null,class:null,style:null,tooltipOptions:null,menuId:{type:String,default:null},tabindex:{type:Number,default:0},breakpoint:{type:String,default:"960px"},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},style:N,provide:function(){return{$pcDock:this,$parentInstance:this}}};function I(t){return H(t)||j(t)||q(t)||z()}function z(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function q(t,e){if(t){if(typeof t=="string")return m(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?m(t,e):void 0}}function j(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function H(t){if(Array.isArray(t))return m(t)}function m(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}var x={name:"DockSub",hostName:"Dock",extends:L,emits:["focus","blur"],props:{position:{type:String,default:"bottom"},model:{type:Array,default:null},templates:{type:null,default:null},tooltipOptions:null,menuId:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabel:{type:String,default:null},ariaLabelledby:{type:String,default:null}},data:function(){return{currentIndex:-3,focused:!1,focusedOptionIndex:-1}},methods:{getItemId:function(e){return"".concat(this.idx,"_").concat(e)},getItemProp:function(e,n){return e&&e.item?A(e.item[n]):void 0},getPTOptions:function(e,n,o){return this.ptm(e,{context:{index:o,item:n,active:this.isItemActive(this.getItemId(o))}})},isSameMenuItem:function(e){return e.currentTarget&&(e.currentTarget.isSameNode(e.target)||e.currentTarget.isSameNode(e.target.closest('[data-pc-section="item"]')))},isItemActive:function(e){return e===this.focusedOptionIndex},onListMouseLeave:function(){this.currentIndex=-3},onItemMouseEnter:function(e){this.currentIndex=e},onItemClick:function(e,n){if(this.isSameMenuItem(e)){var o=this.getItemProp(n,"command");o&&o({originalEvent:e,item:n.item})}},onListFocus:function(e){this.focused=!0,this.changeFocusedOptionIndex(0),this.$emit("focus",e)},onListBlur:function(e){this.focused=!1,this.focusedOptionIndex=-1,this.$emit("blur",e)},onListKeyDown:function(e){switch(e.code){case"ArrowDown":{(this.position==="left"||this.position==="right")&&this.onArrowDownKey(),e.preventDefault();break}case"ArrowUp":{(this.position==="left"||this.position==="right")&&this.onArrowUpKey(),e.preventDefault();break}case"ArrowRight":{(this.position==="top"||this.position==="bottom")&&this.onArrowDownKey(),e.preventDefault();break}case"ArrowLeft":{(this.position==="top"||this.position==="bottom")&&this.onArrowUpKey(),e.preventDefault();break}case"Home":{this.onHomeKey(),e.preventDefault();break}case"End":{this.onEndKey(),e.preventDefault();break}case"Enter":case"NumpadEnter":case"Space":{this.onSpaceKey(e),e.preventDefault();break}}},onArrowDownKey:function(){var e=this.findNextOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e)},onArrowUpKey:function(){var e=this.findPrevOptionIndex(this.focusedOptionIndex);this.changeFocusedOptionIndex(e)},onHomeKey:function(){this.changeFocusedOptionIndex(0)},onEndKey:function(){this.changeFocusedOptionIndex(u(this.$refs.list,'li[data-pc-section="item"][data-p-disabled="false"]').length-1)},onSpaceKey:function(){var e=h(this.$refs.list,'li[id="'.concat("".concat(this.focusedOptionIndex),'"]')),n=e&&h(e,'[data-pc-section="itemlink"]');n?n.click():e&&e.click()},findNextOptionIndex:function(e){var n=u(this.$refs.list,'li[data-pc-section="item"][data-p-disabled="false"]'),o=I(n).findIndex(function(l){return l.id===e});return o>-1?o+1:0},findPrevOptionIndex:function(e){var n=u(this.$refs.list,'li[data-pc-section="item"][data-p-disabled="false"]'),o=I(n).findIndex(function(l){return l.id===e});return o>-1?o-1:0},changeFocusedOptionIndex:function(e){var n=u(this.$refs.list,'li[data-pc-section="item"][data-p-disabled="false"]'),o=e>=n.length?n.length-1:e<0?0:e;this.focusedOptionIndex=n[o].getAttribute("id")},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},getMenuItemProps:function(e,n){return{action:s({tabindex:-1,class:this.cx("itemLink")},this.getPTOptions("itemLink",e,n)),icon:s({class:[this.cx("itemIcon"),e.icon]},this.getPTOptions("itemIcon",e,n))}}},computed:{focusedOptionId:function(){return this.focusedOptionIndex!==-1?this.focusedOptionIndex:null},idx:function(){return this.menuId||this.$id}},directives:{ripple:T,tooltip:E}},R=["id","aria-orientation","aria-activedescendant","tabindex","aria-label","aria-labelledby"],V=["id","aria-label","aria-disabled","onClick","onMouseenter","data-p-focused","data-p-disabled"],W=["href","target"];function Z(t,e,n,o,l,i){var p=b("ripple"),O=b("tooltip");return d(),c("div",s({class:t.cx("listContainer")},t.ptm("listContainer")),[k("ul",s({ref:"list",id:i.idx,class:t.cx("list"),role:"menu","aria-orientation":n.position==="bottom"||n.position==="top"?"horizontal":"vertical","aria-activedescendant":l.focused?i.focusedOptionId:void 0,tabindex:n.tabindex,"aria-label":n.ariaLabel,"aria-labelledby":n.ariaLabelledby,onFocus:e[0]||(e[0]=function(){return i.onListFocus&&i.onListFocus.apply(i,arguments)}),onBlur:e[1]||(e[1]=function(){return i.onListBlur&&i.onListBlur.apply(i,arguments)}),onKeydown:e[2]||(e[2]=function(){return i.onListKeyDown&&i.onListKeyDown.apply(i,arguments)}),onMouseleave:e[3]||(e[3]=function(){return i.onListMouseLeave&&i.onListMouseLeave.apply(i,arguments)})},t.ptm("list")),[(d(!0),c(S,null,D(n.model,function(a,r){return d(),c("li",s({key:r,id:i.getItemId(r),class:t.cx("item",{processedItem:a,id:i.getItemId(r)}),role:"menuitem","aria-label":a.label,"aria-disabled":i.disabled(a),onClick:function(f){return i.onItemClick(f,a)},onMouseenter:function(f){return i.onItemMouseEnter(r)},ref_for:!0},i.getPTOptions("item",a,r),{"data-p-focused":i.isItemActive(i.getItemId(r)),"data-p-disabled":i.disabled(a)||!1}),[k("div",s({class:t.cx("itemContent"),ref_for:!0},i.getPTOptions("itemContent",a,r)),[n.templates.item?(d(),g(v(n.templates.item),{key:1,item:a,index:r,label:a.label,props:i.getMenuItemProps(a,r)},null,8,["item","index","label","props"])):y((d(),c("a",s({key:0,href:a.url,class:t.cx("itemLink"),target:a.target,tabindex:"-1",ref_for:!0},i.getPTOptions("itemLink",a,r)),[!n.templates.icon&&!n.templates.itemicon?y((d(),c("span",s({key:0,class:[t.cx("itemIcon"),a.icon],ref_for:!0},i.getPTOptions("itemIcon",a,r)),null,16)),[[p]]):(d(),g(v(n.templates.icon||n.templates.itemicon),{key:1,item:a,class:K(t.cx("itemIcon"))},null,8,["item","class"]))],16,W)),[[O,{value:a.label,disabled:!n.tooltipOptions},n.tooltipOptions]])],16)],16,V)}),128))],16,R)],16)}x.render=Z;var G={name:"Dock",extends:U,inheritAttrs:!1,matchMediaListener:null,data:function(){return{query:null,queryMatches:!1}},mounted:function(){this.bindMatchMediaListener()},beforeUnmount:function(){this.unbindMatchMediaListener()},methods:{bindMatchMediaListener:function(){var e=this;if(!this.matchMediaListener){var n=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=n,this.queryMatches=n.matches,this.matchMediaListener=function(){e.queryMatches=n.matches,e.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)}},computed:{containerClass:function(){return[this.class,this.cx("root")]}},components:{DockSub:x}};function J(t,e,n,o,l,i){var p=C("DockSub");return d(),c("div",s({class:i.containerClass,style:t.style},t.ptmi("root")),[P(p,{model:t.model,templates:t.$slots,tooltipOptions:t.tooltipOptions,position:t.position,menuId:t.menuId,"aria-label":t.ariaLabel,"aria-labelledby":t.ariaLabelledby,tabindex:t.tabindex,pt:t.pt,unstyled:t.unstyled},null,8,["model","templates","tooltipOptions","position","menuId","aria-label","aria-labelledby","tabindex","pt","unstyled"])],16)}G.render=J;export{G as default};
