import{af as H,ag as f,ai as N,aq as $,ak as j,ah as T,al as q,am as U,an as W,ao as Z,ap as X,aj as P,ay as J,ar as y,az as Q,g as k,as as Y,t as v,v as d,Z as _,$ as ee,av as l,a9 as ne,a1 as O,X as x,a2 as V,y as K,W as I,x as g,at as m,z as G,B as te,A as F,aw as ie}from"./BJ_rnWsM.js";import{Z as E}from"./DGEOgZpe.js";import{C as oe}from"./DPyv4_Uw.js";import{s as R}from"./BeRUHc8L.js";import{s as se}from"./DUlYJomC.js";import{s as ae}from"./BSBFk0M8.js";import{s as re}from"./Cp4vDl1y.js";import{O as le}from"./DXy7lZUH.js";import{s as ce}from"./D8X2o2Df.js";import{s as de}from"./F_-wkkPL.js";import{s as ue}from"./A8AViyYJ.js";import{R as pe}from"./DsvhQ1oI.js";import"./Dka6TfxS.js";import"./BlL-BYkC.js";import"./CxD9S56h.js";import"./DmfvTtO6.js";var he=({dt:e})=>`
.p-cascadeselect {
    display: inline-flex;
    cursor: pointer;
    position: relative;
    user-select: none;
    background: ${e("cascadeselect.background")};
    border: 1px solid ${e("cascadeselect.border.color")};
    transition: background ${e("cascadeselect.transition.duration")}, color ${e("cascadeselect.transition.duration")}, border-color ${e("cascadeselect.transition.duration")}, outline-color ${e("cascadeselect.transition.duration")}, box-shadow ${e("cascadeselect.transition.duration")};
    border-radius: ${e("cascadeselect.border.radius")};
    outline-color: transparent;
    box-shadow: ${e("cascadeselect.shadow")};
}

.p-cascadeselect:not(.p-disabled):hover {
    border-color: ${e("cascadeselect.hover.border.color")};
}

.p-cascadeselect:not(.p-disabled).p-focus {
    border-color: ${e("cascadeselect.focus.border.color")};
    box-shadow: ${e("cascadeselect.focus.ring.shadow")};
    outline: ${e("cascadeselect.focus.ring.width")} ${e("cascadeselect.focus.ring.style")} ${e("cascadeselect.focus.ring.color")};
    outline-offset: ${e("cascadeselect.focus.ring.offset")};
}

.p-cascadeselect.p-variant-filled {
    background: ${e("cascadeselect.filled.background")};
}

.p-cascadeselect.p-variant-filled:not(.p-disabled):hover {
    background: ${e("cascadeselect.filled.hover.background")};
}

.p-cascadeselect.p-variant-filled.p-focus {
    background: ${e("cascadeselect.filled.focus.background")};
}

.p-cascadeselect.p-invalid {
    border-color: ${e("cascadeselect.invalid.border.color")};
}

.p-cascadeselect.p-disabled {
    opacity: 1;
    background: ${e("cascadeselect.disabled.background")};
}

.p-cascadeselect-dropdown {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    background: transparent;
    color: ${e("cascadeselect.dropdown.color")};
    width: ${e("cascadeselect.dropdown.width")};
    border-start-end-radius: ${e("border.radius.md")};
    border-end-end-radius: ${e("border.radius.md")};
}

.p-cascadeselect-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    color: ${e("cascadeselect.clear.icon.color")};
    inset-inline-end: ${e("cascadeselect.dropdown.width")};
}

.p-cascadeselect-label {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    flex: 1 1 auto;
    width: 1%;
    text-overflow: ellipsis;
    cursor: pointer;
    padding: ${e("cascadeselect.padding.y")} ${e("cascadeselect.padding.x")};
    background: transparent;
    border: 0 none;
    outline: 0 none;
}

.p-cascadeselect-label.p-placeholder {
    color: ${e("cascadeselect.placeholder.color")};
}

.p-cascadeselect.p-invalid .p-cascadeselect-label.p-placeholder {
    color: ${e("cascadeselect.invalid.placeholder.color")};
}

.p-cascadeselect.p-disabled .p-cascadeselect-label {
    color: ${e("cascadeselect.disabled.color")};
}

.p-cascadeselect-label-empty {
    overflow: hidden;
    visibility: hidden;
}

.p-cascadeselect-fluid {
    display: flex;
}

.p-cascadeselect-fluid .p-cascadeselect-label {
    width: 1%;
}

.p-cascadeselect-overlay {
    background: ${e("cascadeselect.overlay.background")};
    color: ${e("cascadeselect.overlay.color")};
    border: 1px solid ${e("cascadeselect.overlay.border.color")};
    border-radius: ${e("cascadeselect.overlay.border.radius")};
    box-shadow: ${e("cascadeselect.overlay.shadow")};
}

.p-cascadeselect .p-cascadeselect-overlay {
    min-width: 100%;
}

.p-cascadeselect-option-list {
    display: none;
    min-width: 100%;
    position: absolute;
    z-index: 1;
}

.p-cascadeselect-list {
    min-width: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;
    padding: ${e("cascadeselect.list.padding")};
    display: flex;
    flex-direction: column;
    gap: ${e("cascadeselect.list.gap")};
}

.p-cascadeselect-option {
    cursor: pointer;
    font-weight: normal;
    white-space: nowrap;
    border: 0 none;
    color: ${e("cascadeselect.option.color")};
    background: transparent;
    border-radius: ${e("cascadeselect.option.border.radius")};
}

.p-cascadeselect-option-active {
    overflow: visible;
}

.p-cascadeselect-option-active > .p-cascadeselect-option-content {
    background: ${e("cascadeselect.option.focus.background")};
    color: ${e("cascadeselect.option.focus.color")};
}

.p-cascadeselect-option:not(.p-cascadeselect-option-selected):not(.p-disabled).p-focus > .p-cascadeselect-option-content {
    background: ${e("cascadeselect.option.focus.background")};
    color: ${e("cascadeselect.option.focus.color")};
}

.p-cascadeselect-option:not(.p-cascadeselect-option-selected):not(.p-disabled).p-focus > .p-cascadeselect-option-content > .p-cascadeselect-group-icon-container > .p-cascadeselect-group-icon {
    color: ${e("cascadeselect.option.icon.focus.color")};
}

.p-cascadeselect-option-selected > .p-cascadeselect-option-content {
    background: ${e("cascadeselect.option.selected.background")};
    color: ${e("cascadeselect.option.selected.color")};
}

.p-cascadeselect-option-selected.p-focus > .p-cascadeselect-option-content {
    background: ${e("cascadeselect.option.selected.focus.background")};
    color: ${e("cascadeselect.option.selected.focus.color")};
}

.p-cascadeselect-option-active > .p-cascadeselect-option-list {
    inset-inline-start: 100%;
    inset-block-start: 0;
}

.p-cascadeselect-option-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
    position: relative;
    padding: ${e("cascadeselect.option.padding")};
    border-radius: ${e("cascadeselect.option.border.radius")};
    transition: background ${e("cascadeselect.transition.duration")}, color ${e("cascadeselect.transition.duration")}, border-color ${e("cascadeselect.transition.duration")}, box-shadow ${e("cascadeselect.transition.duration")}, outline-color ${e("cascadeselect.transition.duration")};
}

.p-cascadeselect-group-icon {
    font-size: ${e("cascadeselect.option.icon.size")};
    width: ${e("cascadeselect.option.icon.size")};
    height: ${e("cascadeselect.option.icon.size")};
    color: ${e("cascadeselect.option.icon.color")};
}

.p-cascadeselect-group-icon:dir(rtl) {
    transform: rotate(180deg);
}

.p-cascadeselect-mobile-active .p-cascadeselect-option-list {
    position: static;
    box-shadow: none;
    border: 0 none;
    padding-inline-start: ${e("tieredmenu.submenu.mobile.indent")};
    padding-inline-end: 0;
}

.p-cascadeselect-mobile-active .p-cascadeselect-group-icon {
    transition: transform 0.2s;
    transform: rotate(90deg);
}

.p-cascadeselect-mobile-active .p-cascadeselect-option-active > .p-cascadeselect-option-content .p-cascadeselect-group-icon {
    transform: rotate(-90deg);
}

.p-cascadeselect-sm .p-cascadeselect-label {
    font-size: ${e("cascadeselect.sm.font.size")};
    padding-block: ${e("cascadeselect.sm.padding.y")};
    padding-inline: ${e("cascadeselect.sm.padding.x")};
}

.p-cascadeselect-sm .p-cascadeselect-dropdown .p-icon {
    font-size: ${e("cascadeselect.sm.font.size")};
    width: ${e("cascadeselect.sm.font.size")};
    height: ${e("cascadeselect.sm.font.size")};
}

.p-cascadeselect-lg .p-cascadeselect-label {
    font-size: ${e("cascadeselect.lg.font.size")};
    padding-block: ${e("cascadeselect.lg.padding.y")};
    padding-inline: ${e("cascadeselect.lg.padding.x")};
}

.p-cascadeselect-lg .p-cascadeselect-dropdown .p-icon {
    font-size: ${e("cascadeselect.lg.font.size")};
    width: ${e("cascadeselect.lg.font.size")};
    height: ${e("cascadeselect.lg.font.size")};
}
`,fe={root:function(n){var t=n.props;return{position:t.appendTo==="self"?"relative":void 0}}},ve={root:function(n){var t=n.instance,i=n.props;return["p-cascadeselect p-component p-inputwrapper",{"p-cascadeselect-mobile":t.queryMatches,"p-disabled":i.disabled,"p-invalid":t.$invalid,"p-variant-filled":t.$variant==="filled","p-focus":t.focused,"p-inputwrapper-filled":t.$filled,"p-inputwrapper-focus":t.focused||t.overlayVisible,"p-cascadeselect-open":t.overlayVisible,"p-cascadeselect-fluid":t.$fluid,"p-cascadeselect-sm p-inputfield-sm":i.size==="small","p-cascadeselect-lg p-inputfield-lg":i.size==="large"}]},label:function(n){var t,i=n.instance,s=n.props;return["p-cascadeselect-label",{"p-placeholder":i.label===s.placeholder,"p-cascadeselect-label-empty":!i.$slots.value&&(i.label==="p-emptylabel"||((t=i.label)===null||t===void 0?void 0:t.length)===0)}]},clearIcon:"p-cascadeselect-clear-icon",dropdown:"p-cascadeselect-dropdown",loadingIcon:"p-cascadeselect-loading-icon",dropdownIcon:"p-cascadeselect-dropdown-icon",overlay:function(n){var t=n.instance;return["p-cascadeselect-overlay p-component",{"p-cascadeselect-mobile-active":t.queryMatches}]},listContainer:"p-cascadeselect-list-container",list:"p-cascadeselect-list",option:function(n){var t=n.instance,i=n.processedOption;return["p-cascadeselect-option",{"p-cascadeselect-option-active":t.isOptionActive(i),"p-cascadeselect-option-selected":t.isOptionSelected(i),"p-focus":t.isOptionFocused(i),"p-disabled":t.isOptionDisabled(i)}]},optionContent:"p-cascadeselect-option-content",optionText:"p-cascadeselect-option-text",groupIconContainer:"p-cascadeselect-group-icon-container",groupIcon:"p-cascadeselect-group-icon",optionList:"p-cascadeselect-overlay p-cascadeselect-option-list"},ye=H.extend({name:"cascadeselect",style:he,classes:ve,inlineStyles:fe}),be={name:"BaseCascadeSelect",extends:de,props:{options:Array,optionLabel:null,optionValue:null,optionDisabled:null,optionGroupLabel:null,optionGroupChildren:null,placeholder:String,breakpoint:{type:String,default:"960px"},dataKey:null,showClear:{type:Boolean,default:!1},clearIcon:{type:String,default:void 0},inputId:{type:String,default:null},inputClass:{type:[String,Object],default:null},inputStyle:{type:Object,default:null},inputProps:{type:null,default:null},panelClass:{type:[String,Object],default:null},panelStyle:{type:Object,default:null},panelProps:{type:null,default:null},overlayClass:{type:[String,Object],default:null},overlayStyle:{type:Object,default:null},overlayProps:{type:null,default:null},appendTo:{type:[String,Object],default:"body"},loading:{type:Boolean,default:!1},dropdownIcon:{type:String,default:void 0},loadingIcon:{type:String,default:void 0},optionGroupIcon:{type:String,default:void 0},autoOptionFocus:{type:Boolean,default:!1},selectOnFocus:{type:Boolean,default:!1},focusOnHover:{type:Boolean,default:!0},searchLocale:{type:String,default:void 0},searchMessage:{type:String,default:null},selectionMessage:{type:String,default:null},emptySelectionMessage:{type:String,default:null},emptySearchMessage:{type:String,default:null},emptyMessage:{type:String,default:null},tabindex:{type:Number,default:0},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:ye,provide:function(){return{$pcCascadeSelect:this,$parentInstance:this}}},B={name:"CascadeSelectSub",hostName:"CascadeSelect",extends:ue,emits:["option-change","option-focus-change","option-focus-enter-change"],container:null,props:{selectId:String,focusedOptionId:String,options:Array,optionLabel:String,optionValue:String,optionDisabled:null,optionGroupIcon:String,optionGroupLabel:String,optionGroupChildren:{type:[String,Array],default:null},activeOptionPath:Array,level:Number,templates:null,value:null},methods:{getOptionId:function(n){return"".concat(this.selectId,"_").concat(n.key)},getOptionLabel:function(n){return this.optionLabel?y(n.option,this.optionLabel):n.option},getOptionValue:function(n){return this.optionValue?y(n.option,this.optionValue):n.option},getPTOptions:function(n,t,i){return this.ptm(i,{context:{option:n,index:t,level:this.level,optionGroup:this.isOptionGroup(n),active:this.isOptionActive(n),focused:this.isOptionFocused(n),disabled:this.isOptionDisabled(n)}})},isOptionDisabled:function(n){return this.optionDisabled?y(n.option,this.optionDisabled):!1},getOptionGroupLabel:function(n){return this.optionGroupLabel?y(n.option,this.optionGroupLabel):null},getOptionGroupChildren:function(n){return n.children},isOptionGroup:function(n){return f(n.children)},isOptionSelected:function(n){return j(this.value,n==null?void 0:n.option)},isOptionActive:function(n){return this.activeOptionPath&&this.activeOptionPath.some(function(t){return t.key===n.key})},isOptionFocused:function(n){return this.focusedOptionId===this.getOptionId(n)},getOptionLabelToRender:function(n){return this.isOptionGroup(n)?this.getOptionGroupLabel(n):this.getOptionLabel(n)},onOptionClick:function(n,t){this.$emit("option-change",{originalEvent:n,processedOption:t,isFocus:!0})},onOptionMouseEnter:function(n,t){this.$emit("option-focus-enter-change",{originalEvent:n,processedOption:t})},onOptionMouseMove:function(n,t){this.$emit("option-focus-change",{originalEvent:n,processedOption:t})},containerRef:function(n){this.container=n},listAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.listLabel:void 0}},directives:{ripple:pe},components:{AngleRightIcon:R}},ge=["id","aria-label","aria-selected","aria-expanded","aria-level","aria-setsize","aria-posinset","data-p-option-group","data-p-active","data-p-focus","data-p-disabled"],Oe=["onClick","onMouseenter","onMousemove"];function me(e,n,t,i,s,o){var r=k("AngleRightIcon"),u=k("CascadeSelectSub",!0),h=Y("ripple");return d(),v("ul",l({ref:o.containerRef,class:e.cx("list")},t.level===0?e.ptm("list"):e.ptm("optionList")),[(d(!0),v(_,null,ee(t.options,function(a,c){return d(),v("li",l({key:o.getOptionLabelToRender(a),id:o.getOptionId(a),class:e.cx("option",{processedOption:a}),role:"treeitem","aria-label":o.getOptionLabelToRender(a),"aria-selected":o.isOptionGroup(a)?void 0:o.isOptionSelected(a),"aria-expanded":o.isOptionGroup(a)?o.isOptionActive(a):void 0,"aria-level":t.level+1,"aria-setsize":t.options.length,"aria-posinset":c+1,ref_for:!0},o.getPTOptions(a,c,"option"),{"data-p-option-group":o.isOptionGroup(a),"data-p-active":o.isOptionActive(a),"data-p-focus":o.isOptionFocused(a),"data-p-disabled":o.isOptionDisabled(a)}),[ne((d(),v("div",l({class:e.cx("optionContent"),onClick:function(b){return o.onOptionClick(b,a)},onMouseenter:function(b){return o.onOptionMouseEnter(b,a)},onMousemove:function(b){return o.onOptionMouseMove(b,a)},ref_for:!0},o.getPTOptions(a,c,"optionContent")),[t.templates.option?(d(),O(V(t.templates.option),{key:0,option:a.option,selected:o.isOptionGroup(a)?!1:o.isOptionSelected(a)},null,8,["option","selected"])):(d(),v("span",l({key:1,class:e.cx("optionText"),ref_for:!0},o.getPTOptions(a,c,"optionText")),K(o.getOptionLabelToRender(a)),17)),o.isOptionGroup(a)?(d(),v("span",{key:2,class:I(e.cx("groupIconContainer"))},[t.templates.optiongroupicon?(d(),O(V(t.templates.optiongroupicon),{key:0,class:I(e.cx("groupIcon"))},null,8,["class"])):t.optionGroupIcon?(d(),v("span",l({key:1,class:[e.cx("groupIcon"),t.optionGroupIcon],"aria-hidden":"true",ref_for:!0},o.getPTOptions(a,c,"groupIcon")),null,16)):(d(),O(r,l({key:2,class:e.cx("groupIcon"),"aria-hidden":"true",ref_for:!0},o.getPTOptions(a,c,"groupIcon")),null,16,["class"]))],2)):x("",!0)],16,Oe)),[[h]]),o.isOptionGroup(a)&&o.isOptionActive(a)?(d(),O(u,{key:0,role:"group",class:I(e.cx("optionList")),selectId:t.selectId,focusedOptionId:t.focusedOptionId,options:o.getOptionGroupChildren(a),activeOptionPath:t.activeOptionPath,level:t.level+1,templates:t.templates,optionLabel:t.optionLabel,optionValue:t.optionValue,optionDisabled:t.optionDisabled,optionGroupIcon:t.optionGroupIcon,optionGroupLabel:t.optionGroupLabel,optionGroupChildren:t.optionGroupChildren,value:t.value,onOptionChange:n[0]||(n[0]=function(p){return e.$emit("option-change",p)}),onOptionFocusChange:n[1]||(n[1]=function(p){return e.$emit("option-focus-change",p)}),onOptionFocusEnterChange:n[2]||(n[2]=function(p){return e.$emit("option-focus-enter-change",p)}),pt:e.pt,unstyled:e.unstyled},null,8,["class","selectId","focusedOptionId","options","activeOptionPath","level","templates","optionLabel","optionValue","optionDisabled","optionGroupIcon","optionGroupLabel","optionGroupChildren","value","pt","unstyled"])):x("",!0)],16,ge)}),128))],16)}B.render=me;function L(e){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},L(e)}function A(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,i)}return t}function M(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?A(Object(t),!0).forEach(function(i){Ie(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):A(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}function Ie(e,n,t){return(n=we(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function we(e){var n=ke(e,"string");return L(n)=="symbol"?n:n+""}function ke(e,n){if(L(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var i=t.call(e,n);if(L(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var Le={name:"CascadeSelect",extends:be,inheritAttrs:!1,emits:["change","focus","blur","click","group-change","before-show","before-hide","hide","show"],outsideClickListener:null,matchMediaListener:null,scrollHandler:null,resizeListener:null,overlay:null,searchTimeout:null,searchValue:null,data:function(){return{clicked:!1,focused:!1,focusedOptionInfo:{index:-1,level:0,parentKey:""},activeOptionPath:[],overlayVisible:!1,dirty:!1,mobileActive:!1,query:null,queryMatches:!1}},watch:{options:function(){this.autoUpdateModel()}},mounted:function(){this.autoUpdateModel(),this.bindMatchMediaListener()},beforeUnmount:function(){this.unbindOutsideClickListener(),this.unbindResizeListener(),this.unbindMatchMediaListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.overlay&&(E.clear(this.overlay),this.overlay=null),this.mobileActive&&(this.mobileActive=!1)},methods:{getOptionLabel:function(n){return this.optionLabel?y(n,this.optionLabel):n},getOptionValue:function(n){return this.optionValue?y(n,this.optionValue):n},isOptionDisabled:function(n){return this.optionDisabled?y(n,this.optionDisabled):!1},getOptionGroupLabel:function(n){return this.optionGroupLabel?y(n,this.optionGroupLabel):null},getOptionGroupChildren:function(n,t){return Q(this.optionGroupChildren)?y(n,this.optionGroupChildren):y(n,this.optionGroupChildren[t])},isOptionGroup:function(n,t){return Object.prototype.hasOwnProperty.call(n,this.optionGroupChildren[t])},getProccessedOptionLabel:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=this.isProccessedOptionGroup(n);return t?this.getOptionGroupLabel(n.option,n.level):this.getOptionLabel(n.option)},isProccessedOptionGroup:function(n){return f(n==null?void 0:n.children)},show:function(n){if(this.$emit("before-show"),this.overlayVisible=!0,this.activeOptionPath=this.$filled?this.findOptionPathByValue(this.d_value):this.activeOptionPath,this.$filled&&f(this.activeOptionPath)){var t=this.activeOptionPath[this.activeOptionPath.length-1];this.focusedOptionInfo={index:t.index,level:t.level,parentKey:t.parentKey}}else this.focusedOptionInfo={index:this.autoOptionFocus?this.findFirstFocusedOptionIndex():this.findSelectedOptionIndex(),level:0,parentKey:""};n&&P(this.$refs.focusInput)},hide:function(n){var t=this,i=function(){t.$emit("before-hide"),t.overlayVisible=!1,t.clicked=!1,t.activeOptionPath=[],t.focusedOptionInfo={index:-1,level:0,parentKey:""},n&&P(t.$refs.focusInput)};setTimeout(function(){i()},0)},onFocus:function(n){this.disabled||(this.focused=!0,this.$emit("focus",n))},onBlur:function(n){var t,i;this.focused=!1,this.focusedOptionInfo={index:-1,level:0,parentKey:""},this.searchValue="",this.$emit("blur",n),(t=(i=this.formField).onBlur)===null||t===void 0||t.call(i)},onKeyDown:function(n){if(this.disabled||this.loading){n.preventDefault();return}var t=n.metaKey||n.ctrlKey;switch(n.code){case"ArrowDown":this.onArrowDownKey(n);break;case"ArrowUp":this.onArrowUpKey(n);break;case"ArrowLeft":this.onArrowLeftKey(n);break;case"ArrowRight":this.onArrowRightKey(n);break;case"Home":this.onHomeKey(n);break;case"End":this.onEndKey(n);break;case"Space":this.onSpaceKey(n);break;case"Enter":case"NumpadEnter":this.onEnterKey(n);break;case"Escape":this.onEscapeKey(n);break;case"Tab":this.onTabKey(n);break;case"PageDown":case"PageUp":case"Backspace":case"ShiftLeft":case"ShiftRight":break;default:!t&&J(n.key)&&(!this.overlayVisible&&this.show(),this.searchOptions(n,n.key));break}this.clicked=!1},onOptionChange:function(n){var t=n.processedOption,i=n.type;if(!$(t)){var s=t.index,o=t.key,r=t.level,u=t.parentKey,h=t.children,a=f(h),c=this.activeOptionPath?this.activeOptionPath.filter(function(p){return p.parentKey!==u&&p.parentKey!==o}):[];this.focusedOptionInfo={index:s,level:r,parentKey:u},!(i=="hover"&&this.queryMatches)&&(a&&c.push(t),this.activeOptionPath=c)}},onOptionClick:function(n){var t=n.originalEvent,i=n.processedOption,s=n.isFocus,o=n.isHide,r=n.preventSelection,u=i.index,h=i.key,a=i.level,c=i.parentKey,p=this.isProccessedOptionGroup(i),b=this.isSelected(i);if(b)this.activeOptionPath=this.activeOptionPath.filter(function(C){return h!==C.key&&h.startsWith(C.key)}),this.focusedOptionInfo={index:u,level:a,parentKey:c};else if(p)this.onOptionChange(n),this.onOptionGroupSelect(t,i);else{var D=this.activeOptionPath.filter(function(C){return C.parentKey!==c});D.push(i),this.focusedOptionInfo={index:u,level:a,parentKey:c},(!r||(i==null?void 0:i.children.length)!==0)&&(this.activeOptionPath=D,this.onOptionSelect(t,i,o))}s&&P(this.$refs.focusInput)},onOptionMouseEnter:function(n){this.focusOnHover&&(n.processedOption.level===0&&(this.dirty=!0),this.dirty||!this.dirty&&f(this.d_value)?this.onOptionChange(M(M({},n),{},{type:"hover"})):!this.dirty&&n.processedOption.level===0&&this.onOptionClick(M(M({},n),{},{type:"hover"})))},onOptionMouseMove:function(n){this.focused&&this.focusOnHover&&this.changeFocusedOptionIndex(n,n.processedOption.index)},onOptionSelect:function(n,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0,s=this.getOptionValue(t==null?void 0:t.option);this.activeOptionPath.forEach(function(o){return o.selected=!0}),this.updateModel(n,s),i&&this.hide(!0)},onOptionGroupSelect:function(n,t){this.dirty=!0,this.$emit("group-change",{originalEvent:n,value:t.option})},onContainerClick:function(n){this.disabled||this.loading||n.target.getAttribute("data-pc-section")==="clearicon"||n.target.closest('[data-pc-section="clearicon"]')||((!this.overlay||!this.overlay.contains(n.target))&&(this.overlayVisible?this.hide():this.show(),P(this.$refs.focusInput)),this.clicked=!0,this.$emit("click",n))},onClearClick:function(n){this.updateModel(n,null)},onOverlayClick:function(n){le.emit("overlay-click",{originalEvent:n,target:this.$el})},onOverlayKeyDown:function(n){switch(n.code){case"Escape":this.onEscapeKey(n);break}},onArrowDownKey:function(n){if(!this.overlayVisible)this.show();else{var t=this.focusedOptionInfo.index!==-1?this.findNextOptionIndex(this.focusedOptionInfo.index):this.clicked?this.findFirstOptionIndex():this.findFirstFocusedOptionIndex();this.changeFocusedOptionIndex(n,t,!0)}n.preventDefault()},onArrowUpKey:function(n){if(n.altKey){if(this.focusedOptionInfo.index!==-1){var t=this.visibleOptions[this.focusedOptionInfo.index],i=this.isProccessedOptionGroup(t);!i&&this.onOptionChange({originalEvent:n,processedOption:t})}this.overlayVisible&&this.hide(),n.preventDefault()}else{var s=this.focusedOptionInfo.index!==-1?this.findPrevOptionIndex(this.focusedOptionInfo.index):this.clicked?this.findLastOptionIndex():this.findLastFocusedOptionIndex();this.changeFocusedOptionIndex(n,s,!0),!this.overlayVisible&&this.show(),n.preventDefault()}},onArrowLeftKey:function(n){var t=this;if(this.overlayVisible){var i=this.visibleOptions[this.focusedOptionInfo.index],s=this.activeOptionPath.find(function(u){return u.key===(i==null?void 0:i.parentKey)}),o=this.focusedOptionInfo.parentKey===""||s&&s.key===this.focusedOptionInfo.parentKey,r=$(i==null?void 0:i.parent);o&&(this.activeOptionPath=this.activeOptionPath.filter(function(u){return u.parentKey!==t.focusedOptionInfo.parentKey})),r||(this.focusedOptionInfo={index:-1,parentKey:s?s.parentKey:""},this.searchValue="",this.onArrowDownKey(n)),n.preventDefault()}},onArrowRightKey:function(n){if(this.overlayVisible){var t=this.visibleOptions[this.focusedOptionInfo.index],i=this.isProccessedOptionGroup(t);if(i){var s=this.activeOptionPath.some(function(o){return(t==null?void 0:t.key)===o.key});s?(this.focusedOptionInfo={index:-1,parentKey:t==null?void 0:t.key},this.searchValue="",this.onArrowDownKey(n)):this.onOptionChange({originalEvent:n,processedOption:t})}n.preventDefault()}},onHomeKey:function(n){this.changeFocusedOptionIndex(n,this.findFirstOptionIndex()),!this.overlayVisible&&this.show(),n.preventDefault()},onEndKey:function(n){this.changeFocusedOptionIndex(n,this.findLastOptionIndex()),!this.overlayVisible&&this.show(),n.preventDefault()},onEnterKey:function(n){if(!this.overlayVisible)this.focusedOptionInfo.index,this.onArrowDownKey(n);else if(this.focusedOptionInfo.index!==-1){var t=this.visibleOptions[this.focusedOptionInfo.index],i=this.isProccessedOptionGroup(t);this.onOptionClick({originalEvent:n,processedOption:t,preventSelection:!1}),!i&&this.hide()}n.preventDefault()},onSpaceKey:function(n){this.onEnterKey(n)},onEscapeKey:function(n){this.overlayVisible&&this.hide(!0),n.preventDefault()},onTabKey:function(n){if(this.focusedOptionInfo.index!==-1){var t=this.visibleOptions[this.focusedOptionInfo.index],i=this.isProccessedOptionGroup(t);!i&&this.onOptionChange({originalEvent:n,processedOption:t})}this.overlayVisible&&this.hide()},onOverlayEnter:function(n){E.set("overlay",n,this.$primevue.config.zIndex.overlay),X(n,{position:"absolute",top:"0"}),this.alignOverlay(),this.scrollInView()},onOverlayAfterEnter:function(){this.bindOutsideClickListener(),this.bindScrollListener(),this.bindResizeListener(),this.$emit("show")},onOverlayLeave:function(){this.unbindOutsideClickListener(),this.unbindScrollListener(),this.unbindResizeListener(),this.$emit("hide"),this.overlay=null,this.dirty=!1},onOverlayAfterLeave:function(n){E.clear(n)},alignOverlay:function(){this.appendTo==="self"?U(this.overlay,this.$el):(this.overlay.style.minWidth=W(this.$el)+"px",Z(this.overlay,this.$el))},bindOutsideClickListener:function(){var n=this;this.outsideClickListener||(this.outsideClickListener=function(t){n.overlayVisible&&n.overlay&&!n.$el.contains(t.target)&&!n.overlay.contains(t.target)&&n.hide()},document.addEventListener("click",this.outsideClickListener,!0))},unbindOutsideClickListener:function(){this.outsideClickListener&&(document.removeEventListener("click",this.outsideClickListener,!0),this.outsideClickListener=null)},bindScrollListener:function(){var n=this;this.scrollHandler||(this.scrollHandler=new oe(this.$refs.container,function(){n.overlayVisible&&n.hide()})),this.scrollHandler.bindScrollListener()},unbindScrollListener:function(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()},bindResizeListener:function(){var n=this;this.resizeListener||(this.resizeListener=function(){n.overlayVisible&&!q()&&n.hide()},window.addEventListener("resize",this.resizeListener))},unbindResizeListener:function(){this.resizeListener&&(window.removeEventListener("resize",this.resizeListener),this.resizeListener=null)},bindMatchMediaListener:function(){var n=this;if(!this.matchMediaListener){var t=matchMedia("(max-width: ".concat(this.breakpoint,")"));this.query=t,this.queryMatches=t.matches,this.matchMediaListener=function(){n.queryMatches=t.matches,n.mobileActive=!1},this.query.addEventListener("change",this.matchMediaListener)}},unbindMatchMediaListener:function(){this.matchMediaListener&&(this.query.removeEventListener("change",this.matchMediaListener),this.matchMediaListener=null)},isOptionMatched:function(n){var t;return this.isValidOption(n)&&((t=this.getProccessedOptionLabel(n))===null||t===void 0?void 0:t.toLocaleLowerCase(this.searchLocale).startsWith(this.searchValue.toLocaleLowerCase(this.searchLocale)))},isValidOption:function(n){return f(n)&&!this.isOptionDisabled(n.option)},isValidSelectedOption:function(n){return this.isValidOption(n)&&this.isSelected(n)},isSelected:function(n){return this.activeOptionPath&&this.activeOptionPath.some(function(t){return t.key===n.key})},findFirstOptionIndex:function(){var n=this;return this.visibleOptions.findIndex(function(t){return n.isValidOption(t)})},findLastOptionIndex:function(){var n=this;return T(this.visibleOptions,function(t){return n.isValidOption(t)})},findNextOptionIndex:function(n){var t=this,i=n<this.visibleOptions.length-1?this.visibleOptions.slice(n+1).findIndex(function(s){return t.isValidOption(s)}):-1;return i>-1?i+n+1:n},findPrevOptionIndex:function(n){var t=this,i=n>0?T(this.visibleOptions.slice(0,n),function(s){return t.isValidOption(s)}):-1;return i>-1?i:n},findSelectedOptionIndex:function(){var n=this;return this.visibleOptions.findIndex(function(t){return n.isValidSelectedOption(t)})},findFirstFocusedOptionIndex:function(){var n=this.findSelectedOptionIndex();return n<0?this.findFirstOptionIndex():n},findLastFocusedOptionIndex:function(){var n=this.findSelectedOptionIndex();return n<0?this.findLastOptionIndex():n},findOptionPathByValue:function(n,t){var i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;if(t=t||i===0&&this.processedOptions,!t)return null;if($(n))return[];for(var s=0;s<t.length;s++){var o=t[s];if(j(n,this.getOptionValue(o.option),this.equalityKey))return[o];var r=this.findOptionPathByValue(n,o.children,i+1);if(r)return r.unshift(o),r}},searchOptions:function(n,t){var i=this;this.searchValue=(this.searchValue||"")+t;var s=-1,o=!1;return f(this.searchValue)&&(this.focusedOptionInfo.index!==-1?(s=this.visibleOptions.slice(this.focusedOptionInfo.index).findIndex(function(r){return i.isOptionMatched(r)}),s=s===-1?this.visibleOptions.slice(0,this.focusedOptionInfo.index).findIndex(function(r){return i.isOptionMatched(r)}):s+this.focusedOptionInfo.index):s=this.visibleOptions.findIndex(function(r){return i.isOptionMatched(r)}),s!==-1&&(o=!0),s===-1&&this.focusedOptionInfo.index===-1&&(s=this.findFirstFocusedOptionIndex()),s!==-1&&this.changeFocusedOptionIndex(n,s)),this.searchTimeout&&clearTimeout(this.searchTimeout),this.searchTimeout=setTimeout(function(){i.searchValue="",i.searchTimeout=null},500),o},changeFocusedOptionIndex:function(n,t,i){this.focusedOptionInfo.index!==t&&(this.focusedOptionInfo.index=t,this.scrollInView(),this.focusOnHover&&this.onOptionClick({originalEvent:n,processedOption:this.visibleOptions[t],isHide:!1,preventSelection:i}),this.selectOnFocus&&this.onOptionChange({originalEvent:n,processedOption:this.visibleOptions[t],isHide:!1}))},scrollInView:function(){var n=this,t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:-1;this.$nextTick(function(){var i=t!==-1?"".concat(n.$id,"_").concat(t):n.focusedOptionId,s=N(n.list,'li[id="'.concat(i,'"]'));s&&s.scrollIntoView&&s.scrollIntoView({block:"nearest",inline:"start"})})},autoUpdateModel:function(){this.selectOnFocus&&this.autoOptionFocus&&!this.$filled&&(this.focusedOptionInfo.index=this.findFirstFocusedOptionIndex(),this.onOptionChange({processedOption:this.visibleOptions[this.focusedOptionInfo.index],isHide:!1}),!this.overlayVisible&&(this.focusedOptionInfo={index:-1,level:0,parentKey:""}))},updateModel:function(n,t){this.writeValue(t,n),this.$emit("change",{originalEvent:n,value:t})},createProcessedOptions:function(n){var t=this,i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,s=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"",r=[];return n&&n.forEach(function(u,h){var a=(o!==""?o+"_":"")+h,c={option:u,index:h,level:i,key:a,parent:s,parentKey:o};c.children=t.createProcessedOptions(t.getOptionGroupChildren(u,i),i+1,c,a),r.push(c)}),r},overlayRef:function(n){this.overlay=n}},computed:{hasSelectedOption:function(){return this.$filled},label:function(){var n=this.placeholder||"p-emptylabel";if(this.$filled){var t=this.findOptionPathByValue(this.d_value),i=f(t)?t[t.length-1]:null;return i?this.getOptionLabel(i.option):n}return n},processedOptions:function(){return this.createProcessedOptions(this.options||[])},visibleOptions:function(){var n=this,t=this.activeOptionPath&&this.activeOptionPath.find(function(i){return i.key===n.focusedOptionInfo.parentKey});return t?t.children:this.processedOptions},equalityKey:function(){return this.optionValue?null:this.dataKey},searchResultMessageText:function(){return f(this.visibleOptions)?this.searchMessageText.replaceAll("{0}",this.visibleOptions.length):this.emptySearchMessageText},searchMessageText:function(){return this.searchMessage||this.$primevue.config.locale.searchMessage||""},emptySearchMessageText:function(){return this.emptySearchMessage||this.$primevue.config.locale.emptySearchMessage||""},emptyMessageText:function(){return this.emptyMessage||this.$primevue.config.locale.emptyMessage||""},selectionMessageText:function(){return this.selectionMessage||this.$primevue.config.locale.selectionMessage||""},emptySelectionMessageText:function(){return this.emptySelectionMessage||this.$primevue.config.locale.emptySelectionMessage||""},selectedMessageText:function(){return this.$filled?this.selectionMessageText.replaceAll("{0}","1"):this.emptySelectionMessageText},focusedOptionId:function(){return this.focusedOptionInfo.index!==-1?"".concat(this.$id).concat(f(this.focusedOptionInfo.parentKey)?"_"+this.focusedOptionInfo.parentKey:"","_").concat(this.focusedOptionInfo.index):null},isClearIconVisible:function(){return this.showClear&&this.d_value!=null&&f(this.options)}},components:{CascadeSelectSub:B,Portal:ce,ChevronDownIcon:se,SpinnerIcon:ae,AngleRightIcon:R,TimesIcon:re}};function S(e){"@babel/helpers - typeof";return S=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},S(e)}function z(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable})),t.push.apply(t,i)}return t}function w(e){for(var n=1;n<arguments.length;n++){var t=arguments[n]!=null?arguments[n]:{};n%2?z(Object(t),!0).forEach(function(i){Se(e,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):z(Object(t)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(t,i))})}return e}function Se(e,n,t){return(n=Ce(n))in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function Ce(e){var n=Pe(e,"string");return S(n)=="symbol"?n:n+""}function Pe(e,n){if(S(e)!="object"||!e)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var i=t.call(e,n);if(S(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var Me=["id","disabled","placeholder","tabindex","aria-label","aria-labelledby","aria-expanded","aria-controls","aria-activedescendant","aria-invalid"];function Ke(e,n,t,i,s,o){var r=k("SpinnerIcon"),u=k("CascadeSelectSub"),h=k("Portal");return d(),v("div",l({ref:"container",class:e.cx("root"),style:e.sx("root"),onClick:n[5]||(n[5]=function(a){return o.onContainerClick(a)})},e.ptmi("root")),[g("div",l({class:"p-hidden-accessible"},e.ptm("hiddenInputContainer"),{"data-p-hidden-accessible":!0}),[g("input",l({ref:"focusInput",id:e.inputId,type:"text",class:e.inputClass,style:e.inputStyle,readonly:"",disabled:e.disabled,placeholder:e.placeholder,tabindex:e.disabled?-1:e.tabindex,role:"combobox","aria-label":e.ariaLabel,"aria-labelledby":e.ariaLabelledby,"aria-haspopup":"tree","aria-expanded":s.overlayVisible,"aria-controls":e.$id+"_tree","aria-activedescendant":s.focused?o.focusedOptionId:void 0,"aria-invalid":e.invalid||void 0,onFocus:n[0]||(n[0]=function(){return o.onFocus&&o.onFocus.apply(o,arguments)}),onBlur:n[1]||(n[1]=function(){return o.onBlur&&o.onBlur.apply(o,arguments)}),onKeydown:n[2]||(n[2]=function(){return o.onKeyDown&&o.onKeyDown.apply(o,arguments)})},w(w({},e.inputProps),e.ptm("hiddenInput"))),null,16,Me)],16),g("span",l({class:e.cx("label")},e.ptm("label")),[m(e.$slots,"value",{value:e.d_value,placeholder:e.placeholder},function(){return[te(K(o.label),1)]})],16),o.isClearIconVisible?m(e.$slots,"clearicon",{key:0,class:I(e.cx("clearIcon")),clearCallback:o.onClearClick},function(){return[(d(),O(V(e.clearIcon?"i":"TimesIcon"),l({ref:"clearIcon",class:[e.cx("clearIcon"),e.clearIcon],onClick:o.onClearClick},e.ptm("clearIcon"),{"data-pc-section":"clearicon"}),null,16,["class","onClick"]))]}):x("",!0),g("div",l({class:e.cx("dropdown"),role:"button",tabindex:"-1"},e.ptm("dropdown")),[e.loading?m(e.$slots,"loadingicon",{key:0,class:I(e.cx("loadingIcon"))},function(){return[e.loadingIcon?(d(),v("span",l({key:0,class:[e.cx("loadingIcon"),"pi-spin",e.loadingIcon],"aria-hidden":"true"},e.ptm("loadingIcon")),null,16)):(d(),O(r,l({key:1,class:e.cx("loadingIcon"),spin:"","aria-hidden":"true"},e.ptm("loadingIcon")),null,16,["class"]))]}):m(e.$slots,"dropdownicon",{key:1,class:I(e.cx("dropdownIcon"))},function(){return[(d(),O(V(e.dropdownIcon?"span":"ChevronDownIcon"),l({class:[e.cx("dropdownIcon"),e.dropdownIcon],"aria-hidden":"true"},e.ptm("dropdownIcon")),null,16,["class"]))]})],16),g("span",l({role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenSearchResult"),{"data-p-hidden-accessible":!0}),K(o.searchResultMessageText),17),G(h,{appendTo:e.appendTo},{default:F(function(){return[G(ie,l({name:"p-connected-overlay",onEnter:o.onOverlayEnter,onAfterEnter:o.onOverlayAfterEnter,onLeave:o.onOverlayLeave,onAfterLeave:o.onOverlayAfterLeave},e.ptm("transition")),{default:F(function(){return[s.overlayVisible?(d(),v("div",l({key:0,ref:o.overlayRef,class:[e.cx("overlay"),e.panelClass,e.overlayClass],style:[e.panelStyle,e.overlayStyle],onClick:n[3]||(n[3]=function(){return o.onOverlayClick&&o.onOverlayClick.apply(o,arguments)}),onKeydown:n[4]||(n[4]=function(){return o.onOverlayKeyDown&&o.onOverlayKeyDown.apply(o,arguments)})},w(w(w({},e.panelProps),e.overlayProps),e.ptm("overlay"))),[m(e.$slots,"header",{value:e.d_value,options:e.options}),g("div",l({class:e.cx("listContainer")},e.ptm("listContainer")),[G(u,{id:e.$id+"_tree",role:"tree","aria-orientation":"horizontal",selectId:e.$id,focusedOptionId:s.focused?o.focusedOptionId:void 0,options:o.processedOptions,activeOptionPath:s.activeOptionPath,level:0,templates:e.$slots,optionLabel:e.optionLabel,optionValue:e.optionValue,optionDisabled:e.optionDisabled,optionGroupIcon:e.optionGroupIcon,optionGroupLabel:e.optionGroupLabel,optionGroupChildren:e.optionGroupChildren,value:e.d_value,onOptionChange:o.onOptionClick,onOptionFocusChange:o.onOptionMouseMove,onOptionFocusEnterChange:o.onOptionMouseEnter,pt:e.pt,unstyled:e.unstyled},null,8,["id","selectId","focusedOptionId","options","activeOptionPath","templates","optionLabel","optionValue","optionDisabled","optionGroupIcon","optionGroupLabel","optionGroupChildren","value","onOptionChange","onOptionFocusChange","onOptionFocusEnterChange","pt","unstyled"])],16),g("span",l({role:"status","aria-live":"polite",class:"p-hidden-accessible"},e.ptm("hiddenSelectedMessage"),{"data-p-hidden-accessible":!0}),K(o.selectedMessageText),17),m(e.$slots,"footer",{value:e.d_value,options:e.options})],16)):x("",!0)]}),_:3},16,["onEnter","onAfterEnter","onLeave","onAfterLeave"])]}),_:3},8,["appendTo"])],16)}Le.render=Ke;export{Le as default};
