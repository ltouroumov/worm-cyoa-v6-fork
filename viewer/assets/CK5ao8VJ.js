import{af as $,av as l,aH as b,bc as x,aT as f,ai as u,aF as T,as as w,t as c,v as d,x as p,Z as v,$ as L,X as h,a9 as P,a1 as g,W as B,a2 as I,y as F}from"./BZwby5eq.js";import{R as C}from"./Bo6d7Niz.js";import{s as M}from"./CcoDSO_5.js";import"./DRVuadwS.js";import"./DmfvTtO6.js";var D=({dt:e})=>`
.p-tabmenu {
    overflow-x: auto;
}

.p-tabmenu-tablist {
    display: flex;
    margin: 0;
    padding: 0;
    list-style-type: none;
    background: ${e("tabmenu.tablist.background")};
    border-style: solid;
    border-color: ${e("tabmenu.tablist.border.color")};
    border-width: ${e("tabmenu.tablist.border.width")};
    position: relative;
}

.p-tabmenu-item-link {
    cursor: pointer;
    user-select: none;
    display: flex;
    align-items: center;
    text-decoration: none;
    position: relative;
    overflow: hidden;
    background: ${e("tabmenu.item.background")};
    border-style: solid;
    border-width: ${e("tabmenu.item.border.width")};
    border-color: ${e("tabmenu.item.border.color")};
    color: ${e("tabmenu.item.color")};
    padding: ${e("tabmenu.item.padding")};
    font-weight: ${e("tabmenu.item.font.weight")};
    transition: background ${e("tabmenu.transition.duration")}, border-color ${e("tabmenu.transition.duration")}, color ${e("tabmenu.transition.duration")}, outline-color ${e("tabmenu.transition.duration")}, box-shadow ${e("tabmenu.transition.duration")};
    margin: ${e("tabmenu.item.margin")};
    outline-color: transparent;
    gap: ${e("tabmenu.item.gap")};
}

.p-tabmenu-item-link:focus-visible {
    z-index: 1;
    box-shadow: ${e("tabmenu.item.focus.ring.shadow")};
    outline: ${e("tabmenu.item.focus.ring.width")} ${e("tabmenu.item.focus.ring.style")} ${e("tabmenu.item.focus.ring.color")};
    outline-offset: ${e("tabmenu.item.focus.ring.offset")};
}

.p-tabmenu-item-icon {
    color: ${e("tabmenu.item.icon.color")};
    transition: background ${e("tabmenu.transition.duration")}, border-color ${e("tabmenu.transition.duration")}, color ${e("tabmenu.transition.duration")}, outline-color ${e("tabmenu.transition.duration")}, box-shadow ${e("tabmenu.transition.duration")};
}

.p-tabmenu-item-label {
    line-height: 1;
}

.p-tabmenu-item:not(.p-tabmenu-item-active):not(.p-disabled):hover .p-tabmenu-item-link {
    background: ${e("tabmenu.item.hover.background")};
    border-color: ${e("tabmenu.item.hover.border.color")};
    color: ${e("tabmenu.item.hover.color")};
}

.p-tabmenu-item:not(.p-tabmenu-item-active):not(.p-disabled):hover .p-tabmenu-item-icon {
    color: ${e("tabmenu.item.icon.hover.color")};
}

.p-tabmenu-item-active .p-tabmenu-item-link {
    background: ${e("tabmenu.item.active.background")};
    border-color: ${e("tabmenu.item.active.border.color")};
    color: ${e("tabmenu.item.active.color")};
}

.p-tabmenu-item-active .p-tabmenu-item-icon {
    color: ${e("tabmenu.item.icon.active.color")};
}

.p-tabmenu-active-bar {
    z-index: 1;
    display: block;
    position: absolute;
    bottom: ${e("tabmenu.active.bar.bottom")};
    height: ${e("tabmenu.active.bar.height")};
    background: ${e("tabmenu.active.bar.background")};
    transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
}

.p-tabmenu::-webkit-scrollbar {
    display: none;
}
`,K={root:"p-tabmenu p-component",tablist:"p-tabmenu-tablist",item:function(t){var n=t.instance,r=t.index,s=t.item;return["p-tabmenu-item",{"p-tabmenu-item-active":n.d_activeIndex===r,"p-disabled":n.disabled(s)}]},itemLink:"p-tabmenu-item-link",itemIcon:"p-tabmenu-item-icon",itemLabel:"p-tabmenu-item-label",activeBar:"p-tabmenu-active-bar"},N=$.extend({name:"tabmenu",style:D,classes:K}),S={name:"BaseTabMenu",extends:M,props:{model:{type:Array,default:null},activeIndex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:N,provide:function(){return{$pcTabMenu:this,$parentInstance:this}}},E={name:"TabMenu",extends:S,inheritAttrs:!1,emits:["update:activeIndex","tab-change"],data:function(){return{d_activeIndex:this.activeIndex}},watch:{activeIndex:{flush:"post",handler:function(t){this.d_activeIndex=t,this.updateInkBar()}}},mounted:function(){var t=this;this.$nextTick(function(){t.updateInkBar()});var n=this.findActiveItem();n&&(n.tabIndex="0")},updated:function(){this.updateInkBar()},methods:{getPTOptions:function(t,n,r){return this.ptm(t,{context:{item:n,index:r}})},onItemClick:function(t,n,r){if(this.disabled(n)){t.preventDefault();return}n.command&&n.command({originalEvent:t,item:n}),r!==this.d_activeIndex&&(this.d_activeIndex=r,this.$emit("update:activeIndex",this.d_activeIndex)),this.$emit("tab-change",{originalEvent:t,index:r})},onKeydownItem:function(t,n,r){switch(t.code){case"ArrowRight":{this.navigateToNextItem(t.target),t.preventDefault();break}case"ArrowLeft":{this.navigateToPrevItem(t.target),t.preventDefault();break}case"Home":{this.navigateToFirstItem(t.target),t.preventDefault();break}case"End":{this.navigateToLastItem(t.target),t.preventDefault();break}case"Space":case"NumpadEnter":case"Enter":{this.onItemClick(t,n,r),t.preventDefault();break}case"Tab":{this.onTabKey();break}}},navigateToNextItem:function(t){var n=this.findNextItem(t);n&&this.setFocusToMenuitem(t,n)},navigateToPrevItem:function(t){var n=this.findPrevItem(t);n&&this.setFocusToMenuitem(t,n)},navigateToFirstItem:function(t){var n=this.findFirstItem(t);n&&this.setFocusToMenuitem(t,n)},navigateToLastItem:function(t){var n=this.findLastItem(t);n&&this.setFocusToMenuitem(t,n)},findNextItem:function(t){var n=t.parentElement.nextElementSibling;return n?b(n,"data-p-disabled")===!0?this.findNextItem(n.children[0]):n.children[0]:null},findPrevItem:function(t){var n=t.parentElement.previousElementSibling;return n?b(n,"data-p-disabled")===!0?this.findPrevItem(n.children[0]):n.children[0]:null},findFirstItem:function(){var t=u(this.$refs.nav,'[data-pc-section="item"][data-p-disabled="false"]');return t?t.children[0]:null},findLastItem:function(){var t=T(this.$refs.nav,'[data-pc-section="item"][data-p-disabled="false"]');return t?t[t.length-1].children[0]:null},findActiveItem:function(){var t=u(this.$refs.nav,'[data-pc-section="item"][data-p-disabled="false"][data-p-active="true"]');return t?t.children[0]:null},setFocusToMenuitem:function(t,n){t.tabIndex="-1",n.tabIndex="0",n.focus()},onTabKey:function(){var t=u(this.$refs.nav,'[data-pc-section="item"][data-p-disabled="false"][data-p-active="true"]'),n=u(this.$refs.nav,'[data-pc-section="itemlink"][tabindex="0"]');n!==t.children[0]&&(t&&(t.children[0].tabIndex="0"),n.tabIndex="-1")},visible:function(t){return typeof t.visible=="function"?t.visible():t.visible!==!1},disabled:function(t){return typeof t.disabled=="function"?t.disabled():t.disabled===!0},label:function(t){return typeof t.label=="function"?t.label():t.label},updateInkBar:function(){for(var t=this.$refs.nav.children,n=!1,r=0;r<t.length;r++){var s=t[r];b(s,"data-p-active")&&(this.$refs.inkbar.style.width=x(s)+"px",this.$refs.inkbar.style.left=f(s).left-f(this.$refs.nav).left+"px",n=!0)}n||(this.$refs.inkbar.style.width="0px",this.$refs.inkbar.style.left="0px")},getMenuItemProps:function(t,n){var r=this;return{action:l({class:this.cx("itemLink"),tabindex:-1,onClick:function(i){return r.onItemClick(i,t,n)},onKeyDown:function(i){return r.onKeydownItem(i,t,n)}},this.getPTOptions("itemLink",t,n)),icon:l({class:[this.cx("itemIcon"),t.icon]},this.getPTOptions("itemIcon",t,n)),label:l({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",t,n))}}},directives:{ripple:C}},O=["aria-labelledby","aria-label"],A=["onClick","onKeydown","data-p-active","data-p-disabled"],_=["href","target","aria-label","aria-disabled"];function z(e,t,n,r,s,i){var k=w("ripple");return d(),c("div",l({class:e.cx("root")},e.ptmi("root")),[p("ul",l({ref:"nav",class:e.cx("tablist"),role:"menubar","aria-labelledby":e.ariaLabelledby,"aria-label":e.ariaLabel},e.ptm("tablist")),[(d(!0),c(v,null,L(e.model,function(a,o){return d(),c(v,{key:i.label(a)+"_"+o.toString()},[i.visible(a)?(d(),c("li",l({key:0,ref_for:!0,ref:"tab",class:[e.cx("item",{item:a,index:o}),a.class],role:"presentation",onClick:function(m){return i.onItemClick(m,a,o)},onKeydown:function(m){return i.onKeydownItem(m,a,o)}},i.getPTOptions("item",a,o),{"data-p-active":s.d_activeIndex===o,"data-p-disabled":i.disabled(a)}),[e.$slots.item?(d(),g(I(e.$slots.item),{key:1,item:a,index:o,active:o===s.d_activeIndex,label:i.label(a),props:i.getMenuItemProps(a,o)},null,8,["item","index","active","label","props"])):P((d(),c("a",l({key:0,ref_for:!0,ref:"tabLink",role:"menuitem",href:a.url,class:e.cx("itemLink"),target:a.target,"aria-label":i.label(a),"aria-disabled":i.disabled(a),tabindex:-1},i.getPTOptions("itemLink",a,o)),[e.$slots.itemicon?(d(),g(I(e.$slots.itemicon),{key:0,item:a,class:B(e.cx("itemIcon"))},null,8,["item","class"])):a.icon?(d(),c("span",l({key:1,class:[e.cx("itemIcon"),a.icon],ref_for:!0},i.getPTOptions("itemIcon",a,o)),null,16)):h("",!0),p("span",l({class:e.cx("itemLabel"),ref_for:!0},i.getPTOptions("itemLabel",a,o)),F(i.label(a)),17)],16,_)),[[k]])],16,A)):h("",!0)],64)}),128)),p("li",l({ref:"inkbar",role:"none",class:e.cx("activeBar")},e.ptm("activeBar")),null,16)],16,O)],16)}E.render=z;export{E as default};
