import{am as v,ac as o,aK as h,ap as g,y as c,z as p,A as m,$ as u,a0 as I,X as y,a2 as k,B as f,a3 as w}from"./CRyIMHD9.js";import{s as T}from"./DtRQ--so.js";var S=`
    .p-steps {
        position: relative;
    }

    .p-steps-list {
        padding: 0;
        margin: 0;
        list-style-type: none;
        display: flex;
    }

    .p-steps-item {
        position: relative;
        display: flex;
        justify-content: center;
        flex: 1 1 auto;
    }

    .p-steps-item.p-disabled,
    .p-steps-item.p-disabled * {
        opacity: 1;
        pointer-events: auto;
        user-select: auto;
        cursor: auto;
    }

    .p-steps-item:before {
        content: ' ';
        border-top: 2px solid dt('steps.separator.background');
        width: 100%;
        top: 50%;
        left: 0;
        display: block;
        position: absolute;
        margin-top: calc(-1rem + 1px);
    }

    .p-steps-item:first-child::before {
        width: calc(50% + 1rem);
        transform: translateX(100%);
    }

    .p-steps-item:last-child::before {
        width: 50%;
    }

    .p-steps-item-link {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        overflow: hidden;
        text-decoration: none;
        transition:
            outline-color dt('steps.transition.duration'),
            box-shadow dt('steps.transition.duration');
        border-radius: dt('steps.item.link.border.radius');
        outline-color: transparent;
        gap: dt('steps.item.link.gap');
    }

    .p-steps-item-link:not(.p-disabled):focus-visible {
        box-shadow: dt('steps.item.link.focus.ring.shadow');
        outline: dt('steps.item.link.focus.ring.width') dt('steps.item.link.focus.ring.style') dt('steps.item.link.focus.ring.color');
        outline-offset: dt('steps.item.link.focus.ring.offset');
    }

    .p-steps-item-label {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100%;
        color: dt('steps.item.label.color');
        display: block;
        font-weight: dt('steps.item.label.font.weight');
    }

    .p-steps-item-number {
        display: flex;
        align-items: center;
        justify-content: center;
        color: dt('steps.item.number.color');
        border: 2px solid dt('steps.item.number.border.color');
        background: dt('steps.item.number.background');
        min-width: dt('steps.item.number.size');
        height: dt('steps.item.number.size');
        line-height: dt('steps.item.number.size');
        font-size: dt('steps.item.number.font.size');
        z-index: 1;
        border-radius: dt('steps.item.number.border.radius');
        position: relative;
        font-weight: dt('steps.item.number.font.weight');
    }

    .p-steps-item-number::after {
        content: ' ';
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: dt('steps.item.number.border.radius');
        box-shadow: dt('steps.item.number.shadow');
    }

    .p-steps:not(.p-readonly) .p-steps-item {
        cursor: pointer;
    }

    .p-steps-item-active .p-steps-item-number {
        background: dt('steps.item.number.active.background');
        border-color: dt('steps.item.number.active.border.color');
        color: dt('steps.item.number.active.color');
    }

    .p-steps-item-active .p-steps-item-label {
        color: dt('steps.item.label.active.color');
    }
`,P={root:function(e){var t=e.props;return["p-steps p-component",{"p-readonly":t.readonly}]},list:"p-steps-list",item:function(e){var t=e.instance,r=e.item,l=e.index;return["p-steps-item",{"p-steps-item-active":t.isActive(l),"p-disabled":t.isItemDisabled(r,l)}]},itemLink:"p-steps-item-link",itemNumber:"p-steps-item-number",itemLabel:"p-steps-item-label"},x=v.extend({name:"steps",style:S,classes:P}),L={name:"BaseSteps",extends:T,props:{id:{type:String},model:{type:Array,default:null},readonly:{type:Boolean,default:!0},activeStep:{type:Number,default:0}},style:x,provide:function(){return{$pcSteps:this,$parentInstance:this}}},D={name:"Steps",extends:L,inheritAttrs:!1,emits:["update:activeStep","step-change"],data:function(){return{d_activeStep:this.activeStep}},watch:{activeStep:function(e){this.d_activeStep=e}},mounted:function(){var e=this.findFirstItem();e&&(e.tabIndex="0")},methods:{getPTOptions:function(e,t,r){return this.ptm(e,{context:{item:t,index:r,active:this.isActive(r),disabled:this.isItemDisabled(t,r)}})},onItemClick:function(e,t,r){if(this.disabled(t)||this.readonly){e.preventDefault();return}t.command&&t.command({originalEvent:e,item:t}),r!==this.d_activeStep&&(this.d_activeStep=r,this.$emit("update:activeStep",this.d_activeStep)),this.$emit("step-change",{originalEvent:e,index:r})},onItemKeydown:function(e,t){switch(e.code){case"ArrowRight":{this.navigateToNextItem(e.target),e.preventDefault();break}case"ArrowLeft":{this.navigateToPrevItem(e.target),e.preventDefault();break}case"Home":{this.navigateToFirstItem(e.target),e.preventDefault();break}case"End":{this.navigateToLastItem(e.target),e.preventDefault();break}case"Tab":break;case"Enter":case"NumpadEnter":case"Space":{this.onItemClick(e,t),e.preventDefault();break}}},navigateToNextItem:function(e){var t=this.findNextItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToPrevItem:function(e){var t=this.findPrevItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToFirstItem:function(e){var t=this.findFirstItem(e);t&&this.setFocusToMenuitem(e,t)},navigateToLastItem:function(e){var t=this.findLastItem(e);t&&this.setFocusToMenuitem(e,t)},findNextItem:function(e){var t=e.parentElement.nextElementSibling;return t?t.children[0]:null},findPrevItem:function(e){var t=e.parentElement.previousElementSibling;return t?t.children[0]:null},findFirstItem:function(){var e=g(this.$refs.list,'[data-pc-section="item"]');return e?e.children[0]:null},findLastItem:function(){var e=h(this.$refs.list,'[data-pc-section="item"]');return e?e[e.length-1].children[0]:null},setFocusToMenuitem:function(e,t){e.tabIndex="-1",t.tabIndex="0",t.focus()},isActive:function(e){return e===this.d_activeStep},isItemDisabled:function(e,t){return this.disabled(e)||this.readonly&&!this.isActive(t)},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label:function(e){return typeof e.label=="function"?e.label():e.label},getMenuItemProps:function(e,t){var r=this;return{action:o({class:this.cx("itemLink"),onClick:function(i){return r.onItemClick(i,e)},onKeyDown:function(i){return r.onItemKeydown(i,e)}},this.getPTOptions("itemLink",e,t)),step:o({class:this.cx("itemNumber")},this.getPTOptions("itemNumber",e,t)),label:o({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",e,t))}}}},N=["id"],F=["aria-current","onClick","onKeydown","data-p-active","data-p-disabled"];function A(n,e,t,r,l,i){return p(),c("nav",o({id:n.id,class:n.cx("root")},n.ptmi("root")),[m("ol",o({ref:"list",class:n.cx("list")},n.ptm("list")),[(p(!0),c(u,null,I(n.model,function(s,a){return p(),c(u,{key:i.label(s)+"_"+a.toString()},[i.visible(s)?(p(),c("li",o({key:0,class:[n.cx("item",{item:s,index:a}),s.class],style:s.style,"aria-current":i.isActive(a)?"step":void 0,onClick:function(d){return i.onItemClick(d,s,a)},onKeydown:function(d){return i.onItemKeydown(d,s,a)}},{ref_for:!0},i.getPTOptions("item",s,a),{"data-p-active":i.isActive(a),"data-p-disabled":i.isItemDisabled(s,a)}),[n.$slots.item?(p(),k(w(n.$slots.item),{key:1,item:s,index:a,active:a===l.d_activeStep,label:i.label(s),props:i.getMenuItemProps(s,a)},null,8,["item","index","active","label","props"])):(p(),c("span",o({key:0,class:n.cx("itemLink")},{ref_for:!0},i.getPTOptions("itemLink",s,a)),[m("span",o({class:n.cx("itemNumber")},{ref_for:!0},i.getPTOptions("itemNumber",s,a)),f(a+1),17),m("span",o({class:n.cx("itemLabel")},{ref_for:!0},i.getPTOptions("itemLabel",s,a)),f(i.label(s)),17)],16))],16,F)):y("",!0)],64)}),128))],16)],16,N)}D.render=A;export{D as default};
