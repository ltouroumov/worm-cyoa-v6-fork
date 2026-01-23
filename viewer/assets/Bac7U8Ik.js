import{am as x,ac as l,aM as b,bb as T,bc as f,ap as u,aK as w,az as L,y as c,z as d,A as p,$ as v,a0 as P,X as h,a9 as B,a2 as I,Y as K,a3 as g,B as M}from"./CRyIMHD9.js";import{R as C}from"./Yj_2VITT.js";import{s as F}from"./DtRQ--so.js";import"./-v8K-QF4.js";import"./jc0MLXVe.js";var D=`
    .p-tabmenu {
        overflow-x: auto;
    }

    .p-tabmenu-tablist {
        display: flex;
        margin: 0;
        padding: 0;
        list-style-type: none;
        background: dt('tabmenu.tablist.background');
        border-style: solid;
        border-color: dt('tabmenu.tablist.border.color');
        border-width: dt('tabmenu.tablist.border.width');
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
        background: dt('tabmenu.item.background');
        border-style: solid;
        border-width: dt('tabmenu.item.border.width');
        border-color: dt('tabmenu.item.border.color');
        color: dt('tabmenu.item.color');
        padding: dt('tabmenu.item.padding');
        font-weight: dt('tabmenu.item.font.weight');
        transition:
            background dt('tabmenu.transition.duration'),
            border-color dt('tabmenu.transition.duration'),
            color dt('tabmenu.transition.duration'),
            outline-color dt('tabmenu.transition.duration'),
            box-shadow dt('tabmenu.transition.duration');
        margin: dt('tabmenu.item.margin');
        outline-color: transparent;
        gap: dt('tabmenu.item.gap');
    }

    .p-tabmenu-item-link:focus-visible {
        z-index: 1;
        box-shadow: dt('tabmenu.item.focus.ring.shadow');
        outline: dt('tabmenu.item.focus.ring.width') dt('tabmenu.item.focus.ring.style') dt('tabmenu.item.focus.ring.color');
        outline-offset: dt('tabmenu.item.focus.ring.offset');
    }

    .p-tabmenu-item-icon {
        color: dt('tabmenu.item.icon.color');
        transition:
            background dt('tabmenu.transition.duration'),
            border-color dt('tabmenu.transition.duration'),
            color dt('tabmenu.transition.duration'),
            outline-color dt('tabmenu.transition.duration'),
            box-shadow dt('tabmenu.transition.duration');
    }

    .p-tabmenu-item-label {
        line-height: 1;
    }

    .p-tabmenu-item:not(.p-tabmenu-item-active):not(.p-disabled):hover .p-tabmenu-item-link {
        background: dt('tabmenu.item.hover.background');
        border-color: dt('tabmenu.item.hover.border.color');
        color: dt('tabmenu.item.hover.color');
    }

    .p-tabmenu-item:not(.p-tabmenu-item-active):not(.p-disabled):hover .p-tabmenu-item-icon {
        color: dt('tabmenu.item.icon.hover.color');
    }

    .p-tabmenu-item-active .p-tabmenu-item-link {
        background: dt('tabmenu.item.active.background');
        border-color: dt('tabmenu.item.active.border.color');
        color: dt('tabmenu.item.active.color');
    }

    .p-tabmenu-item-active .p-tabmenu-item-icon {
        color: dt('tabmenu.item.icon.active.color');
    }

    .p-tabmenu-active-bar {
        z-index: 1;
        display: block;
        position: absolute;
        bottom: dt('tabmenu.active.bar.bottom');
        height: dt('tabmenu.active.bar.height');
        background: dt('tabmenu.active.bar.background');
        transition: 250ms cubic-bezier(0.35, 0, 0.25, 1);
    }

    .p-tabmenu::-webkit-scrollbar {
        display: none;
    }
`,N={root:"p-tabmenu p-component",tablist:"p-tabmenu-tablist",item:function(e){var t=e.instance,r=e.index,s=e.item;return["p-tabmenu-item",{"p-tabmenu-item-active":t.d_activeIndex===r,"p-disabled":t.disabled(s)}]},itemLink:"p-tabmenu-item-link",itemIcon:"p-tabmenu-item-icon",itemLabel:"p-tabmenu-item-label",activeBar:"p-tabmenu-active-bar"},$=x.extend({name:"tabmenu",style:D,classes:N}),E={name:"BaseTabMenu",extends:F,props:{model:{type:Array,default:null},activeIndex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:$,provide:function(){return{$pcTabMenu:this,$parentInstance:this}}},S={name:"TabMenu",extends:E,inheritAttrs:!1,emits:["update:activeIndex","tab-change"],data:function(){return{d_activeIndex:this.activeIndex}},watch:{activeIndex:{flush:"post",handler:function(e){this.d_activeIndex=e,this.updateInkBar()}}},mounted:function(){var e=this;this.$nextTick(function(){e.updateInkBar()});var t=this.findActiveItem();t&&(t.tabIndex="0")},updated:function(){this.updateInkBar()},methods:{getPTOptions:function(e,t,r){return this.ptm(e,{context:{item:t,index:r}})},onItemClick:function(e,t,r){if(this.disabled(t)){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),r!==this.d_activeIndex&&(this.d_activeIndex=r,this.$emit("update:activeIndex",this.d_activeIndex)),this.$emit("tab-change",{originalEvent:e,index:r})},onKeydownItem:function(e,t,r){switch(e.code){case"ArrowRight":{this.navigateToNextItem(e.target),e.preventDefault();break}case"ArrowLeft":{this.navigateToPrevItem(e.target),e.preventDefault();break}case"Home":{this.navigateToFirstItem(e.target),e.preventDefault();break}case"End":{this.navigateToLastItem(e.target),e.preventDefault();break}case"Space":case"NumpadEnter":case"Enter":{this.onItemClick(e,t,r),e.preventDefault();break}case"Tab":{this.onTabKey();break}}},navigateToNextItem:function(e){var t=this.findNextItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToPrevItem:function(e){var t=this.findPrevItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToFirstItem:function(e){var t=this.findFirstItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToLastItem:function(e){var t=this.findLastItem(e);t&&this.setFocusToMenuitem(e,t)},findNextItem:function(e){var t=e.parentElement.nextElementSibling;return t?b(t,"data-p-disabled")===!0?this.findNextItem(t.children[0]):t.children[0]:null},findPrevItem:function(e){var t=e.parentElement.previousElementSibling;return t?b(t,"data-p-disabled")===!0?this.findPrevItem(t.children[0]):t.children[0]:null},findFirstItem:function(){var e=u(this.$refs.nav,'[data-pc-section="item"][data-p-disabled="false"]');return e?e.children[0]:null},findLastItem:function(){var e=w(this.$refs.nav,'[data-pc-section="item"][data-p-disabled="false"]');return e?e[e.length-1].children[0]:null},findActiveItem:function(){var e=u(this.$refs.nav,'[data-pc-section="item"][data-p-disabled="false"][data-p-active="true"]');return e?e.children[0]:null},setFocusToMenuitem:function(e,t){e.tabIndex="-1",t.tabIndex="0",t.focus()},onTabKey:function(){var e=u(this.$refs.nav,'[data-pc-section="item"][data-p-disabled="false"][data-p-active="true"]'),t=u(this.$refs.nav,'[data-pc-section="itemlink"][tabindex="0"]');t!==e.children[0]&&(e&&(e.children[0].tabIndex="0"),t.tabIndex="-1")},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled===!0},label:function(e){return typeof e.label=="function"?e.label():e.label},updateInkBar:function(){for(var e=this.$refs.nav.children,t=!1,r=0;r<e.length;r++){var s=e[r];b(s,"data-p-active")&&(this.$refs.inkbar.style.width=T(s)+"px",this.$refs.inkbar.style.left=f(s).left-f(this.$refs.nav).left+"px",t=!0)}t||(this.$refs.inkbar.style.width="0px",this.$refs.inkbar.style.left="0px")},getMenuItemProps:function(e,t){var r=this;return{action:l({class:this.cx("itemLink"),tabindex:-1,onClick:function(i){return r.onItemClick(i,e,t)},onKeyDown:function(i){return r.onKeydownItem(i,e,t)}},this.getPTOptions("itemLink",e,t)),icon:l({class:[this.cx("itemIcon"),e.icon]},this.getPTOptions("itemIcon",e,t)),label:l({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",e,t))}}},directives:{ripple:C}},O=["aria-labelledby","aria-label"],A=["onClick","onKeydown","data-p-active","data-p-disabled"],_=["href","target","aria-label","aria-disabled"];function z(n,e,t,r,s,i){var k=L("ripple");return d(),c("div",l({class:n.cx("root")},n.ptmi("root")),[p("ul",l({ref:"nav",class:n.cx("tablist"),role:"menubar","aria-labelledby":n.ariaLabelledby,"aria-label":n.ariaLabel},n.ptm("tablist")),[(d(!0),c(v,null,P(n.model,function(a,o){return d(),c(v,{key:i.label(a)+"_"+o.toString()},[i.visible(a)?(d(),c("li",l({key:0,ref_for:!0,ref:"tab",class:[n.cx("item",{item:a,index:o}),a.class],role:"presentation",onClick:function(m){return i.onItemClick(m,a,o)},onKeydown:function(m){return i.onKeydownItem(m,a,o)}},{ref_for:!0},i.getPTOptions("item",a,o),{"data-p-active":s.d_activeIndex===o,"data-p-disabled":i.disabled(a)}),[n.$slots.item?(d(),I(g(n.$slots.item),{key:1,item:a,index:o,active:o===s.d_activeIndex,label:i.label(a),props:i.getMenuItemProps(a,o)},null,8,["item","index","active","label","props"])):B((d(),c("a",l({key:0,ref_for:!0,ref:"tabLink",role:"menuitem",href:a.url,class:n.cx("itemLink"),target:a.target,"aria-label":i.label(a),"aria-disabled":i.disabled(a),tabindex:-1},{ref_for:!0},i.getPTOptions("itemLink",a,o)),[n.$slots.itemicon?(d(),I(g(n.$slots.itemicon),{key:0,item:a,class:K(n.cx("itemIcon"))},null,8,["item","class"])):a.icon?(d(),c("span",l({key:1,class:[n.cx("itemIcon"),a.icon]},{ref_for:!0},i.getPTOptions("itemIcon",a,o)),null,16)):h("",!0),p("span",l({class:n.cx("itemLabel")},{ref_for:!0},i.getPTOptions("itemLabel",a,o)),M(i.label(a)),17)],16,_)),[[k]])],16,A)):h("",!0)],64)}),128)),p("li",l({ref:"inkbar",role:"none",class:n.cx("activeBar")},n.ptm("activeBar")),null,16)],16,O)],16)}S.render=z;export{S as default};
