import{af as v,av as o,aF as h,ai as g,t as c,v as p,x as u,Z as d,$ as I,X as y,a1 as k,y as f,a2 as w}from"./BJ_rnWsM.js";import{s as T}from"./A8AViyYJ.js";var S=({dt:t})=>`
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
    content: " ";
    border-top: 2px solid ${t("steps.separator.background")};
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
    transition: outline-color ${t("steps.transition.duration")}, box-shadow ${t("steps.transition.duration")};
    border-radius: ${t("steps.item.link.border.radius")};
    outline-color: transparent;
    gap: ${t("steps.item.link.gap")};
}

.p-steps-item-link:not(.p-disabled):focus-visible {
    box-shadow: ${t("steps.item.link.focus.ring.shadow")};
    outline: ${t("steps.item.link.focus.ring.width")} ${t("steps.item.link.focus.ring.style")} ${t("steps.item.link.focus.ring.color")};
    outline-offset: ${t("steps.item.link.focus.ring.offset")};
}

.p-steps-item-label {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
    color: ${t("steps.item.label.color")};
    display: block;
    font-weight: ${t("steps.item.label.font.weight")};
}

.p-steps-item-number {
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${t("steps.item.number.color")};
    border: 2px solid ${t("steps.item.number.border.color")};
    background: ${t("steps.item.number.background")};
    min-width: ${t("steps.item.number.size")};
    height: ${t("steps.item.number.size")};
    line-height: ${t("steps.item.number.size")};
    font-size: ${t("steps.item.number.font.size")};
    z-index: 1;
    border-radius: ${t("steps.item.number.border.radius")};
    position: relative;
    font-weight: ${t("steps.item.number.font.weight")};
}

.p-steps-item-number::after {
    content: " ";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${t("steps.item.number.border.radius")};
    box-shadow: ${t("steps.item.number.shadow")};
}

.p-steps:not(.p-readonly) .p-steps-item {
    cursor: pointer;
}

.p-steps-item-active .p-steps-item-number {
    background: ${t("steps.item.number.active.background")};
    border-color: ${t("steps.item.number.active.border.color")};
    color: ${t("steps.item.number.active.color")};
}

.p-steps-item-active .p-steps-item-label {
    color: ${t("steps.item.label.active.color")};
}
`,$={root:function(e){var n=e.props;return["p-steps p-component",{"p-readonly":n.readonly}]},list:"p-steps-list",item:function(e){var n=e.instance,r=e.item,l=e.index;return["p-steps-item",{"p-steps-item-active":n.isActive(l),"p-disabled":n.isItemDisabled(r,l)}]},itemLink:"p-steps-item-link",itemNumber:"p-steps-item-number",itemLabel:"p-steps-item-label"},x=v.extend({name:"steps",style:S,classes:$}),P={name:"BaseSteps",extends:T,props:{id:{type:String},model:{type:Array,default:null},readonly:{type:Boolean,default:!0},activeStep:{type:Number,default:0}},style:x,provide:function(){return{$pcSteps:this,$parentInstance:this}}},L={name:"Steps",extends:P,inheritAttrs:!1,emits:["update:activeStep","step-change"],data:function(){return{d_activeStep:this.activeStep}},watch:{activeStep:function(e){this.d_activeStep=e}},mounted:function(){var e=this.findFirstItem();e&&(e.tabIndex="0")},methods:{getPTOptions:function(e,n,r){return this.ptm(e,{context:{item:n,index:r,active:this.isActive(r),disabled:this.isItemDisabled(n,r)}})},onItemClick:function(e,n,r){if(this.disabled(n)||this.readonly){e.preventDefault();return}n.command&&n.command({originalEvent:e,item:n}),r!==this.d_activeStep&&(this.d_activeStep=r,this.$emit("update:activeStep",this.d_activeStep)),this.$emit("step-change",{originalEvent:e,index:r})},onItemKeydown:function(e,n){switch(e.code){case"ArrowRight":{this.navigateToNextItem(e.target),e.preventDefault();break}case"ArrowLeft":{this.navigateToPrevItem(e.target),e.preventDefault();break}case"Home":{this.navigateToFirstItem(e.target),e.preventDefault();break}case"End":{this.navigateToLastItem(e.target),e.preventDefault();break}case"Tab":break;case"Enter":case"NumpadEnter":case"Space":{this.onItemClick(e,n),e.preventDefault();break}}},navigateToNextItem:function(e){var n=this.findNextItem(e);n&&this.setFocusToMenuitem(e,n)},navigateToPrevItem:function(e){var n=this.findPrevItem(e);n&&this.setFocusToMenuitem(e,n)},navigateToFirstItem:function(e){var n=this.findFirstItem(e);n&&this.setFocusToMenuitem(e,n)},navigateToLastItem:function(e){var n=this.findLastItem(e);n&&this.setFocusToMenuitem(e,n)},findNextItem:function(e){var n=e.parentElement.nextElementSibling;return n?n.children[0]:null},findPrevItem:function(e){var n=e.parentElement.previousElementSibling;return n?n.children[0]:null},findFirstItem:function(){var e=g(this.$refs.list,'[data-pc-section="item"]');return e?e.children[0]:null},findLastItem:function(){var e=h(this.$refs.list,'[data-pc-section="item"]');return e?e[e.length-1].children[0]:null},setFocusToMenuitem:function(e,n){e.tabIndex="-1",n.tabIndex="0",n.focus()},isActive:function(e){return e===this.d_activeStep},isItemDisabled:function(e,n){return this.disabled(e)||this.readonly&&!this.isActive(n)},visible:function(e){return typeof e.visible=="function"?e.visible():e.visible!==!1},disabled:function(e){return typeof e.disabled=="function"?e.disabled():e.disabled},label:function(e){return typeof e.label=="function"?e.label():e.label},getMenuItemProps:function(e,n){var r=this;return{action:o({class:this.cx("itemLink"),onClick:function(i){return r.onItemClick(i,e)},onKeyDown:function(i){return r.onItemKeydown(i,e)}},this.getPTOptions("itemLink",e,n)),step:o({class:this.cx("itemNumber")},this.getPTOptions("itemNumber",e,n)),label:o({class:this.cx("itemLabel")},this.getPTOptions("itemLabel",e,n))}}}},D=["id"],F=["aria-current","onClick","onKeydown","data-p-active","data-p-disabled"];function N(t,e,n,r,l,i){return p(),c("nav",o({id:t.id,class:t.cx("root")},t.ptmi("root")),[u("ol",o({ref:"list",class:t.cx("list")},t.ptm("list")),[(p(!0),c(d,null,I(t.model,function(s,a){return p(),c(d,{key:i.label(s)+"_"+a.toString()},[i.visible(s)?(p(),c("li",o({key:0,class:[t.cx("item",{item:s,index:a}),s.class],style:s.style,"aria-current":i.isActive(a)?"step":void 0,onClick:function(m){return i.onItemClick(m,s,a)},onKeydown:function(m){return i.onItemKeydown(m,s,a)},ref_for:!0},i.getPTOptions("item",s,a),{"data-p-active":i.isActive(a),"data-p-disabled":i.isItemDisabled(s,a)}),[t.$slots.item?(p(),k(w(t.$slots.item),{key:1,item:s,index:a,active:a===l.d_activeStep,label:i.label(s),props:i.getMenuItemProps(s,a)},null,8,["item","index","active","label","props"])):(p(),c("span",o({key:0,class:t.cx("itemLink"),ref_for:!0},i.getPTOptions("itemLink",s,a)),[u("span",o({class:t.cx("itemNumber"),ref_for:!0},i.getPTOptions("itemNumber",s,a)),f(a+1),17),u("span",o({class:t.cx("itemLabel"),ref_for:!0},i.getPTOptions("itemLabel",s,a)),f(i.label(s)),17)],16))],16,F)):y("",!0)],64)}),128))],16)],16,D)}L.render=N;export{L as default};
